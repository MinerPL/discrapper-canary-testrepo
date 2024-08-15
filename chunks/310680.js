n.d(t, {
	Z: function () {
		return function e(t) {
			return ['html', 'body', '#document'].indexOf((0, a.Z)(t)) >= 0
				? t.ownerDocument.body
				: (0, s.Re)(t) && (0, i.Z)(t)
					? t
					: e((0, r.Z)(t));
		};
	}
});
var r = n(660027),
	i = n(538018),
	a = n(316138),
	s = n(882159);
