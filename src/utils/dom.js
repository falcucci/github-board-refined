import html from 'nanohtml'
import elementReady from 'element-ready'
import domLoaded from 'dom-loaded'

/* code from @sindresorhus
 * */
export const safeElementReady = selector => {
	const waiting = elementReady(selector)

	// Don't check ad-infinitum
	domLoaded.then(() => requestAnimationFrame(() => waiting.cancel()))

	// If cancelled, return null like a regular select() would
	return waiting.catch(() => null)
}

export const shouldProceed = () => {
  return !(
    document.title === 'Page not found · GitHub' ||
    document.title === 'Server Error · GitHub'
  )
}
