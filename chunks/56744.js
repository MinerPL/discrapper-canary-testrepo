n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(905405),
    r = n(869765),
    o = n(699516),
    c = n(937889),
    d = n(739566),
    u = n(267128),
    _ = n(981631);
let E = a.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: _, compact: E = !1 } = e,
        I = _.state === r.Y.LOADED ? _.message : void 0,
        m = (0, l.p)(),
        T = a.useMemo(
            () =>
                (null == I ? void 0 : I.content) != null && '' !== I.content
                    ? (0, c.ZP)(I, {
                          formatInline: !0,
                          shouldFilterKeywords: m
                      }).content
                    : null,
            [I, m]
        ),
        N = (0, s.e7)([o.Z], () => null != I && o.Z.isBlockedForMessage(I), [I]),
        h = (0, d.Uj)(I),
        C = (0, d.Uj)(t);
    return (0, i.jsx)(u.Z, {
        repliedAuthor: h,
        baseAuthor: C,
        baseMessage: t,
        channel: n,
        referencedMessage: _,
        content: T,
        compact: E,
        isReplyAuthorBlocked: N,
        isReplySpineClickable: !1,
        showReplySpine: !0
    });
});
function I(e, t, n, a, s) {
    return e.type !== _.uaV.REPLY || null == n
        ? null
        : (0, i.jsx)(E, {
              baseMessage: e,
              channel: t,
              referencedMessage: a,
              compact: s
          });
}
