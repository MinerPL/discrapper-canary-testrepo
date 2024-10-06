n.d(t, {
    Z: function () {
        return O;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(780384),
    o = n(907040),
    l = n(210887),
    u = n(823379),
    c = n(51144),
    d = n(785717),
    _ = n(448197),
    E = n(698305),
    f = n(510659),
    h = n(825801),
    p = n(652853),
    I = n(228168),
    m = n(185923),
    T = n(420212),
    S = n(231338),
    g = n(689938),
    A = n(209960);
let N = (e) => {
    let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
        a = ':'.concat(t.name, ':');
    switch (r) {
        case I.n_.ACTIVITY:
            let s = g.Z.Messages.USER_PROFILE_REACTED_TO_ACTIVITY.format({ username: n });
            return ''.concat(h.jd).concat(s, '*\n').concat(a);
        case I.n_.AVATAR:
            let o = g.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({ username: n });
            return ''.concat(h.jd).concat(o, '*\n').concat(a);
        case I.n_.STATUS:
            let l = g.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({ username: n });
            return null != i ? ''.concat(h.jd).concat(l, '*').concat('\n> '.concat(i), '\n').concat(a) : ''.concat(h.jd).concat(l, '*\n').concat(a);
        default:
            (0, u.vE)(r);
    }
};
function O(e) {
    let { user: t, guildId: n, sourceType: u, sourceDetails: g, setPopoutRef: O, onClose: R } = e,
        { trackUserProfileAction: v } = (0, d.KZ)(),
        { sendReact: C } = (0, _.Q)(u),
        { setInteractionTypeSent: L, setInteractionToastShown: y, resetInteraction: D } = (0, f.Xo)(),
        { theme: b } = (0, p.z)(),
        M = (0, a.e7)([l.Z], () => l.Z.theme),
        P = (0, s.wj)(M) ? !(0, s.wj)(b) : (0, s.wj)(b),
        U = i.useRef(null);
    i.useEffect(() => {
        null == O || O(null == U ? void 0 : U.current);
    }, [U, O]),
        i.useEffect(() => {
            let e = (e) => {
                e.key === T.vn.ESCAPE && (e.stopPropagation(), D());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [R, D]);
    let w = async (e) => {
        if (null == e) return;
        v({ action: C });
        let n = N({
            emoji: e,
            username: c.ZP.getName(t),
            sourceType: u,
            sourceDetails: g
        });
        L(null), y(!0);
        try {
            await (0, E.Z)({
                userId: t.id,
                content: n,
                location: 'UserProfileReactReplyBar',
                openChannel: !1,
                whenReady: !1
            });
        } catch (e) {}
        L(I.P.REACT),
            setTimeout(() => {
                y(!1);
            }, h._1);
    };
    return (0, r.jsx)(o.Z, {
        headerClassName: P ? A.noBoxShadowMargin : void 0,
        guildId: null != n ? n : void 0,
        closePopout: S.dG,
        onSelectEmoji: async (e, t) => {
            await w(e), t && (D(), null == R || R());
        },
        pickerIntention: m.Hz.PROFILE
    });
}
