"use strict";
n.r(t), n("757143"), n("733860");
var a = n("913527"),
  s = n.n(a),
  l = n("570140"),
  i = n("419363"),
  r = n("933557"),
  o = n("660199"),
  u = n("869765"),
  d = n("706454"),
  c = n("695346"),
  f = n("314897"),
  E = n("433355"),
  h = n("592125"),
  _ = n("271383"),
  C = n("430824"),
  m = n("131951"),
  S = n("292959"),
  I = n("699516"),
  p = n("944486"),
  T = n("9156"),
  g = n("594174"),
  A = n("51144"),
  N = n("196051"),
  v = n("441729"),
  O = n("653477"),
  R = n("981631"),
  L = n("689938");
let P = [],
  M = null,
  y = null,
  D = null,
  b = /\|\|([\s\S]+?)\|\|/g;

function x(e, t, n, a) {
  let l = C.default.getGuild(n),
    i = e.replace(b, L.default.Messages.SPOILER).replace(/<@!?(\d+)>/g, (e, t) => {
      var a;
      let s = g.default.getUser(t);
      if (null == s) return e;
      return null !== (a = _.default.getNick(n, s.id)) && void 0 !== a ? a : A.default.getName(s)
    }).replace(/<@&?(\d+)>/g, (e, t) => {
      let n = null != l ? C.default.getRole(l.id, t) : null;
      return null != n && null != n.name ? n.name : L.default.Messages.MESSAGE_TTS_DELETED_ROLE
    }).replace(/<#(\d+)>/g, (e, t) => {
      let n = h.default.getChannel(t);
      return null == n ? e : (0, r.computeChannelName)(n, g.default, I.default)
    }).replace(/<a?:(\w+):(\d+)>/g, (e, t) => "".concat(L.default.Messages.EMOJI, " ").concat(t)).replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => "/".concat(t)).replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
      let a = o.TIMESTAMP_FORMATS[n],
        l = 1e3 * parseInt(t, 10),
        i = s()(l);
      return null != a ? a(i) : i.format()
    });
  return null == a ? L.default.Messages.MESSAGE_TTS.format({
    username: t,
    body: i
  }) : L.default.Messages.MESSAGE_TTS_REPLY.format({
    username: t,
    body: i,
    replyUsername: a
  })
}

function U() {
  if (!i.supported) return !1;
  let e = d.default.locale;
  if (null == D) {
    var t;
    D = null === (t = window.speechSynthesis) || void 0 === t ? void 0 : t.getVoices()
  }
  let n = D.filter(t => t.lang === e || t.lang.slice(0, e.length) === e || !1);
  y = n.length > 0 ? n[0] : null
}
async function j(e, t, n, a, s) {
  let l = i.createUtterance(e, n);
  null !== l && (null == y && U(), t ? await (0, N.stopSpeaking)() : null == M || M.removeEventListener("end", N.stopSpeaking), l.addEventListener("end", N.stopSpeaking), null != a && l.addEventListener("start", a), null != s && l.addEventListener("end", s), M = l, i.speakUtterance(l, y))
}

function G(e, t, n, a, s) {
  j(e, t, s, () => {
    (0, N.speakingMessage)(n, a)
  })
}

function w(e) {
  let {
    text: t,
    interrupt: n,
    maxLength: a,
    onStart: s,
    onEnd: l
  } = e;
  j(t, n, a, s, l)
}

function k() {
  return null !== M && M.removeEventListener("end", N.stopSpeaking), i.cancelAll(), M = null, !0
}

function F(e) {
  var t, n, a;
  let {
    message: s,
    channel: l
  } = e, i = s.type === R.MessageTypes.REPLY ? u.default.getMessageByReference(s.messageReference) : null, r = (null == i ? void 0 : i.state) === u.ReferencedMessageState.LOADED ? null == i ? void 0 : null === (t = i.message) || void 0 === t ? void 0 : t.author : null, o = null != r ? null !== (n = _.default.getNick(l.guild_id, null == r ? void 0 : r.id)) && void 0 !== n ? n : A.default.getName(r) : null, d = l.getGuildId(), c = null !== (a = _.default.getNick(d, s.author.id)) && void 0 !== a ? a : A.default.getName(s.author);
  return G(x(s.content, c, d, o), !0, l.id, s.id), !0
}

function B(e) {
  var t, n, a, s, l, i, r;
  let {
    channelId: o,
    message: u,
    optimistic: d
  } = e;
  if (d || m.default.isSelfDeaf()) return !1;
  let C = h.default.getChannel(o);
  if (null == C) return !1;
  let g = p.default.getChannelId(),
    N = E.default.getCurrentSidebarChannelId(g),
    v = o === g || o === N,
    L = c.EnableTTSCommand.getSetting() && u.tts && v,
    M = S.default.getTTSType(),
    y = (null === (t = u.author) || void 0 === t ? void 0 : t.id) !== f.default.getId() && (M === R.TTSNotificationTypes.ALL_CHANNELS || M === R.TTSNotificationTypes.SELECTED_CHANNEL && v);
  if ((L || y) && ((null === (n = u.author) || void 0 === n ? void 0 : n.id) == null || !I.default.isBlocked(u.author.id))) {
    if (P.indexOf(u.id) >= 0) return !1;
    P.unshift(u.id) > 10 && P.pop();
    let e = C.getGuildId();
    if (null != e && T.default.getMutedChannels(e).has(o)) return !1;
    let t = null !== (i = null !== (l = _.default.getNick(e, null === (a = u.author) || void 0 === a ? void 0 : a.id)) && void 0 !== l ? l : A.default.getName(u.author)) && void 0 !== i ? i : "",
      n = u.type === R.MessageTypes.REPLY ? null === (s = u.referenced_message) || void 0 === s ? void 0 : s.author : null,
      d = null != n ? null !== (r = _.default.getNick(e, null == n ? void 0 : n.id)) && void 0 !== r ? r : A.default.getName(n) : null;
    G(x(u.content, t, e, d), !1, C.id, u.id, O.MAX_TTS_LENGTH)
  }
  return !1
}

function H(e) {
  let {
    id: t,
    channelId: n
  } = e, a = v.default.currentMessage;
  return null != a && t === a.messageId && n === a.channelId && ((0, N.stopSpeaking)(), !0)
}

function V() {
  m.default.isSelfDeaf() && i.cancelAll()
}
t.default = {
  init() {
    l.default.subscribe("SPEAK_TEXT", w), l.default.subscribe("SPEAK_MESSAGE", F), l.default.subscribe("STOP_SPEAKING", k), l.default.subscribe("MESSAGE_CREATE", B), l.default.subscribe("MESSAGE_DELETE", H), l.default.subscribe("AUDIO_TOGGLE_SELF_DEAF", V), l.default.subscribe("USER_SETTINGS_PROTO_UPDATE", U), l.default.subscribe("I18N_LOAD_SUCCESS", U)
  }
}