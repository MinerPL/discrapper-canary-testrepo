"use strict";
n.r(t), n.d(t, {
  computeActivityFlags: function() {
    return W
  },
  fetchApplicationsRPC: function() {
    return z
  },
  getDeprecatedVoiceSettingsWithShortcut: function() {
    return Z
  },
  getRemoteIconURL: function() {
    return j
  },
  getVoiceConnectionState: function() {
    return Y
  },
  getVoiceSettingsWithShortcut: function() {
    return X
  },
  hasMessageReadPermission: function() {
    return V
  },
  isMatchingOrigin: function() {
    return H
  },
  processSocketThrottlers: function() {
    return q
  },
  transformChannel: function() {
    return k
  },
  transformInternalTextMessage: function() {
    return w
  },
  transformRelationship: function() {
    return F
  },
  transformVoiceState: function() {
    return B
  },
  validateActivityInvite: function() {
    return K
  },
  validateApplication: function() {
    return $
  },
  validateOriginAndUpdateSocket: function() {
    return Q
  },
  validatePostMessageTransport: function() {
    return J
  }
}), n("47120"), n("653041"), n("411104"), n("757143"), n("392711");
var a, s = n("729594"),
  l = n("243814"),
  i = n("544891"),
  r = n("63023"),
  o = n("433517"),
  u = n("904245"),
  d = n("155268"),
  c = n("454585"),
  f = n("739566"),
  E = n("695346"),
  h = n("131704"),
  _ = n("598077"),
  C = n("592125"),
  m = n("430824"),
  S = n("131951"),
  p = n("375954"),
  g = n("158776"),
  I = n("594174"),
  T = n("979651"),
  A = n("70956"),
  N = n("5192"),
  v = n("226951"),
  R = n("996106"),
  O = n("863141"),
  L = n("186901"),
  M = n("981631");
let y = null !== (a = s.parse(window.GLOBAL_ENV.API_ENDPOINT, !1, !0).host) && void 0 !== a ? a : "localhost",
  P = function() {
    let e = y.split(":")[0];
    if (!e.includes(".")) return e;
    let t = e.split("."),
      n = t[t.length - 1];
    return /^\d+$/.test(n) ? e : t.slice(-2).join(".")
  }(),
  x = new RegExp("^".concat(v.default.escape("https://"), "(?:[a-z]+\\.)?(").concat(v.default.escape(P), "|discordapp.com|discord.com)$")),
  D = 1 * A.default.Millis.MINUTE,
  b = {};

function U(e) {
  return "customEmoji" === e.type && (e.type = "emoji"), "emoji" === e.type && e.src && (e.src = j(e.src)), Array.isArray(e.content) && (e.content = e.content.map(U)), e
}

function j(e) {
  return /^http/.test(e) ? e : "".concat(location.protocol, "//").concat(location.host).concat("/" === e.charAt(0) ? "" : "/").concat(e)
}

function G(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  return t.indexOf(e) > -1
}

function k(e, t) {
  let n = [],
    a = e.getGuildId();
  return ![M.ChannelTypes.GUILD_CATEGORY, ...(0, h.GUILD_VOCAL_CHANNEL_TYPES)].includes(e.type) && n.push(new Promise(t => {
    p.default.whenReady(e.id, () => t()), u.default.fetchMessages({
      channelId: e.id,
      limit: M.MAX_MESSAGES_PER_CHANNEL
    })
  })), Promise.all(n).then(() => {
    var n;
    let s = (!e.isNSFW() || (null === (n = I.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) === !0) && t ? p.default.getMessages(e.id).toArray().map(w) : [],
      l = Object.values(T.default.getVoiceStatesForChannel(e.id)).map(t => B(a, e.id, t));
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

function B(e, t, n) {
  let {
    mute: a,
    deaf: s,
    selfMute: l,
    selfDeaf: i,
    suppress: r,
    userId: o
  } = n, u = I.default.getUser(o);
  if (null == u) throw Error("Invalid user id: ".concat(o));
  return {
    nick: N.default.getName(e, t, u),
    mute: S.default.isLocalMute(u.id),
    volume: S.default.getLocalVolume(u.id),
    pan: S.default.getLocalPan(u.id),
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
  let a = I.default.getUser(t);
  return {
    type: e,
    user: null != a ? (0, O.default)(a) : null,
    presence: {
      status: g.default.getStatus(t),
      activity: null != n ? g.default.getApplicationActivity(t, n) : g.default.getPrimaryActivity(t)
    }
  }
}

function H(e) {
  let t;
  if (null == e) return !1;
  let n = window.location.origin;
  if (e === n) return !0;
  try {
    t = s.parse(e).hostname
  } catch (e) {
    return !1
  }
  return window.location.hostname === t && "localhost" === t || null == e.match("staging") && (!!(x.test(e) && x.test(n)) || !1)
}

function V(e, t, n) {
  let a = m.default.getGuild(e.getGuildId());
  return (null != a ? a.getApplicationId() : e.getApplicationId()) === t || n.indexOf(l.OAuth2Scopes.MESSAGES_READ) > -1
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
        if (null == e || !G(n, [e])) throw new R.default({
          closeCode: M.RPCCloseCodes.INVALID_ORIGIN
        }, "Invalid Origin")
      } else if (!G(n, s)) throw new R.default({
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
    throw new R.default({
      closeCode: M.RPCCloseCodes.INVALID_CLIENTID
    }, "Invalid Client ID")
  })
}
async function q(e, t) {
  let n = b[e];
  null == n && (n = new r.default(t ? 2 : 60, D), b[e] = n), await n.process()
}

function Q(e, t) {
  null == t && (e.authorization.scopes = [L.RPC_LOCAL_SCOPE])
}

function Z(e) {
  let t = S.default.getSettings(),
    n = e => Object.values(e).sort((e, t) => e.index - t.index).map(e => ({
      id: e.id,
      name: e.name
    })),
    a = e(t);
  return {
    input: {
      available_devices: n(S.default.getInputDevices()),
      device_id: t.inputDeviceId,
      volume: t.inputVolume
    },
    output: {
      available_devices: n(S.default.getOutputDevices()),
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
  let n = S.default.getSettings(e),
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
  if (e !== L.TransportTypes.POST_MESSAGE) throw new R.default({
    errorCode: M.RPCErrors.INVALID_COMMAND
  }, 'command not available from "'.concat(e, " transport"))
}

function $(e) {
  if (null == e.id) throw new R.default({
    errorCode: M.RPCErrors.INVALID_COMMAND
  }, "Invalid application");
  return e.id
}