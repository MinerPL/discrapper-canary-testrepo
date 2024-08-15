n.d(t, {
	g: function () {
		return o;
	},
	mM: function () {
		return u;
	},
	tr: function () {
		return l;
	}
}),
	n(442837);
var r = n(430824),
	i = n(914010),
	a = n(369274),
	s = n(558921);
function o(e) {
	let { guildStore: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
		n = null != t ? t : r.Z,
		i = n.getGuild(s.y),
		o = (null == i ? void 0 : i.joinedAt) instanceof Date && Date.now() - i.joinedAt.getTime() <= 3600000;
	return 1 === n.getGuildCount() && o && (0, a.Z)(e);
}
function l(e) {
	return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === s.g && o('app');
}
function u(e) {
	return new Promise((t, n) => {
		if (i.Z.getGuildId() === e) {
			t();
			return;
		}
		let r = setTimeout(() => {
				s(), n();
			}, 3000),
			a = () => {
				i.Z.getGuildId() === e && (s(), t());
			},
			s = () => {
				i.Z.removeChangeListener(a), clearTimeout(r);
			};
		i.Z.addChangeListener(a);
	});
}
