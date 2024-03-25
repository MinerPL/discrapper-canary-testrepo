"use strict";
t.r(s), t.d(s, {
  default: function() {
    return d
  }
});
var n = t("37983");
t("884691");
var a = t("77078"),
  r = t("476765"),
  l = t("151642"),
  o = t("29846"),
  c = t("782340"),
  i = t("634759");

function d(e) {
  let {
    channel: s,
    onAccept: t,
    transitionState: d,
    onClose: u,
    ...h
  } = e, f = (0, r.useUID)(), x = (0, l.useStageBlockedUsers)(s.id);
  return (0, n.jsxs)(a.ModalRoot, {
    transitionState: d,
    "aria-labelledby": f,
    ...h,
    size: a.ModalSize.SMALL,
    children: [(0, n.jsxs)(a.ModalHeader, {
      className: i.header,
      children: [(0, n.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        children: c.default.Messages.STAGE_BLOCKED_USERS_TITLE_PLURAL.format({
          number: x.length
        })
      }), (0, n.jsx)(a.Text, {
        color: "header-secondary",
        className: i.description,
        variant: "text-sm/normal",
        children: c.default.Messages.STAGE_BLOCKED_USERS_BODY.format({
          number: x.length
        })
      })]
    }), (0, n.jsx)(a.ModalContent, {
      className: i.content,
      children: x.map(e => {
        let {
          user: t,
          id: a,
          speaker: r
        } = e;
        return (0, n.jsx)(o.BlockedUser, {
          user: t,
          speaker: r,
          showStatus: !0,
          channelId: s.id
        }, a)
      })
    }), (0, n.jsxs)(a.ModalFooter, {
      className: i.footer,
      children: [(0, n.jsx)(a.Button, {
        onClick: () => {
          t(s), u()
        },
        color: a.Button.Colors.BRAND,
        children: c.default.Messages.STAGE_BLOCKED_USERS_ACCEPT
      }), (0, n.jsx)(a.Button, {
        onClick: () => {
          u()
        },
        color: a.Button.Colors.PRIMARY,
        look: a.Button.Looks.LINK,
        children: c.default.Messages.STAGE_BLOCKED_USERS_CANCEL
      })]
    })]
  })
}