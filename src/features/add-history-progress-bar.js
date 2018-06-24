import {h} from 'dom-chef'
import _ from 'lodash'
import select from 'select-dom'

const getCardPercentage = async refs => {
  let totalPercent = refs.length || 0
  let donePercent = '0%'
  let totalHistoryPercent = 0
  let percentages = []
  /* get issues refs in the note */
  const issues = select.all('.octicon-issue-closed', refs)
  const boards = select.all('.octicon-project', refs)
  if (!_.isEmpty(boards)) {
    totalPercent = totalPercent * 100
    donePercent = select.all('.bg-green', refs)
    if (donePercent) {
      donePercent.map(item => {
        percentages.push(Number(item.style.width.replace('%', '')))
      })
    }
    totalHistoryPercent = percentages.reduce((p1, p2) => p1 + p2) * 100 / totalPercent
  } else {
    totalHistoryPercent = issues.length * 100 / totalPercent
  }
  return totalHistoryPercent
}

export const addHistoryProgressBar = async (target) => {
  const history = select("task-lists", target)
  const references = select.all(".Details > .Details-content--hidden .js-project-issue-details-container", target)
  if (history && !_.isEmpty(references)) {
    const totalPercentage = await getCardPercentage(references)
    history.append(
      <div class="ml-10" id="progress-bar-percentage">
        <div class="js-socket-channel js-updatable-content">
          <div class="tooltipped tooltipped-s">
            <span class="progress-bar progress-bar-small">
              <span class="progress d-inline-block bg-green" style={{ width: `${totalPercentage}%`}}>&nbsp;</span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

