"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("570140"),
  i = n("317770"),
  r = n("594174"),
  o = n("295226"),
  u = n("74538"),
  d = n("374023"),
  c = n("913976"),
  f = n("104494"),
  E = n("29920"),
  h = n("786397"),
  _ = n("248042"),
  C = n("318199"),
  m = n("474936");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = "PremiumServerDriveAnnouncementModal";
class g extends i.default {
  _initialize() {
    l.default.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), l.default.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  _terminate() {
    l.default.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), l.default.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  constructor(...e) {
    super(...e), S(this, "maybeOpenServerDriveAnnouncementModal", (e, t) => {
      let l = (0, C.extractAnnouncementModalContent)({
        content: e,
        isPreview: t
      });
      return null != l && ((0, s.closeModal)(p), (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "318199"));
        return t => (0, a.jsx)(e, {
          renderModalProps: t,
          properties: l
        })
      }, {
        modalKey: p
      }), !0)
    }), S(this, "handlePreview", e => {
      let {
        properties: t
      } = e;
      this.maybeOpenServerDriveAnnouncementModal(t, !0)
    }), S(this, "getOfferFromStore", () => {
      let e = r.default.getCurrentUser();
      if ((0, u.isPremium)(e)) return {};
      let t = [(0, m.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID), (0, m.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID), (0, m.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID), (0, m.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID)].map(e => o.default.getUserDiscountOffer(e)).filter(e => null != e && !(0, f.hasUserDiscountExpired)(e)).shift();
      if (null != t) return {
        userDiscountOffer: t
      };
      let n = [(0, m.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID), (0, m.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID), (0, m.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID), (0, m.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID), (0, m.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID), (0, m.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID), (0, m.PREMIUM_TIER_2_AUTH3_TRIAL_ID), (0, m.PREMIUM_TIER_2_NEW_USER_CPV_TRIAL_ID)].map(e => o.default.getUserTrialOffer(e)).filter(e => null != e && !(0, h.hasUserTrialOfferExpired)(e)).shift();
      return null != n ? {
        userTrialOffer: n
      } : {}
    }), S(this, "mayShowAnnouncementModal", async () => {
      if (await (0, _.maybeFetchActiveBogoPromotion)(), !d.ProcessArgs.isDisallowPopupsSet()) {
        if (!(0, s.hasAnyModalOpen)() && c.default.getCurrentConfig({
            location: "OfferAnnouncementManager"
          }).enabled) {
          for (let e of (await (0, E.fetchPremiumMarketingContentWithUserOffer)(this.getOfferFromStore())))
            if (this.maybeOpenServerDriveAnnouncementModal(e, !1)) break
        }!(0, s.hasAnyModalOpen)() && await (0, _.isEligibleForBOGOAnnouncementModal)() && (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("28614")]).then(n.bind(n, "868508"));
          return t => (0, a.jsx)(e, {
            renderModalProps: t
          })
        })
      }
    })
  }
}
t.default = new g