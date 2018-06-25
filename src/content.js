import 'webext-dynamic-content-scripts'
import select from 'select-dom'
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
  await safeElementReady('body')
  if (!shouldProceed()) {
    return
  }
  addCardFeatures()
  addRelatedPullRequest()
  addNoteTemplate()
  addMarkdownPreview()
  // applyFullScreen()
}

init()
