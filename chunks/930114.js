n.d(t, {
    V: function () {
        return _;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(594174),
    r = n(78839),
    l = n(585483),
    o = n(74538),
    c = n(138464),
    u = n(474936),
    d = n(981631);
function _(e) {
    let { processedCode: t, channelContext: _, customGiftMessage: E, giftInfo: I } = e,
        m = !1,
        T = null,
        h = s.default.getCurrentUser(),
        N = (0, o.yd)(null == h ? void 0 : h.premiumType, u.p9.TIER_0);
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('92446'), n.e('56598')]).then(n.bind(n, 409858));
            return (n) => {
                var a, s;
                return (0, i.jsx)(e, {
                    code: t,
                    channelContext: _,
                    customGiftMessage: E,
                    emojiName: null == I ? void 0 : null === (a = I.emoji) || void 0 === a ? void 0 : a.name,
                    soundId: null == I ? void 0 : null === (s = I.sound) || void 0 === s ? void 0 : s.id,
                    onComplete: (e, t) => {
                        (T = e), t && ((m = t), e.isSubscription && null == r.ZP.getPremiumSubscription(!1) && (0, c.H)(!0));
                    },
                    ...n
                });
            };
        },
        {
            onCloseCallback: () => {
                var e;
                m && null != T && !N && T.isSubscription && (null == T ? void 0 : null === (e = T.subscriptionPlan) || void 0 === e ? void 0 : e.premiumSubscriptionType) === u.p9.TIER_2 && l.S.dispatch(d.CkL.PREMIUM_SUBSCRIPTION_CREATED);
            }
        }
    );
}
