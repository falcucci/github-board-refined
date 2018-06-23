import 'webext-dynamic-content-scripts'
import {
  safeElementReady,
  shouldProceed
} from './utils'
import {
  applyFullScreen,
  hideReferences,
  addRelatedPullRequest,
  addCardFeatures
} from './features'

async function init() {
  await safeElementReady('body')
  if (!shouldProceed()) {
    return
  }

  addCardFeatures()
  hideReferences()
  addRelatedPullRequest()
  // applyFullScreen()
}

init()
