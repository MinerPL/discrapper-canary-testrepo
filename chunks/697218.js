"use strict";
n.r(t), n.d(t, {
  users: function() {
    return m
  },
  ASSISTANT_WUMPUS_VOICE_USER: function() {
    return p
  },
  transformUser: function() {
    return S
  },
  mergeUser: function() {
    return I
  },
  default: function() {
    return G
  }
}), n("222007"), n("702976"), n("808653"), n("581081"), n("424973");
var i = n("917351"),
  s = n("446674"),
  r = n("913144"),
  a = n("234251"),
  o = n("560208"),
  l = n("400205"),
  u = n("946028"),
  d = n("517001"),
  c = n("766274"),
  f = n("568734"),
  _ = n("271938"),
  h = n("49111"),
  g = n("646718");
let m = {},
  E = 0,
  p = "47835198259242069";

function v(e, t, n) {
  let i = e;
  i = null == n ? e.removeGuildAvatarHash(t) : e.addGuildAvatarHash(t, n), m[e.id] = i;
  let s = e !== i;
  return s && E++, s
}

function S(e) {
  let t = e.mfa_enabled;
  null != t && (e.mfaEnabled = t, delete e.mfa_enabled);
  let n = (0, d.getPremiumTypeFromRawValue)(e.premium_type);
  void 0 !== n && (e.premiumType = n, delete e.premium_type);
  let i = e.nsfw_allowed;
  null != i && (e.nsfwAllowed = i, delete e.nsfw_allowed);
  let s = e.public_flags;
  null != s && (e.publicFlags = s, delete e.public_flags);
  let r = e.purchased_flags;
  void 0 !== r && (e.purchasedFlags = r, delete e.purchased_flags);
  let o = e.premium_usage_flags;
  void 0 !== o && (e.premiumUsageFlags = o, delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
  let l = e.avatar_decoration_data;
  void 0 !== l && (e.avatarDecorationData = (0, a.parseAvatarDecorationData)(l), delete e.avatar_decoration_data);
  let u = e.global_name;
  return void 0 !== u && (e.globalName = u, delete e.global_name), e
}

function T(e) {
  return e.id !== _.default.getId()
}

function I(e) {
  let t, n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    i = m[e.id],
    s = void 0 !== e.id && e.id === _.default.getId();
  if (null == i) void 0 !== (t = (i = new c.default(e)).premiumType) && s && (i.premiumType = C((0, d.isStaffEnv)(i), i.premiumType));
  else if (n) {
    var r;
    let n = S(e);
    void 0 !== (t = null !== (r = n.premium_type) && void 0 !== r ? r : n.premiumType) && s && (0, d.isStaffEnvRawData)(n) && (n = function(e) {
      var t;
      let n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType,
        i = C((0, d.isStaffEnvRawData)(e), n);
      return void 0 !== e.premiumType ? e.premiumType = i : void 0 !== e.premium_type && (e.premium_type = i), e
    }(n)), i = i.merge(n)
  }(0, d.validatePremiumType)((0, d.isStaffEnv)(i), t, i.premiumType);
  let a = m[e.id] !== i;
  return m[e.id] = i, a && E++, a
}

function C(e, t) {
  if (!e) return t;
  let n = l.default.getPremiumTypeOverride(),
    i = l.default.getPremiumTypeActual();
  return n === g.UNSELECTED_PREMIUM_TYPE_OVERRIDE ? i : n
}

function A(e, t) {
  var n, i, s, r, a;
  if (null != e.author && "SENDING" !== e.state && T(e.author) && I(e.author, t), null === (n = e.mentions) || void 0 === n || n.forEach(e => {
      T(e) && I(e, t)
    }), (null === (i = e.interaction) || void 0 === i ? void 0 : i.user) != null && T(null === (s = e.interaction) || void 0 === s ? void 0 : s.user) && I(e.interaction.user, t), null === (r = e.attachments) || void 0 === r || r.forEach(e => {
      var n;
      null === (n = e.clip_participants) || void 0 === n || n.forEach(e => {
        T(e) && I(e, t)
      })
    }), (null === (a = e.resolved) || void 0 === a ? void 0 : a.users) != null)
    for (let n in e.resolved.users) {
      let i = e.resolved.users[n];
      T(i) && I(i, t)
    }
}

function y(e) {
  null != e.application.bot && I(e.application.bot)
}

function N(e) {
  if (null != e.users) {
    for (let t of e.users)
      if (!(t.id in m && !("incomplete" in t))) m[t.id] = new c.default(t)
  }
}

function R(e) {
  let {
    messages: t
  } = e;
  return t.forEach(e => A(e, !0)), !1
}

function O(e) {
  let {
    firstMessages: t,
    owners: n
  } = e;
  null != t && t.forEach(e => A(e, !0)), null != n && n.forEach(e => I(e.user, !0))
}

function D(e) {
  let {
    message: t
  } = e;
  if (A(t, !0), null != t.flags && f.hasFlag(t.flags, h.MessageFlags.URGENT)) {
    let e = m[_.default.getId()];
    return null != e && (m[_.default.getId()] = e.set("flags", f.setFlag(e.flags, h.UserFlags.HAS_UNREAD_URGENT_MESSAGES, !0)), !0)
  }
  return !1
}
let P = ["username", "avatar", "global_name", "discriminator", "bot"];

function b(e) {
  return I(e.user)
}

function L(e) {
  return !!e.isMember && I(e.user)
}

function M(e) {
  let t = I(e.user),
    n = m[e.user.id];
  if (null == n) return t;
  let {
    avatar: i,
    guildId: s
  } = e;
  return v(n, s, i) || t
}

function U(e) {
  let {
    users: t
  } = e;
  t.forEach(e => {
    null == m[e.id] && (m[e.id] = new c.default(e))
  })
}

function k(e) {
  return I(e.member.user)
}

function w(e) {
  let {
    request: t
  } = e, {
    user: n,
    actioned_by_user: i
  } = t, s = !1;
  return null != n && (s = s || I(n)), null != i && (s = s || I(i)), s
}
class V extends s.default.Store {
  initialize() {
    this.waitFor(_.default)
  }
  getUserStoreVersion() {
    return E
  }
  getUser(e) {
    if (null != e) return m[e]
  }
  getUsers() {
    return m
  }
  forEach(e) {
    for (let t in m)
      if (!1 === e(m[t])) break
  }
  findByTag(e, t) {
    for (let n in m) {
      let i = m[n];
      if (null != t && i.username === e && i.discriminator === t) return i;
      if (null == t && i.username === e && i.isPomelo()) return i
    }
  }
  filter(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = [];
    for (let t in m) {
      let i = m[t];
      e(i) && n.push(i)
    }
    return t && n.sort((e, t) => e.username > t.username ? 1 : e.username < t.username ? -1 : 0), n
  }
  getCurrentUser() {
    return m[_.default.getId()]
  }
}
V.displayName = "UserStore";
var G = new V(r.default, {
  CONNECTION_OPEN: function(e) {
    let {
      user: t,
      users: n,
      guilds: i
    } = e;
    delete t.premium, delete t.banner_color, I(t), n.forEach(e => {
      I(e)
    }), i.forEach(e => {
      e.members.forEach(t => {
        let n = m[t.user.id];
        null != n && v(n, e.id, t.avatar)
      })
    });
    let s = m[_.default.getId()];
    null != s && (m[p] = new c.default({
      id: p,
      username: "Wumpus",
      discriminator: "0",
      globalName: "Wumpus",
      avatar: "c1f86b313385cb97985f1b118851c28c"
    }))
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      lazyPrivateChannels: n
    } = e;
    t.forEach(e => {
      e.members.forEach(t => {
        let n = m[t.user.id];
        null != n && v(n, e.id, t.avatar)
      })
    }), null == n || n.forEach(e => {
      var t;
      null === (t = e.rawRecipients) || void 0 === t || t.forEach(e => {
        I(e)
      })
    })
  },
  UPDATE_CLIENT_PREMIUM_TYPE: function(e) {
    let {
      user: t
    } = e;
    I(t)
  },
  OVERLAY_INITIALIZE: N,
  CACHE_LOADED: N,
  CACHE_LOADED_LAZY: N,
  USER_UPDATE: function(e) {
    let {
      user: t
    } = e;
    t.id !== _.default.getId() && I(t)
  },
  CURRENT_USER_UPDATE: function(e) {
    let {
      user: t
    } = e;
    I(t)
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => {
      let t = m[e.user.id];
      if (null == t) return !1;
      let n = P.reduce((n, s) => {
        if (e.user.hasOwnProperty(s)) {
          let r = t.set((0, i.camelCase)(s), e.user[s]);
          n = n || r !== t, t = r
        }
        return n
      }, !1);
      return !!n && (m[t.id] = t, n)
    }).some(e => e)
  },
  SEARCH_FINISH: function(e) {
    let {
      messages: t
    } = e;
    return t.forEach(e => R({
      messages: e
    })), !1
  },
  LOAD_MESSAGES_SUCCESS: R,
  LOAD_MESSAGES_AROUND_SUCCESS: R,
  LOAD_PINNED_MESSAGES_SUCCESS: R,
  LOAD_RECENT_MENTIONS_SUCCESS: R,
  THREAD_LIST_SYNC: function(e) {
    let {
      mostRecentMessages: t
    } = e;
    return null == t || t.forEach(e => A(e, !1)), !1
  },
  MESSAGE_CREATE: D,
  MESSAGE_UPDATE: D,
  GUILD_SETTINGS_LOADED_BANS: function(e) {
    let {
      bans: t
    } = e;
    t.forEach(e => I(e.user))
  },
  GUILD_SETTINGS_LOADED_BANS_BATCH: function(e) {
    let {
      bans: t
    } = e;
    t.forEach(e => I(e.user))
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    t.members.forEach(e => {
      let {
        user: {
          id: n,
          username: i,
          avatar: s,
          discriminator: r,
          bot: a
        },
        avatar: o
      } = e;
      n !== _.default.getId() && I({
        id: n,
        username: i,
        avatar: s,
        discriminator: r,
        bot: a
      });
      let l = m[n];
      null != l && v(l, t.id, o)
    })
  },
  GUILD_BAN_ADD: b,
  GUILD_BAN_REMOVE: b,
  CHANNEL_RECIPIENT_ADD: L,
  CHANNEL_RECIPIENT_REMOVE: L,
  GUILD_JOIN_REQUEST_CREATE: w,
  GUILD_JOIN_REQUEST_UPDATE: w,
  GUILD_MEMBER_ADD: M,
  GUILD_MEMBER_UPDATE: M,
  GUILD_MEMBERS_CHUNK: function(e) {
    let {
      members: t,
      guildId: n
    } = e;
    return t.reduce((e, t) => {
      let i = I(t.user),
        s = m[t.user.id];
      if (null == s) return i || e;
      let {
        avatar: r
      } = t;
      return v(s, n, r) || i || e
    }, !1)
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      members: t
    } = e, n = !1;
    return t.forEach(e => {
      null != e.member && I(e.member.user) && (n = !0), null != e.presence && I(e.presence.user) && (n = !0)
    }), n
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      addedMembers: t
    } = e, n = !1;
    return null == t || t.forEach(e => {
      null != e.member && I(e.member.user) && (n = !0), null != e.presence && I(e.presence.user) && (n = !0)
    }), n
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: {
        rawRecipients: t
      }
    } = e;
    return null != t && t.forEach(e => I(e)), !1
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    for (let {
        rawRecipients: e
      }
      of t) null != e && e.forEach(e => I(e));
    return !1
  },
  RELATIONSHIP_ADD: function(e) {
    return I(e.relationship.user)
  },
  LOAD_RELATIONSHIPS_SUCCESS: function(e) {
    let {
      relationships: t
    } = e;
    return t.reduce((e, t) => I(t.user) || e, !1)
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
    return I(e.suggestion.suggested_user)
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    let {
      suggestions: t
    } = e;
    return t.reduce((e, t) => I(t.suggested_user) || e, !1)
  },
  AUDIT_LOG_FETCH_SUCCESS: U,
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: U,
  LOBBY_CREATE: function(e) {
    let {
      lobby: t
    } = e;
    return t.members.reduce((e, t) => I(t.user) || e, !1)
  },
  LOBBY_MEMBER_CONNECT: k,
  LOBBY_MEMBER_UPDATE: k,
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    return null != t.user && I(t.user)
  },
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      appliedBoosts: t
    } = e;
    t.forEach(e => {
      let {
        user: t
      } = e;
      null != t && I(t)
    })
  },
  GUILD_FEED_FETCH_SUCCESS: function(e) {
    let {
      data: t
    } = e;
    (0, o.getMessagesFromGuildFeedFetch)(t).forEach(e => A(e, !0))
  },
  LOAD_THREADS_SUCCESS: O,
  LOAD_ARCHIVED_THREADS_SUCCESS: O,
  LOAD_FORUM_POSTS: function(e) {
    let {
      threads: t
    } = e;
    Object.values(t).forEach(e => {
      let {
        first_message: t,
        most_recent_message: n,
        owner: i
      } = e;
      null != t && A(t, !0), null != n && A(n, !0), null != i && null != i.user && I(i.user, !0)
    })
  },
  GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
    let {
      guildScheduledEventUsers: t,
      guildId: n
    } = e;
    t.forEach(e => {
      let {
        user: t,
        member: i
      } = e;
      if (null == t) return;
      I(t);
      let s = m[t.id],
        r = null == i ? void 0 : i.avatar;
      null != s && null != r && v(s, n, r)
    })
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function(e) {
    let {
      items: t
    } = e;
    t.forEach(e => {
      null != e.other_user && I(e.other_user)
    })
  },
  NOTIFICATION_CENTER_ITEM_CREATE: function(e) {
    let {
      item: t
    } = e;
    null != t.other_user && I(t.other_user)
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function(e) {
    let {
      supplementalData: t
    } = e;
    Object.values(t).forEach(e => {
      let {
        message_preview: t
      } = e;
      null != t && A(t, !0)
    })
  },
  STORE_APPLICATION_INTERACTION_FAKE_USER: function(e) {
    let {
      user: t
    } = e;
    I(t)
  },
  PASSIVE_UPDATE_V1: function(e) {
    var t;
    let n = !1;
    for (let i of null !== (t = e.members) && void 0 !== t ? t : []) I(i.user) && (n = !0), null != m[i.user.id] && v(m[i.user.id], e.guildId, i.avatar) && (n = !0);
    return n
  },
  LOCAL_MESSAGES_LOADED: function(e) {
    var t;
    let n = !1;
    for (let i of null !== (t = e.users) && void 0 !== t ? t : []) !Object.hasOwn(m, i.id) && (n = I(i) || n);
    return n
  },
  FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: function(e) {
    let {
      integrations: t
    } = e;
    t.forEach(e => y((0, u.createPrivateChannelIntegration)(e)))
  },
  PRIVATE_CHANNEL_INTEGRATION_CREATE: function(e) {
    let {
      integration: t
    } = e;
    y((0, u.createPrivateChannelIntegration)(t))
  },
  PRIVATE_CHANNEL_INTEGRATION_UPDATE: function(e) {
    let {
      integration: t
    } = e;
    y((0, u.createPrivateChannelIntegration)(t))
  },
  FAMILY_CENTER_INITIAL_LOAD: function(e) {
    let {
      users: t,
      familyCenterTeenActivity: n
    } = e, {
      users: i
    } = n, s = [...t, ...i];
    return s.reduce((e, t) => I(t) || e, !1)
  },
  FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: function(e) {
    let {
      users: t
    } = e;
    return t.reduce((e, t) => I(t) || e, !1)
  },
  FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: function(e) {
    let {
      familyCenterTeenActivity: t
    } = e;
    if (void 0 === t) return;
    let {
      users: n
    } = t;
    return n.reduce((e, t) => I(t) || e, !1)
  },
  FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: function(e) {
    let {
      familyCenterTeenActivity: t
    } = e, {
      users: n
    } = t;
    return n.reduce((e, t) => I(t) || e, !1)
  },
  FAMILY_CENTER_REQUEST_LINK_SUCCESS: function(e) {
    let {
      users: t
    } = e;
    return t.reduce((e, t) => I(t) || e, !1)
  },
  FRIEND_FINDER_PYMK_LOADED: function(e) {
    let {
      users: t
    } = e;
    return t.reduce((e, t) => I(t) || e, !1)
  },
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
    let {
      members: t
    } = e, n = _.default.getId();
    return t.reduce((e, t) => {
      if (t.member.user.id === n) return e;
      let i = I(t.member.user);
      return i || e
    }, !1)
  }
})