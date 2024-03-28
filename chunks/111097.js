"use strict";
n.r(t), n("411104"), n("47120");
var a = n("72924"),
  s = n("100527"),
  l = n("367207"),
  i = n("996106"),
  r = n("452426"),
  o = n("561205"),
  u = n("334288"),
  d = n("852926"),
  c = n("186901"),
  f = n("981631"),
  E = n("474936");
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
t.default = {
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
      } = _(t.transport !== c.TransportTypes.POST_MESSAGE ? s : null);
      if (null == (0, o.default)()) throw new i.default({
        errorCode: f.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel");
      let E = {
        page: f.AnalyticsPages.IN_APP
      };
      return (async () => {
        try {
          let e = await (0, a.openIAPPurchaseModal)({
            applicationId: l,
            skuId: n,
            openPremiumPaymentModal: () => C(d, E),
            analyticsLocations: h,
            analyticsLocationObject: E,
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
      })()
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
      if ((0, u.validateTransportType)(t.transport), null == t.application.id) throw new i.default({
        errorCode: f.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let {
        lock: a,
        context: s
      } = _(t.transport !== c.TransportTypes.POST_MESSAGE ? n : null);
      return C(s, {
        page: f.AnalyticsPages.IN_APP
      }).then(() => {
        a()
      }, e => {
        if (a(), null != e) throw new i.default({
          errorCode: f.RPCErrors.PURCHASE_ERROR
        }, e);
        throw new i.default({
          errorCode: f.RPCErrors.PURCHASE_CANCELED
        }, "Purchase was canceled by the user.")
      })
    }
  }
}