n.d(t, {
  Z: function() {
return Z;
  },
  d: function() {
return j;
  }
}), n(653041), n(47120), n(390547), n(627494), n(757143);
var r = n(512722),
  i = n.n(r),
  a = n(570140),
  o = n(904245),
  s = n(166459),
  l = n(232567),
  u = n(911969),
  c = n(673750),
  d = n(687294),
  _ = n(367907),
  E = n(465343),
  f = n(339085),
  h = n(906411),
  p = n(633302),
  m = n(603721),
  I = n(188597),
  T = n(3148),
  g = n(346479),
  S = n(706454),
  A = n(430824),
  N = n(117530),
  v = n(594174),
  O = n(403182),
  R = n(823379),
  C = n(380684),
  y = n(861990),
  D = n(555573),
  L = n(174212),
  b = n(456007),
  M = n(10718),
  P = n(998698),
  U = n(895924),
  w = n(581364),
  x = n(689079),
  G = n(981631),
  k = n(959517),
  B = n(689938);
let F = (e, t) => {
var n;
return null == e ? void 0 : null === (n = e.find(e => e.displayName === t)) || void 0 === n ? void 0 : n.value;
  },
  V = function(e, t, n) {
var r, i;
let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e;
if (e.name === (null === (r = n.autocomplete) || void 0 === r ? void 0 : r.name))
  return n.autocomplete.query;
if ('' === t)
  return null;
let o = L.Z.getAutocompleteLastChoices(n.channel.id, e.name);
return null != o ? null !== (i = F(o, t)) && void 0 !== i ? i : a(t) : a(t);
  },
  H = e => {
let t = e.toLowerCase() === x.WO.toLowerCase(),
  n = e.toLowerCase() === x.Lu.toLowerCase();
return t || n ? t : null;
  };
