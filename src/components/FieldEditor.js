import React, { PureComponent } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import { Segment } from 'semantic-ui-react';

const wrapperStyle = {
	border: "solid #ddd 1px",
	marginBottom: 20,
	borderRadius: 5,
	padding: 15,
}
const editorStyle = {
	minHeight: 400
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
		const { input, placeholder } = this.props;
		const { editorState } = this.state;
		return (
			// <div style={style} className="common-ui-field-editor">
				<Editor
					wrapperStyle={wrapperStyle}
					editorStyle={editorStyle}
					// toolbarOnFocus
					{...input}
					onEditorStateChange={this.onChange}
					editorState={editorState}
					placeholder={placeholder}
				/>
			// </div>
		);
	}
}
