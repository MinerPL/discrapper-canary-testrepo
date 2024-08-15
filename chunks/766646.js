n.d(t, {
	n: function () {
		return o;
	}
});
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(476889);
function o(e) {
	let { id: t, tag: n = 'span', showOnFocus: i, children: o } = e;
	return (0, r.jsx)(n, {
		id: t,
		className: a()({
			[s.hiddenVisually]: !i,
			[s.showOnFocus]: i
		}),
		children: o
	});
}
