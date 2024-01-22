"use strict";
var r = n("37549")("%TypeError%"),
  i = n("737891"),
  o = n("504187"),
  s = n("971043"),
  a = n("701222"),
  c = n("604050"),
  u = n("300344"),
  d = n("6943"),
  l = n("552302"),
  f = n("865435");
e.exports = function(e, t, n) {
  if ("Object" !== f(e)) throw new r("Assertion failed: Type(O) is not Object");
  if (!u(t)) throw new r("Assertion failed: IsPropertyKey(P) is not true");
  var p = i({
    Type: f,
    IsDataDescriptor: c,
    IsAccessorDescriptor: a
  }, n) ? n : l(n);
  if (!i({
      Type: f,
      IsDataDescriptor: c,
      IsAccessorDescriptor: a
    }, p)) throw new r("Assertion failed: Desc is not a valid Property Descriptor");
  return o(c, d, s, e, t, p)
}