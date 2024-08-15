var n = r(466293),
  a = r(146945),
  o = r(251584),
  i = n ? n.toStringTag : void 0;
e.exports = function(e) {
  return null == e ? void 0 === e ? '[object Undefined]' : '[object Null]' : i && i in Object(e) ? a(e) : o(e);
};