"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("442837"),
  r = n("481060"),
  o = n("739566"),
  u = n("430824"),
  d = n("467679"),
  c = n("778947"),
  f = n("702346"),
  E = n("787374"),
  _ = n("674563"),
  T = n("689938"),
  m = n("297621");

function I(e) {
  var t;
  let {
    message: n,
    compact: a,
    usernameHook: I,
    channel: p
  } = e, h = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(p.guild_id)), N = (0, o.default)(n), S = I(N), {
    avatarSrc: C,
    eventHandlers: {
      onMouseEnter: A,
      onMouseLeave: g
    }
  } = (0, E.useAutomodAvatar)(!0);
  return (0, s.jsx)("div", {
    onMouseEnter: A,
    onMouseLeave: g,
    children: (0, s.jsx)(f.default, {
      className: l()(m.mainContainer, {
        [m.compact]: a
      }),
      iconNode: a ? null : (0, s.jsx)(E.AutomodAvatar, {
        src: C
      }),
      iconContainerClassName: m.iconContainer,
      compact: a,
      children: (0, s.jsxs)("div", {
        className: l()(m.content, {
          [m.compact]: a
        }),
        children: [(0, s.jsx)(c.BaseMessageHeader, {
          message: n,
          messageClassname: m.spanCorrection,
          className: l()(m.usernameContainer, m.spanCorrection, {
            [m.compact]: a
          }),
          username: (0, s.jsxs)("div", {
            className: m.spanCorrection,
            children: [(0, s.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: m.username,
              children: T.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(d.default, {
              type: _.BotTagTypes.SYSTEM_DM,
              className: m.systemTag
            })]
          }),
          compact: a,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: l()(m.__invalid_messageContent, {
            [m.compact]: a
          }),
          children: T.default.Messages.GUILD_RAID_REPORT_SYSTEM_MESSAGE.format({
            username: N.nick,
            usernameHook: S,
            guildName: null !== (t = null == h ? void 0 : h.name) && void 0 !== t ? t : ""
          })
        })]
      })
    })
  })
}