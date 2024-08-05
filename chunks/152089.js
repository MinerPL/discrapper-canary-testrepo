n.d(t, {
  FW: function() {
return c;
  },
  fZ: function() {
return _;
  },
  py: function() {
return E;
  }
}), n(47120), n(411104);
var r = n(911969),
  i = n(581364),
  a = n(752305),
  s = n(130402),
  o = n(365704),
  l = n(590921),
  u = n(185923);

function c(e) {
  var t;
  let {
activeCommandOption: n,
canMentionUsers: s = !0,
canMentionRoles: o = !0,
canMentionChannels: u = !0,
canMentionEveryone: c,
canMentionClyde: d = !1,
useNewSlashCommands: _,
canOnlyUseTextCommands: E,
canSendStickers: f,
hideMentionDescription: h,
hidePersonalInformation: p,
type: m,
emojiIntention: I,
editorRef: T,
onSendMessage: g,
onSendSticker: S,
setValue: A
  } = e, N = {
mentions: {
  channel: l.nS.DENY,
  global: l.VV.DENY,
  role: l.Fw.DENY,
  user: l.h3.DENY,
  clyde: l.cz.DENY
},
commands: l.L8.DISABLED,
allowStickers: !0 === f,
forNonStringCommandOption: null != n && n.type !== r.jw.STRING,
hideMentionDescription: !0 === h,
hidePersonalInformation: !0 === p,
chatInputType: m,
emojiIntention: I,
sendMessage: g,
sendSticker: S,
insertText: (e, t) => {
  var n;
  null === (n = T.current) || void 0 === n || n.insertAutocomplete(e, null != t ? t : e);
},
replaceText: (e, t) => {
  A(e, null != t ? t : (0, a.JM)(e));
},
getCommandOptionValues: () => {
  var e;
  return null === (e = T.current) || void 0 === e ? void 0 : e.getCommandOptionValues();
}
  };
  if (null != n) {
let e = (0, i.$z)(n);
e.canMentionChannels && (N.mentions.channel = l.nS.ALLOW_SELECTABLE), e.canMentionEveryone && (N.mentions.global = e.canMentionHere ? l.VV.ALLOW_EVERYONE_OR_HERE : l.VV.ALLOW_EVERYONE), e.canMentionRoles && (N.mentions.role = e.canMentionNonMentionableRoles ? l.Fw.ALLOW_ALL : l.Fw.ALLOW_MENTIONABLE), e.canMentionUsers && (N.mentions.user = e.canMentionAnyGuildUser ? l.h3.ALLOW_GUILD : l.h3.ALLOW_CHANNEL), N.hideMentionDescription = !0;
  } else
u && (N.mentions.channel = l.nS.ALLOW_SELECTABLE), o && (N.mentions.role = l.Fw.ALLOW_MENTIONABLE), s && (N.mentions.user = l.h3.ALLOW_CHANNEL), c && (N.mentions.global = l.VV.ALLOW_EVERYONE_OR_HERE), d && (N.mentions.clyde = l.cz.ALLOW);
  return (null === (t = m.commands) || void 0 === t ? void 0 : t.enabled) && (_ ? N.commands = E ? l.L8.NEW_TEXT_ONLY : l.L8.NEW : N.commands = l.L8.OLD_BUILT_INS), null != n && null != n.channelTypes && (N.allowedChannelTypes = n.channelTypes), N;
}

function d(e) {
  let {
type: t,
channel: n,
guild: r,
query: i,
isAtStart: a,
options: s
  } = e, l = o.W[t];
  if (null != l.sentinel) {
if (!i.startsWith(l.sentinel))
  return !1;
i = i.substring(l.sentinel.length);
  }
  return !!(null == l.matches || l.matches(n, r, i, a, s)) || !1;
}

function _(e) {
  let {
channel: t,
guild: n,
options: r,
currentWord: i,
currentWordIsAtStart: a,
textValue: c,
optionText: _
  } = e, E = null;
  for (let e of o.R) {
var f, h, p, m, I, T;
let g = o.W[e];
if (e === l.eq.GIFS || e === l.eq.CHOICES) {
  if (r.commands === l.L8.OLD_BUILT_INS) {
    if (d({
        type: e,
        channel: t,
        guild: n,
        query: c,
        isAtStart: !1,
        options: r
      })) {
      E = {
        type: e,
        typeInfo: g,
        query: c
      };
      break;
    }
  } else if (d({
      type: e,
      channel: t,
      guild: n,
      query: _,
      isAtStart: !1,
      options: r
    }))
    return {
      type: e,
      typeInfo: g,
      query: _
    };
} else if (e === l.eq.STICKERS) {
  if (d({
      type: e,
      channel: t,
      guild: n,
      query: _,
      isAtStart: !1,
      options: r
    }))
    return {
      type: e,
      typeInfo: g,
      query: _
    };
} else if (e === l.eq.COMMANDS && r.commands !== l.L8.OLD_BUILT_INS) {
  if (d({
      type: e,
      channel: t,
      guild: n,
      query: c,
      isAtStart: !0,
      options: r
    })) {
    E = {
      type: e,
      typeInfo: g,
      query: c.substring(null !== (h = null === (f = g.sentinel) || void 0 === f ? void 0 : f.length) && void 0 !== h ? h : 0)
    };
    break;
  }
} else if (e === l.eq.LEGACY_COMMANDS) {
  if (d({
      type: e,
      channel: t,
      guild: n,
      query: c,
      isAtStart: a,
      options: r
    })) {
    E = {
      type: e,
      typeInfo: g,
      query: c
    };
    break;
  }
} else if (e === l.eq.EMOJIS_AND_STICKERS) {
  if (null != i && i.length > 0 && (0, s.x)(u.qR.AutocompleteTyped), null != i && d({
      type: e,
      channel: t,
      guild: n,
      query: i,
      isAtStart: a,
      options: r
    })) {
    E = {
      type: e,
      typeInfo: g,
      query: i.substring(null !== (m = null === (p = g.sentinel) || void 0 === p ? void 0 : p.length) && void 0 !== m ? m : 0)
    };
    break;
  }
} else if (null != i && d({
    type: e,
    channel: t,
    guild: n,
    query: i,
    isAtStart: a,
    options: r
  })) {
  E = {
    type: e,
    typeInfo: g,
    query: i.substring(null !== (T = null === (I = g.sentinel) || void 0 === I ? void 0 : I.length) && void 0 !== T ? T : 0)
  };
  break;
}
  }
  return null == E ? null : (E.query = E.query.toLocaleLowerCase(), E);
}

function E(e, t) {
  let n;
  if (null == t || null == e)
return null;
  if (null != e.choices || e.autocomplete)
n = l.eq.CHOICES;
  else
switch (e.type) {
  case r.jw.BOOLEAN:
    n = l.eq.CHOICES;
    break;
  case r.jw.CHANNEL:
    n = l.eq.CHANNELS;
    break;
  case r.jw.ROLE:
  case r.jw.USER:
  case r.jw.MENTIONABLE:
    n = l.eq.MENTIONS;
    break;
  default:
    return null;
}
  let i = o.W[n];
  return {
type: n,
typeInfo: i,
query: t
  };
}