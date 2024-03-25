"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  i = s("77078"),
  n = s("599417"),
  r = s("145131"),
  d = s("730647"),
  o = s("782340"),
  u = s("674637");

function c(e) {
  let {
    directoryChannelId: t,
    description: s,
    onDescriptionChange: c,
    categoryId: C,
    onCategoryIdChange: m,
    onSubmit: f,
    onClose: E,
    onBack: T
  } = e, [x, _] = l.useState(!1), [I, L] = l.useState(null), h = async () => {
    _(!0);
    try {
      await f()
    } catch (e) {
      L(new n.default(e))
    }
    _(!1)
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(i.ModalHeader, {
      direction: r.default.Direction.VERTICAL,
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
      }), null != E && (0, a.jsx)(i.ModalCloseButton, {
        className: u.closeButton,
        onClick: E
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
          options: (0, d.getHubCategories)(t),
          clearable: !1,
          value: C,
          onChange: m,
          maxVisibleItems: 4,
          popoutClassName: "theme-light"
        })
      })]
    }), (0, a.jsxs)(i.ModalFooter, {
      justify: r.default.Justify.BETWEEN,
      children: [(0, a.jsx)(i.Button, {
        color: i.Button.Colors.BRAND,
        onClick: h,
        submitting: x,
        disabled: "" === s || C === d.DirectoryEntryCategories.UNCATEGORIZED,
        children: o.default.Messages.HUB_ADD_SERVER_CTA
      }), (0, a.jsx)(i.Button, {
        look: i.Button.Looks.BLANK,
        size: i.Button.Sizes.MIN,
        onClick: T,
        children: o.default.Messages.BACK
      })]
    })]
  })
}