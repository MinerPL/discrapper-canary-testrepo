n(411104);
var i, a, s = n(735250);
n(470079);
var r = n(120356),
  l = n.n(r),
  o = n(442837),
  c = n(481060),
  d = n(700582),
  u = n(451478),
  _ = n(689938),
  h = n(390826);
(a = i || (i = {}))[a.STAFF_NOTES = 1] = 'STAFF_NOTES';
let E = o.ZP.connectStores([u.Z], () => ({
animate: u.Z.isFocused()
  }))(e => {
let {
  user: t,
  className: n,
  animate: i
} = e;
return (0, s.jsxs)('div', {
  className: l()(h.staffReviewHeader, n),
  children: [
    (0, s.jsx)(d.Z, {
      size: c.AvatarSizes.SIZE_32,
      user: t,
      animate: i
    }),
    (0, s.jsxs)('div', {
      className: h.headerText,
      children: [
        (0, s.jsx)('div', {
          className: h.label,
          children: _.Z.Messages.APPLICATION_STORE_STAFF_PICK
        }),
        (0, s.jsx)('div', {
          className: h.username,
          children: t.username
        })
      ]
    })
  ]
});
  }),
  I = e => {
let {
  data: t,
  className: n
} = e;
if (1 === t.type) {
  if (null == t.staffNotes)
    return null;
  let {
    user: e,
    content: i
  } = t.staffNotes;
  return null == e ? null : (0, s.jsxs)('div', {
    className: n,
    children: [
      (0, s.jsx)(E, {
        user: e,
        className: h.header
      }),
      (0, s.jsx)('div', {
        className: h.notes,
        children: i
      })
    ]
  });
}
throw Error('Unknown type');
  };
I.Types = i, t.Z = I;