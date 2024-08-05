var r = n(161581),
  i = n(325008),
  a = n(4340),
  s = n(572609),
  o = n(936940),
  l = r.RegExp,
  u = l.prototype;
i && o(function() {
  var e = !0;
  try {
l('.', 'd');
  } catch (t) {
e = !1;
  }
  var t = {},
n = '',
r = e ? 'dgimsy' : 'gimsy',
i = function(e, r) {
  Object.defineProperty(t, e, {
    get: function() {
      return n += r, !0;
    }
  });
},
a = {
  dotAll: 's',
  global: 'g',
  ignoreCase: 'i',
  multiline: 'm',
  sticky: 'y'
};
  for (var s in (e && (a.hasIndices = 'd'), a))
i(s, a[s]);
  return Object.getOwnPropertyDescriptor(u, 'flags').get.call(t) !== r || n !== r;
}) && a(u, 'flags', {
  configurable: !0,
  get: s
});