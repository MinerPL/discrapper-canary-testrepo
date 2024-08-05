t(47120);
var a = t(735250);
t(470079);
var r = t(120356),
  i = t.n(r),
  s = t(481060),
  o = t(18100),
  l = t(308083),
  c = t(689938),
  d = t(363778);
n.Z = e => {
  var n, t, r;
  let {
guildId: u,
handleUpdate: m,
progress: _,
errors: C
  } = e, {
wildcardDescriptors: f,
description: h
  } = _, x = (e, n) => {
let t = [...f];
t[n] = e, m({
  wildcardDescriptors: t
});
  };
  return (0, a.jsxs)('div', {
className: d.slideContent,
children: [
  (0, a.jsx)(s.Heading, {
    variant: 'heading-xxl/medium',
    className: d.title,
    children: c.Z.Messages.CLAN_SETUP_DESCRIPTION_TITLE
  }),
  (0, a.jsx)(s.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    className: d.subtitle,
    children: c.Z.Messages.CLAN_SETUP_DESCRIPTION_SUBTITLE
  }),
  (null == C ? void 0 : C.description) != null && (0, a.jsx)(s.Text, {
    variant: 'text-sm/normal',
    color: 'status-danger',
    className: d.errorText,
    children: C.description
  }),
  (0, a.jsxs)('div', {
    className: d.content,
    children: [
      (0, a.jsxs)('div', {
        className: d.mainPanelContainer,
        children: [
          (0, a.jsx)('div', {
            className: d.maxWidthContainer,
            children: (0, a.jsx)(s.TextArea, {
              className: d.input,
              maxLength: l.Us,
              onChange: e => m({
                description: e
              }),
              value: null != h ? h : '',
              rows: 5,
              autoFocus: !0,
              autosize: !0,
              placeholder: c.Z.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
            })
          }),
          (0, a.jsx)(s.Text, {
            variant: 'text-sm/medium',
            color: 'header-secondary',
            className: d.optionalTag,
            children: c.Z.Messages.CLAN_SETUP_OPTIONAL
          }),
          (0, a.jsx)(s.Text, {
            variant: 'text-md/normal',
            color: 'header-secondary',
            className: d.title,
            children: c.Z.Messages.CLAN_SETUP_WILDCARDS_SUBTITLE
          }),
          (null == C ? void 0 : C.wildcardDescriptors) != null && (0, a.jsx)(s.Text, {
            variant: 'text-sm/normal',
            color: 'status-danger',
            className: d.errorText,
            children: C.wildcardDescriptors
          }),
          (0, a.jsxs)('div', {
            className: d.wildcardRow,
            children: [
              (0, a.jsx)(s.TextInput, {
                inputClassName: i()(d.input, d.wildcardInput),
                value: null !== (n = f[0]) && void 0 !== n ? n : '',
                onChange: e => x(e, 0),
                maxLength: l.TY,
                placeholder: l.LK['0']
              }),
              (0, a.jsx)(s.TextInput, {
                inputClassName: i()(d.input, d.wildcardInput),
                value: null !== (t = f[1]) && void 0 !== t ? t : '',
                onChange: e => x(e, 1),
                maxLength: l.TY,
                placeholder: l.LK['1']
              }),
              (0, a.jsx)(s.TextInput, {
                inputClassName: i()(d.input, d.wildcardInput),
                value: null !== (r = f[2]) && void 0 !== r ? r : '',
                onChange: e => x(e, 2),
                maxLength: l.TY,
                placeholder: l.LK['2']
              })
            ]
          })
        ]
      }),
      (0, a.jsx)('div', {
        className: d.fixedWidthSidebar,
        children: (0, a.jsx)(o.Z, {
          guildId: u,
          progress: _,
          maskTraits: !0
        })
      })
    ]
  })
]
  });
};