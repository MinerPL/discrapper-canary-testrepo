t.d(n, {
    KB: function () {
        return b;
    },
    wD: function () {
        return g;
    }
}),
    t(47120);
var o = t(735250),
    r = t(470079),
    a = t(479446),
    i = t(646476),
    c = t(599659),
    l = t(155491),
    s = t(975104),
    u = t(669079),
    d = t(598),
    p = t(474936),
    _ = t(689938);
let f = p.Cj.STANDARD_BOX,
    m = void 0,
    [h, g, S] = (0, s.Z)();
function b(e) {
    let { isGift: n = !1, giftRecipient: t, giftMessage: s, giftStyle: g, children: S } = e,
        { selectedSkuId: b } = (0, d.usePaymentContext)(),
        [E, I] = r.useState(t),
        [P, T] = r.useState(),
        [x, y] = r.useState(!1),
        M = (0, u.pO)(E),
        C = (0, i.rK)(),
        { enabled: v } = i.ZP.useExperiment({ location: 'PaymentContextProvider' }, { autoTrackExposure: M && C }),
        { enabled: N } = c.O.useExperiment({ location: 'gift card' }),
        A = m;
    M && ((A = v && C ? p.Cj.SEASONAL_STANDARD_BOX : null != g ? g : f), N && (A = p.Cj.NITROWEEN_STANDARD));
    let [R, L] = r.useState(A),
        [k, O] = r.useState(n && (0, u.MY)(E) === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == s ? _.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : s),
        [B, U] = r.useState(void 0),
        [w, D] = r.useState(void 0),
        j = (0, u.E5)(b, n),
        [Z, F] = r.useState(!1),
        [W, G] = r.useState(!1),
        [Y, H] = r.useState(),
        V = r.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: n } = e;
                return (
                    G(!0),
                    (0, a.YD)(E, j)
                        .then(() => {
                            G(!1), null == n || n(), F(!0);
                        })
                        .catch((e) => {
                            G(!1), H(e), F(!0);
                        })
                );
            },
            [E, j, G, F, H]
        ),
        K = (0, l.x8)();
    return (0, o.jsx)(h.Provider, {
        value: {
            isGift: n,
            giftCode: j,
            giftMessage: s,
            giftRecipient: E,
            setGiftRecipient: I,
            giftRecipientError: P,
            setGiftRecipientError: T,
            validatingGiftRecipient: x,
            setValidatingGiftRecipient: y,
            soundEffect: B,
            setSoundEffect: U,
            emojiConfetti: w,
            setEmojiConfetti: D,
            customGiftMessage: k,
            setCustomGiftMessage: O,
            selectedGiftStyle: R,
            setSelectedGiftStyle: L,
            sendGiftMessage: V,
            hasSentMessage: Z,
            isSendingMessage: W,
            giftMessageError: Y,
            alreadyHasHalloweenDeco: K
        },
        children: S
    });
}
