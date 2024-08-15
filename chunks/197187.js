var e = n(962557),
  i = Function.prototype,
  o = i.apply,
  u = i.call;
t.exports = 'object' == typeof Reflect && Reflect.apply || (e ? u.bind(o) : function() {
  return u.apply(o, arguments);
});