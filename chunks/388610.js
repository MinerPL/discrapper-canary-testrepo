"use strict";
let l, a, i, u, r, o;
n.r(t), n("724458"), n("789020"), n("47120");
var s, d, c, _, E = n("392711"),
  f = n.n(E),
  N = n("913527"),
  S = n.n(N),
  T = n("442837"),
  C = n("544891"),
  h = n("570140"),
  m = n("131704"),
  I = n("601964"),
  p = n("758449"),
  A = n("598077"),
  L = n("592125"),
  v = n("981631");
let g = v.FormStates.CLOSED,
  y = {},
  O = {},
  G = !1,
  M = !1,
  H = null,
  U = ["name", "type", "topic_", "bitrate_", "userLimit_", "nsfw_", "flags_", "rateLimitPerUser_", "defaultThreadRateLimitPerUser", "defaultAutoArchiveDuration", "template", "defaultReactionEmoji", "rtcRegion", "videoQualityMode", "threadMetadata", "banner", "availableTags", "defaultSortOrder", "defaultForumLayout", "iconEmoji", "themeColor"];

function b(e) {
  let t = L.default.getChannel(e.channelId);
  if (null == t) return P();
  g = v.FormStates.OPEN, u = i = t, H = "location" in e && null != e.location ? e.location : null, a = "subsection" in e ? e.subsection : null, null != u && (u = u.set("nsfw", u.isNSFW())), r = L.default.getChannel(u.parent_id), o = u.getGuildId(), y = {}, j({
    type: "CHANNEL_SETTINGS_SET_SECTION",
    section: null != l ? l : v.ChannelSettingsSections.OVERVIEW,
    subsection: a
  })
}

function j(e) {
  l = e.section, a = e.subsection, null != u && l === v.ChannelSettingsSections.INSTANT_INVITES && (G = !0, C.HTTP.get({
    url: v.Endpoints.INSTANT_INVITES(u.id),
    oldFormErrors: !0
  }).then(e => {
    G = !1, h.default.dispatch({
      type: "CHANNEL_SETTINGS_LOADED_INVITES",
      invites: e.body
    })
  }, () => G = !1))
}

function P() {
  M = !1, g = v.FormStates.CLOSED, l = null, u = i = null, r = null, O = {}
}
let D = f().debounce(() => {
  if (null == u || null == i) return !1;
  let e = u.toJS(),
    t = i.toJS();
  U.every(n => e[n] === t[n]) && u !== i && (u = i, w.emitChange())
}, 500);

