import {h} from 'dom-chef'

export const forms = {
  previewForm: (authenticityToken, previewToken, uploadToken) => {
    return (
      <div id="note-form-injected"
        className="js-suggester-container js-previewable-comment-form previewable-comment-form write-selected"
        data-preview-url="/preview?markdown_unsupported=false&repository=136762146&subject=0&subject_type=Issue"
        data-preview-authenticity-token={previewToken}>
        <div className="comment-form-head tabnav">
          <markdown-toolbar for="card_note_text" className="toolbar-commenting">
            <div className="toolbar-group">
              <md-header
                tabIndex={-1}
                className="toolbar-item tooltipped tooltipped-n"
                aria-label="Add header text"
                data-ga-click="Markdown Toolbar, click, header" role="button">
                <svg
                  className="octicon octicon-text-size"
                  viewBox="0 0 18 16"
                  version="1.1"
                  width={18}
                  height={16}
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M13.62 9.08L12.1 3.66h-.06l-1.5 5.42h3.08zM5.7 10.13S4.68 6.52 4.53 6.02h-.08l-1.13 4.11H5.7zM17.31 14h-2.25l-.95-3.25h-4.07L9.09 14H6.84l-.69-2.33H2.87L2.17 14H0l3.3-9.59h2.5l2.17 6.34L10.86 2h2.52l3.94 12h-.01z" />
                </svg>
              </md-header>
              <md-bold
                tabIndex={-1}
                className="toolbar-item tooltipped tooltipped-n"
                aria-label="Add bold text <cmd-b>"
                  data-ga-click="Markdown Toolbar, click, bold"
                  hotkey="b"
                  role="button">
                  <svg className="octicon octicon-bold" viewBox="0 0 10 16" version="1.1" width={10} height={16} aria-hidden="true"><path fillRule="evenodd" d="M1 2h3.83c2.48 0 4.3.75 4.3 2.95 0 1.14-.63 2.23-1.67 2.61v.06c1.33.3 2.3 1.23 2.3 2.86 0 2.39-1.97 3.52-4.61 3.52H1V2zm3.66 4.95c1.67 0 2.38-.66 2.38-1.69 0-1.17-.78-1.61-2.34-1.61H3.13v3.3h1.53zm.27 5.39c1.77 0 2.75-.64 2.75-1.98 0-1.27-.95-1.81-2.75-1.81h-1.8v3.8h1.8v-.01z" /></svg>
                </md-bold>
                <md-italic
                  tabIndex={-1}
                  className="toolbar-item tooltipped tooltipped-n"
                  aria-label="Add italic text <cmd-i>"
                    data-ga-click="Markdown Toolbar, click, italic"
                    hotkey="i"
                    role="button">
                    <svg className="octicon octicon-italic" viewBox="0 0 6 16" version="1.1" width={6} height={16} aria-hidden="true"><path fillRule="evenodd" d="M2.81 5h1.98L3 14H1l1.81-9zm.36-2.7c0-.7.58-1.3 1.33-1.3.56 0 1.13.38 1.13 1.03 0 .75-.59 1.3-1.33 1.3-.58 0-1.13-.38-1.13-1.03z" /></svg>
                  </md-italic>
                </div>
                <div className="toolbar-group">
                  <md-quote
                    tabIndex={-1}
                    className="toolbar-item tooltipped tooltipped-n"
                    aria-label="Insert a quote"
                    data-ga-click="Markdown Toolbar, click, quote"
                    role="button">
                    <svg className="octicon octicon-quote" viewBox="0 0 14 16" version="1.1" width={14} height={16} aria-hidden="true"><path fillRule="evenodd" d="M6.16 3.5C3.73 5.06 2.55 6.67 2.55 9.36c.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.9 0-2.99-1.52-2.99-4.25 0-3.8 1.75-6.53 5.02-8.42L6.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.89 0-2.98-1.52-2.98-4.25 0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z" /></svg>
                  </md-quote>
                  <md-code
                    tabIndex={-1}
                    className="toolbar-item tooltipped tooltipped-n"
                    aria-label="Insert code" data-ga-click="Markdown Toolbar, click, code"
                    role="button">
                    <svg className="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width={14} height={16} aria-hidden="true"><path fillRule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z" /></svg>
                  </md-code>
                  <md-link
                    tabIndex={-1}
                    className="toolbar-item tooltipped tooltipped-n"
                    aria-label="Add a link <cmd-k>"
                      data-ga-click="Markdown Toolbar, click, link" hotkey="k" role="button">
                      <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width={16} height={16} aria-hidden="true"><path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" /></svg>
                    </md-link>
                  </div>
                  <div className="toolbar-group">
                    <md-unordered-list tabIndex={-1} className="toolbar-item tooltipped tooltipped-n" aria-label="Add a bulleted list" data-ga-click="Markdown Toolbar, click, unordered list" role="button">
                      <svg className="octicon octicon-list-unordered" viewBox="0 0 12 16" version="1.1" width={12} height={16} aria-hidden="true"><path fillRule="evenodd" d="M2 13c0 .59 0 1-.59 1H.59C0 14 0 13.59 0 13c0-.59 0-1 .59-1h.81c.59 0 .59.41.59 1H2zm2.59-9h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1H4.59C4 2 4 2.41 4 3c0 .59 0 1 .59 1zM1.41 7H.59C0 7 0 7.41 0 8c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm0-5H.59C0 2 0 2.41 0 3c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm10 5H4.59C4 7 4 7.41 4 8c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm0 5H4.59C4 12 4 12.41 4 13c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01z" /></svg>
                    </md-unordered-list>
                    <md-ordered-list tabIndex={-1} className="toolbar-item tooltipped tooltipped-n" aria-label="Add a numbered list" data-ga-click="Markdown Toolbar, click, ordered list" role="button">
                      <svg className="octicon octicon-list-ordered" viewBox="0 0 12 16" version="1.1" width={12} height={16} aria-hidden="true"><path fillRule="evenodd" d="M12 12.99c0 .589 0 .998-.59.998H4.596c-.59 0-.59-.41-.59-.999 0-.59 0-.999.59-.999H11.4c.59 0 .59.41.59 1H12zM4.596 3.996H11.4c.59 0 .59-.41.59-1 0-.589 0-.999-.59-.999H4.596c-.59 0-.59.41-.59 1 0 .589 0 .999.59.999zM11.4 6.994H4.596c-.59 0-.59.41-.59 1 0 .589 0 .999.59.999H11.4c.59 0 .59-.41.59-1 0-.59 0-.999-.59-.999zM2.008 1h-.72C.99 1.19.71 1.25.26 1.34V2h.75v2.138H.17v.859h2.837v-.86h-.999V1zm.25 8.123c-.17 0-.45.03-.66.06.53-.56 1.14-1.249 1.14-1.888-.02-.78-.56-1.299-1.36-1.299-.589 0-.968.2-1.378.64l.58.579c.19-.19.38-.38.639-.38.28 0 .48.16.48.52 0 .53-.77 1.199-1.699 2.058v.58h2.998l-.09-.88h-.66l.01.01zm-.08 3.777v-.03c.44-.19.64-.47.64-.859 0-.7-.56-1.11-1.44-1.11-.479 0-.888.19-1.278.52l.55.64c.25-.2.44-.31.689-.31.27 0 .42.13.42.36 0 .27-.2.44-.86.44v.749c.83 0 .98.17.98.47 0 .25-.23.38-.58.38-.28 0-.56-.14-.81-.38l-.479.659c.3.36.77.56 1.409.56.83 0 1.529-.41 1.529-1.16 0-.5-.31-.809-.77-.939v.01z" /></svg>
                    </md-ordered-list>
                    <md-task-list tabIndex={-1} className="toolbar-item tooltipped tooltipped-n" aria-label="Add a task list" data-ga-click="Markdown Toolbar, click, task list" hotkey="L" role="button">
                      <svg className="octicon octicon-tasklist" viewBox="0 0 16 16" version="1.1" width={16} height={16} aria-hidden="true"><path fillRule="evenodd" d="M15.41 9H7.59C7 9 7 8.59 7 8c0-.59 0-1 .59-1h7.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM9.59 4C9 4 9 3.59 9 3c0-.59 0-1 .59-1h5.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1H9.59zM0 3.91l1.41-1.3L3 4.2 7.09 0 8.5 1.41 3 6.91l-3-3zM7.59 12h7.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1H7.59C7 14 7 13.59 7 13c0-.59 0-1 .59-1z" /></svg>
                    </md-task-list>
                  </div>
                  <div className="toolbar-group">
                    <md-mention tabIndex={-1} className="toolbar-item tooltipped tooltipped-nw" aria-label="Directly mention a user or team" data-ga-click="Markdown Toolbar, click, mention" role="button">
                      <svg className="octicon octicon-mention" viewBox="0 0 14 16" version="1.1" width={14} height={16} aria-hidden="true"><path fillRule="evenodd" d="M6.58 15c1.25 0 2.52-.31 3.56-.94l-.42-.94c-.84.52-1.89.83-3.03.83-3.23 0-5.64-2.08-5.64-5.72 0-4.37 3.23-7.18 6.58-7.18 3.45 0 5.22 2.19 5.22 5.2 0 2.39-1.34 3.86-2.5 3.86-1.05 0-1.36-.73-1.05-2.19l.73-3.75H8.98l-.11.72c-.41-.63-.94-.83-1.56-.83-2.19 0-3.66 2.39-3.66 4.38 0 1.67.94 2.61 2.3 2.61.84 0 1.67-.53 2.3-1.25.11.94.94 1.45 1.98 1.45 1.67 0 3.77-1.67 3.77-5C14 2.61 11.59 0 7.83 0 3.66 0 0 3.33 0 8.33 0 12.71 2.92 15 6.58 15zm-.31-5c-.73 0-1.36-.52-1.36-1.67 0-1.45.94-3.22 2.41-3.22.52 0 .84.2 1.25.83l-.52 3.02c-.63.73-1.25 1.05-1.78 1.05V10z" /></svg>
                    </md-mention>
                    <md-ref tabIndex={-1} className="toolbar-item tooltipped tooltipped-nw" aria-label="Reference an issue or pull request" data-ga-click="Markdown Toolbar, click, reference" role="button">
                      <svg className="octicon octicon-bookmark" viewBox="0 0 10 16" version="1.1" width={10} height={16} aria-hidden="true"><path fillRule="evenodd" d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z" /></svg>
                    </md-ref>
                    <div className="toolbar-item select-menu select-menu-modal-right js-menu-container js-select-menu js-load-contents js-saved-reply-container" data-contents-url="/settings/replies?context=new_issue">
                      <button type="button" tabIndex={-1} className="js-menu-target menu-target tooltipped tooltipped-nw" aria-label="Insert a reply" aria-expanded="false" aria-haspopup="true" data-ga-click="Markdown Toolbar, click, saved reply">
                        <svg className="octicon octicon-reply" viewBox="0 0 14 16" version="1.1" width={14} height={16} aria-hidden="true"><path fillRule="evenodd" d="M6 3.5c3.92.44 8 3.125 8 10-2.312-5.062-4.75-6-8-6V11L.5 5.5 6 0v3.5z" /></svg>
                        <span className="dropdown-caret" />
                      </button>
                      <div className="select-menu-modal-holder js-menu-content js-navigation-container">
                        <div className="select-menu-modal">
                          <div className="select-menu-header d-flex">
                            <span className="select-menu-title flex-auto">Select a reply</span>
                            <code><span className="border rounded-1 p-1 mr-2">ctrl .</span></code>
                            <svg className="octicon octicon-x js-menu-close d-none" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width={12} height={16}><path fillRule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z" /></svg>
                          </div>
                          <div className="js-select-menu-deferred-content" />
                          <div className="select-menu-loading-overlay anim-pulse">
                            <svg className="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width={16} height={16} aria-hidden="true"><path fillRule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z" /></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </markdown-toolbar>
                <nav className="tabnav-tabs" role="tablist">
                  <button type="button" className="btn-link tabnav-tab write-tab js-write-tab selected " role="tab" aria-selected="true">Write</button>
                  <button type="button" className="btn-link tabnav-tab preview-tab js-preview-tab " role="tab">Preview</button>
                </nav>
              </div>
              <div className="comment-form-error js-comment-form-error" style={{display: 'none'}}>    There was an error creating your Issue.
              </div>
              <div
                className="write-content js-write-bucket js-uploadable-container js-upload-markdown-image is-default upload-enabled"
                data-upload-policy-url="/upload/policies/assets"
                data-upload-policy-authenticity-token={uploadToken}
                data-upload-repository-id={136762146}>
                <input name="saved_reply_id" className="js-saved-reply-id js-resettable-field" defaultValue data-reset-value type="hidden" />
                <textarea name="project_card[note]" id="card_note_text" placeholder="Leave a comment" aria-label="Comment body" className="form-control input-contrast comment-form-textarea js-comment-field js-task-list-field js-quick-submit js-size-to-fit js-suggester-field js-quote-selection-target js-session-resumable js-saved-reply-shortcut-comment-field" defaultValue={""} />
                <p className="drag-and-drop position-relative">
                  <input accept=".gif,.jpeg,.jpg,.png,.docx,.gz,.log,.pdf,.pptx,.txt,.xlsx,.zip" multiple="multiple" className="manual-file-chooser top-0 right-0 bottom-0 left-0 width-full ml-0 js-manual-file-chooser" aria-label="Attach files to your comment" type="file" />
                  <span className="default">
                    Attach files by dragging &amp; dropping,
                    <span className="btn-link manual-file-chooser-text">selecting them</span>, or pasting
                    from the clipboard.
                  </span>
                  <span className="loading">
                    <img alt src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width={16} height={16} /> Uploading your files…
                  </span>
                  <span className="error bad-file">
                    We don’t support that file type.
                    <span className="drag-and-drop-error-info">
                      <button type="button" className="btn-link manual-file-chooser-text">Try again</button> with a
                      GIF, JPEG, JPG, PNG, DOCX, GZ, LOG, PDF, PPTX, TXT, XLSX or ZIP.
                    </span>
                  </span>
                  <span className="error bad-permissions">
                    Attaching documents requires write permission to this repository.
                    <span className="drag-and-drop-error-info">
                      <button type="button" className="btn-link manual-file-chooser-text">Try again</button> with a GIF, JPEG, JPG, PNG, DOCX, GZ, LOG, PDF, PPTX, TXT, XLSX or ZIP.
                    </span>
                  </span>
                  <span className="error repository-required">
                    We don’t support that file type.
                    <span className="drag-and-drop-error-info">
                      <button type="button" className="btn-link manual-file-chooser-text">Try again</button> with a GIF, JPEG, JPG, PNG, DOCX, GZ, LOG, PDF, PPTX, TXT, XLSX or ZIP.
                    </span>
                  </span>
                  <span className="error too-big">
                    Yowza, that’s a big file
                    <span className="drag-and-drop-error-info">
                      <button type="button" className="btn-link manual-file-chooser-text">Try again</button> with a file smaller than 10MB.
                    </span>
                  </span>
                  <span className="error empty">
                    This file is empty.
                    <span className="drag-and-drop-error-info">
                      <button type="button" className="btn-link manual-file-chooser-text">Try again</button> with a file that’s not empty.
                    </span>
                  </span>
                  <span className="error hidden-file">
                    This file is hidden.
                    <span className="drag-and-drop-error-info">
                      <button type="button" className="btn-link manual-file-chooser-text">Try again</button> with another file.
                    </span>
                  </span>
                  <span className="error failed-request">
                    Something went really wrong, and we can’t process that file.
                    <span className="drag-and-drop-error-info">
                      <button type="button" className="btn-link manual-file-chooser-text">Try again.</button>
                    </span>
                  </span>
                </p>
                <div className="suggester-container">
                  <div className="suggester js-suggester js-navigation-container" data-url="/suggestions/issue?repository=github-board-refined&user_id=falcucci" data-log-mention-url="/suggestions/log_mention?repository=github-board-refined&user_id=falcucci" data-log-mention-authenticity-token="BzjTghqKWJR734AQidmnjZBEDT0KkoD1n29+fFOwgvJe3jRYtFFKIJ/E860fcHGKoNFycDTg5hkAsCOzVlXLzQ==">
                  </div>
                </div>
              </div>
              <div className="preview-content">
                <div className="comment">
                  <div className="comment-body markdown-body js-preview-body">
                    <p>Nothing to preview</p>
                  </div>
                </div>
              </div>
              <div className="float-right">
                <a className="tabnav-extra" href="https://guides.github.com/features/mastering-markdown/" target="_blank" data-ga-click="Markdown Toolbar, click, help">
                  <svg className="octicon octicon-markdown v-align-bottom" viewBox="0 0 16 16" version="1.1" width={16} height={16} aria-hidden="true"><path fillRule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z" /></svg>
                  Styling with Markdown is supported
                </a>
              </div>
              <div className="comment-form-error comment-form-bottom js-comment-update-error" />
            </div>
    )
  }
}
