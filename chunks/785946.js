
function r(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
var o, i = r(n(634450)),
  a = r(n(115953));
n(368040);
var c = r(n(765490));

function s() {
  return (s = Object.assign || function(e) {
for (var t = 1; t < arguments.length; t++) {
  var n = arguments[t];
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
}
return e;
  }).apply(this, arguments);
}

function u(e) {
  return '/' === e.charAt(0) ? e : '/' + e;
}

function h(e) {
  return '/' === e.charAt(0) ? e.substr(1) : e;
}

function f(e, t) {
  var n, r;
  return (n = e, r = t, 0 === n.toLowerCase().indexOf(r.toLowerCase()) && -1 !== '/?#'.indexOf(n.charAt(r.length))) ? e.substr(t.length) : e;
}

function d(e) {
  return '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}

function l(e) {
  var t = e || '/',
n = '',
r = '',
o = t.indexOf('#'); -
  1 !== o && (r = t.substr(o), t = t.substr(0, o));
  var i = t.indexOf('?');
  return -1 !== i && (n = t.substr(i), t = t.substr(0, i)), {
pathname: t,
search: '?' === n ? '' : n,
hash: '#' === r ? '' : r
  };
}

function p(e) {
  var t = e.pathname,
n = e.search,
r = e.hash,
o = t || '/';
  return n && '?' !== n && (o += '?' === n.charAt(0) ? n : '?' + n), r && '#' !== r && (o += '#' === r.charAt(0) ? r : '#' + r), o;
}

function y(e, t, n, r) {
  var o;
  'string' == typeof e ? (o = l(e)).state = t : (void 0 === (o = s({}, e)).pathname && (o.pathname = ''), o.search ? '?' !== o.search.charAt(0) && (o.search = '?' + o.search) : o.search = '', o.hash ? '#' !== o.hash.charAt(0) && (o.hash = '#' + o.hash) : o.hash = '', void 0 !== t && void 0 === o.state && (o.state = t));
  try {
o.pathname = decodeURI(o.pathname);
  } catch (e) {
throw e instanceof URIError ? URIError('Pathname "' + o.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e;
  }
  return n && (o.key = n), r ? o.pathname ? '/' !== o.pathname.charAt(0) && (o.pathname = i(o.pathname, r.pathname)) : o.pathname = r.pathname : o.pathname || (o.pathname = '/'), o;
}

function w() {
  var e = null,
t = [];
  return {
setPrompt: function(t) {
  return e = t,
    function() {
      e === t && (e = null);
    };
},
confirmTransitionTo: function(t, n, r, o) {
  if (null != e) {
    var i = 'function' == typeof e ? e(t, n) : e;
    'string' == typeof i ? 'function' == typeof r ? r(i, o) : o(!0) : o(!1 !== i);
  } else
    o(!0);
},
appendListener: function(e) {
  var n = !0;

  function r() {
    n && e.apply(void 0, arguments);
  }
  return t.push(r),
    function() {
      n = !1, t = t.filter(function(e) {
        return e !== r;
      });
    };
},
notifyListeners: function() {
  for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  t.forEach(function(e) {
    return e.apply(void 0, n);
  });
}
  };
}
var m = !('undefined' == typeof window || !window.document || !window.document.createElement);

function g(e, t) {
  t(window.confirm(e));
}
var v = 'popstate',
  x = 'hashchange';

function b() {
  try {
return window.history.state || {};
  } catch (e) {
return {};
  }
}
var E = 'hashchange',
  A = {
hashbang: {
  encodePath: function(e) {
    return '!' === e.charAt(0) ? e : '!/' + h(e);
  },
  decodePath: function(e) {
    return '!' === e.charAt(0) ? e.substr(1) : e;
  }
},
noslash: {
  encodePath: h,
  decodePath: u
},
slash: {
  encodePath: u,
  decodePath: u
}
  };

function C(e) {
  var t = e.indexOf('#');
  return -1 === t ? e : e.slice(0, t);
}

function T() {
  var e = window.location.href,
t = e.indexOf('#');
  return -1 === t ? '' : e.substring(t + 1);
}

function O(e) {
  window.location.replace(C(window.location.href) + '#' + e);
}

function R(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
t.createBrowserHistory = function(e) {
  void 0 === e && (e = {}), m || c(!1);
  var t, n = window.history,
r = (-1 === (t = window.navigator.userAgent).indexOf('Android 2.') && -1 === t.indexOf('Android 4.0') || -1 === t.indexOf('Mobile Safari') || -1 !== t.indexOf('Chrome') || -1 !== t.indexOf('Windows Phone')) && window.history && 'pushState' in window.history,
o = -1 !== window.navigator.userAgent.indexOf('Trident'),
i = e,
a = i.forceRefresh,
h = void 0 !== a && a,
l = i.getUserConfirmation,
E = void 0 === l ? g : l,
A = i.keyLength,
C = void 0 === A ? 6 : A,
T = e.basename ? d(u(e.basename)) : '';

  function O(e) {
var t = e || {},
  n = t.key,
  r = t.state,
  o = window.location,
  i = o.pathname + o.search + o.hash;
return T && (i = f(i, T)), y(i, r, n);
  }

  function R() {
return Math.random().toString(36).substr(2, C);
  }
  var k = w();

  function P(e) {
s(z, e), z.length = n.length, k.notifyListeners(z.location, z.action);
  }

  function I(e) {
void 0 === e.state && -1 === navigator.userAgent.indexOf('CriOS') || U(O(e.state));
  }

  function M() {
U(O(b()));
  }
  var _ = !1;

  function U(e) {
_ ? (_ = !1, P()) : k.confirmTransitionTo(e, 'POP', E, function(t) {
  var n, r, o, i, a;
  t ? P({
    action: 'POP',
    location: e
  }) : (n = e, r = z.location, -1 === (o = S.indexOf(r.key)) && (o = 0), -1 === (i = S.indexOf(n.key)) && (i = 0), (a = o - i) && (_ = !0, B(a)));
});
  }
  var L = O(b()),
S = [L.key];

  function j(e) {
return T + p(e);
  }

  function B(e) {
n.go(e);
  }
  var F = 0;

  function H(e) {
1 === (F += e) && 1 === e ? (window.addEventListener(v, I), o && window.addEventListener(x, M)) : 0 === F && (window.removeEventListener(v, I), o && window.removeEventListener(x, M));
  }
  var q = !1,
z = {
  length: n.length,
  action: 'POP',
  location: L,
  createHref: j,
  push: function(e, t) {
    var o = y(e, t, R(), z.location);
    k.confirmTransitionTo(o, 'PUSH', E, function(e) {
      if (e) {
        var t = j(o),
          i = o.key,
          a = o.state;
        if (r) {
          if (n.pushState({
              key: i,
              state: a
            }, null, t), h)
            window.location.href = t;
          else {
            var c = S.indexOf(z.location.key),
              s = S.slice(0, c + 1);
            s.push(o.key), S = s, P({
              action: 'PUSH',
              location: o
            });
          }
        } else
          window.location.href = t;
      }
    });
  },
  replace: function(e, t) {
    var o = 'REPLACE',
      i = y(e, t, R(), z.location);
    k.confirmTransitionTo(i, o, E, function(e) {
      if (e) {
        var t = j(i),
          a = i.key,
          c = i.state;
        if (r) {
          if (n.replaceState({
              key: a,
              state: c
            }, null, t), h)
            window.location.replace(t);
          else {
            var s = S.indexOf(z.location.key); -
            1 !== s && (S[s] = i.key), P({
              action: o,
              location: i
            });
          }
        } else
          window.location.replace(t);
      }
    });
  },
  go: B,
  goBack: function() {
    B(-1);
  },
  goForward: function() {
    B(1);
  },
  block: function(e) {
    void 0 === e && (e = !1);
    var t = k.setPrompt(e);
    return q || (H(1), q = !0),
      function() {
        return q && (q = !1, H(-1)), t();
      };
  },
  listen: function(e) {
    var t = k.appendListener(e);
    return H(1),
      function() {
        H(-1), t();
      };
  }
};
  return z;
};