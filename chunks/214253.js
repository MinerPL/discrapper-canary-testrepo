"use strict";
n("742372");
var r, a = n("67867"),
  o = n("447631"),
  i = n("502754"),
  l = n("668530"),
  u = n("476508"),
  s = n("96403"),
  c = n("691244"),
  d = n("942282"),
  f = n("13780"),
  p = n("141603"),
  h = n("592843"),
  m = n("168013"),
  y = n("960081"),
  v = n("486095").codeAt,
  g = n("520660"),
  b = n("342545"),
  _ = n("414847"),
  k = n("274745"),
  C = n("853708"),
  w = n("29461"),
  S = w.set,
  N = w.getterFor("URL"),
  x = C.URLSearchParams,
  P = C.getState,
  A = l.URL,
  R = l.TypeError,
  F = l.parseInt,
  O = Math.floor,
  E = Math.pow,
  I = s("".charAt),
  M = s(/./.exec),
  T = s([].join),
  B = s(1..toString),
  D = s([].pop),
  L = s([].push),
  V = s("".replace),
  j = s([].shift),
  U = s("".split),
  q = s("".slice),
  K = s("".toLowerCase),
  H = s([].unshift),
  z = "Invalid scheme",
  W = "Invalid host",
  G = "Invalid port",
  $ = /[a-z]/i,
  Y = /[\d+-.a-z]/i,
  Q = /\d/,
  Z = /^0x/i,
  J = /^[0-7]+$/,
  X = /^\d+$/,
  ee = /^[\da-f]+$/i,
  et = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
  en = /[\0\t\n\r #/:<>?@[\\\]^|]/,
  er = /^[\u0000-\u0020]+/,
  ea = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
  eo = /[\t\n\r]/g,
  ei = function(e) {
    var t, n, r, a, o, i, l, u = U(e, ".");
    if (u.length && "" === u[u.length - 1] && u.length--, (t = u.length) > 4) return e;
    for (r = 0, n = []; r < t; r++) {
      if ("" === (a = u[r])) return e;
      if (o = 10, a.length > 1 && "0" === I(a, 0) && (o = M(Z, a) ? 16 : 8, a = q(a, 8 === o ? 1 : 2)), "" === a) i = 0;
      else {
        if (!M(10 === o ? X : 8 === o ? J : ee, a)) return e;
        i = F(a, o)
      }
      L(n, i)
    }
    for (r = 0; r < t; r++)
      if (i = n[r], r === t - 1) {
        if (i >= E(256, 5 - t)) return null
      } else if (i > 255) return null;
    for (r = 0, l = D(n); r < n.length; r++) l += n[r] * E(256, 3 - r);
    return l
  },
  el = function(e) {
    var t, n, r, a, o, i, l, u = [0, 0, 0, 0, 0, 0, 0, 0],
      s = 0,
      c = null,
      d = 0,
      f = function() {
        return I(e, d)
      };
    if (":" === f()) {
      if (":" !== I(e, 1)) return;
      d += 2, c = ++s
    }
    for (; f();) {
      if (8 === s) return;
      if (":" === f()) {
        if (null !== c) return;
        d++, c = ++s;
        continue
      }
      for (t = n = 0; n < 4 && M(ee, f());) t = 16 * t + F(f(), 16), d++, n++;
      if ("." === f()) {
        if (0 === n) return;
        if (d -= n, s > 6) return;
        for (r = 0; f();) {
          if (a = null, r > 0) {
            if ("." !== f() || !(r < 4)) return;
            d++
          }
          if (!M(Q, f())) return;
          for (; M(Q, f());) {
            if (o = F(f(), 10), null === a) a = o;
            else {
              if (0 === a) return;
              a = 10 * a + o
            }
            if (a > 255) return;
            d++
          }
          u[s] = 256 * u[s] + a, (2 == ++r || 4 === r) && s++
        }
        if (4 !== r) return;
        break
      }
      if (":" === f()) {
        if (d++, !f()) return
      } else if (f()) return;
      u[s++] = t
    }
    if (null !== c)
      for (i = s - c, s = 7; 0 !== s && i > 0;) l = u[s], u[s--] = u[c + i - 1], u[c + --i] = l;
    else if (8 !== s) return;
    return u
  },
  eu = function(e) {
    for (var t = null, n = 1, r = null, a = 0, o = 0; o < 8; o++) 0 !== e[o] ? (a > n && (t = r, n = a), r = null, a = 0) : (null === r && (r = o), ++a);
    return a > n && (t = r, n = a), t
  },
  es = function(e) {
    var t, n, r, a;
    if ("number" == typeof e) {
      for (n = 0, t = []; n < 4; n++) H(t, e % 256), e = O(e / 256);
      return T(t, ".")
    }
    if ("object" == typeof e) {
      for (n = 0, t = "", r = eu(e); n < 8; n++)(!a || 0 !== e[n]) && (a && (a = !1), r === n ? (t += n ? ":" : "::", a = !0) : (t += B(e[n], 16), n < 7 && (t += ":")));
      return "[" + t + "]"
    }
    return e
  },
  ec = {},
  ed = h({}, ec, {
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
    var n = v(e, 0);
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
  ey = function(e, t) {
    var n;
    return 2 === e.length && M($, I(e, 0)) && (":" === (n = I(e, 1)) || !t && "|" === n)
  },
  ev = function(e) {
    var t;
    return e.length > 1 && ey(q(e, 0, 2)) && (2 === e.length || "/" === (t = I(e, 2)) || "\\" === t || "?" === t || "#" === t)
  },
  eg = {},
  eb = {},
  e_ = {},
  ek = {},
  eC = {},
  ew = {},
  eS = {},
  eN = {},
  ex = {},
  eP = {},
  eA = {},
  eR = {},
  eF = {},
  eO = {},
  eE = {},
  eI = {},
  eM = {},
  eT = {},
  eB = {},
  eD = {},
  eL = {},
  eV = function(e, t, n) {
    var r, a, o, i = b(e);
    if (t) {
      if (a = this.parse(i)) throw new R(a);
      this.searchParams = null
    } else {
      if (void 0 !== n && (r = new eV(n, !0)), a = this.parse(i, null, r)) throw new R(a);
      (o = P(new x)).bindURL(this), this.searchParams = o
    }
  };
eV.prototype = {
  type: "URL",
  parse: function(e, t, n) {
    var a = t || eg,
      o = 0,
      i = "",
      l = !1,
      u = !1,
      s = !1;
    for (e = b(e), !t && (this.scheme = "", this.username = "", this.password = "", this.host = null, this.port = null, this.path = [], this.query = null, this.fragment = null, this.cannotBeABaseURL = !1, e = V(e, er, ""), e = V(e, ea, "$1")), c = m(e = V(e, eo, "")); o <= c.length;) {
      switch (d = c[o], a) {
        case eg:
          if (d && M($, d)) i += K(d), a = eb;
          else {
            if (t) return z;
            a = e_;
            continue
          }
          break;
        case eb:
          if (d && (M(Y, d) || "+" === d || "-" === d || "." === d)) i += K(d);
          else if (":" === d) {
            if (t && (this.isSpecial() !== p(em, i) || "file" === i && (this.includesCredentials() || null !== this.port) || "file" === this.scheme && !this.host)) return;
            if (this.scheme = i, t) {
              this.isSpecial() && em[this.scheme] === this.port && (this.port = null);
              return
            }
            i = "", "file" === this.scheme ? a = eO : this.isSpecial() && n && n.scheme === this.scheme ? a = ek : this.isSpecial() ? a = eN : "/" === c[o + 1] ? (a = eC, o++) : (this.cannotBeABaseURL = !0, L(this.path, ""), a = eB)
          } else {
            if (t) return z;
            i = "", a = e_, o = 0;
            continue
          }
          break;
        case e_:
          if (!n || n.cannotBeABaseURL && "#" !== d) return z;
          if (n.cannotBeABaseURL && "#" === d) {
            this.scheme = n.scheme, this.path = y(n.path), this.query = n.query, this.fragment = "", this.cannotBeABaseURL = !0, a = eL;
            break
          }
          a = "file" === n.scheme ? eO : ew;
          continue;
        case ek:
          if ("/" === d && "/" === c[o + 1]) a = ex, o++;
          else {
            a = ew;
            continue
          }
          break;
        case eC:
          if ("/" === d) {
            a = eP;
            break
          }
          a = eT;
          continue;
        case ew:
          if (this.scheme = n.scheme, d === r) this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, this.path = y(n.path), this.query = n.query;
          else if ("/" === d || "\\" === d && this.isSpecial()) a = eS;
          else if ("?" === d) this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, this.path = y(n.path), this.query = "", a = eD;
          else if ("#" === d) this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, this.path = y(n.path), this.query = n.query, this.fragment = "", a = eL;
          else {
            this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, this.path = y(n.path), this.path.length--, a = eT;
            continue
          }
          break;
        case eS:
          if (this.isSpecial() && ("/" === d || "\\" === d)) a = ex;
          else if ("/" === d) a = eP;
          else {
            this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, a = eT;
            continue
          }
          break;
        case eN:
          if (a = ex, "/" !== d || "/" !== I(i, o + 1)) continue;
          o++;
          break;
        case ex:
          if ("/" !== d && "\\" !== d) {
            a = eP;
            continue
          }
          break;
        case eP:
          if ("@" === d) {
            l && (i = "%40" + i), l = !0, f = m(i);
            for (var c, d, f, h, v, g, _ = 0; _ < f.length; _++) {
              var k = f[_];
              if (":" === k && !s) {
                s = !0;
                continue
              }
              var C = eh(k, ep);
              s ? this.password += C : this.username += C
            }
            i = ""
          } else if (d === r || "/" === d || "?" === d || "#" === d || "\\" === d && this.isSpecial()) {
            if (l && "" === i) return "Invalid authority";
            o -= m(i).length + 1, i = "", a = eA
          } else i += d;
          break;
        case eA:
        case eR:
          if (t && "file" === this.scheme) {
            a = eI;
            continue
          }
          if (":" !== d || u) {
            if (d === r || "/" === d || "?" === d || "#" === d || "\\" === d && this.isSpecial()) {
              if (this.isSpecial() && "" === i) return W;
              if (t && "" === i && (this.includesCredentials() || null !== this.port)) return;
              if (h = this.parseHost(i)) return h;
              if (i = "", a = eM, t) return;
              continue
            } else "[" === d ? u = !0 : "]" === d && (u = !1), i += d
          } else {
            if ("" === i) return W;
            if (h = this.parseHost(i)) return h;
            if (i = "", a = eF, t === eR) return
          }
          break;
        case eF:
          if (M(Q, d)) i += d;
          else {
            if (!(d === r || "/" === d || "?" === d || "#" === d || "\\" === d && this.isSpecial()) && !t) return G;
            if ("" !== i) {
              var w = F(i, 10);
              if (w > 65535) return G;
              this.port = this.isSpecial() && w === em[this.scheme] ? null : w, i = ""
            }
            if (t) return;
            a = eM;
            continue
          }
          break;
        case eO:
          if (this.scheme = "file", "/" === d || "\\" === d) a = eE;
          else if (n && "file" === n.scheme) switch (d) {
            case r:
              this.host = n.host, this.path = y(n.path), this.query = n.query;
              break;
            case "?":
              this.host = n.host, this.path = y(n.path), this.query = "", a = eD;
              break;
            case "#":
              this.host = n.host, this.path = y(n.path), this.query = n.query, this.fragment = "", a = eL;
              break;
            default:
              !ev(T(y(c, o), "")) && (this.host = n.host, this.path = y(n.path), this.shortenPath()), a = eT;
              continue
          } else {
            a = eT;
            continue
          }
          break;
        case eE:
          if ("/" === d || "\\" === d) {
            a = eI;
            break
          }
          n && "file" === n.scheme && !ev(T(y(c, o), "")) && (ey(n.path[0], !0) ? L(this.path, n.path[0]) : this.host = n.host), a = eT;
          continue;
        case eI:
          if (d === r || "/" === d || "\\" === d || "?" === d || "#" === d) {
            if (!t && ey(i)) a = eT;
            else if ("" === i) {
              if (this.host = "", t) return;
              a = eM
            } else {
              if (h = this.parseHost(i)) return h;
              if ("localhost" === this.host && (this.host = ""), t) return;
              i = "", a = eM
            }
            continue
          }
          i += d;
          break;
        case eM:
          if (this.isSpecial()) {
            if (a = eT, "/" !== d && "\\" !== d) continue
          } else if (t || "?" !== d) {
            if (t || "#" !== d) {
              if (d !== r && (a = eT, "/" !== d)) continue
            } else this.fragment = "", a = eL
          } else this.query = "", a = eD;
          break;
        case eT:
          if (d === r || "/" === d || "\\" === d && this.isSpecial() || !t && ("?" === d || "#" === d)) {
            ;
            if (".." === (v = K(v = i)) || "%2e." === v || ".%2e" === v || "%2e%2e" === v) this.shortenPath(), "/" !== d && !("\\" === d && this.isSpecial()) && L(this.path, "");
            else {
              ;
              if ("." === (g = i) || "%2e" === K(g)) "/" !== d && !("\\" === d && this.isSpecial()) && L(this.path, "");
              else "file" === this.scheme && !this.path.length && ey(i) && (this.host && (this.host = ""), i = I(i, 0) + ":"), L(this.path, i)
            }
            if (i = "", "file" === this.scheme && (d === r || "?" === d || "#" === d))
              for (; this.path.length > 1 && "" === this.path[0];) j(this.path);
            "?" === d ? (this.query = "", a = eD) : "#" === d && (this.fragment = "", a = eL)
          } else i += eh(d, ef);
          break;
        case eB:
          "?" === d ? (this.query = "", a = eD) : "#" === d ? (this.fragment = "", a = eL) : d !== r && (this.path[0] += eh(d, ec));
          break;
        case eD:
          t || "#" !== d ? d !== r && ("'" === d && this.isSpecial() ? this.query += "%27" : "#" === d ? this.query += "%23" : this.query += eh(d, ec)) : (this.fragment = "", a = eL);
          break;
        case eL:
          d !== r && (this.fragment += eh(d, ed))
      }
      o++
    }
  },
  parseHost: function(e) {
    var t, n, r;
    if ("[" === I(e, 0)) {
      if ("]" !== I(e, e.length - 1) || !(t = el(q(e, 1, -1)))) return W;
      this.host = t
    } else if (this.isSpecial()) {
      if (M(et, e = g(e)) || null === (t = ei(e))) return W;
      this.host = t
    } else {
      if (M(en, e)) return W;
      for (r = 0, t = "", n = m(e); r < n.length; r++) t += eh(n[r], ec);
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
    t && ("file" !== this.scheme || 1 !== t || !ey(e[0], !0)) && e.length--
  },
  serialize: function() {
    var e = this.scheme,
      t = this.username,
      n = this.password,
      r = this.host,
      a = this.port,
      o = this.path,
      i = this.query,
      l = this.fragment,
      u = e + ":";
    return null !== r ? (u += "//", this.includesCredentials() && (u += t + (n ? ":" + n : "") + "@"), u += es(r), null !== a && (u += ":" + a)) : "file" === e && (u += "//"), u += this.cannotBeABaseURL ? o[0] : o.length ? "/" + T(o, "/") : "", null !== i && (u += "?" + i), null !== l && (u += "#" + l), u
  },
  setHref: function(e) {
    var t = this.parse(e);
    if (t) throw new R(t);
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
    return "file" !== e && this.isSpecial() ? e + "://" + es(this.host) + (null !== t ? ":" + t : "") : "null"
  },
  getProtocol: function() {
    return this.scheme + ":"
  },
  setProtocol: function(e) {
    this.parse(b(e) + ":", eg)
  },
  getUsername: function() {
    return this.username
  },
  setUsername: function(e) {
    var t = m(b(e));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.username = "";
      for (var n = 0; n < t.length; n++) this.username += eh(t[n], ep)
    }
  },
  getPassword: function() {
    return this.password
  },
  setPassword: function(e) {
    var t = m(b(e));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.password = "";
      for (var n = 0; n < t.length; n++) this.password += eh(t[n], ep)
    }
  },
  getHost: function() {
    var e = this.host,
      t = this.port;
    return null === e ? "" : null === t ? es(e) : es(e) + ":" + t
  },
  setHost: function(e) {
    !this.cannotBeABaseURL && this.parse(e, eA)
  },
  getHostname: function() {
    var e = this.host;
    return null === e ? "" : es(e)
  },
  setHostname: function(e) {
    !this.cannotBeABaseURL && this.parse(e, eR)
  },
  getPort: function() {
    var e = this.port;
    return null === e ? "" : b(e)
  },
  setPort: function(e) {
    !this.cannotHaveUsernamePasswordPort() && ("" === (e = b(e)) ? this.port = null : this.parse(e, eF))
  },
  getPathname: function() {
    var e = this.path;
    return this.cannotBeABaseURL ? e[0] : e.length ? "/" + T(e, "/") : ""
  },
  setPathname: function(e) {
    !this.cannotBeABaseURL && (this.path = [], this.parse(e, eM))
  },
  getSearch: function() {
    var e = this.query;
    return e ? "?" + e : ""
  },
  setSearch: function(e) {
    "" === (e = b(e)) ? this.query = null: ("?" === I(e, 0) && (e = q(e, 1)), this.query = "", this.parse(e, eD)), this.searchParams.update()
  },
  getSearchParams: function() {
    return this.searchParams.facade
  },
  getHash: function() {
    var e = this.fragment;
    return e ? "#" + e : ""
  },
  setHash: function(e) {
    if ("" === (e = b(e))) {
      this.fragment = null;
      return
    }
    "#" === I(e, 0) && (e = q(e, 1)), this.fragment = "", this.parse(e, eL)
  },
  update: function() {
    this.query = this.searchParams.serialize() || null
  }
};
var ej = function(e) {
    var t = f(this, eU),
      n = k(arguments.length, 1) > 1 ? arguments[1] : void 0,
      r = S(t, new eV(e, !1, n));
    !o && (t.href = r.serialize(), t.origin = r.getOrigin(), t.protocol = r.getProtocol(), t.username = r.getUsername(), t.password = r.getPassword(), t.host = r.getHost(), t.hostname = r.getHostname(), t.port = r.getPort(), t.pathname = r.getPathname(), t.search = r.getSearch(), t.searchParams = r.getSearchParams(), t.hash = r.getHash())
  },
  eU = ej.prototype,
  eq = function(e, t) {
    return {
      get: function() {
        return N(this)[e]()
      },
      set: t && function(e) {
        return N(this)[t](e)
      },
      configurable: !0,
      enumerable: !0
    }
  };
if (o && (d(eU, "href", eq("serialize", "setHref")), d(eU, "origin", eq("getOrigin")), d(eU, "protocol", eq("getProtocol", "setProtocol")), d(eU, "username", eq("getUsername", "setUsername")), d(eU, "password", eq("getPassword", "setPassword")), d(eU, "host", eq("getHost", "setHost")), d(eU, "hostname", eq("getHostname", "setHostname")), d(eU, "port", eq("getPort", "setPort")), d(eU, "pathname", eq("getPathname", "setPathname")), d(eU, "search", eq("getSearch", "setSearch")), d(eU, "searchParams", eq("getSearchParams")), d(eU, "hash", eq("getHash", "setHash"))), c(eU, "toJSON", function() {
    return N(this).serialize()
  }, {
    enumerable: !0
  }), c(eU, "toString", function() {
    return N(this).serialize()
  }, {
    enumerable: !0
  }), A) {
  var eK = A.createObjectURL,
    eH = A.revokeObjectURL;
  eK && c(ej, "createObjectURL", u(eK, A)), eH && c(ej, "revokeObjectURL", u(eH, A))
}
_(ej, "URL"), a({
  global: !0,
  constructor: !0,
  forced: !i,
  sham: !o
}, {
  URL: ej
})