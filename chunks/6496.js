n.d(t, {
  RR: function() {
return A;
  },
  WW: function() {
return g;
  },
  bE: function() {
return v;
  },
  n4: function() {
return C;
  },
  q8: function() {
return N;
  },
  t$: function() {
return S;
  },
  xl: function() {
return R;
  }
}), n(411104), n(47120), n(724458);
var r = n(683860),
  i = n(344185),
  a = n(569471),
  s = n(260483),
  o = n(144140),
  l = n(592125),
  u = n(703558),
  c = n(496675),
  d = n(117530),
  _ = n(709054),
  E = n(660189),
  f = n(559241),
  h = n(474387),
  p = n(702225),
  m = n(981631),
  I = n(176505),
  T = n(124368);

function g(e) {
  return p.Z.getForumChannelSessionId(e);
}

function S(e) {
  switch (e) {
case r.z.CREATION_DATE:
  return T.SX.CREATION_DATE;
case r.z.LATEST_ACTIVITY:
  return T.SX.LATEST_ACTIVITY;
default:
  throw Error('Unexpected sort order '.concat(e));
  }
}

function A(e) {
  return d.Z.getUploads(e, u.d.FirstThreadMessage).length;
}

function N(e) {
  var t, n;
  let r = l.Z.getChannel(e);
  if (null == r)
return [];
  let i = l.Z.getChannel(r.parent_id),
a = null == i ? void 0 : i.availableTags;
  if (null == i || null == a)
return [];
  let s = null !== (n = null === (t = u.Z.getThreadSettings(e)) || void 0 === t ? void 0 : t.appliedTags) && void 0 !== n ? n : new Set(),
o = new Set(a.map(e => e.id));
  return Array.from(s).filter(e => o.has(e));
}

function v(e, t) {
  return Object.keys(i.Z.getThreadsForParent(e, t)).length;
}

function O(e) {
  let {
loaded: t,
firstMessage: n
  } = E.Z.getMessage(e);
  return t ? n : null;
}

function R(e) {
  var t, n, r, i;
  let {
channelId: a,
sessionId: s
  } = e, o = l.Z.getChannel(a);
  return null != o && o.isForumLikeChannel() ? {
forum_channel_has_guidelines: null != o.topic && o.topic.trim().length > 0,
forum_channel_default_emoji_reaction_id: null === (t = o.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiId,
forum_channel_default_emoji_reaction_name: null === (n = o.defaultReactionEmoji) || void 0 === n ? void 0 : n.emojiName,
forum_channel_available_tag_ids: null !== (i = null === (r = o.availableTags) || void 0 === r ? void 0 : r.map(e => e.id)) && void 0 !== i ? i : [],
forum_channel_tag_required: o.hasFlag(I.zZ.REQUIRE_TAG),
forum_channel_can_create_post: c.Z.can(m.Plq.SEND_MESSAGES, o),
forum_channel_filter_tag_ids: f.Z.getFilterTagIdsAnalytics(),
forum_channel_sort_order: f.Z.getSortOrderAnalytics(o.id),
forum_channel_session_id: null != s ? s : g(o.id),
forum_channel_layout: f.Z.getLayoutAnalytics(o.id),
forum_channel_default_sort_order: o.defaultSortOrder,
forum_channel_default_layout: o.defaultForumLayout
  } : null;
}

function C(e) {
  var t, n, r, i, u, c, d;
  let {
channelId: E,
sessionId: f
  } = e, p = l.Z.getChannel(E);
  if (null == p || !p.isForumPost())
return null;
  let m = l.Z.getChannel(p.parent_id);
  return null != m && m.isForumLikeChannel() ? {
...R({
  channelId: m.id,
  sessionId: f
}),
thread_approximate_member_count: s.Z.getMemberCount(E),
thread_approximate_message_count: o.Z.getCount(E),
thread_archived: (null === (t = p.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
thread_locked: null !== (c = null === (n = p.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== c && c,
thread_auto_archive_duration_minutes: null !== (d = null === (r = p.threadMetadata) || void 0 === r ? void 0 : r.autoArchiveDuration) && void 0 !== d ? d : 0,
thread_approximate_creation_date: _.default.extractTimestamp(E),
forum_post_id: p.id,
forum_post_first_message_id: _.default.castChannelIdAsMessageId(p.id),
forum_post_num_reactions: function(e) {
  let t = O(e);
  return null == t ? 0 : t.reactions.reduce((e, t) => e + t.count, 0);
}(p.id),
forum_post_num_unique_reactions: function(e) {
  let t = O(e);
  return null == t ? 0 : t.reactions.length;
}(p.id),
forum_post_applied_tag_ids: function(e) {
  var t, n;
  let r = l.Z.getChannel(e);
  if (null == r)
    return [];
  let i = l.Z.getChannel(r.parent_id),
    a = null == i ? void 0 : i.availableTags;
  if (null == i || null == a)
    return [];
  let s = new Set(a.map(e => e.id));
  return null !== (n = null === (t = r.appliedTags) || void 0 === t ? void 0 : t.filter(e => s.has(e))) && void 0 !== n ? n : [];
}(p.id),
forum_post_is_pinned: p.hasFlag(I.zZ.PINNED),
forum_post_is_new: null === (i = h.Z.getReadStateSnapshotAnalytics(p.id)) || void 0 === i ? void 0 : i.isNew,
forum_post_is_unread: null === (u = h.Z.getReadStateSnapshotAnalytics(p.id)) || void 0 === u ? void 0 : u.hasUnreads,
forum_post_is_following: a.Z.hasJoined(p.id),
forum_post_attachment_mimetypes: function(e) {
  let t = O(e);
  return null == t ? [] : t.attachments.map(e => {
    var t;
    return null !== (t = e.content_type) && void 0 !== t ? t : 'unknown';
  });
}(p.id)
  } : null;
}