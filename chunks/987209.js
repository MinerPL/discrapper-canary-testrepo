t.d(n, {
    KB: function () {
        return v;
    },
    wD: function () {
        return h;
    }
}),
    t(47120);
var r = t(735250),
    i = t(470079),
    l = t(479446),
    a = t(646476),
    s = t(975104),
    o = t(669079),
    c = t(598),
    u = t(474936),
    d = t(689938);
let m = u.Cj.STANDARD_BOX,
    f = void 0,
    [x, h, j] = (0, s.Z)();
function v(e) {
    let { isGift: n = !1, giftRecipient: t, giftMessage: s, giftStyle: h, children: j } = e,
        { selectedSkuId: v } = (0, c.usePaymentContext)(),
        [N, C] = i.useState(t),
        [p, S] = i.useState(),
        [I, E] = i.useState(!1),
        T = (0, o.pO)(N),
        g = (0, a.rK)(),
        { enabled: O } = a.ZP.useExperiment({ location: 'PaymentContextProvider' }, { autoTrackExposure: T && g }),
        A = f;
    T && (A = O && g ? u.Cj.SEASONAL_STANDARD_BOX : null != h ? h : m);
    let [_, P] = i.useState(A),
        [y, M] = i.useState(n && (0, o.MY)(N) === o.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD ? d.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : s),
        [B, R] = i.useState(void 0),
        [b, L] = i.useState(void 0),
        U = (0, o.E5)(v, n),
        [k, Z] = i.useState(!1),
        [D, G] = i.useState(!1),
        [w, H] = i.useState(),
        F = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: n } = e;
                return (
                    G(!0),
                    (0, l.Y)(N, U)
                        .then(() => {
                            G(!1), null == n || n(), Z(!0);
                        })
                        .catch((e) => {
                            G(!1), H(e), Z(!0);
                        })
                );
            },
            [N, U, G, Z, H]
        );
    return (0, r.jsx)(x.Provider, {
        value: {
            isGift: n,
            giftCode: U,
            giftMessage: s,
            giftRecipient: N,
            setGiftRecipient: C,
            giftRecipientError: p,
            setGiftRecipientError: S,
            validatingGiftRecipient: I,
            setValidatingGiftRecipient: E,
            soundEffect: B,
            setSoundEffect: R,
            emojiConfetti: b,
            setEmojiConfetti: L,
            customGiftMessage: y,
            setCustomGiftMessage: M,
            selectedGiftStyle: _,
            setSelectedGiftStyle: P,
            sendGiftMessage: F,
            hasSentMessage: k,
            isSendingMessage: D,
            giftMessageError: w
        },
        children: j
    });
}
