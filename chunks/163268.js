"use strict";
n.d(t, {
  Cm: function() {
    return z
  },
  HH: function() {
    return k
  },
  Hc: function() {
    return j
  },
  IV: function() {
    return W
  },
  KP: function() {
    return x
  },
  OP: function() {
    return Y
  },
  Pq: function() {
    return o
  },
  Sv: function() {
    return Z
  },
  Tw: function() {
    return V
  },
  UU: function() {
    return s
  },
  Yy: function() {
    return r
  },
  aP: function() {
    return F
  },
  bR: function() {
    return q
  },
  l4: function() {
    return G
  },
  lJ: function() {
    return i
  },
  oh: function() {
    return H
  },
  tG: function() {
    return y
  },
  vx: function() {
    return w
  },
  xx: function() {
    return K
  },
  zj: function() {
    return B
  }
}), n(789020);
var i, r, s, o, a, l, u, _, d = n(286379),
  c = n(524437),
  E = n(432877),
  I = n(768494),
  T = n(797614),
  h = n(182274),
  S = n(695346),
  f = n(592125),
  N = n(699516),
  A = n(594174),
  m = n(626135),
  O = n(630388),
  R = n(948561),
  C = n(651530),
  p = n(719548),
  g = n(981631),
  L = n(973005);
