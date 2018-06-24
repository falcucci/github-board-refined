import 'webext-dynamic-content-scripts'
import {
  safeElementReady,
  shouldProceed
} from './utils'
import {
  applyFullScreen,
  addRelatedPullRequest,
  addCardFeatures,
  addNoteTemplate
} from './features'

async function init() {
  await safeElementReady('body')
  if (!shouldProceed()) {
    return
  }

  addCardFeatures()
  addRelatedPullRequest()
  addNoteTemplate()
  // applyFullScreen()
}

init()
