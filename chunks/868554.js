n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(909820),
    u = n(518950),
    h = n(131951),
    p = n(594174),
    m = n(63063),
    f = n(120619),
    g = n(578976),
    C = n(981631),
    x = n(388032),
    v = n(277865),
    _ = n(454120);
function I(e) {
    let { buttonRef: t, userId: a, streaming: I, onClose: E } = e,
        b = (0, s.e7)([p.default], () => p.default.getUser(a)),
        N = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
        { avatarSrc: Z, eventHandlers: T } = (0, u.Z)({
            user: b,
            size: o.AvatarSizes.SIZE_48,
            animateOnHover: !0
        }),
        S = l.useMemo(
            () =>
                null == b || null == N
                    ? ''
                    : b.id === N.id
                      ? x.intl.string(x.t.IjKvNT)
                      : !0 === I
                        ? x.intl.format(x.t.JkWoqK, {
                              username: b.username,
                              helpCenterLink: m.Z.getArticleURL(C.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
                          })
                        : x.intl.formatToPlainString(x.t.vNbVXF, { username: b.username }),
            [b, N, I]
        ),
        j = !0 !== I && (null == N ? void 0 : N.id) === (null == b ? void 0 : b.id),
        A = l.useMemo(() => (I ? x.intl.string(x.t.o7NIjY) : j ? x.intl.string(x.t.r6xhBw) : x.intl.string(x.t.yKw8Dg)), [I, j]);
    if (null == b || null == N) return null;
    let y = () => {
        if (I) {
            let e = f.Z.getPreviousGoLiveSettings(),
                t = h.Z.getGoLiveSource();
            if (null == e) {
                E();
                return;
            }
            let n = (0, g.s)(e.resolution, e.frameRate, t);
            c.Z.setGoLiveSource(n), E();
            return;
        }
        if (j) {
            E();
            return;
        }
        (0, o.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('46746'), n.e('19942')]).then(n.bind(n, 60594));
            return (t) =>
                (0, i.jsx)(e, {
                    analyticsLocation: 'HDStreamingPotionBanner',
                    ...t
                });
        }),
            E();
    };
    return (0, i.jsx)(d.ZP, {
        children: (0, i.jsx)(o.ReferencePositionLayer, {
            targetRef: t,
            position: 'top',
            align: 'center',
            spacing: 30,
            children: () =>
                (0, i.jsxs)('div', {
                    className: v.banner,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(o.Avatar, {
                                    src: Z,
                                    'aria-label': b.username,
                                    size: o.AvatarSizes.SIZE_48,
                                    ...T
                                }),
                                (0, i.jsx)('img', {
                                    className: v.potion,
                                    src: _,
                                    alt: ''
                                })
                            ]
                        }),
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-sm/medium',
                            children: S
                        }),
                        (0, i.jsxs)('div', {
                            className: v.subsection,
                            children: [
                                (0, i.jsx)(o.Button, {
                                    onClick: y,
                                    className: r()({ [v.actionButton]: !0 !== I }),
                                    children: A
                                }),
                                !j &&
                                    (0, i.jsx)(o.Clickable, {
                                        className: v.x,
                                        onClick: E,
                                        children: (0, i.jsx)(o.XSmallIcon, { name: 'close' })
                                    })
                            ]
                        })
                    ]
                })
        })
    });
}
