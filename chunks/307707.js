E.d(_, {
	Z: function () {
		return n;
	}
});
var s = E(399606),
	T = E(339085),
	I = E(633302);
function n(e, _) {
	let E = (0, s.e7)([T.ZP], () => (null != e ? T.ZP.getCustomEmojiById(e) : null), [e]);
	return {
		customEmoji: E,
		unicodeEmoji: null != _ ? I.ZP.getByName(I.ZP.convertSurrogateToName(_, !1)) : null
	};
}
