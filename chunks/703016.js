n(757143), n(733860);
var i = n(913527),
  a = n.n(i),
  s = n(570140),
  r = n(419363),
  l = n(933557),
  o = n(660199),
  c = n(869765),
  d = n(706454),
  u = n(695346),
  _ = n(314897),
  h = n(433355),
  E = n(592125),
  I = n(271383),
  m = n(430824),
  g = n(131951),
  p = n(292959),
  T = n(699516),
  S = n(944486),
  f = n(9156),
  C = n(594174),
  N = n(51144),
  A = n(196051),
  v = n(441729),
  Z = n(653477),
  L = n(981631),
  O = n(689938);
let R = [],
  x = null,
  b = null,
  P = null,
  M = /\|\|([\s\S]+?)\|\|/g;

function D(e, t, n, i) {
  let s = m.Z.getGuild(n),
r = e.replace(M, O.Z.Messages.SPOILER).replace(/<@!?(\d+)>/g, (e, t) => {
  var i;
  let a = C.default.getUser(t);
  if (null == a)
    return e;
  return null !== (i = I.ZP.getNick(n, a.id)) && void 0 !== i ? i : N.ZP.getName(a);
}).replace(/<@&?(\d+)>/g, (e, t) => {
  let n = null != s ? m.Z.getRole(s.id, t) : null;
  return null != n && null != n.name ? n.name : O.Z.Messages.MESSAGE_TTS_DELETED_ROLE;
}).replace(/<#(\d+)>/g, (e, t) => {
  let n = E.Z.getChannel(t);
  return null == n ? e : (0, l.F6)(n, C.default, T.Z);
}).replace(/<a?:(\w+):(\d+)>/g, (e, t) => ''.concat(O.Z.Messages.EMOJI, ' ').concat(t)).replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => '/'.concat(t)).replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
  let i = o.Qh[n],
    s = 1000 * parseInt(t, 10),
    r = a()(s);
  return null != i ? i(r) : r.format();
});
  return null == i ? O.Z.Messages.MESSAGE_TTS.format({
username: t,
body: r
  }) : O.Z.Messages.MESSAGE_TTS_REPLY.format({
username: t,
body: r,
replyUsername: i
  });
}

function y() {
  if (!r.Zh)
return !1;
  let e = d.default.locale;
  if (null == P) {
var t;
P = null === (t = window.speechSynthesis) || void 0 === t ? void 0 : t.getVoices();
  }
  let n = P.filter(t => t.lang === e || t.lang.slice(0, e.length) === e || !1);
  b = n.length > 0 ? n[0] : null;
}
async function j(e, t, n, i, a) {
  let s = r.e6(e, n);
  null !== s && (null == b && y(), t ? await (0, A.NB)() : null == x || x.removeEventListener('end', A.NB), s.addEventListener('end', A.NB), null != i && s.addEventListener('start', i), null != a && s.addEventListener('end', a), x = s, r.iq(s, b));
}

function U(e, t, n, i, a) {
  j(e, t, a, () => {
(0, A.Bo)(n, i);
  });
}

function G(e) {
  let {
text: t,
interrupt: n,
maxLength: i,
onStart: a,
onEnd: s
  } = e;
  j(t, n, i, a, s);
}

function k() {
  return null !== x && x.removeEventListener('end', A.NB), r.M9(), x = null, !0;
}

function w(e) {
  var t, n, i;
  let {
message: a,
channel: s
  } = e, r = a.type === L.uaV.REPLY ? c.Z.getMessageByReference(a.messageReference) : null, l = (null == r ? void 0 : r.state) === c.Y.LOADED ? null == r ? void 0 : null === (t = r.message) || void 0 === t ? void 0 : t.author : null, o = null != l ? null !== (n = I.ZP.getNick(s.guild_id, null == l ? void 0 : l.id)) && void 0 !== n ? n : N.ZP.getName(l) : null, d = s.getGuildId(), u = null !== (i = I.ZP.getNick(d, a.author.id)) && void 0 !== i ? i : N.ZP.getName(a.author);
  return U(D(a.content, u, d, o), !0, s.id, a.id), !0;
}

function B(e) {
  var t, n, i, a, s, r;
  let {
channelId: l,
message: o,
optimistic: c
  } = e;
  if (c || g.Z.isSelfDeaf())
return !1;
  let d = E.Z.getChannel(l);
  if (null == d)
return !1;
  let m = S.Z.getChannelId(),
C = h.ZP.getCurrentSidebarChannelId(m),
A = l === m || l === C,
v = u.OW.getSetting() && o.tts && A,
O = p.Z.getTTSType(),
x = (null === (t = o.author) || void 0 === t ? void 0 : t.id) !== _.default.getId() && (O === L.PrB.ALL_CHANNELS || O === L.PrB.SELECTED_CHANNEL && A);
  if ((v || x) && !T.Z.isBlockedForMessage(o)) {
if (R.indexOf(o.id) >= 0)
  return !1;
R.unshift(o.id) > 10 && R.pop();
let e = d.getGuildId();
if (null != e && f.ZP.getMutedChannels(e).has(l))
  return !1;
let t = null !== (s = null !== (a = I.ZP.getNick(e, null === (n = o.author) || void 0 === n ? void 0 : n.id)) && void 0 !== a ? a : N.ZP.getName(o.author)) && void 0 !== s ? s : '',
  c = o.type === L.uaV.REPLY ? null === (i = o.referenced_message) || void 0 === i ? void 0 : i.author : null,
  u = null != c ? null !== (r = I.ZP.getNick(e, null == c ? void 0 : c.id)) && void 0 !== r ? r : N.ZP.getName(c) : null;
U(D(o.content, t, e, u), !1, d.id, o.id, Z.f);
  }
  return !1;
}

function H(e) {
  let {
id: t,
channelId: n
  } = e, i = v.Z.currentMessage;
  return null != i && t === i.messageId && n === i.channelId && ((0, A.NB)(), !0);
}

function V() {
  g.Z.isSelfDeaf() && r.M9();
}
t.Z = {
  init() {
s.Z.subscribe('SPEAK_TEXT', G), s.Z.subscribe('SPEAK_MESSAGE', w), s.Z.subscribe('STOP_SPEAKING', k), s.Z.subscribe('MESSAGE_CREATE', B), s.Z.subscribe('MESSAGE_DELETE', H), s.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', V), s.Z.subscribe('USER_SETTINGS_PROTO_UPDATE', y), s.Z.subscribe('I18N_LOAD_SUCCESS', y);
  }
};