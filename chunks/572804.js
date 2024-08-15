n.d(t, {
	Hl: function () {
		return o;
	},
	Sz: function () {
		return l;
	},
	ZP: function () {
		return s;
	}
});
var r = n(592125),
	i = n(271383),
	a = n(430824);
function s(e) {
	let { message: t, userId: n, suppressEveryone: r = !1, suppressRoles: i = !1 } = e;
	return l({
		userId: n,
		channelId: t.channel_id,
		mentionEveryone: t.mentionEveryone,
		mentionUsers: t.mentions,
		mentionRoles: t.mentionRoles,
		suppressEveryone: r,
		suppressRoles: i
	});
}
function o(e) {
	var t, n, r, i;
	let { rawMessage: a, userId: s, suppressEveryone: o = !1, suppressRoles: u = !1 } = e;
	return l({
		userId: s,
		channelId: a.channel_id,
		mentionEveryone: null !== (n = a.mention_everyone) && void 0 !== n && n,
		mentionUsers: null !== (r = null === (t = a.mentions) || void 0 === t ? void 0 : t.map((e) => e.id)) && void 0 !== r ? r : [],
		mentionRoles: null !== (i = a.mention_roles) && void 0 !== i ? i : [],
		suppressEveryone: o,
		suppressRoles: u
	});
}
function l(e) {
	let { userId: t, channelId: n, mentionEveryone: s, mentionUsers: o, mentionRoles: l, suppressEveryone: u = !1, suppressRoles: c = !1 } = e;
	if ((s && !u) || o.includes(t)) return !0;
	if (c || null == l || 0 === l.length) return !1;
	let d = r.Z.getChannel(n);
	if (null == d) return !1;
	let _ = d.getGuildId();
	if (null == _ || null == a.Z.getGuild(_)) return !1;
	let E = i.ZP.getMember(_, t);
	return null != E && l.some((e) => E.roles.includes(e));
}
