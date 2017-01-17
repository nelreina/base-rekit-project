import React, { PureComponent } from 'react';
import {Editor, EditorState, convertFromRaw} from 'draft-js';

export default class EditorView extends PureComponent {

  render() {
		let editorState = EditorState.createEmpty();
		const { draftjs } = this.props;
		if (draftjs) {
			editorState = EditorState.createWithContent(convertFromRaw(draftjs))
		}
    return (
      <div className="">
        <Editor readOnly={true} editorState={editorState} />
      </div>
    );
	}
}
