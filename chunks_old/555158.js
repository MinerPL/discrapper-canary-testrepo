"use strict";
t.r(n), t.d(n, {
  HelpMessageTypes: function() {
    return a
  },
  default: function() {
    return p
  }
});
var u, a, l = t("37983");
t("884691");
var r = t("414456"),
  s = t.n(r),
  i = t("77078"),
  c = t("36694"),
  d = t("381546"),
  o = t("68238"),
  f = t("423487"),
  h = t("950038");
(u = a || (a = {}))[u.WARNING = 0] = "WARNING", u[u.INFO = 1] = "INFO", u[u.ERROR = 2] = "ERROR", u[u.POSITIVE = 3] = "POSITIVE";
var p = function(e) {
  let {
    children: n,
    messageType: t,
    className: u,
    textColor: a = "text-normal",
    textVariant: r = "text-sm/medium"
  } = e, p = function(e) {
    switch (e) {
      case 0:
        return f.default;
      case 1:
        return o.default;
      case 2:
        return d.default;
      case 3:
        return c.default
    }
  }(t), M = function(e) {
    switch (e) {
      case 0:
        return h.warning;
      case 1:
        return h.info;
      case 2:
        return h.error;
      case 3:
        return h.positive
    }
  }(t);
  return (0, l.jsxs)("div", {
    className: s(h.container, M, u),
    children: [(0, l.jsx)("div", {
      className: h.iconDiv,
      children: (0, l.jsx)(p, {
        className: h.icon
      })
    }), (0, l.jsx)(i.Text, {
      className: h.text,
      color: a,
      variant: r,
      children: n
    })]
  })
}