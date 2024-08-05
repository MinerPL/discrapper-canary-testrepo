n.d(t, {
  I: function() {
return b;
  }
});
var s = n(735250),
  r = n(470079),
  a = n(120356),
  o = n.n(a),
  i = n(425493),
  c = n(410030),
  l = n(984370),
  d = n(471731),
  u = n(486620),
  f = n(792125),
  p = n(335131),
  g = n(994896),
  C = n(689938),
  _ = n(807926);

function m(e) {
  let {
isLayer: t,
onClose: n,
isFullScreen: a = !1
  } = e;
  return (0, s.jsxs)(l.Z, {
className: o()(_.headerBar, {
  [_.fullscreenHeaderBar]: a
}),
innerClassname: _.shopLogoContainer,
toolbar: a ? null : (0, s.jsx)(r.Fragment, {}),
children: [
  (0, s.jsx)(u.Z, {
    className: _.shopLogo
  }),
  a && (0, s.jsx)(i.Z, {
    className: _.closeIcon,
    closeAction: t ? p.DR : n,
    keybind: 'ESC'
  })
]
  });
}

function b(e) {
  let {
isFullScreen: t,
isLayer: n,
onClose: a
  } = e, {
newShopLogoEnabled: u
  } = (0, g.O)({
location: 'CollectiblesShop'
  }), b = (0, c.ZP)();
  return u ? (0, s.jsx)(m, {
isLayer: n,
onClose: a,
isFullScreen: t
  }) : (0, s.jsxs)(l.Z, {
className: o()((0, f.Q)(b), _.headerBar, {
  [_.fullscreenHeaderBar]: t
}),
toolbar: t ? null : (0, s.jsx)(r.Fragment, {}),
children: [
  (0, s.jsx)(d.Z, {
    className: _.discordLogo
  }),
  (0, s.jsx)(l.Z.Title, {
    children: C.Z.Messages.COLLECTIBLES_SHOP
  }),
  t && (0, s.jsx)(i.Z, {
    className: _.closeIcon,
    closeAction: n ? p.DR : a,
    keybind: 'ESC'
  })
]
  });
}