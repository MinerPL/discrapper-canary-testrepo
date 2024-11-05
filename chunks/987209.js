t.d(n, {
    KB: function () {
        return x;
    },
    wD: function () {
        return E;
    }
}),
    t(47120);
var r = t(200651),
    o = t(192379),
    i = t(442837),
    l = t(597688),
    a = t(479446),
    s = t(646476),
    c = t(599659),
    u = t(155491),
    d = t(975104),
    p = t(669079),
    f = t(563132),
    m = t(474936),
    h = t(388032);
let _ = m.Cj.STANDARD_BOX,
    g = void 0,
    [S, E, b] = (0, d.Z)();
function x(e) {
    let { isGift: n = !1, giftRecipient: t, giftMessage: d, giftStyle: E, giftingOrigin: b, children: x } = e,
        { selectedSkuId: P } = (0, f.usePaymentContext)(),
        [C, v] = o.useState(t),
        [T, I] = o.useState(),
        [y, A] = o.useState(!1),
        N = (0, p.pO)(C),
        k = (0, s.rK)(),
        { enabled: M } = s.ZP.useExperiment({ location: 'PaymentContextProvider' }, { autoTrackExposure: N && k }),
        { enabled: R } = c.O.useExperiment({ location: 'gift card' }),
        L = g;
    N && ((L = M && k ? m.Cj.SEASONAL_STANDARD_BOX : null != E ? E : _), R && (L = m.Cj.NITROWEEN_STANDARD));
    let [O, j] = o.useState(L),
        [B, Z] = o.useState(n && (0, p.MY)(C) === p.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == d ? h.intl.string(h.t.ZkOo1d) : d),
        [D, w] = o.useState(void 0),
        [U, F] = o.useState(void 0),
        W = (0, p.E5)(P, n),
        [G, Y] = o.useState(!1),
        [H, V] = o.useState(!1),
        [X, z] = o.useState(),
        K = o.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: n } = e;
                return (
                    V(!0),
                    (0, a.YD)(C, W)
                        .then(() => {
                            V(!1), null == n || n(), Y(!0);
                        })
                        .catch((e) => {
                            V(!1), z(e), Y(!0);
                        })
                );
            },
            [C, W, V, Y, z]
        ),
        q = (0, u.x8)(),
        $ = (0, i.Wu)([l.Z], () => l.Z.recommendedGiftSkuIds);
    return (0, r.jsx)(S.Provider, {
        value: {
            isGift: n,
            giftCode: W,
            giftMessage: d,
            giftRecipient: C,
            setGiftRecipient: v,
            giftRecipientError: T,
            setGiftRecipientError: I,
            validatingGiftRecipient: y,
            setValidatingGiftRecipient: A,
            soundEffect: D,
            setSoundEffect: w,
            emojiConfetti: U,
            setEmojiConfetti: F,
            customGiftMessage: B,
            setCustomGiftMessage: Z,
            selectedGiftStyle: O,
            setSelectedGiftStyle: j,
            sendGiftMessage: K,
            hasSentMessage: G,
            isSendingMessage: H,
            giftMessageError: X,
            alreadyHasHalloweenDeco: q,
            recommendedGiftSkuIds: $,
            giftingOrigin: b
        },
        children: x
    });
}
