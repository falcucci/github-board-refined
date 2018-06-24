import select from 'select-dom'

export const hideReferences = (target) => {
  const reference  = select('.Details', target)
  reference.classList.remove("Details--on");
};
