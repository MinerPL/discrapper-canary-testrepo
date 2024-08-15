n.d(t, {
  Z: function() {
return u;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(782568),
  s = n(689938),
  o = n(491066);
let l = e => {
  let {
data: {
  url: t,
  link_text: n,
  link_description: s,
  is_localized: l
}
  } = e;
  return l ? (0, r.jsxs)(i.Clickable, {
role: 'link',
className: o.linkButton,
onClick: () => {
  (0, a.Z)(t);
},
children: [
  (0, r.jsxs)('div', {
    className: o.linkTextContainer,
    children: [
      (0, r.jsx)(i.Text, {
        className: o.__invalid_linkText,
        variant: 'text-md/semibold',
        children: n
      }),
      null != s && '' !== s && (0, r.jsx)(i.Text, {
        variant: 'text-md/normal',
        color: 'text-muted',
        children: s
      })
    ]
  }),
  (0, r.jsx)(i.WindowLaunchIcon, {
    size: 'md',
    color: 'currentColor',
    className: o.linkIcon
  })
]
  }) : null;
};

function u(e) {
  let {
elements: t
  } = e;
  if (null == t || 0 === t.length || null == t.find(e => {
  let {
    data: t
  } = e;
  return t.is_localized;
}))
return null;
  let n = t.map((e, t) => {
  let {
    data: n
  } = e;
  return (0, r.jsx)(l, {
    data: n
  }, 'external-link+'.concat(t));
}),
a = t.some(e => {
  let {
    data: t
  } = e;
  return t.is_header_hidden;
});
  return (0, r.jsxs)('div', {
className: o.linksContainer,
children: [
  !a && (0, r.jsx)(i.Heading, {
    variant: 'heading-sm/semibold',
    color: 'header-secondary',
    className: o.header,
    children: s.Z.Messages.LEARN_MORE
  }),
  n
]
  });
}