"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("866442"),
  l = s("481060"),
  i = s("703685"),
  r = s("214623"),
  o = s("836058");
t.default = function(e) {
  let {
    colorKey: t,
    value: s,
    onChange: d,
    title: u
  } = e;
  return (0, a.jsxs)(l.FormItem, {
    children: [(0, a.jsx)(l.FormTitle, {
      tag: l.FormTitleTags.H5,
      children: u
    }), (0, a.jsx)(l.Popout, {
      renderPopout: e => (0, a.jsx)(i.CustomColorPicker, {
        ...e,
        value: s,
        onChange: e => d(t, (0, n.int2hex)(e))
      }),
      children: e => (0, a.jsx)(l.Clickable, {
        ...e,
        tag: "span",
        "aria-label": "Select a color",
        className: o.swatchContainer,
        style: {
          backgroundColor: s
        },
        children: (0, a.jsx)(r.default, {
          width: 16,
          height: 16,
          className: o.swatchIcon
        })
      })
    })]
  })
}