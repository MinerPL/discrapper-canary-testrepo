t.d(n, {
  S: function() {
return r;
  },
  Y: function() {
return m;
  }
}), t(411104);
var r, l, i = t(512722),
  s = t.n(i),
  a = t(493683),
  o = t(904245),
  u = t(957730),
  c = t(592125),
  d = t(669079);
(l = r || (r = {})).ACTION = 'action', l.LOOP = 'loop', l.IDLE = 'idle';
let m = async (e, n) => {
  if (null == n)
throw Error('giftCode must be defined');
  if (null == e)
throw Error('Recipient must be defined');
  let t = await a.Z.openPrivateChannel(e.id).then(e => {
  let n = c.Z.getChannel(e);
  if (s()(null != n, 'PrivateChannel is null'), null == n)
    throw Error('Channel must be defined');
  return n;
}),
r = (0, d.Nz)(n);
  return o.Z.sendMessage(t.id, u.ZP.parse(t, r), void 0, {
isGiftLinkSentOnBehalfOfUser: !0
  });
};