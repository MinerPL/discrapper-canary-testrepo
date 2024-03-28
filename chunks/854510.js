"use strict";
t.r(s), t.d(s, {
  default: function() {
    return d
  }
});
var r = t("735250");
t("470079");
var a = t("481060"),
  l = t("153124"),
  n = t("930180"),
  i = t("320596"),
  o = t("689938"),
  c = t("558816");

function d(e) {
  let {
    channel: s,
    onAccept: t,
    transitionState: d,
    onClose: u,
    ...h
  } = e, f = (0, l.useUID)(), x = (0, n.useStageBlockedUsers)(s.id);
  return (0, r.jsxs)(a.ModalRoot, {
    transitionState: d,
    "aria-labelledby": f,
    ...h,
    size: a.ModalSize.SMALL,
    children: [(0, r.jsxs)(a.ModalHeader, {
      className: c.header,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        children: o.default.Messages.STAGE_BLOCKED_USERS_TITLE_PLURAL.format({
          number: x.length
        })
      }), (0, r.jsx)(a.Text, {
        color: "header-secondary",
        className: c.description,
        variant: "text-sm/normal",
        children: o.default.Messages.STAGE_BLOCKED_USERS_BODY.format({
          number: x.length
        })
      })]
    }), (0, r.jsx)(a.ModalContent, {
      className: c.content,
      children: x.map(e => {
        let {
          user: t,
          id: a,
          speaker: l
        } = e;
        return (0, r.jsx)(i.BlockedUser, {
          user: t,
          speaker: l,
          showStatus: !0,
          channelId: s.id
        }, a)
      })
    }), (0, r.jsxs)(a.ModalFooter, {
      className: c.footer,
      children: [(0, r.jsx)(a.Button, {
        onClick: () => {
          t(s), u()
        },
        color: a.Button.Colors.BRAND,
        children: o.default.Messages.STAGE_BLOCKED_USERS_ACCEPT
      }), (0, r.jsx)(a.Button, {
        onClick: () => {
          u()
        },
        color: a.Button.Colors.PRIMARY,
        look: a.Button.Looks.LINK,
        children: o.default.Messages.STAGE_BLOCKED_USERS_CANCEL
      })]
    })]
  })
}