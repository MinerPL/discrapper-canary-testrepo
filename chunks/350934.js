var r = n(424706),
	i = n(14160),
	a = n(247123),
	o = n(207662);
t.Z = {
	id: 'alt-text',
	selector: 'img, [role="img"]',
	tags: ['wcag2a', 'wcag111', 'section508', 'section508.22.a', 'ACT'],
	metadata: {
		description: 'Images must have alternative text.',
		help: ''
	},
	check: function (e) {
		if ('' === (0, r.AB)(e))
			return ('IMG' === e.tagName && e.hasAttribute('alt')) || (0, o.Uu)(e) || !(0, i.p)(e)
				? a.w
				: 'Image has no alternative text';
		return a.w;
	}
};
