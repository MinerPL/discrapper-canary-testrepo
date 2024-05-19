"use strict";
n.r(t);
var l = n("735250");
n("470079");
var a = n("120356"),
  s = n.n(a),
  i = n("442837"),
  r = n("481060"),
  o = n("717881"),
  u = n("503438"),
  d = n("850827"),
  c = n("952164"),
  f = n("131704"),
  h = n("314897"),
  m = n("594174"),
  C = n("409216"),
  p = n("768581"),
  g = n("51144"),
  E = n("754231"),
  _ = n("24285");

function S(e) {
  let {
    guildId: t,
    member: n,
    className: a
  } = e, i = null != n.member ? (0, p.getGuildMemberAvatarURL)(n.member) : null;
  return (0, l.jsx)(r.Tooltip, {
    text: n.nick,
    position: "bottom",
    children: e => {
      var o;
      return (0, l.jsx)(r.Avatar, {
        src: null != i ? i : n.user.getAvatarURL(t, 16),
        size: r.AvatarSizes.SIZE_16,
        className: s()(a, _.partyAvatar),
        "aria-label": null !== (o = n.nick) && void 0 !== o ? o : g.default.getName(n.user),
        ...e
      })
    }
  })
}

function I(e) {
  let {
    members: t,
    guildId: n
  } = e;
  return (0, l.jsx)(C.default, {
    className: _.partyMembers,
    guildId: n,
    users: t,
    max: 6,
    renderUser: (e, t, a) => (0, l.jsx)(S, {
      guildId: n,
      member: e,
      className: t
    }, a),
    renderMoreUsers: (e, t, n) => (0, l.jsx)("div", {
      className: s()(_.morePartyMembers, t),
      children: e
    }, n)
  })
}
t.default = e => {
  let {
    channel: t,
    presenceActivity: n,
    members: a,
    embeddedApp: s,
    onAction: r
  } = e, C = null != s, p = C ? Array.from(s.embeddedActivity.userIds) : [], g = (0, i.useStateFromStores)([m.default, h.default], () => {
    if (C) return m.default.getUser(p[0]);
    if (null != a) {
      var e, t;
      return a.length <= 0 ? null : null !== (t = null === (e = a.find(e => e.user.id !== h.default.getId())) || void 0 === e ? void 0 : e.user) && void 0 !== t ? t : a[0].user
    }
  });
  if (null == g) return null;
  let S = C || (0, u.default)(n),
    N = (0, f.isVoiceChannel)(t.type);
  return (0, l.jsxs)("div", {
    className: _.activity,
    children: [(0, l.jsx)("div", {
      className: _.channelActivityContainer,
      children: S ? (0, l.jsx)(E.default, {
        activity: n,
        embeddedApp: s,
        user: g,
        channel: t,
        sortedVoiceStates: a,
        onOpenSpotifyTrack: N ? c.openTrack : void 0,
        onOpenSpotifyArtist: N ? c.openArtist : void 0,
        onOpenSpotifyAlbum: N ? c.openAlbum : void 0
      }) : (0, l.jsx)(o.default, {
        type: o.UserActivityTypes.VOICE_CHANNEL,
        activity: n,
        user: g,
        guildId: t.getGuildId(),
        channelId: t.id,
        renderHeaderAccessory: null != a ? () => (0, l.jsx)(I, {
          guildId: t.guild_id,
          members: a
        }) : void 0,
        isEmbedded: C
      })
    }), (0, l.jsx)("div", {
      className: _.activityActionsContainer,
      children: (0, l.jsx)(d.default, {
        type: o.UserActivityTypes.VOICE_CHANNEL,
        activity: n,
        embeddedActivity: null == s ? void 0 : s.embeddedActivity,
        user: g,
        guildId: t.getGuildId(),
        channelId: t.id,
        color: _.button,
        onAction: r,
        isEmbedded: C
      })
    })]
  })
}