"use strict";
n(95811);
var r, i = n(147018),
  a = n(325008),
  o = n(259230),
  s = n(161581),
  u = n(566885),
  c = n(581031),
  l = n(859209),
  d = n(4340),
  f = n(603528),
  p = n(740362),
  h = n(441390),
  m = n(117901),
  g = n(175440),
  _ = n(700312).codeAt,
  b = n(233591),
  v = n(714050),
  y = n(865312),
  E = n(202934),
  S = n(320273),
  x = n(644659),
  w = x.set,
  C = x.getterFor("URL"),
  T = S.URLSearchParams,
  D = S.getState,
  M = s.URL,
  O = s.TypeError,
  A = s.parseInt,
  k = Math.floor,
  R = Math.pow,
  N = c("".charAt),
  I = c(/./.exec),
  L = c([].join),
  P = c(1..toString),
  B = c([].pop),
  F = c([].push),
  U = c("".replace),
  j = c([].shift),
  Y = c("".split),
  z = c("".slice),
  H = c("".toLowerCase),
  G = c([].unshift),
  V = "Invalid scheme",
  $ = "Invalid host",
  Z = "Invalid port",
  K = /[a-z]/i,
  W = /[\d+-.a-z]/i,
  q = /\d/,
  Q = /^0x/i,
  X = /^[0-7]+$/,
  J = /^\d+$/,
  ee = /^[\da-f]+$/i,
  et = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
  en = /[\0\t\n\r #/:<>?@[\\\]^|]/,
  er = /^[\u0000-\u0020]+/,
  ei = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
  ea = /[\t\n\r]/g,
  eo = function(e) {
    var t, n, r, i, a, o, s, u = Y(e, ".");
    if (u.length && "" === u[u.length - 1] && u.length--, (t = u.length) > 4) return e;
    for (r = 0, n = []; r < t; r++) {
      if ("" === (i = u[r])) return e;
      if (a = 10, i.length > 1 && "0" === N(i, 0) && (a = I(Q, i) ? 16 : 8, i = z(i, 8 === a ? 1 : 2)), "" === i) o = 0;
      else {
        if (!I(10 === a ? J : 8 === a ? X : ee, i)) return e;
        o = A(i, a)
      }
      F(n, o)
    }
    for (r = 0; r < t; r++)
      if (o = n[r], r === t - 1) {
        if (o >= R(256, 5 - t)) return null
      } else if (o > 255) return null;
    for (r = 0, s = B(n); r < n.length; r++) s += n[r] * R(256, 3 - r);
    return s
  },
  es = function(e) {
    var t, n, r, i, a, o, s, u = [0, 0, 0, 0, 0, 0, 0, 0],
      c = 0,
      l = null,
      d = 0,
      f = function() {
        return N(e, d)
      };
    if (":" === f()) {
      if (":" !== N(e, 1)) return;
      d += 2, l = ++c
    }
    for (; f();) {
      if (8 === c) return;
      if (":" === f()) {
        if (null !== l) return;
        d++, l = ++c;
        continue
      }
      for (t = n = 0; n < 4 && I(ee, f());) t = 16 * t + A(f(), 16), d++, n++;
      if ("." === f()) {
        if (0 === n) return;
        if (d -= n, c > 6) return;
        for (r = 0; f();) {
          if (i = null, r > 0) {
            if ("." !== f() || !(r < 4)) return;
            d++
          }
          if (!I(q, f())) return;
          for (; I(q, f());) {
            if (a = A(f(), 10), null === i) i = a;
            else {
              if (0 === i) return;
              i = 10 * i + a
            }
            if (i > 255) return;
            d++
          }
          u[c] = 256 * u[c] + i, (2 == ++r || 4 === r) && c++
        }
        if (4 !== r) return;
        break
      }
      if (":" === f()) {
        if (d++, !f()) return
      } else if (f()) return;
      u[c++] = t
    }
    if (null !== l)
      for (o = c - l, c = 7; 0 !== c && o > 0;) s = u[c], u[c--] = u[l + o - 1], u[l + --o] = s;
    else if (8 !== c) return;
    return u
  },
  eu = function(e) {
    for (var t = null, n = 1, r = null, i = 0, a = 0; a < 8; a++) 0 !== e[a] ? (i > n && (t = r, n = i), r = null, i = 0) : (null === r && (r = a), ++i);
    return i > n && (t = r, n = i), t
  },
  ec = function(e) {
    var t, n, r, i;
    if ("number" == typeof e) {
      for (n = 0, t = []; n < 4; n++) G(t, e % 256), e = k(e / 256);
      return L(t, ".")
    }
    if ("object" == typeof e) {
      for (n = 0, t = "", r = eu(e); n < 8; n++)(!i || 0 !== e[n]) && (i && (i = !1), r === n ? (t += n ? ":" : "::", i = !0) : (t += P(e[n], 16), n < 7 && (t += ":")));
      return "[" + t + "]"
    }
    return e
  },
  el = {},
  ed = h({}, el, {
    " ": 1,
    '"': 1,
    "<": 1,
    ">": 1,
    "`": 1
  }),
  ef = h({}, ed, {
    "#": 1,
    "?": 1,
    "{": 1,
    "}": 1
  }),
  ep = h({}, ef, {
    "/": 1,
    ":": 1,
    ";": 1,
    "=": 1,
    "@": 1,
    "[": 1,
    "\\": 1,
    "]": 1,
    "^": 1,
    "|": 1
  }),
  eh = function(e, t) {
    var n = _(e, 0);
    return n > 32 && n < 127 && !p(t, e) ? e : encodeURIComponent(e)
  },
  em = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  },
  eg = function(e, t) {
    var n;
    return 2 === e.length && I(K, N(e, 0)) && (":" === (n = N(e, 1)) || !t && "|" === n)
  },
  e_ = function(e) {
    var t;
    return e.length > 1 && eg(z(e, 0, 2)) && (2 === e.length || "/" === (t = N(e, 2)) || "\\" === t || "?" === t || "#" === t)
  },
  eb = {},
  ev = {},
  ey = {},
  eE = {},
  eS = {},
  ex = {},
  ew = {},
  eC = {},
  eT = {},
  eD = {},
  eM = {},
  eO = {},
  eA = {},
  ek = {},
  eR = {},
  eN = {},
  eI = {},
  eL = {},
  eP = {},
  eB = {},
  eF = {},
  eU = function(e, t, n) {
    var r, i, a, o = v(e);
    if (t) {
      if (i = this.parse(o)) throw O(i);
      this.searchParams = null
    } else {
      if (void 0 !== n && (r = new eU(n, !0)), i = this.parse(o, null, r)) throw O(i);
      (a = D(new T)).bindURL(this), this.searchParams = a
    }
  };
