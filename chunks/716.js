"use strict";
r.d(t, {
  Z: function() {
    return P
  }
});
var n = r(735250),
  i = r(470079),
  o = r(956707),
  s = r.n(o),
  a = r(699581),
  u = r(89106),
  l = r(591490),
  c = r.n(l),
  f = r(565925),
  d = r.n(f),
  h = function() {
    return (h = Object.assign || function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++)
        for (var i in t = arguments[r], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return e
    }).apply(this, arguments)
  },
  p = function(e, t, r, n, i) {
    return (e - t) * (i - n) / (r - t) + n
  },
  y = function(e, t) {
    var r = e + t;
    return r > 360 ? r - 360 : r
  },
  g = function() {
    return Math.random() > .5
  },
  m = [0, 0, 1],
  v = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 1],
    [1, 0, 0],
    [0, 1, 0], m
  ],
  b = v.reduce(function(e, t, r) {
    var n;
    return h(h({}, e), ((n = {})["@keyframes rotation-".concat(r)] = {
      "50%": {
        transform: "rotate3d(".concat(t.map(function(e) {
          return e / 2
        }).join(), ", 180deg)")
      },
      "100%": {
        transform: "rotate3d(".concat(t.join(), ", 360deg)")
      }
    }, n))
  }, {}),
  x = function(e, t, r) {
    var n = e.reduce(function(e, t, n) {
      var i, o = p(Math.abs(y(t, 90) - 180), 0, 180, -r / 2, r / 2);
      return h(h({}, e), ((i = {})["@keyframes x-axis-".concat(n)] = {
        to: {
          transform: "translateX(".concat(o, "px)")
        }
      }, i))
    }, {});
    return h({
      "@keyframes y-axis": {
        to: {
          transform: "translateY(".concat("string" == typeof t ? t : "".concat(t, "px"), ")")
        }
      }
    }, n)
  },
  w = function(e, t, r, n, i) {
    var o, s, a = Math.round(600 * Math.random() + 200),
      u = Math.round(Math.random() * (v.length - 1)),
      l = t - Math.round(1e3 * Math.random()),
      f = .1 > Math.random();
    var b = (o = u, !d()(v[o], m) && g()),
      x = f ? c()(.25 * Math.random(), 2) : 0,
      w = -1 * x,
      k = c()(Math.abs(p(Math.abs(y(e.degree, 90) - 180), 0, 180, -1, 1)), 4),
      S = c()(.5 * Math.random(), 4),
      R = c()(Math.random() * r * (g() ? 1 : -1), 4),
      P = c()(Math.max(p(Math.abs(e.degree - 180), 0, 180, r, -r), 0), 4);
    return (s = {})["&#confetti-particle-".concat(i)] = {
      animation: "$x-axis-".concat(i, " ").concat(l, "ms forwards cubic-bezier(").concat(x, ", ").concat(w, ", ").concat(x, ", ").concat(k, ")"),
      "& > div": {
        width: b ? n : Math.round(4 * Math.random()) + n / 2,
        height: b ? n : Math.round(2 * Math.random()) + n,
        animation: "$y-axis ".concat(l, "ms forwards cubic-bezier(").concat(S, ", ").concat(R, ", ").concat(.5, ", ").concat(P, ")"),
        "&:after": h({
          backgroundColor: e.color,
          animation: "$rotation-".concat(u, " ").concat(a, "ms infinite linear")
        }, b ? {
          borderRadius: "50%"
        } : {})
      }
    }, s
  },
  k = function(e) {
    var t = e.particles,
      r = e.duration,
      n = e.height,
      i = e.width,
      o = e.force,
      s = e.particleSize,
      a = t.reduce(function(e, t, n) {
        return h(h({}, e), w(t, r, o, s, n))
      }, {});
    return (0, u.QM)(h(h(h({}, b), x(t.map(function(e) {
      return e.degree
    }), n, i)), {
      container: {
        width: 0,
        height: 0,
        position: "relative"
      },
      screen: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none"
      },
      particle: h(h({}, a), {
        "& > div": {
          position: "absolute",
          left: 0,
          top: 0,
          "&:after": {
            content: "''",
            display: "block",
            width: "100%",
            height: "100%"
          }
        }
      })
    }), {
      name: "confetti-explosion"
    })
  },
  S = ["#FFC700", "#FF0000", "#2E3191", "#41BBC7"],
  R = function(e, t) {
    var r = 360 / e;
    return s()(e).map(function(e) {
      return {
        color: t[e % t.length],
        degree: r * e
      }
    })
  };

function P(e) {
  var t = e.particleCount,
    r = e.duration,
    o = void 0 === r ? 2200 : r,
    s = e.colors,
    u = e.particleSize,
    l = e.force,
    c = e.height,
    f = e.width,
    d = e.zIndex,
    p = e.onComplete,
    y = function(e, t) {
      var r = {};
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
      return r
    }(e, ["particleCount", "duration", "colors", "particleSize", "force", "height", "width", "zIndex", "onComplete"]),
    g = i.useState(),
    m = g[0],
    v = g[1],
    b = R(void 0 === t ? 100 : t, void 0 === s ? S : s),
    x = k({
      particles: b,
      duration: o,
      particleSize: void 0 === u ? 12 : u,
      force: void 0 === l ? .5 : l,
      width: void 0 === f ? 1e3 : f,
      height: void 0 === c ? "120vh" : c
    })(),
    w = i.useCallback(function(e) {
      if (e) {
        var t = e.getBoundingClientRect();
        v({
          top: t.top,
          left: t.left
        })
      }
    }, []);
  return i.useEffect(function() {
    if ("function" == typeof p) {
      var e = setTimeout(p, o);
      return function() {
        return clearTimeout(e)
      }
    }
  }, [o, p]), (0, n.jsx)("div", h({
    ref: w,
    className: x.container
  }, y, {
    children: m && (0, a.createPortal)((0, n.jsx)("div", h({
      className: x.screen
    }, d ? {
      style: {
        zIndex: d
      }
    } : null, {
      children: (0, n.jsx)("div", h({
        style: {
          position: "absolute",
          top: m.top,
          left: m.left
        }
      }, {
        children: b.map(function(e, t) {
          return (0, n.jsx)("div", h({
            id: "confetti-particle-".concat(t),
            className: x.particle
          }, {
            children: (0, n.jsx)("div", {})
          }), e.degree)
        })
      }))
    })), document.body)
  }))
}