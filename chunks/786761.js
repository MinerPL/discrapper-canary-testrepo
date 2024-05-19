"use strict";
n.r(t), n.d(t, {
  canEditMessageWithStickers: function() {
    return D
  },
  createMessageRecord: function() {
    return p
  },
  updateMessageRecord: function() {
    return C
  },
  updateServerMessage: function() {
    return O
  }
}), n("789020"), n("47120");
var i = n("913527"),
  r = n.n(i),
  a = n("830121");
n("712057");
var s = n("292419"),
  o = n("330044"),
  l = n("378233"),
  u = n("360742"),
  d = n("23750"),
  _ = n("598077"),
  c = n("314897"),
  E = n("699516"),
  I = n("594174"),
  T = n("408433"),
  f = n("669079");
n("358085"), n("51144");
var S = n("572804");
n("739566");
var h = n("959517"),
  A = n("981631");
n("689938");
let m = new _.default({
  id: "???",
  username: "???"
});

function N(e) {
  var t;
  return new d.MinimalMessageRecord({
    ...e,
    timestamp: new Date(e.timestamp),
    editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
    attachments: R(e),
    embeds: L(e),
    components: (0, s.transformComponents)(null !== (t = e.components) && void 0 !== t ? t : [], {
      includeEmojiSrc: !1
    })
  })
}

function p(e) {
  var t, n, i, r, s, l, T, h, p, O;
  let {
    reactions: C,
    interactionData: R
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, L = N(e), D = null !== (r = null === (t = e.mentions) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== r ? r : [], M = null !== (s = e.mention_roles) && void 0 !== s ? s : [], y = null !== (l = e.mention_channels) && void 0 !== l ? l : [], P = e.message_reference, U = e.type === A.MessageTypes.THREAD_CREATED ? [] : (0, a.default)(e.content);
  let b = null == (h = e).author ? m : null != h.webhook_id ? new _.default(h.author) : null !== (p = I.default.getUser(h.author.id)) && void 0 !== p ? p : new _.default(h.author),
    G = null == e ? void 0 : e.gift_info,
    w = null != e.interaction ? u.default.createFromServer(e.interaction) : null,
    k = e.type === A.MessageTypes.THREAD_STARTER_MESSAGE ? null === (i = e.referenced_message) || void 0 === i ? void 0 : null === (n = i.author) || void 0 === n ? void 0 : n.id : void 0,
    B = e.type === A.MessageTypes.PREMIUM_REFERRAL ? e.content : void 0,
    V = e.content;
  return e.type === A.MessageTypes.PREMIUM_REFERRAL && (V = ""), O = 0, new d.default({
    ...e,
    ...L.toJS(),
    author: b,
    webhookId: e.webhook_id,
    blocked: E.default.isBlocked(b.id) || null != k && E.default.isBlocked(k),
    mentionEveryone: e.mention_everyone,
    mentions: D,
    mentionRoles: M,
    mentionChannels: y,
    messageReference: P,
    mentioned: (0, S.isMentioned)({
      userId: c.default.getId(),
      channelId: e.channel_id,
      mentionEveryone: null !== (T = e.mention_everyone) && void 0 !== T && T,
      mentionUsers: D,
      mentionRoles: M
    }),
    codedLinks: U,
    giftCodes: (0, f.isGiftCodeEmbed)(e) ? (0, f.findGiftCodes)(null == e ? void 0 : e.embeds[0].url) : (0, f.findGiftCodes)(e.content),
    content: V,
    referralTrialOfferId: B,
    call: g(e.call, L.timestamp),
    messageSnapshots: function(e) {
      return null == e.message_snapshots ? [] : e.message_snapshots.map(e => {
        let {
          message: t,
          guild: n
        } = e;
        return new d.MessageSnapshotRecord({
          message: N(t),
          guild: n
        })
      })
    }(e),
    reactions: v(null != C ? C : e.reactions, e.poll),
    interaction: w,
    interactionData: null != R ? R : e.interaction_data,
    interactionMetadata: e.interaction_metadata,
    roleSubscriptionData: e.role_subscription_data,
    purchaseNotification: e.purchase_notification,
    poll: null == e.poll ? void 0 : (0, o.default)(e.poll),
    giftInfo: null == G ? void 0 : G
  })
}

function O(e, t) {
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
  if (null != t.edited_timestamp) return p(t, {
    reactions: e.reactions,
    interactionData: e.interactionData
  });
  let n = e;
  if (null != t.call && (n = n.set("call", g(t.call, e.timestamp))), null != t.attachments && (n = n.set("attachments", R(t))), null != t.content && "" !== t.content && (n = n.set("content", t.content)), null != t.embeds && (n = n.set("embeds", L(t))), t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)), null != n.webhookId && null != t.author && (n = n.set("author", new _.default(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)), null != t.components && (n = n.set("components", (0, s.transformComponents)(t.components, {
      includeEmojiSrc: !1
    }))), null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)), null != t.reactions) {
    var i;
    n = n.set("reactions", v(null !== (i = e.reactions) && void 0 !== i ? i : t.reactions))
  }
  return null != t.poll && (n = n.set("poll", (0, o.default)(t.poll))), n
}

function R(e) {
  return null == e.attachments ? [] : e.attachments.map(e => ({
    ...e,
    spoiler: e.filename.startsWith(h.SPOILER_ATTACHMENT_PREFIX)
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
  let t = e.embeds.map(t => (0, T.sanitizeEmbed)(e.channel_id, e.id, t));
  return (0, T.mergeEmbedsOnURL)(t)
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
let D = e => 0 === (0, l.getMessageStickers)(e).length || "" !== e.content