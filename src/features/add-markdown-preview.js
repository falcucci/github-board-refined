import {h} from 'dom-chef'
import _ from 'lodash'
import select from 'select-dom'
import { observe } from 'selector-observer'
import {
  icons,
  safeElementReady,
  api,
  forms
} from '../utils'

export const  addMarkdownPreview = () => {
  observe(".facebox-content.project-modal", {
    add(el) {
      addPreview(el)
      // el.addEventListener('DOMAttrModified', addPreview(el))
    },
  })
}

export const addPreview = el => {
  const textArea = select('textarea', el)
  if (textArea.id !== 'card_note_text') {
    return
  }
  const content = textArea.value
  const currentForm = select('.form-group', el)
  currentForm.after(forms.previewForm())
  currentForm.remove()
  select('textarea', el).value = content
}
