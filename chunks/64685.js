"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var l = s("735250");
s("470079");
var i = s("481060"),
  r = s("880008"),
  a = s("847033"),
  n = s("544978"),
  d = s("689938"),
  o = s("25059");

function u() {
  let {
    selectedTab: e,
    isPhantomPreview: t,
    handlePreviewDismiss: s
  } = (0, a.useGuildShopDisplayContext)();
  return t ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: o.previewNotice,
      children: [(0, l.jsx)(r.default, {
        width: 16,
        height: 16,
        foregroundColor: "currentColor"
      }), (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        className: o.previewNoticeText,
        children: e === n.GuildShopTab.GUILD_PRODUCTS_PREVIEW ? d.default.Messages.GUILD_SHOP_TAB_PREVIEW_NOTICE_LABEL : d.default.Messages.GUILD_SHOP_PAGE_PREVIEW_NOTICE_LABEL
      })]
    }), (0, l.jsx)(i.Button, {
      size: i.Button.Sizes.MIN,
      color: i.Button.Colors.PRIMARY,
      className: o.removePreviewButton,
      onClick: s,
      children: e === n.GuildShopTab.GUILD_PRODUCTS_PREVIEW ? d.default.Messages.GUILD_SHOP_REMOVE_PREVIEW_TAB_BUTTON : d.default.Messages.GUILD_SHOP_REMOVE_PREVIEW_PAGE_BUTTON
    })]
  }) : null
}