n.d(t, {
	Z: function () {
		return c;
	}
});
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(481060),
	o = n(871499),
	l = n(689938),
	u = n(95664);
function c(e) {
	let { popoutOpen: t, onClosePopout: n, onOpenPopout: i, ...c } = e,
		d = t ? l.Z.Messages.POPOUT_RETURN : l.Z.Messages.POPOUT_PLAYER;
	return (0, r.jsx)(o.Z, {
		label: d,
		onClick: t ? n : i,
		iconComponent: s.WindowLaunchIcon,
		iconClassName: a()({ [u.popIn]: t }),
		...c
	});
}
