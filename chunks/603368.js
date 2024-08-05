n.d(t, {
  $0: function() {
return f;
  },
  j1: function() {
return m;
  },
  nP: function() {
return I;
  },
  nj: function() {
return T;
  },
  pX: function() {
return p;
  }
}), n(47120);
var r = n(470079),
  i = n(688619),
  a = n.n(i),
  s = n(392711),
  o = n.n(s),
  l = n(780384),
  u = n(481060),
  c = n(410030),
  d = n(564334),
  _ = n(302221),
  E = n(308083);

function f(e) {
  let t = a()(e),
n = t.get('rgb.r'),
r = t.get('rgb.g'),
i = t.get('rgb.b');
  return (299 * n + 587 * r + 114 * i) / 1000 < 128 ? u.tokens.colors.HEADER_PRIMARY.resolve({
theme: 'dark',
saturation: 1
  }) : u.tokens.colors.HEADER_PRIMARY.resolve({
theme: 'light',
saturation: 1
  });
}

function h(e) {
  return new d.Z(e.get('rgb.r'), e.get('rgb.g'), e.get('rgb.b'), e.alpha());
}

function p(e, t) {
  var n;
  let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.S3.Text;
  if (null == e)
return;
  let i = null !== (n = function(e) {
  var t;
  let n = a()(e);
  return null === (t = o()(E.ym).map(e => {
    let {
      primary: t
    } = e;
    return {
      primary: t,
      distance: a().distance(n, a()(t), 'hsl')
    };
  }).filter(e => {
    let {
      distance: t
    } = e;
    return t < 15;
  }).minBy(e => {
    let {
      distance: t
    } = e;
    return t;
  })) || void 0 === t ? void 0 : t.primary;
}(e)) && void 0 !== n ? n : e,
s = a()(i),
u = a()(t),
c = (0, _.k8)({
  colors: [
    h(s),
    h(u)
  ],
  ratio: r,
  saturationFactor: 1
});
  if (null != c)
return a()(c.toHexString());
}

function m(e, t) {
  let n = function(e, t) {
if (null == e)
  return;
let n = p(e, t, l.S3.NonText);
if (null == n)
  return;
let r = 0.2 > n.luminance() ? n.brighten(0.3) : n.darken(0.3),
  i = 0.2 > n.luminance() ? n.brighten(0.35) : n.darken(0.35);
return {
  '--custom-clan-bg': n.css(),
  '--custom-clan-hover-bg': r.css(),
  '--custom-clan-active-bg': i.css()
};
  }(e, t);
  if (null == n)
return;
  let r = {
'--custom-clan-text': f(n['--custom-clan-bg']).hex()
  };
  return {
...n,
...r
  };
}

function I(e, t) {
  let [n, i = 1] = t, a = (0, c.ZP)();
  return r.useMemo(() => null != e ? e : n.resolve({
theme: a,
saturation: i
  }).hex(), [
e,
n,
i,
a
  ]);
}

function T(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'top left',
r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.3,
i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '50%';
  if (null == e)
return;
  let s = a()(e),
o = {
  background: '\n      radial-gradient(\n        circle at '.concat(n, ',\n        ').concat(s.alpha(r).hex(), ' 0%,\n        transparent ').concat(i, '\n      )\n    ')
};
  if (null != t) {
let e = a()(t);
o.background += ', '.concat(e.hex());
  }
  return o;
}