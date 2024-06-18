"use strict";
t.d(s, {
  I: function() {
    return h
  }
});
var n = t(735250),
  a = t(470079),
  i = t(120356),
  l = t.n(i),
  r = t(425493),
  o = t(410030),
  c = t(984370),
  u = t(471731),
  d = t(486620),
  C = t(792125),
  E = t(335131),
  f = t(994896),
  m = t(689938),
  p = t(424681);

function g(e) {
  let {
    isLayer: s,
    onClose: t,
    isFullScreen: i = !1
  } = e;
  return (0, n.jsxs)(c.Z, {
    className: l()(p.headerBar, {
      [p.fullscreenHeaderBar]: i
    }),
    innerClassname: p.shopLogoContainer,
    toolbar: i ? null : (0, n.jsx)(a.Fragment, {}),
    children: [(0, n.jsx)(d.Z, {
      className: p.shopLogo
    }), i && (0, n.jsx)(r.Z, {
      className: p.closeIcon,
      closeAction: s ? E.DR : t,
      keybind: "ESC"
    })]
  })
}

function h(e) {
  let {
    isFullScreen: s,
    isLayer: t,
    onClose: i
  } = e, {
    newShopLogoEnabled: d
  } = (0, f.O)({
    location: "CollectiblesShop"
  }), h = (0, o.ZP)();
  return d ? (0, n.jsx)(g, {
    isLayer: t,
    onClose: i,
    isFullScreen: s
  }) : (0, n.jsxs)(c.Z, {
    className: l()((0, C.Q)(h), p.headerBar, {
      [p.fullscreenHeaderBar]: s
    }),
    toolbar: s ? null : (0, n.jsx)(a.Fragment, {}),
    children: [(0, n.jsx)(u.Z, {
      className: p.discordLogo
    }), (0, n.jsx)(c.Z.Title, {
      children: m.Z.Messages.COLLECTIBLES_SHOP
    }), s && (0, n.jsx)(r.Z, {
      className: p.closeIcon,
      closeAction: t ? E.DR : i,
      keybind: "ESC"
    })]
  })
}