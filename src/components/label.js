import {h} from 'dom-chef'
import _ from 'lodash'


export const getRandomColor = () => {
  const colors = [
    '#6f42c1',
    '#EC407A'
  ]
  return colors[_.random(Math.floor(Math.random() * colors.length))]
}

export const Label = name => {
  return (
    <button
      type="button"
      className="btn-link css-truncate js-card-filter issue-card-label IssueLabel mt-1 v-align-middle labelstyle-ad2452 linked-labelstyle-ad2452  css-truncate css-truncate-target"
      style={{maxWidth: 150, backgroundColor: getRandomColor(), color: '#ffffff'}}
      data-card-filter={`label:${name}`}
      title={name}>
      <span className="css-truncate-target">
        {name}
      </span>
    </button>
  )
}
