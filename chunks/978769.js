n.d(t, {
	Z: function () {
		return u;
	}
});
var i = n(735250);
n(470079);
var l = n(442837),
	r = n(481060),
	a = n(709369),
	s = n(885110),
	o = n(870569),
	c = n(689938);
function u() {
	return null == (0, l.e7)([s.Z], () => s.Z.getBroadcast())
		? null
		: (0, i.jsx)(r.Popout, {
				position: 'top',
				renderPopout: (e) => {
					let { closePopout: t } = e;
					return (0, i.jsx)(a.Z, { onClose: t });
				},
				animation: r.Popout.Animation.FADE,
				children: (e) =>
					(0, i.jsx)(o.Z, {
						...e,
						tooltipText: c.Z.Messages.BROADCAST_SETTINGS,
						icon: r.SettingsIcon
					})
			});
}
