"use strict";
n.d(t, {
  Q: function() {
    return r
  }
});
var i, r, s = n(735250);
n(470079);
var o = n(120356),
  a = n.n(o),
  l = n(481060),
  u = n(263704),
  _ = n(696202),
  d = n(41542),
  c = n(759231),
  E = n(364366);
(i = r || (r = {}))[i.WARNING = 0] = "WARNING", i[i.INFO = 1] = "INFO", i[i.ERROR = 2] = "ERROR", i[i.POSITIVE = 3] = "POSITIVE";
t.Z = function(e) {
  let {
    children: t,
    messageType: n,
    className: i,
    textColor: r = "text-normal",
    textVariant: o = "text-sm/medium"
  } = e, I = function(e) {
    switch (e) {
      case 0:
        return c.Z;
      case 1:
        return d.Z;
      case 2:
        return _.Z;
      case 3:
        return u.Z
    }
  }(n), T = function(e) {
    switch (e) {
      case 0:
        return E.warning;
      case 1:
        return E.info;
      case 2:
        return E.error;
      case 3:
        return E.positive
    }
  }(n);
  return (0, s.jsxs)("div", {
    className: a()(E.container, T, i),
    children: [(0, s.jsx)("div", {
      className: E.iconDiv,
      children: (0, s.jsx)(I, {
        className: E.icon
      })
    }), (0, s.jsx)(l.Text, {
      className: E.text,
      color: r,
      variant: o,
      children: t
    })]
  })
}