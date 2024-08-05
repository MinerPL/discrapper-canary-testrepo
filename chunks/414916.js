var r = n(690244)('%TypeError%'),
  i = n(813426),
  a = n(828148),
  s = n(632384);
e.exports = function(e, t) {
  if ('Object' !== s(e))
throw new r('Assertion failed: Type(O) is not Object');
  if (!a(t))
throw new r('Assertion failed: IsPropertyKey(P) is not true, got ' + i(t));
  return e[t];
};