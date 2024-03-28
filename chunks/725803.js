"use strict";
A.r(t), A.d(t, {
  default: function() {
    return i
  }
}), A("47120");
var a = A("470079"),
  l = A("442837"),
  s = A("881052"),
  n = A("728345"),
  r = A("812206");

function i(e, t) {
  let A = (0, l.useStateFromStores)([r.default], () => r.default.getGuildApplication(e, t)),
    [i, o] = a.useState(null == A),
    [d, u] = a.useState(),
    [c, f] = a.useState(!1),
    g = a.useCallback(async () => {
      if (null == A && null != e) {
        f(!0), o(!0);
        try {
          await n.default.getApplicationsForGuild(e, {
            type: t,
            includeTeam: !0
          })
        } catch (e) {
          u(new s.APIError(e))
        } finally {
          o(!1)
        }
      }
    }, [A, t, e]);
  return a.useEffect(() => {
    !c && g()
  }, [c, g]), {
    application: A,
    error: d,
    loading: i
  }
}