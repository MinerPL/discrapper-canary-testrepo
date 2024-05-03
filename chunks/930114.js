"use strict";
n.r(t), n.d(t, {
  openGiftCodeAcceptModal: function() {
    return f
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("594174"),
  i = n("78839"),
  r = n("585483"),
  o = n("74538"),
  u = n("138464"),
  d = n("474936"),
  c = n("981631");

function f(e) {
  let {
    processedCode: t,
    channelContext: f,
    customGiftMessage: E,
    giftInfo: _
  } = e, m = !1, T = null, I = l.default.getCurrentUser(), p = (0, o.isPremiumAtLeast)(null == I ? void 0 : I.premiumType, d.PremiumTypes.TIER_0);
  (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("8016"), n.e("92446"), n.e("72760")]).then(n.bind(n, "409858"));
    return n => {
      var a, l;
      return (0, s.jsx)(e, {
        code: t,
        channelContext: f,
        customGiftMessage: E,
        emojiName: null == _ ? void 0 : null === (a = _.emoji) || void 0 === a ? void 0 : a.name,
        soundId: null == _ ? void 0 : null === (l = _.sound) || void 0 === l ? void 0 : l.id,
        onComplete: (e, t) => {
          T = e, t && (m = t, e.isSubscription && null == i.default.getPremiumSubscription(!1) && (0, u.setCanPlayWowMoment)(!0))
        },
        ...n
      })
    }
  }, {
    onCloseCallback: () => {
      var e;
      m && null != T && !p && T.isSubscription && (null == T ? void 0 : null === (e = T.subscriptionPlan) || void 0 === e ? void 0 : e.premiumSubscriptionType) === d.PremiumTypes.TIER_2 && r.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED)
    }
  })
}