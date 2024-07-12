var r = n(161581),
  i = n(325008),
  a = n(4340),
  o = n(572609),
  s = n(936940),
  l = r.RegExp,
  u = l.prototype;
i && s(function() {
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
  for (var o in (e && (a.hasIndices = 'd'), a))
i(o, a[o]);
  return Object.getOwnPropertyDescriptor(u, 'flags').get.call(t) !== r || n !== r;
}) && a(u, 'flags', {
  configurable: !0,
  get: o
});