s.d(n, {
  s: function() {
return o;
  }
});
var l = s(735250);
s(470079);
var t = s(481060),
  i = s(700582),
  r = s(51144),
  a = s(689938),
  c = s(6805);
let o = e => {
  let {
giftRecipient: n
  } = e;
  return null == n ? null : (0, l.jsxs)('div', {
className: c.content,
children: [
  (0, l.jsx)(t.FormTitle, {
    children: a.Z.Messages.FORM_LABEL_SEND_TO
  }),
  (0, l.jsxs)('div', {
    className: c.giftRecipientInfo,
    children: [
      (0, l.jsx)(i.Z, {
        user: n,
        className: c.__invalid_giftRecipient,
        size: t.AvatarSizes.SIZE_20
      }),
      (0, l.jsx)(t.Heading, {
        className: c.giftRecipientName,
        variant: 'text-md/normal',
        children: r.ZP.getName(n)
      }),
      (0, l.jsx)(t.Heading, {
        className: c.giftRecipientTag,
        variant: 'text-md/normal',
        children: r.ZP.getUserTag(n)
      })
    ]
  })
]
  });
};