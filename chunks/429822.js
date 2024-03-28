"use strict";
n("771008");
var r = n("327192"),
  a = n("141603"),
  o = n("875604"),
  i = n("996211"),
  l = Array.prototype,
  u = {
    DOMTokenList: !0,
    NodeList: !0
  };
e.exports = function(e) {
  var t = e.values;
  return e === l || o(l, e) && t === l.values || a(u, r(e)) ? i : t
}