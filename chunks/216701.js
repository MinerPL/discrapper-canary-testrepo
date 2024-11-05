n.d(t, {
    R: function () {
        return o;
    },
    Z: function () {
        return l;
    }
});
var r = n(200651);
n(192379);
var i = n(596454),
    a = n(307707),
    s = n(683090);
let o = {
    SMALL: s.small,
    MEDIUM: s.medium,
    LARGE: s.large
};
function l(e) {
    let { emojiId: t, emojiName: n, defaultComponent: s, size: l = o.MEDIUM } = e,
        { customEmoji: u, unicodeEmoji: c } = (0, a.Z)(t, n);
    return null == u && null == c
        ? (0, r.jsx)(r.Fragment, { children: s })
        : (0, r.jsx)(i.Z, {
              emojiName: null != u ? (null == u ? void 0 : u.name) : n,
              animated: null != u && u.animated,
              emojiId: null == u ? void 0 : u.id,
              autoplay: !0,
              className: l
          });
}
