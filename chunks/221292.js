n.d(t, {
  Ac: function() {
return A;
  },
  NE: function() {
return N;
  },
  QN: function() {
return g;
  },
  Qf: function() {
return v;
  },
  pQ: function() {
return S;
  }
}), n(653041);
var r = n(367907),
  i = n(814443),
  a = n(271383),
  s = n(158776),
  o = n(699516),
  l = n(594174),
  u = n(626135),
  c = n(768581),
  d = n(621853),
  _ = n(318661),
  E = n(228168),
  f = n(981631),
  h = n(231338);
let p = e => {
let {
  user: t,
  userProfile: n,
  guildMember: r,
  guildMemberProfile: i
} = e, a = null != n ? n : i, s = [];
if ((null == r ? void 0 : r.nick) && s.push(E.cm.NICKNAME), (null == a ? void 0 : a.pronouns) && s.push(E.cm.PRONOUNS), null == t ? void 0 : t.avatar) {
  let e = (0, c.xR)(null == t ? void 0 : t.avatar);
  s.push(e ? E.cm.ANIMATED_AVATAR : E.cm.AVATAR);
}
if (null == a ? void 0 : a.banner) {
  let e = (0, c.xR)(null == a ? void 0 : a.banner);
  s.push(e ? E.cm.ANIMATED_BANNER : E.cm.BANNER);
}
return (null == a ? void 0 : a.bio) && s.push(E.cm.BIO), (null == a ? void 0 : a.themeColors) != null && void 0 !== a.themeColors.find(e => null !== e) && s.push(E.cm.THEME), (null == t ? void 0 : t.avatarDecoration) != null && s.push(E.cm.AVATAR_DECORATION), (null == a ? void 0 : a.profileEffectId) != null && s.push(E.cm.PROFILE_EFFECT), s;
  },
  m = e => {
let t = s.Z.getStatus(e),
  n = s.Z.isMobileOnline(e);
return t === h.Sk.ONLINE && n ? ''.concat(t, '-mobile') : t === h.Sk.ONLINE ? ''.concat(t, '-desktop') : t;
  },
  I = e => null == e ? e : Object.keys(f.IIU)[Object.values(f.IIU).indexOf(e)],
  T = e => {
var t, n;
let {
  layout: r,
  userId: i,
  guildId: o,
  showGuildProfile: u = !0
} = e, c = l.default.getUser(i);
if (null == c)
  return {};
let d = (0, _.Of)(null == c ? void 0 : c.id, u ? o : void 0),
  E = u && null != o ? a.ZP.getMember(o, null == c ? void 0 : c.id) : null;
return {
  profile_layout: r,
  profile_properties: p({
    user: c,
    userProfile: null == d ? void 0 : d._userProfile
  }),
  guild_profile_properties: p({
    guildMember: E,
    guildMemberProfile: null == d ? void 0 : d._guildMemberProfile
  }),
  profile_activity_types: s.Z.getActivities(c.id).map(e => {
    let {
      type: t
    } = e;
    return t;
  }).filter(e => void 0 !== e),
  profile_badges: null == d ? void 0 : null === (t = d.getBadges()) || void 0 === t ? void 0 : t.map(e => {
    let {
      id: t
    } = e;
    return t;
  }),
  avatar_decoration_sku_id: null === (n = c.avatarDecoration) || void 0 === n ? void 0 : n.skuId,
  profile_effect_sku_id: null == d ? void 0 : d.profileEffectId,
  user_status: m(c.id),
  is_guild_profile: (null == d ? void 0 : d.guildId) != null,
  is_bot_profile: c.bot
};
  },
  g = e => {
var t, n;
return null == e ? {} : {
  related_user_id: e,
  relationship_type: o.Z.getRelationshipType(e),
  related_since: o.Z.getSince(e),
  num_mutual_friends: d.Z.getMutualFriendsCount(e),
  num_mutual_guilds: null === (t = d.Z.getMutualGuilds(e)) || void 0 === t ? void 0 : t.length,
  affinity: null === (n = i.Z.getUserAffinity(e)) || void 0 === n ? void 0 : n.affinity
};
  },
  S = e => {
let {
  userId: t,
  guildId: n,
  channelId: i,
  messageId: a,
  roleId: s,
  showGuildProfile: o,
  analyticsLocations: l,
  layout: c,
  action: d,
  section: _
} = e;
u.default.track(f.rMx.USER_PROFILE_ACTION, {
  ...(0, r.hH)(n),
  ...(0, r.JS)(i),
  ...T({
    layout: c,
    userId: t,
    guildId: n,
    showGuildProfile: o
  }),
  ...g(t),
  location_stack: l,
  profile_action: d,
  profile_section: _,
  source_message_id: a,
  source_role_id: s
});
  },
  A = e => {
let {
  userId: t,
  guildId: n,
  channelId: i,
  showGuildProfile: a,
  analyticsLocations: s,
  layout: o,
  activityType: l,
  activityName: c,
  activityPlatform: d,
  activitySessionId: _,
  applicationId: E,
  voiceChannelId: h
} = e;
u.default.track(f.rMx.USER_PROFILE_ACTIVITY_JOINED, {
  ...(0, r.hH)(n),
  ...(0, r.JS)(i),
  ...T({
    layout: o,
    userId: t,
    guildId: n,
    showGuildProfile: a
  }),
  ...g(t),
  location_stack: s,
  activity_type: null != h ? 'VOICE' : I(l),
  activity_name: c,
  activity_platform: d,
  activity_session_id: _,
  application_id: E,
  voice_channel_id: h
});
  },
  N = e => {
let {
  userId: t,
  guildId: n,
  channelId: i,
  showGuildProfile: a,
  analyticsLocations: s,
  layout: o,
  badge: l
} = e;
u.default.track(f.rMx.USER_PROFILE_BADGE_PRESSED, {
  ...(0, r.hH)(n),
  ...(0, r.JS)(i),
  ...T({
    layout: o,
    userId: t,
    guildId: n,
    showGuildProfile: a
  }),
  ...g(t),
  location_stack: s,
  badge: l
});
  },
  v = e => {
let {
  userId: t,
  guildId: n,
  channelId: i,
  showGuildProfile: a,
  analyticsLocations: s,
  layout: o,
  badge: l
} = e;
u.default.track(f.rMx.USER_PROFILE_BADGE_HOVERED, {
  ...(0, r.hH)(n),
  ...(0, r.JS)(i),
  ...T({
    layout: o,
    userId: t,
    guildId: n,
    showGuildProfile: a
  }),
  ...g(t),
  location_stack: s,
  badge: l
});
  };