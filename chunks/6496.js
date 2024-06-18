"use strict";
n.d(t, {
  RR: function() {
    return O
  },
  WW: function() {
    return A
  },
  bE: function() {
    return C
  },
  n4: function() {
    return L
  },
  q8: function() {
    return R
  },
  t$: function() {
    return m
  },
  xl: function() {
    return g
  }
}), n(411104), n(47120), n(724458);
var i = n(683860),
  r = n(344185),
  s = n(569471),
  o = n(260483),
  a = n(144140),
  l = n(592125),
  u = n(703558),
  _ = n(496675),
  d = n(117530),
  c = n(709054),
  E = n(660189),
  I = n(559241),
  T = n(474387),
  h = n(702225),
  S = n(981631),
  f = n(176505),
  N = n(124368);

function A(e) {
  return h.Z.getForumChannelSessionId(e)
}

function m(e) {
  switch (e) {
    case i.z.CREATION_DATE:
      return N.SX.CREATION_DATE;
    case i.z.LATEST_ACTIVITY:
      return N.SX.LATEST_ACTIVITY;
    default:
      throw Error("Unexpected sort order ".concat(e))
  }
}

function O(e) {
  return d.Z.getUploads(e, u.d.FirstThreadMessage).length
}

function R(e) {
  var t, n;
  let i = l.Z.getChannel(e);
  if (null == i) return [];
  let r = l.Z.getChannel(i.parent_id),
    s = null == r ? void 0 : r.availableTags;
  if (null == r || null == s) return [];
  let o = null !== (n = null === (t = u.Z.getThreadSettings(e)) || void 0 === t ? void 0 : t.appliedTags) && void 0 !== n ? n : new Set,
    a = new Set(s.map(e => e.id));
  return Array.from(o).filter(e => a.has(e))
}

function C(e, t) {
  return Object.keys(r.Z.getThreadsForParent(e, t)).length
}

function p(e) {
  let {
    loaded: t,
    firstMessage: n
  } = E.Z.getMessage(e);
  return t ? n : null
}

function g(e) {
  var t, n, i, r;
  let {
    channelId: s,
    sessionId: o
  } = e, a = l.Z.getChannel(s);
  return null != a && a.isForumLikeChannel() ? {
    forum_channel_has_guidelines: null != a.topic && a.topic.trim().length > 0,
    forum_channel_default_emoji_reaction_id: null === (t = a.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiId,
    forum_channel_default_emoji_reaction_name: null === (n = a.defaultReactionEmoji) || void 0 === n ? void 0 : n.emojiName,
    forum_channel_available_tag_ids: null !== (r = null === (i = a.availableTags) || void 0 === i ? void 0 : i.map(e => e.id)) && void 0 !== r ? r : [],
    forum_channel_tag_required: a.hasFlag(f.zZ.REQUIRE_TAG),
    forum_channel_can_create_post: _.Z.can(S.Plq.SEND_MESSAGES, a),
    forum_channel_filter_tag_ids: I.Z.getFilterTagIdsAnalytics(),
    forum_channel_sort_order: I.Z.getSortOrderAnalytics(a.id),
    forum_channel_session_id: null != o ? o : A(a.id),
    forum_channel_layout: I.Z.getLayoutAnalytics(a.id),
    forum_channel_default_sort_order: a.defaultSortOrder,
    forum_channel_default_layout: a.defaultForumLayout
  } : null
}

function L(e) {
  var t, n, i, r, u, _, d;
  let {
    channelId: E,
    sessionId: I
  } = e, h = l.Z.getChannel(E);
  if (null == h || !h.isForumPost()) return null;
  let S = l.Z.getChannel(h.parent_id);
  return null != S && S.isForumLikeChannel() ? {
    ...g({
      channelId: S.id,
      sessionId: I
    }),
    thread_approximate_member_count: o.Z.getMemberCount(E),
    thread_approximate_message_count: a.Z.getCount(E),
    thread_archived: (null === (t = h.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
    thread_locked: null !== (_ = null === (n = h.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== _ && _,
    thread_auto_archive_duration_minutes: null !== (d = null === (i = h.threadMetadata) || void 0 === i ? void 0 : i.autoArchiveDuration) && void 0 !== d ? d : 0,
    thread_approximate_creation_date: c.default.extractTimestamp(E),
    forum_post_id: h.id,
    forum_post_first_message_id: c.default.castChannelIdAsMessageId(h.id),
    forum_post_num_reactions: function(e) {
      let t = p(e);
      return null == t ? 0 : t.reactions.reduce((e, t) => e + t.count, 0)
    }(h.id),
    forum_post_num_unique_reactions: function(e) {
      let t = p(e);
      return null == t ? 0 : t.reactions.length
    }(h.id),
    forum_post_applied_tag_ids: function(e) {
      var t, n;
      let i = l.Z.getChannel(e);
      if (null == i) return [];
      let r = l.Z.getChannel(i.parent_id),
        s = null == r ? void 0 : r.availableTags;
      if (null == r || null == s) return [];
      let o = new Set(s.map(e => e.id));
      return null !== (n = null === (t = i.appliedTags) || void 0 === t ? void 0 : t.filter(e => o.has(e))) && void 0 !== n ? n : []
    }(h.id),
    forum_post_is_pinned: h.hasFlag(f.zZ.PINNED),
    forum_post_is_new: null === (r = T.Z.getReadStateSnapshotAnalytics(h.id)) || void 0 === r ? void 0 : r.isNew,
    forum_post_is_unread: null === (u = T.Z.getReadStateSnapshotAnalytics(h.id)) || void 0 === u ? void 0 : u.hasUnreads,
    forum_post_is_following: s.Z.hasJoined(h.id),
    forum_post_attachment_mimetypes: function(e) {
      let t = p(e);
      return null == t ? [] : t.attachments.map(e => {
        var t;
        return null !== (t = e.content_type) && void 0 !== t ? t : "unknown"
      })
    }(h.id)
  } : null
}