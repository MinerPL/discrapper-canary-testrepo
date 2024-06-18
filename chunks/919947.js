"use strict";
var t = a(735250);
a(470079);
var i = a(120356),
  r = a.n(i),
  l = a(481060),
  n = a(450474),
  o = a(987134),
  d = a(296386),
  c = a(150192),
  E = a(731455),
  R = a(689938),
  S = a(353964);
s.Z = e => {
  let {
    guild: s,
    guildMetadata: a,
    headerId: i
  } = e, m = c.Z.getPrimaryCategories().map(e => {
    let {
      categoryId: s,
      name: a
    } = e;
    return {
      value: s,
      label: a
    }
  });
  return (0, t.jsxs)("div", {
    className: S.container,
    children: [(0, t.jsxs)("div", {
      className: S.content,
      children: [(0, t.jsx)("div", {
        className: r()(S.stepImage, S.tagImage)
      }), (0, t.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        className: S.header,
        id: i,
        children: R.Z.Messages.SERVER_DISCOVERY_CATEGORY
      }), (0, t.jsx)(l.Text, {
        color: "none",
        variant: "text-md/normal",
        className: S.headerCaption,
        children: R.Z.Messages.SERVER_DISCOVERY_SEARCH_SUBHEADING
      })]
    }), (0, t.jsxs)(l.FormSection, {
      className: S.form,
      children: [(0, t.jsx)(l.FormTitle, {
        required: !0,
        children: R.Z.Messages.SERVER_DISCOVERY_CATEGORY
      }), (0, t.jsx)(l.FormText, {
        type: l.FormTextTypes.DESCRIPTION,
        className: S.description,
        children: R.Z.Messages.SERVER_DISCOVERY_CATEGORY_INPUT_SUBLABEL
      }), (0, t.jsx)(o.Z, {
        value: a.primaryCategoryId === E.o3 ? null : a.primaryCategoryId,
        placeholder: R.Z.Messages.SELECT,
        searchable: !0,
        clearable: !1,
        options: m,
        onChange: e => {
          var a;
          (null == s ? void 0 : s.id) != null && d.TA(null == s ? void 0 : s.id, null !== (a = null == e ? void 0 : e.value) && void 0 !== a ? a : E.o3)
        },
        maxMenuHeight: 250
      })]
    }), (0, t.jsxs)(l.FormSection, {
      className: S.form,
      children: [(0, t.jsx)(l.FormTitle, {
        children: R.Z.Messages.SERVER_DISCOVERY_SUBCATEGORY_INPUT_LABEL
      }), (0, t.jsx)(l.FormText, {
        type: l.FormTextTypes.DESCRIPTION,
        className: S.description,
        children: R.Z.Messages.SERVER_DISCOVERY_SUBCATEGORY_INPUT_SUBLABEL
      }), (0, t.jsx)(n.Z, {
        guild: s,
        guildMetadata: a,
        menuPlacement: o.Z.MenuPlacements.TOP
      })]
    })]
  })
}