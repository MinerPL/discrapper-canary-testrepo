"use strict";
var r = n(890308);

function i() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
}
var a = /^([a-z0-9.+-]+:)/i,
  o = /:[0-9]*$/,
  s = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
  u = ["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"])),
  c = ["%", "/", "?", ";", "#"].concat(u),
  l = ["/", "?", "#"],
  d = /^[+a-z0-9A-Z_-]{0,63}$/,
  f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
  p = {
    javascript: !0,
    "javascript:": !0
  },
  h = {
    javascript: !0,
    "javascript:": !0
  },
  m = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0
  },
  g = n(684083);

function _(e, t, n) {
  if (e && "object" == typeof e && e instanceof i) return e;
  var r = new i;
  return r.parse(e, t, n), r
}
i.prototype.parse = function(e, t, n) {
  if ("string" != typeof e) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
  var i = e.indexOf("?"),
    o = -1 !== i && i < e.indexOf("#") ? "?" : "#",
    _ = e.split(o);
  _[0] = _[0].replace(/\\/g, "/");
  var b = e = _.join(o);
  if (b = b.trim(), !n && 1 === e.split("#").length) {
    var v = s.exec(b);
    if (v) return this.path = b, this.href = b, this.pathname = v[1], v[2] ? (this.search = v[2], t ? this.query = g.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this
  }
  var y = a.exec(b);
  if (y) {
    var E = (y = y[0]).toLowerCase();
    this.protocol = E, b = b.substr(y.length)
  }
  if (n || y || b.match(/^\/\/[^@/]+@[^@/]+/)) {
    var S = "//" === b.substr(0, 2);
    S && !(y && h[y]) && (b = b.substr(2), this.slashes = !0)
  }
  if (!h[y] && (S || y && !m[y])) {
    for (var x, w, C = -1, T = 0; T < l.length; T++) {
      var D = b.indexOf(l[T]); - 1 !== D && (-1 === C || D < C) && (C = D)
    } - 1 !== (w = -1 === C ? b.lastIndexOf("@") : b.lastIndexOf("@", C)) && (x = b.slice(0, w), b = b.slice(w + 1), this.auth = decodeURIComponent(x)), C = -1;
    for (var T = 0; T < c.length; T++) {
      var D = b.indexOf(c[T]); - 1 !== D && (-1 === C || D < C) && (C = D)
    } - 1 === C && (C = b.length), this.host = b.slice(0, C), b = b.slice(C), this.parseHost(), this.hostname = this.hostname || "";
    var M = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
    if (!M) {
      for (var O = this.hostname.split(/\./), T = 0, A = O.length; T < A; T++) {
        var k = O[T];
        if (!!k) {
          if (!k.match(d)) {
            for (var R = "", N = 0, I = k.length; N < I; N++) k.charCodeAt(N) > 127 ? R += "x" : R += k[N];
            if (!R.match(d)) {
              var L = O.slice(0, T),
                P = O.slice(T + 1),
                B = k.match(f);
              B && (L.push(B[1]), P.unshift(B[2])), P.length && (b = "/" + P.join(".") + b), this.hostname = L.join(".");
              break
            }
          }
        }
      }
    }
    this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !M && (this.hostname = r.toASCII(this.hostname));
    var F = this.port ? ":" + this.port : "",
      U = this.hostname || "";
    this.host = U + F, this.href += this.host, M && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== b[0] && (b = "/" + b))
  }
  if (!p[E])
    for (var T = 0, A = u.length; T < A; T++) {
      var j = u[T];
      if (-1 !== b.indexOf(j)) {
        var Y = encodeURIComponent(j);
        Y === j && (Y = escape(j)), b = b.split(j).join(Y)
      }
    }
  var z = b.indexOf("#"); - 1 !== z && (this.hash = b.substr(z), b = b.slice(0, z));
  var H = b.indexOf("?");
  if (-1 !== H ? (this.search = b.substr(H), this.query = b.substr(H + 1), t && (this.query = g.parse(this.query)), b = b.slice(0, H)) : t && (this.search = "", this.query = {}), b && (this.pathname = b), m[E] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var F = this.pathname || "",
      G = this.search || "";
    this.path = F + G
  }
  return this.href = this.format(), this
};
i.prototype.format = function() {
  var e = this.auth || "";
  e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":") + "@");
  var t = this.protocol || "",
    n = this.pathname || "",
    r = this.hash || "",
    i = !1,
    a = "";
  this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && "object" == typeof this.query && Object.keys(this.query).length && (a = g.stringify(this.query, {
    arrayFormat: "repeat",
    addQueryPrefix: !1
  }));
  var o = this.search || a && "?" + a || "";
  return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || m[t]) && !1 !== i ? (i = "//" + (i || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : !i && (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), o && "?" !== o.charAt(0) && (o = "?" + o), n = n.replace(/[?#]/g, function(e) {
    return encodeURIComponent(e)
  }), t + i + n + (o = o.replace("#", "%23")) + r
};
i.prototype.resolve = function(e) {
  return this.resolveObject(_(e, !1, !0)).format()
};
i.prototype.resolveObject = function(e) {
  if ("string" == typeof e) {
    var t = new i;
    t.parse(e, !1, !0), e = t
  }
  for (var n = new i, r = Object.keys(this), a = 0; a < r.length; a++) {
    var o = r[a];
    n[o] = this[o]
  }
  if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
  if (e.slashes && !e.protocol) {
    for (var s = Object.keys(e), u = 0; u < s.length; u++) {
      var c = s[u];
      "protocol" !== c && (n[c] = e[c])
    }
    return m[n.protocol] && n.hostname && !n.pathname && (n.pathname = "/", n.path = n.pathname), n.href = n.format(), n
  }
  if (e.protocol && e.protocol !== n.protocol) {
    if (!m[e.protocol]) {
      for (var l = Object.keys(e), d = 0; d < l.length; d++) {
        var f = l[d];
        n[f] = e[f]
      }
      return n.href = n.format(), n
    }
    if (n.protocol = e.protocol, e.host || h[e.protocol]) n.pathname = e.pathname;
    else {
      for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift()););
      !e.host && (e.host = ""), !e.hostname && (e.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), n.pathname = p.join("/")
    }
    if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
      var g = n.pathname || "",
        _ = n.search || "";
      n.path = g + _
    }
    return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
  }
  var b = n.pathname && "/" === n.pathname.charAt(0),
    v = e.host || e.pathname && "/" === e.pathname.charAt(0),
    y = v || b || n.host && e.pathname,
    E = y,
    S = n.pathname && n.pathname.split("/") || [],
    p = e.pathname && e.pathname.split("/") || [],
    x = n.protocol && !m[n.protocol];
  if (x && (n.hostname = "", n.port = null, n.host && ("" === S[0] ? S[0] = n.host : S.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === p[0] ? p[0] = e.host : p.unshift(e.host)), e.host = null), y = y && ("" === p[0] || "" === S[0])), v) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, S = p;
  else if (p.length) !S && (S = []), S.pop(), S = S.concat(p), n.search = e.search, n.query = e.query;
  else if (null != e.search) {
    if (x) {
      n.host = S.shift(), n.hostname = n.host;
      var w = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
      w && (n.auth = w.shift(), n.hostname = w.shift(), n.host = n.hostname)
    }
    return n.search = e.search, n.query = e.query, (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
  }
  if (!S.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
  for (var C = S.slice(-1)[0], T = (n.host || e.host || S.length > 1) && ("." === C || ".." === C) || "" === C, D = 0, M = S.length; M >= 0; M--) "." === (C = S[M]) ? S.splice(M, 1) : ".." === C ? (S.splice(M, 1), D++) : D && (S.splice(M, 1), D--);
  if (!y && !E)
    for (; D--; D) S.unshift("..");
  y && "" !== S[0] && (!S[0] || "/" !== S[0].charAt(0)) && S.unshift(""), T && "/" !== S.join("/").substr(-1) && S.push("");
  var O = "" === S[0] || S[0] && "/" === S[0].charAt(0);
  if (x) {
    n.hostname = O ? "" : S.length ? S.shift() : "", n.host = n.hostname;
    var w = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
    w && (n.auth = w.shift(), n.hostname = w.shift(), n.host = n.hostname)
  }
  return (y = y || n.host && S.length) && !O && S.unshift(""), S.length > 0 ? n.pathname = S.join("/") : (n.pathname = null, n.path = null), (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
}, i.prototype.parseHost = function() {
  var e = this.host,
    t = o.exec(e);
  t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
}, t.parse = _, t.resolve = function(e, t) {
  return _(e, !1, !0).resolve(t)
}, t.resolveObject = function(e, t) {
  return e ? _(e, !1, !0).resolveObject(t) : t
}, t.format = function(e) {
  return ("string" == typeof e && (e = _(e)), e instanceof i) ? e.format() : i.prototype.format.call(e)
}, t.Url = i