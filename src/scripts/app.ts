/*!
 * FrontBox Static 0.1.0
 * Copyright Bartosz Piwek
 * https://github.com/BartoszPiwek/FrontBox-Static
 */
import "./app/polyfill";
export const vh = require('vh-check')();

window.onload = () => {

	/* Inform stylesheet to remove style fallback for JavaScript elements */
	document.documentElement.classList.remove("isLoading");
};
