n(47120), n(653041);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(704215),
    u = n(996146),
    c = n(481060),
    d = n(100527),
    _ = n(906732),
    E = n(605236),
    f = n(243778),
    h = n(963249),
    p = n(599659),
    I = n(282925),
    m = n(819640),
    T = n(594174),
    S = n(70956),
    g = n(709054),
    A = n(51144),
    N = n(443603),
    O = n(981631),
    R = n(921944),
    v = n(689938),
    C = n(679583),
    L = n(933283);
let y = S.Z.Millis.DAYS_30;
function D(e) {
    let { animatedIconComponent: t, hovered: i, isCoachmarkDismissed: a } = e,
        o = !a || i;
    return (0, r.jsxs)('div', {
        className: C.iconContainer,
        children: [
            (0, r.jsx)('div', {
                className: s()(C.decorativeLayer, { [C.decorativeLayerActive]: o }),
                style: { zIndex: 3 },
                children: (0, r.jsx)(c.LottieAnimation, {
                    shouldAnimate: !0,
                    importData: () => n.e('39298').then(n.t.bind(n, 324952, 19))
                })
            }),
            (0, r.jsx)('div', {
                className: s()(C.giftIconButton, { [C.giftIconButtonActive]: o }),
                style: { zIndex: 2 },
                children: (0, r.jsx)(t, { color: 'currentColor' })
            }),
            (0, r.jsx)('div', {
                className: s()(C.decorativeLayer, { [C.decorativeLayerActive]: o }),
                style: { zIndex: 1 },
                children: (0, r.jsx)(c.LottieAnimation, {
                    shouldAnimate: !0,
                    importData: () => n.e('58889').then(n.t.bind(n, 593162, 19))
                })
            })
        ]
    });
}
t.Z = i.memo(function (e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: a } = (0, _.ZP)(d.Z.GIFT_BUTTON),
        [s, c] = i.useState(!1),
        S = (0, o.e7)([m.Z], () => !(null === m.Z || void 0 === m.Z ? void 0 : m.Z.hasLayers())),
        b = (0, o.e7)([T.default], () => T.default.getCurrentUser()),
        M = null != b ? g.default.age(b.id) : 0,
        { enabled: P } = p.O.useExperiment({ location: 'gift-button' }),
        U = [];
    P && !t && S && M >= y && U.push(l.z.NITROWEEN_COACHMARKS);
    let [w, x] = (0, f.US)(U),
        G = null != w,
        k = (0, A.Ft)(n),
        { Component: B, events: F, play: V } = (0, u.$)();
    if (t) return null;
    let H = () => {
        (0, h.Z)({
            isGift: !0,
            giftRecipient: null == k ? void 0 : k,
            giftMessage: v.Z.Messages.NITROWEEN_DESKTOP_GIFT_PURCHASE_PLACEHOLDER,
            initialPlanId: null,
            analyticsLocations: a,
            analyticsObject: {
                page: n.isPrivate() ? O.ZY5.DM_CHANNEL : O.ZY5.GUILD_CHANNEL,
                section: O.jXE.CHANNEL_TEXT_AREA,
                object: O.qAy.NITROWEEN_BUTTON_ICON,
                objectType: O.Qqv.GIFT
            }
        });
    };
    return (0, r.jsxs)('div', {
        className: C.container,
        onMouseEnter: () => {
            !s && c(!0);
        },
        onMouseLeave: () => {
            c(!1);
        },
        children: [
            G &&
                (0, r.jsx)(I.Z, {
                    onComplete: () => c(!1),
                    onCheckItOutClick: H,
                    markAsDismissed: x
                }),
            (0, r.jsx)(N.Z, {
                innerClassName: L.button,
                'aria-label': v.Z.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                isActive: !1,
                onClick: () => {
                    V(), c(!1), (0, E.EW)(l.z.NITROWEEN_ANIMATED_GIFTING_ICON, { dismissAction: R.L.TAKE_ACTION }), H();
                },
                ...F,
                children: (0, r.jsx)(D, {
                    animatedIconComponent: B,
                    hovered: s,
                    isCoachmarkDismissed: !G
                })
            })
        ]
    });
});
