n.d(t, {
  u: function() {
return _;
  }
}), n(653041);
var r = n(853856),
  i = n(706590),
  a = n(703656),
  s = n(769654),
  o = n(592125),
  l = n(496675),
  u = n(914010),
  c = n(771845),
  d = n(981631);
let _ = {
  binds: (() => {
let e = [];
for (let t = 1; t < 10; t++)
  e.push('mod+'.concat(t));
return e;
  })(),
  comboKeysBindGlobal: !0,
  action(e, t) {
let n, _ = parseInt(t.split('+')[1], 10);
return (0 === _ && (_ = 10), isNaN(_) || 0 === _ || null == (n = 1 === _ ? d.ME : (0, i.z)(r.Z, o.Z, l.Z) ? 2 === _ ? d.I_8 : c.ZP.getFlattenedGuildIds()[_ - 3] : c.ZP.getFlattenedGuildIds()[_ - 2])) ? void 0 : n === d.ME && null == u.Z.getGuildId() ? ((0, a.uL)(d.Z5c.CHANNEL(n)), !1) : ((0, s.X)(n), !1);
  }
};