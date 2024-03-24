"use strict";
e.r(n), e.d(n, {
  default: function() {
    return c
  }
});
var r = e("37983");
e("884691");
var i = e("77078"),
  a = e("305961"),
  s = e("476765"),
  o = e("285899"),
  u = e("782340"),
  l = e("528"),
  c = t => {
    let {
      onClose: n,
      guildId: e
    } = t, c = (0, s.useUID)(), f = u.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_FALLBACK.format({
      helpdeskArticle: o.GUILD_LIMITED_ACCESS_HC_LINK
    }), d = a.default.getGuild(e);
    return null != d && (f = u.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION.format({
      guildName: d.name,
      helpdeskArticle: o.GUILD_LIMITED_ACCESS_HC_LINK
    })), (0, r.jsxs)(i.ModalRoot, {
      ...t,
      "aria-labelledby": c,
      children: [(0, r.jsxs)(i.ModalHeader, {
        separator: !1,
        className: l.modalHeader,
        children: [(0, r.jsx)(i.Heading, {
          id: c,
          variant: "heading-xl/extrabold",
          children: u.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING
        }), (0, r.jsx)(i.ModalCloseButton, {
          className: l.closeButton,
          onClick: n
        })]
      }), (0, r.jsx)(i.ModalContent, {
        className: l.modalContent,
        children: (0, r.jsx)(i.Text, {
          variant: "text-md/normal",
          className: l.contentText,
          children: f
        })
      }), (0, r.jsx)(i.ModalFooter, {
        children: (0, r.jsx)(i.Button, {
          className: l.button,
          size: i.Button.Sizes.MIN,
          onClick: n,
          children: u.default.Messages.OKAY
        })
      })]
    })
  }