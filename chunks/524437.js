"use strict";
n.d(t, {
  C4: function() {
    return G
  },
  Dd: function() {
    return d
  },
  E5: function() {
    return l
  },
  Fm: function() {
    return eu
  },
  JY: function() {
    return eP
  },
  Me: function() {
    return et
  },
  Q2: function() {
    return u
  },
  Q4: function() {
    return o
  },
  Us: function() {
    return _
  },
  X: function() {
    return i
  },
  Xr: function() {
    return a
  },
  aV: function() {
    return eD
  },
  az: function() {
    return F
  },
  bE: function() {
    return es
  },
  f9: function() {
    return P
  },
  nI: function() {
    return s
  },
  o8: function() {
    return D
  },
  os: function() {
    return U
  },
  p5: function() {
    return x
  },
  sf: function() {
    return ei
  },
  tA: function() {
    return ea
  },
  v_: function() {
    return q
  },
  yX: function() {
    return ep
  }
}), n(47120), n(411104), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(653041);
var i, r, s, o, a, l, u, _, d, c, E, I, T, h, S, f, N, A, m = n(230367),
  O = n(320215),
  R = n(240773),
  C = n(495852),
  p = n(381499),
  g = n(835913),
  L = n(397696);
(c = i || (i = {}))[c.UNSPECIFIED = 0] = "UNSPECIFIED", c[c.MENTIONS = 1] = "MENTIONS", c[c.UNREADS = 2] = "UNREADS", c[c.TODOS = 3] = "TODOS", c[c.FOR_YOU = 4] = "FOR_YOU", c[c.GAME_INVITES = 5] = "GAME_INVITES", (E = r || (r = {}))[E.NO_PROGRESS = 0] = "NO_PROGRESS", E[E.JOIN_GUILD = 1] = "JOIN_GUILD", E[E.INVITE_USER = 2] = "INVITE_USER", E[E.CONTACT_SYNC = 4] = "CONTACT_SYNC", (I = s || (s = {}))[I.NO_GUILD_ONBOARDING = 0] = "NO_GUILD_ONBOARDING", I[I.GUILD_NOTICE_SHOWN = 1] = "GUILD_NOTICE_SHOWN", I[I.GUILD_NOTICE_CLEARED = 2] = "GUILD_NOTICE_CLEARED", (T = o || (o = {}))[T.UNSET_EXPLICIT_CONTENT_REDACTION = 0] = "UNSET_EXPLICIT_CONTENT_REDACTION", T[T.SHOW = 1] = "SHOW", T[T.BLUR = 2] = "BLUR", T[T.BLOCK = 3] = "BLOCK", (h = a || (a = {}))[h.DEFAULT_UNSET = 0] = "DEFAULT_UNSET", h[h.DISABLED = 1] = "DISABLED", h[h.NON_FRIENDS = 2] = "NON_FRIENDS", h[h.FRIENDS_AND_NON_FRIENDS = 3] = "FRIENDS_AND_NON_FRIENDS", (S = l || (l = {}))[S.OFF = 0] = "OFF", S[S.ON_FOR_LARGE_GUILDS = 1] = "ON_FOR_LARGE_GUILDS", (f = u || (u = {}))[f.UNSET = 0] = "UNSET", f[f.DARK = 1] = "DARK", f[f.LIGHT = 2] = "LIGHT", f[f.DARKER = 3] = "DARKER", f[f.MIDNIGHT = 4] = "MIDNIGHT", (N = _ || (_ = {}))[N.MINT_APPLE = 0] = "MINT_APPLE", N[N.CITRUS_SHERBERT = 1] = "CITRUS_SHERBERT", N[N.RETRO_RAINCLOUD = 2] = "RETRO_RAINCLOUD", N[N.HANAMI = 3] = "HANAMI", N[N.SUNRISE = 4] = "SUNRISE", N[N.COTTON_CANDY = 5] = "COTTON_CANDY", N[N.LOFI_VIBES = 6] = "LOFI_VIBES", N[N.DESERT_KHAKI = 7] = "DESERT_KHAKI", N[N.SUNSET = 8] = "SUNSET", N[N.CHROMA_GLOW = 9] = "CHROMA_GLOW", N[N.FOREST = 10] = "FOREST", N[N.CRIMSON_MOON = 11] = "CRIMSON_MOON", N[N.MIDNIGHT_BLURPLE = 12] = "MIDNIGHT_BLURPLE", N[N.MARS = 13] = "MARS", N[N.DUSK = 14] = "DUSK", N[N.UNDER_THE_SEA = 15] = "UNDER_THE_SEA", N[N.EASTER_EGG = 16] = "EASTER_EGG", N[N.RETRO_STORM = 17] = "RETRO_STORM", N[N.NEON_NIGHTS = 18] = "NEON_NIGHTS", N[N.SEPIA = 19] = "SEPIA", N[N.STRAWBERRY_LEMONADE = 20] = "STRAWBERRY_LEMONADE", N[N.AURORA = 21] = "AURORA", N[N.BLURPLE_TWILIGHT = 22] = "BLURPLE_TWILIGHT", (A = d || (d = {}))[A.UNSET_FAVORITE_CHANNEL_TYPE = 0] = "UNSET_FAVORITE_CHANNEL_TYPE", A[A.REFERENCE_ORIGINAL = 1] = "REFERENCE_ORIGINAL", A[A.CATEGORY = 2] = "CATEGORY";
class v extends C.C {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.versions = L.L.internalBinaryRead(e, e.uint32(), n, r.versions);
          break;
        case 2:
          r.inbox = P.internalBinaryRead(e, e.uint32(), n, r.inbox);
          break;
        case 3:
          r.guilds = U.internalBinaryRead(e, e.uint32(), n, r.guilds);
          break;
        case 4:
          r.userContent = F.internalBinaryRead(e, e.uint32(), n, r.userContent);
          break;
        case 5:
          r.voiceAndVideo = q.internalBinaryRead(e, e.uint32(), n, r.voiceAndVideo);
          break;
        case 6:
          r.textAndImages = et.internalBinaryRead(e, e.uint32(), n, r.textAndImages);
          break;
        case 7:
          r.notifications = ei.internalBinaryRead(e, e.uint32(), n, r.notifications);
          break;
        case 8:
          r.privacy = es.internalBinaryRead(e, e.uint32(), n, r.privacy);
          break;
        case 9:
          r.debug = ea.internalBinaryRead(e, e.uint32(), n, r.debug);
          break;
        case 10:
          r.gameLibrary = eu.internalBinaryRead(e, e.uint32(), n, r.gameLibrary);
          break;
        case 11:
          r.status = ed.internalBinaryRead(e, e.uint32(), n, r.status);
          break;
        case 12:
          r.localization = eT.internalBinaryRead(e, e.uint32(), n, r.localization);
          break;
        case 13:
          r.appearance = eN.internalBinaryRead(e, e.uint32(), n, r.appearance);
          break;
        case 14:
          r.guildFolders = eR.internalBinaryRead(e, e.uint32(), n, r.guildFolders);
          break;
        case 15:
          r.favorites = eL.internalBinaryRead(e, e.uint32(), n, r.favorites);
          break;
        case 16:
          r.audioContextSettings = eU.internalBinaryRead(e, e.uint32(), n, r.audioContextSettings);
          break;
        case 17:
          r.communities = eG.internalBinaryRead(e, e.uint32(), n, r.communities);
          break;
        case 18:
          r.broadcast = eZ.internalBinaryRead(e, e.uint32(), n, r.broadcast);
          break;
        case 19:
          r.clips = eF.internalBinaryRead(e, e.uint32(), n, r.clips);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.versions && L.L.internalBinaryWrite(e.versions, t.tag(1, m.TD.LengthDelimited).fork(), n).join(), e.inbox && P.internalBinaryWrite(e.inbox, t.tag(2, m.TD.LengthDelimited).fork(), n).join(), e.guilds && U.internalBinaryWrite(e.guilds, t.tag(3, m.TD.LengthDelimited).fork(), n).join(), e.userContent && F.internalBinaryWrite(e.userContent, t.tag(4, m.TD.LengthDelimited).fork(), n).join(), e.voiceAndVideo && q.internalBinaryWrite(e.voiceAndVideo, t.tag(5, m.TD.LengthDelimited).fork(), n).join(), e.textAndImages && et.internalBinaryWrite(e.textAndImages, t.tag(6, m.TD.LengthDelimited).fork(), n).join(), e.notifications && ei.internalBinaryWrite(e.notifications, t.tag(7, m.TD.LengthDelimited).fork(), n).join(), e.privacy && es.internalBinaryWrite(e.privacy, t.tag(8, m.TD.LengthDelimited).fork(), n).join(), e.debug && ea.internalBinaryWrite(e.debug, t.tag(9, m.TD.LengthDelimited).fork(), n).join(), e.gameLibrary && eu.internalBinaryWrite(e.gameLibrary, t.tag(10, m.TD.LengthDelimited).fork(), n).join(), e.status && ed.internalBinaryWrite(e.status, t.tag(11, m.TD.LengthDelimited).fork(), n).join(), e.localization && eT.internalBinaryWrite(e.localization, t.tag(12, m.TD.LengthDelimited).fork(), n).join(), e.appearance && eN.internalBinaryWrite(e.appearance, t.tag(13, m.TD.LengthDelimited).fork(), n).join(), e.guildFolders && eR.internalBinaryWrite(e.guildFolders, t.tag(14, m.TD.LengthDelimited).fork(), n).join(), e.favorites && eL.internalBinaryWrite(e.favorites, t.tag(15, m.TD.LengthDelimited).fork(), n).join(), e.audioContextSettings && eU.internalBinaryWrite(e.audioContextSettings, t.tag(16, m.TD.LengthDelimited).fork(), n).join(), e.communities && eG.internalBinaryWrite(e.communities, t.tag(17, m.TD.LengthDelimited).fork(), n).join(), e.broadcast && eZ.internalBinaryWrite(e.broadcast, t.tag(18, m.TD.LengthDelimited).fork(), n).join(), e.clips && eF.internalBinaryWrite(e.clips, t.tag(19, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings", [{
      no: 1,
      name: "versions",
      kind: "message",
      T: () => L.L
    }, {
      no: 2,
      name: "inbox",
      kind: "message",
      T: () => P
    }, {
      no: 3,
      name: "guilds",
      kind: "message",
      T: () => U
    }, {
      no: 4,
      name: "user_content",
      kind: "message",
      T: () => F
    }, {
      no: 5,
      name: "voice_and_video",
      kind: "message",
      T: () => q
    }, {
      no: 6,
      name: "text_and_images",
      kind: "message",
      T: () => et
    }, {
      no: 7,
      name: "notifications",
      kind: "message",
      T: () => ei
    }, {
      no: 8,
      name: "privacy",
      kind: "message",
      T: () => es
    }, {
      no: 9,
      name: "debug",
      kind: "message",
      T: () => ea
    }, {
      no: 10,
      name: "game_library",
      kind: "message",
      T: () => eu
    }, {
      no: 11,
      name: "status",
      kind: "message",
      T: () => ed
    }, {
      no: 12,
      name: "localization",
      kind: "message",
      T: () => eT
    }, {
      no: 13,
      name: "appearance",
      kind: "message",
      T: () => eN
    }, {
      no: 14,
      name: "guild_folders",
      kind: "message",
      T: () => eR
    }, {
      no: 15,
      name: "favorites",
      kind: "message",
      T: () => eL
    }, {
      no: 16,
      name: "audio_context_settings",
      kind: "message",
      T: () => eU
    }, {
      no: 17,
      name: "communities",
      kind: "message",
      T: () => eG
    }, {
      no: 18,
      name: "broadcast",
      kind: "message",
      T: () => eZ
    }, {
      no: 19,
      name: "clips",
      kind: "message",
      T: () => eF
    }])
  }
}
let D = new v;
class M extends C.C {
  create(e) {
    let t = {
      currentTab: 0,
      viewedTutorial: !1
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.currentTab = e.int32();
          break;
        case 2:
          r.viewedTutorial = e.bool();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.currentTab && t.tag(1, m.TD.Varint).int32(e.currentTab), !1 !== e.viewedTutorial && t.tag(2, m.TD.Varint).bool(e.viewedTutorial);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.InboxSettings", [{
      no: 1,
      name: "current_tab",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.InboxTab", i, "INBOX_TAB_"]
    }, {
      no: 2,
      name: "viewed_tutorial",
      kind: "scalar",
      T: 8
    }])
  }
}
let P = new M;
class y extends C.C {
  create(e) {
    let t = {
      guilds: {}
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      if (1 === t) this.binaryReadMap1(r.guilds, e, n);
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let o = e.skip(i);
        !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  binaryReadMap1(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, o;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.fixed64().toString();
          break;
        case 2:
          o = G.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.AllGuildSettings.guilds")
      }
    }
    e[null != s ? s : "0"] = null != o ? o : G.create()
  }
  internalBinaryWrite(e, t, n) {
    for (let i of Object.keys(e.guilds)) t.tag(1, m.TD.LengthDelimited).fork().tag(1, m.TD.Bit64).fixed64(i), t.tag(2, m.TD.LengthDelimited).fork(), G.internalBinaryWrite(e.guilds[i], t, n), t.join().join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.AllGuildSettings", [{
      no: 1,
      name: "guilds",
      kind: "map",
      K: 6,
      V: {
        kind: "message",
        T: () => G
      }
    }])
  }
}
let U = new y;
class b extends C.C {
  create(e) {
    let t = {
      channels: {},
      hubProgress: 0,
      guildOnboardingProgress: 0,
      dismissedGuildContent: new Uint8Array(0),
      disableRaidAlertPush: !1,
      disableRaidAlertNag: !1
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          this.binaryReadMap1(r.channels, e, n);
          break;
        case 2:
          r.hubProgress = e.uint32();
          break;
        case 3:
          r.guildOnboardingProgress = e.uint32();
          break;
        case 4:
          r.guildRecentsDismissedAt = g.E.internalBinaryRead(e, e.uint32(), n, r.guildRecentsDismissedAt);
          break;
        case 5:
          r.dismissedGuildContent = e.bytes();
          break;
        case 6:
          r.joinSound = ex.internalBinaryRead(e, e.uint32(), n, r.joinSound);
          break;
        case 7:
          r.mobileRedesignChannelListSettings = eS.internalBinaryRead(e, e.uint32(), n, r.mobileRedesignChannelListSettings);
          break;
        case 8:
          r.disableRaidAlertPush = e.bool();
          break;
        case 9:
          r.disableRaidAlertNag = e.bool();
          break;
        case 10:
          r.customNotificationSoundConfig = Z.internalBinaryRead(e, e.uint32(), n, r.customNotificationSoundConfig);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  binaryReadMap1(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, o;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.fixed64().toString();
          break;
        case 2:
          o = x.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.channels")
      }
    }
    e[null != s ? s : "0"] = null != o ? o : x.create()
  }
  internalBinaryWrite(e, t, n) {
    for (let i of Object.keys(e.channels)) t.tag(1, m.TD.LengthDelimited).fork().tag(1, m.TD.Bit64).fixed64(i), t.tag(2, m.TD.LengthDelimited).fork(), x.internalBinaryWrite(e.channels[i], t, n), t.join().join();
    0 !== e.hubProgress && t.tag(2, m.TD.Varint).uint32(e.hubProgress), 0 !== e.guildOnboardingProgress && t.tag(3, m.TD.Varint).uint32(e.guildOnboardingProgress), e.guildRecentsDismissedAt && g.E.internalBinaryWrite(e.guildRecentsDismissedAt, t.tag(4, m.TD.LengthDelimited).fork(), n).join(), e.dismissedGuildContent.length && t.tag(5, m.TD.LengthDelimited).bytes(e.dismissedGuildContent), e.joinSound && ex.internalBinaryWrite(e.joinSound, t.tag(6, m.TD.LengthDelimited).fork(), n).join(), e.mobileRedesignChannelListSettings && eS.internalBinaryWrite(e.mobileRedesignChannelListSettings, t.tag(7, m.TD.LengthDelimited).fork(), n).join(), !1 !== e.disableRaidAlertPush && t.tag(8, m.TD.Varint).bool(e.disableRaidAlertPush), !1 !== e.disableRaidAlertNag && t.tag(9, m.TD.Varint).bool(e.disableRaidAlertNag), e.customNotificationSoundConfig && Z.internalBinaryWrite(e.customNotificationSoundConfig, t.tag(10, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.GuildSettings", [{
      no: 1,
      name: "channels",
      kind: "map",
      K: 6,
      V: {
        kind: "message",
        T: () => x
      }
    }, {
      no: 2,
      name: "hub_progress",
      kind: "scalar",
      T: 13
    }, {
      no: 3,
      name: "guild_onboarding_progress",
      kind: "scalar",
      T: 13
    }, {
      no: 4,
      name: "guild_recents_dismissed_at",
      kind: "message",
      T: () => g.E
    }, {
      no: 5,
      name: "dismissed_guild_content",
      kind: "scalar",
      T: 12
    }, {
      no: 6,
      name: "join_sound",
      kind: "message",
      T: () => ex
    }, {
      no: 7,
      name: "mobile_redesign_channel_list_settings",
      kind: "message",
      T: () => eS
    }, {
      no: 8,
      name: "disable_raid_alert_push",
      kind: "scalar",
      T: 8
    }, {
      no: 9,
      name: "disable_raid_alert_nag",
      kind: "scalar",
      T: 8
    }, {
      no: 10,
      name: "custom_notification_sound_config",
      kind: "message",
      T: () => Z
    }])
  }
}
let G = new b;
class w extends C.C {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.id = p.wA.internalBinaryRead(e, e.uint32(), n, r.id);
          break;
        case 2:
          r.name = p.Gm.internalBinaryRead(e, e.uint32(), n, r.name);
          break;
        case 3:
          r.color = p.wA.internalBinaryRead(e, e.uint32(), n, r.color);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.id && p.wA.internalBinaryWrite(e.id, t.tag(1, m.TD.LengthDelimited).fork(), n).join(), e.name && p.Gm.internalBinaryWrite(e.name, t.tag(2, m.TD.LengthDelimited).fork(), n).join(), e.color && p.wA.internalBinaryWrite(e.color, t.tag(3, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.ChannelIconEmoji", [{
      no: 1,
      name: "id",
      kind: "message",
      T: () => p.wA
    }, {
      no: 2,
      name: "name",
      kind: "message",
      T: () => p.Gm
    }, {
      no: 3,
      name: "color",
      kind: "message",
      T: () => p.wA
    }])
  }
}
let k = new w;
class B extends C.C {
  create(e) {
    let t = {
      collapsedInInbox: !1
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.collapsedInInbox = e.bool();
          break;
        case 2:
          r.iconEmoji = k.internalBinaryRead(e, e.uint32(), n, r.iconEmoji);
          break;
        case 3:
          r.customNotificationSoundConfig = Z.internalBinaryRead(e, e.uint32(), n, r.customNotificationSoundConfig);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    !1 !== e.collapsedInInbox && t.tag(1, m.TD.Varint).bool(e.collapsedInInbox), e.iconEmoji && k.internalBinaryWrite(e.iconEmoji, t.tag(2, m.TD.LengthDelimited).fork(), n).join(), e.customNotificationSoundConfig && Z.internalBinaryWrite(e.customNotificationSoundConfig, t.tag(3, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.ChannelSettings", [{
      no: 1,
      name: "collapsed_in_inbox",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "icon_emoji",
      kind: "message",
      T: () => k
    }, {
      no: 3,
      name: "custom_notification_sound_config",
      kind: "message",
      T: () => Z
    }])
  }
}
let x = new B;
class V extends C.C {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      if (1 === t) r.notificationSoundPackId = p.Gm.internalBinaryRead(e, e.uint32(), n, r.notificationSoundPackId);
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let o = e.skip(i);
        !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.notificationSoundPackId && p.Gm.internalBinaryWrite(e.notificationSoundPackId, t.tag(1, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.CustomNotificationSoundConfig", [{
      no: 1,
      name: "notification_sound_pack_id",
      kind: "message",
      T: () => p.Gm
    }])
  }
}
let Z = new V;
class H extends C.C {
  create(e) {
    let t = {
      dismissedContents: new Uint8Array(0),
      lastReceivedChangelogId: "0"
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.dismissedContents = e.bytes();
          break;
        case 2:
          r.lastDismissedOutboundPromotionStartDate = p.Gm.internalBinaryRead(e, e.uint32(), n, r.lastDismissedOutboundPromotionStartDate);
          break;
        case 3:
          r.premiumTier0ModalDismissedAt = g.E.internalBinaryRead(e, e.uint32(), n, r.premiumTier0ModalDismissedAt);
          break;
        case 4:
          r.guildOnboardingUpsellDismissedAt = g.E.internalBinaryRead(e, e.uint32(), n, r.guildOnboardingUpsellDismissedAt);
          break;
        case 5:
          r.safetyUserSentimentNoticeDismissedAt = g.E.internalBinaryRead(e, e.uint32(), n, r.safetyUserSentimentNoticeDismissedAt);
          break;
        case 6:
          r.lastReceivedChangelogId = e.fixed64().toString();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.dismissedContents.length && t.tag(1, m.TD.LengthDelimited).bytes(e.dismissedContents), e.lastDismissedOutboundPromotionStartDate && p.Gm.internalBinaryWrite(e.lastDismissedOutboundPromotionStartDate, t.tag(2, m.TD.LengthDelimited).fork(), n).join(), e.premiumTier0ModalDismissedAt && g.E.internalBinaryWrite(e.premiumTier0ModalDismissedAt, t.tag(3, m.TD.LengthDelimited).fork(), n).join(), e.guildOnboardingUpsellDismissedAt && g.E.internalBinaryWrite(e.guildOnboardingUpsellDismissedAt, t.tag(4, m.TD.LengthDelimited).fork(), n).join(), e.safetyUserSentimentNoticeDismissedAt && g.E.internalBinaryWrite(e.safetyUserSentimentNoticeDismissedAt, t.tag(5, m.TD.LengthDelimited).fork(), n).join(), "0" !== e.lastReceivedChangelogId && t.tag(6, m.TD.Bit64).fixed64(e.lastReceivedChangelogId);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.UserContentSettings", [{
      no: 1,
      name: "dismissed_contents",
      kind: "scalar",
      T: 12
    }, {
      no: 2,
      name: "last_dismissed_outbound_promotion_start_date",
      kind: "message",
      T: () => p.Gm
    }, {
      no: 3,
      name: "premium_tier_0_modal_dismissed_at",
      kind: "message",
      T: () => g.E
    }, {
      no: 4,
      name: "guild_onboarding_upsell_dismissed_at",
      kind: "message",
      T: () => g.E
    }, {
      no: 5,
      name: "safety_user_sentiment_notice_dismissed_at",
      kind: "message",
      T: () => g.E
    }, {
      no: 6,
      name: "last_received_changelog_id",
      kind: "scalar",
      T: 6
    }])
  }
}
let F = new H;
class Y extends C.C {
  create(e) {
    let t = {
      id: "0",
      assetHash: ""
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.id = e.fixed64().toString();
          break;
        case 2:
          r.assetHash = e.string();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    "0" !== e.id && t.tag(1, m.TD.Bit64).fixed64(e.id), "" !== e.assetHash && t.tag(2, m.TD.LengthDelimited).string(e.assetHash);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.VideoFilterAsset", [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 6
    }, {
      no: 2,
      name: "asset_hash",
      kind: "scalar",
      T: 9
    }])
  }
}
let j = new Y;
class W extends C.C {
  create(e) {
    let t = {
      useBlur: !1
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      if (1 === t) r.useBlur = e.bool();
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let o = e.skip(i);
        !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    !1 !== e.useBlur && t.tag(1, m.TD.Varint).bool(e.useBlur);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.VideoFilterBackgroundBlur", [{
      no: 1,
      name: "use_blur",
      kind: "scalar",
      T: 8
    }])
  }
}
let K = new W;
class z extends C.C {
  create(e) {
    let t = {
      videoBackgroundFilterDesktop: {
        oneofKind: void 0
      }
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.videoBackgroundFilterDesktop = {
            oneofKind: "blur",
            blur: K.internalBinaryRead(e, e.uint32(), n, r.videoBackgroundFilterDesktop.blur)
          };
          break;
        case 2:
          r.videoBackgroundFilterDesktop = {
            oneofKind: "presetOption",
            presetOption: e.uint32()
          };
          break;
        case 3:
          r.videoBackgroundFilterDesktop = {
            oneofKind: "customAsset",
            customAsset: j.internalBinaryRead(e, e.uint32(), n, r.videoBackgroundFilterDesktop.customAsset)
          };
          break;
        case 5:
          r.alwaysPreviewVideo = p.D5.internalBinaryRead(e, e.uint32(), n, r.alwaysPreviewVideo);
          break;
        case 6:
          r.afkTimeout = p.yC.internalBinaryRead(e, e.uint32(), n, r.afkTimeout);
          break;
        case 7:
          r.streamNotificationsEnabled = p.D5.internalBinaryRead(e, e.uint32(), n, r.streamNotificationsEnabled);
          break;
        case 8:
          r.nativePhoneIntegrationEnabled = p.D5.internalBinaryRead(e, e.uint32(), n, r.nativePhoneIntegrationEnabled);
          break;
        case 9:
          r.soundboardSettings = ek.internalBinaryRead(e, e.uint32(), n, r.soundboardSettings);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    "blur" === e.videoBackgroundFilterDesktop.oneofKind && K.internalBinaryWrite(e.videoBackgroundFilterDesktop.blur, t.tag(1, m.TD.LengthDelimited).fork(), n).join(), "presetOption" === e.videoBackgroundFilterDesktop.oneofKind && t.tag(2, m.TD.Varint).uint32(e.videoBackgroundFilterDesktop.presetOption), "customAsset" === e.videoBackgroundFilterDesktop.oneofKind && j.internalBinaryWrite(e.videoBackgroundFilterDesktop.customAsset, t.tag(3, m.TD.LengthDelimited).fork(), n).join(), e.alwaysPreviewVideo && p.D5.internalBinaryWrite(e.alwaysPreviewVideo, t.tag(5, m.TD.LengthDelimited).fork(), n).join(), e.afkTimeout && p.yC.internalBinaryWrite(e.afkTimeout, t.tag(6, m.TD.LengthDelimited).fork(), n).join(), e.streamNotificationsEnabled && p.D5.internalBinaryWrite(e.streamNotificationsEnabled, t.tag(7, m.TD.LengthDelimited).fork(), n).join(), e.nativePhoneIntegrationEnabled && p.D5.internalBinaryWrite(e.nativePhoneIntegrationEnabled, t.tag(8, m.TD.LengthDelimited).fork(), n).join(), e.soundboardSettings && ek.internalBinaryWrite(e.soundboardSettings, t.tag(9, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.VoiceAndVideoSettings", [{
      no: 1,
      name: "blur",
      kind: "message",
      oneof: "videoBackgroundFilterDesktop",
      T: () => K
    }, {
      no: 2,
      name: "preset_option",
      kind: "scalar",
      oneof: "videoBackgroundFilterDesktop",
      T: 13
    }, {
      no: 3,
      name: "custom_asset",
      kind: "message",
      oneof: "videoBackgroundFilterDesktop",
      T: () => j
    }, {
      no: 5,
      name: "always_preview_video",
      kind: "message",
      T: () => p.D5
    }, {
      no: 6,
      name: "afk_timeout",
      kind: "message",
      T: () => p.yC
    }, {
      no: 7,
      name: "stream_notifications_enabled",
      kind: "message",
      T: () => p.D5
    }, {
      no: 8,
      name: "native_phone_integration_enabled",
      kind: "message",
      T: () => p.D5
    }, {
      no: 9,
      name: "soundboard_settings",
      kind: "message",
      T: () => ek
    }])
  }
}
let q = new z;
class X extends C.C {
  create(e) {
    let t = {
      explicitContentGuilds: 0,
      explicitContentFriendDm: 0,
      explicitContentNonFriendDm: 0
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.explicitContentGuilds = e.int32();
          break;
        case 2:
          r.explicitContentFriendDm = e.int32();
          break;
        case 3:
          r.explicitContentNonFriendDm = e.int32();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.explicitContentGuilds && t.tag(1, m.TD.Varint).int32(e.explicitContentGuilds), 0 !== e.explicitContentFriendDm && t.tag(2, m.TD.Varint).int32(e.explicitContentFriendDm), 0 !== e.explicitContentNonFriendDm && t.tag(3, m.TD.Varint).int32(e.explicitContentNonFriendDm);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.ExplicitContentSettings", [{
      no: 1,
      name: "explicit_content_guilds",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", o]
    }, {
      no: 2,
      name: "explicit_content_friend_dm",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", o]
    }, {
      no: 3,
      name: "explicit_content_non_friend_dm",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", o]
    }])
  }
}
let Q = new X;
class J extends C.C {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.profanity = p.D5.internalBinaryRead(e, e.uint32(), n, r.profanity);
          break;
        case 2:
          r.sexualContent = p.D5.internalBinaryRead(e, e.uint32(), n, r.sexualContent);
          break;
        case 3:
          r.slurs = p.D5.internalBinaryRead(e, e.uint32(), n, r.slurs);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.profanity && p.D5.internalBinaryWrite(e.profanity, t.tag(1, m.TD.LengthDelimited).fork(), n).join(), e.sexualContent && p.D5.internalBinaryWrite(e.sexualContent, t.tag(2, m.TD.LengthDelimited).fork(), n).join(), e.slurs && p.D5.internalBinaryWrite(e.slurs, t.tag(3, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.KeywordFilterSettings", [{
      no: 1,
      name: "profanity",
      kind: "message",
      T: () => p.D5
    }, {
      no: 2,
      name: "sexual_content",
      kind: "message",
      T: () => p.D5
    }, {
      no: 3,
      name: "slurs",
      kind: "message",
      T: () => p.D5
    }])
  }
}
let $ = new J;
class ee extends C.C {
  create(e) {
    let t = {
      emojiPickerCollapsedSections: [],
      stickerPickerCollapsedSections: [],
      soundboardPickerCollapsedSections: [],
      dmSpamFilterV2: 0
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.diversitySurrogate = p.Gm.internalBinaryRead(e, e.uint32(), n, r.diversitySurrogate);
          break;
        case 2:
          r.useRichChatInput = p.D5.internalBinaryRead(e, e.uint32(), n, r.useRichChatInput);
          break;
        case 3:
          r.useThreadSidebar = p.D5.internalBinaryRead(e, e.uint32(), n, r.useThreadSidebar);
          break;
        case 4:
          r.renderSpoilers = p.Gm.internalBinaryRead(e, e.uint32(), n, r.renderSpoilers);
          break;
        case 5:
          r.emojiPickerCollapsedSections.push(e.string());
          break;
        case 6:
          r.stickerPickerCollapsedSections.push(e.string());
          break;
        case 7:
          r.viewImageDescriptions = p.D5.internalBinaryRead(e, e.uint32(), n, r.viewImageDescriptions);
          break;
        case 8:
          r.showCommandSuggestions = p.D5.internalBinaryRead(e, e.uint32(), n, r.showCommandSuggestions);
          break;
        case 9:
          r.inlineAttachmentMedia = p.D5.internalBinaryRead(e, e.uint32(), n, r.inlineAttachmentMedia);
          break;
        case 10:
          r.inlineEmbedMedia = p.D5.internalBinaryRead(e, e.uint32(), n, r.inlineEmbedMedia);
          break;
        case 11:
          r.gifAutoPlay = p.D5.internalBinaryRead(e, e.uint32(), n, r.gifAutoPlay);
          break;
        case 12:
          r.renderEmbeds = p.D5.internalBinaryRead(e, e.uint32(), n, r.renderEmbeds);
          break;
        case 13:
          r.renderReactions = p.D5.internalBinaryRead(e, e.uint32(), n, r.renderReactions);
          break;
        case 14:
          r.animateEmoji = p.D5.internalBinaryRead(e, e.uint32(), n, r.animateEmoji);
          break;
        case 15:
          r.animateStickers = p.yC.internalBinaryRead(e, e.uint32(), n, r.animateStickers);
          break;
        case 16:
          r.enableTtsCommand = p.D5.internalBinaryRead(e, e.uint32(), n, r.enableTtsCommand);
          break;
        case 17:
          r.messageDisplayCompact = p.D5.internalBinaryRead(e, e.uint32(), n, r.messageDisplayCompact);
          break;
        case 19:
          r.explicitContentFilter = p.yC.internalBinaryRead(e, e.uint32(), n, r.explicitContentFilter);
          break;
        case 20:
          r.viewNsfwGuilds = p.D5.internalBinaryRead(e, e.uint32(), n, r.viewNsfwGuilds);
          break;
        case 21:
          r.convertEmoticons = p.D5.internalBinaryRead(e, e.uint32(), n, r.convertEmoticons);
          break;
        case 22:
          r.expressionSuggestionsEnabled = p.D5.internalBinaryRead(e, e.uint32(), n, r.expressionSuggestionsEnabled);
          break;
        case 23:
          r.viewNsfwCommands = p.D5.internalBinaryRead(e, e.uint32(), n, r.viewNsfwCommands);
          break;
        case 24:
          r.useLegacyChatInput = p.D5.internalBinaryRead(e, e.uint32(), n, r.useLegacyChatInput);
          break;
        case 25:
          r.soundboardPickerCollapsedSections.push(e.string());
          break;
        case 26:
          r.dmSpamFilter = p.yC.internalBinaryRead(e, e.uint32(), n, r.dmSpamFilter);
          break;
        case 27:
          r.dmSpamFilterV2 = e.int32();
          break;
        case 28:
          r.includeStickersInAutocomplete = p.D5.internalBinaryRead(e, e.uint32(), n, r.includeStickersInAutocomplete);
          break;
        case 29:
          r.explicitContentSettings = Q.internalBinaryRead(e, e.uint32(), n, r.explicitContentSettings);
          break;
        case 30:
          r.keywordFilterSettings = $.internalBinaryRead(e, e.uint32(), n, r.keywordFilterSettings);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.diversitySurrogate && p.Gm.internalBinaryWrite(e.diversitySurrogate, t.tag(1, m.TD.LengthDelimited).fork(), n).join(), e.useRichChatInput && p.D5.internalBinaryWrite(e.useRichChatInput, t.tag(2, m.TD.LengthDelimited).fork(), n).join(), e.useThreadSidebar && p.D5.internalBinaryWrite(e.useThreadSidebar, t.tag(3, m.TD.LengthDelimited).fork(), n).join(), e.renderSpoilers && p.Gm.internalBinaryWrite(e.renderSpoilers, t.tag(4, m.TD.LengthDelimited).fork(), n).join();
    for (let n = 0; n < e.emojiPickerCollapsedSections.length; n++) t.tag(5, m.TD.LengthDelimited).string(e.emojiPickerCollapsedSections[n]);
    for (let n = 0; n < e.stickerPickerCollapsedSections.length; n++) t.tag(6, m.TD.LengthDelimited).string(e.stickerPickerCollapsedSections[n]);
    e.viewImageDescriptions && p.D5.internalBinaryWrite(e.viewImageDescriptions, t.tag(7, m.TD.LengthDelimited).fork(), n).join(), e.showCommandSuggestions && p.D5.internalBinaryWrite(e.showCommandSuggestions, t.tag(8, m.TD.LengthDelimited).fork(), n).join(), e.inlineAttachmentMedia && p.D5.internalBinaryWrite(e.inlineAttachmentMedia, t.tag(9, m.TD.LengthDelimited).fork(), n).join(), e.inlineEmbedMedia && p.D5.internalBinaryWrite(e.inlineEmbedMedia, t.tag(10, m.TD.LengthDelimited).fork(), n).join(), e.gifAutoPlay && p.D5.internalBinaryWrite(e.gifAutoPlay, t.tag(11, m.TD.LengthDelimited).fork(), n).join(), e.renderEmbeds && p.D5.internalBinaryWrite(e.renderEmbeds, t.tag(12, m.TD.LengthDelimited).fork(), n).join(), e.renderReactions && p.D5.internalBinaryWrite(e.renderReactions, t.tag(13, m.TD.LengthDelimited).fork(), n).join(), e.animateEmoji && p.D5.internalBinaryWrite(e.animateEmoji, t.tag(14, m.TD.LengthDelimited).fork(), n).join(), e.animateStickers && p.yC.internalBinaryWrite(e.animateStickers, t.tag(15, m.TD.LengthDelimited).fork(), n).join(), e.enableTtsCommand && p.D5.internalBinaryWrite(e.enableTtsCommand, t.tag(16, m.TD.LengthDelimited).fork(), n).join(), e.messageDisplayCompact && p.D5.internalBinaryWrite(e.messageDisplayCompact, t.tag(17, m.TD.LengthDelimited).fork(), n).join(), e.explicitContentFilter && p.yC.internalBinaryWrite(e.explicitContentFilter, t.tag(19, m.TD.LengthDelimited).fork(), n).join(), e.viewNsfwGuilds && p.D5.internalBinaryWrite(e.viewNsfwGuilds, t.tag(20, m.TD.LengthDelimited).fork(), n).join(), e.convertEmoticons && p.D5.internalBinaryWrite(e.convertEmoticons, t.tag(21, m.TD.LengthDelimited).fork(), n).join(), e.expressionSuggestionsEnabled && p.D5.internalBinaryWrite(e.expressionSuggestionsEnabled, t.tag(22, m.TD.LengthDelimited).fork(), n).join(), e.viewNsfwCommands && p.D5.internalBinaryWrite(e.viewNsfwCommands, t.tag(23, m.TD.LengthDelimited).fork(), n).join(), e.useLegacyChatInput && p.D5.internalBinaryWrite(e.useLegacyChatInput, t.tag(24, m.TD.LengthDelimited).fork(), n).join();
    for (let n = 0; n < e.soundboardPickerCollapsedSections.length; n++) t.tag(25, m.TD.LengthDelimited).string(e.soundboardPickerCollapsedSections[n]);
    e.dmSpamFilter && p.yC.internalBinaryWrite(e.dmSpamFilter, t.tag(26, m.TD.LengthDelimited).fork(), n).join(), 0 !== e.dmSpamFilterV2 && t.tag(27, m.TD.Varint).int32(e.dmSpamFilterV2), e.includeStickersInAutocomplete && p.D5.internalBinaryWrite(e.includeStickersInAutocomplete, t.tag(28, m.TD.LengthDelimited).fork(), n).join(), e.explicitContentSettings && Q.internalBinaryWrite(e.explicitContentSettings, t.tag(29, m.TD.LengthDelimited).fork(), n).join(), e.keywordFilterSettings && $.internalBinaryWrite(e.keywordFilterSettings, t.tag(30, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.TextAndImagesSettings", [{
      no: 1,
      name: "diversity_surrogate",
      kind: "message",
      T: () => p.Gm
    }, {
      no: 2,
      name: "use_rich_chat_input",
      kind: "message",
      T: () => p.D5
    }, {
      no: 3,
      name: "use_thread_sidebar",
      kind: "message",
      T: () => p.D5
    }, {
      no: 4,
      name: "render_spoilers",
      kind: "message",
      T: () => p.Gm
    }, {
      no: 5,
      name: "emoji_picker_collapsed_sections",
      kind: "scalar",
      repeat: 2,
      T: 9
    }, {
      no: 6,
      name: "sticker_picker_collapsed_sections",
      kind: "scalar",
      repeat: 2,
      T: 9
    }, {
      no: 7,
      name: "view_image_descriptions",
      kind: "message",
      T: () => p.D5
    }, {
      no: 8,
      name: "show_command_suggestions",
      kind: "message",
      T: () => p.D5
    }, {
      no: 9,
      name: "inline_attachment_media",
      kind: "message",
      T: () => p.D5
    }, {
      no: 10,
      name: "inline_embed_media",
      kind: "message",
      T: () => p.D5
    }, {
      no: 11,
      name: "gif_auto_play",
      kind: "message",
      T: () => p.D5
    }, {
      no: 12,
      name: "render_embeds",
      kind: "message",
      T: () => p.D5
    }, {
      no: 13,
      name: "render_reactions",
      kind: "message",
      T: () => p.D5
    }, {
      no: 14,
      name: "animate_emoji",
      kind: "message",
      T: () => p.D5
    }, {
      no: 15,
      name: "animate_stickers",
      kind: "message",
      T: () => p.yC
    }, {
      no: 16,
      name: "enable_tts_command",
      kind: "message",
      T: () => p.D5
    }, {
      no: 17,
      name: "message_display_compact",
      kind: "message",
      T: () => p.D5
    }, {
      no: 19,
      name: "explicit_content_filter",
      kind: "message",
      T: () => p.yC
    }, {
      no: 20,
      name: "view_nsfw_guilds",
      kind: "message",
      T: () => p.D5
    }, {
      no: 21,
      name: "convert_emoticons",
      kind: "message",
      T: () => p.D5
    }, {
      no: 22,
      name: "expression_suggestions_enabled",
      kind: "message",
      T: () => p.D5
    }, {
      no: 23,
      name: "view_nsfw_commands",
      kind: "message",
      T: () => p.D5
    }, {
      no: 24,
      name: "use_legacy_chat_input",
      kind: "message",
      T: () => p.D5
    }, {
      no: 25,
      name: "soundboard_picker_collapsed_sections",
      kind: "scalar",
      repeat: 2,
      T: 9
    }, {
      no: 26,
      name: "dm_spam_filter",
      kind: "message",
      T: () => p.yC
    }, {
      no: 27,
      name: "dm_spam_filter_v2",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.DmSpamFilterV2", a]
    }, {
      no: 28,
      name: "include_stickers_in_autocomplete",
      kind: "message",
      T: () => p.D5
    }, {
      no: 29,
      name: "explicit_content_settings",
      kind: "message",
      T: () => Q
    }, {
      no: 30,
      name: "keyword_filter_settings",
      kind: "message",
      T: () => $
    }])
  }
}
let et = new ee;
class en extends C.C {
  create(e) {
    let t = {
      notificationCenterAckedBeforeId: "0",
      focusModeExpiresAtMs: "0"
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.showInAppNotifications = p.D5.internalBinaryRead(e, e.uint32(), n, r.showInAppNotifications);
          break;
        case 2:
          r.notifyFriendsOnGoLive = p.D5.internalBinaryRead(e, e.uint32(), n, r.notifyFriendsOnGoLive);
          break;
        case 3:
          r.notificationCenterAckedBeforeId = e.fixed64().toString();
          break;
        case 4:
          r.enableBurstReactionNotifications = p.D5.internalBinaryRead(e, e.uint32(), n, r.enableBurstReactionNotifications);
          break;
        case 5:
          r.quietMode = p.D5.internalBinaryRead(e, e.uint32(), n, r.quietMode);
          break;
        case 6:
          r.focusModeExpiresAtMs = e.fixed64().toString();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.showInAppNotifications && p.D5.internalBinaryWrite(e.showInAppNotifications, t.tag(1, m.TD.LengthDelimited).fork(), n).join(), e.notifyFriendsOnGoLive && p.D5.internalBinaryWrite(e.notifyFriendsOnGoLive, t.tag(2, m.TD.LengthDelimited).fork(), n).join(), "0" !== e.notificationCenterAckedBeforeId && t.tag(3, m.TD.Bit64).fixed64(e.notificationCenterAckedBeforeId), e.enableBurstReactionNotifications && p.D5.internalBinaryWrite(e.enableBurstReactionNotifications, t.tag(4, m.TD.LengthDelimited).fork(), n).join(), e.quietMode && p.D5.internalBinaryWrite(e.quietMode, t.tag(5, m.TD.LengthDelimited).fork(), n).join(), "0" !== e.focusModeExpiresAtMs && t.tag(6, m.TD.Bit64).fixed64(e.focusModeExpiresAtMs);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.NotificationSettings", [{
      no: 1,
      name: "show_in_app_notifications",
      kind: "message",
      T: () => p.D5
    }, {
      no: 2,
      name: "notify_friends_on_go_live",
      kind: "message",
      T: () => p.D5
    }, {
      no: 3,
      name: "notification_center_acked_before_id",
      kind: "scalar",
      T: 6
    }, {
      no: 4,
      name: "enable_burst_reaction_notifications",
      kind: "message",
      T: () => p.D5
    }, {
      no: 5,
      name: "quiet_mode",
      kind: "message",
      T: () => p.D5
    }, {
      no: 6,
      name: "focus_mode_expires_at_ms",
      kind: "scalar",
      T: 6
    }])
  }
}
let ei = new en;
class er extends C.C {
  create(e) {
    let t = {
      restrictedGuildIds: [],
      defaultGuildsRestricted: !1,
      allowAccessibilityDetection: !1,
      activityRestrictedGuildIds: [],
      defaultGuildsActivityRestricted: 0,
      activityJoiningRestrictedGuildIds: [],
      messageRequestRestrictedGuildIds: []
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.allowActivityPartyPrivacyFriends = p.D5.internalBinaryRead(e, e.uint32(), n, r.allowActivityPartyPrivacyFriends);
          break;
        case 2:
          r.allowActivityPartyPrivacyVoiceChannel = p.D5.internalBinaryRead(e, e.uint32(), n, r.allowActivityPartyPrivacyVoiceChannel);
          break;
        case 3:
          if (i === m.TD.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) r.restrictedGuildIds.push(e.fixed64().toString());
          else r.restrictedGuildIds.push(e.fixed64().toString());
          break;
        case 4:
          r.defaultGuildsRestricted = e.bool();
          break;
        case 7:
          r.allowAccessibilityDetection = e.bool();
          break;
        case 8:
          r.detectPlatformAccounts = p.D5.internalBinaryRead(e, e.uint32(), n, r.detectPlatformAccounts);
          break;
        case 9:
          r.passwordless = p.D5.internalBinaryRead(e, e.uint32(), n, r.passwordless);
          break;
        case 10:
          r.contactSyncEnabled = p.D5.internalBinaryRead(e, e.uint32(), n, r.contactSyncEnabled);
          break;
        case 11:
          r.friendSourceFlags = p.yC.internalBinaryRead(e, e.uint32(), n, r.friendSourceFlags);
          break;
        case 12:
          r.friendDiscoveryFlags = p.yC.internalBinaryRead(e, e.uint32(), n, r.friendDiscoveryFlags);
          break;
        case 13:
          if (i === m.TD.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) r.activityRestrictedGuildIds.push(e.fixed64().toString());
          else r.activityRestrictedGuildIds.push(e.fixed64().toString());
          break;
        case 14:
          r.defaultGuildsActivityRestricted = e.int32();
          break;
        case 15:
          if (i === m.TD.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) r.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
          else r.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
          break;
        case 16:
          if (i === m.TD.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) r.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
          else r.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
          break;
        case 17:
          r.defaultMessageRequestRestricted = p.D5.internalBinaryRead(e, e.uint32(), n, r.defaultMessageRequestRestricted);
          break;
        case 18:
          r.dropsOptedOut = p.D5.internalBinaryRead(e, e.uint32(), n, r.dropsOptedOut);
          break;
        case 19:
          r.nonSpamRetrainingOptIn = p.D5.internalBinaryRead(e, e.uint32(), n, r.nonSpamRetrainingOptIn);
          break;
        case 20:
          r.familyCenterEnabled = p.D5.internalBinaryRead(e, e.uint32(), n, r.familyCenterEnabled);
          break;
        case 21:
          r.familyCenterEnabledV2 = p.D5.internalBinaryRead(e, e.uint32(), n, r.familyCenterEnabledV2);
          break;
        case 22:
          r.hideLegacyUsername = p.D5.internalBinaryRead(e, e.uint32(), n, r.hideLegacyUsername);
          break;
        case 23:
          r.inappropriateConversationWarnings = p.D5.internalBinaryRead(e, e.uint32(), n, r.inappropriateConversationWarnings);
          break;
        case 24:
          r.recentGamesEnabled = p.D5.internalBinaryRead(e, e.uint32(), n, r.recentGamesEnabled);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    if (e.allowActivityPartyPrivacyFriends && p.D5.internalBinaryWrite(e.allowActivityPartyPrivacyFriends, t.tag(1, m.TD.LengthDelimited).fork(), n).join(), e.allowActivityPartyPrivacyVoiceChannel && p.D5.internalBinaryWrite(e.allowActivityPartyPrivacyVoiceChannel, t.tag(2, m.TD.LengthDelimited).fork(), n).join(), e.restrictedGuildIds.length) {
      t.tag(3, m.TD.LengthDelimited).fork();
      for (let n = 0; n < e.restrictedGuildIds.length; n++) t.fixed64(e.restrictedGuildIds[n]);
      t.join()
    }
    if (!1 !== e.defaultGuildsRestricted && t.tag(4, m.TD.Varint).bool(e.defaultGuildsRestricted), !1 !== e.allowAccessibilityDetection && t.tag(7, m.TD.Varint).bool(e.allowAccessibilityDetection), e.detectPlatformAccounts && p.D5.internalBinaryWrite(e.detectPlatformAccounts, t.tag(8, m.TD.LengthDelimited).fork(), n).join(), e.passwordless && p.D5.internalBinaryWrite(e.passwordless, t.tag(9, m.TD.LengthDelimited).fork(), n).join(), e.contactSyncEnabled && p.D5.internalBinaryWrite(e.contactSyncEnabled, t.tag(10, m.TD.LengthDelimited).fork(), n).join(), e.friendSourceFlags && p.yC.internalBinaryWrite(e.friendSourceFlags, t.tag(11, m.TD.LengthDelimited).fork(), n).join(), e.friendDiscoveryFlags && p.yC.internalBinaryWrite(e.friendDiscoveryFlags, t.tag(12, m.TD.LengthDelimited).fork(), n).join(), e.activityRestrictedGuildIds.length) {
      t.tag(13, m.TD.LengthDelimited).fork();
      for (let n = 0; n < e.activityRestrictedGuildIds.length; n++) t.fixed64(e.activityRestrictedGuildIds[n]);
      t.join()
    }
    if (0 !== e.defaultGuildsActivityRestricted && t.tag(14, m.TD.Varint).int32(e.defaultGuildsActivityRestricted), e.activityJoiningRestrictedGuildIds.length) {
      t.tag(15, m.TD.LengthDelimited).fork();
      for (let n = 0; n < e.activityJoiningRestrictedGuildIds.length; n++) t.fixed64(e.activityJoiningRestrictedGuildIds[n]);
      t.join()
    }
    if (e.messageRequestRestrictedGuildIds.length) {
      t.tag(16, m.TD.LengthDelimited).fork();
      for (let n = 0; n < e.messageRequestRestrictedGuildIds.length; n++) t.fixed64(e.messageRequestRestrictedGuildIds[n]);
      t.join()
    }
    e.defaultMessageRequestRestricted && p.D5.internalBinaryWrite(e.defaultMessageRequestRestricted, t.tag(17, m.TD.LengthDelimited).fork(), n).join(), e.dropsOptedOut && p.D5.internalBinaryWrite(e.dropsOptedOut, t.tag(18, m.TD.LengthDelimited).fork(), n).join(), e.nonSpamRetrainingOptIn && p.D5.internalBinaryWrite(e.nonSpamRetrainingOptIn, t.tag(19, m.TD.LengthDelimited).fork(), n).join(), e.familyCenterEnabled && p.D5.internalBinaryWrite(e.familyCenterEnabled, t.tag(20, m.TD.LengthDelimited).fork(), n).join(), e.familyCenterEnabledV2 && p.D5.internalBinaryWrite(e.familyCenterEnabledV2, t.tag(21, m.TD.LengthDelimited).fork(), n).join(), e.hideLegacyUsername && p.D5.internalBinaryWrite(e.hideLegacyUsername, t.tag(22, m.TD.LengthDelimited).fork(), n).join(), e.inappropriateConversationWarnings && p.D5.internalBinaryWrite(e.inappropriateConversationWarnings, t.tag(23, m.TD.LengthDelimited).fork(), n).join(), e.recentGamesEnabled && p.D5.internalBinaryWrite(e.recentGamesEnabled, t.tag(24, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.PrivacySettings", [{
      no: 1,
      name: "allow_activity_party_privacy_friends",
      kind: "message",
      T: () => p.D5
    }, {
      no: 2,
      name: "allow_activity_party_privacy_voice_channel",
      kind: "message",
      T: () => p.D5
    }, {
      no: 3,
      name: "restricted_guild_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }, {
      no: 4,
      name: "default_guilds_restricted",
      kind: "scalar",
      T: 8
    }, {
      no: 7,
      name: "allow_accessibility_detection",
      kind: "scalar",
      T: 8
    }, {
      no: 8,
      name: "detect_platform_accounts",
      kind: "message",
      T: () => p.D5
    }, {
      no: 9,
      name: "passwordless",
      kind: "message",
      T: () => p.D5
    }, {
      no: 10,
      name: "contact_sync_enabled",
      kind: "message",
      T: () => p.D5
    }, {
      no: 11,
      name: "friend_source_flags",
      kind: "message",
      T: () => p.yC
    }, {
      no: 12,
      name: "friend_discovery_flags",
      kind: "message",
      T: () => p.yC
    }, {
      no: 13,
      name: "activity_restricted_guild_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }, {
      no: 14,
      name: "default_guilds_activity_restricted",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefault", l]
    }, {
      no: 15,
      name: "activity_joining_restricted_guild_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }, {
      no: 16,
      name: "message_request_restricted_guild_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }, {
      no: 17,
      name: "default_message_request_restricted",
      kind: "message",
      T: () => p.D5
    }, {
      no: 18,
      name: "drops_opted_out",
      kind: "message",
      T: () => p.D5
    }, {
      no: 19,
      name: "non_spam_retraining_opt_in",
      kind: "message",
      T: () => p.D5
    }, {
      no: 20,
      name: "family_center_enabled",
      kind: "message",
      T: () => p.D5
    }, {
      no: 21,
      name: "family_center_enabled_v2",
      kind: "message",
      T: () => p.D5
    }, {
      no: 22,
      name: "hide_legacy_username",
      kind: "message",
      T: () => p.D5
    }, {
      no: 23,
      name: "inappropriate_conversation_warnings",
      kind: "message",
      T: () => p.D5
    }, {
      no: 24,
      name: "recent_games_enabled",
      kind: "message",
      T: () => p.D5
    }])
  }
}
let es = new er;
class eo extends C.C {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      if (1 === t) r.rtcPanelShowVoiceStates = p.D5.internalBinaryRead(e, e.uint32(), n, r.rtcPanelShowVoiceStates);
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let o = e.skip(i);
        !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.rtcPanelShowVoiceStates && p.D5.internalBinaryWrite(e.rtcPanelShowVoiceStates, t.tag(1, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.DebugSettings", [{
      no: 1,
      name: "rtc_panel_show_voice_states",
      kind: "message",
      T: () => p.D5
    }])
  }
}
let ea = new eo;
class el extends C.C {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.installShortcutDesktop = p.D5.internalBinaryRead(e, e.uint32(), n, r.installShortcutDesktop);
          break;
        case 2:
          r.installShortcutStartMenu = p.D5.internalBinaryRead(e, e.uint32(), n, r.installShortcutStartMenu);
          break;
        case 3:
          r.disableGamesTab = p.D5.internalBinaryRead(e, e.uint32(), n, r.disableGamesTab);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.installShortcutDesktop && p.D5.internalBinaryWrite(e.installShortcutDesktop, t.tag(1, m.TD.LengthDelimited).fork(), n).join(), e.installShortcutStartMenu && p.D5.internalBinaryWrite(e.installShortcutStartMenu, t.tag(2, m.TD.LengthDelimited).fork(), n).join(), e.disableGamesTab && p.D5.internalBinaryWrite(e.disableGamesTab, t.tag(3, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.GameLibrarySettings", [{
      no: 1,
      name: "install_shortcut_desktop",
      kind: "message",
      T: () => p.D5
    }, {
      no: 2,
      name: "install_shortcut_start_menu",
      kind: "message",
      T: () => p.D5
    }, {
      no: 3,
      name: "disable_games_tab",
      kind: "message",
      T: () => p.D5
    }])
  }
}
let eu = new el;
class e_ extends C.C {
  create(e) {
    let t = {
      statusExpiresAtMs: "0"
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.status = p.Gm.internalBinaryRead(e, e.uint32(), n, r.status);
          break;
        case 2:
          r.customStatus = eE.internalBinaryRead(e, e.uint32(), n, r.customStatus);
          break;
        case 3:
          r.showCurrentGame = p.D5.internalBinaryRead(e, e.uint32(), n, r.showCurrentGame);
          break;
        case 4:
          r.statusExpiresAtMs = e.fixed64().toString();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.status && p.Gm.internalBinaryWrite(e.status, t.tag(1, m.TD.LengthDelimited).fork(), n).join(), e.customStatus && eE.internalBinaryWrite(e.customStatus, t.tag(2, m.TD.LengthDelimited).fork(), n).join(), e.showCurrentGame && p.D5.internalBinaryWrite(e.showCurrentGame, t.tag(3, m.TD.LengthDelimited).fork(), n).join(), "0" !== e.statusExpiresAtMs && t.tag(4, m.TD.Bit64).fixed64(e.statusExpiresAtMs);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.StatusSettings", [{
      no: 1,
      name: "status",
      kind: "message",
      T: () => p.Gm
    }, {
      no: 2,
      name: "custom_status",
      kind: "message",
      T: () => eE
    }, {
      no: 3,
      name: "show_current_game",
      kind: "message",
      T: () => p.D5
    }, {
      no: 4,
      name: "status_expires_at_ms",
      kind: "scalar",
      T: 6
    }])
  }
}
let ed = new e_;
class ec extends C.C {
  create(e) {
    let t = {
      text: "",
      emojiId: "0",
      emojiName: "",
      expiresAtMs: "0"
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.text = e.string();
          break;
        case 2:
          r.emojiId = e.fixed64().toString();
          break;
        case 3:
          r.emojiName = e.string();
          break;
        case 4:
          r.expiresAtMs = e.fixed64().toString();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.text && t.tag(1, m.TD.LengthDelimited).string(e.text), "0" !== e.emojiId && t.tag(2, m.TD.Bit64).fixed64(e.emojiId), "" !== e.emojiName && t.tag(3, m.TD.LengthDelimited).string(e.emojiName), "0" !== e.expiresAtMs && t.tag(4, m.TD.Bit64).fixed64(e.expiresAtMs);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.CustomStatus", [{
      no: 1,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "emoji_id",
      kind: "scalar",
      T: 6
    }, {
      no: 3,
      name: "emoji_name",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "expires_at_ms",
      kind: "scalar",
      T: 6
    }])
  }
}
let eE = new ec;
class eI extends C.C {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.locale = p.Gm.internalBinaryRead(e, e.uint32(), n, r.locale);
          break;
        case 2:
          r.timezoneOffset = p.T4.internalBinaryRead(e, e.uint32(), n, r.timezoneOffset);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.locale && p.Gm.internalBinaryWrite(e.locale, t.tag(1, m.TD.LengthDelimited).fork(), n).join(), e.timezoneOffset && p.T4.internalBinaryWrite(e.timezoneOffset, t.tag(2, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.LocalizationSettings", [{
      no: 1,
      name: "locale",
      kind: "message",
      T: () => p.Gm
    }, {
      no: 2,
      name: "timezone_offset",
      kind: "message",
      T: () => p.T4
    }])
  }
}
let eT = new eI;
class eh extends C.C {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.layout = p.Gm.internalBinaryRead(e, e.uint32(), n, r.layout);
          break;
        case 2:
          r.messagePreviews = p.Gm.internalBinaryRead(e, e.uint32(), n, r.messagePreviews);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.layout && p.Gm.internalBinaryWrite(e.layout, t.tag(1, m.TD.LengthDelimited).fork(), n).join(), e.messagePreviews && p.Gm.internalBinaryWrite(e.messagePreviews, t.tag(2, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.ChannelListSettings", [{
      no: 1,
      name: "layout",
      kind: "message",
      T: () => p.Gm
    }, {
      no: 2,
      name: "message_previews",
      kind: "message",
      T: () => p.Gm
    }])
  }
}
let eS = new eh;
class ef extends C.C {
  create(e) {
    let t = {
      theme: 0,
      developerMode: !1,
      mobileRedesignDisabled: !1
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.theme = e.int32();
          break;
        case 2:
          r.developerMode = e.bool();
          break;
        case 3:
          r.clientThemeSettings = em.internalBinaryRead(e, e.uint32(), n, r.clientThemeSettings);
          break;
        case 4:
          r.mobileRedesignDisabled = e.bool();
          break;
        case 6:
          r.channelListLayout = p.Gm.internalBinaryRead(e, e.uint32(), n, r.channelListLayout);
          break;
        case 7:
          r.messagePreviews = p.Gm.internalBinaryRead(e, e.uint32(), n, r.messagePreviews);
          break;
        case 8:
          r.searchResultExactCountEnabled = p.D5.internalBinaryRead(e, e.uint32(), n, r.searchResultExactCountEnabled);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.theme && t.tag(1, m.TD.Varint).int32(e.theme), !1 !== e.developerMode && t.tag(2, m.TD.Varint).bool(e.developerMode), e.clientThemeSettings && em.internalBinaryWrite(e.clientThemeSettings, t.tag(3, m.TD.LengthDelimited).fork(), n).join(), !1 !== e.mobileRedesignDisabled && t.tag(4, m.TD.Varint).bool(e.mobileRedesignDisabled), e.channelListLayout && p.Gm.internalBinaryWrite(e.channelListLayout, t.tag(6, m.TD.LengthDelimited).fork(), n).join(), e.messagePreviews && p.Gm.internalBinaryWrite(e.messagePreviews, t.tag(7, m.TD.LengthDelimited).fork(), n).join(), e.searchResultExactCountEnabled && p.D5.internalBinaryWrite(e.searchResultExactCountEnabled, t.tag(8, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.AppearanceSettings", [{
      no: 1,
      name: "theme",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.Theme", u]
    }, {
      no: 2,
      name: "developer_mode",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "client_theme_settings",
      kind: "message",
      T: () => em
    }, {
      no: 4,
      name: "mobile_redesign_disabled",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "channel_list_layout",
      kind: "message",
      T: () => p.Gm
    }, {
      no: 7,
      name: "message_previews",
      kind: "message",
      T: () => p.Gm
    }, {
      no: 8,
      name: "search_result_exact_count_enabled",
      kind: "message",
      T: () => p.D5
    }])
  }
}
let eN = new ef;
class eA extends C.C {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      if (2 === t) r.backgroundGradientPresetId = p.yC.internalBinaryRead(e, e.uint32(), n, r.backgroundGradientPresetId);
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let o = e.skip(i);
        !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.backgroundGradientPresetId && p.yC.internalBinaryWrite(e.backgroundGradientPresetId, t.tag(2, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.ClientThemeSettings", [{
      no: 2,
      name: "background_gradient_preset_id",
      kind: "message",
      T: () => p.yC
    }])
  }
}
let em = new eA;
class eO extends C.C {
  create(e) {
    let t = {
      folders: [],
      guildPositions: []
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.folders.push(ep.internalBinaryRead(e, e.uint32(), n));
          break;
        case 2:
          if (i === m.TD.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) r.guildPositions.push(e.fixed64().toString());
          else r.guildPositions.push(e.fixed64().toString());
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    for (let i = 0; i < e.folders.length; i++) ep.internalBinaryWrite(e.folders[i], t.tag(1, m.TD.LengthDelimited).fork(), n).join();
    if (e.guildPositions.length) {
      t.tag(2, m.TD.LengthDelimited).fork();
      for (let n = 0; n < e.guildPositions.length; n++) t.fixed64(e.guildPositions[n]);
      t.join()
    }
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.GuildFolders", [{
      no: 1,
      name: "folders",
      kind: "message",
      repeat: 1,
      T: () => ep
    }, {
      no: 2,
      name: "guild_positions",
      kind: "scalar",
      repeat: 1,
      T: 6
    }])
  }
}
let eR = new eO;
class eC extends C.C {
  create(e) {
    let t = {
      guildIds: []
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          if (i === m.TD.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) r.guildIds.push(e.fixed64().toString());
          else r.guildIds.push(e.fixed64().toString());
          break;
        case 2:
          r.id = p.r1.internalBinaryRead(e, e.uint32(), n, r.id);
          break;
        case 3:
          r.name = p.Gm.internalBinaryRead(e, e.uint32(), n, r.name);
          break;
        case 4:
          r.color = p.wA.internalBinaryRead(e, e.uint32(), n, r.color);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    if (e.guildIds.length) {
      t.tag(1, m.TD.LengthDelimited).fork();
      for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
      t.join()
    }
    e.id && p.r1.internalBinaryWrite(e.id, t.tag(2, m.TD.LengthDelimited).fork(), n).join(), e.name && p.Gm.internalBinaryWrite(e.name, t.tag(3, m.TD.LengthDelimited).fork(), n).join(), e.color && p.wA.internalBinaryWrite(e.color, t.tag(4, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.GuildFolder", [{
      no: 1,
      name: "guild_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }, {
      no: 2,
      name: "id",
      kind: "message",
      T: () => p.r1
    }, {
      no: 3,
      name: "name",
      kind: "message",
      T: () => p.Gm
    }, {
      no: 4,
      name: "color",
      kind: "message",
      T: () => p.wA
    }])
  }
}
let ep = new eC;
class eg extends C.C {
  create(e) {
    let t = {
      favoriteChannels: {},
      muted: !1
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          this.binaryReadMap1(r.favoriteChannels, e, n);
          break;
        case 2:
          r.muted = e.bool();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  binaryReadMap1(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, o;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.fixed64().toString();
          break;
        case 2:
          o = eD.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.Favorites.favorite_channels")
      }
    }
    e[null != s ? s : "0"] = null != o ? o : eD.create()
  }
  internalBinaryWrite(e, t, n) {
    for (let i of Object.keys(e.favoriteChannels)) t.tag(1, m.TD.LengthDelimited).fork().tag(1, m.TD.Bit64).fixed64(i), t.tag(2, m.TD.LengthDelimited).fork(), eD.internalBinaryWrite(e.favoriteChannels[i], t, n), t.join().join();
    !1 !== e.muted && t.tag(2, m.TD.Varint).bool(e.muted);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.Favorites", [{
      no: 1,
      name: "favorite_channels",
      kind: "map",
      K: 6,
      V: {
        kind: "message",
        T: () => eD
      }
    }, {
      no: 2,
      name: "muted",
      kind: "scalar",
      T: 8
    }])
  }
}
let eL = new eg;
class ev extends C.C {
  create(e) {
    let t = {
      nickname: "",
      type: 0,
      position: 0,
      parentId: "0"
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.nickname = e.string();
          break;
        case 2:
          r.type = e.int32();
          break;
        case 3:
          r.position = e.uint32();
          break;
        case 4:
          r.parentId = e.fixed64().toString();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.nickname && t.tag(1, m.TD.LengthDelimited).string(e.nickname), 0 !== e.type && t.tag(2, m.TD.Varint).int32(e.type), 0 !== e.position && t.tag(3, m.TD.Varint).uint32(e.position), "0" !== e.parentId && t.tag(4, m.TD.Bit64).fixed64(e.parentId);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.FavoriteChannel", [{
      no: 1,
      name: "nickname",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "type",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.FavoriteChannelType", d]
    }, {
      no: 3,
      name: "position",
      kind: "scalar",
      T: 13
    }, {
      no: 4,
      name: "parent_id",
      kind: "scalar",
      T: 6
    }])
  }
}
let eD = new ev;
class eM extends C.C {
  create(e) {
    let t = {
      muted: !1,
      volume: 0,
      modifiedAt: "0",
      soundboardMuted: !1
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.muted = e.bool();
          break;
        case 2:
          r.volume = e.float();
          break;
        case 3:
          r.modifiedAt = e.fixed64().toString();
          break;
        case 4:
          r.soundboardMuted = e.bool();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    !1 !== e.muted && t.tag(1, m.TD.Varint).bool(e.muted), 0 !== e.volume && t.tag(2, m.TD.Bit32).float(e.volume), "0" !== e.modifiedAt && t.tag(3, m.TD.Bit64).fixed64(e.modifiedAt), !1 !== e.soundboardMuted && t.tag(4, m.TD.Varint).bool(e.soundboardMuted);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.AudioContextSetting", [{
      no: 1,
      name: "muted",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "volume",
      kind: "scalar",
      T: 2
    }, {
      no: 3,
      name: "modified_at",
      kind: "scalar",
      T: 6
    }, {
      no: 4,
      name: "soundboard_muted",
      kind: "scalar",
      T: 8
    }])
  }
}
let eP = new eM;
class ey extends C.C {
  create(e) {
    let t = {
      user: {},
      stream: {}
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          this.binaryReadMap1(r.user, e, n);
          break;
        case 2:
          this.binaryReadMap2(r.stream, e, n);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  binaryReadMap1(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, o;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.fixed64().toString();
          break;
        case 2:
          o = eP.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.user")
      }
    }
    e[null != s ? s : "0"] = null != o ? o : eP.create()
  }
  binaryReadMap2(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, o;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.fixed64().toString();
          break;
        case 2:
          o = eP.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.stream")
      }
    }
    e[null != s ? s : "0"] = null != o ? o : eP.create()
  }
  internalBinaryWrite(e, t, n) {
    for (let i of Object.keys(e.user)) t.tag(1, m.TD.LengthDelimited).fork().tag(1, m.TD.Bit64).fixed64(i), t.tag(2, m.TD.LengthDelimited).fork(), eP.internalBinaryWrite(e.user[i], t, n), t.join().join();
    for (let i of Object.keys(e.stream)) t.tag(2, m.TD.LengthDelimited).fork().tag(1, m.TD.Bit64).fixed64(i), t.tag(2, m.TD.LengthDelimited).fork(), eP.internalBinaryWrite(e.stream[i], t, n), t.join().join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.AudioSettings", [{
      no: 1,
      name: "user",
      kind: "map",
      K: 6,
      V: {
        kind: "message",
        T: () => eP
      }
    }, {
      no: 2,
      name: "stream",
      kind: "map",
      K: 6,
      V: {
        kind: "message",
        T: () => eP
      }
    }])
  }
}
let eU = new ey;
class eb extends C.C {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      if (1 === t) r.disableHomeAutoNav = p.D5.internalBinaryRead(e, e.uint32(), n, r.disableHomeAutoNav);
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let o = e.skip(i);
        !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.disableHomeAutoNav && p.D5.internalBinaryWrite(e.disableHomeAutoNav, t.tag(1, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.CommunitiesSettings", [{
      no: 1,
      name: "disable_home_auto_nav",
      kind: "message",
      T: () => p.D5
    }])
  }
}
let eG = new eb;
class ew extends C.C {
  create(e) {
    let t = {
      volume: 0
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      if (1 === t) r.volume = e.float();
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let o = e.skip(i);
        !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.volume && t.tag(1, m.TD.Bit32).float(e.volume);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.SoundboardSettings", [{
      no: 1,
      name: "volume",
      kind: "scalar",
      T: 2
    }])
  }
}
let ek = new ew;
class eB extends C.C {
  create(e) {
    let t = {
      soundId: "0",
      guildId: "0"
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.soundId = e.fixed64().toString();
          break;
        case 2:
          r.guildId = e.fixed64().toString();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    "0" !== e.soundId && t.tag(1, m.TD.Bit64).fixed64(e.soundId), "0" !== e.guildId && t.tag(2, m.TD.Bit64).fixed64(e.guildId);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.CustomCallSound", [{
      no: 1,
      name: "sound_id",
      kind: "scalar",
      T: 6
    }, {
      no: 2,
      name: "guild_id",
      kind: "scalar",
      T: 6
    }])
  }
}
let ex = new eB;
class eV extends C.C {
  create(e) {
    let t = {
      allowedGuildIds: [],
      allowedUserIds: []
    };
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.allowFriends = p.D5.internalBinaryRead(e, e.uint32(), n, r.allowFriends);
          break;
        case 2:
          if (i === m.TD.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) r.allowedGuildIds.push(e.fixed64().toString());
          else r.allowedGuildIds.push(e.fixed64().toString());
          break;
        case 3:
          if (i === m.TD.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) r.allowedUserIds.push(e.fixed64().toString());
          else r.allowedUserIds.push(e.fixed64().toString());
          break;
        case 4:
          r.autoBroadcast = p.D5.internalBinaryRead(e, e.uint32(), n, r.autoBroadcast);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    if (e.allowFriends && p.D5.internalBinaryWrite(e.allowFriends, t.tag(1, m.TD.LengthDelimited).fork(), n).join(), e.allowedGuildIds.length) {
      t.tag(2, m.TD.LengthDelimited).fork();
      for (let n = 0; n < e.allowedGuildIds.length; n++) t.fixed64(e.allowedGuildIds[n]);
      t.join()
    }
    if (e.allowedUserIds.length) {
      t.tag(3, m.TD.LengthDelimited).fork();
      for (let n = 0; n < e.allowedUserIds.length; n++) t.fixed64(e.allowedUserIds[n]);
      t.join()
    }
    e.autoBroadcast && p.D5.internalBinaryWrite(e.autoBroadcast, t.tag(4, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.BroadcastSettings", [{
      no: 1,
      name: "allow_friends",
      kind: "message",
      T: () => p.D5
    }, {
      no: 2,
      name: "allowed_guild_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }, {
      no: 3,
      name: "allowed_user_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }, {
      no: 4,
      name: "auto_broadcast",
      kind: "message",
      T: () => p.D5
    }])
  }
}
let eZ = new eV;
class eH extends C.C {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, R.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, O.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      if (1 === t) r.allowVoiceRecording = p.D5.internalBinaryRead(e, e.uint32(), n, r.allowVoiceRecording);
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let o = e.skip(i);
        !1 !== s && (!0 === s ? m.z.onRead : s)(this.typeName, r, t, i, o)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.allowVoiceRecording && p.D5.internalBinaryWrite(e.allowVoiceRecording, t.tag(1, m.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? m.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.ClipsSettings", [{
      no: 1,
      name: "allow_voice_recording",
      kind: "message",
      T: () => p.D5
    }])
  }
}
let eF = new eH