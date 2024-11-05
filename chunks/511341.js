n.d(t, {
    Z: function () {
        return y;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(780384),
    o = n(907040),
    l = n(210887),
    u = n(823379),
    c = n(51144),
    d = n(785717),
    f = n(448197),
    _ = n(698305),
    h = n(510659),
    p = n(810097),
    m = n(652853),
    g = n(228168),
    E = n(185923),
    v = n(420212),
    I = n(231338),
    S = n(388032),
    T = n(209960);
let b = (e) => {
    let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
        a = ':'.concat(t.name, ':');
    switch (r) {
        case g.n_.ACTIVITY:
            let s = S.intl.formatToPlainString(S.t.EUFEJi, { username: n });
            return ''.concat(p.jd).concat(s, '*\n').concat(a);
        case g.n_.AVATAR:
            let o = S.intl.formatToPlainString(S.t.E6H15u, { username: n });
            return ''.concat(p.jd).concat(o, '*\n').concat(a);
        case g.n_.STATUS:
            let l = S.intl.formatToPlainString(S.t.XPQgLy, { username: n });
            return null != i ? ''.concat(p.jd).concat(l, '*').concat('\n> '.concat(i), '\n').concat(a) : ''.concat(p.jd).concat(l, '*\n').concat(a);
        default:
            (0, u.vE)(r);
    }
};
function y(e) {
    let { user: t, guildId: n, sourceType: u, sourceDetails: p, setPopoutRef: S, onClose: y } = e,
        { trackUserProfileAction: A } = (0, d.KZ)(),
        { sendReact: N } = (0, f.Q)(u),
        { resetInteraction: C, setInteractionToast: R } = (0, h.Xo)(),
        { theme: O } = (0, m.z)(),
        D = (0, a.e7)([l.Z], () => l.Z.theme),
        L = (0, s.wj)(D) ? !(0, s.wj)(O) : (0, s.wj)(O),
        x = i.useRef(null);
    i.useEffect(() => {
        null == S || S(null == x ? void 0 : x.current);
    }, [x, S]),
        i.useEffect(() => {
            let e = (e) => {
                e.key === v.vn.ESCAPE && (e.stopPropagation(), C());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [y, C]);
    let w = async (e) => {
        if (null == e) return;
        A({ action: N });
        let n = b({
            emoji: e,
            username: c.ZP.getName(t),
            sourceType: u,
            sourceDetails: p
        });
        R(null);
        try {
            await (0, _.Z)({
                userId: t.id,
                content: n,
                location: 'UserProfileReactPopout',
                openChannel: !1,
                whenReady: !1
            });
        } catch (e) {}
        R(g.P.REACT);
    };
    return (0, r.jsx)(o.Z, {
        headerClassName: L ? T.noBoxShadowMargin : void 0,
        guildId: null != n ? n : void 0,
        closePopout: I.dG,
        onSelectEmoji: async (e, t) => {
            await w(e), t && (C(), null == y || y());
        },
        pickerIntention: E.Hz.PROFILE
    });
}
