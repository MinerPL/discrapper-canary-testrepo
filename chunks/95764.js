n.d(t, {
	Z: function () {
		return E;
	}
});
var i = n(735250);
n(470079);
var a = n(442837),
	s = n(481060),
	l = n(40851),
	r = n(889161),
	o = n(390322),
	c = n(871499),
	u = n(592125),
	d = n(15274),
	h = n(482241),
	m = n(389303),
	p = n(554747),
	_ = n(689938),
	f = n(513128);
function E(e) {
	let { channelId: t, onClick: n } = e,
		E = (0, l.bp)(),
		g = (0, p.qY)(t),
		C = (0, a.e7)([u.Z], () => u.Z.getChannel(t), [t]),
		{ canManageGuildEvent: I } = (0, r.XJ)(C),
		x = I(g);
	if (null == g) return null;
	let T = () => {
			if (null != C && (0, m.Z)(C)) {
				(0, d.lC)(C, E);
				return;
			}
			n();
		},
		N = () => {
			h.Z.endEvent(g.id, g.guild_id);
		};
	return x
		? (0, i.jsx)(s.Popout, {
				renderPopout: (e) => {
					let { closePopout: t } = e;
					return (0, i.jsx)(o.Z, {
						children: (0, i.jsx)(s.Menu, {
							navId: 'exit-options',
							onSelect: () => {},
							'aria-label': _.Z.Messages.DISCONNECT_MENU,
							onClose: t,
							children: (0, i.jsx)(s.MenuItem, {
								id: 'end-voice-event',
								color: 'danger',
								action: N,
								label: _.Z.Messages.END_EVENT,
								icon: s.CircleXIcon
							})
						})
					});
				},
				align: 'center',
				position: 'top',
				animation: s.Popout.Animation.FADE,
				children: (e) => {
					let { onClick: t } = e;
					return (0, i.jsx)(c.d, {
						label: _.Z.Messages.DISCONNECT_SELF,
						color: 'red',
						iconComponent: s.PhoneHangUpIcon,
						onClick: T,
						onPopoutClick: t,
						className: f.buttonSpacing
					});
				}
			})
		: (0, i.jsx)(c.d, {
				className: f.buttonSpacing,
				label: _.Z.Messages.DISCONNECT_SELF,
				color: 'red',
				iconComponent: s.PhoneHangUpIcon,
				onClick: n
			});
}
