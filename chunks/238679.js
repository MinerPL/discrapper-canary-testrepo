"use strict";
n.r(t), n.d(t, {
  activityInstanceConnectedParticipants: function() {
    return f
  },
  activityInstanceConnectedParticipantsScope: function() {
    return E
  },
  activityInstanceConnectedParticipantsUpdateEvent: function() {
    return h
  },
  subscribeToActivityInstanceConnectedParticipants: function() {
    return _
  }
});
var a = n("392711"),
  s = n.n(a),
  l = n("570140"),
  i = n("317381"),
  r = n("594174"),
  o = n("823379"),
  u = n("5192"),
  d = n("863141"),
  c = n("186901");

function f() {
  let e = i.default.getCurrentEmbeddedActivity();
  if (null == e) return {
    participants: []
  };
  let {
    guildId: t,
    channelId: n
  } = e;
  return {
    participants: Array.from(e.userIds, e => {
      let a = r.default.getUser(e);
      if (null == a) return;
      let s = (0, u.getNickname)(t, n, a);
      return {
        ...(0, d.default)(a),
        nickname: null != s ? s : void 0
      }
    }).filter(o.isNotNullish)
  }
}
let E = {
    [c.RPC_SCOPE_CONFIG.ANY]: [c.RPC_AUTHENTICATED_SCOPE]
  },
  h = {
    scope: E,
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = f();
      return !s().isEqual(a, t) && n(a), a
    }
  };

function _(e) {
  let t = "EMBEDDED_ACTIVITY_UPDATE",
    n = () => {
      e(f())
    };
  return l.default.subscribe(t, n), () => l.default.unsubscribe(t, n)
}