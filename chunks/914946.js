"use strict";
n.r(t), n.d(t, {
  computeActivityFlags: function() {
    return Y
  },
  fetchApplicationsRPC: function() {
    return K
  },
  getDeprecatedVoiceSettingsWithShortcut: function() {
    return Q
  },
  getRemoteIconURL: function() {
    return U
  },
  getVoiceConnectionState: function() {
    return V
  },
  getVoiceSettingsWithShortcut: function() {
    return Z
  },
  hasMessageReadPermission: function() {
    return H
  },
  isMatchingOrigin: function() {
    return B
  },
  processSocketThrottlers: function() {
    return z
  },
  transformChannel: function() {
    return G
  },
  transformInternalTextMessage: function() {
    return w
  },
  transformRelationship: function() {
    return F
  },
  transformVoiceState: function() {
    return k
  },
  validateActivityInvite: function() {
    return W
  },
  validateApplication: function() {
    return J
  },
  validateOriginAndUpdateSocket: function() {
    return q
  },
  validatePostMessageTransport: function() {
    return X
  }
}), n("47120"), n("653041"), n("411104"), n("757143"), n("392711");
var a, s = n("729594"),
  l = n("544891"),
  i = n("63023"),
  r = n("433517"),
  o = n("904245"),
  u = n("155268"),
  d = n("454585"),
  c = n("739566"),
  f = n("695346"),
  E = n("131704"),
  h = n("598077"),
  _ = n("592125"),
  C = n("430824"),
  m = n("131951"),
  S = n("375954"),
  I = n("158776"),
  p = n("594174"),
  T = n("979651"),
  g = n("70956"),
  A = n("5192"),
  N = n("226951"),
  v = n("996106"),
  O = n("863141"),
  R = n("186901"),
  L = n("981631");
let P = null !== (a = s.parse(window.GLOBAL_ENV.API_ENDPOINT, !1, !0).host) && void 0 !== a ? a : "localhost",
  M = function() {
    let e = P.split(":")[0];
    if (!e.includes(".")) return e;
    let t = e.split("."),
      n = t[t.length - 1];
    return /^\d+$/.test(n) ? e : t.slice(-2).join(".")
  }(),
  y = new RegExp("^".concat(N.default.escape("https://"), "(?:[a-z]+\\.)?(").concat(N.default.escape(M), "|discordapp.com|discord.com)$")),
  D = 1 * g.default.Millis.MINUTE,
  b = {};

function x(e) {
  return "customEmoji" === e.type && (e.type = "emoji"), "emoji" === e.type && e.src && (e.src = U(e.src)), Array.isArray(e.content) && (e.content = e.content.map(x)), e
}

function U(e) {
  return /^http/.test(e) ? e : "".concat(location.protocol, "//").concat(location.host).concat("/" === e.charAt(0) ? "" : "/").concat(e)
}

function j(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  return t.indexOf(e) > -1
}

