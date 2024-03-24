"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("913144"),
  i = n("316272"),
  r = n("340412"),
  o = n("197881"),
  u = n("982457"),
  d = n("443504"),
  c = n("247820"),
  f = n("641078"),
  E = n("518151");
let h = "PremiumServerDriveAnnouncementModal";
class _ extends i.default {
  _initialize() {
    l.default.subscribe("POST_CONNECTION_OPEN", this.mayShowAnnouncementModal), l.default.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  _terminate() {
    l.default.unsubscribe("POST_CONNECTION_OPEN", this.mayShowAnnouncementModal), l.default.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  constructor(...e) {
    super(...e), this.maybeOpenServerDriveAnnouncementModal = (e, t) => {
      let l = (0, E.extractAnnouncementModalContent)({
        content: e,
        isPreview: t
      });
      return null != l && ((0, s.closeModal)(h), (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("518151").then(n.bind(n, "518151"));
        return t => (0, a.jsx)(e, {
          renderModalProps: t,
          properties: l
        })
      }, {
        modalKey: h
      }), !0)
    }, this.handlePreview = e => {
      let {
        properties: t
      } = e;
      this.maybeOpenServerDriveAnnouncementModal(t, !0)
    }, this.mayShowAnnouncementModal = async () => {
      if (await (0, f.maybeFetchActiveBogoPromotion)(), !o.ProcessArgs.isDisallowPopupsSet()) {
        if (!(0, s.hasAnyModalOpen)() && d.default.getCurrentConfig({
            location: "OfferAnnouncementManager"
          }).enabled) {
          let e = await (0, c.fetchPremiumMarketingContent)();
          for (let t of e)
            if (this.maybeOpenServerDriveAnnouncementModal(t, !1)) break
        }!(0, s.hasAnyModalOpen)() && await (0, f.isEligibleForBOGOAnnouncementModal)() && (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("981125").then(n.bind(n, "981125"));
          return t => (0, a.jsx)(e, {
            renderModalProps: t
          })
        })
      }
    }, this._hasTrialOffer = async () => {
      try {
        if (r.default.shouldFetchOffer() && await u.default.fetchUserTrialOffer(), r.default.hasFetchedOffer() && r.default.hasAnyUnexpiredOffer()) return !0;
        return !1
      } catch (e) {
        return !1
      }
    }
  }
}
var C = new _