"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var a = n("913144"),
  s = n("299039"),
  l = n("578287"),
  i = n("716724"),
  r = n("613652"),
  o = n("492249"),
  u = n("49111"),
  d = {
    [u.RPCCommands.CREATE_ACTIVITY_INSTANCE]: {
      scope: {
        [o.RPC_SCOPE_CONFIG.ANY]: [o.RPC_AUTHENTICATED_SCOPE]
      },
      handler(e) {
        let {
          socket: t
        } = e;
        return (0, l.validatePostMessageTransport)(t.transport), Promise.resolve({
          instance_id: s.default.fromTimestamp(Date.now())
        })
      }
    },
    [u.RPCCommands.JOIN_ACTIVITY_INSTANCE]: {
      scope: {
        [o.RPC_SCOPE_CONFIG.ANY]: [o.RPC_AUTHENTICATED_SCOPE]
      },
      validation: e => (0, i.default)(e).required().keys({
        instance_id: e.string().required().allow(null)
      }),
      handler(e) {
        let {
          socket: t,
          args: {
            instance_id: n
          }
        } = e;
        (0, l.validatePostMessageTransport)(t.transport);
        let s = (0, r.default)();
        return null != t.application.id && (null == s ? void 0 : s.id) != null && a.default.dispatch({
          type: "EMBEDDED_ACTIVITY_INSTANCE_CHANGE",
          channelId: s.id,
          instanceId: n
        }), Promise.resolve()
      }
    },
    [u.RPCCommands.LEAVE_ACTIVITY_INSTANCE]: {
      scope: {
        [o.RPC_SCOPE_CONFIG.ANY]: [o.RPC_AUTHENTICATED_SCOPE]
      },
      handler(e) {
        let {
          socket: t
        } = e;
        (0, l.validatePostMessageTransport)(t.transport);
        let n = (0, r.default)();
        return null != t.application.id && (null == n ? void 0 : n.id) != null && a.default.dispatch({
          type: "EMBEDDED_ACTIVITY_INSTANCE_CHANGE",
          channelId: n.id,
          instanceId: null
        }), Promise.resolve()
      }
    }
  }