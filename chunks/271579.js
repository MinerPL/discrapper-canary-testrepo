n.d(t, {
  WS: function() {
return l;
  },
  ZP: function() {
return c;
  },
  zS: function() {
return u;
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(264344),
  i = n.n(r),
  a = n(772848),
  s = n(511266);
let o = 'https://discordapp.page.link';

function l() {
  return (0, a.Z)();
}

function u(e) {
  if (!e.startsWith(o))
return null;
  try {
var t;
let n = new URL(e).searchParams,
  r = n.get('link');
if (null == r)
  return null;
let i = decodeURIComponent(r),
  a = new URL(i).searchParams,
  s = {
    utmSource: null !== (t = n.get('utm_source')) && void 0 !== t ? t : void 0
  };
for (let [e, t] of a.entries())
  s[e] = t;
return s;
  } catch {
return null;
  }
}

function c(e, t) {
  let {
utmSource: n,
androidFallbackLink: r,
iosFallbackLink: a,
...l
  } = t, u = new URL(e);
  for (let e in l) {
let t = l[e];
null != t && u.searchParams.set(e, t);
  }
  let c = encodeURIComponent(u.toString()),
d = encodeURIComponent((0, s.Z)()),
_ = ! function() {
  var e, t;
  let n = RegExp('('.concat('WebView|(iPhone|iPod|iPad)(?!.*Safari/)', ')'), 'ig'),
    r = (null === i() || void 0 === i() ? void 0 : null === (e = i().ua) || void 0 === e ? void 0 : e.match(n)) != null,
    a = (null === i() || void 0 === i() ? void 0 : i().name) === 'Safari' && !r;
  return (null === i() || void 0 === i() ? void 0 : null === (t = i().os) || void 0 === t ? void 0 : t.family) !== 'iOS' || a;
}() ? 0 : 1,
E = null != r ? encodeURIComponent(r) : null,
f = null != a ? encodeURIComponent(a) : null,
h = ''.concat(o, '/?link=').concat(c, '&utm_source=').concat(n, '&apn=').concat('com.discord', '&isi=').concat(985746746, '&ibi=').concat('com.hammerandchisel.discord', '&sd=').concat(d, '&efr=').concat(_);
  return null != E && (h += '&afl='.concat(E)), null != f && (h += '&ifl='.concat(f)), h;
}