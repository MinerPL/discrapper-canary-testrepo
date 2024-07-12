n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  l = n(481060),
  s = n(846027),
  r = n(131951),
  o = n(36703),
  c = n(689938);

function d() {
  let e = (0, a.e7)([r.Z], () => (0, o.P)(r.Z.getInputVolume()));
  return (0, i.jsx)(l.MenuControlItem, {
id: 'input',
label: c.Z.Messages.FORM_LABEL_INPUT_VOLUME,
control: (t, n) => (0, i.jsx)(l.MenuSliderControl, {
  ...t,
  ref: n,
  value: e,
  onChange: e => s.Z.setInputVolume((0, o.A)(e)),
  'aria-label': c.Z.Messages.FORM_LABEL_INPUT_VOLUME
})
  });
}