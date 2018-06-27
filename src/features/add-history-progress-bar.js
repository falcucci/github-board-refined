import {h} from 'dom-chef'
import _ from 'lodash'
import select from 'select-dom'
import elementReady from 'element-ready'

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
  await elementReady("task-lists", target);
  const history = select("task-lists", target)
  const hasProgress = select.exists('#progress-bar-percentage', history)
  const references = select.all(".Details > .Details-content--hidden .js-project-issue-details-container", target)
  if (!hasProgress && history && !_.isEmpty(references)) {
    const totalPercentage = await getCardPercentage(references)
    history.append(
      <div className="ml-10" id="progress-bar-percentage">
        <div className="js-socket-channel js-updatable-content">
          <div className="tooltipped tooltipped-s">
            <span className="progress-bar progress-bar-small">
              <span className="progress d-inline-block bg-green" style={{ width: `${totalPercentage}%`}}>&nbsp;</span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

