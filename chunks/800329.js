n.d(t, {
  Z: function() {
return h;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(218867),
  o = n(71148);
let c = 16 / 9;

function u(e, t) {
  return Math.max(1, Math.floor((t - e) / (8 + e)) + 1);
}

function d(e, t, n) {
  let i = t - e;
  for (; i > 0;) {
let t = e,
  a = Math.floor(i / 2);
n(t += a) ? (e = t + 1, i -= a + 1) : i = a;
  }
  return e;
}

function h(e) {
  var t;
  let {
className: n,
children: s,
keyExtractor: h,
paddingTop: m = 0,
paddingBottom: p = 0
  } = e, [_, f] = a.useState({
width: 0,
height: 0
  }), {
width: E,
height: g
  } = _, C = null !== (t = null == s ? void 0 : s.length) && void 0 !== t ? t : 0, I = E - 16, x = g - (m + p), {
tileStyle: T,
tileWidth: N,
rows: v,
columns: S
  } = a.useMemo(() => function(e, t, n) {
let {
  rows: i,
  columns: a,
  tileWidth: s
} = function(e, t, n) {
  let i;
  let a = Math.floor(t / 25);
  i = e > 25 ? d(a, t, e => {
    let i = u(e, t),
      a = function(e, t) {
        let n = e / c;
        return Math.ceil((t - n) / (8 + n)) + 1;
      }(e, n);
    return i * a > 25;
  }) : d(a, t, i => {
    let a = u(i, t),
      s = function(e, t) {
        let n = e / c;
        return Math.floor((t - n) / (8 + n)) + 1;
      }(i, n);
    return a * s >= e;
  }) - 1;
  let s = u(i, t),
    l = Math.ceil(e / s);
  return {
    tileWidth: i,
    columns: Math.max(1, s),
    rows: l
  };
}(e, t, n);
return {
  tileStyle: {
    width: s
  },
  tileWidth: s,
  rows: i,
  columns: a
};
  }(C, I, x), [
C,
I,
x
  ]), Z = S + 1, A = Z * N + (Z - 1) * 8 <= E, M = Math.floor(N / c) + 8, b = Math.max(0, x - M * v) / 2;
  return (0, i.jsx)(r.Z, {
fade: !0,
className: n,
listPadding: [
  m + b,
  0,
  p + b - 8,
  8
],
renderRow: function(e) {
  var t;
  let n = e * S;
  return (0, i.jsx)('div', {
    className: o.row,
    children: null == s ? void 0 : null === (t = s.slice(n, n + S)) || void 0 === t ? void 0 : t.map((e, t) => {
      var a;
      let s = n + t;
      return (0, i.jsx)('div', {
        style: T,
        className: l()(o.tile, {
          [o.padColumn]: A,
          [o.noVerticalMargin]: s >= (v - 1) * S,
          [o.noHorizontalMargin]: (s + 1) % S == 0 || s === C - 1
        }),
        children: (0, i.jsx)('div', {
          className: o.tileSizer,
          children: e(N)
        })
      }, null !== (a = null == h ? void 0 : h(s)) && void 0 !== a ? a : s);
    })
  }, e);
},
rowCount: v,
rowCountBySection: [v],
rowHeight: M,
onResize: f
  });
}