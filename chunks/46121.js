n.d(t, {
  Kg: function() {
return o;
  },
  Rp: function() {
return s;
  },
  n: function() {
return i;
  }
});
var r = n(470079);

function i(e, t) {
  var n = Object.create(null);
  return e && r.Children.map(e, function(e) {
return e;
  }).forEach(function(e) {
var i;
n[e.key] = (i = e, t && (0, r.isValidElement)(i) ? t(i) : i);
  }), n;
}

function a(e, t, n) {
  return null != n[t] ? n[t] : e.props[t];
}

function o(e, t) {
  return i(e.children, function(n) {
return (0, r.cloneElement)(n, {
  onExited: t.bind(null, n),
  in: !0,
  appear: a(n, 'appear', e),
  enter: a(n, 'enter', e),
  exit: a(n, 'exit', e)
});
  });
}

function s(e, t, n) {
  var o = i(e.children),
s = function(e, t) {
  function n(n) {
    return n in t ? t[n] : e[n];
  }
  e = e || {}, t = t || {};
  var r, i = Object.create(null),
    a = [];
  for (var o in e)
    o in t ? a.length && (i[o] = a, a = []) : a.push(o);
  var s = {};
  for (var l in t) {
    if (i[l])
      for (r = 0; r < i[l].length; r++) {
        var u = i[l][r];
        s[i[l][r]] = n(u);
      }
    s[l] = n(l);
  }
  for (r = 0; r < a.length; r++)
    s[a[r]] = n(a[r]);
  return s;
}(t, o);
  return Object.keys(s).forEach(function(i) {
var l = s[i];
if ((0, r.isValidElement)(l)) {
  var u = i in t,
    c = i in o,
    d = t[i],
    _ = (0, r.isValidElement)(d) && !d.props.in;
  c && (!u || _) ? s[i] = (0, r.cloneElement)(l, {
    onExited: n.bind(null, l),
    in: !0,
    exit: a(l, 'exit', e),
    enter: a(l, 'enter', e)
  }) : c || !u || _ ? c && u && (0, r.isValidElement)(d) && (s[i] = (0, r.cloneElement)(l, {
    onExited: n.bind(null, l),
    in: d.props.in,
    exit: a(l, 'exit', e),
    enter: a(l, 'enter', e)
  })) : s[i] = (0, r.cloneElement)(l, {
    in: !1
  });
}
  }), s;
}