function R(e) {
  return new p.default({
    code: e.code,
    temporary: e.temporary,
    revoked: e.revoked,
    inviter: null != e.inviter ? new A.default(e.inviter) : null,
    channel: (0, m.createChannelRecordFromInvite)(e.channel),
    guild: null != e.guild ? new I.default(e.guild) : null,
    uses: e.uses,
    maxUses: e.max_uses,
    maxAge: e.max_age,
    createdAt: S()(e.created_at),
    type: e.type
  })
}
class F extends(s = T.default.Store) {
  initialize() {
    this.waitFor(L.default)
  }
  hasChanges() {
    return u !== i
  }
  isOpen() {
    return M
  }
  getSection() {
    return l
  }
  getInvites() {
    return {
      invites: O,
      loading: G
    }
  }
  showNotice() {
    return this.hasChanges()
  }
  getChannel() {
    return u
  }
  getFormState() {
    return g
  }
  getCategory() {
    return r
  }
  getProps() {
    return {
      submitting: g === v.FormStates.SUBMITTING,
      errors: y,
      channel: u,
      section: l,
      subsection: a,
      invites: O,
      selectedOverwriteId: o,
      hasChanges: this.hasChanges(),
      analyticsLocation: H
    }
  }
}
_ = "ChannelSettingsStore", (c = "displayName") in(d = F) ? Object.defineProperty(d, c, {
  value: _,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[c] = _;
let w = new F(h.default, {
  CHANNEL_SETTINGS_INIT: b,
  CHANNEL_SETTINGS_OPEN: function(e) {
    M = !0, b(e)
  },
  CHANNEL_SETTINGS_SUBMIT: function() {
    g = v.FormStates.SUBMITTING, y = {}
  },
  CHANNEL_SETTINGS_SUBMIT_SUCCESS: function() {
    i = u, g = v.FormStates.OPEN
  },
  CHANNEL_SETTINGS_SUBMIT_FAILURE: function(e) {
    var t;
    g = v.FormStates.OPEN, y = Object.keys(null !== (t = e.errors) && void 0 !== t ? t : {}).reduce((t, n) => {
      let l = e.errors[n];
      return (0, E.isArray)(l) ? t[n] = l.join("\n") : t[n] = l, t
    }, {})
  },
  CHANNEL_SETTINGS_CLOSE: P,
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
      topic: l,
      bitrate: a,
      userLimit: i,
      nsfw: r,
      flags: o,
      rateLimitPerUser: s,
      defaultThreadRateLimitPerUser: d,
      autoArchiveDuration: c,
      locked: _,
      invitable: E,
      defaultAutoArchiveDuration: f,
      template: N,
      defaultReactionEmoji: S,
      rtcRegion: T,
      videoQualityMode: C,
      availableTags: h,
      defaultSortOrder: m,
      defaultForumLayout: I,
      iconEmoji: p,
      themeColor: A
    } = e;
    if (null == u) return !1;
    null != t && (u = u.set("name", t)), null != l && (u = u.set("topic", l)), null != a && (u = u.set("bitrate", a)), null != i && (u = u.set("userLimit", i)), null != r && (u = u.set("nsfw", r)), null != o && (u = u.set("flags", o)), null != s && (u = u.set("rateLimitPerUser", s)), null != d && (u = u.set("defaultThreadRateLimitPerUser", d)), null != c && (u = u.set("threadMetadata", {
      ...u.threadMetadata,
      autoArchiveDuration: c
    })), null != _ && (u = u.set("threadMetadata", {
      ...u.threadMetadata,
      locked: _
    })), null != E && (u = u.set("threadMetadata", {
      ...u.threadMetadata,
      invitable: E
    })), null != f && (u = u.set("defaultAutoArchiveDuration", f)), null != N && (u = u.set("template", N)), null != n && (u = u.set("type", n)), void 0 !== T && (u = u.set("rtcRegion", T)), null != C && (u = u.set("videoQualityMode", C)), void 0 !== S && (u = u.set("defaultReactionEmoji", S)), null != h && (u = u.set("availableTags", h)), null != m && (u = u.set("defaultSortOrder", m)), null != I && (u = u.set("defaultForumLayout", I)), void 0 !== p && (u = u.set("iconEmoji", p)), null != A && (u = u.set("themeColor", A)), D()
  },
  CHANNEL_SETTINGS_SET_SECTION: j,
  CHANNEL_SETTINGS_LOADED_INVITES: function(e) {
    O = {}, e.invites.forEach(e => {
      O[e.code] = R(e)
    })
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    if (null == u) return !1;
    let n = !1;
    for (let e of t)(function(e) {
      if (null == i || i.id !== e) return !1;
      if (i === u) {
        let t = L.default.getChannel(e);
        if (null == t) return !1;
        u = i = t, r = L.default.getChannel(u.parent_id)
      } else {
        let t = L.default.getChannel(e);
        if (null == t) return !1;
        i = t, null != u && (u = u.set("permissionOverwrites", i.permissionOverwrites), r = L.default.getChannel(u.parent_id))
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
    g = v.FormStates.CLOSED
  },
  INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
    O = {
      ...O
    }, delete O[e.code]
  },
  INSTANT_INVITE_CREATE_SUCCESS: function(e) {
    O = {
      ...O,
      [e.invite.code]: R(e.invite)
    }
  }
});
t.default = w