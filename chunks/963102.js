n.d(t, {
  I: function() {
return _;
  }
});
var r = n(735250),
  s = n(470079),
  a = n(120356),
  o = n.n(a),
  i = n(425493),
  l = n(410030),
  c = n(984370),
  d = n(471731),
  u = n(486620),
  p = n(792125),
  g = n(335131),
  f = n(994896),
  C = n(689938),
  m = n(807926);

function h(e) {
  let {
isLayer: t,
onClose: n,
isFullScreen: a = !1
  } = e;
  return (0, r.jsxs)(c.Z, {
className: o()(m.headerBar, {
  [m.fullscreenHeaderBar]: a
}),
innerClassname: m.shopLogoContainer,
toolbar: a ? null : (0, r.jsx)(s.Fragment, {}),
children: [
  (0, r.jsx)(u.Z, {
    className: m.shopLogo
  }),
  a && (0, r.jsx)(i.Z, {
    className: m.closeIcon,
    closeAction: t ? g.DR : n,
    keybind: 'ESC'
  })
]
  });
}

function _(e) {
  let {
isFullScreen: t,
isLayer: n,
onClose: a
  } = e, {
newShopLogoEnabled: u
  } = (0, f.O)({
location: 'CollectiblesShop'
  }), _ = (0, l.ZP)();
  return u ? (0, r.jsx)(h, {
isLayer: n,
onClose: a,
isFullScreen: t
  }) : (0, r.jsxs)(c.Z, {
className: o()((0, p.Q)(_), m.headerBar, {
  [m.fullscreenHeaderBar]: t
}),
toolbar: t ? null : (0, r.jsx)(s.Fragment, {}),
children: [
  (0, r.jsx)(d.Z, {
    className: m.discordLogo
  }),
  (0, r.jsx)(c.Z.Title, {
    children: C.Z.Messages.COLLECTIBLES_SHOP
  }),
  t && (0, r.jsx)(i.Z, {
    className: m.closeIcon,
    closeAction: n ? g.DR : a,
    keybind: 'ESC'
  })
]
  });
}