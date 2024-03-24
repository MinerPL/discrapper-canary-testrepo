"use strict";
let a, i, l, u, s, o;
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("808653"), n("702976"), n("222007");
var r = n("917351"),
  d = n.n(r),
  c = n("866227"),
  f = n.n(c),
  E = n("446674"),
  _ = n("872717"),
  S = n("913144"),
  N = n("233069"),
  T = n("813006"),
  g = n("517763"),
  C = n("766274"),
  A = n("42203"),
  M = n("49111");
let I = M.FormStates.CLOSED,
  h = {},
  L = {},
  p = !1,
  m = !1,
  v = null,
  O = ["name", "type", "topic_", "bitrate_", "userLimit_", "nsfw_", "flags_", "rateLimitPerUser_", "defaultThreadRateLimitPerUser", "defaultAutoArchiveDuration", "template", "defaultReactionEmoji", "rtcRegion", "videoQualityMode", "threadMetadata", "banner", "availableTags", "defaultSortOrder", "defaultForumLayout", "iconEmoji", "themeColor"];

function U(e) {
  let t = A.default.getChannel(e.channelId);
  if (null == t) return y();
  I = M.FormStates.OPEN, u = l = t, v = "location" in e && null != e.location ? e.location : null, i = "subsection" in e ? e.subsection : null, null != u && (u = u.set("nsfw", u.isNSFW())), s = A.default.getChannel(u.parent_id), o = u.getGuildId(), h = {}, R({
    type: "CHANNEL_SETTINGS_SET_SECTION",
    section: null != a ? a : M.ChannelSettingsSections.OVERVIEW,
    subsection: i
  })
}

function R(e) {
  a = e.section, i = e.subsection, null != u && a === M.ChannelSettingsSections.INSTANT_INVITES && (p = !0, _.HTTP.get({
    url: M.Endpoints.INSTANT_INVITES(u.id),
    oldFormErrors: !0
  }).then(e => {
    p = !1, S.default.dispatch({
      type: "CHANNEL_SETTINGS_LOADED_INVITES",
      invites: e.body
    })
  }, () => p = !1))
}

function y() {
  m = !1, I = M.FormStates.CLOSED, a = null, u = l = null, s = null, L = {}
}
let G = d.debounce(() => {
  if (null == u || null == l) return !1;
  let e = u.toJS(),
    t = l.toJS(),
    n = O.every(n => e[n] === t[n]);
  n && u !== l && (u = l, V.emitChange())
}, 500);

