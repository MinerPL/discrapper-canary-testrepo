i.d(n, {
	w: function () {
		return a;
	}
}),
	i(789020);
var t = i(85025);
function a(e) {
	let { flags: n } = e,
		i = (0, t.O)(n),
		a = null != i && ((null == i ? void 0 : i.messageContent) || (null == i ? void 0 : i.messageContentLimited)),
		r = null != i && ((null == i ? void 0 : i.guildPresences) || (null == i ? void 0 : i.guildPresencesLimited)),
		o = null != i && ((null == i ? void 0 : i.guildMembers) || (null == i ? void 0 : i.guildMembersLimited));
	return {
		hasMessageContent: a,
		hasGuildPresences: r,
		hasGuildMembers: o,
		hasIntents: a || r || o
	};
}
