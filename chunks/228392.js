"use strict";
n.r(t), n.d(t, {
  maybeTrackForumNewPostDraftCreated: function() {
    return m
  },
  trackForumAddMediaToOriginalPostClicked: function() {
    return y
  },
  trackForumChannelMediaUploaderClicked: function() {
    return U
  },
  trackForumChannelSeenBatch: function() {
    return I
  },
  trackForumCreateNewPostClick: function() {
    return h
  },
  trackForumCreateNewPostKeybindUsed: function() {
    return A
  },
  trackForumCreateNewPostStarted: function() {
    return k
  },
  trackForumEnableAutomodClicked: function() {
    return b
  },
  trackForumHelperCardClicked: function() {
    return P
  },
  trackForumLayoutUpdated: function() {
    return L
  },
  trackForumMorePostsLoaded: function() {
    return R
  },
  trackForumNewPostCleared: function() {
    return N
  },
  trackForumOnboardingClicked: function() {
    return D
  },
  trackForumPostClicked: function() {
    return C
  },
  trackForumPostCreated: function() {
    return p
  },
  trackForumPostLinkCopied: function() {
    return v
  },
  trackForumPostSidebarViewed: function() {
    return w
  },
  trackForumPreviewPostClicked: function() {
    return G
  },
  trackForumScrolled: function() {
    return O
  },
  trackForumSearchCleared: function() {
    return f
  },
  trackForumSearched: function() {
    return T
  },
  trackForumSortOrderUpdated: function() {
    return g
  },
  trackForumTagFilterClicked: function() {
    return S
  },
  trackForumUpsellModalClicked: function() {
    return M
  },
  trackForumUpsellModalViewed: function() {
    return B
  }
});
var i = n("367907"),
  r = n("731429"),
  a = n("188471"),
  s = n("592125"),
  o = n("703558"),
  l = n("626135"),
  u = n("358085"),
  d = n("660189"),
  _ = n("208970"),
  c = n("6496"),
  E = n("981631");

function I(e) {
  let {
    guildId: t,
    channelId: n,
    sessionId: r,
    postIds: a,
    additionalTimes: s
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SEEN_BATCH, {
    ...(0, c.collectForumAnalyticsMetadata)({
      channelId: n,
      sessionId: r
    }),
    guild_id: t,
    channel_id: n,
    post_ids: a,
    additional_seen_time_millis: s
  })
}

function T(e) {
  let {
    guildId: t,
    channelId: n,
    numSearchResults: r
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SEARCHED, {
    ...(0, c.collectForumAnalyticsMetadata)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n,
    num_search_results: r
  })
}

function f(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SEARCH_CLEARED, {
    ...(0, c.collectForumAnalyticsMetadata)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n
  })
}

function S(e) {
  let {
    guildId: t,
    channelId: n,
    tagId: r,
    filterTagIds: a,
    added: s,
    location: o
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
    ...(0, c.collectForumAnalyticsMetadata)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n,
    tag_id: r,
    filter_tag_ids: a,
    added: s,
    location: o
  })
}

function h(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
    ...(0, c.collectForumAnalyticsMetadata)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n
  })
}

function A(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
    ...(0, c.collectForumAnalyticsMetadata)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n
  })
}

function m(e) {
  var t, n, r, a;
  let {
    guildId: l,
    channelId: u
  } = e, d = s.default.getChannel(u);
  if (null == d) return;
  let _ = o.default.getThreadSettings(u),
    I = null === (t = d.template) || void 0 === t ? void 0 : t.trim(),
    T = o.default.getDraft(u, o.DraftType.FirstThreadMessage),
    f = null == T || 0 === T.length || (null == T ? void 0 : T.trim()) === I,
    S = (null == _ ? void 0 : _.appliedTags) == null || (null == _ ? void 0 : null === (n = _.appliedTags) || void 0 === n ? void 0 : n.size) === 0,
    h = (null == _ ? void 0 : _.name) == null || (null == _ ? void 0 : null === (a = _.name) || void 0 === a ? void 0 : null === (r = a.trim()) || void 0 === r ? void 0 : r.length) === 0;
  (!f || !S || !h) && i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
    ...(0, c.collectForumAnalyticsMetadata)({
      channelId: u
    }),
    guild_id: l,
    channel_id: u,
    applied_tag_ids: (0, c.getForumPostDraftAppliedTagIds)(u),
    num_attachments: (0, c.getForumPostDraftNumAttachments)(u)
  })
}

