_.d(E, {
	B: function () {
		return u;
	},
	J: function () {
		return N;
	}
}),
	_(789020);
var s = _(442837),
	t = _(592125),
	n = _(9156),
	a = _(630388),
	M = _(569471),
	S = _(124368),
	r = _(981631);
function N(e) {
	let E = M.Z.flags(e.id);
	if (null == E) return S.iN.NO_MESSAGES;
	if ((0, a.yE)(E, S.iN.ALL_MESSAGES)) return S.iN.ALL_MESSAGES;
	if ((0, a.yE)(E, S.iN.ONLY_MENTIONS)) return S.iN.ONLY_MENTIONS;
	if ((0, a.yE)(E, S.iN.NO_MESSAGES)) return S.iN.NO_MESSAGES;
	let _ = t.Z.getChannel(e.parent_id);
	if (null == _ || n.ZP.isGuildOrCategoryOrChannelMuted(_.guild_id, _.id)) return S.iN.NO_MESSAGES;
	let s = n.ZP.resolvedMessageNotifications(_);
	return s === r.bL.NO_MESSAGES ? S.iN.NO_MESSAGES : s === r.bL.ONLY_MENTIONS ? S.iN.ONLY_MENTIONS : S.iN.ALL_MESSAGES;
}
function u(e) {
	return (0, s.e7)([M.Z, n.ZP, t.Z], () => N(e), [e]);
}
