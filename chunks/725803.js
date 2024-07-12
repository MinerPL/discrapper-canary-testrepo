t.d(A, {
  Z: function() {
return l;
  }
}), t(47120);
var n = t(470079),
  a = t(442837),
  r = t(881052),
  s = t(728345),
  o = t(812206);

function l(e, A) {
  let t = (0, a.e7)([o.Z], () => o.Z.getGuildApplication(e, A)),
[l, i] = n.useState(null == t),
[d, c] = n.useState(),
[u, C] = n.useState(!1),
g = n.useCallback(async () => {
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
  return n.useEffect(() => {
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