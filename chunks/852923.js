"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  i = n("481060"),
  r = n("592125"),
  o = n("944486"),
  u = n("83097"),
  d = n("644766"),
  c = n("471253"),
  f = n("623633"),
  E = n("930180"),
  _ = n("689938"),
  m = n("13408");

function T(e) {
  let t = o.default.getVoiceChannelId();
  if (null == t) return;
  let n = r.default.getChannel(t);
  null != n && (0, c.audienceAckRequestToSpeak)(n, e)
}

function I() {
  var e;
  let t = (0, f.default)(),
    n = null !== (e = (0, E.useStageBlockedUsersCount)(null == t ? void 0 : t.id)) && void 0 !== e ? e : 0;
  return null == t ? null : (0, s.jsxs)(d.default, {
    className: m.container,
    color: d.NoticeColors.DEFAULT,
    children: [(0, s.jsx)("div", {
      children: _.default.Messages.STAGE_SPEAK_INVITE_HEADER
    }), n > 0 ? (0, s.jsxs)("div", {
      className: m.blocked,
      children: [(0, s.jsx)(u.default, {
        width: 12,
        height: 12,
        className: m.blockedIcon
      }), (0, s.jsx)("div", {
        className: m.blockedText,
        children: _.default.Messages.STAGE_SPEAK_INVITE_HEADER_BLOCKED_USERS.format({
          number: n
        })
      })]
    }) : null, (0, s.jsx)(i.Button, {
      className: l()(m.__invalid_button, m.acceptButton),
      size: i.Button.Sizes.MIN,
      color: i.Button.Colors.WHITE,
      onClick: () => T(!1),
      children: (0, s.jsx)(i.Text, {
        className: m.acceptText,
        variant: "text-xs/normal",
        color: "none",
        children: _.default.Messages.STAGE_SPEAK_INVITE_ACCEPT
      })
    }), (0, s.jsx)(i.Button, {
      className: l()(m.__invalid_button, m.declineButton),
      look: i.Button.Looks.OUTLINED,
      size: i.Button.Sizes.MIN,
      color: i.Button.Colors.WHITE,
      onClick: () => T(!0),
      children: (0, s.jsx)(i.Text, {
        className: m.declineText,
        variant: "text-xs/normal",
        color: "none",
        children: _.default.Messages.STAGE_SPEAK_INVITE_DECLINE
      })
    })]
  })
}