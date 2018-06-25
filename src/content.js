import 'webext-dynamic-content-scripts'
import {
  safeElementReady,
  shouldProceed
} from './utils'
import {
  applyFullScreen,
  addRelatedPullRequest,
  addCardFeatures,
  addNoteTemplate,
  addMarkdownPreview,
} from './features'

async function init() {
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
