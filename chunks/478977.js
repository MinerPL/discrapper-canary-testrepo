var n = t(735250);
t(470079);
var a = t(866442),
  i = t(481060),
  r = t(673105);
s.Z = function(e) {
  let {
colorKey: s,
value: t,
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
      value: t,
      onChange: e => o(s, (0, a.Rf)(e))
    }),
    children: e => (0, n.jsx)(i.Clickable, {
      ...e,
      tag: 'span',
      'aria-label': 'Select a color',
      className: r.swatchContainer,
      style: {
        backgroundColor: t
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