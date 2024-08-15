n.d(t, {
	Z: function () {
		return c;
	}
});
var i = n(503438),
	l = n(802856),
	r = n(420660),
	a = n(789407),
	s = n(974543),
	o = n(250889);
function c(e) {
	return (0, l.Z)(e)
		? o.H + e.name
		: (0, i.Z)(e) && null != e.party && null != e.party.id
			? a.r9.id
			: (0, r.Z)(e) && null != e.url
				? s._ + e.url
				: null != e.application_id
					? e.application_id
					: null;
}
