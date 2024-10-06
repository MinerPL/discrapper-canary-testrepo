t.d(n, {
    q: function () {
        return x;
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
    d = t(599659),
    _ = t(981632),
    p = t(96848),
    m = t(703926),
    I = t(474936),
    f = t(689938),
    E = t(522888);
let x = (e) => {
    let { isShopGift: n } = e,
        { giftRecipient: t, selectedGiftStyle: x, setSelectedGiftStyle: N, emojiConfetti: S, soundEffect: T, setEmojiConfetti: h, setSoundEffect: b } = (0, s.wD)(),
        [g, P] = a.useState(!1),
        v = a.useRef(null),
        A = (0, r.useRadioGroup)({ orientation: 'horizontal' }),
        M = (0, o.MY)(t, n),
        C = M === o.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        y = M !== o.xr.DEFAULT,
        R = (0, u.rK)(),
        { enabled: O } = u.ZP.useExperiment({ location: 'premiumGiftSelect_GiftAnimationOptions' }, { autoTrackExposure: R }),
        { enabled: L } = d.O.useExperiment({ location: 'gift card' }),
        j = null;
    return (
        y && (j = R && O ? I.V4 : I.QI),
        L && (j = I.RQ),
        (0, i.jsxs)('div', {
            children: [
                y &&
                    (0, i.jsxs)('div', {
                        className: E.giftMainAnimation,
                        children: [
                            null != x
                                ? (0, i.jsx)(_.Z, {
                                      giftStyle: x,
                                      defaultAnimationState: c.SR.ACTION,
                                      idleAnimationState: c.SR.LOOP,
                                      shouldAnimate: !0,
                                      className: E.animation
                                  })
                                : (0, i.jsx)(r.Spinner, { className: E.spinner }),
                            C &&
                                (0, i.jsxs)('div', {
                                    className: E.soundEmojiContainer,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: E.sound,
                                            children: (0, i.jsx)(l.Z, {
                                                sound: T,
                                                onSelect: (e) => {
                                                    null != b && b(null == e ? void 0 : e);
                                                }
                                            })
                                        }),
                                        (0, i.jsx)('div', {
                                            className: E.emoji,
                                            children: (0, i.jsx)(p.Z, {
                                                setEmojiConfetti: h,
                                                emojiConfetti: null == S ? void 0 : S
                                            })
                                        })
                                    ]
                                })
                        ]
                    }),
                (0, i.jsx)('div', {
                    tabIndex: null != x || g ? void 0 : 0,
                    onFocus: (e) => {
                        var n;
                        e.target === e.currentTarget && (null === (n = v.current) || void 0 === n || n.focus());
                    },
                    className: E.giftBoxOptionContainer,
                    'aria-label': f.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
                    ...A,
                    children:
                        null != j &&
                        j.map((e, n) =>
                            (0, i.jsx)(
                                m.m,
                                {
                                    isSelected: x === e,
                                    giftStyle: e,
                                    setSelectedGiftStyle: N,
                                    ref: 0 === n ? v : null,
                                    onFocus: () => P(!0),
                                    onBlur: () => P(!1)
                                },
                                e
                            )
                        )
                }),
                (0, i.jsx)('div', { className: E.__invalid_selectPlanDivider })
            ]
        })
    );
};
