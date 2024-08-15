n.d(t, {
  P7: function() {
return p;
  },
  RR: function() {
return m;
  },
  UN: function() {
return u;
  },
  bg: function() {
return _;
  },
  hn: function() {
return d;
  },
  np: function() {
return h;
  }
});
var i = n(979590),
  a = n.n(i),
  s = n(866442),
  l = n(220082),
  r = n(594174),
  o = n(292793),
  c = n(813900);

function u(e) {
  let t = e.current,
n = null == t ? void 0 : t.getContext('2d');
  if (null != t && null != n)
n.clearRect(0, 0, t.width, t.height);
}

function d(e, t) {
  let {
width: n,
height: i,
left: a,
top: s
  } = e.getBoundingClientRect(), l = (t.clientX - a) / n;
  return {
x: l,
y: (t.clientY - s) / i
  };
}

function h(e, t) {
  return Math.round(e * t * window.devicePixelRatio);
}

function m(e, t, n) {
  return {
x: h(e.x, t),
y: h(e.y, n),
deltaTime: e.deltaTime
  };
}

function p(e) {
  return e.type === o.W.LINE;
}

function _(e, t, n, i) {
  var o;
  let u = r.default.getUser(e),
d = null == u ? void 0 : u.getAvatarURL(null, c.Ks),
h = null != d ? null === (o = l.SR.getState().palette[d]) || void 0 === o ? void 0 : o[0] : null,
m = null != h ? '#'.concat(a()({
  r: h[0],
  g: h[1],
  b: h[2]
}).toHex()) : i,
p = (0, s.Bd)((0, s._i)(m)) > 0.5 ? n : t;
  return {
fillColor: m,
outlineColor: p
  };
}