n(689938);
let v = {
    [L.TI.DISABLED.valueOf()]: c.Q4.SHOW,
    [L.TI.NON_FRIENDS.valueOf()]: c.Q4.SHOW,
    [L.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: c.Q4.BLOCK
  },
  D = {
    [L.TI.DISABLED.valueOf()]: c.Q4.SHOW,
    [L.TI.NON_FRIENDS.valueOf()]: c.Q4.BLOCK,
    [L.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: c.Q4.BLOCK
  },
  M = {
    [L.TI.DISABLED.valueOf()]: c.Q4.BLUR,
    [L.TI.NON_FRIENDS.valueOf()]: c.Q4.BLUR,
    [L.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: c.Q4.BLOCK
  },
  P = {
    [L.TI.DISABLED.valueOf()]: c.Q4.BLUR,
    [L.TI.NON_FRIENDS.valueOf()]: c.Q4.BLOCK,
    [L.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: c.Q4.BLOCK
  },
  y = e => {
    let {
      setting: t,
      isDm: n = !1,
      isFriend: i = !1
    } = e;
    if (null != t && t !== c.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
    let r = A.default.getCurrentUser();
    return (null == r ? void 0 : r.nsfwAllowed) === !1 ? b({
      isDm: n,
      isFriend: i
    }) : U({
      isDm: n,
      isFriend: i
    })
  },
  U = e => {
    let {
      isDm: t = !1,
      isFriend: n = !1
    } = e;
    if (!t) return c.Q4.SHOW;
    let i = S.UP.getSetting();
    return n ? v[i] : D[i]
  },
  b = e => {
    let {
      isDm: t = !1,
      isFriend: n = !1
    } = e;
    if (!t) return c.Q4.BLUR;
    let i = S.UP.getSetting();
    return n ? M[i] : P[i]
  },
  G = () => {
    let e = S.Sh.getSetting();
    return {
      explicitContentGuilds: y({
        setting: null == e ? void 0 : e.explicitContentGuilds
      }),
      explicitContentNonFriendDm: y({
        setting: null == e ? void 0 : e.explicitContentNonFriendDm,
        isDm: !0
      }),
      explicitContentFriendDm: y({
        setting: null == e ? void 0 : e.explicitContentFriendDm,
        isDm: !0,
        isFriend: !0
      })
    }
  };

function w(e) {
  return e === c.Q4.BLUR || e === c.Q4.BLOCK
}

function k(e) {
  var t;
  if (!(0, C.Kh)()) return !1;
  let n = A.default.getCurrentUser();
  if (null == n || (null === (t = e.author) || void 0 === t ? void 0 : t.id) === n.id) return !1;
  let {
    explicitContentGuilds: i,
    explicitContentFriendDm: r,
    explicitContentNonFriendDm: s
  } = G(), o = f.Z.getChannel(e.channel_id);
  if (null == o) return !1;
  if (o.isDM() || o.isGroupDM()) return null != e.author && N.Z.getFriendIDs().includes(e.author.id) ? w(r) : w(s);
  return w(i)
}
let B = e => {
  let t = G();
  S.Sh.updateSetting({
    ...t,
    ...e
  })
};

function x(e, t) {
  var n, i, r, s;
  if (!t) return !1;
  if (E.ZP.get("obscure_blur_effect_enabled")) return !0;
  switch (e.type) {
    case 1:
      return (0, O.yE)(null !== (n = e.media.flags) && void 0 !== n ? n : 0, g.xPJ.CONTAINS_EXPLICIT_MEDIA);
    case 0:
      return (0, O.yE)(null !== (i = e.media.flags) && void 0 !== i ? i : 0, g.J0y.CONTAINS_EXPLICIT_MEDIA);
    case 2:
      return (0, O.yE)(null !== (s = null === (r = e.media.contentScanMetadata) || void 0 === r ? void 0 : r.contentScanFlags) && void 0 !== s ? s : 0, I.Cb.EXPLICIT);
    default:
      return !1
  }
}

function V(e) {
  return k(e) ? {
    obscuredAttachments: e.attachments.filter(e => x({
      type: 0,
      media: e
    }, !0)),
    obscuredEmbeds: e.embeds.filter(e => x({
      type: 1,
      media: e
    }, !0))
  } : {
    obscuredAttachments: [],
    obscuredEmbeds: []
  }
}

function Z(e) {
  return !E.ZP.get("explicit_media_redaction_ignore_pending_scan") && null == e
}

function H(e) {
  return !E.ZP.get("explicit_media_redaction_ignore_pending_scan") && null == e
}

function F(e) {
  let {
    action: t,
    channelId: n,
    messageId: i,
    context: r
  } = e;
  if (null == n || null == i) return;
  let s = f.Z.getChannel(n);
  m.default.track(g.rMx.EXPLICIT_MEDIA_ACTION, {
    action: t,
    guild_id: null == s ? void 0 : s.guild_id,
    channel_id: n,
    message_id: i,
    user_is_underage: (0, h.U)(),
    context: r
  })
}

function Y(e, t) {
  let n = Math.min(Math.floor((Date.now() - e) / 1e3), 3);
  T.Z.increment({
    name: d.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
    tags: ["timingBucket:".concat(n), "source:".concat(t), "metricVersion:".concat(1)]
  })
}

function j(e) {
  var t, n, i, r;
  let {
    channelId: s,
    messageId: o,
    attachmentIds: a,
    embedIds: l
  } = e;
  if (null == s || null == o || (null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t : 0) === 0 && (null !== (n = null == l ? void 0 : l.length) && void 0 !== n ? n : 0) === 0) return;
  let u = f.Z.getChannel(s);
  m.default.track(g.rMx.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
    channel_id: s,
    guild_id: null == u ? void 0 : u.guild_id,
    message_id: o,
    embed_ids: l,
    user_is_underage: (0, h.U)(),
    scan_timeout_duration: R.b2,
    attachment_ids_v2: a
  }), T.Z.increment({
    name: d.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT,
    tags: ["metricVersion:".concat(1)]
  }), T.Z.distribution({
    name: d.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION
  }, (null !== (i = null == a ? void 0 : a.length) && void 0 !== i ? i : 0) + (null !== (r = null == l ? void 0 : l.length) && void 0 !== r ? r : 0))
}

function W(e) {
  let {
    channelId: t,
    numOfAttachments: n,
    numOfAttachmentsPendingScan: i,
    numOfEmbeds: r,
    numOfEmbedsPendingScan: s
  } = e;
  if (null == t) return;
  let o = f.Z.getChannel(t);
  m.default.track(g.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
    channel_id: t,
    guild_id: null == o ? void 0 : o.guild_id,
    num_of_attachments: n,
    num_of_attachments_pending_scan: i,
    num_of_embeds: r,
    num_of_embeds_pending_scan: s
  });
  let a = i + s;
  a > 0 && T.Z.distribution({
    name: d.V.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2
  }, a)
}

function K(e) {
  let {
    messageId: t,
    channelId: n,
    numOfAttachments: i,
    numOfExplicitAttachments: r,
    numOfEmbeds: s,
    numOfExplicitEmbeds: o
  } = e;
  if (null == n) return;
  let a = f.Z.getChannel(n);
  m.default.track(g.rMx.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
    message_id: t,
    channel_id: n,
    channel_type: null == a ? void 0 : a.type,
    guild_id: null == a ? void 0 : a.guild_id,
    num_of_attachments: i,
    num_of_explicit_attachments: r,
    num_of_embeds: s,
    num_of_explicit_embeds: o
  })
}

function z(e) {
  let t = e.attachments.map(e => (null == e.content_scan_version && (e.content_scan_version = -1), e)),
    n = (e = e.set("attachments", t)).embeds.map(e => (null == e.contentScanVersion && (e.contentScanVersion = -1), e));
  return e = e.set("embeds", n)
}(a = i || (i = {}))[a.Attachment = 0] = "Attachment", a[a.Embed = 1] = "Embed", a[a.GenericMedia = 2] = "GenericMedia", (l = r || (r = {})).EXPLICIT_MEDIA_LEARN_MORE_VIEWED = "explicit_media_learn_more_viewed", l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = "explicit_media_learn_more_click_settings", l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = "explicit_media_learn_more_click_learn_more", l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = "explicit_media_learn_more_click_dismiss", l.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = "explicit_media_learn_more_click_false_positive", l.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = "explicit_media_false_positive_viewed", l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = "explicit_media_false_positive_click_confirm", l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = "explicit_media_false_positive_click_cancel", l.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = "explicit_media_sender_false_positive_button_clicked", l.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = "explicit_media_false_positive_clyde_message_sent", (u = s || (s = {})).EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = "explicit_media_obscured_false_positive_flow", u.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = "explicit_media_sender_false_positive_flow", u.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = "explicit_media_message_send_blocked", u.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = "explicit_media_add_media_to_forum_post_blocked", (_ = o || (o = {})).UPDATE = "update", _.TIMEOUT = "timeout";
let q = (e, t) => null != e && null != t && (e <= p.LN || t <= p.iE)