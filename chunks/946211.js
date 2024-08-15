t.d(n, {
  L: function() {
return c;
  }
});
var r = t(735250);
t(470079);
var a = t(409813),
  o = t(443650),
  i = t(464797),
  s = t(506435);

function l(e) {
  let {
onClose: n
  } = e, {
guildProductListing: t
  } = (0, i._)();
  return (0, r.jsx)(o.Z, {
guildProductListing: t,
className: s.header,
onClose: n
  });
}
let c = (e, n, t) => t === a.h8.CONFIRM ? null : (0, r.jsx)(l, {
  onClose: () => n(!1)
});