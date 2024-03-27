"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var a = n("872717"),
  s = n("599110"),
  l = n("492249"),
  i = n("49111"),
  r = {
    [i.RPCCommands.GET_NETWORKING_CONFIG]: {
      scope: l.RPC_LOCAL_SCOPE,
      handler: () => Promise.all([a.HTTP.get({
        url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT,
        retries: 3
      }).then(e => {
        let {
          body: {
            address: t
          }
        } = e;
        return t
      }), a.HTTP.post({
        url: i.Endpoints.NETWORKING_TOKEN,
        retries: 3,
        oldFormErrors: !0
      }).then(e => {
        let {
          body: {
            token: t
          }
        } = e;
        return t
      })]).then(e => {
        let [t, n] = e;
        return {
          address: t,
          token: n
        }
      })
    },
    [i.RPCCommands.NETWORKING_SYSTEM_METRICS]: {
      scope: l.RPC_LOCAL_SCOPE,
      handler(e) {
        let {
          socket: t,
          args: n
        } = e;
        n.application_id = t.application.id, s.default.track(i.AnalyticEvents.NETWORKING_SYSTEM_METRICS, n)
      }
    },
    [i.RPCCommands.NETWORKING_PEER_METRICS]: {
      scope: l.RPC_LOCAL_SCOPE,
      handler(e) {
        let {
          socket: t,
          args: n
        } = e;
        n.application_id = t.application.id, s.default.track(i.AnalyticEvents.NETWORKING_PEER_METRICS, n)
      }
    },
    [i.RPCCommands.NETWORKING_CREATE_TOKEN]: {
      scope: l.RPC_LOCAL_SCOPE,
      handler: () => a.HTTP.post({
        url: i.Endpoints.NETWORKING_TOKEN,
        retries: 1,
        oldFormErrors: !0
      }).then(e => e.body)
    }
  }