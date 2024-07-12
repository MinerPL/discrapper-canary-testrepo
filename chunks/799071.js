s.d(t, {
  Z: function() {
return o;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(173511),
  r = s(481060);

function o() {
  let [e, t] = a.useState('');
  return (0, n.jsxs)(r.FormSection, {
title: 'Text components',
tag: r.FormTitleTags.H1,
children: [
  (0, n.jsx)(r.TextInput, {
    placeholder: 'Enter custom text...',
    onChange: e => t(e)
  }),
  (0, n.jsx)(r.FormDivider, {
    style: {
      margin: '10px 0'
    }
  }),
  i.O.map(t => 'code' === t ? null : (0, n.jsx)(r.Text, {
    variant: t,
    children: '' !== e ? ''.concat(e, ' (').concat(t, ')') : t
  }, t))
]
  });
}