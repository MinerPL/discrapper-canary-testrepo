n.d(t, {
  Cm: function() {
return z;
  },
  HH: function() {
return G;
  },
  Hc: function() {
return j;
  },
  IV: function() {
return W;
  },
  KP: function() {
return B;
  },
  OP: function() {
return Y;
  },
  Pq: function() {
return o;
  },
  Sv: function() {
return V;
  },
  Tw: function() {
return F;
  },
  UU: function() {
return a;
  },
  Yy: function() {
return i;
  },
  aP: function() {
return Z;
  },
  bR: function() {
return q;
  },
  l4: function() {
return w;
  },
  lJ: function() {
return r;
  },
  oh: function() {
return H;
  },
  tG: function() {
return M;
  },
  vx: function() {
return x;
  },
  xx: function() {
return K;
  },
  zj: function() {
return k;
  }
}), n(789020);
var r, i, a, o, s, l, u, c, d = n(286379),
  _ = n(524437),
  E = n(432877),
  f = n(768494),
  h = n(797614),
  p = n(182274),
  m = n(695346),
  I = n(592125),
  T = n(699516),
  g = n(594174),
  S = n(626135),
  A = n(630388),
  N = n(948561),
  v = n(651530),
  O = n(719548),
  R = n(981631),
  C = n(973005);
