n("222007");
var DataView = n("864259"),
  Map = n("516863"),
  Promise = n("23588"),
  Set = n("892933"),
  WeakMap = n("445269"),
  r = n("33426"),
  i = n("6906"),
  o = "[object Map]",
  s = "[object Promise]",
  a = "[object Set]",
  c = "[object WeakMap]",
  u = "[object DataView]",
  d = i(DataView),
  l = i(Map),
  f = i(Promise),
  p = i(Set),
  h = i(WeakMap),
  g = r;
(DataView && g(new DataView(new ArrayBuffer(1))) != u || Map && g(new Map) != o || Promise && g(Promise.resolve()) != s || Set && g(new Set) != a || WeakMap && g(new WeakMap) != c) && (g = function(e) {
  var t = r(e),
    n = "[object Object]" == t ? e.constructor : void 0,
    g = n ? i(n) : "";
  if (g) switch (g) {
    case d:
      return u;
    case l:
      return o;
    case f:
      return s;
    case p:
      return a;
    case h:
      return c
  }
  return t
}), e.exports = g