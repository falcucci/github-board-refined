import {h} from 'dom-chef'
import _ from 'lodash'
import select from 'select-dom'
import { observe } from 'selector-observer'
import {
  icons,
  safeElementReady,
  api,
  fetchHtml,
  forms
} from '../utils'

export const addMarkdownPreview = () => {
  observe(".facebox-content.project-modal", {
    add(el) {
      addPreview(el)
      // el.addEventListener('DOMAttrModified', addPreview(el))
    },
  })
}

export const addPreview = async el => {
  const textArea = select('textarea', el)
  if (textArea.id !== 'card_note_text') {
    return
  }
  const content = textArea.value
  const currentForm = select('.form-group', el)
  const html = await fetchHtml("https://github.com/falcucci/github-board-refined/issues/2/show_from_project")
  const elementToken = select('.js-suggester-container', html);
  const previewToken = elementToken.attributes.getNamedItem('data-preview-authenticity-token').value
  currentForm.after(forms.previewForm(previewToken))
  currentForm.remove()
  select('textarea', el).value = content
}
