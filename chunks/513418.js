n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(512722),
  i = n.n(r),
  a = n(709054);

function o(e) {
  i()(e.length <= 2 || a.default.compare(e[0].id, e[e.length - 1].id) >= 0, 'messages must be sorted in descending order.');
}