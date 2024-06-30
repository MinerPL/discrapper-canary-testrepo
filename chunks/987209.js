t.d(n, {
    KB: function () {
        return N;
    },
    wD: function () {
        return h;
    }
}), t(47120);
var r = t(735250), l = t(470079), i = t(479446), s = t(646476), a = t(975104), o = t(669079), u = t(598), c = t(474936), d = t(689938);
let m = c.Cj.STANDARD_BOX, f = void 0, [x, h, C] = (0, a.Z)();
function N(e) {
    let {
            isGift: n = !1,
            giftRecipient: t,
            giftMessage: a,
            children: h
        } = e, {selectedSkuId: C} = (0, u.usePaymentContext)(), [N, v] = l.useState(t), [p, j] = l.useState(), [I, S] = l.useState(!1), E = (0, o.pO)(N), g = (0, s.rK)(), {enabled: A} = s.ZP.useExperiment({ location: 'PaymentContextProvider' }, { autoTrackExposure: E && g }), [O, P] = l.useState(E ? A && g ? c.Cj.SEASONAL_STANDARD_BOX : m : f), [T, y] = l.useState(n && (0, o.MY)(N) === o.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD ? d.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : a), [M, B] = l.useState(void 0), [R, L] = l.useState(void 0), k = (0, o.E5)(C, n), [U, _] = l.useState(!1), [b, Z] = l.useState(!1), [D, G] = l.useState(), H = l.useCallback(e => {
            let {onSubscriptionConfirmation: n} = e;
            return Z(!0), (0, i.Y)(N, k).then(() => {
                Z(!1), null == n || n(), _(!0);
            }).catch(e => {
                Z(!1), G(e), _(!0);
            });
        }, [
            N,
            k,
            Z,
            _,
            G
        ]);
    return (0, r.jsx)(x.Provider, {
        value: {
            isGift: n,
            giftCode: k,
            giftMessage: a,
            giftRecipient: N,
            setGiftRecipient: v,
            giftRecipientError: p,
            setGiftRecipientError: j,
            validatingGiftRecipient: I,
            setValidatingGiftRecipient: S,
            soundEffect: M,
            setSoundEffect: B,
            emojiConfetti: R,
            setEmojiConfetti: L,
            customGiftMessage: T,
            setCustomGiftMessage: y,
            selectedGiftStyle: O,
            setSelectedGiftStyle: P,
            sendGiftMessage: H,
            hasSentMessage: U,
            isSendingMessage: b,
            giftMessageError: D
        },
        children: h
    });
}
