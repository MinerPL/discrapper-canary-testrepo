n.d(t, {
  Ku: function() {
return _;
  },
  MV: function() {
return E;
  }
});
var r = n(470079),
  i = n(652874),
  a = n(731965),
  s = n(442837),
  o = n(496675),
  l = n(944486),
  u = n(146085),
  c = n(643632);
let d = (0, i.Z)(e => ({
  isOnStartStageScreen: !0
}));

function _(e) {
  (0, a.j)(() => d.setState({
isOnStartStageScreen: e
  }));
}

function E(e) {
  let t = (0, s.e7)([l.Z], () => l.Z.getVoiceChannelId() === e.id),
n = (0, s.e7)([o.Z], () => o.Z.can(u.yP, e), [e]),
i = (0, c.Z)(e.id),
a = n && !i;
  r.useEffect(() => {
t ? !a && _(!1) : _(a);
  }, [
t,
a
  ]);
}
t.ZP = d;