n.d(t, {
	Z: function () {
		return o;
	}
});
var i = n(735250);
n(470079);
var a = n(481060),
	s = n(26151),
	l = n(871499),
	r = n(689938);
function o(e) {
	let { channel: t, ...n } = e;
	return (0, i.jsx)(l.d, {
		...n,
		iconComponent: a.XSmallIcon,
		label: r.Z.Messages.DISMISS,
		onClick: () => s.Z.stopRinging(t.id)
	});
}
