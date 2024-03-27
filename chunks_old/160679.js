r("70102"), r("424973"), n.parse = function(t, n) {
  if ("string" != typeof t) throw TypeError("argument str must be a string");
  var r = {},
    i = t.split(a),
    s = (n || {}).decode || e;
  return i.forEach(function(t) {
    var n = t.indexOf("=");
    if (!(n < 0)) {
      var e = t.substr(0, n).trim(),
        i = t.substr(++n, t.length).trim();
      '"' == i[0] && (i = i.slice(1, -1)), void 0 == r[e] && (r[e] = function(t, n) {
        try {
          return n(t)
        } catch (n) {
          return t
        }
      }(i, s))
    }
  }), r
}, n.serialize = function(t, n, r) {
  var e = r || {},
    a = e.encode || i;
  if (!s.test(t)) throw TypeError("argument name is invalid");
  var o = a(n);
  if (o && !s.test(o)) throw TypeError("argument val is invalid");
  var u = [t + "=" + o];
  if (null != e.maxAge) {
    var l = e.maxAge - 0;
    if (isNaN(l)) throw Error("maxAge should be a Number");
    u.push("Max-Age=" + Math.floor(l))
  }
  if (e.domain) {
    if (!s.test(e.domain)) throw TypeError("option domain is invalid");
    u.push("Domain=" + e.domain)
  }
  if (e.path) {
    if (!s.test(e.path)) throw TypeError("option path is invalid");
    u.push("Path=" + e.path)
  }
  return e.expires && u.push("Expires=" + e.expires.toUTCString()), e.httpOnly && u.push("HttpOnly"), e.secure && u.push("Secure"), e.firstPartyOnly && u.push("First-Party-Only"), u.join("; ")
};
var e = decodeURIComponent,
  i = encodeURIComponent,
  a = /; */,
  s = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/