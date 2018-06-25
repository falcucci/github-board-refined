import 'webext-dynamic-content-scripts'
import {
  safeElementReady,
  shouldProceed,
} from './utils'
import {
  applyFullScreen,
  addRelatedPullRequest,
  addCardFeatures,
  addNoteTemplate,
  addMarkdownPreview,
} from './features'

const init = async () => {
  import select from 'select-dom'
  await safeElementReady('body')
  if (!shouldProceed()) {
    return
  }
  microAjax("https://github.com/falcucci/github-board-refined/issues/2/show_from_project", function (res) {
    var div = document.createElement('div');
    div.innerHTML = res.trim();
    console.log('div.firstChild: ', div.firstChild);

    // let a = select('.js-suggester-container', div)
    // console.log('a: ', a);

  })
  addCardFeatures()
  addRelatedPullRequest()
  addNoteTemplate()
  addMarkdownPreview()
  // applyFullScreen()
}

init()
