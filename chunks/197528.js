"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("830064"),
  o = a("702493"),
  i = a("77987"),
  u = a("703656"),
  l = a("980483"),
  c = a("643366"),
  d = a("94628"),
  A = a("659154"),
  C = a("902928"),
  f = a("240479"),
  h = a("981631"),
  E = a("535248");
t.default = (0, i.makeAuthenticated)(function() {
  let e;
  let [t, a] = r.useState({
    type: "user-code-input",
    usePrefilledCode: !0
  });
  (0, o.default)(), (0, c.useActivateDeviceStepTracking)(t);
  let i = r.useCallback(() => {
      a({
        type: "user-code-input"
      })
    }, [a]),
    T = r.useCallback(e => {
      a({
        type: "authorization",
        userCodeData: e
      })
    }, [a]),
    I = r.useCallback(e => {
      a({
        type: "success",
        userCodeData: e
      })
    }, [a]),
    p = r.useCallback(e => {
      a({
        type: "error",
        userCodeData: e
      })
    }, [a]);
  switch (t.type) {
    case "user-code-input":
      e = (0, n.jsx)(f.UserCodeInput, {
        usePrefilledCode: t.usePrefilledCode || !1,
        onUserCodeAccepted: T
      });
      break;
    case "authorization":
      e = (0, n.jsx)(d.ActivateDeviceAuthorize, {
        data: t.userCodeData,
        onDenied: i,
        onError: p,
        onSuccess: I
      });
      break;
    case "success":
      e = (0, n.jsx)(C.ActivateDeviceSuccess, {
        onComplete: () => (0, u.transitionTo)(h.Routes.ME),
        data: t.userCodeData
      });
      break;
    case "error":
      e = (0, n.jsx)(A.ActivateDeviceError, {
        onTryAgain: i
      });
      break;
    default:
      e = null
  }
  return (0, n.jsxs)("div", {
    className: E.activatePage,
    children: [(0, n.jsx)(s.default, {
      className: E.artwork,
      preserveAspectRatio: "xMinYMin slice"
    }), (0, n.jsx)(l.default, {
      show: !0,
      className: E.logo
    }), (0, n.jsx)("div", {
      className: E.content,
      children: e
    })]
  })
})