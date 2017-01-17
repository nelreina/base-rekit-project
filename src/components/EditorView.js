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
		// toolbarOnFocus
    return (
      <div className="">
        <Editor
					readOnly={true}
					editorState={editorState}
					toolbarStyle={{display: 'none'}}
					/>
      </div>
    );
	}
}
