"use strict";
n.r(t);
var l = n("735250");
n("470079");
var a = n("803997"),
  s = n.n(a),
  i = n("442837"),
  r = n("481060"),
  o = n("717881"),
  u = n("503438"),
  d = n("850827"),
  c = n("952164"),
  f = n("131704"),
  h = n("314897"),
  C = n("594174"),
  p = n("409216"),
  m = n("768581"),
  g = n("51144"),
  E = n("754231"),
  S = n("299505");

function _(e) {
  let {
    guildId: t,
    member: n,
    className: a
  } = e, i = null != n.member ? (0, m.getGuildMemberAvatarURL)(n.member) : null;
  return (0, l.jsx)(r.Tooltip, {
    text: n.nick,
    position: "bottom",
    children: e => {
      var o;
      return (0, l.jsx)(r.Avatar, {
        src: null != i ? i : n.user.getAvatarURL(t, 16),
        size: r.AvatarSizes.SIZE_16,
        className: s()(a, S.partyAvatar),
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
  return (0, l.jsx)(p.default, {
    className: S.partyMembers,
    guildId: n,
    users: t,
    max: 6,
    renderUser: (e, t, a) => (0, l.jsx)(_, {
      guildId: n,
      member: e,
      className: t
    }, a),
    renderMoreUsers: (e, t, n) => (0, l.jsx)("div", {
      className: s()(S.morePartyMembers, t),
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
  } = e, p = null != s, m = p ? Array.from(s.embeddedActivity.userIds) : [], g = (0, i.useStateFromStores)([C.default, h.default], () => {
    if (null != a) {
      var e, t, l, s;
      return a.length <= 0 ? null : p ? null !== (t = null === (e = a.find(e => e.voiceState.sessionId === (null == n ? void 0 : n.session_id))) || void 0 === e ? void 0 : e.user) && void 0 !== t ? t : C.default.getUser(m[0]) : null !== (s = null === (l = a.find(e => e.user.id !== h.default.getId())) || void 0 === l ? void 0 : l.user) && void 0 !== s ? s : a[0].user
    }
    if (p) return C.default.getUser(m[0])
  });
  if (null == g) return null;
  let _ = p || (0, u.default)(n),
    N = (0, f.isVoiceChannel)(t.type);
  return (0, l.jsxs)("div", {
    className: S.activity,
    children: [(0, l.jsx)("div", {
      className: S.channelActivityContainer,
      children: _ ? (0, l.jsx)(E.default, {
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
        isEmbedded: p
      })
    }), (0, l.jsx)("div", {
      className: S.activityActionsContainer,
      children: (0, l.jsx)(d.default, {
        type: o.UserActivityTypes.VOICE_CHANNEL,
        activity: n,
        user: g,
        guildId: t.getGuildId(),
        channelId: t.id,
        color: S.button,
        onAction: r,
        isEmbedded: p
      })
    })]
  })
}