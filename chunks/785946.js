"use strict";

function r(n) {
  return n && "object" == typeof n && "default" in n ? n.default : n
}
Object.defineProperty(t, "__esModule", {
  value: !0
});
var o = r(e("634450")),
  i = r(e("115953"));
e("368040");
var a = r(e("765490"));

function c() {
  return (c = Object.assign || function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
    }
    return n
  }).apply(this, arguments)
}

function u(n) {
  return "/" === n.charAt(0) ? n : "/" + n
}

function s(n) {
  return "/" === n.charAt(0) ? n.substr(1) : n
}

function f(n, t) {
  var e, r;
  return (e = n, r = t, 0 === e.toLowerCase().indexOf(r.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(r.length))) ? n.substr(t.length) : n
}

function l(n) {
  return "/" === n.charAt(n.length - 1) ? n.slice(0, -1) : n
}

function h(n) {
  var t = n || "/",
    e = "",
    r = "",
    o = t.indexOf("#"); - 1 !== o && (r = t.substr(o), t = t.substr(0, o));
  var i = t.indexOf("?");
  return -1 !== i && (e = t.substr(i), t = t.substr(0, i)), {
    pathname: t,
    search: "?" === e ? "" : e,
    hash: "#" === r ? "" : r
  }
}

function d(n) {
  var t = n.pathname,
    e = n.search,
    r = n.hash,
    o = t || "/";
  return e && "?" !== e && (o += "?" === e.charAt(0) ? e : "?" + e), r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r), o
}

