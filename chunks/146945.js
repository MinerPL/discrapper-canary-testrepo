var n = r(466293),
  _ = Object.prototype,
  a = _.hasOwnProperty,
  i = _.toString,
  o = n ? n.toStringTag : void 0;
t.exports = function(t) {
  var e = a.call(t, o),
r = t[o];
  try {
t[o] = void 0;
var n = !0;
  } catch (t) {}
  var _ = i.call(t);
  return n && (e ? t[o] = r : delete t[o]), _;
};