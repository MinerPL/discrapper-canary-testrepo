"use strict";
n.r(t), n.d(t, {
  getRemoteIconURL: function() {
    return G
  },
  transformChannel: function() {
    return w
  },
  transformInternalTextMessage: function() {
    return k
  },
  transformVoiceState: function() {
    return F
  },
  transformRelationship: function() {
    return B
  },
  isMatchingOrigin: function() {
    return H
  },
  hasMessageReadPermission: function() {
    return V
  },
  getVoiceConnectionState: function() {
    return Y
  },
  computeActivityFlags: function() {
    return W
  },
  validateActivityInvite: function() {
    return K
  },
  fetchApplicationsRPC: function() {
    return z
  },
  processSocketThrottlers: function() {
    return q
  },
  validateOriginAndUpdateSocket: function() {
    return Q
  },
  getDeprecatedVoiceSettingsWithShortcut: function() {
    return Z
  },
  getVoiceSettingsWithShortcut: function() {
    return X
  },
  validatePostMessageTransport: function() {
    return J
  },
  validateApplication: function() {
    return $
  }
}), n("222007"), n("424973"), n("70102"), n("781738"), n("917351");
var a, s = n("746379"),
  l = n.n(s),
  i = n("872717"),
  r = n("497"),
  o = n("95410"),
  u = n("819689"),
  d = n("711562"),
  c = n("367376"),
  f = n("574073"),
  E = n("845579"),
  h = n("233069"),
  _ = n("766274"),
  C = n("42203"),
  S = n("305961"),
  I = n("42887"),
  m = n("377253"),
  p = n("824563"),
  T = n("697218"),
  g = n("800762"),
  A = n("718517"),
  N = n("387111"),
  R = n("655518"),
  O = n("861309"),
  v = n("694352"),
  L = n("492249"),
  M = n("49111");
let P = null !== (a = l.parse(window.GLOBAL_ENV.API_ENDPOINT, !1, !0).host) && void 0 !== a ? a : "localhost",
  y = function() {
    let e = P.split(":")[0];
    if (!e.includes(".")) return e;
    let t = e.split("."),
      n = t[t.length - 1];
    return /^\d+$/.test(n) ? e : t.slice(-2).join(".")
  }(),
  D = new RegExp("^".concat(R.default.escape("https://"), "(?:[a-z]+\\.)?(").concat(R.default.escape(y), "|discordapp.com|discord.com)$")),
  x = 1 * A.default.Millis.MINUTE,
  b = {};

function U(e) {
  return "customEmoji" === e.type && (e.type = "emoji"), "emoji" === e.type && e.src && (e.src = G(e.src)), Array.isArray(e.content) && (e.content = e.content.map(U)), e
}

function G(e) {
  return /^http/.test(e) ? e : "".concat(location.protocol, "//").concat(location.host).concat("/" === e.charAt(0) ? "" : "/").concat(e)
}

function j(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  return t.indexOf(e) > -1
}

