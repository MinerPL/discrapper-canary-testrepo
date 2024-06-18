var n = e(466293),
  o = e(146945),
  i = e(251584),
  a = n ? n.toStringTag : void 0;
t.exports = function(t) {
  return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? o(t) : i(t)
}