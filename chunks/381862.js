"use strict";
t.__esModule = !0, t.getChildMapping = i, t.mergeChildMappings = r, t.getInitialChildMapping = function(e, t) {
  return i(e.children, function(n) {
    return (0, o.cloneElement)(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: a(n, "appear", e),
      enter: a(n, "enter", e),
      exit: a(n, "exit", e)
    })
  })
}, t.getNextChildMapping = function(e, t, n) {
  var u = i(e.children),
    s = r(t, u);
  return Object.keys(s).forEach(function(i) {
    var r = s[i];
    if ((0, o.isValidElement)(r)) {
      var l = i in t,
        c = i in u,
        p = t[i],
        d = (0, o.isValidElement)(p) && !p.props.in;
      c && (!l || d) ? s[i] = (0, o.cloneElement)(r, {
        onExited: n.bind(null, r),
        in: !0,
        exit: a(r, "exit", e),
        enter: a(r, "enter", e)
      }) : c || !l || d ? c && l && (0, o.isValidElement)(p) && (s[i] = (0, o.cloneElement)(r, {
        onExited: n.bind(null, r),
        in: p.props.in,
        exit: a(r, "exit", e),
        enter: a(r, "enter", e)
      })) : s[i] = (0, o.cloneElement)(r, {
        in: !1
      })
    }
  }), s
};
var o = n(470079);

function i(e, t) {
  var n = Object.create(null);
  return e && o.Children.map(e, function(e) {
    return e
  }).forEach(function(e) {
    var i;
    n[e.key] = (i = e, t && (0, o.isValidElement)(i) ? t(i) : i)
  }), n
}

function r(e, t) {
  function n(n) {
    return n in t ? t[n] : e[n]
  }
  e = e || {}, t = t || {};
  var o, i = Object.create(null),
    r = [];
  for (var a in e) a in t ? r.length && (i[a] = r, r = []) : r.push(a);
  var u = {};
  for (var s in t) {
    if (i[s])
      for (o = 0; o < i[s].length; o++) {
        var l = i[s][o];
        u[i[s][o]] = n(l)
      }
    u[s] = n(s)
  }
  for (o = 0; o < r.length; o++) u[r[o]] = n(r[o]);
  return u
}

function a(e, t, n) {
  return null != n[t] ? n[t] : e.props[t]
}