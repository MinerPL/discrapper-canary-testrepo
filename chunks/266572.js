"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var s = n("544891"),
  l = n("846519"),
  i = n("481060"),
  r = n("496929"),
  o = n("115130"),
  u = n("812206"),
  d = n("594174"),
  c = n("580130"),
  f = n("695103"),
  E = n("70956"),
  h = n("998502"),
  _ = n("996106"),
  C = n("186901"),
  m = n("981631");
let S = 10 * E.default.Millis.SECOND;
t.default = {
  [m.RPCCommands.VALIDATE_APPLICATION]: {
    scope: C.RPC_LOCAL_SCOPE,
    handler(e) {
      let {
        socket: t
      } = e, s = t.application.id;
      try {
        if (null == s) throw new _.default({
          errorCode: m.RPCErrors.INVALID_COMMAND
        }, "No application.");
        let e = u.default.getApplication(s);
        if (null == e) throw new _.default({
          errorCode: m.RPCErrors.INVALID_ENTITLEMENT
        }, "SKU does not exist.");
        let t = e.primarySkuId;
        if (null == t) throw new _.default({
          errorCode: m.RPCErrors.INVALID_ENTITLEMENT
        }, "SKU does not exist.");
        return Promise.race([(function(e, t) {
          let n = c.default.isEntitledToSku(d.default.getCurrentUser(), e, t);
          return null != n ? Promise.resolve(n) : (0, r.fetchUserEntitlementsForApplication)(t).then(() => !0 === c.default.isEntitledToSku(d.default.getCurrentUser(), e, t))
        })(t, e.id).then(e => {
          if (!e) throw new _.default({
            errorCode: m.RPCErrors.INVALID_ENTITLEMENT
          }, "User does not have entitlement.")
        }), (0, l.timeoutPromise)(S).then(() => {
          throw new _.default({
            errorCode: m.RPCErrors.INVALID_ENTITLEMENT
          }, "Timed out fetching entitlement.")
        })])
      } catch (e) {
        throw e.code === m.RPCErrors.INVALID_ENTITLEMENT && (h.default.focus(null, !0), (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("48748")]).then(n.bind(n, "52004"));
          return t => (0, a.jsx)(e, {
            ...t,
            applicationId: s
          })
        })), e
      }
    }
  },
  [m.RPCCommands.GET_ENTITLEMENT_TICKET]: {
    scope: C.RPC_LOCAL_SCOPE,
    handler(e) {
      let {
        socket: t
      } = e, l = t.application.id;
      if (null == l) throw new _.default({
        errorCode: m.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return s.HTTP.post({
        url: m.Endpoints.ENTITLEMENT_TICKET(l),
        body: {
          test_mode: f.default.inTestModeForApplication(l) || o.default.inDevModeForApplication(l)
        },
        retries: 3,
        oldFormErrors: !0
      }).then(e => {
        let {
          body: t
        } = e;
        return t
      }).catch(e => {
        throw h.default.focus(null, !0), (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("48748")]).then(n.bind(n, "52004"));
          return t => (0, a.jsx)(e, {
            ...t,
            applicationId: l
          })
        }), e
      })
    }
  }
}