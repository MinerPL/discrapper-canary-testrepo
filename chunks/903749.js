s.d(l, {
	Z: function () {
		return r;
	}
});
var t = s(512722),
	n = s.n(t),
	i = s(442837),
	a = s(339085),
	o = s(633302);
function r(e) {
	let { emojiId: l, emojiName: s } = e,
		t = (0, i.e7)([a.ZP], () => (null != l ? a.ZP.getCustomEmojiById(l) : null));
	if (null != t || null != s) {
		if (null == l)
			return n()(null != s, 'emojiName must be defined if emojiId is not defined'), o.ZP.convertSurrogateToName(s, !1);
		else return null == t ? void 0 : t.name;
	}
}
