"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("735250");
n("470079");
var a = n("803997"),
  s = n.n(a),
  i = n("718017"),
  r = n("692547"),
  o = n("481060"),
  u = n("346656"),
  d = n("252686"),
  c = n("515330");

function f(e) {
  let {
    guild: t,
    show: n,
    active: a,
    onAnimationStart: f,
    onAnimationRest: h
  } = e, C = {}, p = {};
  C.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)", p.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)";
  let m = (0, o.useToken)(r.default.unsafe_rawColors.BRAND_500).hex(),
    g = (0, o.useToken)(r.default.unsafe_rawColors.PRIMARY_630).hex();
  a && null == t.icon && (C.backgroundColor = m, p.backgroundColor = g);
  let E = (0, i.useTransition)(n, {
    from: C,
    enter: p,
    leave: C,
    config: {
      duration: 100
    },
    onStart: f,
    onRest: h
  });
  return (0, l.jsx)(l.Fragment, {
    children: E((e, n, a) => n && (0, l.jsx)("div", {
      className: s()(c.folder, c.hover),
      children: (0, l.jsx)("div", {
        className: c.folderIconWrapper,
        children: (0, l.jsxs)("div", {
          className: c.closedFolderIconWrapper,
          children: [(0, l.jsx)(i.animated.div, {
            className: c.folderIconPreview,
            style: e,
            children: (0, l.jsx)(u.default, {
              guild: t,
              size: u.default.Sizes.SMOL,
              className: c.guildIcon
            })
          }), (0, l.jsx)(d.default, {
            className: c.miniPlaceholder
          })]
        })
      })
    }, a.key))
  })
}