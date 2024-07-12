var t = a(735250);
a(470079);
var r = a(120356),
  i = a.n(r),
  n = a(481060),
  l = a(450474),
  o = a(987134),
  c = a(296386),
  d = a(150192),
  E = a(731455),
  S = a(689938),
  _ = a(244868);
s.Z = e => {
  let {
guild: s,
guildMetadata: a,
headerId: r
  } = e, m = d.Z.getPrimaryCategories().map(e => {
let {
  categoryId: s,
  name: a
} = e;
return {
  value: s,
  label: a
};
  });
  return (0, t.jsxs)('div', {
className: _.container,
children: [
  (0, t.jsxs)('div', {
    className: _.content,
    children: [
      (0, t.jsx)('div', {
        className: i()(_.stepImage, _.tagImage)
      }),
      (0, t.jsx)(n.Heading, {
        variant: 'heading-xl/semibold',
        className: _.header,
        id: r,
        children: S.Z.Messages.SERVER_DISCOVERY_CATEGORY
      }),
      (0, t.jsx)(n.Text, {
        color: 'none',
        variant: 'text-md/normal',
        className: _.headerCaption,
        children: S.Z.Messages.SERVER_DISCOVERY_SEARCH_SUBHEADING
      })
    ]
  }),
  (0, t.jsxs)(n.FormSection, {
    className: _.form,
    children: [
      (0, t.jsx)(n.FormTitle, {
        required: !0,
        children: S.Z.Messages.SERVER_DISCOVERY_CATEGORY
      }),
      (0, t.jsx)(n.FormText, {
        type: n.FormTextTypes.DESCRIPTION,
        className: _.description,
        children: S.Z.Messages.SERVER_DISCOVERY_CATEGORY_INPUT_SUBLABEL
      }),
      (0, t.jsx)(o.Z, {
        value: a.primaryCategoryId === E.o3 ? null : a.primaryCategoryId,
        placeholder: S.Z.Messages.SELECT,
        searchable: !0,
        clearable: !1,
        options: m,
        onChange: e => {
          var a;
          (null == s ? void 0 : s.id) != null && c.TA(null == s ? void 0 : s.id, null !== (a = null == e ? void 0 : e.value) && void 0 !== a ? a : E.o3);
        },
        maxMenuHeight: 250
      })
    ]
  }),
  (0, t.jsxs)(n.FormSection, {
    className: _.form,
    children: [
      (0, t.jsx)(n.FormTitle, {
        children: S.Z.Messages.SERVER_DISCOVERY_SUBCATEGORY_INPUT_LABEL
      }),
      (0, t.jsx)(n.FormText, {
        type: n.FormTextTypes.DESCRIPTION,
        className: _.description,
        children: S.Z.Messages.SERVER_DISCOVERY_SUBCATEGORY_INPUT_SUBLABEL
      }),
      (0, t.jsx)(l.Z, {
        guild: s,
        guildMetadata: a,
        menuPlacement: o.Z.MenuPlacements.TOP
      })
    ]
  })
]
  });
};