"use strict";
n.d(t, {
  a: function() {
    return o
  }
}), n(47120), n(653041);
var i = n(271383),
  r = n(594174),
  s = n(981631);
class o {
  static fromMessage(e, t, n, i) {
    let [r, s] = o.deriveMemberUsers(e, n);
    return {
      id: n.id,
      channelId: t,
      message: n,
      members: r,
      users: s,
      connectionId: i
    }
  }
  static deriveMemberUsers(e, t) {
    var n, o, a, l;
    let u = new Set([null === (n = t.author) || void 0 === n ? void 0 : n.id, null === (o = t.interaction) || void 0 === o ? void 0 : o.user.id, ...null !== (l = null === (a = t.mentions) || void 0 === a ? void 0 : a.map(e => e.id)) && void 0 !== l ? l : []]),
      _ = [],
      d = [];
    for (let t of u) {
      if (null == t) continue;
      let n = r.default.getUser(t),
        o = i.ZP.getTrueMember(null != e ? e : s.lds, t);
      null != n && d.push(n), null != o && _.push(o)
    }
    return [_, d]
  }
}