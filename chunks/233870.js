n.d(t, {
	T: function () {
		return l;
	}
}),
	n(733860);
var i = n(392711),
	a = n.n(i),
	s = n(823379);
function l(e, t) {
	return a()(e)
		.map(t.getUser)
		.unshift(t.getCurrentUser())
		.filter(s.lm)
		.sortBy((e) => e.username.toLowerCase())
		.value();
}
