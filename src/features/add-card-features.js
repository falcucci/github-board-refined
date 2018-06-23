import { observe } from 'selector-observer'
import { addHistoryProgressBar }from './add-history-progress-bar'

export const addCardFeatures = async () => {

  observe("div[id^='card-']", {
    add(el) {
      addHistoryProgressBar(el)
      // el.addEventListener('onshow', addProgressBar)
    },
  })

}
