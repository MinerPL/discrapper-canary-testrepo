E.d(_, {
	R: function () {
		return t;
	},
	Z: function () {
		return A;
	}
});
var s = E(735250);
E(470079);
var T = E(596454),
	I = E(307707),
	n = E(847370);
let t = {
	SMALL: n.small,
	MEDIUM: n.medium,
	LARGE: n.large
};
function A(e) {
	let { emojiId: _, emojiName: E, defaultComponent: n, size: A = t.MEDIUM } = e,
		{ customEmoji: r, unicodeEmoji: a } = (0, I.Z)(_, E);
	return null == r && null == a
		? (0, s.jsx)(s.Fragment, { children: n })
		: (0, s.jsx)(T.Z, {
				emojiName: null != r ? (null == r ? void 0 : r.name) : E,
				animated: null != r && r.animated,
				emojiId: null == r ? void 0 : r.id,
				autoplay: !0,
				className: A
			});
}
