import {h} from 'dom-chef'
import _ from 'lodash'
import select from 'select-dom'
import elementReady from 'element-ready'
import { Label } from '../components'

export const addLabels = async (target) => {
  await elementReady("task-lists", target);
  const history = select("task-lists", target)
  const hasCustomLabes = select.exists('#dynamical-labels', history)
  if (!hasCustomLabes && history) {
    const content = history.innerText
    const names = content.match(/{([^}]+)}/g)

    history.append(
      <span className="labels d-block pb-1" id="dynamical-labels">
        { names &&
          names.map(name => {
            return Label(name.substring(1, name.length - 1))
          })
        }
      </span>
    )
    hideLabels(history)
  }
}

export const hideLabels = async target => {
  const content = select('.js-comment-body', target)
  content.innerHTML = content.innerHTML.replace(/{([^}]+)}/g, '')
}
