n.d(t, {
    V: function () {
        return _;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), s = n(594174), l = n(78839), r = n(585483), o = n(74538), c = n(138464), d = n(474936), u = n(981631);
function _(e) {
    let {
            processedCode: t,
            channelContext: _,
            customGiftMessage: E,
            giftInfo: m
        } = e, I = !1, T = null, h = s.default.getCurrentUser(), N = (0, o.yd)(null == h ? void 0 : h.premiumType, d.p9.TIER_0);
    (0, a.openModalLazy)(async () => {
        let {default: e} = await Promise.all([
            n.e('92446'),
            n.e('16776')
        ]).then(n.bind(n, 409858));
        return n => {
            var a, s;
            return (0, i.jsx)(e, {
                code: t,
                channelContext: _,
                customGiftMessage: E,
                emojiName: null == m ? void 0 : null === (a = m.emoji) || void 0 === a ? void 0 : a.name,
                soundId: null == m ? void 0 : null === (s = m.sound) || void 0 === s ? void 0 : s.id,
                onComplete: (e, t) => {
                    T = e, t && (I = t, e.isSubscription && null == l.ZP.getPremiumSubscription(!1) && (0, c.H)(!0));
                },
                ...n
            });
        };
    }, {
        onCloseCallback: () => {
            var e;
            I && null != T && !N && T.isSubscription && (null == T ? void 0 : null === (e = T.subscriptionPlan) || void 0 === e ? void 0 : e.premiumSubscriptionType) === d.p9.TIER_2 && r.S.dispatch(u.CkL.PREMIUM_SUBSCRIPTION_CREATED);
        }
    });
}