function N(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
    ...(0, c.collectForumAnalyticsMetadata)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n
  })
}

function p(e) {
  let {
    guildId: t,
    channelId: n,
    postId: r
  } = e;

  function a() {
    i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_POST_CREATED, {
      ...(0, c.collectForumPostAnalyticsMetadata)({
        channelId: r
      }),
      guild_id: t,
      channel_id: n
    })
  }
  d.default.isLoading(r) ? d.default.addConditionalChangeListener(() => !!d.default.isLoading(r) || (a(), !1)) : a()
}

function O(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SCROLLED, {
    ...(0, c.collectForumAnalyticsMetadata)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n
  })
}

function R(e) {
  let {
    guildId: t,
    channelId: n,
    numArchivedThreads: r,
    hasMoreThreads: a,
    filterTagIds: o,
    sortOrder: u
  } = e;
  l.default.track(E.AnalyticEvents.FORUM_CHANNEL_MORE_POSTS_LOADED, {
    ...(0, i.collectGuildAnalyticsMetadata)(t),
    ...(0, i.collectChannelAnalyticsMetadata)(s.default.getChannel(n)),
    ...(0, c.collectForumAnalyticsMetadata)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n,
    num_archived_threads: r,
    num_active_threads: (0, c.getNumActiveThreads)(t, n),
    has_more_threads: a,
    filter_tag_ids: o,
    sort_order: u
  })
}

function C(e) {
  let {
    guildId: t,
    channelId: n,
    postId: r,
    location: a
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_POST_CLICKED, {
    ...(0, c.collectForumPostAnalyticsMetadata)({
      channelId: r
    }),
    guild_id: t,
    channel_id: n,
    is_search_result: null != _.default.getSearchResults(n),
    location: a
  })
}

function g(e) {
  let {
    guildId: t,
    channelId: n,
    sortOrder: r
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_POSTS_SORTED, {
    ...(0, c.collectForumAnalyticsMetadata)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n,
    sort_type: (0, c.convertSortOrderToReadableString)(r),
    sort_order: r,
    forum_channel_sort_order: r
  })
}

function L(e) {
  let {
    guildId: t,
    channelId: n,
    forumLayout: r
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_LAYOUT_UPDATED, {
    ...(0, c.collectForumAnalyticsMetadata)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n,
    forum_channel_layout: r
  })
}

function v(e) {
  let {
    postId: t,
    location: n
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_POST_LINK_COPIED, {
    forum_post_id: t,
    location: n
  })
}

function D(e) {
  let {
    onboardingCTA: t
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_ONBOARDING_CLICKED, {
    onboarding_cta_type: t
  })
}

function M(e) {
  let {
    forumDemoId: t
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_UPSELL_MODAL_CLICKED, {
    forum_demo_id: t
  })
}

function y(e) {
  let {
    added: t
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, {
    added: t
  })
}

function P(e) {
  let {
    readGuideCta: t
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_HELPER_CARD_CLICKED, {
    read_guide_cta: t
  })
}

function U(e) {
  let {
    isMobile: t
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, {
    is_mobile: t
  })
}

function b() {
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED)
}

function G() {
  i.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED)
}

function w(e) {
  i.default.trackWithMetadata(E.AnalyticEvents.CHANNEL_OPENED, {
    ...(0, i.collectGuildAnalyticsMetadata)(e.guild_id),
    ...(0, i.collectChannelAnalyticsMetadata)(e),
    ...(0, r.collectThreadMetadata)(e, !0),
    ...(0, i.getChannelOpenedMetadata)(e.id),
    channel_view: "Split View",
    platform: (0, u.getPlatform)()
  }), (0, a.trackClickstream)(E.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
    channelId: e.id
  })
}

function B() {
  i.default.trackWithMetadata(E.AnalyticEvents.OPEN_MODAL, {
    type: "Forum Channel Upsell Modal",
    location: {
      section: E.AnalyticsSections.CHANNEL_WELCOME_CTA
    }
  })
}

function k(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  i.default.trackWithMetadata(E.AnalyticEvents.THREAD_CREATION_STARTED, {
    ...(0, r.collectThreadMetadata)(s.default.getChannel(n)),
    channel_id: n,
    guild_id: t
  })
}