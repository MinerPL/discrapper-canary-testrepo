"use strict";
s.r(t), s.d(t, {
  clearRecentChannels: function() {
    return h
  },
  getActiveAgoTimestamp: function() {
    return P
  },
  getFirstRouteFor: function() {
    return f
  },
  useChannelBrowserChannelCount: function() {
    return m
  },
  useChannelBrowserSections: function() {
    return p
  },
  useFilterCategoriesByQuery: function() {
    return R
  }
}), s("733860");
var E = s("470079"),
  _ = s("658722"),
  a = s.n(_),
  n = s("913527"),
  T = s.n(n),
  i = s("442837"),
  u = s("524437"),
  A = s("45114"),
  l = s("740504"),
  I = s("605236"),
  r = s("931261"),
  o = s("540126"),
  L = s("671098"),
  d = s("703656"),
  N = s("592125"),
  S = s("324067"),
  g = s("306680"),
  D = s("709054"),
  c = s("981631"),
  G = s("176505"),
  O = s("443063"),
  U = s("490897"),
  C = s("689938");

function M(e, t) {
  e.index = t
}

function R(e, t, s, _) {
  _ = _.toLowerCase();
  let n = (0, r.useCanSeeOnboardingHome)(e),
    T = E.useCallback((e, t) => !(n && e.channel.hasFlag(G.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== c.ChannelTypes.GUILD_DIRECTORY && (0 === t.length || a()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [n]);
  return E.useMemo(() => {
    let e = {
      null: [],
      _categories: []
    };
    return s[c.ChannelTypes.GUILD_CATEGORY].forEach(s => {
      let {
        channel: E
      } = s;
      "null" === E.id && (e.null = t.null.filter(e => T(e, _))), e[E.id] = t[E.id].filter(e => T(e, _))
    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === _.length || e[t.channel.id].length > 0), (0, l.default)(e._categories, e).forEach(M), e
  }, [t, s, T, _])
}

function f(e) {
  let t = e.getSections();
  if (t[o.SECTION_INDEX_COMMUNITY] > 0) switch (e.getCommunitySection().getRow(0)) {
    case O.ChannelListCommunityRow.GUILD_HOME:
      return G.StaticChannelRoute.GUILD_HOME;
    case O.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
      return G.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
    case O.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
      return G.StaticChannelRoute.MEMBER_APPLICATIONS
  }
  for (let E = o.SECTION_INDEX_UNCATEGORIZED_CHANNELS; E < e.voiceChannelsSectionNumber; E++)
    if (t[E] > 0) {
      var s;
      let t = null === (s = e.getChannelFromSectionRow(E, 0)) || void 0 === s ? void 0 : s.channel;
      if (null != t) return t.id
    } return null
}

function h(e, t) {
  let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  (0, L.bulkClearRecents)(e, t), (0, A.bulkAck)(t.map(e => ({
    channelId: e,
    readStateType: U.ReadStateTypes.CHANNEL,
    messageId: g.default.lastMessageId(e)
  }))), null != s && (0, d.transitionTo)(c.Routes.CHANNEL(e, s))
}

function p(e, t, s, E) {
  let _ = (0, I.useIsDismissibleContentDismissed)(u.DismissibleContent.CHANNEL_BROWSER_NUX),
    a = (0, i.useStateFromStoresObject)([N.default], () => {
      let t = {},
        s = N.default.getMutableGuildChannelsForGuild(e);
      for (let e in s) {
        let {
          parent_id: _
        } = s[e];
        if (null != _) {
          var E;
          t[_] = (null !== (E = t[_]) && void 0 !== E ? E : 0) + 1
        }
      }
      return t
    }, [e]),
    n = t._categories.map(e => {
      let E = t[e.channel.id];
      return {
        rowCount: "null" !== e.channel.id && 0 === a[e.channel.id] ? 1 : E.length,
        rowHeight: 0 === E.length ? 0 : s
      }
    });
  return !_ && null != E && n.unshift({
    rowCount: 1,
    rowHeight: E
  }), n
}

function m(e) {
  var t, s;
  let E = (0, i.useStateFromStores)([S.default], () => S.default.getCategories(e)),
    _ = E._categories.length,
    a = E._categories[E._categories.length - 1];
  if (null == a) return 0;
  let n = E[null !== (s = null === (t = a.channel) || void 0 === t ? void 0 : t.id) && void 0 !== s ? s : "null"];
  return null == n ? 0 : 0 === n.length ? a.index + 2 - _ : n[n.length - 1].index + 2 - _
}

function P(e) {
  var t;
  return C.default.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({
    timeAgo: T()(D.default.extractTimestamp(null !== (t = g.default.lastMessageId(e)) && void 0 !== t ? t : e)).fromNow()
  })
}