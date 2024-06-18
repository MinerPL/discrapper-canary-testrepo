"use strict";
n.d(t, {
  CM: function() {
    return K
  },
  Cr: function() {
    return ei
  },
  D3: function() {
    return W
  },
  DC: function() {
    return z
  },
  Ex: function() {
    return eD
  },
  Fg: function() {
    return Z
  },
  G6: function() {
    return ee
  },
  GA: function() {
    return el
  },
  H1: function() {
    return C
  },
  L1: function() {
    return eN
  },
  MI: function() {
    return ea
  },
  NA: function() {
    return eE
  },
  OW: function() {
    return Q
  },
  Ok: function() {
    return er
  },
  Ou: function() {
    return U
  },
  Pe: function() {
    return P
  },
  QK: function() {
    return eA
  },
  QZ: function() {
    return f
  },
  R$: function() {
    return E
  },
  RS: function() {
    return ec
  },
  R_: function() {
    return eM
  },
  SE: function() {
    return eC
  },
  Sb: function() {
    return ef
  },
  Sh: function() {
    return eP
  },
  T4: function() {
    return R
  },
  UP: function() {
    return J
  },
  Uc: function() {
    return eo
  },
  Wp: function() {
    return eO
  },
  Wz: function() {
    return eL
  },
  Xc: function() {
    return M
  },
  Xk: function() {
    return p
  },
  Xr: function() {
    return $
  },
  Yk: function() {
    return em
  },
  _O: function() {
    return O
  },
  bh: function() {
    return j
  },
  bm: function() {
    return X
  },
  cC: function() {
    return h
  },
  cP: function() {
    return y
  },
  co: function() {
    return en
  },
  d$: function() {
    return D
  },
  d4: function() {
    return m
  },
  dN: function() {
    return c
  },
  eo: function() {
    return L
  },
  ev: function() {
    return H
  },
  fq: function() {
    return T
  },
  fv: function() {
    return N
  },
  gw: function() {
    return ey
  },
  h2: function() {
    return x
  },
  iG: function() {
    return B
  },
  iH: function() {
    return eg
  },
  jU: function() {
    return F
  },
  kJ: function() {
    return k
  },
  kU: function() {
    return Y
  },
  l4: function() {
    return eU
  },
  mX: function() {
    return w
  },
  nc: function() {
    return eI
  },
  qF: function() {
    return g
  },
  rN: function() {
    return eT
  },
  tU: function() {
    return e_
  },
  uL: function() {
    return v
  },
  up: function() {
    return I
  },
  vF: function() {
    return S
  },
  x4: function() {
    return ed
  },
  xM: function() {
    return q
  },
  xU: function() {
    return ev
  },
  xd: function() {
    return eu
  },
  xq: function() {
    return V
  },
  zA: function() {
    return G
  }
}), n(47120);
var i = n(442837),
  r = n(524437),
  s = n(381499),
  o = n(85746),
  a = n(560997),
  l = n(263937),
  u = n(973005),
  _ = n(981631),
  d = n(611480);
let c = (0, a.Zc)("textAndImages", "useLegacyChatInput", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
  }, e => s.D5.create({
    value: e
  })),
  E = (0, a.Zc)("textAndImages", "useRichChatInput", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  })),
  I = (0, a.Zc)("textAndImages", "expressionSuggestionsEnabled", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  })),
  T = (0, a.Zc)("textAndImages", "includeStickersInAutocomplete", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
  }, e => s.D5.create({
    value: e
  })),
  h = (0, a.Zc)("textAndImages", "renderSpoilers", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : _.A2N.ON_CLICK
  }, e => s.Gm.create({
    value: e
  })),
  S = (0, a.Zc)("textAndImages", "useThreadSidebar", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  }));
