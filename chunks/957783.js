a(47120);
var t = a(735250),
  r = a(470079),
  i = a(120356),
  n = a.n(i),
  l = a(481060),
  o = a(219369),
  c = a(981631),
  d = a(689938),
  E = a(457172);
s.Z = e => {
  let {
headerId: s,
guild: a,
onAgreedChange: i
  } = e, [S, _] = r.useState(!1), [m, R] = r.useState(!1), [x, u] = r.useState(!1);
  r.useEffect(() => {
S && m && x ? i(!0) : i(!1);
  }, [
S,
m,
x,
i
  ]);
  let g = d.Z.Messages.SERVER_DISCOVERY_RULES_COMPLY_GUIDELINES.format({
onCommunityGuidelinesClick: () => (0, o.lW)({
  articleId: c.BhN.PUBLIC_GUILD_GUILDLINES,
  guildId: a.id,
  modalStep: o.tK.AGREE_TO_RULES
}),
onDiscoveryGuidelinesClick: () => (0, o.lW)({
  articleId: c.BhN.SERVER_DISCOVERY_GUIDELINES,
  guildId: a.id,
  modalStep: o.tK.AGREE_TO_RULES
})
  });
  return (0, t.jsxs)('div', {
className: E.container,
children: [
  (0, t.jsxs)('div', {
    className: E.content,
    children: [
      (0, t.jsx)('div', {
        className: n()(E.stepImage, E.checkImage)
      }),
      (0, t.jsx)(l.Heading, {
        variant: 'heading-xl/semibold',
        className: E.header,
        id: s,
        children: d.Z.Messages.SERVER_DISCOVERY_AGREE_TO_RULES
      }),
      (0, t.jsx)(l.Text, {
        color: 'none',
        variant: 'text-md/normal',
        className: E.headerCaption,
        children: d.Z.Messages.SERVER_DISCOVERY_RULES_PAGE_SUBHEADING
      })
    ]
  }),
  (0, t.jsxs)('div', {
    className: E.form,
    children: [
      (0, t.jsx)(l.FormTitle, {
        required: !0,
        children: d.Z.Messages.SERVER_DISCOVERY_RULES_FORM_LABEL
      }),
      (0, t.jsx)('div', {
        className: E.checkboxWrapper,
        children: (0, t.jsxs)(l.Checkbox, {
          type: l.Checkbox.Types.ROW,
          value: S,
          align: l.Checkbox.Aligns.TOP,
          onChange: () => _(!S),
          children: [
            (0, t.jsx)(l.Text, {
              variant: 'text-md/semibold',
              className: E.checkboxTitle,
              children: d.Z.Messages.SERVER_DISCOVERY_RULES_HEALTHY_ENV_HEADING
            }),
            (0, t.jsx)(l.Text, {
              variant: 'text-sm/normal',
              children: d.Z.Messages.SERVER_DISCOVERY_RULES_HEALTHY_ENV_DESCRIPTION
            })
          ]
        })
      }),
      (0, t.jsx)('div', {
        className: E.checkboxWrapper,
        children: (0, t.jsxs)(l.Checkbox, {
          type: l.Checkbox.Types.ROW,
          align: l.Checkbox.Aligns.TOP,
          value: m,
          onChange: () => R(!m),
          children: [
            (0, t.jsx)(l.Text, {
              variant: 'text-md/semibold',
              className: E.checkboxTitle,
              children: d.Z.Messages.SERVER_DISCOVERY_RULES_SEXUAL_CONTENT_HEADING
            }),
            (0, t.jsx)(l.Text, {
              variant: 'text-sm/normal',
              children: d.Z.Messages.SERVER_DISCOVERY_RULES_SEXUAL_CONTENT_DESCRIPTION
            })
          ]
        })
      }),
      (0, t.jsx)('div', {
        className: E.checkboxWrapper,
        children: (0, t.jsxs)(l.Checkbox, {
          type: l.Checkbox.Types.ROW,
          align: l.Checkbox.Aligns.TOP,
          value: x,
          onChange: () => u(!x),
          children: [
            (0, t.jsx)(l.Text, {
              variant: 'text-md/semibold',
              className: E.checkboxTitle,
              children: g
            }),
            (0, t.jsx)(l.Text, {
              variant: 'text-sm/normal',
              children: d.Z.Messages.SERVER_DISCOVERY_RULES_COMPLY_GUIDELINES_DESCRIPTION
            })
          ]
        })
      })
    ]
  })
]
  });
};