"use strict";
n.d(t, {
  B: function() {
    return v
  },
  B5: function() {
    return p
  },
  Do: function() {
    return L
  },
  GX: function() {
    return y
  },
  HR: function() {
    return B
  },
  Hr: function() {
    return C
  },
  Je: function() {
    return O
  },
  Js: function() {
    return T
  },
  KR: function() {
    return g
  },
  MO: function() {
    return b
  },
  N3: function() {
    return U
  },
  Oq: function() {
    return m
  },
  P_: function() {
    return f
  },
  Vn: function() {
    return A
  },
  ab: function() {
    return R
  },
  e5: function() {
    return D
  },
  e7: function() {
    return S
  },
  lN: function() {
    return w
  },
  nE: function() {
    return G
  },
  nH: function() {
    return N
  },
  qs: function() {
    return I
  },
  qz: function() {
    return k
  },
  ws: function() {
    return M
  },
  xI: function() {
    return P
  },
  zI: function() {
    return h
  }
});
var i = n(367907),
  r = n(731429),
  s = n(188471),
  o = n(592125),
  a = n(703558),
  l = n(626135),
  u = n(358085),
  _ = n(660189),
  d = n(208970),
  c = n(6496),
  E = n(981631);

function I(e) {
  let {
    guildId: t,
    channelId: n,
    sessionId: r,
    postIds: s,
    additionalTimes: o
  } = e;
  i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_SEEN_BATCH, {
    ...(0, c.xl)({
      channelId: n,
      sessionId: r
    }),
    guild_id: t,
    channel_id: n,
    post_ids: s,
    additional_seen_time_millis: o
  })
}

function T(e) {
  let {
    guildId: t,
    channelId: n,
    numSearchResults: r
  } = e;
  i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_SEARCHED, {
    ...(0, c.xl)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n,
    num_search_results: r
  })
}

function h(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_SEARCH_CLEARED, {
    ...(0, c.xl)({
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
    filterTagIds: s,
    added: o,
    location: a
  } = e;
  i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
    ...(0, c.xl)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n,
    tag_id: r,
    filter_tag_ids: s,
    added: o,
    location: a
  })
}

function f(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
    ...(0, c.xl)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n
  })
}

function N(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
    ...(0, c.xl)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n
  })
}

function A(e) {
  var t, n, r, s;
  let {
    guildId: l,
    channelId: u
  } = e, _ = o.Z.getChannel(u);
  if (null == _) return;
  let d = a.Z.getThreadSettings(u),
    I = null === (t = _.template) || void 0 === t ? void 0 : t.trim(),
    T = a.Z.getDraft(u, a.d.FirstThreadMessage),
    h = null == T || 0 === T.length || (null == T ? void 0 : T.trim()) === I,
    S = (null == d ? void 0 : d.appliedTags) == null || (null == d ? void 0 : null === (n = d.appliedTags) || void 0 === n ? void 0 : n.size) === 0,
    f = (null == d ? void 0 : d.name) == null || (null == d ? void 0 : null === (s = d.name) || void 0 === s ? void 0 : null === (r = s.trim()) || void 0 === r ? void 0 : r.length) === 0;
  if (!h || !S || !f) i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
    ...(0, c.xl)({
      channelId: u
    }),
    guild_id: l,
    channel_id: u,
    applied_tag_ids: (0, c.q8)(u),
    num_attachments: (0, c.RR)(u)
  })
}

function m(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
    ...(0, c.xl)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n
  })
}

function O(e) {
  let {
    guildId: t,
    channelId: n,
    postId: r
  } = e;

  function s() {
    i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_POST_CREATED, {
      ...(0, c.n4)({
        channelId: r
      }),
      guild_id: t,
      channel_id: n
    })
  }
  _.Z.isLoading(r) ? _.Z.addConditionalChangeListener(() => !!_.Z.isLoading(r) || (s(), !1)) : s()
}

function R(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_SCROLLED, {
    ...(0, c.xl)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n
  })
}

function C(e) {
  let {
    guildId: t,
    channelId: n,
    numArchivedThreads: r,
    hasMoreThreads: s,
    filterTagIds: a,
    sortOrder: u
  } = e;
  l.default.track(E.rMx.FORUM_CHANNEL_MORE_POSTS_LOADED, {
    ...(0, i.hH)(t),
    ...(0, i.v_)(o.Z.getChannel(n)),
    ...(0, c.xl)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n,
    num_archived_threads: r,
    num_active_threads: (0, c.bE)(t, n),
    has_more_threads: s,
    filter_tag_ids: a,
    sort_order: u
  })
}

function p(e) {
  let {
    guildId: t,
    channelId: n,
    postId: r,
    location: s
  } = e;
  i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_POST_CLICKED, {
    ...(0, c.n4)({
      channelId: r
    }),
    guild_id: t,
    channel_id: n,
    is_search_result: null != d.Z.getSearchResults(n),
    location: s
  })
}

function g(e) {
  let {
    guildId: t,
    channelId: n,
    sortOrder: r
  } = e;
  i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_POSTS_SORTED, {
    ...(0, c.xl)({
      channelId: n
    }),
    guild_id: t,
    channel_id: n,
    sort_type: (0, c.t$)(r),
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
  i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_LAYOUT_UPDATED, {
    ...(0, c.xl)({
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
  i.ZP.trackWithMetadata(E.rMx.FORUM_POST_LINK_COPIED, {
    forum_post_id: t,
    location: n
  })
}

function D(e) {
  let {
    onboardingCTA: t
  } = e;
  i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_ONBOARDING_CLICKED, {
    onboarding_cta_type: t
  })
}

function M(e) {
  let {
    forumDemoId: t
  } = e;
  i.ZP.trackWithMetadata(E.rMx.FORUM_UPSELL_MODAL_CLICKED, {
    forum_demo_id: t
  })
}

function P(e) {
  let {
    added: t
  } = e;
  i.ZP.trackWithMetadata(E.rMx.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, {
    added: t
  })
}

function y(e) {
  let {
    readGuideCta: t
  } = e;
  i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_HELPER_CARD_CLICKED, {
    read_guide_cta: t
  })
}

function U(e) {
  let {
    isMobile: t
  } = e;
  i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, {
    is_mobile: t
  })
}

function b() {
  i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED)
}

function G() {
  i.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED)
}

function w(e) {
  i.ZP.trackWithMetadata(E.rMx.CHANNEL_OPENED, {
    ...(0, i.hH)(e.guild_id),
    ...(0, i.v_)(e),
    ...(0, r.K)(e, !0),
    ...(0, i.$H)(e.id),
    channel_view: "Split View",
    platform: (0, u.getPlatform)()
  }), (0, s.a)(E.rMx.CHANNEL_OPENED_CLICKSTREAM, {
    channelId: e.id
  })
}

function k() {
  i.ZP.trackWithMetadata(E.rMx.OPEN_MODAL, {
    type: "Forum Channel Upsell Modal",
    location: {
      section: E.jXE.CHANNEL_WELCOME_CTA
    }
  })
}

function B(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  i.ZP.trackWithMetadata(E.rMx.THREAD_CREATION_STARTED, {
    ...(0, r.K)(o.Z.getChannel(n)),
    channel_id: n,
    guild_id: t
  })
}