eU.prototype = {
  type: "URL",
  parse: function(e, t, n) {
    var i = t || eb,
      a = 0,
      o = "",
      s = !1,
      u = !1,
      c = !1;
    for (e = v(e), !t && (this.scheme = "", this.username = "", this.password = "", this.host = null, this.port = null, this.path = [], this.query = null, this.fragment = null, this.cannotBeABaseURL = !1, e = U(e, er, ""), e = U(e, ei, "$1")), l = m(e = U(e, ea, "")); a <= l.length;) {
      switch (d = l[a], i) {
        case eb:
          if (d && I(K, d)) o += H(d), i = ev;
          else {
            if (t) return V;
            i = ey;
            continue
          }
          break;
        case ev:
          if (d && (I(W, d) || "+" === d || "-" === d || "." === d)) o += H(d);
          else if (":" === d) {
            if (t && (this.isSpecial() !== p(em, o) || "file" === o && (this.includesCredentials() || null !== this.port) || "file" === this.scheme && !this.host)) return;
            if (this.scheme = o, t) {
              this.isSpecial() && em[this.scheme] === this.port && (this.port = null);
              return
            }
            o = "", "file" === this.scheme ? i = ek : this.isSpecial() && n && n.scheme === this.scheme ? i = eE : this.isSpecial() ? i = eC : "/" === l[a + 1] ? (i = eS, a++) : (this.cannotBeABaseURL = !0, F(this.path, ""), i = eP)
          } else {
            if (t) return V;
            o = "", i = ey, a = 0;
            continue
          }
          break;
        case ey:
          if (!n || n.cannotBeABaseURL && "#" !== d) return V;
          if (n.cannotBeABaseURL && "#" === d) {
            this.scheme = n.scheme, this.path = g(n.path), this.query = n.query, this.fragment = "", this.cannotBeABaseURL = !0, i = eF;
            break
          }
          i = "file" === n.scheme ? ek : ex;
          continue;
        case eE:
          if ("/" === d && "/" === l[a + 1]) i = eT, a++;
          else {
            i = ex;
            continue
          }
          break;
        case eS:
          if ("/" === d) {
            i = eD;
            break
          }
          i = eL;
          continue;
        case ex:
          if (this.scheme = n.scheme, d === r) this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, this.path = g(n.path), this.query = n.query;
          else if ("/" === d || "\\" === d && this.isSpecial()) i = ew;
          else if ("?" === d) this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, this.path = g(n.path), this.query = "", i = eB;
          else if ("#" === d) this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, this.path = g(n.path), this.query = n.query, this.fragment = "", i = eF;
          else {
            this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, this.path = g(n.path), this.path.length--, i = eL;
            continue
          }
          break;
        case ew:
          if (this.isSpecial() && ("/" === d || "\\" === d)) i = eT;
          else if ("/" === d) i = eD;
          else {
            this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, i = eL;
            continue
          }
          break;
        case eC:
          if (i = eT, "/" !== d || "/" !== N(o, a + 1)) continue;
          a++;
          break;
        case eT:
          if ("/" !== d && "\\" !== d) {
            i = eD;
            continue
          }
          break;
        case eD:
          if ("@" === d) {
            s && (o = "%40" + o), s = !0, f = m(o);
            for (var l, d, f, h, _, b, y = 0; y < f.length; y++) {
              var E = f[y];
              if (":" === E && !c) {
                c = !0;
                continue
              }
              var S = eh(E, ep);
              c ? this.password += S : this.username += S
            }
            o = ""
          } else if (d === r || "/" === d || "?" === d || "#" === d || "\\" === d && this.isSpecial()) {
            if (s && "" === o) return "Invalid authority";
            a -= m(o).length + 1, o = "", i = eM
          } else o += d;
          break;
        case eM:
        case eO:
          if (t && "file" === this.scheme) {
            i = eN;
            continue
          }
          if (":" !== d || u) {
            if (d === r || "/" === d || "?" === d || "#" === d || "\\" === d && this.isSpecial()) {
              if (this.isSpecial() && "" === o) return $;
              if (t && "" === o && (this.includesCredentials() || null !== this.port)) return;
              if (h = this.parseHost(o)) return h;
              if (o = "", i = eI, t) return;
              continue
            } else "[" === d ? u = !0 : "]" === d && (u = !1), o += d
          } else {
            if ("" === o) return $;
            if (h = this.parseHost(o)) return h;
            if (o = "", i = eA, t === eO) return
          }
          break;
        case eA:
          if (I(q, d)) o += d;
          else {
            if (!(d === r || "/" === d || "?" === d || "#" === d || "\\" === d && this.isSpecial()) && !t) return Z;
            if ("" !== o) {
              var x = A(o, 10);
              if (x > 65535) return Z;
              this.port = this.isSpecial() && x === em[this.scheme] ? null : x, o = ""
            }
            if (t) return;
            i = eI;
            continue
          }
          break;
        case ek:
          if (this.scheme = "file", "/" === d || "\\" === d) i = eR;
          else if (n && "file" === n.scheme) switch (d) {
            case r:
              this.host = n.host, this.path = g(n.path), this.query = n.query;
              break;
            case "?":
              this.host = n.host, this.path = g(n.path), this.query = "", i = eB;
              break;
            case "#":
              this.host = n.host, this.path = g(n.path), this.query = n.query, this.fragment = "", i = eF;
              break;
            default:
              !e_(L(g(l, a), "")) && (this.host = n.host, this.path = g(n.path), this.shortenPath()), i = eL;
              continue
          } else {
            i = eL;
            continue
          }
          break;
        case eR:
          if ("/" === d || "\\" === d) {
            i = eN;
            break
          }
          n && "file" === n.scheme && !e_(L(g(l, a), "")) && (eg(n.path[0], !0) ? F(this.path, n.path[0]) : this.host = n.host), i = eL;
          continue;
        case eN:
          if (d === r || "/" === d || "\\" === d || "?" === d || "#" === d) {
            if (!t && eg(o)) i = eL;
            else if ("" === o) {
              if (this.host = "", t) return;
              i = eI
            } else {
              if (h = this.parseHost(o)) return h;
              if ("localhost" === this.host && (this.host = ""), t) return;
              o = "", i = eI
            }
            continue
          }
          o += d;
          break;
        case eI:
          if (this.isSpecial()) {
            if (i = eL, "/" !== d && "\\" !== d) continue
          } else if (t || "?" !== d) {
            if (t || "#" !== d) {
              if (d !== r && (i = eL, "/" !== d)) continue
            } else this.fragment = "", i = eF
          } else this.query = "", i = eB;
          break;
        case eL:
          if (d === r || "/" === d || "\\" === d && this.isSpecial() || !t && ("?" === d || "#" === d)) {
            ;
            if (".." === (_ = H(_ = o)) || "%2e." === _ || ".%2e" === _ || "%2e%2e" === _) this.shortenPath(), "/" !== d && !("\\" === d && this.isSpecial()) && F(this.path, "");
            else {
              ;
              if ("." === (b = o) || "%2e" === H(b)) "/" !== d && !("\\" === d && this.isSpecial()) && F(this.path, "");
              else "file" === this.scheme && !this.path.length && eg(o) && (this.host && (this.host = ""), o = N(o, 0) + ":"), F(this.path, o)
            }
            if (o = "", "file" === this.scheme && (d === r || "?" === d || "#" === d))
              for (; this.path.length > 1 && "" === this.path[0];) j(this.path);
            "?" === d ? (this.query = "", i = eB) : "#" === d && (this.fragment = "", i = eF)
          } else o += eh(d, ef);
          break;
        case eP:
          "?" === d ? (this.query = "", i = eB) : "#" === d ? (this.fragment = "", i = eF) : d !== r && (this.path[0] += eh(d, el));
          break;
        case eB:
          t || "#" !== d ? d !== r && ("'" === d && this.isSpecial() ? this.query += "%27" : "#" === d ? this.query += "%23" : this.query += eh(d, el)) : (this.fragment = "", i = eF);
          break;
        case eF:
          d !== r && (this.fragment += eh(d, ed))
      }
      a++
    }
  },
  parseHost: function(e) {
    var t, n, r;
    if ("[" === N(e, 0)) {
      if ("]" !== N(e, e.length - 1) || !(t = es(z(e, 1, -1)))) return $;
      this.host = t
    } else if (this.isSpecial()) {
      if (I(et, e = b(e)) || null === (t = eo(e))) return $;
      this.host = t
    } else {
      if (I(en, e)) return $;
      for (r = 0, t = "", n = m(e); r < n.length; r++) t += eh(n[r], el);
      this.host = t
    }
  },
  cannotHaveUsernamePasswordPort: function() {
    return !this.host || this.cannotBeABaseURL || "file" === this.scheme
  },
  includesCredentials: function() {
    return "" !== this.username || "" !== this.password
  },
  isSpecial: function() {
    return p(em, this.scheme)
  },
  shortenPath: function() {
    var e = this.path,
      t = e.length;
    t && ("file" !== this.scheme || 1 !== t || !eg(e[0], !0)) && e.length--
  },
  serialize: function() {
    var e = this.scheme,
      t = this.username,
      n = this.password,
      r = this.host,
      i = this.port,
      a = this.path,
      o = this.query,
      s = this.fragment,
      u = e + ":";
    return null !== r ? (u += "//", this.includesCredentials() && (u += t + (n ? ":" + n : "") + "@"), u += ec(r), null !== i && (u += ":" + i)) : "file" === e && (u += "//"), u += this.cannotBeABaseURL ? a[0] : a.length ? "/" + L(a, "/") : "", null !== o && (u += "?" + o), null !== s && (u += "#" + s), u
  },
  setHref: function(e) {
    var t = this.parse(e);
    if (t) throw O(t);
    this.searchParams.update()
  },
  getOrigin: function() {
    var e = this.scheme,
      t = this.port;
    if ("blob" === e) try {
      return new ej(e.path[0]).origin
    } catch (e) {
      return "null"
    }
    return "file" !== e && this.isSpecial() ? e + "://" + ec(this.host) + (null !== t ? ":" + t : "") : "null"
  },
  getProtocol: function() {
    return this.scheme + ":"
  },
  setProtocol: function(e) {
    this.parse(v(e) + ":", eb)
  },
  getUsername: function() {
    return this.username
  },
  setUsername: function(e) {
    var t = m(v(e));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.username = "";
      for (var n = 0; n < t.length; n++) this.username += eh(t[n], ep)
    }
  },
  getPassword: function() {
    return this.password
  },
  setPassword: function(e) {
    var t = m(v(e));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.password = "";
      for (var n = 0; n < t.length; n++) this.password += eh(t[n], ep)
    }
  },
  getHost: function() {
    var e = this.host,
      t = this.port;
    return null === e ? "" : null === t ? ec(e) : ec(e) + ":" + t
  },
  setHost: function(e) {
    !this.cannotBeABaseURL && this.parse(e, eM)
  },
  getHostname: function() {
    var e = this.host;
    return null === e ? "" : ec(e)
  },
  setHostname: function(e) {
    !this.cannotBeABaseURL && this.parse(e, eO)
  },
  getPort: function() {
    var e = this.port;
    return null === e ? "" : v(e)
  },
  setPort: function(e) {
    !this.cannotHaveUsernamePasswordPort() && ("" === (e = v(e)) ? this.port = null : this.parse(e, eA))
  },
  getPathname: function() {
    var e = this.path;
    return this.cannotBeABaseURL ? e[0] : e.length ? "/" + L(e, "/") : ""
  },
  setPathname: function(e) {
    !this.cannotBeABaseURL && (this.path = [], this.parse(e, eI))
  },
  getSearch: function() {
    var e = this.query;
    return e ? "?" + e : ""
  },
  setSearch: function(e) {
    "" === (e = v(e)) ? this.query = null: ("?" === N(e, 0) && (e = z(e, 1)), this.query = "", this.parse(e, eB)), this.searchParams.update()
  },
  getSearchParams: function() {
    return this.searchParams.facade
  },
  getHash: function() {
    var e = this.fragment;
    return e ? "#" + e : ""
  },
  setHash: function(e) {
    if ("" === (e = v(e))) {
      this.fragment = null;
      return
    }
    "#" === N(e, 0) && (e = z(e, 1)), this.fragment = "", this.parse(e, eF)
  },
  update: function() {
    this.query = this.searchParams.serialize() || null
  }
};
var ej = function(e) {
    var t = f(this, eY),
      n = E(arguments.length, 1) > 1 ? arguments[1] : void 0,
      r = w(t, new eU(e, !1, n));
    !a && (t.href = r.serialize(), t.origin = r.getOrigin(), t.protocol = r.getProtocol(), t.username = r.getUsername(), t.password = r.getPassword(), t.host = r.getHost(), t.hostname = r.getHostname(), t.port = r.getPort(), t.pathname = r.getPathname(), t.search = r.getSearch(), t.searchParams = r.getSearchParams(), t.hash = r.getHash())
  },
  eY = ej.prototype,
  ez = function(e, t) {
    return {
      get: function() {
        return C(this)[e]()
      },
      set: t && function(e) {
        return C(this)[t](e)
      },
      configurable: !0,
      enumerable: !0
    }
  };
if (a && (d(eY, "href", ez("serialize", "setHref")), d(eY, "origin", ez("getOrigin")), d(eY, "protocol", ez("getProtocol", "setProtocol")), d(eY, "username", ez("getUsername", "setUsername")), d(eY, "password", ez("getPassword", "setPassword")), d(eY, "host", ez("getHost", "setHost")), d(eY, "hostname", ez("getHostname", "setHostname")), d(eY, "port", ez("getPort", "setPort")), d(eY, "pathname", ez("getPathname", "setPathname")), d(eY, "search", ez("getSearch", "setSearch")), d(eY, "searchParams", ez("getSearchParams")), d(eY, "hash", ez("getHash", "setHash"))), l(eY, "toJSON", function() {
    return C(this).serialize()
  }, {
    enumerable: !0
  }), l(eY, "toString", function() {
    return C(this).serialize()
  }, {
    enumerable: !0
  }), M) {
  var eH = M.createObjectURL,
    eG = M.revokeObjectURL;
  eH && l(ej, "createObjectURL", u(eH, M)), eG && l(ej, "revokeObjectURL", u(eG, M))
}
y(ej, "URL"), i({
  global: !0,
  constructor: !0,
  forced: !o,
  sham: !a
}, {
  URL: ej
})