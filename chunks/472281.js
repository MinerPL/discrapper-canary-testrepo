"use strict";
n.r(t), n("47120");
var a = n("570140"),
  s = n("709054"),
  l = n("914946"),
  i = n("452426"),
  r = n("561205"),
  o = n("186901"),
  u = n("981631");
t.default = {
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