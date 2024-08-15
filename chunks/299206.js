n.d(t, {
	Z: function () {
		return u;
	}
});
var r = n(735250);
n(470079);
var i = n(512722),
	a = n.n(i),
	s = n(481060),
	o = n(695346),
	l = n(572004);
function u(e) {
	let {
			id: t,
			label: n,
			onSuccess: i,
			shiftId: u,
			showIconFirst: c,
			showWithoutDeveloperMode: d,
			focusedClassName: _
		} = e,
		E = o.Sb.useSetting();
	if (__OVERLAY__ || !(d || E) || !l.wS || null == t) return null;
	let f = 'devmode-copy-id-'.concat(t);
	return (0, r.jsx)(
		s.MenuItem,
		{
			id: f,
			label: n,
			action: function (e) {
				let n = null != u && e.shiftKey ? u : t;
				a()(null != n, 'cannot copy null text'), (0, l.JG)(n), null == i || i();
			},
			icon: s.IdIcon,
			showIconFirst: c,
			focusedClassName: _
		},
		f
	);
}
