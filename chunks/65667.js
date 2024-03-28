"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
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
  f = n("981631"),
  E = n("674563"),
  _ = n("689938"),
  T = n("297621");

function m(e) {
  let {
    message: t,
    compact: n,
    usernameHook: a
  } = e, m = (0, r.default)(t), I = a(m), {
    avatarSrc: p,
    eventHandlers: {
      onMouseEnter: h,
      onMouseLeave: N
    }
  } = (0, c.useAutomodAvatar)(!0), S = "" !== t.content ? new Date(t.content).toLocaleString(_.default.getLocale(), {
    hour: "numeric",
    minute: "2-digit",
    month: "2-digit",
    day: "2-digit",
    year: "numeric"
  }) : "";
  return (0, s.jsx)("div", {
    onMouseEnter: h,
    onMouseLeave: N,
    children: (0, s.jsx)(d.default, {
      className: l()(T.mainContainer, {
        [T.compact]: n
      }),
      iconNode: n ? null : (0, s.jsx)(c.AutomodAvatar, {
        src: p
      }),
      iconContainerClassName: T.iconContainer,
      compact: n,
      children: (0, s.jsxs)("div", {
        className: l()(T.content, {
          [T.compact]: n
        }),
        children: [(0, s.jsx)(u.BaseMessageHeader, {
          message: t,
          messageClassname: T.spanCorrection,
          className: l()(T.usernameContainer, T.spanCorrection, {
            [T.compact]: n
          }),
          username: (0, s.jsxs)("div", {
            className: T.spanCorrection,
            children: [(0, s.jsx)(i.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: T.username,
              children: _.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(o.default, {
              type: E.BotTagTypes.SYSTEM_DM,
              className: T.systemTag
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: l()(T.__invalid_messageContent, {
            [T.compact]: n
          }),
          children: t.type === f.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED ? _.default.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_SYSTEM_MESSAGE_SHORT.format({
            username: m.nick,
            usernameHook: I,
            time: S
          }) : _.default.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_SYSTEM_MESSAGE.format({
            username: m.nick,
            usernameHook: I
          })
        })]
      })
    })
  })
}