(0, a.Zc)("notifications", "showInAppNotifications", e => {
  var t;
  return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
}, e => s.D5.create({
  value: e
}));
let f = (0, a.Zc)("notifications", "quietMode", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
  }, e => s.D5.create({
    value: !!e
  })),
  N = (0, a.Zc)("notifications", "focusModeExpiresAtMs", e => null != e ? e : "0", e => e),
  A = [],
  m = (0, a.Zc)("textAndImages", "emojiPickerCollapsedSections", e => null != e ? e : A, e => e),
  O = (0, a.Zc)("textAndImages", "stickerPickerCollapsedSections", e => null != e ? e : A, e => e),
  R = (0, a.Zc)("textAndImages", "soundboardPickerCollapsedSections", e => null != e ? e : A, e => e),
  C = (0, a.Zc)("textAndImages", "viewImageDescriptions", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
  }, e => s.D5.create({
    value: e
  })),
  p = (0, a.Zc)("textAndImages", "showCommandSuggestions", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  })),
  g = (0, a.Zc)("voiceAndVideo", "alwaysPreviewVideo", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
  }, e => s.D5.create({
    value: e
  })),
  L = (0, a.Zc)("notifications", "notifyFriendsOnGoLive", e => null == e ? void 0 : e.value, e => s.D5.create({
    value: e
  })),
  v = "0",
  D = (0, a.Zc)("notifications", "notificationCenterAckedBeforeId", e => null != e ? e : v, e => e),
  M = (0, a.Zc)("gameLibrary", "installShortcutDesktop", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
  }, e => s.D5.create({
    value: e
  })),
  P = (0, a.Zc)("gameLibrary", "installShortcutStartMenu", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  })),
  y = (0, a.Zc)("privacy", "allowActivityPartyPrivacyFriends", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  })),
  U = (0, a.Zc)("privacy", "allowActivityPartyPrivacyVoiceChannel", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  })),
  b = [],
  G = (0, a.Zc)("privacy", "messageRequestRestrictedGuildIds", e => null != e ? e : b, e => e),
  w = (0, a.Zc)("privacy", "defaultMessageRequestRestricted", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
  }, e => s.D5.create({
    value: e
  })),
  k = (0, a.Zc)("privacy", "nonSpamRetrainingOptIn", e => null == e ? void 0 : e.value, e => null == e ? void 0 : s.D5.create({
    value: e
  }));
(0, a.Zc)("privacy", "contactSyncEnabled", e => {
  var t;
  return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
}, e => s.D5.create({
  value: e
}));
let B = (0, a.Zc)("privacy", "defaultGuildsRestricted", e => null != e && e, e => e),
  x = (0, a.Zc)("privacy", "restrictedGuildIds", e => null != e ? e : [], e => e);
(0, a.Zc)("privacy", "friendDiscoveryFlags", e => {
  var t;
  return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 0
}, e => s.yC.create({
  value: e
}));
let V = (0, a.Zc)("privacy", "friendSourceFlags", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : _.HGf
  }, e => s.yC.create({
    value: e
  })),
  Z = (0, a.Zc)("debug", "rtcPanelShowVoiceStates", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
  }, e => s.D5.create({
    value: e
  })),
  H = (0, a.Zc)("textAndImages", "convertEmoticons", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  })),
  F = (0, a.Zc)("textAndImages", "messageDisplayCompact", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
  }, e => s.D5.create({
    value: e
  })),
  Y = (0, a.Zc)("voiceAndVideo", "soundboardSettings", e => e, e => e);
(0, a.Zc)("voiceAndVideo", "streamNotificationsEnabled", e => {
  var t;
  return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
}, e => s.D5.create({
  value: e
}));
let j = (0, a.Zc)("privacy", "dropsOptedOut", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
  }, e => s.D5.create({
    value: e
  })),
  W = (0, a.Zc)("voiceAndVideo", "nativePhoneIntegrationEnabled", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  })),
  K = (0, a.Zc)("voiceAndVideo", "afkTimeout", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 600
  }, e => s.yC.create({
    value: e
  })),
  z = (0, a.Zc)("textAndImages", "viewNsfwGuilds", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
  }, e => s.D5.create({
    value: e
  })),
  q = (0, a.Zc)("textAndImages", "viewNsfwCommands", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
  }, e => s.D5.create({
    value: e
  }));
