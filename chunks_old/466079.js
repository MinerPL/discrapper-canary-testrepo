"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("124299"),
  u = n("154462");
let o = 16 / 9;

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
    width: g,
    height: S
  } = p, C = null !== (t = null == s ? void 0 : s.length) && void 0 !== t ? t : 0, _ = g - 16, I = S - (h + m), {
    tileStyle: T,
    tileWidth: v,
    rows: x,
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
            let n = e / o;
            return Math.ceil((t - n) / (8 + n)) + 1
          }(e, n);
        return a * l > 25
      }) : c(l, t, a => {
        let l = d(a, t),
          s = function(e, t) {
            let n = e / o;
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
  })(C, _, I), [C, _, I]), A = N + 1, M = A * v + (A - 1) * 8, R = M <= g, j = Math.floor(v / o) + 8, L = Math.max(0, I - j * x) / 2;
  return (0, a.jsx)(r.default, {
    fade: !0,
    className: n,
    listPadding: [h + L, 0, m + L - 8, 8],
    renderRow: function(e) {
      var t;
      let n = e * N;
      return (0, a.jsx)("div", {
        className: u.row,
        children: null == s ? void 0 : null === (t = s.slice(n, n + N)) || void 0 === t ? void 0 : t.map((e, t) => {
          var l;
          let s = n + t;
          return (0, a.jsx)("div", {
            style: T,
            className: i(u.tile, {
              [u.padColumn]: R,
              [u.noVerticalMargin]: s >= (x - 1) * N,
              [u.noHorizontalMargin]: (s + 1) % N == 0 || s === C - 1
            }),
            children: (0, a.jsx)("div", {
              className: u.tileSizer,
              children: e(v)
            })
          }, null !== (l = null == f ? void 0 : f(s)) && void 0 !== l ? l : s)
        })
      }, e)
    },
    rowCount: x,
    rowCountBySection: [x],
    rowHeight: j,
    onResize: E
  })
}