n.d(t, {
    BV: function () {
        return E;
    },
    Rm: function () {
        return m;
    },
    aO: function () {
        return I;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(40851),
    o = n(607070),
    l = n(633302),
    u = n(375954),
    c = n(378364),
    d = n(197344),
    f = n(978636),
    _ = n(131333),
    h = n(981631);
function p(e) {
    if (null == e || null == c.Z.emojiAnimationTriggers) return !1;
    for (let t of c.Z.emojiAnimationTriggers) {
        let n = l.ZP.getByName(t);
        if (null != n) {
            if (':'.concat(n.uniqueName, ':') === e) return !0;
            for (let t in n.diversityChildren) {
                let r = n.diversityChildren[t];
                if (':'.concat(r.uniqueName, ':') === e) return !0;
            }
        }
    }
    return !1;
}
let m = i.createContext({
    triggerAnimation: () => {}
});
function g(e) {
    let { children: t } = e,
        { triggerAnimation: n } = i.useContext(m),
        a = (0, s.bp)(),
        o = i.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    a === h.IlC.APP && p(e) && n(e);
                }
            }),
            [a, n]
        );
    return (0, r.jsx)(m.Provider, {
        value: o,
        children: t
    });
}
function E(e) {
    let { children: t } = e,
        n = d.Z.useIsEligible(),
        a = i.useCallback((e, t) => {
            if (t === c.O.THROW_EMOJI) return (0, r.jsx)(_.t, { children: e });
        }, []);
    return n && null != c.Z.emojiAnimationType ? a((0, r.jsx)(g, { children: t }), c.Z.emojiAnimationType) : (0, r.jsx)(r.Fragment, { children: t });
}
function v(e) {
    let { emojiRef: t, channelId: n, messageId: r, emojiName: s } = e,
        o = (0, a.e7)([u.Z], () => u.Z.getMessage(n, r)),
        { triggerAnimation: l } = i.useContext(m);
    return (
        i.useEffect(() => {
            if (!c.Z.triggerEmojiAnimationFromSentMessage || (null == o ? void 0 : o.state) !== h.yb.SENT || (0, f.JL)(r)) return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            if (!!(e >= 0 && n <= window.innerHeight)) l(s), (0, f.i9)(r);
        }, [s, t, null == o ? void 0 : o.state, r, l]),
        null
    );
}
function I(e) {
    let { channelId: t, messageId: n, emojiName: i, disable: l, emojiRef: u } = e,
        c = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        f = d.Z.useIsEligible(),
        _ = (0, s.bp)();
    return l || _ !== h.IlC.APP || !f || null == n || null == t || c || null == u || !p(i)
        ? null
        : (0, r.jsx)(v, {
              emojiRef: u,
              channelId: t,
              messageId: n,
              emojiName: i
          });
}
