n.d(t, {
  Z: function() {
return f;
  }
});
var r = n(470079),
  i = n(725119),
  a = n(652853),
  s = n(290274),
  o = n(347328),
  l = n(540440),
  u = n(553375),
  c = n(365583),
  d = n(582546),
  _ = n(228168),
  E = n(689938);

function f(e) {
  let {
entry: t,
activity: n,
user: f,
display: h
  } = e, {
profileType: p
  } = (0, a.z)(), m = (0, i.Z)({
userId: f.id,
section: _.oh.ACTIVITY,
label: E.Z.Messages.USER_ACTIVITY_VIEW_ALL_ACTIVITY
  }), I = p === _.y0.BITE_SIZE ? m : null, T = (0, d.ZP)({
entry: t,
activity: n,
user: f
  }), g = (0, u.Z)({
entry: t,
activity: n,
user: f
  }), S = (0, c.Z)({
entry: t,
activity: n,
user: f
  }), A = (0, o.ZP)({
entry: t,
activity: n,
user: f
  }), N = (0, l.B)({
entry: t,
user: f,
isRecent: h === s.a.RECENT
  });
  return r.useMemo(() => [
I,
T,
g,
A,
S,
N
  ].filter(e => null != e), [
I,
T,
g,
A,
S,
N
  ]);
}