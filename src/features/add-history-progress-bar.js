import {h} from 'dom-chef'
import _ from 'lodash'
import select from 'select-dom'

export const addHistoryProgressBar = async (target) => {
  const history = select("task-lists", target)
  if (history) {
    const relatedBoards = select.all(".Details > .Details-content--hidden .js-project-issue-details-container", target)
    const totalPercent = relatedBoards.length * 100
    let donePercent = select.all('.bg-green', relatedBoards)
    let percentages = []
    if (donePercent) {
      donePercent.map(item => {
        percentages.push(Number(item.style.width.replace('%', '')))
      })
    }
    let totalHistoryPercent = percentages.reduce((p1, p2) => p1 + p2) * 100 / totalPercent
    history.append(
      <div class="ml-10">
        <div class="js-socket-channel js-updatable-content">
          <div class="tooltipped tooltipped-s">
            <span class="progress-bar progress-bar-small">
              <span class="progress d-inline-block bg-green" style={{ width: `${totalHistoryPercent}%`}}>&nbsp;</span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

