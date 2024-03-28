"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("481060"),
  n = s("479531"),
  d = s("285952"),
  r = s("486527"),
  o = s("689938"),
  u = s("825174");

function c(e) {
  let {
    directoryChannelId: t,
    description: s,
    onDescriptionChange: c,
    categoryId: C,
    onCategoryIdChange: m,
    onSubmit: f,
    onClose: T,
    onBack: _
  } = e, [E, x] = l.useState(!1), [I, L] = l.useState(null), h = async () => {
    x(!0);
    try {
      await f()
    } catch (e) {
      L(new n.default(e))
    }
    x(!1)
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(i.ModalHeader, {
      direction: d.default.Direction.VERTICAL,
      className: u.header,
      separator: !1,
      children: [(0, a.jsx)(i.Heading, {
        className: u.title,
        variant: "heading-xl/semibold",
        children: o.default.Messages.HUB_CUSTOMIZE_GUILD_TITLE
      }), (0, a.jsx)(i.Text, {
        className: u.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: o.default.Messages.HUB_CUSTOMIZE_GUILD_SUBTITLE
      }), null != T && (0, a.jsx)(i.ModalCloseButton, {
        className: u.closeButton,
        onClick: T
      })]
    }), (0, a.jsxs)(i.ModalContent, {
      className: u.createGuild,
      paddingFix: !1,
      children: [(0, a.jsx)(i.FormItem, {
        title: o.default.Messages.HUB_ADD_GUILD_DESCRIPTION_TITLE,
        children: (0, a.jsx)(i.TextArea, {
          value: s,
          maxLength: 200,
          placeholder: o.default.Messages.HUB_ADD_GUILD_DESCRIPTION_PLACEHOLDER,
          onChange: c,
          error: null == I ? void 0 : I.getAnyErrorMessage()
        })
      }), (0, a.jsx)(i.FormItem, {
        className: u.formItemSpaced,
        title: o.default.Messages.HUB_ADD_GUILD_CATEGORY_TITLE,
        children: (0, a.jsx)(i.SingleSelect, {
          placeholder: o.default.Messages.SELECT,
          options: (0, r.getHubCategories)(t),
          clearable: !1,
          value: C,
          onChange: m,
          maxVisibleItems: 4,
          popoutClassName: "theme-light"
        })
      })]
    }), (0, a.jsxs)(i.ModalFooter, {
      justify: d.default.Justify.BETWEEN,
      children: [(0, a.jsx)(i.Button, {
        color: i.Button.Colors.BRAND,
        onClick: h,
        submitting: E,
        disabled: "" === s || C === r.DirectoryEntryCategories.UNCATEGORIZED,
        children: o.default.Messages.HUB_ADD_SERVER_CTA
      }), (0, a.jsx)(i.Button, {
        look: i.Button.Looks.BLANK,
        size: i.Button.Sizes.MIN,
        onClick: _,
        children: o.default.Messages.BACK
      })]
    })]
  })
}