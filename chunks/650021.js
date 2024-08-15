var r = n(424706),
	i = n(14160),
	a = n(247123),
	o = n(207662);
t.Z = {
	id: 'input-label',
	selector: 'input, textarea, select, [role="checkbox"], [role="radio"], [role="radiogroup"], [role="searchbox"], [role="slider"], [role="textbox"], [role="combobox"]',
	tags: ['wcag2a', 'wcag131', 'wcag412', 'section508', 'section508.22.a', 'ACT'],
	metadata: {
		description: 'Form inputs require a label',
		help: 'Please provide a name for this input with a HTML label, aria-label, or aria-labelledby.'
	},
	check: function (e) {
		if ('' === (0, r.AB)(e)) return (0, o.Uu)(e) || !(0, i.p)(e) ? a.w : 'Form input has no label';
		return a.w;
	}
};
