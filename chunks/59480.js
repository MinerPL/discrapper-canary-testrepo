n.d(t, {
  a: function() {
return o;
  }
}), n(47120), n(653041);
var r = n(271383),
  i = n(594174),
  a = n(981631);
class o {
  static fromMessage(e, t, n, r) {
let [i, a] = o.deriveMemberUsers(e, n);
return {
  id: n.id,
  channelId: t,
  message: n,
  members: i,
  users: a,
  connectionId: r
};
  }
  static deriveMemberUsers(e, t) {
var n, o, s, l;
let u = new Set([
    null === (n = t.author) || void 0 === n ? void 0 : n.id,
    null === (o = t.interaction) || void 0 === o ? void 0 : o.user.id,
    ...null !== (l = null === (s = t.mentions) || void 0 === s ? void 0 : s.map(e => e.id)) && void 0 !== l ? l : []
  ]),
  c = [],
  d = [];
for (let t of u) {
  if (null == t)
    continue;
  let n = i.default.getUser(t),
    o = r.ZP.getTrueMember(null != e ? e : a.lds, t);
  null != n && d.push(n), null != o && c.push(o);
}
return [
  c,
  d
];
  }
}