function b(e) {
  return new g.default({
    code: e.code,
    temporary: e.temporary,
    revoked: e.revoked,
    inviter: null != e.inviter ? new C.default(e.inviter) : null,
    channel: (0, N.createChannelRecordFromInvite)(e.channel),
    guild: null != e.guild ? new T.default(e.guild) : null,
    uses: e.uses,
    maxUses: e.max_uses,
    maxAge: e.max_age,
    createdAt: f(e.created_at),
    type: e.type
  })
}
class H extends E.default.Store {
  initialize() {
    this.waitFor(A.default)
  }
  hasChanges() {
    return u !== l
  }
  isOpen() {
    return m
  }
  getSection() {
    return a
  }
  getInvites() {
    return {
      invites: L,
      loading: p
    }
  }
  showNotice() {
    return this.hasChanges()
  }
  getChannel() {
    return u
  }
  getFormState() {
    return I
  }
  getCategory() {
    return s
  }
  getProps() {
    return {
      submitting: I === M.FormStates.SUBMITTING,
      errors: h,
      channel: u,
      section: a,
      subsection: i,
      invites: L,
      selectedOverwriteId: o,
      hasChanges: this.hasChanges(),
      analyticsLocation: v
    }
  }
}
H.displayName = "ChannelSettingsStore";
let V = new H(S.default, {
  CHANNEL_SETTINGS_INIT: U,
  CHANNEL_SETTINGS_OPEN: function(e) {
    m = !0, U(e)
  },
  CHANNEL_SETTINGS_SUBMIT: function() {
    I = M.FormStates.SUBMITTING, h = {}
  },
  CHANNEL_SETTINGS_SUBMIT_SUCCESS: function() {
    l = u, I = M.FormStates.OPEN
  },
  CHANNEL_SETTINGS_SUBMIT_FAILURE: function(e) {
    var t;
    I = M.FormStates.OPEN, h = Object.keys(null !== (t = e.errors) && void 0 !== t ? t : {}).reduce((t, n) => {
      let a = e.errors[n];
      return (0, r.isArray)(a) ? t[n] = a.join("\n") : t[n] = a, t
    }, {})
  },
  CHANNEL_SETTINGS_CLOSE: y,
  CHANNEL_SETTINGS_OVERWRITE_SELECT: function(e) {
    let {
      overwriteId: t
    } = e;
    o = t
  },
  CHANNEL_SETTINGS_UPDATE: function(e) {
    let {
      name: t,
      channelType: n,
      topic: a,
      bitrate: i,
      userLimit: l,
      nsfw: s,
      flags: o,
      rateLimitPerUser: r,
      defaultThreadRateLimitPerUser: d,
      autoArchiveDuration: c,
      locked: f,
      invitable: E,
      defaultAutoArchiveDuration: _,
      template: S,
      defaultReactionEmoji: N,
      rtcRegion: T,
      videoQualityMode: g,
      availableTags: C,
      defaultSortOrder: A,
      defaultForumLayout: M,
      iconEmoji: I,
      themeColor: h
    } = e;
    if (null == u) return !1;
    null != t && (u = u.set("name", t)), null != a && (u = u.set("topic", a)), null != i && (u = u.set("bitrate", i)), null != l && (u = u.set("userLimit", l)), null != s && (u = u.set("nsfw", s)), null != o && (u = u.set("flags", o)), null != r && (u = u.set("rateLimitPerUser", r)), null != d && (u = u.set("defaultThreadRateLimitPerUser", d)), null != c && (u = u.set("threadMetadata", {
      ...u.threadMetadata,
      autoArchiveDuration: c
    })), null != f && (u = u.set("threadMetadata", {
      ...u.threadMetadata,
      locked: f
    })), null != E && (u = u.set("threadMetadata", {
      ...u.threadMetadata,
      invitable: E
    })), null != _ && (u = u.set("defaultAutoArchiveDuration", _)), null != S && (u = u.set("template", S)), null != n && (u = u.set("type", n)), void 0 !== T && (u = u.set("rtcRegion", T)), null != g && (u = u.set("videoQualityMode", g)), void 0 !== N && (u = u.set("defaultReactionEmoji", N)), null != C && (u = u.set("availableTags", C)), null != A && (u = u.set("defaultSortOrder", A)), null != M && (u = u.set("defaultForumLayout", M)), void 0 !== I && (u = u.set("iconEmoji", I)), null != h && (u = u.set("themeColor", h)), G()
  },
  CHANNEL_SETTINGS_SET_SECTION: R,
  CHANNEL_SETTINGS_LOADED_INVITES: function(e) {
    L = {}, e.invites.forEach(e => {
      L[e.code] = b(e)
    })
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    if (null == u) return !1;
    let n = !1;
    for (let e of t)(function(e) {
      if (null == l || l.id !== e) return !1;
      if (l === u) {
        let t = A.default.getChannel(e);
        if (null == t) return !1;
        u = l = t, s = A.default.getChannel(u.parent_id)
      } else {
        let t = A.default.getChannel(e);
        if (null == t) return !1;
        l = t, null != u && (u = u.set("permissionOverwrites", l.permissionOverwrites), s = A.default.getChannel(u.parent_id))
      }
      return !0
    })(e.id) && null != u && (null != o && null == u.permissionOverwrites[o] && (o = u.getGuildId()), n = !0);
    return n
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e;
    if (null == u || u.id !== t) return !1;
    I = M.FormStates.CLOSED
  },
  INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
    L = {
      ...L
    }, delete L[e.code]
  },
  INSTANT_INVITE_CREATE_SUCCESS: function(e) {
    L = {
      ...L,
      [e.invite.code]: b(e.invite)
    }
  }
});
var x = V