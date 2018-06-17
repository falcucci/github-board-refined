import 'webext-dynamic-content-scripts'
import select from 'select-dom'
import { safeElementReady, shouldProceed } from './utils'
import { applyFullScreen, hideReferences } from './features'

async function init() {
  await safeElementReady('body')

  if (!shouldProceed()) {
    return
  }

  // applyFullScreen()

  hideReferences()

}

init()
