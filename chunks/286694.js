t.d(n, {
	Z: function () {
		return I;
	}
});
var i = t(735250);
t(470079);
var r = t(442837),
	u = t(481060),
	l = t(592125),
	a = t(430824),
	o = t(496675),
	d = t(594174),
	s = t(471253),
	c = t(88751),
	_ = t(981631),
	E = t(689938);
function I(e, n, t) {
	var I;
	let T = l.Z.getChannel(t),
		N = (0, r.e7)([a.Z], () => a.Z.getGuild(n), [n]),
		S = (0, r.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, t), [t, e.id]),
		A = (null === (I = d.default.getCurrentUser()) || void 0 === I ? void 0 : I.id) === e.id,
		p = (0, r.e7)([o.Z], () => null != t && o.Z.canWithPartialContext(_.Plq.MUTE_MEMBERS, { channelId: t }), [t]);
	return null != T && null != N && (p || A) && S.speaker
		? (0, i.jsx)(u.MenuItem, {
				id: 'audience',
				label: A
					? E.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE
					: E.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
				action: () => {
					A ? (0, s.yi)(T) : (0, s.hz)(e, T);
				}
			})
		: null;
}
