n.d(t, {
	Z: function () {
		return p;
	}
});
var i = n(735250);
n(470079);
var s = n(481060),
	a = n(13245),
	o = n(872810),
	r = n(312839),
	l = n(593481),
	c = n(436088),
	d = n(134598),
	u = n(987650),
	h = n(689938);
function p(e) {
	let { game: t } = e,
		{ trackView: n, trackClick: p } = (0, r.R)(u.n0.StartBroadcastNotification, {
			notif_type: u.n0.StartBroadcastNotification
		});
	return {
		colorScheme: l.IC.PRIMARY,
		title: null,
		body: h.Z.Messages.START_BROADCAST_NOTIFICATION_BODY,
		icon: (0, i.jsx)(c.Z, {}),
		renderFooter: () =>
			(0, i.jsx)(s.Button, {
				color: s.Button.Colors.GREEN,
				size: s.Button.Sizes.SMALL,
				fullWidth: !0,
				children: h.Z.Messages.START_BROADCAST_NOTIFICATION_CTA
			}),
		onNotificationShow: () => {
			n();
		},
		onNotificationClick: (e, n) => {
			p('unlock'),
				a.Z.updateNotificationStatus(n),
				a.Z.setInstanceLocked(!1),
				(0, d.X)(h.Z.Messages.START_BROADCASTING, h.Z.Messages.START_BROADCASTING_CTA, () => {
					(0, o.tE)({ pid: t.pid });
				});
		},
		onDismissClick: () => {
			p('dismiss');
		}
	};
}
