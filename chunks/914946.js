n.d(t, {
  FJ: function() {
return X;
  },
  RE: function() {
return j;
  },
  S5: function() {
return Y;
  },
  T5: function() {
return G;
  },
  Xb: function() {
return k;
  },
  YK: function() {
return q;
  },
  _f: function() {
return $;
  },
  aE: function() {
return w;
  },
  bu: function() {
return J;
  },
  cD: function() {
return B;
  },
  fy: function() {
return z;
  },
  s9: function() {
return H;
  },
  t9: function() {
return W;
  },
  tr: function() {
return Q;
  },
  vv: function() {
return K;
  },
  zM: function() {
return V;
  },
  zy: function() {
return F;
  }
}), n(47120), n(653041), n(411104), n(757143), n(392711);
var i, a = n(729594),
  s = n(243814),
  r = n(544891),
  l = n(63023),
  o = n(433517),
  c = n(904245),
  d = n(155268),
  u = n(454585),
  _ = n(739566),
  h = n(695346),
  E = n(131704),
  I = n(598077),
  m = n(592125),
  g = n(430824),
  p = n(131951),
  T = n(375954),
  S = n(158776),
  f = n(594174),
  C = n(979651),
  N = n(70956),
  A = n(5192),
  v = n(226951),
  Z = n(996106),
  L = n(863141),
  O = n(186901),
  R = n(981631);
let x = null !== (i = a.parse(window.GLOBAL_ENV.API_ENDPOINT, !1, !0).host) && void 0 !== i ? i : 'localhost',
  b = function() {
let e = x.split(':')[0];
if (!e.includes('.'))
  return e;
let t = e.split('.'),
  n = t[t.length - 1];
return /^\d+$/.test(n) ? e : t.slice(-2).join('.');
  }(),
  P = new RegExp('^'.concat(v.Z.escape('https://'), '(?:[a-z]+\\.)?(').concat(v.Z.escape(b), '|discordapp.com|discord.com)$')),
  M = 1 * N.Z.Millis.MINUTE,
  D = {};

function y(e) {
  return 'customEmoji' === e.type && (e.type = 'emoji'), 'emoji' === e.type && e.src && (e.src = j(e.src)), Array.isArray(e.content) && (e.content = e.content.map(y)), e;
}

function j(e) {
  return /^http/.test(e) ? e : ''.concat(location.protocol, '//').concat(location.host).concat('/' === e.charAt(0) ? '' : '/').concat(e);
}

function U(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  return t.indexOf(e) > -1;
}

function G(e, t) {
  let n = [],
i = e.getGuildId();
  return ![
R.d4z.GUILD_CATEGORY,
...E.tx
  ].includes(e.type) && n.push(new Promise(t => {
T.Z.whenReady(e.id, () => t()), c.Z.fetchMessages({
  channelId: e.id,
  limit: R.AQB
});
  })), Promise.all(n).then(() => {
var n;
let a = (!e.isNSFW() || (null === (n = f.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) === !0) && t ? T.Z.getMessages(e.id).toArray().map(k) : [],
  s = Object.values(C.Z.getVoiceStatesForChannel(e.id)).map(t => w(i, e.id, t));
return {
  id: e.id,
  name: e.name,
  type: e.type,
  topic: e.topic,
  bitrate: e.bitrate,
  user_limit: e.userLimit,
  guild_id: i,
  position: e.position,
  messages: a,
  voice_states: s
};
  });
}

function k(e) {
  let t = u.Z.parseToAST(e.content, !0, {
  channelId: e.channel_id
}).map(y),
n = m.Z.getChannel(e.channel_id),
i = null != e.author ? (0, _.ij)(new I.Z(e.author), n) : void 0;
  return {
id: e.id,
blocked: e.blocked,
bot: e.bot,
content: e.content,
content_parsed: t.length ? t : void 0,
nick: null == i ? void 0 : i.nick,
author_color: null == i ? void 0 : i.colorString,
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
  };
}

function w(e, t, n) {
  let {
mute: i,
deaf: a,
selfMute: s,
selfDeaf: r,
suppress: l,
userId: o
  } = n, c = f.default.getUser(o);
  if (null == c)
throw Error('Invalid user id: '.concat(o));
  return {
nick: A.ZP.getName(e, t, c),
mute: p.Z.isLocalMute(c.id),
volume: p.Z.getLocalVolume(c.id),
pan: p.Z.getLocalPan(c.id),
voice_state: {
  mute: i,
  deaf: a,
  self_mute: s,
  self_deaf: r,
  suppress: l
},
user: (0, L.Z)(c)
  };
}

function B(e, t, n) {
  let i = f.default.getUser(t);
  return {
type: e,
user: null != i ? (0, L.Z)(i) : null,
presence: {
  status: S.Z.getStatus(t),
  activity: null != n ? S.Z.getApplicationActivity(t, n) : S.Z.getPrimaryActivity(t)
}
  };
}

function H(e) {
  let t;
  if (null == e)
return !1;
  let n = window.location.origin;
  if (e === n)
return !0;
  try {
t = a.parse(e).hostname;
  } catch (e) {
return !1;
  }
  return window.location.hostname === t && 'localhost' === t || null == e.match('staging') && (!!(P.test(e) && P.test(n)) || !1);
}

function V(e, t, n) {
  let i = g.Z.getGuild(e.getGuildId());
  return (null != i ? i.getApplicationId() : e.getApplicationId()) === t || n.indexOf(s.x.MESSAGES_READ) > -1;
}

function F(e) {
  switch (e) {
case R.hes.RTC_CONNECTED:
case R.hes.RTC_CONNECTING:
case R.hes.RTC_DISCONNECTED:
  return e.replace(/^RTC_/, 'VOICE_');
default:
  return e;
  }
}

function Y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
{
  instance: n,
  secrets: i,
  party: a
} = e,
s = 0;
  return (n && (s |= R.xjy.INSTANCE), (null == i ? void 0 : i.join) != null && (s |= R.xjy.JOIN), t) ? (s |= R.xjy.EMBEDDED, s |= R.xjy.PARTY_PRIVACY_VOICE_CHANNEL) : (((null == a ? void 0 : a.privacy) === R.RYY.PUBLIC || o.K.get('ACTIVITIES_FORCE_PUBLIC')) && (h.cP.getSetting() && (s |= R.xjy.PARTY_PRIVACY_FRIENDS), h.Ou.getSetting() && (s |= R.xjy.PARTY_PRIVACY_VOICE_CHANNEL)), s);
}

