t.d(A, {
  Z: function() {
return l;
  }
}), t(47120);
var a = t(470079),
  n = t(442837),
  r = t(881052),
  s = t(728345),
  o = t(812206);

function l(e, A) {
  let t = (0, n.e7)([o.Z], () => o.Z.getGuildApplication(e, A)),
[l, i] = a.useState(null == t),
[d, c] = a.useState(),
[u, C] = a.useState(!1),
g = a.useCallback(async () => {
  if (null == t && null != e) {
    C(!0), i(!0);
    try {
      await s.Z.getApplicationsForGuild(e, {
        type: A,
        includeTeam: !0
      });
    } catch (e) {
      c(new r.Hx(e));
    } finally {
      i(!1);
    }
  }
}, [
  t,
  A,
  e
]);
  return a.useEffect(() => {
!u && g();
  }, [
u,
g
  ]), {
application: t,
error: d,
loading: l
  };
}