import 'webext-dynamic-content-scripts'
import select from 'select-dom'
import {
  safeElementReady,
  shouldProceed,
  fetchHtml
} from './utils'
import {
  applyFullScreen,
  addRelatedPullRequest,
  addCardFeatures,
  addNoteTemplate,
  addMarkdownPreview,
} from './features'

const init = async () => {
  await safeElementReady('body')
  if (!shouldProceed()) {
    return
  }
  // let token = fetchHtml("https://github.com/falcucci/github-board-refined/issues/2/show_from_project")
  // console.log('token: ', token);
  addCardFeatures()
  addRelatedPullRequest()
  addNoteTemplate()
  addMarkdownPreview()
  // applyFullScreen()
}

init()
