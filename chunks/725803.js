"use strict";
t.d(s, {
  Z: function() {
    return o
  }
}), t(47120);
var n = t(470079),
  i = t(442837),
  l = t(881052),
  a = t(728345),
  r = t(812206);

function o(e, s) {
  let t = (0, i.e7)([r.Z], () => r.Z.getGuildApplication(e, s)),
    [o, c] = n.useState(null == t),
    [d, u] = n.useState(),
    [E, _] = n.useState(!1),
    I = n.useCallback(async () => {
      if (null == t && null != e) {
        _(!0), c(!0);
        try {
          await a.Z.getApplicationsForGuild(e, {
            type: s,
            includeTeam: !0
          })
        } catch (e) {
          u(new l.Hx(e))
        } finally {
          c(!1)
        }
      }
    }, [t, s, e]);
  return n.useEffect(() => {
    !E && I()
  }, [E, I]), {
    application: t,
    error: d,
    loading: o
  }
}