(0, a.Zc)("privacy", "detectPlatformAccounts", e => {
  var t;
  return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
}, e => s.D5.create({
  value: e
}));
let X = (0, a.Zc)("gameLibrary", "disableGamesTab", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
  }, e => s.D5.create({
    value: e
  })),
  Q = (0, a.Zc)("textAndImages", "enableTtsCommand", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  })),
  J = (0, a.Zc)("textAndImages", "explicitContentFilter", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : u.TI.NON_FRIENDS
  }, e => s.yC.create({
    value: e
  }));
(0, a.Zc)("textAndImages", "dmSpamFilter", e => {
  var t;
  return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : u.fQ.NON_FRIENDS
}, e => s.yC.create({
  value: e
}));
let $ = (0, a.Zc)("textAndImages", "dmSpamFilterV2", e => null != e ? e : r.Xr.DEFAULT_UNSET, e => e),
  ee = (0, a.Zc)("status", "showCurrentGame", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  }));
(0, a.Zc)("privacy", "recentGamesEnabled", e => {
  var t;
  return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
}, e => s.D5.create({
  value: e
}));
let et = new Set(Object.values(_.Skl)),
  en = (0, a.Zc)("status", "status", e => null != e && et.has(e.value) ? e.value : _.Skl.UNKNOWN, e => s.Gm.create({
    value: e
  })),
  ei = (0, a.Zc)("status", "statusExpiresAtMs", e => null != e ? e : "0", e => e),
  er = (0, a.Zc)("status", "customStatus", e => e, e => e),
  es = [],
  eo = (0, a.Zc)("broadcast", "allowFriends", e => null == e ? void 0 : e.value, e => s.D5.create({
    value: e
  })),
  ea = (0, a.Zc)("broadcast", "allowedGuildIds", e => null != e ? e : es, e => e),
  el = (0, a.Zc)("broadcast", "allowedUserIds", e => null != e ? e : es, e => e),
  eu = (0, a.Zc)("broadcast", "autoBroadcast", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
  }, e => s.D5.create({
    value: e
  })),
  e_ = (0, a.Zc)("clips", "allowVoiceRecording", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  })),
  ed = (0, a.KM)((0, a.Zc)("textAndImages", "inlineAttachmentMedia", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  })), "text", "inlineAttachmentMedia"),
  ec = (0, a.KM)((0, a.Zc)("textAndImages", "inlineEmbedMedia", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  })), "text", "inlineEmbedMedia"),
  eE = (0, a.KM)((0, a.Zc)("textAndImages", "renderEmbeds", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  })), "text", "renderEmbeds"),
  eI = (0, a.KM)((0, a.Zc)("textAndImages", "renderReactions", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  })), "text", "renderReactions"),
  eT = (0, a.Zc)("localization", "timezoneOffset", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : null
  }, e => s.T4.create({
    value: null != e ? e : 0
  })),
  eh = new Set([o.l.COZY, o.l.COMPACT]);
