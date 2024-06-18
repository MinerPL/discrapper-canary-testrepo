"use strict";
n.d(t, {
  W: function() {
    return c
  },
  y: function() {
    return u
  }
});
var r = n(470079),
  i = n(696861),
  a = n(53625);

function o() {
  return (o = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function s(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r
}
var u = (0, r.createContext)(null),
  c = function(e) {
    var t, n, c = e.portal,
      l = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++) {
            if (n = a[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
        }
        return i
      }(e, ["portal"]);
    var d = (n = 2, function(e) {
        if (Array.isArray(e)) return e
      }(t = (0, r.useState)(null)) || function(e, t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
          var n = [],
            r = !0,
            i = !1,
            a = void 0;
          try {
            for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
          } catch (e) {
            i = !0, a = e
          } finally {
            try {
              !r && null != s.return && s.return()
            } finally {
              if (i) throw a
            }
          }
          return n
        }
      }(t, 2) || function(e, t) {
        if (e) {
          if ("string" == typeof e) return s(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
        }
      }(t, n) || function() {
        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()),
      f = d[0],
      p = d[1];
    return r.createElement(u.Provider, {
      value: null != c ? c : f
    }, r.createElement(i.W, o({
      backend: a.Q
    }, l)), c ? null : r.createElement("div", {
      ref: p
    }))
  }