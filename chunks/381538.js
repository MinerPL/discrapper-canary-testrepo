var t = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable;
e.exports = ! function() {
  try {
if (!Object.assign)
  return !1;
var e = new String('abc');
if (e[5] = 'de', '5' === Object.getOwnPropertyNames(e)[0])
  return !1;
for (var t = {}, n = 0; n < 10; n++)
  t['_' + String.fromCharCode(n)] = n;
var r = Object.getOwnPropertyNames(t).map(function(e) {
  return t[e];
});
if ('0123456789' !== r.join(''))
  return !1;
var i = {};
if ('abcdefghijklmnopqrst'.split('').forEach(function(e) {
    i[e] = e;
  }), 'abcdefghijklmnopqrst' !== Object.keys(Object.assign({}, i)).join(''))
  return !1;
return !0;
  } catch (e) {
return !1;
  }
}() ? function(e, i) {
  for (var a, o, s = function(e) {
  if (null == e)
    throw TypeError('Object.assign cannot be called with null or undefined');
  return Object(e);
}(e), l = 1; l < arguments.length; l++) {
for (var u in (a = Object(arguments[l]), a))
  n.call(a, u) && (s[u] = a[u]);
if (t) {
  o = t(a);
  for (var c = 0; c < o.length; c++)
    r.call(a, o[c]) && (s[o[c]] = a[o[c]]);
}
  }
  return s;
} : Object.assign;