function G(e, t) {
  let n = [],
    a = e.getGuildId();
  return ![L.ChannelTypes.GUILD_CATEGORY, ...(0, E.GUILD_VOCAL_CHANNEL_TYPES)].includes(e.type) && n.push(new Promise(t => {
    S.default.whenReady(e.id, () => t()), o.default.fetchMessages({
      channelId: e.id,
      limit: L.MAX_MESSAGES_PER_CHANNEL
    })
  })), Promise.all(n).then(() => {
    var n;
    let s = (!e.isNSFW() || (null === (n = p.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) === !0) && t ? S.default.getMessages(e.id).toArray().map(w) : [],
      l = Object.values(T.default.getVoiceStatesForChannel(e.id)).map(t => k(a, e.id, t));
    return {
      id: e.id,
      name: e.name,
      type: e.type,
      topic: e.topic,
      bitrate: e.bitrate,
      user_limit: e.userLimit,
      guild_id: a,
      position: e.position,
      messages: s,
      voice_states: l
    }
  })
}

function w(e) {
  let t = d.default.parseToAST(e.content, !0, {
      channelId: e.channel_id
    }).map(x),
    n = _.default.getChannel(e.channel_id),
    a = null != e.author ? (0, c.getUserAuthor)(new h.default(e.author), n) : void 0;
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

function k(e, t, n) {
  let {
    mute: a,
    deaf: s,
    selfMute: l,
    selfDeaf: i,
    suppress: r,
    userId: o
  } = n, u = p.default.getUser(o);
  if (null == u) throw Error("Invalid user id: ".concat(o));
  return {
    nick: A.default.getName(e, t, u),
    mute: m.default.isLocalMute(u.id),
    volume: m.default.getLocalVolume(u.id),
    pan: m.default.getLocalPan(u.id),
    voice_state: {
      mute: a,
      deaf: s,
      self_mute: l,
      self_deaf: i,
      suppress: r
    },
    user: (0, O.default)(u)
  }
}

function F(e, t, n) {
  let a = p.default.getUser(t);
  return {
    type: e,
    user: null != a ? (0, O.default)(a) : null,
    presence: {
      status: I.default.getStatus(t),
      activity: null != n ? I.default.getApplicationActivity(t, n) : I.default.getPrimaryActivity(t)
    }
  }
}

function B(e) {
  let t;
  if (null == e) return !1;
  let n = window.location.origin;
  if (e === n) return !0;
  try {
    t = s.parse(e).hostname
  } catch (e) {
    return !1
  }
  return window.location.hostname === t && "localhost" === t || null == e.match("staging") && (!!(y.test(e) && y.test(n)) || !1)
}

function H(e, t, n) {
  let a = C.default.getGuild(e.getGuildId());
  return (null != a ? a.getApplicationId() : e.getApplicationId()) === t || n.indexOf(L.OAuth2Scopes.MESSAGES_READ) > -1
}

function V(e) {
  switch (e) {
    case L.RTCConnectionStates.RTC_CONNECTED:
    case L.RTCConnectionStates.RTC_CONNECTING:
    case L.RTCConnectionStates.RTC_DISCONNECTED:
      return e.replace(/^RTC_/, "VOICE_");
    default:
      return e
  }
}

function Y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    {
      instance: n,
      secrets: a,
      party: s
    } = e,
    l = 0;
  return (n && (l |= L.ActivityFlags.INSTANCE), (null == a ? void 0 : a.join) != null && (l |= L.ActivityFlags.JOIN), t) ? (l |= L.ActivityFlags.EMBEDDED, l |= L.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL) : (((null == s ? void 0 : s.privacy) === L.ActivityPartyPrivacy.PUBLIC || r.Storage.get("ACTIVITIES_FORCE_PUBLIC")) && (f.AllowActivityPartyPrivacyFriends.getSetting() && (l |= L.ActivityFlags.PARTY_PRIVACY_FRIENDS), f.AllowActivityPartyPrivacyVoiceChannel.getSetting() && (l |= L.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL)), l)
}

function W(e, t, n) {
  if (e === L.ActivityActionTypes.JOIN) return null != t && null != t.id && null != n.join;
  return !1
}

function K(e, t, n) {
  return l.HTTP.get({
    url: L.Endpoints.APPLICATION_RPC(t),
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
        flags: d
      }
    } = a;
    if ("string" == typeof n) {
      if (e.transport === R.TransportTypes.POST_MESSAGE) {
        let e = (0, u.default)(t);
        if (null == e || !j(n, [e])) throw new v.default({
          closeCode: L.RPCCloseCodes.INVALID_ORIGIN
        }, "Invalid Origin")
      } else if (!j(n, s)) throw new v.default({
        closeCode: L.RPCCloseCodes.INVALID_ORIGIN
      }, "Invalid Origin")
    }
    e.application = {
      id: l,
      name: i,
      icon: r,
      coverImage: o,
      flags: d
    }
  }, () => {
    throw new v.default({
      closeCode: L.RPCCloseCodes.INVALID_CLIENTID
    }, "Invalid Client ID")
  })
}
async function z(e, t) {
  let n = b[e];
  null == n && (n = new i.default(t ? 2 : 60, D), b[e] = n), await n.process()
}

function q(e, t) {
  null == t && (e.authorization.scopes = [R.RPC_LOCAL_SCOPE])
}

function Q(e) {
  let t = m.default.getSettings(),
    n = e => Object.values(e).sort((e, t) => e.index - t.index).map(e => ({
      id: e.id,
      name: e.name
    })),
    a = e(t);
  return {
    input: {
      available_devices: n(m.default.getInputDevices()),
      device_id: t.inputDeviceId,
      volume: t.inputVolume
    },
    output: {
      available_devices: n(m.default.getOutputDevices()),
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

function Z(e, t) {
  let n = m.default.getSettings(e),
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

function X(e) {
  if (e !== R.TransportTypes.POST_MESSAGE) throw new v.default({
    errorCode: L.RPCErrors.INVALID_COMMAND
  }, 'command not available from "'.concat(e, " transport"))
}

function J(e) {
  if (null == e.id) throw new v.default({
    errorCode: L.RPCErrors.INVALID_COMMAND
  }, "Invalid application")
}