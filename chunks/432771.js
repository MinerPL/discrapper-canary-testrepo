n.d(t, {
	c: function () {
		return l;
	}
});
var i = n(913527),
	a = n.n(i),
	s = n(709054);
let l = (e) => {
	let t = s.default.extractTimestamp(e);
	return !a()().isBefore(a()(t).add(a().duration(15, 'days')));
};
