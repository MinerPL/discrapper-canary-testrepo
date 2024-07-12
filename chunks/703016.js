n(757143), n(733860);
var i = n(913527),
  s = n.n(i),
  a = n(570140),
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
  C = n(9156),
  f = n(594174),
  N = n(51144),
  A = n(196051),
  Z = n(441729),
  L = n(653477),
  v = n(981631),
  O = n(689938);
let R = [],
  x = null,
  b = null,
  P = null,
  M = /\|\|([\s\S]+?)\|\|/g;

function D(e, t, n, i) {
  let a = m.Z.getGuild(n),
r = e.replace(M, O.Z.Messages.SPOILER).replace(/<@!?(\d+)>/g, (e, t) => {
  var i;
  let s = f.default.getUser(t);
  if (null == s)
    return e;
  return null !== (i = I.ZP.getNick(n, s.id)) && void 0 !== i ? i : N.ZP.getName(s);
}).replace(/<@&?(\d+)>/g, (e, t) => {
  let n = null != a ? m.Z.getRole(a.id, t) : null;
  return null != n && null != n.name ? n.name : O.Z.Messages.MESSAGE_TTS_DELETED_ROLE;
}).replace(/<#(\d+)>/g, (e, t) => {
  let n = E.Z.getChannel(t);
  return null == n ? e : (0, l.F6)(n, f.default, T.Z);
}).replace(/<a?:(\w+):(\d+)>/g, (e, t) => ''.concat(O.Z.Messages.EMOJI, ' ').concat(t)).replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => '/'.concat(t)).replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
  let i = o.Qh[n],
    a = 1000 * parseInt(t, 10),
    r = s()(a);
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
async function j(e, t, n, i, s) {
  let a = r.e6(e, n);
  null !== a && (null == b && y(), t ? await (0, A.NB)() : null == x || x.removeEventListener('end', A.NB), a.addEventListener('end', A.NB), null != i && a.addEventListener('start', i), null != s && a.addEventListener('end', s), x = a, r.iq(a, b));
}

function U(e, t, n, i, s) {
  j(e, t, s, () => {
(0, A.Bo)(n, i);
  });
}

function G(e) {
  let {
text: t,
interrupt: n,
maxLength: i,
onStart: s,
onEnd: a
  } = e;
  j(t, n, i, s, a);
}

function k() {
  return null !== x && x.removeEventListener('end', A.NB), r.M9(), x = null, !0;
}

function w(e) {
  var t, n, i;
  let {
message: s,
channel: a
  } = e, r = s.type === v.uaV.REPLY ? c.Z.getMessageByReference(s.messageReference) : null, l = (null == r ? void 0 : r.state) === c.Y.LOADED ? null == r ? void 0 : null === (t = r.message) || void 0 === t ? void 0 : t.author : null, o = null != l ? null !== (n = I.ZP.getNick(a.guild_id, null == l ? void 0 : l.id)) && void 0 !== n ? n : N.ZP.getName(l) : null, d = a.getGuildId(), u = null !== (i = I.ZP.getNick(d, s.author.id)) && void 0 !== i ? i : N.ZP.getName(s.author);
  return U(D(s.content, u, d, o), !0, a.id, s.id), !0;
}

function B(e) {
  var t, n, i, s, a, r;
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
f = h.ZP.getCurrentSidebarChannelId(m),
A = l === m || l === f,
Z = u.OW.getSetting() && o.tts && A,
O = p.Z.getTTSType(),
x = (null === (t = o.author) || void 0 === t ? void 0 : t.id) !== _.default.getId() && (O === v.PrB.ALL_CHANNELS || O === v.PrB.SELECTED_CHANNEL && A);
  if ((Z || x) && !T.Z.isBlockedForMessage(o)) {
if (R.indexOf(o.id) >= 0)
  return !1;
R.unshift(o.id) > 10 && R.pop();
let e = d.getGuildId();
if (null != e && C.ZP.getMutedChannels(e).has(l))
  return !1;
let t = null !== (a = null !== (s = I.ZP.getNick(e, null === (n = o.author) || void 0 === n ? void 0 : n.id)) && void 0 !== s ? s : N.ZP.getName(o.author)) && void 0 !== a ? a : '',
  c = o.type === v.uaV.REPLY ? null === (i = o.referenced_message) || void 0 === i ? void 0 : i.author : null,
  u = null != c ? null !== (r = I.ZP.getNick(e, null == c ? void 0 : c.id)) && void 0 !== r ? r : N.ZP.getName(c) : null;
U(D(o.content, t, e, u), !1, d.id, o.id, L.f);
  }
  return !1;
}

function H(e) {
  let {
id: t,
channelId: n
  } = e, i = Z.Z.currentMessage;
  return null != i && t === i.messageId && n === i.channelId && ((0, A.NB)(), !0);
}

function V() {
  g.Z.isSelfDeaf() && r.M9();
}
t.Z = {
  init() {
a.Z.subscribe('SPEAK_TEXT', G), a.Z.subscribe('SPEAK_MESSAGE', w), a.Z.subscribe('STOP_SPEAKING', k), a.Z.subscribe('MESSAGE_CREATE', B), a.Z.subscribe('MESSAGE_DELETE', H), a.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', V), a.Z.subscribe('USER_SETTINGS_PROTO_UPDATE', y), a.Z.subscribe('I18N_LOAD_SUCCESS', y);
  }
};