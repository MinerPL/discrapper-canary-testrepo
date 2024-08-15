t.d(s, {
	Z: function () {
		return g;
	}
});
var n = t(735250);
t(470079);
var i = t(913527),
	l = t.n(i),
	a = t(399606),
	r = t(481060),
	o = t(92114),
	d = t(430824),
	c = t(9156),
	u = t(621600),
	h = t(423589),
	N = t(969943),
	S = t(689938),
	E = t(700042);
function g(e) {
	var s;
	let { guildId: t } = e,
		i = (0, a.e7)([d.Z], () => d.Z.getGuild(t)),
		g = (0, a.e7)([c.ZP], () => c.ZP.isMuted(t)),
		m = (0, a.e7)([c.ZP], () => c.ZP.getMuteConfig(t));
	return null == i
		? null
		: (0, n.jsxs)(r.FormItem, {
				children: [
					(0, n.jsx)(r.FormSwitch, {
						hideBorder: !0,
						value: g,
						onChange: (e) => {
							o.Z.updateGuildNotificationSettings(t, { muted: e }, u.UE.muted(e));
						},
						style: { marginBottom: 0 },
						note: S.Z.Messages.FOR_LABEL_MUTE_SEVER_DESCRIPTION_V2,
						children: S.Z.Messages.FORM_LABEL_MUTE_SERVER.format({ name: i.name })
					}),
					g &&
						(0, n.jsxs)('div', {
							className: E.mutedConfig,
							children: [
								(0, n.jsxs)('div', {
									children: [
										(0, n.jsx)(r.FormTitle, {
											tag: 'h3',
											children: S.Z.Messages.MUTE_UNTIL
										}),
										(0, n.jsx)(r.Text, {
											variant: 'text-xs/normal',
											color: 'text-muted',
											children: (function (e) {
												return null == e || null == e.end_time
													? null
													: S.Z.Messages.MUTED_UNTIL_TIME.format({
															endTime: new Date(e.end_time).toLocaleString(S.Z.getLocale(), {
																month: 'numeric',
																day: 'numeric',
																hour: 'numeric',
																minute: '2-digit'
															})
														});
											})(m)
										})
									]
								}),
								(0, n.jsx)(r.SingleSelect, {
									onChange: (e) => {
										let s = e > 0 ? l()().add(e, 'second').toISOString() : null;
										o.Z.updateGuildNotificationSettings(
											t,
											{
												mute_config: {
													selected_time_window: e,
													end_time: s
												},
												muted: !0
											},
											u.ZB.Muted
										);
									},
									options: (0, h.W9)(),
									value: null !== (s = null == m ? void 0 : m.selected_time_window) && void 0 !== s ? s : N.Oe.ALWAYS
								})
							]
						})
				]
			});
}
