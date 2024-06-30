n.d(t, {
    g2: function () {
        return m;
    },
    hf: function () {
        return h;
    },
    tP: function () {
        return p;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(920906), o = n(442837), s = n(481060), l = n(594190), u = n(594174), c = n(617136), d = n(918701), _ = n(920916), E = n(669041), f = n(341907);
function h(e) {
    let {
            quest: t,
            location: n,
            questContentPosition: r
        } = e, a = (0, o.e7)([u.default], () => {
            var e;
            return null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.verified;
        });
    return i.useCallback(() => {
        null != t && ((0, c._3)({
            questId: t.id,
            questContent: n,
            questContentCTA: c.jZ.CLAIM_REWARD,
            questContentPosition: r
        }), a ? (0, d.Xv)(t.config) ? (0, _.openCollectibleRewardModal)(t, n) : (0, f.h)({
            questId: t.id,
            location: n,
            questContentPosition: r
        }) : (0, E.openRewardModalUnverified)());
    }, [
        t,
        n,
        r,
        a
    ]);
}
function p(e) {
    var t;
    let n = (0, o.Wu)([l.ZP], () => l.ZP.getGamesSeen(!1)).find(t => (null == t ? void 0 : t.id) === e);
    if (null == n)
        return !1;
    let r = Date.now() - 25920000000;
    return r <= (null !== (t = n.lastLaunched) && void 0 !== t ? t : 0);
}
let m = e => {
    let {
            useReducedMotion: t,
            className: n
        } = e, [o, l] = (0, a.useSpring)(() => ({})), u = i.useRef(!1), c = (0, a.animated)(s.RefreshIcon);
    return {
        render: () => (0, r.jsx)(c, {
            className: n,
            style: t ? void 0 : o,
            color: 'currentColor',
            size: 'xs'
        }),
        startAnimation: () => {
            u.current = !0, l({
                from: { rotate: '0deg' },
                to: { rotate: '360deg' },
                config: {
                    tension: 750,
                    mass: 5,
                    friction: 100
                },
                loop: () => u.current,
                immediate: t
            });
        },
        stopAnimation: () => {
            u.current = !1;
        }
    };
};
