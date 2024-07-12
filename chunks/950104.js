n.d(t, {
  Qg: function() {
return s;
  },
  S3: function() {
return a;
  },
  r5: function() {
return l;
  }
}), n(47120), n(411104);
var r = n(688619),
  i = n.n(r);
let a = {
  NonText: 3,
  Text: 4.5,
  HighContrastText: 7
};

function o(e) {
  let [t, n, r, i] = e.rgba();
  return 'rgba('.concat(t, ', ').concat(n, ', ').concat(r, ', ').concat(i, ')');
}

function s(e) {
  var t, n, r;
  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
l = null !== (t = s.contrastRatio) && void 0 !== t ? t : a.NonText,
u = null !== (n = s.tolerance) && void 0 !== n ? n : 3,
c = i()(null !== (r = s.base) && void 0 !== r ? r : e),
d = i()(e),
_ = c.luminance(),
E = d,
f = l + u,
h = i().contrast(c, d),
p = 100;
  for (; p-- > 0;) {
let e = h < l,
  t = h > f;
if (!e && !t)
  break;
let n = E.luminance() > _;
E = t && n || e && !n ? E.darken() : E.brighten(), h = i().contrast(c, E);
  }
  return o(E);
}

function l(e, t) {
  return o(i()(e).darken(t));
}