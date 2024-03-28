"use strict";
s.r(t), s.d(t, {
  HelpMessageTypes: function() {
    return a
  }
});
var n, a, r = s("735250");
s("470079");
var o = s("803997"),
  i = s.n(o),
  u = s("481060"),
  l = s("263704"),
  c = s("696202"),
  E = s("41542"),
  T = s("759231"),
  d = s("710944");
(n = a || (a = {}))[n.WARNING = 0] = "WARNING", n[n.INFO = 1] = "INFO", n[n.ERROR = 2] = "ERROR", n[n.POSITIVE = 3] = "POSITIVE";
t.default = function(e) {
  let {
    children: t,
    messageType: s,
    className: n,
    textColor: a = "text-normal",
    textVariant: o = "text-sm/medium"
  } = e, N = function(e) {
    switch (e) {
      case 0:
        return T.default;
      case 1:
        return E.default;
      case 2:
        return c.default;
      case 3:
        return l.default
    }
  }(s), I = function(e) {
    switch (e) {
      case 0:
        return d.warning;
      case 1:
        return d.info;
      case 2:
        return d.error;
      case 3:
        return d.positive
    }
  }(s);
  return (0, r.jsxs)("div", {
    className: i()(d.container, I, n),
    children: [(0, r.jsx)("div", {
      className: d.iconDiv,
      children: (0, r.jsx)(N, {
        className: d.icon
      })
    }), (0, r.jsx)(u.Text, {
      className: d.text,
      color: a,
      variant: o,
      children: t
    })]
  })
}