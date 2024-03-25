"use strict";
a.r(t), a.d(t, {
  useSelfBroadcast: function() {
    return o
  },
  default: function() {
    return u
  },
  useIsBroadcastingInChannel: function() {
    return c
  },
  isBroadcastingInChannel: function() {
    return S
  },
  getIsBroadcastingToAnyone: function() {
    return f
  }
});
var l = a("446674"),
  n = a("845579");
a("373469");
var r = a("271938"),
  s = a("42203");
a("18494");
var i = a("101125"),
  d = a("9759");

function o() {
  let e = (0, l.useStateFromStores)([r.default], () => r.default.getId()),
    {
      canBroadcast: t
    } = d.default.useExperiment({
      location: "use_self_broadcast"
    }, {
      autoTrackExposure: !1
    }),
    a = (0, l.useStateFromStores)([i.default], () => i.default.getBroadcast());
  return t && (null == a ? void 0 : a.userId) === e ? a : null
}

function u() {
  let e = o();
  return null != e
}

function c(e) {
  let t = o(),
    a = (0, l.useStateFromStores)([s.default], () => s.default.getChannel(e));
  return null != t && null != a && a.ownerId === t.userId && a.isBroadcastChannel()
}

function S(e) {
  let t = r.default.getId(),
    {
      canBroadcast: a
    } = d.default.getCurrentConfig({
      location: "is_broadcasting_in_channel"
    }, {
      autoTrackExposure: !1
    }),
    l = i.default.getBroadcast();
  if (!a || null == l || l.userId !== t) return !1;
  let n = s.default.getChannel(e);
  return null != n && n.ownerId === l.userId && n.isBroadcastChannel()
}

function f() {
  let e = n.BroadcastAllowedGuildIds.getSetting(),
    t = n.BroadcastAllowedUserIds.getSetting(),
    a = n.BroadcastAllowFriends.getSetting();
  return a || e.length > 0 || t.length > 0
}
a("194051")