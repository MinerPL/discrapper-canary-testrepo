n.d(t, {
  P7: function() {
return m;
  },
  RR: function() {
return p;
  },
  UN: function() {
return d;
  },
  bg: function() {
return _;
  },
  hn: function() {
return u;
  },
  np: function() {
return h;
  }
});
var i = n(979590),
  a = n.n(i),
  l = n(866442),
  s = n(220082),
  r = n(594174),
  o = n(292793),
  c = n(813900);

function d(e) {
  let t = e.current,
n = null == t ? void 0 : t.getContext('2d');
  if (null != t && null != n)
n.clearRect(0, 0, t.width, t.height);
}

function u(e, t) {
  let {
width: n,
height: i,
left: a,
top: l
  } = e.getBoundingClientRect(), s = (t.clientX - a) / n;
  return {
x: s,
y: (t.clientY - l) / i
  };
}

function h(e, t) {
  return Math.round(e * t * window.devicePixelRatio);
}

function p(e, t, n) {
  return {
x: h(e.x, t),
y: h(e.y, n),
deltaTime: e.deltaTime
  };
}

function m(e) {
  return e.type === o.W.LINE;
}

function _(e, t, n, i) {
  var o;
  let d = r.default.getUser(e),
u = null == d ? void 0 : d.getAvatarURL(null, c.Ks),
h = null != u ? null === (o = s.SR.getState().palette[u]) || void 0 === o ? void 0 : o[0] : null,
p = null != h ? '#'.concat(a()({
  r: h[0],
  g: h[1],
  b: h[2]
}).toHex()) : i,
m = (0, l.Bd)((0, l._i)(p)) > 0.5 ? n : t;
  return {
fillColor: p,
outlineColor: m
  };
}