(0, a.Zc)("appearance", "channelListLayout", e => null != e && eh.has(e.value) ? e.value : o.l.COZY, e => s.Gm.create({
  value: e
}));
let eS = new Set([o.Z.ALL, o.Z.UNREADS, o.Z.NONE]);
(0, a.Zc)("appearance", "messagePreviews", e => null != e && eS.has(e.value) ? e.value : o.Z.ALL, e => s.Gm.create({
  value: e
}));
let ef = (0, a.KM)((0, a.Zc)("appearance", "developerMode", e => null != e && e, e => e), "appearance", "developerMode"),
  eN = (0, a.Zc)("appearance", "clientThemeSettings", e => {
    var t;
    return {
      backgroundGradientPresetId: null == e ? void 0 : null === (t = e.backgroundGradientPresetId) || void 0 === t ? void 0 : t.value
    }
  }, e => ({
    backgroundGradientPresetId: null != e.backgroundGradientPresetId ? s.yC.create({
      value: e.backgroundGradientPresetId
    }) : void 0
  })),
  eA = (0, a.R2)((0, a.KM)((0, a.Zc)("textAndImages", "gifAutoPlay", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  })), "text", "gifAutoPlay"), "gifAutoPlay", () => {
    var e;
    return null === (e = l.Z.getOverride("gifAutoPlay")) || void 0 === e ? void 0 : e.value
  }, () => (0, i.e7)([l.Z], () => {
    var e;
    return null === (e = l.Z.getOverride("gifAutoPlay")) || void 0 === e ? void 0 : e.value
  })),
  em = (0, a.R2)((0, a.KM)((0, a.Zc)("textAndImages", "animateEmoji", e => {
    var t;
    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
  }, e => s.D5.create({
    value: e
  })), "text", "animateEmoji"), "animateEmoji", () => {
    var e;
    return null === (e = l.Z.getOverride("animateEmoji")) || void 0 === e ? void 0 : e.value
  }, () => (0, i.e7)([l.Z], () => {
    var e;
    return null === (e = l.Z.getOverride("animateEmoji")) || void 0 === e ? void 0 : e.value
  })),
  eO = (0, a.R2)((0, a.KM)((0, a.Zc)("textAndImages", "animateStickers", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : d.yr.ALWAYS_ANIMATE
  }, e => s.yC.create({
    value: e
  })), "text", "animateStickers"), "animateStickers", () => {
    var e;
    return null === (e = l.Z.getOverride("animateStickers")) || void 0 === e ? void 0 : e.value
  }, () => (0, i.e7)([l.Z], () => {
    var e;
    return null === (e = l.Z.getOverride("animateStickers")) || void 0 === e ? void 0 : e.value
  })),
  eR = [],
  eC = (0, a.Zc)("privacy", "activityRestrictedGuildIds", e => null != e ? e : eR, e => e),
  ep = [],
  eg = (0, a.Zc)("privacy", "activityJoiningRestrictedGuildIds", e => null != e ? e : ep, e => e),
  eL = (0, a.Zc)("privacy", "defaultGuildsActivityRestricted", e => e === r.E5.ON_FOR_LARGE_GUILDS, e => !0 === e ? r.E5.ON_FOR_LARGE_GUILDS : r.E5.OFF),
  ev = (0, a.Zc)("communities", "disableHomeAutoNav", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
  }, e => s.D5.create({
    value: e
  })),
  eD = (0, a.Zc)("privacy", "familyCenterEnabledV2", e => null == e ? void 0 : e.value, e => s.D5.create({
    value: e
  })),
  eM = (0, a.Zc)("privacy", "hideLegacyUsername", e => {
    var t;
    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
  }, e => s.D5.create({
    value: e
  })),
  eP = (0, a.Zc)("textAndImages", "explicitContentSettings", e => {
    let {
      explicitContentGuilds: t,
      explicitContentFriendDm: n,
      explicitContentNonFriendDm: i
    } = null != e ? e : {};
    return {
      explicitContentGuilds: null != t ? t : r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
      explicitContentFriendDm: null != n ? n : r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
      explicitContentNonFriendDm: null != i ? i : r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION
    }
  }, e => {
    let {
      explicitContentGuilds: t,
      explicitContentFriendDm: n,
      explicitContentNonFriendDm: i
    } = e;
    return {
      explicitContentGuilds: null != t ? t : void 0,
      explicitContentFriendDm: null != n ? n : void 0,
      explicitContentNonFriendDm: null != i ? i : void 0
    }
  }),
  ey = (0, a.Zc)("textAndImages", "keywordFilterSettings", e => {
    let {
      profanity: t,
      sexualContent: n,
      slurs: i
    } = null != e ? e : {};
    return {
      profanity: null == t ? void 0 : t.value,
      sexualContent: null == n ? void 0 : n.value,
      slurs: null == i ? void 0 : i.value
    }
  }, e => {
    let {
      profanity: t,
      sexualContent: n,
      slurs: i
    } = e;
    return {
      profanity: s.D5.create({
        value: t
      }),
      sexualContent: s.D5.create({
        value: n
      }),
      slurs: s.D5.create({
        value: i
      })
    }
  });
(0, a.Zc)("appearance", "searchResultExactCountEnabled", e => {
  var t;
  return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
}, e => s.D5.create({
  value: e
}));
let eU = (0, a.Zc)("userContent", "lastReceivedChangelogId", e => null != e ? e : "0", e => e)