t.d(A, {
	P: function () {
		return o;
	},
	W: function () {
		return l;
	}
}),
	t(411104);
var a = t(735250),
	n = t(470079),
	r = t(828762);
let s = n.createContext(void 0);
function o() {
	let e = n.useContext(s);
	if (null == e) throw Error('No GuildProductAttachmentManagerContextProvider found');
	return e;
}
function l(e) {
	let { children: A, guildId: t, ...n } = e,
		o = (0, r.Z)(t, n);
	return (0, a.jsx)(s.Provider, {
		value: o,
		children: A
	});
}
