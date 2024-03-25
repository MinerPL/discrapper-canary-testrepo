"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("917351"),
  s = n.n(a),
  l = n("492249"),
  i = n("49111");

function r(e, t) {
  return {
    [i.RPCEvents.VOICE_SETTINGS_UPDATE]: {
      scope: {
        [l.RPC_SCOPE_CONFIG.ANY]: [i.OAuth2Scopes.RPC, i.OAuth2Scopes.RPC_VOICE_READ]
      },
      handler: () => t => {
        let {
          prevState: n,
          dispatch: a
        } = t, l = e();
        return !s.isEqual(l, n) && a(l), l
      }
    },
    [i.RPCEvents.VOICE_SETTINGS_UPDATE_2]: {
      scope: l.RPC_LOCAL_SCOPE,
      handler(e) {
        let {
          socket: n
        } = e;
        return e => {
          let {
            prevState: a,
            dispatch: l
          } = e;
          if (null == n.application.id) return a;
          let i = t(n.application.id);
          return !s.isEqual(i, a) && l(i), i
        }
      }
    }
  }
}