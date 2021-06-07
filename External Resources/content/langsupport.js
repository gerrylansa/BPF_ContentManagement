var PORTALIZE = {
	languageVersion: 1622675047000
};

Object.defineProperty(PORTALIZE, "language", {
	get: function() {
		if (localStorage['BPF.LANGUAGE.OVERRIDE']) {
			languageOverride = localStorage['BPF.LANGUAGE.OVERRIDE'];
		} else {
			languageOverride = 'en-AU';
			localStorage['BPF.LANGUAGE.OVERRIDE'] = languageOverride;
		}
		return languageOverride;
	}
});