"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("70102"), n("222007");
var a = n("308757"),
  s = n("812204"),
  l = n("929479"),
  i = n("861309"),
  r = n("716724"),
  o = n("613652"),
  u = n("383928"),
  d = n("56245"),
  c = n("492249"),
  f = n("49111"),
  E = n("646718");
let h = [s.default.RPC];

function _(e) {
  if (null == e) return {
    lock: f.NOOP_NULL,
    context: f.AppContext.APP
  };
  let t = (0, d.unlockOverlay)(e);
  return {
    lock: t.lock,
    context: t.context
  }
}

function C(e, t) {
  let n = {
    subscriptionTier: E.PremiumSubscriptionSKUs.TIER_2,
    analyticsLocations: h,
    analyticsObject: t
  };
  switch (e) {
    case f.AppContext.APP:
      return l.default.openPremiumPaymentModalInApp(n);
    case f.AppContext.OVERLAY:
      return l.default.openPremiumPaymentModalInOverlay(n);
    default:
      throw Error("Unexpected app context: ".concat(e))
  }
}
var S = {
  [f.RPCCommands.START_PURCHASE]: {
    [c.RPC_SCOPE_CONFIG.ANY]: [c.RPC_AUTHENTICATED_SCOPE, c.RPC_LOCAL_SCOPE],
    validation: e => (0, r.default)(e).required().keys({
      sku_id: e.string().required(),
      pid: e.number().min(0)
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          sku_id: n,
          pid: s
        }
      } = e;
      (0, u.validateTransportType)(t.transport);
      let l = t.application.id;
      if (null == l) throw new i.default({
        errorCode: f.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let {
        lock: r,
        context: d
      } = _(t.transport !== c.TransportTypes.POST_MESSAGE ? s : null), E = (0, o.default)();
      if (null == E) throw new i.default({
        errorCode: f.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel");
      let S = {
          page: f.AnalyticsPages.IN_APP
        },
        I = async () => {
          try {
            let e = await (0, a.openIAPPurchaseModal)({
              applicationId: l,
              skuId: n,
              openPremiumPaymentModal: () => C(d, S),
              analyticsLocations: h,
              analyticsLocationObject: S,
              context: d
            });
            return r(), e
          } catch (e) {
            if (r(), null != e) {
              let t = "";
              throw t = "object" == typeof e && "message" in e && "string" == typeof e.message ? e.message : "string" == typeof e ? e : JSON.stringify(e), new i.default({
                errorCode: f.RPCErrors.PURCHASE_ERROR
              }, t)
            }
            throw new i.default({
              errorCode: f.RPCErrors.PURCHASE_CANCELED
            }, "Purchase was canceled by the user.")
          }
        };
      return I()
    }
  },
  [f.RPCCommands.START_PREMIUM_PURCHASE]: {
    [c.RPC_SCOPE_CONFIG.ANY]: [c.RPC_AUTHENTICATED_SCOPE, c.RPC_LOCAL_SCOPE],
    validation: e => (0, r.default)(e).keys({
      pid: e.number().min(0)
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          pid: n
        }
      } = e;
      (0, u.validateTransportType)(t.transport);
      let a = t.application.id;
      if (null == a) throw new i.default({
        errorCode: f.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let {
        lock: s,
        context: l
      } = _(t.transport !== c.TransportTypes.POST_MESSAGE ? n : null), r = {
        page: f.AnalyticsPages.IN_APP
      };
      return C(l, r).then(() => {
        s()
      }, e => {
        if (s(), null != e) throw new i.default({
          errorCode: f.RPCErrors.PURCHASE_ERROR
        }, e);
        throw new i.default({
          errorCode: f.RPCErrors.PURCHASE_CANCELED
        }, "Purchase was canceled by the user.")
      })
    }
  }
}