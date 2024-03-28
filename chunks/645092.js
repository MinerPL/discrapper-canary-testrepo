"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("481060"),
  r = n("739566"),
  o = n("467679"),
  u = n("778947"),
  d = n("702346"),
  c = n("787374"),
  f = n("674563"),
  E = n("689938"),
  _ = n("297621");

function T(e) {
  let {
    message: t,
    compact: n,
    usernameHook: a
  } = e, T = (0, r.default)(t), m = a(T), {
    avatarSrc: I,
    eventHandlers: {
      onMouseEnter: p,
      onMouseLeave: h
    }
  } = (0, c.useAutomodAvatar)(!0);
  return (0, s.jsx)("div", {
    onMouseEnter: p,
    onMouseLeave: h,
    children: (0, s.jsx)(d.default, {
      className: l()(_.mainContainer, {
        [_.compact]: n
      }),
      iconNode: n ? null : (0, s.jsx)(c.AutomodAvatar, {
        src: I
      }),
      iconContainerClassName: _.iconContainer,
      compact: n,
      children: (0, s.jsxs)("div", {
        className: l()(_.content, {
          [_.compact]: n
        }),
        children: [(0, s.jsx)(u.BaseMessageHeader, {
          message: t,
          messageClassname: _.spanCorrection,
          className: l()(_.usernameContainer, _.spanCorrection, {
            [_.compact]: n
          }),
          username: (0, s.jsxs)("div", {
            className: _.spanCorrection,
            children: [(0, s.jsx)(i.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: _.username,
              children: E.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(o.default, {
              type: f.BotTagTypes.SYSTEM_DM,
              className: _.systemTag
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: l()(_.__invalid_messageContent, {
            [_.compact]: n
          }),
          children: E.default.Messages.GUILD_REPORT_FALSE_ALARM_SYSTEM_MESSAGE_SHORT.format({
            username: T.nick,
            usernameHook: m
          })
        })]
      })
    })
  })
}