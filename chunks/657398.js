var n = r(466293),
  _ = r(146945),
  a = r(251584),
  i = n ? n.toStringTag : void 0;
t.exports = function(t) {
  return null == t ? void 0 === t ? '[object Undefined]' : '[object Null]' : i && i in Object(t) ? _(t) : a(t);
};