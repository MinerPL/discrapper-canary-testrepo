"use strict";

function r(t) {
  return t && "object" == typeof t && "default" in t ? t.default : t
}
var i, o = r(e(634450)),
  a = r(e(115953));
e(368040);
var c = r(e(765490));

function s() {
  return (s = Object.assign || function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
    }
    return t
  }).apply(this, arguments)
}

function u(t) {
  return "/" === t.charAt(0) ? t : "/" + t
}

function f(t) {
  return "/" === t.charAt(0) ? t.substr(1) : t
}

function l(t, n) {
  var e, r;
  return (e = t, r = n, 0 === e.toLowerCase().indexOf(r.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(r.length))) ? t.substr(n.length) : t
}

function h(t) {
  return "/" === t.charAt(t.length - 1) ? t.slice(0, -1) : t
}

function d(t) {
  var n = t || "/",
    e = "",
    r = "",
    i = n.indexOf("#"); - 1 !== i && (r = n.substr(i), n = n.substr(0, i));
  var o = n.indexOf("?");
  return -1 !== o && (e = n.substr(o), n = n.substr(0, o)), {
    pathname: n,
    search: "?" === e ? "" : e,
    hash: "#" === r ? "" : r
  }
}

function p(t) {
  var n = t.pathname,
    e = t.search,
    r = t.hash,
    i = n || "/";
  return e && "?" !== e && (i += "?" === e.charAt(0) ? e : "?" + e), r && "#" !== r && (i += "#" === r.charAt(0) ? r : "#" + r), i
}

