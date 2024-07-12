n.d(t, {
  S: function() {
return s;
  },
  Y: function() {
return h;
  }
}), n(411104);
var s, r, i = n(512722),
  a = n.n(i),
  l = n(493683),
  o = n(904245),
  c = n(957730),
  u = n(592125),
  d = n(669079);
(r = s || (s = {})).ACTION = 'action', r.LOOP = 'loop', r.IDLE = 'idle';
let h = async (e, t) => {
  if (null == t)
throw Error('giftCode must be defined');
  if (null == e)
throw Error('Recipient must be defined');
  let n = await l.Z.openPrivateChannel(e.id).then(e => {
  let t = u.Z.getChannel(e);
  if (a()(null != t, 'PrivateChannel is null'), null == t)
    throw Error('Channel must be defined');
  return t;
}),
s = (0, d.Nz)(t);
  return o.Z.sendMessage(n.id, c.ZP.parse(n, s), void 0, {
isGiftLinkSentOnBehalfOfUser: !0
  });
};