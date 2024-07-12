t.d(n, {
  Z: function() {
return s;
  }
});
var o = t(735250);
t(470079);
var r = t(442837),
  a = t(481060),
  c = t(223245),
  i = t(246946),
  l = t(689938);

function s() {
  let e = (0, r.e7)([i.Z], () => i.Z.enabled, []);
  return (0, o.jsx)(a.MenuCheckboxItem, {
id: 'streamer-mode-toggle',
label: l.Z.Messages.ENABLE_STREAMER_MODE_LABEL,
action: () => {
  c.Z.setEnabled(!e);
},
checked: e
  });
}