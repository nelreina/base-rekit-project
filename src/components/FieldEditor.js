import React, { PureComponent } from 'react';
import {Editor, EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import { Segment } from 'semantic-ui-react';

const style = {
	border: "solid #ddd 1px",
	marginBottom: 20,
	borderRadius: 5,
	padding: 15,
	minHeight: 200
}

export default class UiFieldEditor extends PureComponent {
	constructor(props) {
		super(props);
		if (props.input.value) {
			this.state = {
				editorState: EditorState.createWithContent(convertFromRaw(draftjs))
			}
		} else {
			this.state = {editorState: EditorState.createEmpty()};
		}
	}

	onChange = (editorState) => {
		const { input } = this.props;
		input.onChange(convertToRaw(editorState.getCurrentContent()));
		this.setState({editorState});
	}

	render() {
		const { input } = this.props;
		const { editorState } = this.state;
		return (
			<div style={style} className="common-ui-field-editor">
				<Editor  {...input}  onChange={this.onChange} editorState={editorState} />
			</div>
		);
	}
}
