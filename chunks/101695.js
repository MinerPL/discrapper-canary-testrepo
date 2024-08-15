n.d(t, {
	Z: function () {
		return l;
	}
});
var i = n(735250);
n(470079);
var a = n(481060),
	s = n(395255);
function l(e) {
	let { changePage: t, offset: n, totalResults: l, pageLength: r } = e,
		o = Math.floor(n / r) + 1;
	return (0, i.jsx)('div', {
		className: s.container,
		children: (0, i.jsx)(a.Paginator, {
			currentPage: o,
			totalCount: l,
			pageSize: r,
			onPageChange: t,
			maxVisiblePages: 5
		})
	});
}
