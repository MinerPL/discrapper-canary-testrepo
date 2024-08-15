n(47120);
var r = n(735250),
	i = n(470079),
	a = n(442837),
	s = n(481060),
	o = n(92114),
	l = n(194359),
	u = n(367907),
	c = n(138201),
	d = n(592125),
	_ = n(699516),
	E = n(9156),
	f = n(594174),
	h = n(621600),
	p = n(981631),
	I = n(689938);
t.Z = (e) => {
	let { userId: t, reportId: n, showBlock: m, showMute: T } = e,
		g = d.Z.getDMFromUserId(t),
		S = (0, a.e7)([E.ZP], () => (null == g ? null : E.ZP.isChannelMuted(null, g))),
		[A, N] = i.useState(null != S && S),
		[v, O] = i.useState(!1),
		R = (0, a.e7)([f.default], () => f.default.getUser(t), [t]),
		C = (0, a.e7)([_.Z], () => _.Z.getRelationshipType(t), [t]) === p.OGo.BLOCKED;
	i.useEffect(() => {
		O(C);
	}, [C]);
	let y = i.useCallback(() => {
			O(!0),
				u.ZP.trackWithMetadata(p.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
					other_user_id: t,
					report_id: n
				}),
				l.Z.addRelationship({
					userId: t,
					context: { location: 'ReportMenuBlockUser-iOS' },
					type: p.OGo.BLOCKED
				});
		}, [t, n]),
		D = i.useCallback(() => {
			null != g &&
				(N(!0),
				u.ZP.trackWithMetadata(p.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
					other_user_id: t,
					report_id: n
				}),
				o.Z.updateChannelOverrideSettings(null, g, { muted: !0 }, h.ZB.Muted));
		}, [g, t, n]),
		L = T || m;
	return null != R && L
		? (0, r.jsxs)(r.Fragment, {
				children: [
					m &&
						(0, r.jsx)(c.Z, {
							title: I.Z.Messages.IAR_UPSELLS_BLOCK_TITLE.format({ username: R.username }),
							description: I.Z.Messages.IAR_UPSELLS_BLOCK_DESCRIPTION,
							buttonText: v ? I.Z.Messages.IAR_UPSELLS_BLOCKED_BUTTON : I.Z.Messages.IAR_UPSELLS_BLOCK_BUTTON,
							buttonDisabled: v,
							onButtonPress: y,
							buttonColor: s.Button.Colors.RED
						}),
					T &&
						(0, r.jsx)(c.Z, {
							title: I.Z.Messages.IAR_UPSELLS_MUTE_TITLE.format({ username: R.username }),
							description: I.Z.Messages.IAR_UPSELLS_MUTE_DESCRIPTION,
							buttonText: A ? I.Z.Messages.IAR_UPSELLS_MUTED_BUTTON : I.Z.Messages.IAR_UPSELLS_MUTE_BUTTON,
							buttonDisabled: A,
							onButtonPress: D
						})
				]
			})
		: null;
};
