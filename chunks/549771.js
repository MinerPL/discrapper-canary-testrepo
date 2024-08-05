n.d(t, {
  h: function() {
return d;
  }
}), n(733860);
var r = n(470079),
  i = n(399606),
  a = n(496675),
  s = n(771845),
  o = n(594174),
  l = n(74538),
  u = n(981631),
  c = n(231338);

function d(e, t) {
  var n;
  let d = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
_ = null !== (n = null == e ? void 0 : e.guild_id) && void 0 !== n ? n : u.lds,
E = (0, i.e7)([s.ZP], () => s.ZP.getFlattenedGuildIds()),
f = (0, i.e7)([a.Z], () => null == e || null == e.guild_id || a.Z.can(c.Pl.USE_EXTERNAL_SOUNDS, e));
  return r.useMemo(() => {
if ((l.ZP.canUseSoundboardEverywhere(d) || !t) && f) {
  let e = '' !== _,
    t = e ? E.filter(e => e !== _) : E;
  return e && t.unshift(_), t;
}
return [_];
  }, [
d,
t,
_,
E,
f
  ]);
}