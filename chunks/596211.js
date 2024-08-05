n.d(t, {
  Z: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(406877);

function r(e) {
  let {
guildId: t,
productId: n,
attachmentId: r,
...l
  } = e, {
isLoading: o,
downloadAttachment: c
  } = (0, a.Z)(t, n);
  return (0, i.jsx)(s.Button, {
...l,
submitting: o,
onClick: function() {
  c(r);
}
  });
}