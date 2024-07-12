var n = r(657398),
  _ = r(389109);
t.exports = function(t) {
  return 'symbol' == typeof t || _(t) && '[object Symbol]' == n(t);
};