t.d(n, {
    q: function () {
        return E;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    r = t(481060),
    s = t(987209),
    l = t(321051),
    o = t(669079),
    c = t(479446),
    u = t(646476),
    d = t(981632),
    _ = t(96848),
    p = t(703926),
    m = t(474936),
    I = t(689938),
    f = t(62612);
let E = (e) => {
    let { isShopGift: n } = e,
        { giftRecipient: t, selectedGiftStyle: E, setSelectedGiftStyle: x, emojiConfetti: N, soundEffect: S, setEmojiConfetti: T, setSoundEffect: h } = (0, s.wD)(),
        [b, g] = a.useState(!1),
        P = a.useRef(null),
        v = (0, r.useRadioGroup)({ orientation: 'horizontal' }),
        A = (0, o.MY)(t, n),
        y = A === o.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        M = A !== o.xr.DEFAULT,
        C = (0, u.rK)(),
        { enabled: O } = u.ZP.useExperiment({ location: 'premiumGiftSelect_GiftAnimationOptions' }, { autoTrackExposure: C }),
        R = null;
    return (
        M && (R = C && O ? m.V4 : m.QI),
        (0, i.jsxs)('div', {
            children: [
                M &&
                    (0, i.jsxs)('div', {
                        className: f.giftMainAnimation,
                        children: [
                            null != E
                                ? (0, i.jsx)(d.Z, {
                                      giftStyle: E,
                                      defaultAnimationState: c.S.ACTION,
                                      idleAnimationState: c.S.LOOP,
                                      shouldAnimate: !0,
                                      className: f.animation
                                  })
                                : (0, i.jsx)(r.Spinner, { className: f.spinner }),
                            y &&
                                (0, i.jsxs)('div', {
                                    className: f.soundEmojiContainer,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: f.sound,
                                            children: (0, i.jsx)(l.Z, {
                                                sound: S,
                                                onSelect: (e) => {
                                                    null != h && h(null == e ? void 0 : e);
                                                }
                                            })
                                        }),
                                        (0, i.jsx)('div', {
                                            className: f.emoji,
                                            children: (0, i.jsx)(_.Z, {
                                                setEmojiConfetti: T,
                                                emojiConfetti: null == N ? void 0 : N
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
                        e.target === e.currentTarget && (null === (n = P.current) || void 0 === n || n.focus());
                    },
                    className: f.giftBoxOptionContainer,
                    'aria-label': I.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
                    ...v,
                    children:
                        null != R &&
                        R.map((e, n) =>
                            (0, i.jsx)(
                                p.m,
                                {
                                    isSelected: E === e,
                                    giftStyle: e,
                                    setSelectedGiftStyle: x,
                                    ref: 0 === n ? P : null,
                                    onFocus: () => g(!0),
                                    onBlur: () => g(!1)
                                },
                                e
                            )
                        )
                }),
                (0, i.jsx)('div', { className: f.__invalid_selectPlanDivider })
            ]
        })
    );
};
