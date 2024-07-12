n.d(t, {
  Z: function() {
return d;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(153124),
  o = n(793397),
  s = n(228168),
  l = n(809965);
let u = e => {
let {
  size: t,
  stroke: n
} = (0, i.getAvatarSpecs)(e);
return t / 2 + n;
  },
  c = {
[s.y0.POPOUT]: {
  radius: u(i.AvatarSizes.SIZE_80),
  offsetX: 16,
  offsetY: 4
},
[s.y0.BITE_SIZE]: {
  radius: u(i.AvatarSizes.SIZE_80),
  offsetX: 10,
  offsetY: 4
},
[s.y0.MODAL]: {
  radius: u(i.AvatarSizes.SIZE_120),
  offsetX: 14,
  offsetY: 5
},
[s.y0.FULL_SIZE]: {
  radius: u(i.AvatarSizes.SIZE_120),
  offsetX: 16,
  offsetY: 5
},
[s.y0.SETTINGS]: {
  radius: u(i.AvatarSizes.SIZE_80),
  offsetX: 16,
  offsetY: -22
},
[s.y0.PANEL]: {
  radius: u(i.AvatarSizes.SIZE_80),
  offsetX: 10,
  offsetY: 8
},
[s.y0.POMELO_POPOUT]: {
  radius: u(i.AvatarSizes.SIZE_80),
  offsetX: 20,
  offsetY: -20
},
[s.y0.CANCEL_MODAL]: {
  radius: u(i.AvatarSizes.SIZE_56),
  offsetX: 8,
  offsetY: 2
}
  };

function d(e) {
  let {
children: t,
profileType: n,
isPremium: i,
hasThemeColors: u,
hasBanner: d,
overrideBannerWidth: _,
hasProfileEffect: E = !1
  } = e, f = (0, a.Dt)(), h = null != _ ? _ : (0, o.e7)(n), p = (0, o.Wo)({
profileType: n,
user: {
  hasBanner: d,
  isPremium: i,
  hasProfileEffect: E
}
  }), {
radius: m,
offsetX: I,
offsetY: T
  } = c[n], g = u && (n === s.y0.POPOUT || n === s.y0.BITE_SIZE) ? 4 : 0, S = p - T - g;
  return (0, r.jsxs)('svg', {
className: l.bannerSVGWrapper,
viewBox: '0 0 '.concat(h, ' ').concat(p),
style: {
  minWidth: h,
  minHeight: p
},
children: [
  (0, r.jsxs)('mask', {
    id: f,
    children: [
      (0, r.jsx)('rect', {
        fill: 'white',
        x: '0',
        y: '0',
        width: '100%',
        height: '100%'
      }),
      (0, r.jsx)('circle', {
        fill: 'black',
        cx: m + I - g,
        cy: S,
        r: m
      })
    ]
  }),
  (0, r.jsx)('foreignObject', {
    x: '0',
    y: '0',
    width: '100%',
    height: '100%',
    overflow: 'visible',
    mask: 'url(#'.concat(f, ')'),
    children: t
  })
]
  });
}