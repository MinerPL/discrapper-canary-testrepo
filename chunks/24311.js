n.d(t, {
	Z: function () {
		return f;
	}
});
var r = n(735250);
n(470079);
var i = n(442837),
	a = n(481060),
	s = n(493683),
	o = n(740492),
	l = n(314897),
	u = n(592125),
	c = n(699516),
	d = n(944486),
	_ = n(981631),
	E = n(689938);
function f(e) {
	let { user: t, context: f, label: h, joinCallVideo: p, id: I, onCall: m } = e,
		T = l.default.getId(),
		g = f === _.IlC.POPOUT,
		S = (0, i.e7)([d.Z, u.Z], () => d.Z.getVoiceChannelId() === u.Z.getDMFromUserId(t.id)),
		A = (0, i.e7)([c.Z], () => c.Z.isBlocked(t.id));
	if (T === t.id || g || S || t.bot) return null;
	let N = () => {
			null == m || m(), s.Z.openPrivateChannel(t.id, !0, p);
		},
		v = !o.ZP.disableCallUserConfirmationPrompt;
	return (0, r.jsx)(a.MenuItem, {
		id: null != I ? I : 'call',
		label: null != h ? h : E.Z.Messages.CALL,
		action: v
			? () => {
					(0, a.openModalLazy)(async () => {
						let { default: e } = await n.e('27157').then(n.bind(n, 736454));
						return (t) =>
							(0, r.jsx)(e, {
								onSubmit: N,
								...t
							});
					});
				}
			: N,
		disabled: A
	});
}
