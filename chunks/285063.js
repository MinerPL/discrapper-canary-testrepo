n.d(t, {
	Z: function () {
		return o;
	}
});
var r = n(735250);
n(470079);
var i = n(481060),
	a = n(916752),
	s = n(910212);
function o(e) {
	let { node: t } = e,
		n = (0, a.Z)(t);
	return (0, r.jsx)(i.Tooltip, {
		text: t.full,
		tooltipClassName: s.timestampTooltip,
		children: (e) =>
			(0, r.jsx)('span', {
				...e,
				className: s.timestamp,
				children: n
			})
	});
}
