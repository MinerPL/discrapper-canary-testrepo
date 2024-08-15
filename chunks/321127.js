n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(968195);

function o(e) {
  let {
attributes: t,
children: n,
leaf: i,
text: o
  } = e;
  if (i.commandName) {
let e = a()(s.commandName, {
  [s.emptyText]: '' === o.text
});
return (0, r.jsx)('span', {
  ...t,
  className: e,
  spellCheck: !1,
  children: n
});
  }
  return null;
}