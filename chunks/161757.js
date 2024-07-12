var n = r(497549),
  _ = r(700728),
  a = r(98958),
  i = r(402428),
  o = r(691363);
t.exports = function(t) {
  return 'function' == typeof t ? t : null == t ? a : 'object' == typeof t ? i(t) ? _(t[0], t[1]) : n(t) : o(t);
};