async function Z(e) {
  var t, n, r, o, l, c, d, f, h, p, m, I, T, A, v, O;
  let {
command: R,
optionValues: C,
context: y,
commandTargetId: L,
maxSizeCallback: M,
commandOrigin: x = U.bB.CHAT,
sectionName: k
  } = e, B = null !== (r = P.Z.getCommandOrigin(y.channel.id)) && void 0 !== r ? r : x;
  null == y.autocomplete && a.Z.dispatch({
type: 'APPLICATION_COMMAND_USED',
context: y,
command: R,
commandOrigin: B
  }), await g.Z.unarchiveThreadIfNecessary(y.channel.id);
  let Z = [],
j = [],
K = (0, w.D7)(B);
  if (null != R.options)
for (let e of R.options) {
  if (e.type === u.jw.SUB_COMMAND || e.type === u.jw.SUB_COMMAND_GROUP || !(e.name in C))
    continue;
  let t = (null === (o = y.autocomplete) || void 0 === o ? void 0 : o.name) === e.name || void 0,
    n = null;
  if (e.type === u.jw.STRING) {
    let r = null !== (c = null === (l = b.li(C, e.name)) || void 0 === l ? void 0 : l.trim()) && void 0 !== c ? c : '';
    n = null != e.choices ? F(e.choices, r) : e.autocomplete ? V(e, r, y) : r, i()(null != y.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')), null != n && Z.push({
      type: e.type,
      name: e.name,
      value: n,
      focused: t
    });
    continue;
  }
  if (e.type === u.jw.ATTACHMENT) {
    if (null != y.autocomplete)
      continue;
    let n = N.Z.getUpload(y.channel.id, e.name, K);
    if (null == n)
      continue;
    let r = j.length;
    j.push(n), Z.push({
      type: e.type,
      name: e.name,
      value: r,
      focused: t
    });
    continue;
  }
  let r = b.OU(C[e.name]);
  if (i()(null != y.autocomplete || 1 === r.length, 'Option "'.concat(e.name, '" expects a single option type')), null == r[0] && !t)
    continue;
  let a = null !== (d = r[0]) && void 0 !== d ? d : {
    type: 'text',
    text: ''
  };
  switch (e.type) {
    case u.jw.CHANNEL:
      if ('channelMention' === a.type)
        n = a.channelId;
      else if ('text' === a.type) {
        if ((0, w.BH)(a.text))
          n = a.text.trim();
        else {
          let e = (0, E.K)(a.text, null === (f = y.guild) || void 0 === f ? void 0 : f.id, y.channel.id);
          i()((null == e ? void 0 : e.type) === 'channelMention', 'Failed to resolve '.concat(a.text)), n = e.channelId;
        }
      }
      break;
    case u.jw.ROLE:
      if ('roleMention' === a.type)
        n = a.roleId;
      else if ('text' === a.type) {
        if ((0, w.BH)(a.text))
          n = a.text.trim();
        else {
          let e = (0, E.K)(a.text, null === (h = y.guild) || void 0 === h ? void 0 : h.id, y.channel.id, {
            allowUsers: !1
          });
          i()((null == e ? void 0 : e.type) === 'roleMention', 'Failed to resolve '.concat(a.text)), n = e.roleId;
        }
      } else
        'textMention' === a.type && '@everyone' === a.text && (n = null === (p = y.guild) || void 0 === p ? void 0 : p.id);
      break;
    case u.jw.USER:
      if ('userMention' === a.type)
        n = a.userId;
      else if ('text' === a.type) {
        if ((0, w.BH)(a.text))
          n = a.text.trim();
        else {
          let e = (0, E.K)(a.text, null === (m = y.guild) || void 0 === m ? void 0 : m.id, y.channel.id, {
            allowRoles: !1
          });
          i()((null == e ? void 0 : e.type) === 'userMention', 'Failed to resolve '.concat(a.text)), n = e.userId;
        }
      }
      break;
    case u.jw.MENTIONABLE:
      if ('userMention' === a.type)
        n = a.userId;
      else if ('roleMention' === a.type)
        n = a.roleId;
      else if ('textMention' === a.type && '@everyone' === a.text)
        n = null === (I = y.guild) || void 0 === I ? void 0 : I.id;
      else if ('text' === a.type) {
        if ((0, w.BH)(a.text))
          n = a.text.trim();
        else {
          let e = (0, E.K)(a.text, null === (T = y.guild) || void 0 === T ? void 0 : T.id, y.channel.id);
          (null == e ? void 0 : e.type) === 'userMention' ? n = e.userId: (null == e ? void 0 : e.type) === 'roleMention' ? n = e.roleId : (null == e ? void 0 : e.type) === 'textMention' && '@everyone' === e.text ? n = null === (A = y.guild) || void 0 === A ? void 0 : A.id : i()(!1, 'Failed to resolve '.concat(a.text));
        }
      }
      break;
    case u.jw.BOOLEAN:
      'text' === a.type && (n = H(a.text.trim()));
      break;
    case u.jw.INTEGER:
      if ('text' === a.type) {
        let t = a.text.trim();
        n = null != e.choices ? Number(F(e.choices, t)) : e.autocomplete ? V(e, t, y, Number) : Number(b.AS(S.default.locale, t));
      }
      break;
    case u.jw.NUMBER:
      if ('text' === a.type) {
        let t = a.text.trim();
        n = null != e.choices ? Number(F(e.choices, t)) : e.autocomplete ? V(e, t, y, Number) : Number(b.AS(S.default.locale, t));
      }
      break;
    default:
      i()(!1, 'Unsupported option type: '.concat(e.type));
      continue;
  }
  i()(null != y.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')), null != n && Z.push({
    type: e.type,
    name: e.name,
    value: n,
    focused: t
  });
}
  if (null != R.subCommandPath)
for (let e = R.subCommandPath.length - 1; e >= 0; e -= 1) {
  let {
    name: t,
    type: n
  } = R.subCommandPath[e];
  Z = [{
    type: n,
    name: t,
    options: Z
  }];
}
  if (null != R.execute)
return _.ZP.trackWithMetadata(G.rMx.APPLICATION_COMMAND_USED, {
  command_id: R.id,
  application_id: R.applicationId,
  command_type: R.type,
  location: B === U.bB.APPLICATION_LAUNCHER ? U.Vh.APP_LAUNCHER : U.Vh.SLASH_UI
}), R.execute(Z, y);
  if (R.inputType === U.iw.BUILT_IN || R.inputType === U.iw.BUILT_IN_TEXT || R.inputType === U.iw.BUILT_IN_INTEGRATION)
