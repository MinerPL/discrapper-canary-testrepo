"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("913144"),
  i = n("316272"),
  r = n("697218"),
  o = n("340412"),
  u = n("719923"),
  d = n("197881"),
  c = n("443504"),
  f = n("154889"),
  E = n("247820"),
  h = n("833516"),
  _ = n("641078"),
  C = n("518151"),
  S = n("646718");
let I = "PremiumServerDriveAnnouncementModal";
class m extends i.default {
  _initialize() {
    l.default.subscribe("POST_CONNECTION_OPEN", this.mayShowAnnouncementModal), l.default.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  _terminate() {
    l.default.unsubscribe("POST_CONNECTION_OPEN", this.mayShowAnnouncementModal), l.default.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  constructor(...e) {
    super(...e), this.maybeOpenServerDriveAnnouncementModal = (e, t) => {
      let l = (0, C.extractAnnouncementModalContent)({
        content: e,
        isPreview: t
      });
      return null != l && ((0, s.closeModal)(I), (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("518151").then(n.bind(n, "518151"));
        return t => (0, a.jsx)(e, {
          renderModalProps: t,
          properties: l
        })
      }, {
        modalKey: I
      }), !0)
    }, this.handlePreview = e => {
      let {
        properties: t
      } = e;
      this.maybeOpenServerDriveAnnouncementModal(t, !0)
    }, this.getOfferFromStore = () => {
      let e = r.default.getCurrentUser();
      if ((0, u.isPremium)(e)) return {};
      let t = [(0, S.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID), (0, S.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID), (0, S.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID), (0, S.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID)].map(e => o.default.getUserDiscountOffer(e)).filter(e => null != e && !(0, f.hasUserDiscountExpired)(e)).shift();
      if (null != t) return {
        userDiscountOffer: t
      };
      let n = [(0, S.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID), (0, S.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID), (0, S.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID), (0, S.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID), (0, S.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID), (0, S.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID), (0, S.PREMIUM_TIER_2_AUTH3_TRIAL_ID)].map(e => o.default.getUserTrialOffer(e)).filter(e => null != e && !(0, h.hasUserTrialOfferExpired)(e)).shift();
      return null != n ? {
        userTrialOffer: n
      } : {}
    }, this.mayShowAnnouncementModal = async () => {
      if (await (0, _.maybeFetchActiveBogoPromotion)(), !d.ProcessArgs.isDisallowPopupsSet()) {
        if (!(0, s.hasAnyModalOpen)() && c.default.getCurrentConfig({
            location: "OfferAnnouncementManager"
          }).enabled) {
          let e = !(0, u.isPremium)(r.default.getCurrentUser()) && (!o.default.hasFetchedOffer() || o.default.shouldFetchOffer()),
            t = e ? await (0, E.fetchPremiumMarketingContent)() : await (0, E.fetchPremiumMarketingContentWithUserOffer)(this.getOfferFromStore());
          for (let e of t)
            if (this.maybeOpenServerDriveAnnouncementModal(e, !1)) break
        }!(0, s.hasAnyModalOpen)() && await (0, _.isEligibleForBOGOAnnouncementModal)() && (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("981125").then(n.bind(n, "981125"));
          return t => (0, a.jsx)(e, {
            renderModalProps: t
          })
        })
      }
    }
  }
}
var p = new m