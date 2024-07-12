var a, c, t = s(735250);
s(470079);
var i = s(481060),
  l = s(285952),
  o = s(634724);
(a = c || (c = {})).UPGRADE = 'UPGRADE', a.CANCEL = 'CANCEL', a.UNVERIFIED = 'UNVERIFIED', a.UNCLAIMED = 'UNCLAIMED', a.GRANDFATHERED = 'GRANDFATHERED';
let r = {
UPGRADE: 'imageUpgrade',
CANCEL: 'imageCancel',
UNVERIFIED: 'imageUnverified',
UNCLAIMED: 'imageUnclaimed',
GRANDFATHERED: 'imageCancel'
  },
  d = e => {
let {
  children: n,
  ...s
} = e;
return (0, t.jsx)(i.ModalRoot, {
  ...s,
  children: n
});
  };
d.Header = e => {
  let {
children: n,
onClose: s
  } = e;
  return (0, t.jsxs)(i.ModalHeader, {
justify: l.Z.Justify.BETWEEN,
separator: !1,
children: [
  (0, t.jsx)(i.FormTitle, {
    tag: i.FormTitleTags.H4,
    children: n
  }),
  null != s ? (0, t.jsx)(i.ModalCloseButton, {
    className: o.__invalid_closeIcon,
    onClick: s
  }) : null
]
  });
}, d.Content = e => {
  let {
children: n,
type: s
  } = e;
  return (0, t.jsxs)(i.ModalContent, {
children: [
  (0, t.jsx)('div', {
    className: o[r[s]]
  }),
  (0, t.jsx)('div', {
    className: o.message,
    children: n
  })
]
  });
}, d.Footer = e => {
  let {
primary: n,
primaryRenderer: s,
secondary: a
  } = e;
  return (0, t.jsx)(i.ModalFooter, {
children: (0, t.jsxs)(l.Z, {
  justify: l.Z.Justify.END,
  children: [
    null != a ? (0, t.jsx)(i.Button, {
      onClick: a.onClick,
      look: i.Button.Looks.LINK,
      innerClassName: o.secondaryButton,
      children: a.label
    }) : null,
    null != n ? (0, t.jsx)(i.Button, {
      onClick: n.onClick,
      color: i.Button.Colors.BRAND,
      children: n.label
    }) : s
  ]
})
  });
}, d.Types = c, n.Z = d;