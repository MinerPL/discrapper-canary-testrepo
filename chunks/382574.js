var a = t(735250);
t(470079);
var r = t(73880),
  i = t(137158),
  s = t(689938),
  o = t(944309);
n.Z = function(e) {
  let {
formField: n,
index: t,
isDragEnabled: l,
isDropHovered: c,
onDrop: d,
onEdit: u,
onRemove: m,
canRemove: _,
actionsLocation: f
  } = e, {
label: C,
placeholder: h
  } = n;
  return (0, a.jsx)(i.Z, {
field: n,
index: t,
isDragEnabled: l,
isDropHovered: c,
onDrop: d,
onEdit: u,
onRemove: m,
title: C,
canRemove: _,
actionsLocation: f,
children: (0, a.jsx)(r.Q8, {
  className: o.fieldBackground,
  placeholder: null != h ? h : s.Z.Messages.MEMBER_VERIFICATION_ANSWER_PLACEHOLDER,
  disabled: !0
})
  });
};