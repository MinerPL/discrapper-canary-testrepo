E.d(_, {
    R: function () {
        return A;
    },
    Z: function () {
        return t;
    }
});
var s = E(735250);
E(470079);
var T = E(596454), I = E(307707), n = E(418068);
let A = {
    SMALL: n.small,
    MEDIUM: n.medium,
    LARGE: n.large
};
function t(e) {
    let {
            emojiId: _,
            emojiName: E,
            defaultComponent: n,
            size: t = A.MEDIUM
        } = e, {
            customEmoji: a,
            unicodeEmoji: r
        } = (0, I.Z)(_, E);
    return null == a && null == r ? (0, s.jsx)(s.Fragment, { children: n }) : (0, s.jsx)(T.Z, {
        emojiName: null != a ? null == a ? void 0 : a.name : E,
        animated: null != a && a.animated,
        emojiId: null == a ? void 0 : a.id,
        autoplay: !0,
        className: t
    });
}
