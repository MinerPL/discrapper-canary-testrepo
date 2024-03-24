"use strict";
A.r(t), A.d(t, {
  default: function() {
    return i
  }
}), A("222007");
var a = A("884691"),
  l = A("446674"),
  n = A("448993"),
  r = A("651057"),
  s = A("299285");

function i(e, t) {
  let A = (0, l.useStateFromStores)([s.default], () => s.default.getGuildApplication(e, t)),
    [i, o] = a.useState(null == A),
    [d, u] = a.useState(),
    [c, f] = a.useState(!1),
    g = a.useCallback(async () => {
      if (null == A && null != e) {
        f(!0), o(!0);
        try {
          await r.default.getApplicationsForGuild(e, {
            type: t,
            includeTeam: !0
          })
        } catch (e) {
          u(new n.APIError(e))
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