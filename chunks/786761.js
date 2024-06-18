"use strict";
n.d(t, {
  e5: function() {
    return O
  },
  gx: function() {
    return R
  },
  lp: function() {
    return M
  },
  wi: function() {
    return C
  }
}), n(789020), n(47120);
var i = n(913527),
  r = n.n(i),
  s = n(830121);
n(712057);
var o = n(292419),
  a = n(330044),
  l = n(378233),
  u = n(360742),
  _ = n(23750),
  d = n(598077),
  c = n(314897),
  E = n(699516),
  I = n(594174),
  T = n(408433),
  h = n(669079);
n(358085), n(51144);
var S = n(572804);
n(739566);
var f = n(959517),
  N = n(981631);
n(689938);
let A = new d.Z({
  id: "???",
  username: "???"
});

function m(e) {
  var t;
  return new _.pi({
    ...e,
    timestamp: new Date(e.timestamp),
    editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
    attachments: p(e),
    embeds: L(e),
    components: (0, o.uZ)(null !== (t = e.components) && void 0 !== t ? t : [], {
      includeEmojiSrc: !1
    })
  })
}

function O(e) {
  var t, n, i, r, o, l, T, f, O, R;
  let {
    reactions: C,
    interactionData: p
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, L = m(e), M = null !== (r = null === (t = e.mentions) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== r ? r : [], P = null !== (o = e.mention_roles) && void 0 !== o ? o : [], y = null !== (l = e.mention_channels) && void 0 !== l ? l : [], U = e.message_reference, b = e.type === N.uaV.THREAD_CREATED ? [] : (0, s.ZP)(e.content);
  let G = null == (f = e).author ? A : null != f.webhook_id ? new d.Z(f.author) : null !== (O = I.default.getUser(f.author.id)) && void 0 !== O ? O : new d.Z(f.author),
    w = null == e ? void 0 : e.gift_info,
    k = null != e.interaction ? u.Z.createFromServer(e.interaction) : null,
    B = e.type === N.uaV.THREAD_STARTER_MESSAGE ? null === (i = e.referenced_message) || void 0 === i ? void 0 : null === (n = i.author) || void 0 === n ? void 0 : n.id : void 0,
    x = e.type === N.uaV.PREMIUM_REFERRAL ? e.content : void 0,
    V = e.content;
  return e.type === N.uaV.PREMIUM_REFERRAL && (V = ""), R = 0, new _.ZP({
    ...e,
    ...L.toJS(),
    author: G,
    webhookId: e.webhook_id,
    blocked: E.Z.isBlocked(G.id) || null != B && E.Z.isBlocked(B),
    mentionEveryone: e.mention_everyone,
    mentions: M,
    mentionRoles: P,
    mentionChannels: y,
    messageReference: U,
    mentioned: (0, S.Sz)({
      userId: c.default.getId(),
      channelId: e.channel_id,
      mentionEveryone: null !== (T = e.mention_everyone) && void 0 !== T && T,
      mentionUsers: M,
      mentionRoles: P
    }),
    codedLinks: b,
    giftCodes: (0, h.Fp)(e) ? (0, h.Q_)(null == e ? void 0 : e.embeds[0].url) : (0, h.Q_)(e.content),
    content: V,
    referralTrialOfferId: x,
    call: g(e.call, L.timestamp),
    messageSnapshots: D(e),
    reactions: v(null != C ? C : e.reactions, e.poll),
    interaction: k,
    interactionData: null != p ? p : e.interaction_data,
    interactionMetadata: e.interaction_metadata,
    roleSubscriptionData: e.role_subscription_data,
    purchaseNotification: e.purchase_notification,
    poll: null == e.poll ? void 0 : (0, a.Z)(e.poll),
    giftInfo: null == w ? void 0 : w
  })
}

function R(e, t) {
  return null != t.edited_timestamp ? {
    ...t,
    reactions: e.reactions,
    interaction_data: e.interaction_data
  } : {
    ...e,
    ...t
  }
}

function C(e, t) {
  if (null != t.edited_timestamp) return O(t, {
    reactions: e.reactions,
    interactionData: e.interactionData
  });
  let n = e;
  if (null != t.call && (n = n.set("call", g(t.call, e.timestamp))), null != t.attachments && (n = n.set("attachments", p(t))), null != t.content && "" !== t.content && (n = n.set("content", t.content)), null != t.embeds && (n = n.set("embeds", L(t))), null != t.message_snapshots && (n = n.set("messageSnapshots", D(t))), t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)), null != n.webhookId && null != t.author && (n = n.set("author", new d.Z(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)), null != t.components && (n = n.set("components", (0, o.uZ)(t.components, {
      includeEmojiSrc: !1
    }))), null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)), null != t.reactions) {
    var i;
    n = n.set("reactions", v(null !== (i = e.reactions) && void 0 !== i ? i : t.reactions))
  }
  return null != t.poll && (n = n.set("poll", (0, a.Z)(t.poll))), n
}

function p(e) {
  return null == e.attachments ? [] : e.attachments.map(e => ({
    ...e,
    spoiler: e.filename.startsWith(f._j)
  }))
}

function g(e, t) {
  if (null != e) {
    let n = null != e.ended_timestamp ? r()(new Date(e.ended_timestamp)) : null,
      i = null != n ? r().duration(n.diff(t)) : null;
    return {
      participants: e.participants,
      endedTimestamp: n,
      duration: i
    }
  }
  return null
}

function L(e) {
  if (null == e.embeds) return [];
  let t = e.embeds.map(t => (0, T.kC)(e.channel_id, e.id, t));
  return (0, T.o3)(t)
}

function v(e, t) {
  var n;
  if (null == e && (null == t ? void 0 : t.results) == null) return [];
  let i = null == t ? void 0 : null === (n = t.results) || void 0 === n ? void 0 : n.answer_counts.map(e => ({
    count_details: {
      vote: e.count
    },
    me_vote: e.me_voted,
    emoji: {
      id: e.id.toString(),
      name: "",
      animated: !1
    },
    me: !1,
    me_burst: !1,
    count: e.count,
    burst_count: 0
  }));
  return [...null != e ? e : [], ...null != i ? i : []].map(e => {
    let t = {
      ...e
    };
    if ((null == t ? void 0 : t.count_details) != null) {
      var n, i;
      t.burst_count = null !== (n = t.count_details.burst) && void 0 !== n ? n : 0, t.count = null !== (i = t.count_details.normal) && void 0 !== i ? i : 0
    }
    return t.count < 0 && (t.count = 0), t.burst_count < 0 && (t.burst_count = 0), t
  })
}

function D(e) {
  return null == e.message_snapshots ? [] : e.message_snapshots.map(e => {
    let {
      message: t,
      guild: n
    } = e;
    return new _.Hx({
      message: m(t),
      guild: n
    })
  })
}
let M = e => 0 === (0, l.cv)(e).length || "" !== e.content