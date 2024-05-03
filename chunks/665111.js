"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("153124"),
  r = n("357727"),
  i = n("158010"),
  d = n("170039"),
  o = n("471253"),
  c = n("930180"),
  u = n("582019"),
  h = n("939863"),
  f = n("689938"),
  _ = n("112441");

function E(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: E,
    ...T
  } = e, g = (0, l.useUID)(), p = (0, c.useStageBlockedUsersCount)(t.id), S = async () => {
    await (0, o.moveSelfToAudience)(t), E()
  }, I = async () => {
    await (0, o.audienceAckRequestToSpeak)(t, !1), E()
  };
  return (0, s.jsx)(a.ModalRoot, {
    transitionState: n,
    "aria-labelledby": g,
    ...T,
    size: a.ModalSize.SMALL,
    children: (0, s.jsxs)(a.ModalContent, {
      className: _.content,
      children: [(0, s.jsx)(h.default, {
        children: (0, s.jsx)("div", {
          className: _.stageIconBackground,
          children: (0, s.jsx)(d.default, {
            width: 40,
            height: 40,
            className: _.stageIcon
          })
        })
      }), (0, s.jsx)(a.Heading, {
        id: g,
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
          onClick: I,
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
          onClick: S,
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