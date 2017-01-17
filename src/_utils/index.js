import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import S from 'string';

const getHTML = raw => {
	const contentState = convertFromRaw(raw);
	return stateToHTML(contentState);
}

const getShort = raw => {
	const short = S(getHTML(raw))
			.stripTags()
			.decodeHTMLEntities()
			.trim().s
			.replace(/[\n\r]+/g, ' ')
	return S(short).truncate(200).s
}

export {
	getHTML,
	getShort
}