return;
  let z = {
version: R.version,
id: null !== (v = null === (t = R.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== v ? v : R.id,
guild_id: R.guildId,
name: null !== (O = null === (n = R.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== O ? O : R.name,
type: R.type,
options: Z,
application_command: R.rootCommand
  };
  null != L && (z.target_id = L), null != y.autocomplete ? (0, D.GV)(R, y, z) : (s.Z.clearAll(y.channel.id, K), await W({
applicationId: R.applicationId,
data: z,
context: y,
attachments: j,
maxSizeCallback: M,
onMessageSuccess: () => {
  Y(C);
},
commandDisplayName: R.displayName,
analytics_location: B === U.bB.APPLICATION_LAUNCHER ? U.Vh.APP_LAUNCHER : U.Vh.SLASH_UI,
sectionName: k
  }));
}
let Y = e => {
let t = Object.values(e).flatMap(e => e.map(e => 'emoji' === e.type ? new p.dy({
  type: h.B.UNICODE,
  names: [e.name.replaceAll(':', '')],
  surrogates: ''
}) : 'customEmoji' === e.type ? f.Z.getCustomEmojiById(e.emojiId) : null).filter(R.lm));
t.length > 0 && a.Z.dispatch({
  type: 'EMOJI_TRACK_USAGE',
  emojiUsed: t
});
  },
  j = (e, t, n) => {
if (e.isCommandType()) {
  let r = t.guild_id;
  null != e.interactionData && W({
    applicationId: n,
    data: e.interactionData,
    context: {
      channel: t,
      guild: null != r ? A.Z.getGuild(r) : null
    }
  });
}
  },
  W = async e => {
var t;
let {
  applicationId: n,
  data: r,
  context: i,
  attachments: s,
  maxSizeCallback: c,
  onMessageSuccess: d,
  commandDisplayName: _,
  analytics_location: E,
  sectionName: f
} = e, {
  channel: h,
  guild: p
} = i, I = h.id, g = null == p ? void 0 : p.id, S = M.Nk(i.channel, r.type, n);
if (null == S)
  return;
let A = null === (t = S.application) || void 0 === t ? void 0 : t.bot;
if (null == A && null != S.botId)
  try {
    await l.PR(S.botId);
  } catch {}
let N = {
  ...(0, T.ZP)({
    channelId: I,
    content: '',
    type: r.type === u.yU.CHAT ? G.uaV.CHAT_INPUT_COMMAND : G.uaV.CONTEXT_MENU_COMMAND,
    author: null != A ? A : {
      id: S.id,
      username: S.name,
      discriminator: G.fo$,
      avatar: null,
      bot: !0
    }
  }),
  application: null == S ? void 0 : S.application,
  interaction: {
    id: r.id,
    name: r.name,
    name_localized: _,
    type: u.B8.APPLICATION_COMMAND,
    user: (0, T.pe)(v.default.getCurrentUser())
  },
  interaction_data: r
};
o.Z.receiveMessage(I, N, !0, {
  applicationId: n
});
let O = (e, t) => {
    null == t && null != e && o.Z.sendClydeError(I, e), a.Z.dispatch({
      type: 'MESSAGE_SEND_FAILED',
      messageId: N.id,
      channelId: I,
      reason: t
    });
  },
  R = {
    applicationId: n,
    channelId: I,
    guildId: g,
    data: r,
    nonce: N.id,
    attachments: s,
    maxSizeCallback: c,
    analytics_location: E,
    sectionName: f
  };
m.kz(R.nonce, {
  messageId: N.id,
  onCreate: e => {
    null != N.interaction && (N.interaction.id = e);
  },
  onFailure: (e, t) => O(e, t),
  data: {
    interactionType: u.B8.APPLICATION_COMMAND,
    channelId: I
  }
}), null != s ? q(s, R.nonce, g, c).then(e => {
  if (!!e)
    K(R, d);
}) : K(R, d);
  };

function K(e, t) {
  c.ZP.enqueue({
type: c.$V.COMMAND,
message: e
  }, n => {
var r;
(0, I.Sg)(e.nonce, n, e.applicationId, e.channelId, null !== (r = e.guildId) && void 0 !== r ? r : null), n.ok && null != t && t();
  });
}
async function z(e, t) {
  let n = 0,
r = 0;
  for (let a of e) {
var i;
let e = t ? null !== (i = a.currentSize) && void 0 !== i ? i : 0 : await a.getSize();
e > r && (r = e), n += e;
  }
  return {
totalSize: n,
largestUploadedFileSize: r
  };
}
async function q(e, t, n, r) {
  let i = (0, O.dg)(n),
a = e => {
  null == r || r(i, e), m.yr(t, G.evJ.ENTITY_TOO_LARGE, B.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
    maxSize: (0, O.Ng)(i)
  }));
},
{
  totalSize: o,
  largestUploadedFileSize: s
} = await z(e, !1),
l = (0, C.Xv)() ? y.Ld : y.zz;
  if (s > Math.max(i, k.Y1) || o > l)
return a(s), !1;
  try {
await (0, d.$)(e);
  } catch {
m.yr(t, void 0, B.Z.Messages.UPLOADING_FILES_FAILED.format({
  count: e.length
}));
  }
  return {
totalSize: o,
largestUploadedFileSize: s
  } = await z(e, !0), !e.some(e => e.error === G.evJ.ENTITY_TOO_LARGE) && !(o > l) || (a(s), !1);
}