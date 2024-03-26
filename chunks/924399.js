"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  i = n("446674"),
  r = n("77078"),
  o = n("574073"),
  u = n("305961"),
  d = n("79798"),
  c = n("93332"),
  E = n("304198"),
  f = n("250375"),
  _ = n("988268"),
  T = n("782340"),
  I = n("950912");

function m(e) {
  var t;
  let {
    message: n,
    compact: a,
    usernameHook: m,
    channel: N
  } = e, p = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(N.guild_id)), S = (0, o.default)(n), C = m(S), {
    avatarSrc: A,
    eventHandlers: {
      onMouseEnter: h,
      onMouseLeave: g
    }
  } = (0, f.useAutomodAvatar)(!0);
  return (0, s.jsx)("div", {
    onMouseEnter: h,
    onMouseLeave: g,
    children: (0, s.jsx)(E.default, {
      className: l(I.mainContainer, {
        [I.compact]: a
      }),
      iconNode: a ? null : (0, s.jsx)(f.AutomodAvatar, {
        src: A
      }),
      iconContainerClassName: I.iconContainer,
      compact: a,
      children: (0, s.jsxs)("div", {
        className: l(I.content, {
          [I.compact]: a
        }),
        children: [(0, s.jsx)(c.BaseMessageHeader, {
          message: n,
          messageClassname: I.spanCorrection,
          className: l(I.usernameContainer, I.spanCorrection, {
            [I.compact]: a
          }),
          username: (0, s.jsxs)("div", {
            className: I.spanCorrection,
            children: [(0, s.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: I.username,
              children: T.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(d.default, {
              type: _.BotTagTypes.SYSTEM_DM,
              className: I.systemTag
            })]
          }),
          compact: a,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: l(I.messageContent, {
            [I.compact]: a
          }),
          children: T.default.Messages.GUILD_RAID_REPORT_SYSTEM_MESSAGE.format({
            username: S.nick,
            usernameHook: C,
            guildName: null !== (t = null == p ? void 0 : p.name) && void 0 !== t ? t : ""
          })
        })]
      })
    })
  })
}