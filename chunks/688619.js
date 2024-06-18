var e, n;
e = this, n = function() {
  "use strict";
  for (var t = function(t, r, e) {
      return void 0 === r && (r = 0), void 0 === e && (e = 1), t < r ? r : t > e ? e : t
    }, r = {}, e = 0, n = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; e < n.length; e += 1) {
    var o = n[e];
    r["[object " + o + "]"] = o.toLowerCase()
  }
  var i = function(t) {
      return r[Object.prototype.toString.call(t)] || "object"
    },
    a = Math.PI,
    u = {
      clip_rgb: function(r) {
        r._clipped = !1, r._unclipped = r.slice(0);
        for (var e = 0; e <= 3; e++) e < 3 ? ((r[e] < 0 || r[e] > 255) && (r._clipped = !0), r[e] = t(r[e], 0, 255)) : 3 === e && (r[e] = t(r[e], 0, 1));
        return r
      },
      limit: t,
      type: i,
      unpack: function(t, r) {
        return (void 0 === r && (r = null), t.length >= 3) ? Array.prototype.slice.call(t) : "object" == i(t[0]) && r ? r.split("").filter(function(r) {
          return void 0 !== t[0][r]
        }).map(function(r) {
          return t[0][r]
        }) : t[0]
      },
      last: function(t) {
        if (t.length < 2) return null;
        var r = t.length - 1;
        return "string" == i(t[r]) ? t[r].toLowerCase() : null
      },
      TWOPI: 2 * a,
      PITHIRD: a / 3,
      DEG2RAD: a / 180,
      RAD2DEG: 180 / a
    },
    f = {
      format: {},
      autodetect: []
    },
    c = u.last,
    s = u.clip_rgb,
    p = u.type,
    l = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("object" === p(t[0]) && t[0].constructor && t[0].constructor === this.constructor) return t[0];
      var e = c(t),
        n = !1;
      if (!e) {
        n = !0, !f.sorted && (f.autodetect = f.autodetect.sort(function(t, r) {
          return r.p - t.p
        }), f.sorted = !0);
        for (var o = 0, i = f.autodetect; o < i.length; o += 1) {
          var a = i[o];
          if (e = a.test.apply(a, t)) break
        }
      }
      if (f.format[e]) {
        var u = f.format[e].apply(null, n ? t : t.slice(0, -1));
        this._rgb = s(u)
      } else throw Error("unknown format: " + t);
      3 === this._rgb.length && this._rgb.push(1)
    };
  l.prototype.toString = function() {
    return "function" == p(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]"
  };
  var h = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(h.Color, [null].concat(t)))
  };
  h.Color = l, h.version = "2.4.2";
  var v = u.unpack,
    d = Math.max,
    b = u.unpack,
    g = u.unpack,
    y = u.type,
    m = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = v(t, "rgb"),
        n = e[0],
        o = e[1],
        i = e[2],
        a = 1 - d(n /= 255, d(o /= 255, i /= 255)),
        u = a < 1 ? 1 / (1 - a) : 0;
      return [(1 - n - a) * u, (1 - o - a) * u, (1 - i - a) * u, a]
    };
  l.prototype.cmyk = function() {
    return m(this._rgb)
  }, h.cmyk = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(l, [null].concat(t, ["cmyk"])))
  }, f.format.cmyk = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    var e = (t = b(t, "cmyk"))[0],
      n = t[1],
      o = t[2],
      i = t[3],
      a = t.length > 4 ? t[4] : 1;
    return 1 === i ? [0, 0, 0, a] : [e >= 1 ? 0 : 255 * (1 - e) * (1 - i), n >= 1 ? 0 : 255 * (1 - n) * (1 - i), o >= 1 ? 0 : 255 * (1 - o) * (1 - i), a]
  }, f.autodetect.push({
    p: 2,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === y(t = g(t, "cmyk")) && 4 === t.length) return "cmyk"
    }
  });
  var w = u.unpack,
    _ = u.last,
    x = function(t) {
      return Math.round(100 * t) / 100
    },
    k = u.unpack,
    M = function() {
      for (var t, r, e = [], n = arguments.length; n--;) e[n] = arguments[n];
      var o = (e = k(e, "rgba"))[0],
        i = e[1],
        a = e[2],
        u = Math.min(o /= 255, i /= 255, a /= 255),
        f = Math.max(o, i, a),
        c = (f + u) / 2;
      return (f === u ? (t = 0, r = Number.NaN) : t = c < .5 ? (f - u) / (f + u) : (f - u) / (2 - f - u), o == f ? r = (i - a) / (f - u) : i == f ? r = 2 + (a - o) / (f - u) : a == f && (r = 4 + (o - i) / (f - u)), (r *= 60) < 0 && (r += 360), e.length > 3 && void 0 !== e[3]) ? [r, t, c, e[3]] : [r, t, c]
    },
    j = u.unpack,
    O = u.last,
    E = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = w(t, "hsla"),
        n = _(t) || "lsa";
      return e[0] = x(e[0] || 0), e[1] = x(100 * e[1]) + "%", e[2] = x(100 * e[2]) + "%", "hsla" === n || e.length > 3 && e[3] < 1 ? (e[3] = e.length > 3 ? e[3] : 1, n = "hsla") : e.length = 3, n + "(" + e.join(",") + ")"
    },
    N = Math.round,
    A = u.unpack,
    S = Math.round,
    q = function() {
      for (var t, r, e, n, o = [], i = arguments.length; i--;) o[i] = arguments[i];
      var a = (o = A(o, "hsl"))[0],
        u = o[1],
        f = o[2];
      if (0 === u) r = e = n = 255 * f;
      else {
        var c = [0, 0, 0],
          s = [0, 0, 0],
          p = f < .5 ? f * (1 + u) : f + u - f * u,
          l = 2 * f - p,
          h = a / 360;
        c[0] = h + 1 / 3, c[1] = h, c[2] = h - 1 / 3;
        for (var v = 0; v < 3; v++) c[v] < 0 && (c[v] += 1), c[v] > 1 && (c[v] -= 1), 6 * c[v] < 1 ? s[v] = l + (p - l) * 6 * c[v] : 2 * c[v] < 1 ? s[v] = p : 3 * c[v] < 2 ? s[v] = l + (p - l) * (2 / 3 - c[v]) * 6 : s[v] = l;
        r = (t = [S(255 * s[0]), S(255 * s[1]), S(255 * s[2])])[0], e = t[1], n = t[2]
      }
      return o.length > 3 ? [r, e, n, o[3]] : [r, e, n, 1]
    },
    P = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
    I = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
    B = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
    T = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
    L = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
    z = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
    R = Math.round,
    F = function(t) {
      if (t = t.toLowerCase().trim(), f.format.named) try {
        return f.format.named(t)
      } catch (t) {}
      if (r = t.match(P)) {
        for (var r, e = r.slice(1, 4), n = 0; n < 3; n++) e[n] = +e[n];
        return e[3] = 1, e
      }
      if (r = t.match(I)) {
        for (var o = r.slice(1, 5), i = 0; i < 4; i++) o[i] = +o[i];
        return o
      }
      if (r = t.match(B)) {
        for (var a = r.slice(1, 4), u = 0; u < 3; u++) a[u] = R(2.55 * a[u]);
        return a[3] = 1, a
      }
      if (r = t.match(T)) {
        for (var c = r.slice(1, 5), s = 0; s < 3; s++) c[s] = R(2.55 * c[s]);
        return c[3] = +c[3], c
      }
      if (r = t.match(L)) {
        var p = r.slice(1, 4);
        p[1] *= .01, p[2] *= .01;
        var l = q(p);
        return l[3] = 1, l
      }
      if (r = t.match(z)) {
        var h = r.slice(1, 4);
        h[1] *= .01, h[2] *= .01;
        var v = q(h);
        return v[3] = +r[4], v
      }
    };
  F.test = function(t) {
    return P.test(t) || I.test(t) || B.test(t) || T.test(t) || L.test(t) || z.test(t)
  };
  var C = u.type,
    D = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = j(t, "rgba"),
        n = O(t) || "rgb";
      return "hsl" == n.substr(0, 3) ? E(M(e), n) : (e[0] = N(e[0]), e[1] = N(e[1]), e[2] = N(e[2]), ("rgba" === n || e.length > 3 && e[3] < 1) && (e[3] = e.length > 3 ? e[3] : 1, n = "rgba"), n + "(" + e.slice(0, "rgb" === n ? 3 : 4).join(",") + ")")
    };
  l.prototype.css = function(t) {
    return D(this._rgb, t)
  }, h.css = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(l, [null].concat(t, ["css"])))
  }, f.format.css = F, f.autodetect.push({
    p: 5,
    test: function(t) {
      for (var r = [], e = arguments.length - 1; e-- > 0;) r[e] = arguments[e + 1];
      if (!r.length && "string" === C(t) && F.test(t)) return "css"
    }
  });
  var U = u.unpack;
  f.format.gl = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    var e = U(t, "rgba");
    return e[0] *= 255, e[1] *= 255, e[2] *= 255, e
  }, h.gl = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(l, [null].concat(t, ["gl"])))
  }, l.prototype.gl = function() {
    var t = this._rgb;
    return [t[0] / 255, t[1] / 255, t[2] / 255, t[3]]
  };
  var Z = u.unpack,
    G = u.unpack,
    $ = Math.floor,
    J = u.unpack,
    Y = u.type,
    V = function() {
      for (var t, r = [], e = arguments.length; e--;) r[e] = arguments[e];
      var n = Z(r, "rgb"),
        o = n[0],
        i = n[1],
        a = n[2],
        u = Math.min(o, i, a),
        f = Math.max(o, i, a),
        c = f - u;
      return 0 === c ? t = Number.NaN : (o === f && (t = (i - a) / c), i === f && (t = 2 + (a - o) / c), a === f && (t = 4 + (o - i) / c), (t *= 60) < 0 && (t += 360)), [t, 100 * c / 255, u / (255 - c) * 100]
    };
  l.prototype.hcg = function() {
    return V(this._rgb)
  }, h.hcg = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(l, [null].concat(t, ["hcg"])))
  }, f.format.hcg = function() {
    for (var t, r, e, n, o, i, a, u, f, c = [], s = arguments.length; s--;) c[s] = arguments[s];
    var p = (c = G(c, "hcg"))[0],
      l = c[1],
      h = c[2];
    h *= 255;
    var v = 255 * l;
    if (0 === l) a = u = f = h;
    else {
      360 === p && (p = 0), p > 360 && (p -= 360), p < 0 && (p += 360);
      var d = $(p /= 60),
        b = p - d,
        g = h * (1 - l),
        y = g + v * (1 - b),
        m = g + v * b,
        w = g + v;
      switch (d) {
        case 0:
          a = (t = [w, m, g])[0], u = t[1], f = t[2];
          break;
        case 1:
          a = (r = [y, w, g])[0], u = r[1], f = r[2];
          break;
        case 2:
          a = (e = [g, w, m])[0], u = e[1], f = e[2];
          break;
        case 3:
          a = (n = [g, y, w])[0], u = n[1], f = n[2];
          break;
        case 4:
          a = (o = [m, g, w])[0], u = o[1], f = o[2];
          break;
        case 5:
          a = (i = [w, g, y])[0], u = i[1], f = i[2]
      }
    }
    return [a, u, f, c.length > 3 ? c[3] : 1]
  }, f.autodetect.push({
    p: 1,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === Y(t = J(t, "hcg")) && 3 === t.length) return "hcg"
    }
  });
  var W = u.unpack,
    X = u.last,
    K = Math.round,
    H = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = W(t, "rgba"),
        n = e[0],
        o = e[1],
        i = e[2],
        a = e[3],
        u = X(t) || "auto";
      void 0 === a && (a = 1), "auto" === u && (u = a < 1 ? "rgba" : "rgb"), n = K(n), o = K(o);
      var f = "000000" + (n << 16 | o << 8 | (i = K(i))).toString(16);
      f = f.substr(f.length - 6);
      var c = "0" + K(255 * a).toString(16);
      switch (c = c.substr(c.length - 2), u.toLowerCase()) {
        case "rgba":
          return "#" + f + c;
        case "argb":
          return "#" + c + f;
        default:
          return "#" + f
      }
    },
    Q = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
    tt = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
    tr = function(t) {
      if (t.match(Q)) {
        (4 === t.length || 7 === t.length) && (t = t.substr(1)), 3 === t.length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
        var r = parseInt(t, 16);
        return [r >> 16, r >> 8 & 255, 255 & r, 1]
      }
      if (t.match(tt)) {
        (5 === t.length || 9 === t.length) && (t = t.substr(1)), 4 === t.length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
        var e = parseInt(t, 16),
          n = Math.round((255 & e) / 255 * 100) / 100;
        return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, n]
      }
      throw Error("unknown hex color: " + t)
    },
    te = u.type;
  l.prototype.hex = function(t) {
    return H(this._rgb, t)
  }, h.hex = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(l, [null].concat(t, ["hex"])))
  }, f.format.hex = tr, f.autodetect.push({
    p: 4,
    test: function(t) {
      for (var r = [], e = arguments.length - 1; e-- > 0;) r[e] = arguments[e + 1];
      if (!r.length && "string" === te(t) && [3, 4, 5, 6, 7, 8, 9].indexOf(t.length) >= 0) return "hex"
    }
  });
  var tn = u.unpack,
    to = u.TWOPI,
    ti = Math.min,
    ta = Math.sqrt,
    tu = Math.acos,
    tf = u.unpack,
    tc = u.limit,
    ts = u.TWOPI,
    tp = u.PITHIRD,
    tl = Math.cos,
    th = u.unpack,
    tv = u.type,
    td = function() {
      for (var t, r = [], e = arguments.length; e--;) r[e] = arguments[e];
      var n = tn(r, "rgb"),
        o = n[0],
        i = n[1],
        a = n[2],
        u = ti(o /= 255, i /= 255, a /= 255),
        f = (o + i + a) / 3,
        c = f > 0 ? 1 - u / f : 0;
      return 0 === c ? t = NaN : (t = tu(t = (o - i + (o - a)) / 2 / ta((o - i) * (o - i) + (o - a) * (i - a))), a > i && (t = to - t), t /= to), [360 * t, c, f]
    };
  l.prototype.hsi = function() {
    return td(this._rgb)
  }, h.hsi = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(l, [null].concat(t, ["hsi"])))
  }, f.format.hsi = function() {
    for (var t, r, e, n = [], o = arguments.length; o--;) n[o] = arguments[o];
    var i = (n = tf(n, "hsi"))[0],
      a = n[1],
      u = n[2];
    return isNaN(i) && (i = 0), isNaN(a) && (a = 0), i > 360 && (i -= 360), i < 0 && (i += 360), (i /= 360) < 1 / 3 ? r = 1 - ((e = (1 - a) / 3) + (t = (1 + a * tl(ts * i) / tl(tp - ts * i)) / 3)) : i < 2 / 3 ? (i -= 1 / 3, e = 1 - ((t = (1 - a) / 3) + (r = (1 + a * tl(ts * i) / tl(tp - ts * i)) / 3))) : (i -= 2 / 3, t = 1 - ((r = (1 - a) / 3) + (e = (1 + a * tl(ts * i) / tl(tp - ts * i)) / 3))), t = tc(u * t * 3), r = tc(u * r * 3), [255 * t, 255 * r, 255 * (e = tc(u * e * 3)), n.length > 3 ? n[3] : 1]
  }, f.autodetect.push({
    p: 2,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === tv(t = th(t, "hsi")) && 3 === t.length) return "hsi"
    }
  });
  var tb = u.unpack,
    tg = u.type;
  l.prototype.hsl = function() {
    return M(this._rgb)
  }, h.hsl = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(l, [null].concat(t, ["hsl"])))
  }, f.format.hsl = q, f.autodetect.push({
    p: 2,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === tg(t = tb(t, "hsl")) && 3 === t.length) return "hsl"
    }
  });
  var ty = u.unpack,
    tm = Math.min,
    tw = Math.max,
    t_ = u.unpack,
    tx = Math.floor,
    tk = u.unpack,
    tM = u.type,
    tj = function() {
      for (var t, r, e, n = [], o = arguments.length; o--;) n[o] = arguments[o];
      var i = (n = ty(n, "rgb"))[0],
        a = n[1],
        u = n[2],
        f = tm(i, a, u),
        c = tw(i, a, u),
        s = c - f;
      return e = c / 255, 0 === c ? (t = Number.NaN, r = 0) : (r = s / c, i === c && (t = (a - u) / s), a === c && (t = 2 + (u - i) / s), u === c && (t = 4 + (i - a) / s), (t *= 60) < 0 && (t += 360)), [t, r, e]
    };
  l.prototype.hsv = function() {
    return tj(this._rgb)
  }, h.hsv = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(l, [null].concat(t, ["hsv"])))
  }, f.format.hsv = function() {
    for (var t, r, e, n, o, i, a, u, f, c = [], s = arguments.length; s--;) c[s] = arguments[s];
    var p = (c = t_(c, "hsv"))[0],
      l = c[1],
      h = c[2];
    if (h *= 255, 0 === l) a = u = f = h;
    else {
      360 === p && (p = 0), p > 360 && (p -= 360), p < 0 && (p += 360);
      var v = tx(p /= 60),
        d = p - v,
        b = h * (1 - l),
        g = h * (1 - l * d),
        y = h * (1 - l * (1 - d));
      switch (v) {
        case 0:
          a = (t = [h, y, b])[0], u = t[1], f = t[2];
          break;
        case 1:
          a = (r = [g, h, b])[0], u = r[1], f = r[2];
          break;
        case 2:
          a = (e = [b, h, y])[0], u = e[1], f = e[2];
          break;
        case 3:
          a = (n = [b, g, h])[0], u = n[1], f = n[2];
          break;
        case 4:
          a = (o = [y, b, h])[0], u = o[1], f = o[2];
          break;
        case 5:
          a = (i = [h, b, g])[0], u = i[1], f = i[2]
      }
    }
    return [a, u, f, c.length > 3 ? c[3] : 1]
  }, f.autodetect.push({
    p: 2,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === tM(t = tk(t, "hsv")) && 3 === t.length) return "hsv"
    }
  });
  var tO = {
      Kn: 18,
      Xn: .95047,
      Yn: 1,
      Zn: 1.08883,
      t0: .137931034,
      t1: .206896552,
      t2: .12841855,
      t3: .008856452
    },
    tE = u.unpack,
    tN = Math.pow,
    tA = function(t) {
      return (t /= 255) <= .04045 ? t / 12.92 : tN((t + .055) / 1.055, 2.4)
    },
    tS = function(t) {
      return t > tO.t3 ? tN(t, 1 / 3) : t / tO.t2 + tO.t0
    },
    tq = function(t, r, e) {
      return t = tA(t), r = tA(r), [tS((.4124564 * t + .3575761 * r + .1804375 * (e = tA(e))) / tO.Xn), tS((.2126729 * t + .7151522 * r + .072175 * e) / tO.Yn), tS((.0193339 * t + .119192 * r + .9503041 * e) / tO.Zn)]
    },
    tP = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = tE(t, "rgb"),
        n = tq(e[0], e[1], e[2]),
        o = n[0],
        i = n[1],
        a = n[2],
        u = 116 * i - 16;
      return [u < 0 ? 0 : u, 500 * (o - i), 200 * (i - a)]
    },
    tI = u.unpack,
    tB = Math.pow,
    tT = function(t) {
      return 255 * (t <= .00304 ? 12.92 * t : 1.055 * tB(t, 1 / 2.4) - .055)
    },
    tL = function(t) {
      return t > tO.t1 ? t * t * t : tO.t2 * (t - tO.t0)
    },
    tz = function() {
      for (var t, r, e, n, o, i = [], a = arguments.length; a--;) i[a] = arguments[a];
      var u = (i = tI(i, "lab"))[0],
        f = i[1],
        c = i[2];
      return r = (u + 16) / 116, t = isNaN(f) ? r : r + f / 500, e = isNaN(c) ? r : r - c / 200, r = tO.Yn * tL(r), t = tO.Xn * tL(t), n = tT(3.2404542 * t - 1.5371385 * r - .4985314 * (e = tO.Zn * tL(e))), o = tT(-.969266 * t + 1.8760108 * r + .041556 * e), [n, o, tT(.0556434 * t - .2040259 * r + 1.0572252 * e), i.length > 3 ? i[3] : 1]
    },
    tR = u.unpack,
    tF = u.type;
  l.prototype.lab = function() {
    return tP(this._rgb)
  }, h.lab = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(l, [null].concat(t, ["lab"])))
  }, f.format.lab = tz, f.autodetect.push({
    p: 2,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === tF(t = tR(t, "lab")) && 3 === t.length) return "lab"
    }
  });
  var tC = u.unpack,
    tD = u.RAD2DEG,
    tU = Math.sqrt,
    tZ = Math.atan2,
    tG = Math.round,
    t$ = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = tC(t, "lab"),
        n = e[0],
        o = e[1],
        i = e[2],
        a = tU(o * o + i * i),
        u = (tZ(i, o) * tD + 360) % 360;
      return 0 === tG(1e4 * a) && (u = Number.NaN), [n, a, u]
    },
    tJ = u.unpack,
    tY = u.unpack,
    tV = u.DEG2RAD,
    tW = Math.sin,
    tX = Math.cos,
    tK = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = tY(t, "lch"),
        n = e[0],
        o = e[1],
        i = e[2];
      return isNaN(i) && (i = 0), [n, tX(i *= tV) * o, tW(i) * o]
    },
    tH = u.unpack,
    tQ = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = tK((t = tH(t, "lch"))[0], t[1], t[2]),
        n = tz(e[0], e[1], e[2]);
      return [n[0], n[1], n[2], t.length > 3 ? t[3] : 1]
    },
    t0 = u.unpack,
    t1 = u.unpack,
    t2 = u.type,
    t5 = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = tJ(t, "rgb"),
        n = tP(e[0], e[1], e[2]);
      return t$(n[0], n[1], n[2])
    };
  l.prototype.lch = function() {
    return t5(this._rgb)
  }, l.prototype.hcl = function() {
    return t5(this._rgb).reverse()
  }, h.lch = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(l, [null].concat(t, ["lch"])))
  }, h.hcl = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(l, [null].concat(t, ["hcl"])))
  }, f.format.lch = tQ, f.format.hcl = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    var e = t0(t, "hcl").reverse();
    return tQ.apply(void 0, e)
  }, ["lch", "hcl"].forEach(function(t) {
    return f.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        if ("array" === t2(r = t1(r, t)) && 3 === r.length) return t
      }
    })
  });
  var t3 = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflower: "#6495ed",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      laserlemon: "#ffff54",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrod: "#fafad2",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      maroon2: "#7f0000",
      maroon3: "#b03060",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      purple2: "#7f007f",
      purple3: "#a020f0",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    },
    t7 = u.type;
  l.prototype.name = function() {
    for (var t = H(this._rgb, "rgb"), r = 0, e = Object.keys(t3); r < e.length; r += 1) {
      var n = e[r];
      if (t3[n] === t) return n.toLowerCase()
    }
    return t
  }, f.format.named = function(t) {
    if (t3[t = t.toLowerCase()]) return tr(t3[t]);
    throw Error("unknown color name: " + t)
  }, f.autodetect.push({
    p: 5,
    test: function(t) {
      for (var r = [], e = arguments.length - 1; e-- > 0;) r[e] = arguments[e + 1];
      if (!r.length && "string" === t7(t) && t3[t.toLowerCase()]) return "named"
    }
  });
  var t9 = u.unpack,
    t4 = u.type,
    t8 = u.type,
    t6 = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = t9(t, "rgb");
      return (e[0] << 16) + (e[1] << 8) + e[2]
    };
  l.prototype.num = function() {
    return t6(this._rgb)
  }, h.num = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(l, [null].concat(t, ["num"])))
  }, f.format.num = function(t) {
    if ("number" == t4(t) && t >= 0 && t <= 16777215) return [t >> 16, t >> 8 & 255, 255 & t, 1];
    throw Error("unknown num color: " + t)
  }, f.autodetect.push({
    p: 5,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if (1 === t.length && "number" === t8(t[0]) && t[0] >= 0 && t[0] <= 16777215) return "num"
    }
  });
  var rt = u.unpack,
    rr = u.type,
    re = Math.round;
  l.prototype.rgb = function(t) {
    return (void 0 === t && (t = !0), !1 === t) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(re)
  }, l.prototype.rgba = function(t) {
    return void 0 === t && (t = !0), this._rgb.slice(0, 4).map(function(r, e) {
      return e < 3 ? !1 === t ? r : re(r) : r
    })
  }, h.rgb = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(l, [null].concat(t, ["rgb"])))
  }, f.format.rgb = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    var e = rt(t, "rgba");
    return void 0 === e[3] && (e[3] = 1), e
  }, f.autodetect.push({
    p: 3,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === rr(t = rt(t, "rgba")) && (3 === t.length || 4 === t.length && "number" == rr(t[3]) && t[3] >= 0 && t[3] <= 1)) return "rgb"
    }
  });
  var rn = Math.log,
    ro = function(t) {
      var r, e, n, o = t / 100;
      return o < 66 ? (r = 255, e = o < 6 ? 0 : -155.25485562709179 - .44596950469579133 * (e = o - 2) + 104.49216199393888 * rn(e), n = o < 20 ? 0 : -254.76935184120902 + .8274096064007395 * (n = o - 10) + 115.67994401066147 * rn(n)) : (r = 351.97690566805693 + .114206453784165 * (r = o - 55) - 40.25366309332127 * rn(r), e = 325.4494125711974 + .07943456536662342 * (e = o - 50) - 28.0852963507957 * rn(e), n = 255), [r, e, n, 1]
    },
    ri = u.unpack,
    ra = Math.round,
    ru = function() {
      for (var t, r = [], e = arguments.length; e--;) r[e] = arguments[e];
      for (var n = ri(r, "rgb"), o = n[0], i = n[2], a = 1e3, u = 4e4; u - a > .4;) {
        var f = ro(t = (u + a) * .5);
        f[2] / f[0] >= i / o ? u = t : a = t
      }
      return ra(t)
    };
  l.prototype.temp = l.prototype.kelvin = l.prototype.temperature = function() {
    return ru(this._rgb)
  }, h.temp = h.kelvin = h.temperature = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(l, [null].concat(t, ["temp"])))
  }, f.format.temp = f.format.kelvin = f.format.temperature = ro;
  var rf = u.unpack,
    rc = Math.cbrt,
    rs = Math.pow,
    rp = Math.sign,
    rl = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = rf(t, "rgb"),
        n = e[0],
        o = e[1],
        i = e[2],
        a = [rh(n / 255), rh(o / 255), rh(i / 255)],
        u = a[0],
        f = a[1],
        c = a[2],
        s = rc(.4122214708 * u + .5363325363 * f + .0514459929 * c),
        p = rc(.2119034982 * u + .6806995451 * f + .1073969566 * c),
        l = rc(.0883024619 * u + .2817188376 * f + .6299787005 * c);
      return [.2104542553 * s + .793617785 * p - .0040720468 * l, 1.9779984951 * s - 2.428592205 * p + .4505937099 * l, .0259040371 * s + .7827717662 * p - .808675766 * l]
    };

  function rh(t) {
    var r = Math.abs(t);
    return r < .04045 ? t / 12.92 : (rp(t) || 1) * rs((r + .055) / 1.055, 2.4)
  }
  var rv = u.unpack,
    rd = Math.pow,
    rb = Math.sign,
    rg = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = (t = rv(t, "lab"))[0],
        n = t[1],
        o = t[2],
        i = rd(e + .3963377774 * n + .2158037573 * o, 3),
        a = rd(e - .1055613458 * n - .0638541728 * o, 3),
        u = rd(e - .0894841775 * n - 1.291485548 * o, 3);
      return [255 * ry(4.0767416621 * i - 3.3077115913 * a + .2309699292 * u), 255 * ry(-1.2684380046 * i + 2.6097574011 * a - .3413193965 * u), 255 * ry(-.0041960863 * i - .7034186147 * a + 1.707614701 * u), t.length > 3 ? t[3] : 1]
    };

  function ry(t) {
    var r = Math.abs(t);
    return r > .0031308 ? (rb(t) || 1) * (1.055 * rd(r, 1 / 2.4) - .055) : 12.92 * t
  }
  var rm = u.unpack,
    rw = u.type;
  l.prototype.oklab = function() {
    return rl(this._rgb)
  }, h.oklab = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(l, [null].concat(t, ["oklab"])))
  }, f.format.oklab = rg, f.autodetect.push({
    p: 3,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === rw(t = rm(t, "oklab")) && 3 === t.length) return "oklab"
    }
  });
  var r_ = u.unpack,
    rx = u.unpack,
    rk = u.unpack,
    rM = u.type,
    rj = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = r_(t, "rgb"),
        n = rl(e[0], e[1], e[2]);
      return t$(n[0], n[1], n[2])
    };
  l.prototype.oklch = function() {
    return rj(this._rgb)
  }, h.oklch = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(l, [null].concat(t, ["oklch"])))
  }, f.format.oklch = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    var e = tK((t = rx(t, "lch"))[0], t[1], t[2]),
      n = rg(e[0], e[1], e[2]);
    return [n[0], n[1], n[2], t.length > 3 ? t[3] : 1]
  }, f.autodetect.push({
    p: 3,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === rM(t = rk(t, "oklch")) && 3 === t.length) return "oklch"
    }
  });
  var rO = u.type;
  l.prototype.alpha = function(t, r) {
    if (void 0 === r && (r = !1), void 0 !== t && "number" === rO(t)) return r ? (this._rgb[3] = t, this) : new l([this._rgb[0], this._rgb[1], this._rgb[2], t], "rgb");
    return this._rgb[3]
  };
  l.prototype.clipped = function() {
    return this._rgb._clipped || !1
  };
  l.prototype.darken = function(t) {
    void 0 === t && (t = 1);
    var r = this.lab();
    return r[0] -= tO.Kn * t, new l(r, "lab").alpha(this.alpha(), !0)
  }, l.prototype.brighten = function(t) {
    return void 0 === t && (t = 1), this.darken(-t)
  }, l.prototype.darker = l.prototype.darken, l.prototype.brighter = l.prototype.brighten;
  l.prototype.get = function(t) {
    var r = t.split("."),
      e = r[0],
      n = r[1],
      o = this[e]();
    if (!n) return o;
    var i = e.indexOf(n) - ("ok" === e.substr(0, 2) ? 2 : 0);
    if (i > -1) return o[i];
    throw Error("unknown channel " + n + " in mode " + e)
  };
  var rE = u.type,
    rN = Math.pow;
  l.prototype.luminance = function(t) {
    if (void 0 !== t && "number" === rE(t)) {
      if (0 === t) return new l([0, 0, 0, this._rgb[3]], "rgb");
      if (1 === t) return new l([255, 255, 255, this._rgb[3]], "rgb");
      var r = this.luminance(),
        e = 20,
        n = function(r, o) {
          var i = r.interpolate(o, .5, "rgb"),
            a = i.luminance();
          return !(1e-7 > Math.abs(t - a)) && e-- ? a > t ? n(r, i) : n(i, o) : i
        },
        o = (r > t ? n(new l([0, 0, 0]), this) : n(this, new l([255, 255, 255]))).rgb();
      return new l(o.concat([this._rgb[3]]))
    }
    return rA.apply(void 0, this._rgb.slice(0, 3))
  };
  var rA = function(t, r, e) {
      return t = rS(t), r = rS(r), .2126 * t + .7152 * r + .0722 * (e = rS(e))
    },
    rS = function(t) {
      return (t /= 255) <= .03928 ? t / 12.92 : rN((t + .055) / 1.055, 2.4)
    },
    rq = {},
    rP = u.type,
    rI = function(t, r, e) {
      void 0 === e && (e = .5);
      for (var n = [], o = arguments.length - 3; o-- > 0;) n[o] = arguments[o + 3];
      var i = n[0] || "lrgb";
      if (!rq[i] && !n.length && (i = Object.keys(rq)[0]), !rq[i]) throw Error("interpolation mode " + i + " is not defined");
      return "object" !== rP(t) && (t = new l(t)), "object" !== rP(r) && (r = new l(r)), rq[i](t, r, e).alpha(t.alpha() + e * (r.alpha() - t.alpha()))
    };
  l.prototype.mix = l.prototype.interpolate = function(t, r) {
    void 0 === r && (r = .5);
    for (var e = [], n = arguments.length - 2; n-- > 0;) e[n] = arguments[n + 2];
    return rI.apply(void 0, [this, t, r].concat(e))
  };
  l.prototype.premultiply = function(t) {
    void 0 === t && (t = !1);
    var r = this._rgb,
      e = r[3];
    return t ? (this._rgb = [r[0] * e, r[1] * e, r[2] * e, e], this) : new l([r[0] * e, r[1] * e, r[2] * e, e], "rgb")
  };
  l.prototype.saturate = function(t) {
    void 0 === t && (t = 1);
    var r = this.lch();
    return r[1] += tO.Kn * t, r[1] < 0 && (r[1] = 0), new l(r, "lch").alpha(this.alpha(), !0)
  }, l.prototype.desaturate = function(t) {
    return void 0 === t && (t = 1), this.saturate(-t)
  };
  var rB = u.type;
  l.prototype.set = function(t, r, e) {
    void 0 === e && (e = !1);
    var n = t.split("."),
      o = n[0],
      i = n[1],
      a = this[o]();
    if (!i) return a;
    var u = o.indexOf(i) - ("ok" === o.substr(0, 2) ? 2 : 0);
    if (u > -1) {
      if ("string" == rB(r)) switch (r.charAt(0)) {
          case "+":
          case "-":
            a[u] += +r;
            break;
          case "*":
            a[u] *= +r.substr(1);
            break;
          case "/":
            a[u] /= +r.substr(1);
            break;
          default:
            a[u] = +r
        } else if ("number" === rB(r)) a[u] = r;
        else throw Error("unsupported value for Color.set");
      var f = new l(a, o);
      return e ? (this._rgb = f._rgb, this) : f
    }
    throw Error("unknown channel " + i + " in mode " + o)
  };
  rq.rgb = function(t, r, e) {
    var n = t._rgb,
      o = r._rgb;
    return new l(n[0] + e * (o[0] - n[0]), n[1] + e * (o[1] - n[1]), n[2] + e * (o[2] - n[2]), "rgb")
  };
  var rT = Math.sqrt,
    rL = Math.pow;
  rq.lrgb = function(t, r, e) {
    var n = t._rgb,
      o = n[0],
      i = n[1],
      a = n[2],
      u = r._rgb,
      f = u[0],
      c = u[1],
      s = u[2];
    return new l(rT(rL(o, 2) * (1 - e) + rL(f, 2) * e), rT(rL(i, 2) * (1 - e) + rL(c, 2) * e), rT(rL(a, 2) * (1 - e) + rL(s, 2) * e), "rgb")
  };
  rq.lab = function(t, r, e) {
    var n = t.lab(),
      o = r.lab();
    return new l(n[0] + e * (o[0] - n[0]), n[1] + e * (o[1] - n[1]), n[2] + e * (o[2] - n[2]), "lab")
  };
  var rz = function(t, r, e, n) {
      var o, i, a, u, f, c, s, p, h, v, d, b, g, y;
      return "hsl" === n ? (a = t.hsl(), u = r.hsl()) : "hsv" === n ? (a = t.hsv(), u = r.hsv()) : "hcg" === n ? (a = t.hcg(), u = r.hcg()) : "hsi" === n ? (a = t.hsi(), u = r.hsi()) : "lch" === n || "hcl" === n ? (n = "hcl", a = t.hcl(), u = r.hcl()) : "oklch" === n && (a = t.oklch().reverse(), u = r.oklch().reverse()), ("h" === n.substr(0, 1) || "oklch" === n) && (f = (o = a)[0], s = o[1], h = o[2], c = (i = u)[0], p = i[1], v = i[2]), isNaN(f) || isNaN(c) ? isNaN(f) ? isNaN(c) ? b = Number.NaN : (b = c, (1 == h || 0 == h) && "hsv" != n && (d = p)) : (b = f, (1 == v || 0 == v) && "hsv" != n && (d = s)) : (y = c > f && c - f > 180 ? c - (f + 360) : c < f && f - c > 180 ? c + 360 - f : c - f, b = f + e * y), void 0 === d && (d = s + e * (p - s)), g = h + e * (v - h), "oklch" === n ? new l([g, d, b], n) : new l([b, d, g], n)
    },
    rR = function(t, r, e) {
      return rz(t, r, e, "lch")
    };
  rq.lch = rR, rq.hcl = rR;
  rq.num = function(t, r, e) {
    var n = t.num();
    return new l(n + e * (r.num() - n), "num")
  };
  rq.hcg = function(t, r, e) {
    return rz(t, r, e, "hcg")
  };
  rq.hsi = function(t, r, e) {
    return rz(t, r, e, "hsi")
  };
  rq.hsl = function(t, r, e) {
    return rz(t, r, e, "hsl")
  };
  rq.hsv = function(t, r, e) {
    return rz(t, r, e, "hsv")
  };
  rq.oklab = function(t, r, e) {
    var n = t.oklab(),
      o = r.oklab();
    return new l(n[0] + e * (o[0] - n[0]), n[1] + e * (o[1] - n[1]), n[2] + e * (o[2] - n[2]), "oklab")
  };
  rq.oklch = function(t, r, e) {
    return rz(t, r, e, "oklch")
  };
  var rF = u.clip_rgb,
    rC = Math.pow,
    rD = Math.sqrt,
    rU = Math.PI,
    rZ = Math.cos,
    rG = Math.sin,
    r$ = Math.atan2,
    rJ = function(t, r) {
      for (var e = t.length, n = [0, 0, 0, 0], o = 0; o < t.length; o++) {
        var i = t[o],
          a = r[o] / e,
          u = i._rgb;
        n[0] += rC(u[0], 2) * a, n[1] += rC(u[1], 2) * a, n[2] += rC(u[2], 2) * a, n[3] += u[3] * a
      }
      return n[0] = rD(n[0]), n[1] = rD(n[1]), n[2] = rD(n[2]), n[3] > .9999999 && (n[3] = 1), new l(rF(n))
    },
    rY = u.type,
    rV = Math.pow,
    rW = function(t) {
      var r = "rgb",
        e = h("#ccc"),
        n = 0,
        o = [0, 1],
        i = [],
        a = [0, 0],
        u = !1,
        f = [],
        c = !1,
        s = 0,
        p = 1,
        l = !1,
        v = {},
        d = !0,
        b = 1,
        g = function(t) {
          if (t = t || ["#fff", "#000"], "string" === rY(t) && h.brewer && h.brewer[t.toLowerCase()] && (t = h.brewer[t.toLowerCase()]), "array" === rY(t)) {
            1 === t.length && (t = [t[0], t[0]]), t = t.slice(0);
            for (var r = 0; r < t.length; r++) t[r] = h(t[r]);
            i.length = 0;
            for (var e = 0; e < t.length; e++) i.push(e / (t.length - 1))
          }
          return x(), f = t
        },
        y = function(t) {
          if (null != u) {
            for (var r = u.length - 1, e = 0; e < r && t >= u[e];) e++;
            return e - 1
          }
          return 0
        },
        m = function(t) {
          return t
        },
        w = function(t) {
          return t
        },
        _ = function(t, n) {
          if (null == n && (n = !1), isNaN(t) || null === t) return e;
          if (n) c = t;
          else if (u && u.length > 2) {
            var o, c;
            c = y(t) / (u.length - 2)
          } else c = p !== s ? (t - s) / (p - s) : 1;
          c = w(c), !n && (c = m(c)), 1 !== b && (c = rV(c, b));
          var l = Math.floor(1e4 * (c = Math.min(1, Math.max(0, c = a[0] + c * (1 - a[0] - a[1])))));
          if (d && v[l]) o = v[l];
          else {
            if ("array" === rY(f))
              for (var g = 0; g < i.length; g++) {
                var _ = i[g];
                if (c <= _ || c >= _ && g === i.length - 1) {
                  o = f[g];
                  break
                }
                if (c > _ && c < i[g + 1]) {
                  c = (c - _) / (i[g + 1] - _), o = h.interpolate(f[g], f[g + 1], c, r);
                  break
                }
              } else "function" === rY(f) && (o = f(c));
            d && (v[l] = o)
          }
          return o
        },
        x = function() {
          return v = {}
        };
      g(t);
      var k = function(t) {
        var r = h(_(t));
        return c && r[c] ? r[c]() : r
      };
      return k.classes = function(t) {
        if (null != t) {
          if ("array" === rY(t)) u = t, o = [t[0], t[t.length - 1]];
          else {
            var r = h.analyze(o);
            u = 0 === t ? [r.min, r.max] : h.limits(r, "e", t)
          }
          return k
        }
        return u
      }, k.domain = function(t) {
        if (!arguments.length) return o;
        s = t[0], p = t[t.length - 1], i = [];
        var r = f.length;
        if (t.length === r && s !== p)
          for (var e = 0, n = Array.from(t); e < n.length; e += 1) {
            var a = n[e];
            i.push((a - s) / (p - s))
          } else {
            for (var u = 0; u < r; u++) i.push(u / (r - 1));
            if (t.length > 2) {
              var c = t.map(function(r, e) {
                  return e / (t.length - 1)
                }),
                l = t.map(function(t) {
                  return (t - s) / (p - s)
                });
              !l.every(function(t, r) {
                return c[r] === t
              }) && (w = function(t) {
                if (t <= 0 || t >= 1) return t;
                for (var r = 0; t >= l[r + 1];) r++;
                var e = (t - l[r]) / (l[r + 1] - l[r]);
                return c[r] + e * (c[r + 1] - c[r])
              })
            }
          }
        return o = [s, p], k
      }, k.mode = function(t) {
        return arguments.length ? (r = t, x(), k) : r
      }, k.range = function(t, r) {
        return g(t), k
      }, k.out = function(t) {
        return c = t, k
      }, k.spread = function(t) {
        return arguments.length ? (n = t, k) : n
      }, k.correctLightness = function(t) {
        return null == t && (t = !0), l = t, x(), m = l ? function(t) {
          for (var r = _(0, !0).lab()[0], e = _(1, !0).lab()[0], n = r > e, o = _(t, !0).lab()[0], i = r + (e - r) * t, a = o - i, u = 0, f = 1, c = 20; Math.abs(a) > .01 && c-- > 0;) n && (a *= -1), a < 0 ? (u = t, t += (f - t) * .5) : (f = t, t += (u - t) * .5), a = (o = _(t, !0).lab()[0]) - i;
          return t
        } : function(t) {
          return t
        }, k
      }, k.padding = function(t) {
        return null != t ? ("number" === rY(t) && (t = [t, t]), a = t, k) : a
      }, k.colors = function(r, e) {
        arguments.length < 2 && (e = "hex");
        var n = [];
        if (0 == arguments.length) n = f.slice(0);
        else if (1 === r) n = [k(.5)];
        else if (r > 1) {
          var i = o[0],
            a = o[1] - i;
          n = (function(t, r, e) {
            for (var n = [], o = t < r, i = e ? o ? r + 1 : r - 1 : r, a = t; o ? a < i : a > i; o ? a++ : a--) n.push(a);
            return n
          })(0, r, !1).map(function(t) {
            return k(i + t / (r - 1) * a)
          })
        } else {
          t = [];
          var c = [];
          if (u && u.length > 2)
            for (var s = 1, p = u.length, l = 1 <= p; l ? s < p : s > p; l ? s++ : s--) c.push((u[s - 1] + u[s]) * .5);
          else c = o;
          n = c.map(function(t) {
            return k(t)
          })
        }
        return h[e] && (n = n.map(function(t) {
          return t[e]()
        })), n
      }, k.cache = function(t) {
        return null != t ? (d = t, k) : d
      }, k.gamma = function(t) {
        return null != t ? (b = t, k) : b
      }, k.nodata = function(t) {
        return null != t ? (e = h(t), k) : e
      }, k
    },
    rX = function(t) {
      for (var r = [1, 1], e = 1; e < t; e++) {
        for (var n = [1], o = 1; o <= r.length; o++) n[o] = (r[o] || 0) + r[o - 1];
        r = n
      }
      return r
    },
    rK = function(t) {
      var r, e, n, o, i, a, u, f, c, s, p;
      if (2 === (t = t.map(function(t) {
          return new l(t)
        })).length) i = (r = t.map(function(t) {
        return t.lab()
      }))[0], a = r[1], o = function(t) {
        return new l([0, 1, 2].map(function(r) {
          return i[r] + t * (a[r] - i[r])
        }), "lab")
      };
      else if (3 === t.length) i = (e = t.map(function(t) {
        return t.lab()
      }))[0], a = e[1], u = e[2], o = function(t) {
        return new l([0, 1, 2].map(function(r) {
          return (1 - t) * (1 - t) * i[r] + 2 * (1 - t) * t * a[r] + t * t * u[r]
        }), "lab")
      };
      else if (4 === t.length) i = (n = t.map(function(t) {
        return t.lab()
      }))[0], a = n[1], u = n[2], f = n[3], o = function(t) {
        return new l([0, 1, 2].map(function(r) {
          return (1 - t) * (1 - t) * (1 - t) * i[r] + 3 * (1 - t) * (1 - t) * t * a[r] + 3 * (1 - t) * t * t * u[r] + t * t * t * f[r]
        }), "lab")
      };
      else if (t.length >= 5) c = t.map(function(t) {
        return t.lab()
      }), s = rX(p = t.length - 1), o = function(t) {
        var r = 1 - t;
        return new l([0, 1, 2].map(function(e) {
          return c.reduce(function(n, o, i) {
            return n + s[i] * Math.pow(r, p - i) * Math.pow(t, i) * o[e]
          }, 0)
        }), "lab")
      };
      else throw RangeError("No point in running bezier with only one color.");
      return o
    },
    rH = function(t, r, e) {
      if (!rH[e]) throw Error("unknown blend mode " + e);
      return rH[e](t, r)
    },
    rQ = function(t) {
      return function(r, e) {
        var n = h(e).rgb(),
          o = h(r).rgb();
        return h.rgb(t(n, o))
      }
    },
    r0 = function(t) {
      return function(r, e) {
        var n = [];
        return n[0] = t(r[0], e[0]), n[1] = t(r[1], e[1]), n[2] = t(r[2], e[2]), n
      }
    };
  rH.normal = rQ(r0(function(t) {
    return t
  })), rH.multiply = rQ(r0(function(t, r) {
    return t * r / 255
  })), rH.screen = rQ(r0(function(t, r) {
    return 255 * (1 - (1 - t / 255) * (1 - r / 255))
  })), rH.overlay = rQ(r0(function(t, r) {
    return r < 128 ? 2 * t * r / 255 : 255 * (1 - 2 * (1 - t / 255) * (1 - r / 255))
  })), rH.darken = rQ(r0(function(t, r) {
    return t > r ? r : t
  })), rH.lighten = rQ(r0(function(t, r) {
    return t > r ? t : r
  })), rH.dodge = rQ(r0(function(t, r) {
    return 255 === t ? 255 : (t = r / 255 * 255 / (1 - t / 255)) > 255 ? 255 : t
  })), rH.burn = rQ(r0(function(t, r) {
    return 255 * (1 - (1 - r / 255) / (t / 255))
  }));
  for (var r1 = u.type, r2 = u.clip_rgb, r5 = u.TWOPI, r3 = Math.pow, r7 = Math.sin, r9 = Math.cos, r4 = Math.floor, r8 = Math.random, r6 = Math.log, et = Math.pow, er = Math.floor, ee = Math.abs, en = function(t, r) {
      void 0 === r && (r = null);
      var e = {
        min: Number.MAX_VALUE,
        max: -1 * Number.MAX_VALUE,
        sum: 0,
        values: [],
        count: 0
      };
      return "object" === i(t) && (t = Object.values(t)), t.forEach(function(t) {
        r && "object" === i(t) && (t = t[r]), null != t && !isNaN(t) && (e.values.push(t), e.sum += t, t < e.min && (e.min = t), t > e.max && (e.max = t), e.count += 1)
      }), e.domain = [e.min, e.max], e.limits = function(t, r) {
        return eo(e, t, r)
      }, e
    }, eo = function(t, r, e) {
      void 0 === r && (r = "equal"), void 0 === e && (e = 7), "array" == i(t) && (t = en(t));
      var n = t.min,
        o = t.max,
        a = t.values.sort(function(t, r) {
          return t - r
        });
      if (1 === e) return [n, o];
      var u = [];
      if ("c" === r.substr(0, 1) && (u.push(n), u.push(o)), "e" === r.substr(0, 1)) {
        u.push(n);
        for (var f = 1; f < e; f++) u.push(n + f / e * (o - n));
        u.push(o)
      } else if ("l" === r.substr(0, 1)) {
        if (n <= 0) throw Error("Logarithmic scales are only possible for values > 0");
        var c = Math.LOG10E * r6(n),
          s = Math.LOG10E * r6(o);
        u.push(n);
        for (var p = 1; p < e; p++) u.push(et(10, c + p / e * (s - c)));
        u.push(o)
      } else if ("q" === r.substr(0, 1)) {
        u.push(n);
        for (var l = 1; l < e; l++) {
          var h = (a.length - 1) * l / e,
            v = er(h);
          if (v === h) u.push(a[v]);
          else {
            var d = h - v;
            u.push(a[v] * (1 - d) + a[v + 1] * d)
          }
        }
        u.push(o)
      } else if ("k" === r.substr(0, 1)) {
        var b, g = a.length,
          y = Array(g),
          m = Array(e),
          w = !0,
          _ = 0,
          x = null;
        (x = []).push(n);
        for (var k = 1; k < e; k++) x.push(n + k / e * (o - n));
        for (x.push(o); w;) {
          for (var M = 0; M < e; M++) m[M] = 0;
          for (var j = 0; j < g; j++) {
            for (var O = a[j], E = Number.MAX_VALUE, N = void 0, A = 0; A < e; A++) {
              var S = ee(x[A] - O);
              S < E && (E = S, N = A), m[N]++, y[j] = N
            }
          }
          for (var q = Array(e), P = 0; P < e; P++) q[P] = null;
          for (var I = 0; I < g; I++) null === q[b = y[I]] ? q[b] = a[I] : q[b] += a[I];
          for (var B = 0; B < e; B++) q[B] *= 1 / m[B];
          w = !1;
          for (var T = 0; T < e; T++)
            if (q[T] !== x[T]) {
              w = !0;
              break
            } x = q, ++_ > 200 && (w = !1)
        }
        for (var L = {}, z = 0; z < e; z++) L[z] = [];
        for (var R = 0; R < g; R++) L[b = y[R]].push(a[R]);
        for (var F = [], C = 0; C < e; C++) F.push(L[C][0]), F.push(L[C][L[C].length - 1]);
        F = F.sort(function(t, r) {
          return t - r
        }), u.push(F[0]);
        for (var D = 1; D < F.length; D += 2) {
          var U = F[D];
          !isNaN(U) && -1 === u.indexOf(U) && u.push(U)
        }
      }
      return u
    }, ei = en, ea = eo, eu = Math.sqrt, ef = Math.pow, ec = Math.min, es = Math.max, ep = Math.atan2, el = Math.abs, eh = Math.cos, ev = Math.sin, ed = Math.exp, eb = Math.PI, eg = {
      OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
      PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
      BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
      Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
      BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
      YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
      YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
      Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
      RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
      Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
      YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
      Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
      GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
      Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
      YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
      PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
      Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
      PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
      Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
      Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
      RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
      RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
      PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
      PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
      RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
      BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
      RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
      PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
      Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
      Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
      Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
      Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
      Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
      Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
      Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
      Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
    }, ey = 0, em = Object.keys(eg); ey < em.length; ey += 1) {
    var ew = em[ey];
    eg[ew.toLowerCase()] = eg[ew]
  }
  return h.average = function(t, r, e) {
    void 0 === r && (r = "lrgb"), void 0 === e && (e = null);
    var n = t.length;
    !e && (e = Array.from(Array(n)).map(function() {
      return 1
    }));
    var o = n / e.reduce(function(t, r) {
      return t + r
    });
    if (e.forEach(function(t, r) {
        e[r] *= o
      }), t = t.map(function(t) {
        return new l(t)
      }), "lrgb" === r) return rJ(t, e);
    for (var i = t.shift(), a = i.get(r), u = [], f = 0, c = 0, s = 0; s < a.length; s++)
      if (a[s] = (a[s] || 0) * e[0], u.push(isNaN(a[s]) ? 0 : e[0]), "h" === r.charAt(s) && !isNaN(a[s])) {
        var p = a[s] / 180 * rU;
        f += rZ(p) * e[0], c += rG(p) * e[0]
      } var h = i.alpha() * e[0];
    t.forEach(function(t, n) {
      var o = t.get(r);
      h += t.alpha() * e[n + 1];
      for (var i = 0; i < a.length; i++)
        if (!isNaN(o[i])) {
          if (u[i] += e[n + 1], "h" === r.charAt(i)) {
            var s = o[i] / 180 * rU;
            f += rZ(s) * e[n + 1], c += rG(s) * e[n + 1]
          } else a[i] += o[i] * e[n + 1]
        }
    });
    for (var v = 0; v < a.length; v++)
      if ("h" === r.charAt(v)) {
        for (var d = r$(c / u[v], f / u[v]) / rU * 180; d < 0;) d += 360;
        for (; d >= 360;) d -= 360;
        a[v] = d
      } else a[v] = a[v] / u[v];
    return h /= n, new l(a, r).alpha(h > .99999 ? 1 : h, !0)
  }, h.bezier = function(t) {
    var r = rK(t);
    return r.scale = function() {
      return rW(r)
    }, r
  }, h.blend = rH, h.cubehelix = function(t, r, e, n, o) {
    void 0 === t && (t = 300), void 0 === r && (r = -1.5), void 0 === e && (e = 1), void 0 === n && (n = 1), void 0 === o && (o = [0, 1]);
    var i, a = 0;
    "array" === r1(o) ? i = o[1] - o[0] : (i = 0, o = [o, o]);
    var u = function(u) {
      var f = r5 * ((t + 120) / 360 + r * u),
        c = r3(o[0] + i * u, n),
        s = (0 !== a ? e[0] + u * a : e) * c * (1 - c) / 2,
        p = r9(f),
        l = r7(f);
      return h(r2([255 * (c + s * (-.14861 * p + 1.78277 * l)), 255 * (c + s * (-.29227 * p - .90649 * l)), 255 * (c + 1.97294 * p * s), 1]))
    };
    return u.start = function(r) {
      return null == r ? t : (t = r, u)
    }, u.rotations = function(t) {
      return null == t ? r : (r = t, u)
    }, u.gamma = function(t) {
      return null == t ? n : (n = t, u)
    }, u.hue = function(t) {
      return null == t ? e : ("array" === r1(e = t) ? 0 == (a = e[1] - e[0]) && (e = e[1]) : a = 0, u)
    }, u.lightness = function(t) {
      return null == t ? o : ("array" === r1(t) ? (o = t, i = t[1] - t[0]) : (o = [t, t], i = 0), u)
    }, u.scale = function() {
      return h.scale(u)
    }, u.hue(e), u
  }, h.mix = h.interpolate = rI, h.random = function() {
    for (var t = "#", r = 0; r < 6; r++) t += "0123456789abcdef".charAt(r4(16 * r8()));
    return new l(t, "hex")
  }, h.scale = rW, h.analyze = ei, h.contrast = function(t, r) {
    t = new l(t), r = new l(r);
    var e = t.luminance(),
      n = r.luminance();
    return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
  }, h.deltaE = function(t, r, e, n, o) {
    void 0 === e && (e = 1), void 0 === n && (n = 1), void 0 === o && (o = 1);
    var i = function(t) {
        return 360 * t / (2 * eb)
      },
      a = function(t) {
        return 2 * eb * t / 360
      };
    t = new l(t), r = new l(r);
    var u = Array.from(t.lab()),
      f = u[0],
      c = u[1],
      s = u[2],
      p = Array.from(r.lab()),
      h = p[0],
      v = p[1],
      d = p[2],
      b = (f + h) / 2,
      g = (eu(ef(c, 2) + ef(s, 2)) + eu(ef(v, 2) + ef(d, 2))) / 2,
      y = .5 * (1 - eu(ef(g, 7) / (ef(g, 7) + ef(25, 7)))),
      m = c * (1 + y),
      w = v * (1 + y),
      _ = eu(ef(m, 2) + ef(s, 2)),
      x = eu(ef(w, 2) + ef(d, 2)),
      k = (_ + x) / 2,
      M = i(ep(s, m)),
      j = i(ep(d, w)),
      O = M >= 0 ? M : M + 360,
      E = j >= 0 ? j : j + 360,
      N = el(O - E) > 180 ? (O + E + 360) / 2 : (O + E) / 2,
      A = 1 - .17 * eh(a(N - 30)) + .24 * eh(a(2 * N)) + .32 * eh(a(3 * N + 6)) - .2 * eh(a(4 * N - 63)),
      S = E - O;
    S = 180 >= el(S) ? S : E <= O ? S + 360 : S - 360, S = 2 * eu(_ * x) * ev(a(S) / 2);
    var q = x - _,
      P = 1 + .015 * ef(b - 50, 2) / eu(20 + ef(b - 50, 2)),
      I = 1 + .045 * k,
      B = 1 + .015 * k * A,
      T = 30 * ed(-ef((N - 275) / 25, 2)),
      L = -(2 * eu(ef(k, 7) / (ef(k, 7) + ef(25, 7)))) * ev(2 * a(T));
    return es(0, ec(100, eu(ef((h - f) / (e * P), 2) + ef(q / (n * I), 2) + ef(S / (o * B), 2) + q / (n * I) * L * (S / (o * B)))))
  }, h.distance = function(t, r, e) {
    void 0 === e && (e = "lab"), t = new l(t), r = new l(r);
    var n = t.get(e),
      o = r.get(e),
      i = 0;
    for (var a in n) {
      var u = (n[a] || 0) - (o[a] || 0);
      i += u * u
    }
    return Math.sqrt(i)
  }, h.limits = ea, h.valid = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    try {
      return new(Function.prototype.bind.apply(l, [null].concat(t))), !0
    } catch (t) {
      return !1
    }
  }, h.scales = {
    cool: function() {
      return rW([h.hsl(180, 1, .9), h.hsl(250, .7, .4)])
    },
    hot: function() {
      return rW(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
    }
  }, h.colors = t3, h.brewer = eg, h
}, "object" == typeof r ? t.exports = n() : "function" == typeof define && define.amd ? define(n) : (e = "undefined" != typeof globalThis ? globalThis : e || self).chroma = n()