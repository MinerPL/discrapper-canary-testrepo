var n = s(735250);
s(470079);
var a = s(866442),
  i = s(481060),
  r = s(452693);
t.Z = function(e) {
  let {
colorKey: t,
value: s,
onChange: o,
title: l
  } = e;
  return (0, n.jsxs)(i.FormItem, {
children: [
  (0, n.jsx)(i.FormTitle, {
    tag: i.FormTitleTags.H5,
    children: l
  }),
  (0, n.jsx)(i.Popout, {
    renderPopout: e => (0, n.jsx)(i.CustomColorPicker, {
      ...e,
      value: s,
      onChange: e => o(t, (0, a.Rf)(e))
    }),
    children: e => (0, n.jsx)(i.Clickable, {
      ...e,
      tag: 'span',
      'aria-label': 'Select a color',
      className: r.swatchContainer,
      style: {
        backgroundColor: s
      },
      children: (0, n.jsx)(i.EyeDropperIcon, {
        size: 'xs',
        color: 'currentColor',
        className: r.swatchIcon
      })
    })
  })
]
  });
};