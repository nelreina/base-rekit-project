import React, { PureComponent } from 'react';
import { Editor } from 'react-draft-wysiwyg';

import {  EditorState, convertFromRaw } from 'draft-js';

export default class EditorView extends PureComponent {

  render() {
		let editorState = EditorState.createEmpty();
		const { raw } = this.props;
		if (raw) {
			editorState = EditorState.createWithContent(convertFromRaw(raw))
		}
    return (
      <div className="">
        <Editor
					toolbarOnFocus
					readOnly={true}
					editorState={editorState}
					/>
      </div>
    );
	}
}
