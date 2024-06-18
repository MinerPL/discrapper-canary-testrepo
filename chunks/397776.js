"use strict";
n(47120);
var i = n(147913),
  r = n(592125),
  s = n(944486),
  o = n(116347),
  a = n(237292),
  l = n(118910);

function u(e) {
  let {
    channelId: t
  } = e;
  if (null == t || !(0, a.mG)({
      location: "channel_select"
    }) || !(0, o.dg)()) return !1;
  let n = r.Z.getChannel(t);
  if (null == n || !n.isDM()) return !1;
  let i = (0, o.uu)(t);
  return null != i && ((0, l.a)({
    warningId: i.id,
    warningType: i.type,
    senderId: n.getRecipientId(),
    channelId: t
  }), !0)
}

function _(e) {
  let {
    channels: t
  } = e;
  if (!(0, a.mG)({
      location: "channel_updates"
    }) || !(0, o.dg)()) return !1;
  let n = s.Z.getCurrentlySelectedChannelId();
  if (null == n) return !1;
  let i = t.find(e => e.id === n);
  if (null == i) return !1;
  let r = (0, o.uu)(i.id);
  return !!(null != r && i.isDM()) && ((0, l.a)({
    warningId: r.id,
    warningType: r.type,
    senderId: i.getRecipientId(),
    channelId: i.id
  }), !0)
}
class d extends i.Z {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      CHANNEL_SELECT: u,
      CHANNEL_UPDATES: _
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new d