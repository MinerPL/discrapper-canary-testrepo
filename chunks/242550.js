n.d(t, {
	l: function () {
		return a;
	}
});
var r = n(182823),
	i = n(612001);
function a(e, t) {
	let n = (0, r.zL)(e, { labelable: !0 }),
		{ hoverProps: a } = (0, i.XI)({
			onHoverStart: () => (null == t ? void 0 : t.open(!0)),
			onHoverEnd: () => (null == t ? void 0 : t.close())
		});
	return { tooltipProps: (0, r.dG)(n, a, { role: 'tooltip' }) };
}
n(470079);
