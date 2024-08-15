t.d(n, {
  u: function() {
return a;
  }
});
var i = t(211739),
  l = t(680089),
  o = t(984933),
  r = t(914010),
  E = t(981631);
let a = {
  binds: ['mod+shift+a'],
  comboKeysBindGlobal: !0,
  action() {
let e = r.Z.getGuildId();
return null != e && (o.ZP.getChannels(e)[E.d4z.GUILD_CATEGORY].some(e => {
  let {
    channel: n
  } = e;
  return 'null' !== n.id && !l.Z.isCollapsed(n.id);
}) ? (0, i.N5)(e) : (0, i.lc)(e), !1);
  }
};