function v(t, n, e, r) {
  var i;
  "string" == typeof t ? (i = d(t)).state = n : (void 0 === (i = s({}, t)).pathname && (i.pathname = ""), i.search ? "?" !== i.search.charAt(0) && (i.search = "?" + i.search) : i.search = "", i.hash ? "#" !== i.hash.charAt(0) && (i.hash = "#" + i.hash) : i.hash = "", void 0 !== n && void 0 === i.state && (i.state = n));
  try {
    i.pathname = decodeURI(i.pathname)
  } catch (t) {
    throw t instanceof URIError ? URIError('Pathname "' + i.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : t
  }
  return e && (i.key = e), r ? i.pathname ? "/" !== i.pathname.charAt(0) && (i.pathname = o(i.pathname, r.pathname)) : i.pathname = r.pathname : i.pathname || (i.pathname = "/"), i
}

function m() {
  var t = null,
    n = [];
  return {
    setPrompt: function(n) {
      return t = n,
        function() {
          t === n && (t = null)
        }
    },
    confirmTransitionTo: function(n, e, r, i) {
      if (null != t) {
        var o = "function" == typeof t ? t(n, e) : t;
        "string" == typeof o ? "function" == typeof r ? r(o, i) : i(!0) : i(!1 !== o)
      } else i(!0)
    },
    appendListener: function(t) {
      var e = !0;

      function r() {
        e && t.apply(void 0, arguments)
      }
      return n.push(r),
        function() {
          e = !1, n = n.filter(function(t) {
            return t !== r
          })
        }
    },
    notifyListeners: function() {
      for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      n.forEach(function(t) {
        return t.apply(void 0, e)
      })
    }
  }
}
var y = !("undefined" == typeof window || !window.document || !window.document.createElement);

function w(t, n) {
  n(window.confirm(t))
}
var g = "popstate",
  x = "hashchange";

function C() {
  try {
    return window.history.state || {}
  } catch (t) {
    return {}
  }
}
var k = "hashchange",
  E = {
    hashbang: {
      encodePath: function(t) {
        return "!" === t.charAt(0) ? t : "!/" + f(t)
      },
      decodePath: function(t) {
        return "!" === t.charAt(0) ? t.substr(1) : t
      }
    },
    noslash: {
      encodePath: f,
      decodePath: u
    },
    slash: {
      encodePath: u,
      decodePath: u
    }
  };

function O(t) {
  var n = t.indexOf("#");
  return -1 === n ? t : t.slice(0, n)
}

function b() {
  var t = window.location.href,
    n = t.indexOf("#");
  return -1 === n ? "" : t.substring(n + 1)
}

function A(t) {
  window.location.replace(O(window.location.href) + "#" + t)
}

function P(t, n, e) {
  return Math.min(Math.max(t, n), e)
}
n.createBrowserHistory = function(t) {
  void 0 === t && (t = {}), y || c(!1);
  var n, e = window.history,
    r = (-1 === (n = window.navigator.userAgent).indexOf("Android 2.") && -1 === n.indexOf("Android 4.0") || -1 === n.indexOf("Mobile Safari") || -1 !== n.indexOf("Chrome") || -1 !== n.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
    i = -1 !== window.navigator.userAgent.indexOf("Trident"),
    o = t,
    a = o.forceRefresh,
    f = void 0 !== a && a,
    d = o.getUserConfirmation,
    k = void 0 === d ? w : d,
    E = o.keyLength,
    O = void 0 === E ? 6 : E,
    b = t.basename ? h(u(t.basename)) : "";

  function A(t) {
    var n = t || {},
      e = n.key,
      r = n.state,
      i = window.location,
      o = i.pathname + i.search + i.hash;
    return b && (o = l(o, b)), v(o, r, e)
  }

  function P() {
    return Math.random().toString(36).substr(2, O)
  }
  var R = m();

  function L(t) {
    s(K, t), K.length = e.length, R.notifyListeners(K.location, K.action)
  }

  function Z(t) {
    void 0 === t.state && -1 === navigator.userAgent.indexOf("CriOS") || M(A(t.state))
  }

  function S() {
    M(A(C()))
  }
  var _ = !1;

  function M(t) {
    _ ? (_ = !1, L()) : R.confirmTransitionTo(t, "POP", k, function(n) {
      var e, r, i, o, a;
      n ? L({
        action: "POP",
        location: t
      }) : (e = t, r = K.location, -1 === (i = N.indexOf(r.key)) && (i = 0), -1 === (o = N.indexOf(e.key)) && (o = 0), (a = i - o) && (_ = !0, U(a)))
    })
  }
  var T = A(C()),
    N = [T.key];

  function H(t) {
    return b + p(t)
  }

  function U(t) {
    e.go(t)
  }
  var j = 0;

  function B(t) {
    1 === (j += t) && 1 === t ? (window.addEventListener(g, Z), i && window.addEventListener(x, S)) : 0 === j && (window.removeEventListener(g, Z), i && window.removeEventListener(x, S))
  }
  var I = !1,
    K = {
      length: e.length,
      action: "POP",
      location: T,
      createHref: H,
      push: function(t, n) {
        var i = v(t, n, P(), K.location);
        R.confirmTransitionTo(i, "PUSH", k, function(t) {
          if (t) {
            var n = H(i),
              o = i.key,
              a = i.state;
            if (r) {
              if (e.pushState({
                  key: o,
                  state: a
                }, null, n), f) window.location.href = n;
              else {
                var c = N.indexOf(K.location.key),
                  s = N.slice(0, c + 1);
                s.push(i.key), N = s, L({
                  action: "PUSH",
                  location: i
                })
              }
            } else window.location.href = n
          }
        })
      },
      replace: function(t, n) {
        var i = "REPLACE",
          o = v(t, n, P(), K.location);
        R.confirmTransitionTo(o, i, k, function(t) {
          if (t) {
            var n = H(o),
              a = o.key,
              c = o.state;
            if (r) {
              if (e.replaceState({
                  key: a,
                  state: c
                }, null, n), f) window.location.replace(n);
              else {
                var s = N.indexOf(K.location.key); - 1 !== s && (N[s] = o.key), L({
                  action: i,
                  location: o
                })
              }
            } else window.location.replace(n)
          }
        })
      },
      go: U,
      goBack: function() {
        U(-1)
      },
      goForward: function() {
        U(1)
      },
      block: function(t) {
        void 0 === t && (t = !1);
        var n = R.setPrompt(t);
        return I || (B(1), I = !0),
          function() {
            return I && (I = !1, B(-1)), n()
          }
      },
      listen: function(t) {
        var n = R.appendListener(t);
        return B(1),
          function() {
            B(-1), n()
          }
      }
    };
  return K
}