function W(e, t, n) {
  if (e === R.mFx.JOIN)
return null != t && null != t.id && null != n.join;
  return !1;
}

function z(e, t, n) {
  return r.tn.get({
url: R.ANM.APPLICATION_RPC(t),
oldFormErrors: !0,
retries: 3
  }).then(i => {
let {
  body: {
    rpc_origins: a,
    id: s,
    name: r,
    icon: l,
    cover_image: o,
    flags: c
  }
} = i;
if ('string' == typeof n) {
  if (e.transport === O.He.POST_MESSAGE) {
    let e = (0, d.Z)(t);
    if (null == e || !U(n, [e]))
      throw new Z.Z({
        closeCode: R.$VG.INVALID_ORIGIN
      }, 'Invalid Origin');
  } else if (!U(n, a))
    throw new Z.Z({
      closeCode: R.$VG.INVALID_ORIGIN
    }, 'Invalid Origin');
}
e.application = {
  id: s,
  name: r,
  icon: l,
  coverImage: o,
  flags: c
};
  }, () => {
throw new Z.Z({
  closeCode: R.$VG.INVALID_CLIENTID
}, 'Invalid Client ID');
  });
}
async function K(e, t) {
  let n = D[e];
  null == n && (n = new l.Z(t ? 2 : 60, M), D[e] = n), await n.process();
}

function q(e, t) {
  null == t && (e.authorization.scopes = [O.lH]);
}

function Q(e) {
  let t = p.Z.getSettings(),
n = e => Object.values(e).sort((e, t) => e.index - t.index).map(e => ({
  id: e.id,
  name: e.name
})),
i = e(t);
  return {
input: {
  available_devices: n(p.Z.getInputDevices()),
  device_id: t.inputDeviceId,
  volume: t.inputVolume
},
output: {
  available_devices: n(p.Z.getOutputDevices()),
  device_id: t.outputDeviceId,
  volume: t.outputVolume
},
mode: {
  type: t.mode,
  auto_threshold: t.modeOptions.autoThreshold,
  threshold: t.modeOptions.threshold,
  shortcut: i,
  delay: t.modeOptions.delay
},
automatic_gain_control: t.automaticGainControl,
echo_cancellation: t.echoCancellation,
noise_suppression: t.noiseSuppression,
qos: t.qos,
silence_warning: t.silenceWarning,
deaf: t.deaf,
mute: t.mute
  };
}

function X(e, t) {
  let n = p.Z.getSettings(e),
i = t(n);
  return {
input_mode: {
  type: n.mode,
  shortcut: i
},
local_mutes: Object.keys(n.localMutes),
local_volumes: n.localVolumes,
self_mute: n.mute,
self_deaf: n.deaf
  };
}

function J(e) {
  if (e !== O.He.POST_MESSAGE)
throw new Z.Z({
  errorCode: R.lTL.INVALID_COMMAND
}, 'command not available from "'.concat(e, ' transport'));
}

function $(e) {
  if (null == e.id)
throw new Z.Z({
  errorCode: R.lTL.INVALID_COMMAND
}, 'Invalid application');
  return e.id;
}