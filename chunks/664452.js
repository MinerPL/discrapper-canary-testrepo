t.r(s),
	t.d(s, {
		default: function () {
			return T;
		}
	}),
	t(47120);
var n = t(735250),
	o = t(470079),
	a = t(831209),
	i = t(442837),
	r = t(481060),
	l = t(688465),
	d = t(430824),
	c = t(626135),
	_ = t(369994),
	x = t(162157),
	C = t(533244),
	E = t(487419),
	I = t(821312),
	u = t(676770),
	N = t(981631),
	D = t(689938),
	h = t(387410);
function T(e) {
	let { guildId: s, transitionState: t, onClose: T, analyticsData: A } = e,
		L = (0, i.e7)([d.Z], () => d.Z.getGuild(s), [s]),
		M = !!(null == L ? void 0 : L.hasFeature(N.oNc.INVITES_DISABLED)),
		[S] = o.useState(!1),
		[O, R] = o.useState(u.Fl),
		p = (0, i.e7)([E.Z], () => E.Z.getGuildIncident(s)),
		m = (0, x.BT)(L),
		j = (0, C.SG)(p) || M,
		g = (0, C.sN)(p),
		[v, k] = o.useState(j),
		[B, Z] = o.useState(g),
		[G, K] = o.useState(!1),
		U = v !== j || B !== g || G,
		b = M && !m;
	if (null == L) return T(), null;
	function f() {
		k((e) => !e);
	}
	return (0, n.jsxs)(r.ModalRoot, {
		transitionState: t,
		size: r.ModalSize.MEDIUM,
		children: [
			(0, n.jsx)(r.ModalHeader, {
				separator: !0,
				children: (0, n.jsxs)('div', {
					className: h.headerContainer,
					children: [
						(0, n.jsx)(r.LockIcon, {
							size: 'xs',
							color: a.Z.INTERACTIVE_NORMAL
						}),
						(0, n.jsx)(r.Heading, {
							color: 'header-primary',
							variant: 'heading-md/semibold',
							children: D.Z.Messages.GUILD_SERVER_LOCKDOWN_TITLE
						}),
						(0, n.jsx)(l.Z, {})
					]
				})
			}),
			(0, n.jsx)(r.ModalContent, {
				children: (0, n.jsxs)('div', {
					className: h.mainContainer,
					children: [
						(0, n.jsx)(r.Select, {
							placeholder: D.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
							options: (0, u.c1)(),
							select: (e) => {
								R(e), K(!0);
							},
							isSelected: (e) => e === O,
							serialize: (e) => String(e)
						}),
						(0, n.jsxs)('div', {
							className: h.pauseContainer,
							children: [
								(0, n.jsxs)('div', {
									className: h.pauseText,
									children: [
										(0, n.jsx)(r.Text, {
											variant: 'text-md/semibold',
											color: 'header-primary',
											children: D.Z.Messages.DISABLE_INVITES
										}),
										(0, n.jsx)(r.Text, {
											variant: 'text-sm/normal',
											color: 'text-muted',
											children: D.Z.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
										})
									]
								}),
								(0, n.jsx)(r.Tooltip, {
									text: D.Z.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
									shouldShow: M,
									children: (e) =>
										(0, n.jsx)('div', {
											...e,
											children: (0, n.jsx)(r.Switch, {
												className: h.toggle,
												onChange: f,
												checked: v,
												disabled: b
											})
										})
								})
							]
						}),
						(0, n.jsxs)('div', {
							className: h.pauseContainer,
							children: [
								(0, n.jsxs)('div', {
									className: h.pauseText,
									children: [
										(0, n.jsx)(r.Text, {
											variant: 'text-md/semibold',
											color: 'header-primary',
											children: D.Z.Messages.DISABLE_DMS
										}),
										(0, n.jsx)(r.Text, {
											variant: 'text-sm/normal',
											color: 'text-muted',
											children: D.Z.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
										})
									]
								}),
								(0, n.jsx)(r.Switch, {
									className: h.toggle,
									onChange: function () {
										Z((e) => !e);
									},
									checked: B
								})
							]
						})
					]
				})
			}),
			(0, n.jsxs)(r.ModalFooter, {
				children: [
					(0, n.jsx)(r.Button, {
						onClick: () => {
							(j || g) && !v && !B
								? ((0, _.n)(L.id, !1, !1),
									(0, r.openModalLazy)(() =>
										Promise.resolve((e) =>
											(0, n.jsx)(I.Z, {
												...e,
												guildId: s
											})
										)
									))
								: (0, _.n)(L.id, v, B, O);
							let { source: e, alertType: t, messageId: o } = A;
							c.default.track(N.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
								guild_id: s,
								source: e,
								raid_alert_id: o,
								raid_alert_type: t,
								intervention_type_enabled: (0, C.sO)(v, B),
								intervention_type_disabled: (0, C.lk)(v, B),
								duration: 60 * O
							}),
								T();
						},
						color: r.Button.Colors.BRAND,
						look: r.Button.Looks.FILLED,
						submitting: S,
						disabled: !U,
						children: D.Z.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
					}),
					(0, n.jsx)(r.Button, {
						onClick: T,
						color: r.Button.Colors.PRIMARY,
						look: r.Button.Looks.LINK,
						disabled: S,
						children: D.Z.Messages.CANCEL
					})
				]
			})
		]
	});
}
