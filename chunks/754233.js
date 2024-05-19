"use strict";
t.r(s);
var a = t("735250");
t("470079");
var l = t("481060"),
  d = t("430824"),
  n = t("153124"),
  o = t("614812"),
  r = t("689938"),
  i = t("340258");
s.default = e => {
  let {
    onClose: s,
    guildId: t
  } = e, c = (0, n.useUID)(), I = r.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_FALLBACK.format({
    helpdeskArticle: o.GUILD_LIMITED_ACCESS_HC_LINK
  }), _ = d.default.getGuild(t);
  return null != _ && (I = r.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION.format({
    guildName: _.name,
    helpdeskArticle: o.GUILD_LIMITED_ACCESS_HC_LINK
  })), (0, a.jsxs)(l.ModalRoot, {
    ...e,
    "aria-labelledby": c,
    children: [(0, a.jsxs)(l.ModalHeader, {
      separator: !1,
      className: i.modalHeader,
      children: [(0, a.jsx)(l.Heading, {
        id: c,
        variant: "heading-xl/extrabold",
        children: r.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING
      }), (0, a.jsx)(l.ModalCloseButton, {
        className: i.closeButton,
        onClick: s
      })]
    }), (0, a.jsx)(l.ModalContent, {
      className: i.modalContent,
      children: (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        className: i.contentText,
        children: I
      })
    }), (0, a.jsx)(l.ModalFooter, {
      children: (0, a.jsx)(l.Button, {
        className: i.button,
        size: l.Button.Sizes.MIN,
        onClick: s,
        children: r.default.Messages.OKAY
      })
    })]
  })
}