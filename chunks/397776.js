n(47120);
var r = n(147913),
  i = n(592125),
  a = n(944486),
  s = n(116347),
  o = n(237292),
  l = n(118910);

function u(e) {
  let {
channelId: t
  } = e;
  if (null == t || !(0, o.mG)({
  location: 'channel_select'
}) || !(0, s.dg)())
return !1;
  let n = i.Z.getChannel(t);
  if (null == n || !n.isDM())
return !1;
  let r = (0, s.uu)(t);
  return null != r && ((0, l.a)({
warningId: r.id,
warningType: r.type,
senderId: n.getRecipientId(),
channelId: t
  }), !0);
}

function c(e) {
  let {
channels: t
  } = e;
  if (!(0, o.mG)({
  location: 'channel_updates'
}) || !(0, s.dg)())
return !1;
  let n = a.Z.getCurrentlySelectedChannelId();
  if (null == n)
return !1;
  let r = t.find(e => e.id === n);
  if (null == r)
return !1;
  let i = (0, s.uu)(r.id);
  return !!(null != i && r.isDM()) && ((0, l.a)({
warningId: i.id,
warningType: i.type,
senderId: r.getRecipientId(),
channelId: r.id
  }), !0);
}
class d extends r.Z {
  constructor(...e) {
var t, n, r;
super(...e), t = this, n = 'actions', r = {
  CHANNEL_SELECT: u,
  CHANNEL_UPDATES: c
}, n in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r;
  }
}
t.Z = new d();