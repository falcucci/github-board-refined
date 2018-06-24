import {h} from 'dom-chef'
import _ from 'lodash'
import select from 'select-dom'
import { observe } from 'selector-observer'

export const addTemplate = target => {
  const value = (
    `Title here! 📝\n\n<details>\n<summary>\nDetails\n</summary>\n\nPut your description!`
  )
  target.setAttribute("rows", "10");
  target.value = value
}

export const addNoteTemplate = () => {
  observe(".js-project-note-form.js-length-limited-input-container [name='note']", {
    add(el) {
      el.addEventListener('load', addTemplate(el))
    },
  })
}

