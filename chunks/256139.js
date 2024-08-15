l.d(n, {
	Z: function () {
		return s;
	}
});
var t = l(735250),
	r = l(120356),
	i = l.n(r),
	a = l(481060),
	u = l(671656);
function s(e) {
	let { className: n, onClick: l, ...r } = e;
	return (0, t.jsx)(a.Clickable, {
		...r,
		className: i()(null != l && u.clickable, n),
		onClick: l
	});
}
