"use strict";
n.d(t, {
  L9: function() {
    return T
  },
  vM: function() {
    return I
  }
});
var i = n(544891),
  r = n(381499),
  s = n(570140),
  o = n(496929),
  a = n(706454),
  l = n(675478),
  u = n(164207),
  _ = n(518638),
  d = n(1844),
  c = n(474936),
  E = n(981631);
async function I() {
  if (!d.Z.isFetchingActiveOutboundPromotions) try {
    s.Z.dispatch({
      type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH"
    });
    let t = u.t.getCurrentConfig({
        location: "5731cc_1"
      }, {
        autoTrackExposure: !1
      }).previewEnabled ? E.ANM.OUTBOUND_PROMOTIONS_PREVIEW : E.ANM.OUTBOUND_PROMOTIONS,
      n = (await i.tn.get({
        url: t,
        query: {
          locale: a.default.locale
        },
        oldFormErrors: !0
      })).body,
      r = d.Z.consumedInboundPromotionId;
    if (!d.Z.hasFetchedConsumedInboundPromotionId) {
      var e;
      let t = (await (0, o.yD)(c.RQ, !1)).find(e => null != e.promotion_id && !0 === e.consumed);
      r = null !== (e = null == t ? void 0 : t.promotion_id) && void 0 !== e ? e : null
    }
    s.Z.dispatch({
      type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS",
      activeOutboundPromotions: n.map(e => (0, _.X_)(e)),
      consumedInboundPromotionId: r
    })
  } catch (e) {
    s.Z.dispatch({
      type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL"
    })
  }
}
async function T() {
  if (!d.Z.isFetchingActiveBogoPromotion) try {
    s.Z.dispatch({
      type: "ACTIVE_BOGO_PROMOTION_FETCH"
    });
    let e = (await i.tn.get({
      url: E.ANM.BOGO_PROMOTIONS,
      query: {
        locale: a.default.locale
      }
    })).body;
    s.Z.dispatch({
      type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS",
      activePromotion: (0, _.kr)(e)
    })
  } catch (e) {
    s.Z.dispatch({
      type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL"
    })
  }
}
t.ZP = {
  fetchActiveOutboundPromotions: I,
  dismissOutboundPromotionNotice: function() {
    s.Z.dispatch({
      type: "OUTBOUND_PROMOTION_NOTICE_DISMISS"
    });
    let e = d.Z.lastDismissedOutboundPromotionStartDate;
    null != e && l.hW.updateAsync("userContent", t => {
      t.lastDismissedOutboundPromotionStartDate = r.Gm.create({
        value: e
      })
    }, l.fy.INFREQUENT_USER_ACTION)
  },
  markOutboundPromotionsSeen() {
    s.Z.dispatch({
      type: "OUTBOUND_PROMOTIONS_SEEN"
    })
  },
  fetchActiveBogoPromotion: T
}