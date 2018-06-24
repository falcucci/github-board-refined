import {h} from 'dom-chef'
import _ from 'lodash'
import select from 'select-dom'
import { observe } from 'selector-observer'
import { icons, safeElementReady, api } from '../utils'

export const addRelatedPullRequest = async () => {
  observe("a[class^='h5 d-block lh-condensed mb-1 mr-5']", {
    add(el) {
      el.addEventListener('click', addBtn)
    },
  })
}

export const addBtn = async ({target}) => {
  const url = target.attributes.getNamedItem('href').value
  const urlParts = url.split('/');
  const references = await api(url + '/timeline')
  let prLink = ''
  let inView = false
  let shouldAdd = false
  let interval = setInterval(() => {
    shouldAdd = !select.exists('.project-pane .js-socket-channel .TableObject-item')
    inView = select.exists('.project-pane .js-socket-channel .Details-content--shown')
    if (inView && shouldAdd) {
      clearInterval(interval)
      for (const reference of references) {
        if (
          reference.event === "cross-referenced" &&
          _.has(reference, 'source.issue.pull_request.html_url')) {
          prLink = reference.source.issue.pull_request.html_url
          const prSplit = prLink.split('/');
          const prNumber = prSplit[prSplit.length - 1];
          select('.project-pane .js-socket-channel .Details-content--shown')
            .after(
              <div class="TableObject-item">
                <a
                  href={prLink}
                  target="__blank"
                  class="btn
                  btn-outline
                  btn-sm
                  border-blue
                  rgh-closing-pr
                  tooltipped
                  tooltipped-se">
                  {icons.openPullRequest()} #{prNumber}
                </a>
              </div>
            );
        }
      }
    }
  }, 20)
};
