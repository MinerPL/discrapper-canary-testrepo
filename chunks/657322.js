"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("860677");
var a = n("599110"),
  s = n("843158"),
  i = n("861309"),
  l = n("846678"),
  r = n("842897"),
  o = n("49111"),
  u = {
    [o.RPCCommands.SUBSCRIBE]: {
      async handler(e) {
        let {
          server: t,
          socket: n,
          evt: u,
          args: d
        } = e, c = t.events[u];
        if (null == c) throw new i.default({
          errorCode: o.RPCErrors.INVALID_EVENT
        }, "Invalid event: ".concat(u));
        if (!(0, l.default)(n.authorization.scopes, c.scope)) throw new i.default({
          errorCode: o.RPCErrors.INVALID_PERMISSIONS
        }, "Not authenticated or invalid scope");
        if (s.ExperimentRPCServerAnalyticsKillswitch.getCurrentConfig({
            location: "RPCServer"
          }).enabled && a.default.track(o.AnalyticEvents.RPC_SUBSCRIPTION_REQUESTED, {
            event: u,
            scope: "object" == typeof c.scope ? JSON.stringify(c.scope) : c.scope,
            application_id: n.application.id
          }), null != c.validation) {
          let e = await t.getJoi(),
            n = e.validate(d, c.validation(e), {
              convert: !1
            });
          if (null != n.error) throw new i.default({
            errorCode: o.RPCErrors.INVALID_PAYLOAD
          }, "Invalid subscription parameters provided")
        }
        let f = c.handler({
            args: d,
            socket: n
          }),
          E = await (0, r.getInitialSubscriptionPayload)(n, u, d);
        return new Promise(e => {
          setImmediate(() => {
            t.addSubscription(n, u, d, f), null != E && t.dispatchToSubscriptions(u, e => e.socket.id === n.id, E)
          }), e({
            evt: u
          })
        })
      }
    },
    [o.RPCCommands.UNSUBSCRIBE]: {
      handler(e) {
        let {
          server: t,
          socket: n,
          evt: a,
          args: s
        } = e;
        if (null == t.events[a]) throw new i.default({
          errorCode: o.RPCErrors.INVALID_EVENT
        }, "Invalid event: ".concat(a));
        return t.removeSubscription(n, a, s), {
          evt: a
        }
      }
    }
  }