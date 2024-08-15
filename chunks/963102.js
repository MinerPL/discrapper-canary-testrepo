n.d(t, {
  I: function() {
return h;
  }
});
var s = n(735250),
  r = n(470079),
  a = n(120356),
  i = n.n(a),
  o = n(425493),
  c = n(410030),
  l = n(984370),
  d = n(471731),
  u = n(486620),
  f = n(792125),
  p = n(335131),
  g = n(994896),
  C = n(689938),
  _ = n(99065);

function m(e) {
  let {
isLayer: t,
onClose: n,
isFullScreen: a = !1
  } = e;
  return (0, s.jsxs)(l.Z, {
className: i()(_.headerBar, {
  [_.fullscreenHeaderBar]: a
}),
innerClassname: _.shopLogoContainer,
toolbar: a ? null : (0, s.jsx)(r.Fragment, {}),
children: [
  (0, s.jsx)(u.Z, {
    className: _.shopLogo
  }),
  a && (0, s.jsx)(o.Z, {
    className: _.closeIcon,
    closeAction: t ? p.DR : n,
    keybind: 'ESC'
  })
]
  });
}

function h(e) {
  let {
isFullScreen: t,
isLayer: n,
onClose: a
  } = e, {
newShopLogoEnabled: u
  } = (0, g.O)({
location: 'CollectiblesShop'
  }), h = (0, c.ZP)();
  return u ? (0, s.jsx)(m, {
isLayer: n,
onClose: a,
isFullScreen: t
  }) : (0, s.jsxs)(l.Z, {
className: i()((0, f.Q)(h), _.headerBar, {
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
  t && (0, s.jsx)(o.Z, {
    className: _.closeIcon,
    closeAction: n ? p.DR : a,
    keybind: 'ESC'
  })
]
  });
}