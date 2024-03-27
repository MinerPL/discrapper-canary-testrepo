var Symbol = l("506264"),
  n = l("971433"),
  a = l("486036"),
  s = Symbol ? Symbol.isConcatSpreadable : void 0;
e.exports = function(e) {
  return a(e) || n(e) || !!(s && e && e[s])
}