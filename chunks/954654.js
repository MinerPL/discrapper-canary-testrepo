"use strict";
t.r(n), t.d(n, {
  default: function() {
    return N
  },
  renderComponents: function() {
    return v
  }
});
var l = t("735250");
t("470079");
var a = t("120356"),
  r = t.n(a),
  u = t("911969"),
  s = t("970184"),
  o = t("987106"),
  i = t("927057"),
  d = t("574597"),
  c = t("378975"),
  m = t("413991"),
  p = t("12067"),
  f = t("676149"),
  C = t("861529"),
  S = t("889515"),
  E = t("27170");

function v(e) {
  return e.map((e, n) => (function(e, n) {
    switch (e.type) {
      case u.ComponentType.ACTION_ROW:
        return (0, l.jsx)(S.default, {
          ...e,
          renderComponents: v
        }, n);
      case u.ComponentType.BUTTON:
        return (0, l.jsx)(o.default, {
          ...e
        }, n);
      case u.ComponentType.STRING_SELECT:
        return (0, l.jsx)(c.default, {
          ...e
        }, n);
      case u.ComponentType.CHANNEL_SELECT:
        return (0, l.jsx)(i.default, {
          ...e
        }, n);
      case u.ComponentType.USER_SELECT:
      case u.ComponentType.ROLE_SELECT:
      case u.ComponentType.MENTIONABLE_SELECT:
        return (0, l.jsx)(d.default, {
          ...e
        }, n);
      case u.ComponentType.INPUT_TEXT:
        return (0, l.jsx)(m.default, {
          ...e
        }, n);
      case u.ComponentType.TEXT:
        return (0, l.jsx)(C.default, {
          ...e
        }, n);
      case u.ComponentType.MEDIA_GALLERY:
        return (0, l.jsx)(p.default, {
          ...e
        }, n);
      case u.ComponentType.SEPARATOR:
        return (0, l.jsx)(f.default, {
          ...e
        }, n)
    }
  })(e, n.toString()))
}

function N(e) {
  let {
    message: n
  } = e, {
    components: t
  } = n;
  return 0 === t.length ? null : (0, l.jsx)("div", {
    className: r()([E.container, {
      [E.containerUikit]: n.isUIKitComponents()
    }]),
    children: (0, l.jsx)(s.ComponentStateContextProvider, {
      message: n,
      children: v(t)
    })
  })
}