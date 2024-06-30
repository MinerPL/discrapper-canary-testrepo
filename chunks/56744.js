n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250), a = n(470079), s = n(442837), l = n(905405), r = n(869765), o = n(699516), c = n(512665), d = n(937889), u = n(739566), _ = n(981631);
let E = a.memo(function (e) {
    let {
            baseMessage: t,
            channel: n,
            referencedMessage: _,
            compact: E = !1
        } = e, m = _.state === r.Y.LOADED ? _.message : void 0, I = (0, l.p)(), T = a.useMemo(() => (null == m ? void 0 : m.content) != null && '' !== m.content ? (0, d.ZP)(m, {
            formatInline: !0,
            shouldFilterKeywords: I
        }).content : null, [
            m,
            I
        ]), h = (0, s.e7)([o.Z], () => null != m && o.Z.isBlockedForMessage(m), [m]), N = (0, u.Uj)(m), f = (0, u.Uj)(t);
    return (0, i.jsx)(c.Z, {
        repliedAuthor: N,
        baseAuthor: f,
        baseMessage: t,
        channel: n,
        referencedMessage: _,
        content: T,
        compact: E,
        isReplyAuthorBlocked: h
    });
});
function m(e, t, n, a, s) {
    return e.type !== _.uaV.REPLY || null == n ? null : (0, i.jsx)(E, {
        baseMessage: e,
        channel: t,
        referencedMessage: a,
        compact: s
    });
}
