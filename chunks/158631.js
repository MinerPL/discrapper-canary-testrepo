"use strict";
n.d(t, {
  ZP: function() {
    return _
  },
  _n: function() {
    return u
  },
  dD: function() {
    return E
  },
  tA: function() {
    return c
  },
  zW: function() {
    return d
  }
});
var i = n(442837),
  r = n(695346);
n(199902);
var s = n(314897),
  o = n(592125);
n(944486);
var a = n(885110),
  l = n(770471);

function u() {
  let e = (0, i.e7)([s.default], () => s.default.getId()),
    {
      canBroadcast: t
    } = l.Z.useExperiment({
      location: "use_self_broadcast"
    }, {
      autoTrackExposure: !1
    }),
    n = (0, i.e7)([a.Z], () => a.Z.getBroadcast());
  return t && (null == n ? void 0 : n.userId) === e ? n : null
}

function _() {
  return null != u()
}

function d(e) {
  let t = u(),
    n = (0, i.e7)([o.Z], () => o.Z.getChannel(e));
  return null != t && null != n && n.ownerId === t.userId && n.isBroadcastChannel()
}

function c(e) {
  let t = s.default.getId(),
    {
      canBroadcast: n
    } = l.Z.getCurrentConfig({
      location: "is_broadcasting_in_channel"
    }, {
      autoTrackExposure: !1
    }),
    i = a.Z.getBroadcast();
  if (!n || null == i || i.userId !== t) return !1;
  let r = o.Z.getChannel(e);
  return null != r && r.ownerId === i.userId && r.isBroadcastChannel()
}

function E() {
  let e = r.MI.getSetting(),
    t = r.GA.getSetting();
  return r.Uc.getSetting() || e.length > 0 || t.length > 0
}
n(292584)