"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("695464"),
  o = n("89405");
let u = 16 / 9;

function d(e, t) {
  return Math.floor((t - e) / (8 + e)) + 1
}

function c(e, t, n) {
  let a = t - e;
  for (; a > 0;) {
    let t = e,
      l = Math.floor(a / 2);
    n(t += l) ? (e = t + 1, a -= l + 1) : a = l
  }
  return e
}

function f(e) {
  var t;
  let {
    className: n,
    children: s,
    keyExtractor: f,
    paddingTop: h = 0,
    paddingBottom: m = 0
  } = e, [p, E] = l.useState({
    width: 0,
    height: 0
  }), {
    width: C,
    height: g
  } = p, S = null !== (t = null == s ? void 0 : s.length) && void 0 !== t ? t : 0, _ = C - 16, T = g - (h + m), {
    tileStyle: I,
    tileWidth: A,
    rows: v,
    columns: N
  } = l.useMemo(() => (function(e, t, n) {
    let {
      rows: a,
      columns: l,
      tileWidth: s
    } = function(e, t, n) {
      let a;
      let l = Math.floor(t / 25);
      a = e > 25 ? c(l, t, e => {
        let a = d(e, t),
          l = function(e, t) {
            let n = e / u;
            return Math.ceil((t - n) / (8 + n)) + 1
          }(e, n);
        return a * l > 25
      }) : c(l, t, a => {
        let l = d(a, t),
          s = function(e, t) {
            let n = e / u;
            return Math.floor((t - n) / (8 + n)) + 1
          }(a, n);
        return l * s >= e
      }) - 1;
      let s = d(a, t),
        i = Math.ceil(e / s);
      return {
        tileWidth: a,
        columns: Math.max(1, s),
        rows: i
      }
    }(e, t, n);
    return {
      tileStyle: {
        width: s
      },
      tileWidth: s,
      rows: a,
      columns: l
    }
  })(S, _, T), [S, _, T]), x = N + 1, M = x * A + (x - 1) * 8 <= C, R = Math.floor(A / u) + 8, L = Math.max(0, T - R * v) / 2;
  return (0, a.jsx)(r.default, {
    fade: !0,
    className: n,
    listPadding: [h + L, 0, m + L - 8, 8],
    renderRow: function(e) {
      var t;
      let n = e * N;
      return (0, a.jsx)("div", {
        className: o.row,
        children: null == s ? void 0 : null === (t = s.slice(n, n + N)) || void 0 === t ? void 0 : t.map((e, t) => {
          var l;
          let s = n + t;
          return (0, a.jsx)("div", {
            style: I,
            className: i()(o.tile, {
              [o.padColumn]: M,
              [o.noVerticalMargin]: s >= (v - 1) * N,
              [o.noHorizontalMargin]: (s + 1) % N == 0 || s === S - 1
            }),
            children: (0, a.jsx)("div", {
              className: o.tileSizer,
              children: e(A)
            })
          }, null !== (l = null == f ? void 0 : f(s)) && void 0 !== l ? l : s)
        })
      }, e)
    },
    rowCount: v,
    rowCountBySection: [v],
    rowHeight: R,
    onResize: E
  })
}