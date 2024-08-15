var n = t(735250);
t(470079);
var a = t(120356),
  i = t.n(a),
  r = t(481060),
  o = t(673105);
s.Z = function(e) {
  let {
children: s,
withBorder: t = !1
  } = e;
  return (0, n.jsx)(r.FocusBlock, {
children: (0, n.jsx)(r.Card, {
  className: i()(o.componentPreviewWrapper, {
    [o.componentPreviewWrapperBordered]: t
  }),
  outline: t,
  children: (0, n.jsx)('div', {
    className: o.componentPreview,
    onClickCapture: function(e) {
      e.stopPropagation();
    },
    children: s
  })
})
  });
};