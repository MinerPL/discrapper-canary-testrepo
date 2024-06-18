"use strict";
n.d(t, {
  F: function() {
    return h
  },
  Y: function() {
    return T
  }
});
var i = n(735250),
  r = n(470079),
  s = n(772848),
  o = n(280748),
  a = n(632140),
  l = n(993365),
  u = n(481060),
  _ = n(529653),
  d = n(502283),
  c = n(525241),
  E = n(561466),
  I = n(140139);

function T(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.si,
    {
      position: i = E.si.position,
      component: r = E.si.component,
      duration: o = E.si.duration
    } = n;
  return {
    message: e,
    id: (0, s.Z)(),
    type: t,
    options: {
      position: i,
      component: r,
      duration: o
    }
  }
}
let h = r.memo(function(e) {
  let {
    message: t,
    type: n,
    id: r,
    options: {
      component: s = E.si.component
    } = E.si
  } = e;
  return null != s ? (0, i.jsx)(i.Fragment, {
    children: s
  }) : (0, i.jsxs)("div", {
    id: r,
    className: I.toast,
    children: [function(e) {
      switch (e) {
        case E.pC.SUCCESS:
          return (0, i.jsx)(c.Z, {
            className: I.icon,
            color: u.tokens.colors.STATUS_POSITIVE.css
          });
        case E.pC.FAILURE:
          return (0, i.jsx)(d.Z, {
            className: I.icon,
            color: u.tokens.colors.STATUS_DANGER.css
          });
        case E.pC.CLIP:
          return (0, i.jsx)(_.Z, {
            className: I.clipIcon,
            color: u.tokens.colors.HEADER_PRIMARY.css
          });
        case E.pC.LINK:
          return (0, i.jsx)(a.x, {
            className: I.icon,
            color: u.tokens.colors.HEADER_PRIMARY.css
          });
        case E.pC.FORWARD:
          return (0, i.jsx)(o.a, {
            className: I.icon,
            color: u.tokens.colors.STATUS_POSITIVE.css
          });
        default:
          return null
      }
    }(n), (0, i.jsx)(l.x, {
      className: I.__invalid_content,
      color: "header-primary",
      variant: "text-md/normal",
      children: t
    })]
  })
})