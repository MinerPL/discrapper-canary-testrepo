n.d(t, {
  Z: function() {
return u;
  }
}), n(411104);
var r = n(493683),
  i = n(904245),
  a = n(541716),
  s = n(957730),
  o = n(592125),
  l = n(838440);
let u = async e => {
  let {
userId: t,
content: n,
location: u,
openChannel: c = !0
  } = e, {
valid: d,
failureReason: _
  } = await (0, l.v)({
type: a.I.NORMAL,
content: n,
channel: null
  });
  if (!d)
throw Error(_);
  let E = c ? await r.Z.openPrivateChannel(t, !1, !1, u) : await r.Z.getOrEnsurePrivateChannel(t),
f = o.Z.getChannel(E);
  if (null == f)
throw Error('Failed to open private channel');
  let h = s.ZP.parse(f, n);
  return i.Z.sendMessage(f.id, h);
};