function w(e, t) {
  let n = [],
    a = e.getGuildId();
  return ![M.ChannelTypes.GUILD_CATEGORY, ...(0, h.GUILD_VOCAL_CHANNEL_TYPES)].includes(e.type) && n.push(new Promise(t => {
    m.default.whenReady(e.id, () => t()), u.default.fetchMessages({
      channelId: e.id,
      limit: M.MAX_MESSAGES_PER_CHANNEL
    })
  })), Promise.all(n).then(() => {
    var n;
    let s = !e.isNSFW() || (null === (n = T.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) === !0,
      l = s && t ? m.default.getMessages(e.id).toArray().map(k) : [],
      i = Object.values(g.default.getVoiceStatesForChannel(e.id)).map(t => F(a, e.id, t));
    return {
      id: e.id,
      name: e.name,
      type: e.type,
      topic: e.topic,
      bitrate: e.bitrate,
      user_limit: e.userLimit,
      guild_id: a,
      position: e.position,
      messages: l,
      voice_states: i
    }
  })
}

function k(e) {
  let t = c.default.parseToAST(e.content, !0, {
      channelId: e.channel_id
    }).map(U),
    n = C.default.getChannel(e.channel_id),
    a = null != e.author ? (0, f.getUserAuthor)(new _.default(e.author), n) : void 0;
  return {
    id: e.id,
    blocked: e.blocked,
    bot: e.bot,
    content: e.content,
    content_parsed: t.length ? t : void 0,
    nick: null == a ? void 0 : a.nick,
    author_color: null == a ? void 0 : a.colorString,
    edited_timestamp: e.edited_timestamp || e.editedTimestamp,
    timestamp: e.timestamp,
    tts: e.tts,
    mentions: e.mentions,
    mention_everyone: e.mention_everyone || e.mentionEveryone,
    mention_roles: e.mention_roles || e.mentionRoles,
    embeds: e.embeds,
    attachments: e.attachments,
    author: e.author,
    pinned: e.pinned,
    type: e.type
  }
}

function F(e, t, n) {
  let {
    mute: a,
    deaf: s,
    selfMute: l,
    selfDeaf: i,
    suppress: r,
    userId: o
  } = n, u = T.default.getUser(o);
  if (null == u) throw Error("Invalid user id: ".concat(o));
  return {
    nick: N.default.getName(e, t, u),
    mute: I.default.isLocalMute(u.id),
    volume: I.default.getLocalVolume(u.id),
    pan: I.default.getLocalPan(u.id),
    voice_state: {
      mute: a,
      deaf: s,
      self_mute: l,
      self_deaf: i,
      suppress: r
    },
    user: (0, v.default)(u)
  }
}

function B(e, t, n) {
  let a = T.default.getUser(t);
  return {
    type: e,
    user: null != a ? (0, v.default)(a) : null,
    presence: {
      status: p.default.getStatus(t),
      activity: null != n ? p.default.getApplicationActivity(t, n) : p.default.getPrimaryActivity(t)
    }
  }
}

function H(e) {
  let t;
  if (null == e) return !1;
  let n = window.location.origin;
  if (e === n) return !0;
  try {
    t = l.parse(e).hostname
  } catch (e) {
    return !1
  }
  return window.location.hostname === t && "localhost" === t || null == e.match("staging") && (!!(D.test(e) && D.test(n)) || !1)
}

function V(e, t, n) {
  let a = S.default.getGuild(e.getGuildId()),
    s = null != a ? a.getApplicationId() : e.getApplicationId();
  return s === t || n.indexOf(M.OAuth2Scopes.MESSAGES_READ) > -1
}

function Y(e) {
  switch (e) {
    case M.RTCConnectionStates.RTC_CONNECTED:
    case M.RTCConnectionStates.RTC_CONNECTING:
    case M.RTCConnectionStates.RTC_DISCONNECTED:
      return e.replace(/^RTC_/, "VOICE_");
    default:
      return e
  }
}

function W(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    {
      instance: n,
      secrets: a,
      party: s
    } = e,
    l = 0;
  return (n && (l |= M.ActivityFlags.INSTANCE), (null == a ? void 0 : a.join) != null && (l |= M.ActivityFlags.JOIN), t) ? (l |= M.ActivityFlags.EMBEDDED, l |= M.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL) : (((null == s ? void 0 : s.privacy) === M.ActivityPartyPrivacy.PUBLIC || o.Storage.get("ACTIVITIES_FORCE_PUBLIC")) && (E.AllowActivityPartyPrivacyFriends.getSetting() && (l |= M.ActivityFlags.PARTY_PRIVACY_FRIENDS), E.AllowActivityPartyPrivacyVoiceChannel.getSetting() && (l |= M.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL)), l)
}

function K(e, t, n) {
  if (e === M.ActivityActionTypes.JOIN) return null != t && null != t.id && null != n.join;
  return !1
}

function z(e, t, n) {
  return i.HTTP.get({
    url: M.Endpoints.APPLICATION_RPC(t),
    oldFormErrors: !0,
    retries: 3
  }).then(a => {
    let {
      body: {
        rpc_origins: s,
        id: l,
        name: i,
        icon: r,
        cover_image: o,
        flags: u
      }
    } = a;
    if ("string" == typeof n) {
      if (e.transport === L.TransportTypes.POST_MESSAGE) {
        let e = (0, d.default)(t);
        if (null == e || !j(n, [e])) throw new O.default({
          closeCode: M.RPCCloseCodes.INVALID_ORIGIN
        }, "Invalid Origin")
      } else if (!j(n, s)) throw new O.default({
        closeCode: M.RPCCloseCodes.INVALID_ORIGIN
      }, "Invalid Origin")
    }
    e.application = {
      id: l,
      name: i,
      icon: r,
      coverImage: o,
      flags: u
    }
  }, () => {
    throw new O.default({
      closeCode: M.RPCCloseCodes.INVALID_CLIENTID
    }, "Invalid Client ID")
  })
}
async function q(e, t) {
  let n = b[e];
  null == n && (n = new r.default(t ? 2 : 60, x), b[e] = n), await n.process()
}

function Q(e, t) {
  null == t && (e.authorization.scopes = [L.RPC_LOCAL_SCOPE])
}

function Z(e) {
  let t = I.default.getSettings(),
    n = e => Object.values(e).sort((e, t) => e.index - t.index).map(e => ({
      id: e.id,
      name: e.name
    })),
    a = e(t);
  return {
    input: {
      available_devices: n(I.default.getInputDevices()),
      device_id: t.inputDeviceId,
      volume: t.inputVolume
    },
    output: {
      available_devices: n(I.default.getOutputDevices()),
      device_id: t.outputDeviceId,
      volume: t.outputVolume
    },
    mode: {
      type: t.mode,
      auto_threshold: t.modeOptions.autoThreshold,
      threshold: t.modeOptions.threshold,
      shortcut: a,
      delay: t.modeOptions.delay
    },
    automatic_gain_control: t.automaticGainControl,
    echo_cancellation: t.echoCancellation,
    noise_suppression: t.noiseSuppression,
    qos: t.qos,
    silence_warning: t.silenceWarning,
    deaf: t.deaf,
    mute: t.mute
  }
}

function X(e, t) {
  let n = I.default.getSettings(e),
    a = t(n);
  return {
    input_mode: {
      type: n.mode,
      shortcut: a
    },
    local_mutes: Object.keys(n.localMutes),
    local_volumes: n.localVolumes,
    self_mute: n.mute,
    self_deaf: n.deaf
  }
}

function J(e) {
  if (e !== L.TransportTypes.POST_MESSAGE) throw new O.default({
    errorCode: M.RPCErrors.INVALID_COMMAND
  }, 'command not available from "'.concat(e, " transport"))
}

function $(e) {
  if (null == e.id) throw new O.default({
    errorCode: M.RPCErrors.INVALID_COMMAND
  }, "Invalid application")
}