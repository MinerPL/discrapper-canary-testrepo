n.d(t, {
  f: function() {
return i;
  }
});
var r, i, a = n(735250),
  o = n(470079),
  s = n(120356),
  l = n.n(s),
  u = n(338545),
  c = n(481060),
  d = n(110924),
  _ = n(890622);
(r = i || (i = {})).SUBTLE = 'SUBTLE', r.DARK = 'DARK', r.BLUR = 'BLUR';
let E = o.forwardRef(function(e, t) {
  let {
backdropStyle: n = 'SUBTLE',
backdropInstant: r = !1,
zIndexBoost: i = 0,
LayerComponent: o,
isVisible: s,
onClose: E
  } = e, f = function() {
let e = (0, c.useToken)(c.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({
    opacity: 0.25
  }),
  t = (0, c.useToken)(c.tokens.colors.BG_BACKDROP).spring();
return {
  SUBTLE: e,
  DARK: t,
  BLUR: t
};
  }()[n], h = (0, c.useToken)(c.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({
opacity: 0
  }), p = {
background: h,
backdropFilter: 'blur(0px)'
  }, m = (0, d.Z)(r), I = (0, u.useTransition)(s, {
keys: e => e ? 'backdrop' : 'empty',
config: {
  duration: r || m ? 0 : 300
},
from: p,
enter: {
  background: f,
  backdropFilter: 'blur('.concat('BLUR' === n ? 8 : 0, 'px)')
},
leave: p
  });
  if (null == o) {
let e = {
  zIndex: 1000 + i
};
return I((t, n) => n ? (0, a.jsx)(u.animated.div, {
  className: _.backdrop,
  style: {
    ...t,
    ...e
  },
  onClick: E
}) : null);
  }
  return (0, a.jsx)(o, {
children: I((e, t) => t ? (0, a.jsx)(u.animated.div, {
  className: l()(_.backdrop, _.withLayer),
  style: e,
  onClick: E
}) : null)
  });
});
t.Z = E;