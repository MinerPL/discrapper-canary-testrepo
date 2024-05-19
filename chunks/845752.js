"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("392711"),
  s = n.n(a),
  l = n("243814"),
  i = n("186901"),
  r = n("981631");

function o(e, t) {
  return {
    [r.RPCEvents.VOICE_SETTINGS_UPDATE]: {
      scope: {
        [i.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, l.OAuth2Scopes.RPC_VOICE_READ]
      },
      handler: () => t => {
        let {
          prevState: n,
          dispatch: a
        } = t, l = e();
        return !s().isEqual(l, n) && a(l), l
      }
    },
    [r.RPCEvents.VOICE_SETTINGS_UPDATE_2]: {
      scope: i.RPC_LOCAL_SCOPE,
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
          return !s().isEqual(i, a) && l(i), i
        }
      }
    }
  }
}