n(689938);
let y = {
[C.TI.DISABLED.valueOf()]: _.Q4.SHOW,
[C.TI.NON_FRIENDS.valueOf()]: _.Q4.SHOW,
[C.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: _.Q4.BLOCK
  },
  D = {
[C.TI.DISABLED.valueOf()]: _.Q4.SHOW,
[C.TI.NON_FRIENDS.valueOf()]: _.Q4.BLOCK,
[C.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: _.Q4.BLOCK
  },
  L = {
[C.TI.DISABLED.valueOf()]: _.Q4.BLUR,
[C.TI.NON_FRIENDS.valueOf()]: _.Q4.BLUR,
[C.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: _.Q4.BLOCK
  },
  b = {
[C.TI.DISABLED.valueOf()]: _.Q4.BLUR,
[C.TI.NON_FRIENDS.valueOf()]: _.Q4.BLOCK,
[C.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: _.Q4.BLOCK
  },
  M = e => {
let {
  setting: t,
  isDm: n = !1,
  isFriend: r = !1
} = e;
if (null != t && t !== _.Q4.UNSET_EXPLICIT_CONTENT_REDACTION)
  return t;
let i = g.default.getCurrentUser();
return (null == i ? void 0 : i.nsfwAllowed) === !1 ? U({
  isDm: n,
  isFriend: r
}) : P({
  isDm: n,
  isFriend: r
});
  },
  P = e => {
let {
  isDm: t = !1,
  isFriend: n = !1
} = e;
if (!t)
  return _.Q4.SHOW;
let r = m.UP.getSetting();
return n ? y[r] : D[r];
  },
  U = e => {
let {
  isDm: t = !1,
  isFriend: n = !1
} = e;
if (!t)
  return _.Q4.BLUR;
let r = m.UP.getSetting();
return n ? L[r] : b[r];
  },
  w = () => {
let e = m.Sh.getSetting();
return {
  explicitContentGuilds: M({
    setting: null == e ? void 0 : e.explicitContentGuilds
  }),
  explicitContentNonFriendDm: M({
    setting: null == e ? void 0 : e.explicitContentNonFriendDm,
    isDm: !0
  }),
  explicitContentFriendDm: M({
    setting: null == e ? void 0 : e.explicitContentFriendDm,
    isDm: !0,
    isFriend: !0
  })
};
  };

function x(e) {
  return e === _.Q4.BLUR || e === _.Q4.BLOCK;
}

function G(e) {
  var t;
  if (!(0, v.Kh)())
return !1;
  let n = g.default.getCurrentUser();
  if (null == n || (null === (t = e.author) || void 0 === t ? void 0 : t.id) === n.id)
return !1;
  let {
explicitContentGuilds: r,
explicitContentFriendDm: i,
explicitContentNonFriendDm: a
  } = w(), o = I.Z.getChannel(e.channel_id);
  if (null == o)
return !1;
  if (o.isDM() || o.isGroupDM())
return null != e.author && T.Z.getFriendIDs().includes(e.author.id) ? x(i) : x(a);
  return x(r);
}
let k = e => {
  let t = w();
  m.Sh.updateSetting({
...t,
...e
  });
};

function B(e, t) {
  var n, r, i, a;
  if (!t)
return !1;
  if (E.ZP.get('obscure_blur_effect_enabled'))
return !0;
  switch (e.type) {
case 1:
  return (0, A.yE)(null !== (n = e.media.flags) && void 0 !== n ? n : 0, R.xPJ.CONTAINS_EXPLICIT_MEDIA);
case 0:
  return (0, A.yE)(null !== (r = e.media.flags) && void 0 !== r ? r : 0, R.J0y.CONTAINS_EXPLICIT_MEDIA);
case 2:
  return (0, A.yE)(null !== (a = null === (i = e.media.contentScanMetadata) || void 0 === i ? void 0 : i.contentScanFlags) && void 0 !== a ? a : 0, f.Cb.EXPLICIT);
default:
  return !1;
  }
}

function F(e) {
  return G(e) ? {
obscuredAttachments: e.attachments.filter(e => B({
  type: 0,
  media: e
}, !0)),
obscuredEmbeds: e.embeds.filter(e => B({
  type: 1,
  media: e
}, !0))
  } : {
obscuredAttachments: [],
obscuredEmbeds: []
  };
}

function V(e) {
  return !E.ZP.get('explicit_media_redaction_ignore_pending_scan') && null == e;
}

function H(e) {
  return !E.ZP.get('explicit_media_redaction_ignore_pending_scan') && null == e;
}

function Z(e) {
  let {
action: t,
channelId: n,
messageId: r,
context: i
  } = e;
  if (null == n || null == r)
return;
  let a = I.Z.getChannel(n);
  S.default.track(R.rMx.EXPLICIT_MEDIA_ACTION, {
action: t,
guild_id: null == a ? void 0 : a.guild_id,
channel_id: n,
message_id: r,
user_is_underage: (0, p.U)(),
context: i
  });
}

function Y(e, t) {
  let n = Math.min(Math.floor((Date.now() - e) / 1000), 3);
  h.Z.increment({
name: d.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
tags: [
  'timingBucket:'.concat(n),
  'source:'.concat(t),
  'metricVersion:'.concat(1)
]
  });
}

function j(e) {
  var t, n, r, i;
  let {
channelId: a,
messageId: o,
attachmentIds: s,
embedIds: l
  } = e;
  if (null == a || null == o || (null !== (t = null == s ? void 0 : s.length) && void 0 !== t ? t : 0) === 0 && (null !== (n = null == l ? void 0 : l.length) && void 0 !== n ? n : 0) === 0)
return;
  let u = I.Z.getChannel(a);
  S.default.track(R.rMx.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
channel_id: a,
guild_id: null == u ? void 0 : u.guild_id,
message_id: o,
embed_ids: l,
user_is_underage: (0, p.U)(),
scan_timeout_duration: N.b2,
attachment_ids_v2: s
  }), h.Z.increment({
name: d.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT,
tags: ['metricVersion:'.concat(1)]
  }), h.Z.distribution({
name: d.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION
  }, (null !== (r = null == s ? void 0 : s.length) && void 0 !== r ? r : 0) + (null !== (i = null == l ? void 0 : l.length) && void 0 !== i ? i : 0));
}

function W(e) {
  let {
channelId: t,
numOfAttachments: n,
numOfAttachmentsPendingScan: r,
numOfEmbeds: i,
numOfEmbedsPendingScan: a
  } = e;
  if (null == t)
return;
  let o = I.Z.getChannel(t);
  S.default.track(R.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
channel_id: t,
guild_id: null == o ? void 0 : o.guild_id,
num_of_attachments: n,
num_of_attachments_pending_scan: r,
num_of_embeds: i,
num_of_embeds_pending_scan: a
  });
  let s = r + a;
  s > 0 && h.Z.distribution({
name: d.V.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2
  }, s);
}

function K(e) {
  let {
messageId: t,
channelId: n,
numOfAttachments: r,
numOfExplicitAttachments: i,
numOfEmbeds: a,
numOfExplicitEmbeds: o
  } = e;
  if (null == n)
return;
  let s = I.Z.getChannel(n);
  S.default.track(R.rMx.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
message_id: t,
channel_id: n,
channel_type: null == s ? void 0 : s.type,
guild_id: null == s ? void 0 : s.guild_id,
num_of_attachments: r,
num_of_explicit_attachments: i,
num_of_embeds: a,
num_of_explicit_embeds: o
  });
}

function z(e) {
  let t = e.attachments.map(e => (null == e.content_scan_version && (e.content_scan_version = -1), e)),
n = (e = e.set('attachments', t)).embeds.map(e => (null == e.contentScanVersion && (e.contentScanVersion = -1), e));
  return e = e.set('embeds', n);
}
(s = r || (r = {}))[s.Attachment = 0] = 'Attachment', s[s.Embed = 1] = 'Embed', s[s.GenericMedia = 2] = 'GenericMedia', (l = i || (i = {})).EXPLICIT_MEDIA_LEARN_MORE_VIEWED = 'explicit_media_learn_more_viewed', l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = 'explicit_media_learn_more_click_settings', l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = 'explicit_media_learn_more_click_learn_more', l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = 'explicit_media_learn_more_click_dismiss', l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = 'explicit_media_learn_more_click_false_positive', l.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = 'explicit_media_false_positive_viewed', l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = 'explicit_media_false_positive_click_confirm', l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = 'explicit_media_false_positive_click_cancel', l.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = 'explicit_media_sender_false_positive_button_clicked', l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = 'explicit_media_false_positive_clyde_message_sent', (u = a || (a = {})).EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = 'explicit_media_obscured_false_positive_flow', u.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = 'explicit_media_sender_false_positive_flow', u.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = 'explicit_media_message_send_blocked', u.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = 'explicit_media_add_media_to_forum_post_blocked', (c = o || (o = {})).UPDATE = 'update', c.TIMEOUT = 'timeout';
let q = (e, t) => null != e && null != t && (e <= O.LN || t <= O.iE);