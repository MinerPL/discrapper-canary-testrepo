"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("153124"),
  r = n("357727"),
  i = n("158010"),
  o = n("170039"),
  c = n("471253"),
  d = n("930180"),
  u = n("320596"),
  h = n("939863"),
  f = n("689938"),
  _ = n("94700");

function g(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: g,
    ...E
  } = e, T = (0, l.useUID)(), p = (0, d.useStageBlockedUsersCount)(t.id), I = async () => {
    await (0, c.moveSelfToAudience)(t), g()
  }, S = async () => {
    await (0, c.audienceAckRequestToSpeak)(t, !1), g()
  };
  return (0, s.jsx)(a.ModalRoot, {
    transitionState: n,
    "aria-labelledby": T,
    ...E,
    size: a.ModalSize.SMALL,
    children: (0, s.jsxs)(a.ModalContent, {
      className: _.content,
      children: [(0, s.jsx)(h.default, {
        children: (0, s.jsx)("div", {
          className: _.stageIconBackground,
          children: (0, s.jsx)(o.default, {
            width: 40,
            height: 40,
            className: _.stageIcon
          })
        })
      }), (0, s.jsx)(a.Heading, {
        id: T,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: _.headerTitle,
        children: f.default.Messages.STAGE_MODERATOR_JOIN_MODAL_TITLE
      }), (0, s.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: _.headerSubtitle,
        children: f.default.Messages.STAGE_MODERATOR_JOIN_MODAL_SUBTITLE
      }), p > 0 && (0, s.jsx)(u.BlockedUsersNotice, {
        channelId: t.id
      }), (0, s.jsxs)("div", {
        className: _.buttonsContainer,
        children: [(0, s.jsxs)(a.Button, {
          color: a.Button.Colors.PRIMARY,
          className: _.button,
          innerClassName: _.innerButton,
          onClick: S,
          children: [(0, s.jsx)("div", {
            className: _.icon,
            children: (0, s.jsx)(r.default, {
              width: 20,
              height: 20
            })
          }), f.default.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_SPEAKER]
        }), (0, s.jsxs)(a.Button, {
          color: a.Button.Colors.PRIMARY,
          className: _.button,
          innerClassName: _.innerButton,
          onClick: I,
          children: [(0, s.jsx)("div", {
            className: _.icon,
            children: (0, s.jsx)(i.default, {
              width: 20,
              height: 20
            })
          }), f.default.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_AUDIENCE]
        })]
      })]
    })
  })
}