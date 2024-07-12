n.d(t, {
  Z: function() {
return o;
  }
});
var a = n(735250);
n(470079);
var r = n(481060),
  i = n(406877);

function o(e) {
  let {
guildId: t,
productId: n,
attachmentId: o,
...s
  } = e, {
isLoading: l,
downloadAttachment: c
  } = (0, i.Z)(t, n);
  return (0, a.jsx)(r.Button, {
...s,
submitting: l,
onClick: function() {
  c(o);
}
  });
}