"use strict";
a.r(s);
var t = a("735250");
a("470079");
var l = a("803997"),
  i = a.n(l),
  r = a("481060"),
  d = a("450474"),
  n = a("987134"),
  o = a("296386"),
  c = a("150192"),
  E = a("731455"),
  u = a("689938"),
  S = a("190500");
s.default = e => {
  let {
    guild: s,
    guildMetadata: a,
    headerId: l
  } = e, R = c.default.getPrimaryCategories().map(e => {
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
        className: i()(S.stepImage, S.tagImage)
      }), (0, t.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        className: S.header,
        id: l,
        children: u.default.Messages.SERVER_DISCOVERY_CATEGORY
      }), (0, t.jsx)(r.Text, {
        color: "none",
        variant: "text-md/normal",
        className: S.headerCaption,
        children: u.default.Messages.SERVER_DISCOVERY_SEARCH_SUBHEADING
      })]
    }), (0, t.jsxs)(r.FormSection, {
      className: S.form,
      children: [(0, t.jsx)(r.FormTitle, {
        required: !0,
        children: u.default.Messages.SERVER_DISCOVERY_CATEGORY
      }), (0, t.jsx)(r.FormText, {
        type: r.FormTextTypes.DESCRIPTION,
        className: S.description,
        children: u.default.Messages.SERVER_DISCOVERY_CATEGORY_INPUT_SUBLABEL
      }), (0, t.jsx)(n.default, {
        value: a.primaryCategoryId === E.DEFAULT_DISCOVERY_CATEGORY_ID ? null : a.primaryCategoryId,
        placeholder: u.default.Messages.SELECT,
        searchable: !0,
        clearable: !1,
        options: R,
        onChange: e => {
          var a;
          (null == s ? void 0 : s.id) != null && o.updateGuildPrimaryCategory(null == s ? void 0 : s.id, null !== (a = null == e ? void 0 : e.value) && void 0 !== a ? a : E.DEFAULT_DISCOVERY_CATEGORY_ID)
        },
        maxMenuHeight: 250
      })]
    }), (0, t.jsxs)(r.FormSection, {
      className: S.form,
      children: [(0, t.jsx)(r.FormTitle, {
        children: u.default.Messages.SERVER_DISCOVERY_SUBCATEGORY_INPUT_LABEL
      }), (0, t.jsx)(r.FormText, {
        type: r.FormTextTypes.DESCRIPTION,
        className: S.description,
        children: u.default.Messages.SERVER_DISCOVERY_SUBCATEGORY_INPUT_SUBLABEL
      }), (0, t.jsx)(d.default, {
        guild: s,
        guildMetadata: a,
        menuPlacement: n.default.MenuPlacements.TOP
      })]
    })]
  })
}