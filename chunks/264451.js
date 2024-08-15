n.d(t, {
  Zo: function() {
return r;
  },
  m5: function() {
return i;
  }
});
var s = n(913527),
  a = n.n(s);

function i(e, t) {
  let n = '',
s = e >= 0;
  return s && (n += '+'), t ? n += ''.concat(Math.floor(100 * e), '%') : n += e, {
formattedValue: n,
isPositive: s
  };
}

function r(e, t) {
  return null != e ? a()(e).format(t) : '-';
}