s.d(t, {
  Z: function() {
return _;
  }
});
var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(873546),
  o = s(481060),
  l = s(993413),
  c = s(689938),
  d = s(265503);

function _(e) {
  let {
children: t,
className: s,
layoutClassName: a,
profilePreview: _,
previewTitle: E
  } = e, u = () => (0, n.jsx)(l.Z, {
title: null != E ? E : c.Z.Messages.PROFILE_CUSTOMIZATION_PREVIEW,
className: d.preview,
children: _
  });
  return (0, n.jsx)('div', {
className: s,
children: (0, n.jsxs)(o.FormSection, {
  className: d.profileCustomizationSection,
  children: [
    r.tq && u(),
    (0, n.jsxs)('div', {
      className: i()(d.baseLayout, a),
      children: [
        t,
        !r.tq && u()
      ]
    })
  ]
})
  });
}