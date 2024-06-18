"use strict";
n.d(t, {
  u: function() {
    return c
  }
}), n(653041);
var i = n(853856),
  r = n(706590),
  s = n(703656),
  o = n(769654),
  a = n(592125),
  l = n(496675),
  u = n(914010),
  _ = n(771845),
  d = n(981631);
let c = {
  binds: (() => {
    let e = [];
    for (let t = 1; t < 10; t++) e.push("mod+".concat(t));
    return e
  })(),
  comboKeysBindGlobal: !0,
  action(e, t) {
    let n, c = parseInt(t.split("+")[1], 10);
    return (0 === c && (c = 10), isNaN(c) || 0 === c || null == (n = 1 === c ? d.ME : (0, r.z)(i.Z, a.Z, l.Z) ? 2 === c ? d.I_8 : _.ZP.getFlattenedGuildIds()[c - 3] : _.ZP.getFlattenedGuildIds()[c - 2])) ? void 0 : n === d.ME && null == u.Z.getGuildId() ? ((0, s.uL)(d.Z5c.CHANNEL(n)), !1) : ((0, o.X)(n), !1)
  }
}