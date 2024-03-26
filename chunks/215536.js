"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("77078"),
  u = n("272030"),
  o = n("899633"),
  d = n("244201"),
  c = n("506885"),
  f = n("340906"),
  h = n("533403"),
  m = n("315102"),
  p = n("893127");

function E(e) {
  let {
    channel: t,
    speaker: s,
    className: h
  } = e, E = (0, d.useAppContext)(), {
    reducedMotion: g
  } = l.useContext(r.AccessibilityPreferencesContext), S = (0, o.default)({
    userId: s.id
  }), C = null != s.member ? (0, m.getGuildMemberAvatarURL)(s.member) : null, _ = e => {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("834247").then(n.bind(n, "834247"));
      return n => (0, a.jsx)(e, {
        ...n,
        user: s.user,
        guildId: t.guild_id,
        channel: t,
        showMediaItems: !0,
        showStageChannelItems: !0,
        showChatItems: !1
      })
    }, {
      context: E
    })
  };
  return (0, a.jsx)(r.Popout, {
    preload: () => (0, c.default)(s.user.id, s.user.getAvatarURL(t.guild_id, 80), {
      guildId: t.guild_id,
      channelId: t.id
    }),
    renderPopout: e => (0, a.jsx)(f.default, {
      ...e,
      location: "StageSpeakerSummary",
      guildId: t.guild_id,
      channelId: t.id,
      userId: s.id
    }),
    position: "right",
    spacing: 8,
    children: e => (0, a.jsx)(r.Tooltip, {
      text: s.userNick,
      position: "bottom",
      children: n => (0, a.jsx)(r.Clickable, {
        ...n,
        ...e,
        onClick: t => {
          t.stopPropagation(), e.onClick(t)
        },
        onContextMenu: _,
        children: (0, a.jsx)(r.Avatar, {
          src: null != C ? C : s.user.getAvatarURL(t.guild_id, 24),
          size: r.AvatarSizes.SIZE_24,
          className: i(p.avatar, h),
          "aria-label": s.userNick,
          isSpeaking: S && !g.enabled
        })
      })
    })
  })
}

function g(e) {
  let {
    speakers: t,
    channel: n
  } = e;
  return (0, a.jsx)(h.default, {
    className: p.summary,
    guildId: n.guild_id,
    users: t,
    max: 10,
    renderUser: (e, t, l) => (0, a.jsx)(E, {
      channel: n,
      speaker: e,
      className: t
    }, l),
    renderMoreUsers: (e, t, n) => (0, a.jsx)("div", {
      className: i(p.speakers, t),
      children: e
    }, n)
  })
}