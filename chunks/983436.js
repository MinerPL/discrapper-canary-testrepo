"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("287734"),
  i = n("475468"),
  r = n("358555"),
  o = n("944486"),
  u = n("914010"),
  d = n("197409"),
  c = n("626135"),
  f = n("981631"),
  E = n("689938"),
  _ = n("558338");

function T(e) {
  var t;
  let {
    guild: n,
    channel: T,
    messageData: m
  } = e, I = u.default.getGuildId(), p = o.default.getChannelId(I), h = a.useCallback(() => {
    var e;
    c.default.track(f.AnalyticEvents.CHANNEL_LINK_PREVIEW_JOINED, {
      author_id: null === (e = m.author) || void 0 === e ? void 0 : e.id,
      link_guild_id: n.id,
      link_channel_id: T.id,
      link_channel_type: T.type,
      guild_id: I,
      channel_id: p
    }), (0, i.transitionToChannel)(n.id, T.id), l.default.selectVoiceChannel(T.id)
  }, [null === (t = m.author) || void 0 === t ? void 0 : t.id, n.id, T.id, T.type, I, p]), N = (0, s.jsx)(d.default.Channel, {
    channel: T
  });
  return (0, s.jsx)(d.default, {
    children: (0, s.jsxs)(d.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: _.headerLine,
        children: [(0, s.jsx)(d.default.Icon, {
          guild: n
        }), (0, s.jsx)(d.default.Info, {
          title: N,
          onClick: h,
          children: (0, s.jsxs)("span", {
            className: _.infoTitle,
            children: [E.default.Messages.INVITE_BUTTON_BODY_IN_GUILD.format({
              guildName: n.name
            }), (0, s.jsx)("span", {
              className: _.infoBadge,
              children: (0, s.jsx)(r.default, {
                guild: n,
                isBannerVisible: !1
              })
            })]
          })
        })]
      }), (0, s.jsx)(d.default.Button, {
        onClick: h,
        color: d.default.Button.Colors.GREEN,
        children: T.isGuildStageVoice() ? E.default.Messages.STAGE_CHANNEL_JOIN : E.default.Messages.JOIN_VOICE
      })]
    })
  })
}