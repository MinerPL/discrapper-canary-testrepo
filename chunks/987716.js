t.d(n, {
    q: function () {
        return j;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    s = t.n(r),
    a = t(481060),
    c = t(987209),
    o = t(321051),
    u = t(669079),
    d = t(479446),
    m = t(646476),
    p = t(599659),
    x = t(981632),
    h = t(96848),
    f = t(703926),
    v = t(474936),
    g = t(388032),
    S = t(522888);
let j = (e) => {
    let { isShopGift: n, className: t, optionsContainerClassName: r } = e,
        { giftRecipient: j, selectedGiftStyle: E, setSelectedGiftStyle: I, emojiConfetti: y, soundEffect: P, setEmojiConfetti: T, setSoundEffect: N } = (0, c.wD)(),
        [b, _] = l.useState(!1),
        C = l.useRef(null),
        A = (0, a.useRadioGroup)({ orientation: 'horizontal' }),
        R = (0, u.MY)(j, n),
        O = R === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        Z = R !== u.xr.DEFAULT,
        M = (0, m.rK)(),
        { enabled: w } = m.ZP.useExperiment({ location: 'premiumGiftSelect_GiftAnimationOptions' }, { autoTrackExposure: M }),
        { enabled: D } = p.O.useExperiment({ location: 'gift card' }),
        L = null;
    return (
        Z && (L = M && w ? v.kJ : v.QI),
        D && (L = v.RQ),
        (0, i.jsxs)('div', {
            children: [
                Z &&
                    (0, i.jsxs)('div', {
                        className: s()(S.giftMainAnimation, t),
                        children: [
                            null != E
                                ? (0, i.jsx)(x.Z, {
                                      giftStyle: E,
                                      defaultAnimationState: d.SR.ACTION,
                                      idleAnimationState: d.SR.LOOP,
                                      shouldAnimate: !0,
                                      className: S.animation
                                  })
                                : (0, i.jsx)(a.Spinner, { className: S.spinner }),
                            O &&
                                (0, i.jsxs)('div', {
                                    className: S.soundEmojiContainer,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: S.sound,
                                            children: (0, i.jsx)(o.Z, {
                                                sound: P,
                                                onSelect: (e) => {
                                                    null != N && N(null == e ? void 0 : e);
                                                }
                                            })
                                        }),
                                        (0, i.jsx)('div', {
                                            className: S.emoji,
                                            children: (0, i.jsx)(h.Z, {
                                                setEmojiConfetti: T,
                                                emojiConfetti: null == y ? void 0 : y
                                            })
                                        })
                                    ]
                                })
                        ]
                    }),
                (0, i.jsx)('div', {
                    tabIndex: null != E || b ? void 0 : 0,
                    onFocus: (e) => {
                        var n;
                        e.target === e.currentTarget && (null === (n = C.current) || void 0 === n || n.focus());
                    },
                    className: s()(S.giftBoxOptionContainer, r),
                    'aria-label': g.intl.string(g.t.v54NrK),
                    ...A,
                    children:
                        null != L &&
                        L.map((e, n) =>
                            (0, i.jsx)(
                                f.m,
                                {
                                    isSelected: E === e,
                                    giftStyle: e,
                                    setSelectedGiftStyle: I,
                                    ref: 0 === n ? C : null,
                                    onFocus: () => _(!0),
                                    onBlur: () => _(!1)
                                },
                                e
                            )
                        )
                }),
                (0, i.jsx)('div', { className: S.__invalid_selectPlanDivider })
            ]
        })
    );
};