function v(n, t, e, r) {
  var i;
  "string" == typeof n ? (i = h(n)).state = t : (void 0 === (i = c({}, n)).pathname && (i.pathname = ""), i.search ? "?" !== i.search.charAt(0) && (i.search = "?" + i.search) : i.search = "", i.hash ? "#" !== i.hash.charAt(0) && (i.hash = "#" + i.hash) : i.hash = "", void 0 !== t && void 0 === i.state && (i.state = t));
  try {
    i.pathname = decodeURI(i.pathname)
  } catch (n) {
    throw n instanceof URIError ? URIError('Pathname "' + i.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : n
  }
  return e && (i.key = e), r ? i.pathname ? "/" !== i.pathname.charAt(0) && (i.pathname = o(i.pathname, r.pathname)) : i.pathname = r.pathname : i.pathname || (i.pathname = "/"), i
}

function p() {
  var n = null,
    t = [];
  return {
    setPrompt: function(t) {
      return n = t,
        function() {
          n === t && (n = null)
        }
    },
    confirmTransitionTo: function(t, e, r, o) {
      if (null != n) {
        var i = "function" == typeof n ? n(t, e) : n;
        "string" == typeof i ? "function" == typeof r ? r(i, o) : o(!0) : o(!1 !== i)
      } else o(!0)
    },
    appendListener: function(n) {
      var e = !0;

      function r() {
        e && n.apply(void 0, arguments)
      }
      return t.push(r),
        function() {
          e = !1, t = t.filter(function(n) {
            return n !== r
          })
        }
    },
    notifyListeners: function() {
      for (var n = arguments.length, e = Array(n), r = 0; r < n; r++) e[r] = arguments[r];
      t.forEach(function(n) {
        return n.apply(void 0, e)
      })
    }
  }
}
var m = !("undefined" == typeof window || !window.document || !window.document.createElement);

function y(n, t) {
  t(window.confirm(n))
}
var w = "popstate",
  g = "hashchange";

function x() {
  try {
    return window.history.state || {}
  } catch (n) {
    return {}
  }
}
var P = "hashchange",
  C = {
    hashbang: {
      encodePath: function(n) {
        return "!" === n.charAt(0) ? n : "!/" + s(n)
      },
      decodePath: function(n) {
        return "!" === n.charAt(0) ? n.substr(1) : n
      }
    },
    noslash: {
      encodePath: s,
      decodePath: u
    },
    slash: {
      encodePath: u,
      decodePath: u
    }
  };

function k(n) {
  var t = n.indexOf("#");
  return -1 === t ? n : n.slice(0, t)
}

function O() {
  var n = window.location.href,
    t = n.indexOf("#");
  return -1 === t ? "" : n.substring(t + 1)
}

function b(n) {
  window.location.replace(k(window.location.href) + "#" + n)
}

function R(n, t, e) {
  return Math.min(Math.max(n, t), e)
}
t.createBrowserHistory = function(n) {
  void 0 === n && (n = {}), m || a(!1);
  var t, e = window.history,
    r = (-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
    o = -1 !== window.navigator.userAgent.indexOf("Trident"),
    i = n,
    s = i.forceRefresh,
    h = void 0 !== s && s,
    P = i.getUserConfirmation,
    C = void 0 === P ? y : P,
    k = i.keyLength,
    O = void 0 === k ? 6 : k,
    b = n.basename ? l(u(n.basename)) : "";

  function R(n) {
    var t = n || {},
      e = t.key,
      r = t.state,
      o = window.location,
      i = o.pathname + o.search + o.hash;
    return b && (i = f(i, b)), v(i, r, e)
  }

  function E() {
    return Math.random().toString(36).substr(2, O)
  }
  var L = p();

  function A(n) {
    c(F, n), F.length = e.length, L.notifyListeners(F.location, F.action)
  }

  function T(n) {
    void 0 === n.state && -1 === navigator.userAgent.indexOf("CriOS") || H(R(n.state))
  }

  function _() {
    H(R(x()))
  }
  var S = !1;

  function H(n) {
    S ? (S = !1, A()) : L.confirmTransitionTo(n, "POP", C, function(t) {
      var e, r, o, i, a;
      t ? A({
        action: "POP",
        location: n
      }) : (e = n, r = F.location, -1 === (o = U.indexOf(r.key)) && (o = 0), -1 === (i = U.indexOf(e.key)) && (i = 0), (a = o - i) && (S = !0, I(a)))
    })
  }
  var M = R(x()),
    U = [M.key];

  function N(n) {
    return b + d(n)
  }

  function I(n) {
    e.go(n)
  }
  var j = 0;

  function B(n) {
    1 === (j += n) && 1 === n ? (window.addEventListener(w, T), o && window.addEventListener(g, _)) : 0 === j && (window.removeEventListener(w, T), o && window.removeEventListener(g, _))
  }
  var q = !1,
    F = {
      length: e.length,
      action: "POP",
      location: M,
      createHref: N,
      push: function(n, t) {
        var o = v(n, t, E(), F.location);
        L.confirmTransitionTo(o, "PUSH", C, function(n) {
          if (n) {
            var t = N(o),
              i = o.key,
              a = o.state;
            if (r) {
              if (e.pushState({
                  key: i,
                  state: a
                }, null, t), h) window.location.href = t;
              else {
                var c = U.indexOf(F.location.key),
                  u = U.slice(0, c + 1);
                u.push(o.key), U = u, A({
                  action: "PUSH",
                  location: o
                })
              }
            } else window.location.href = t
          }
        })
      },
      replace: function(n, t) {
        var o = "REPLACE",
          i = v(n, t, E(), F.location);
        L.confirmTransitionTo(i, o, C, function(n) {
          if (n) {
            var t = N(i),
              a = i.key,
              c = i.state;
            if (r) {
              if (e.replaceState({
                  key: a,
                  state: c
                }, null, t), h) window.location.replace(t);
              else {
                var u = U.indexOf(F.location.key); - 1 !== u && (U[u] = i.key), A({
                  action: o,
                  location: i
                })
              }
            } else window.location.replace(t)
          }
        })
      },
      go: I,
      goBack: function() {
        I(-1)
      },
      goForward: function() {
        I(1)
      },
      block: function(n) {
        void 0 === n && (n = !1);
        var t = L.setPrompt(n);
        return q || (B(1), q = !0),
          function() {
            return q && (q = !1, B(-1)), t()
          }
      },
      listen: function(n) {
        var t = L.appendListener(n);
        return B(1),
          function() {
            B(-1), t()
          }
      }
    };
  return F
}, t.createHashHistory = function(n) {
  void 0 === n && (n = {}), m || a(!1);
  var t = window.history,
    e = (window.navigator.userAgent.indexOf("Firefox"), n),
    r = e.getUserConfirmation,
    o = void 0 === r ? y : r,
    i = e.hashType,
    s = n.basename ? l(u(n.basename)) : "",
    h = C[void 0 === i ? "slash" : i],
    w = h.encodePath,
    g = h.decodePath;

  function x() {
    var n = g(O());
    return s && (n = f(n, s)), v(n)
  }
  var R = p();

  function E(n) {
    c(B, n), B.length = t.length, R.notifyListeners(B.location, B.action)
  }
  var L = !1,
    A = null;

  function T() {
    var n = O(),
      t = w(n);
    if (n !== t) b(t);
    else {
      var e, r, i, a = x(),
        c = B.location;
      if (!L && (e = c, r = a, e.pathname === r.pathname && e.search === r.search && e.hash === r.hash) || A === d(a)) return;
      A = null, i = a, L ? (L = !1, E()) : R.confirmTransitionTo(i, "POP", o, function(n) {
        var t, e, r, o, a;
        n ? E({
          action: "POP",
          location: i
        }) : (t = i, e = B.location, -1 === (r = M.lastIndexOf(d(e))) && (r = 0), -1 === (o = M.lastIndexOf(d(t))) && (o = 0), (a = r - o) && (L = !0, U(a)))
      })
    }
  }
  var _ = O(),
    S = w(_);
  _ !== S && b(S);
  var H = x(),
    M = [d(H)];

  function U(n) {
    t.go(n)
  }
  var N = 0;

  function I(n) {
    1 === (N += n) && 1 === n ? window.addEventListener(P, T) : 0 === N && window.removeEventListener(P, T)
  }
  var j = !1,
    B = {
      length: t.length,
      action: "POP",
      location: H,
      createHref: function(n) {
        var t = document.querySelector("base"),
          e = "";
        return t && t.getAttribute("href") && (e = k(window.location.href)), e + "#" + w(s + d(n))
      },
      push: function(n, t) {
        var e = v(n, void 0, void 0, B.location);
        R.confirmTransitionTo(e, "PUSH", o, function(n) {
          if (n) {
            var t = d(e),
              r = w(s + t);
            if (O() !== r) {
              A = t, o = r, window.location.hash = o;
              var o, i = M.lastIndexOf(d(B.location)),
                a = M.slice(0, i + 1);
              a.push(t), M = a, E({
                action: "PUSH",
                location: e
              })
            } else E()
          }
        })
      },
      replace: function(n, t) {
        var e = "REPLACE",
          r = v(n, void 0, void 0, B.location);
        R.confirmTransitionTo(r, e, o, function(n) {
          if (n) {
            var t = d(r),
              o = w(s + t);
            O() !== o && (A = t, b(o));
            var i = M.indexOf(d(B.location)); - 1 !== i && (M[i] = t), E({
              action: e,
              location: r
            })
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
      block: function(n) {
        void 0 === n && (n = !1);
        var t = R.setPrompt(n);
        return j || (I(1), j = !0),
          function() {
            return j && (j = !1, I(-1)), t()
          }
      },
      listen: function(n) {
        var t = R.appendListener(n);
        return I(1),
          function() {
            I(-1), t()
          }
      }
    };
  return B
}, t.createMemoryHistory = function(n) {
  void 0 === n && (n = {});
  var t = n,
    e = t.getUserConfirmation,
    r = t.initialEntries,
    o = void 0 === r ? ["/"] : r,
    i = t.initialIndex,
    a = t.keyLength,
    u = void 0 === a ? 6 : a,
    s = p();

  function f(n) {
    c(w, n), w.length = w.entries.length, s.notifyListeners(w.location, w.action)
  }

  function l() {
    return Math.random().toString(36).substr(2, u)
  }
  var h = R(void 0 === i ? 0 : i, 0, o.length - 1),
    m = o.map(function(n) {
      return v(n, void 0, "string" == typeof n ? l() : n.key || l())
    });

  function y(n) {
    var t = R(w.index + n, 0, w.entries.length - 1),
      r = w.entries[t];
    s.confirmTransitionTo(r, "POP", e, function(n) {
      n ? f({
        action: "POP",
        location: r,
        index: t
      }) : f()
    })
  }
  var w = {
    length: m.length,
    action: "POP",
    location: m[h],
    index: h,
    entries: m,
    createHref: d,
    push: function(n, t) {
      var r = v(n, t, l(), w.location);
      s.confirmTransitionTo(r, "PUSH", e, function(n) {
        if (n) {
          var t = w.index + 1,
            e = w.entries.slice(0);
          e.length > t ? e.splice(t, e.length - t, r) : e.push(r), f({
            action: "PUSH",
            location: r,
            index: t,
            entries: e
          })
        }
      })
    },
    replace: function(n, t) {
      var r = "REPLACE",
        o = v(n, t, l(), w.location);
      s.confirmTransitionTo(o, r, e, function(n) {
        n && (w.entries[w.index] = o, f({
          action: r,
          location: o
        }))
      })
    },
    go: y,
    goBack: function() {
      y(-1)
    },
    goForward: function() {
      y(1)
    },
    canGo: function(n) {
      var t = w.index + n;
      return 0 <= t && t < w.entries.length
    },
    block: function(n) {
      return void 0 === n && (n = !1), s.setPrompt(n)
    },
    listen: function(n) {
      return s.appendListener(n)
    }
  };
  return w
}, t.createLocation = v, t.locationsAreEqual = function(n, t) {
  return n.pathname === t.pathname && n.search === t.search && n.hash === t.hash && n.key === t.key && i(n.state, t.state)
}, t.parsePath = h, t.createPath = d