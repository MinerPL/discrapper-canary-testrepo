"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("476765"),
  l = n("849467"),
  r = n("155207"),
  c = n("228427"),
  o = n("244480"),
  u = n("151642"),
  d = n("29846"),
  f = n("119184"),
  T = n("782340"),
  _ = n("479682");

function h(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: h,
    ...E
  } = e, p = (0, i.useUID)(), g = (0, u.useStageBlockedUsersCount)(t.id), I = async () => {
    await (0, o.moveSelfToAudience)(t), h()
  }, S = async () => {
    await (0, o.audienceAckRequestToSpeak)(t, !1), h()
  };
  return (0, a.jsx)(s.ModalRoot, {
    transitionState: n,
    "aria-labelledby": p,
    ...E,
    size: s.ModalSize.SMALL,
    children: (0, a.jsxs)(s.ModalContent, {
      className: _.content,
      children: [(0, a.jsx)(f.default, {
        children: (0, a.jsx)("div", {
          className: _.stageIconBackground,
          children: (0, a.jsx)(c.default, {
            width: 40,
            height: 40,
            className: _.stageIcon
          })
        })
      }), (0, a.jsx)(s.Heading, {
        id: p,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: _.headerTitle,
        children: T.default.Messages.STAGE_MODERATOR_JOIN_MODAL_TITLE
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: _.headerSubtitle,
        children: T.default.Messages.STAGE_MODERATOR_JOIN_MODAL_SUBTITLE
      }), g > 0 && (0, a.jsx)(d.BlockedUsersNotice, {
        channelId: t.id
      }), (0, a.jsxs)("div", {
        className: _.buttonsContainer,
        children: [(0, a.jsxs)(s.Button, {
          color: s.Button.Colors.PRIMARY,
          className: _.button,
          innerClassName: _.innerButton,
          onClick: S,
          children: [(0, a.jsx)("div", {
            className: _.icon,
            children: (0, a.jsx)(l.default, {
              width: 20,
              height: 20
            })
          }), T.default.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_SPEAKER]
        }), (0, a.jsxs)(s.Button, {
          color: s.Button.Colors.PRIMARY,
          className: _.button,
          innerClassName: _.innerButton,
          onClick: I,
          children: [(0, a.jsx)("div", {
            className: _.icon,
            children: (0, a.jsx)(r.default, {
              width: 20,
              height: 20
            })
          }), T.default.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_AUDIENCE]
        })]
      })]
    })
  })
}