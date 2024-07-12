
function r(e) {
  return function(t) {
var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
  i = r.width,
  a = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth],
  o = t.match(a);
if (!o)
  return null;
var s = o[0],
  l = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth],
  u = Array.isArray(l) ? function(e, t) {
    for (var n = 0; n < e.length; n++)
      if (t(e[n]))
        return n;
  }(l, function(e) {
    return e.test(s);
  }) : function(e, t) {
    for (var n in e)
      if (e.hasOwnProperty(n) && t(e[n]))
        return n;
  }(l, function(e) {
    return e.test(s);
  });
return n = e.valueCallback ? e.valueCallback(u) : u, {
  value: n = r.valueCallback ? r.valueCallback(n) : n,
  rest: t.slice(s.length)
};
  };
}
n.d(t, {
  Z: function() {
return r;
  }
});