n.d(t, {
  c: function() {
return s;
  }
});
var i = n(913527),
  a = n.n(i),
  l = n(709054);
let s = e => {
  let t = l.default.extractTimestamp(e);
  return !a()().isBefore(a()(t).add(a().duration(15, 'days')));
};