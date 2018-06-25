import _ from 'lodash'
import select from 'select-dom'

export const hideReferences = (target) => {
  const reference  = select('.Details', target)
  if (reference) {
    reference.classList.remove("Details--on");
  }
};
