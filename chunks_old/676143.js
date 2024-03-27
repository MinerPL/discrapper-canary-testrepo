"use strict";
n.r(t), n.d(t, {
  useFilterCategoriesByQuery: function() {
    return S
  },
  getFirstRouteFor: function() {
    return x
  },
  clearRecentChannels: function() {
    return M
  },
  useChannelBrowserSections: function() {
    return R
  },
  useChannelBrowserChannelCount: function() {
    return A
  },
  getActiveAgoTimestamp: function() {
    return U
  }
}), n("843762");
var l = n("884691"),
  s = n("448105"),
  a = n.n(s),
  i = n("866227"),
  r = n.n(i),
  o = n("446674"),
  u = n("151426"),
  c = n("267363"),
  d = n("320954"),
  h = n("10641"),
  f = n("290886"),
  p = n("319839"),
  g = n("194704"),
  v = n("393414"),
  m = n("42203"),
  C = n("245997"),
  D = n("660478"),
  E = n("299039"),
  N = n("49111"),
  T = n("724210"),
  _ = n("796618"),
  I = n("133335"),
  L = n("782340");

function O(e, t) {
  e.index = t
}

function S(e, t, n, s) {
  s = s.toLowerCase();
  let i = (0, f.useCanSeeOnboardingHome)(e),
    r = l.useCallback((e, t) => !(i && e.channel.hasFlag(T.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== N.ChannelTypes.GUILD_DIRECTORY && (0 === t.length || a(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [i]);
  return l.useMemo(() => {
    let e = {
      null: [],
      _categories: []
    };
    return n[N.ChannelTypes.GUILD_CATEGORY].forEach(n => {
      let {
        channel: l
      } = n;
      "null" === l.id && (e.null = t.null.filter(e => r(e, s))), e[l.id] = t[l.id].filter(e => r(e, s))
    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === s.length || e[t.channel.id].length > 0), (0, d.default)(e._categories, e).forEach(O), e
  }, [t, n, r, s])
}

function x(e) {
  let t = e.getSections();
  if (t[p.SECTION_INDEX_COMMUNITY] > 0) {
    let t = e.getCommunitySection().getRow(0);
    switch (t) {
      case _.ChannelListCommunityRow.GUILD_HOME:
        return T.StaticChannelRoute.GUILD_HOME;
      case _.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
        return T.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
      case _.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
        return T.StaticChannelRoute.MEMBER_APPLICATIONS
    }
  }
  for (let l = p.SECTION_INDEX_UNCATEGORIZED_CHANNELS; l < e.voiceChannelsSectionNumber; l++)
    if (t[l] > 0) {
      var n;
      let t = null === (n = e.getChannelFromSectionRow(l, 0)) || void 0 === n ? void 0 : n.channel;
      if (null != t) return t.id
    } return null
}

function M(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  (0, g.bulkClearRecents)(e, t), (0, c.bulkAck)(t.map(e => ({
    channelId: e,
    readStateType: I.ReadStateTypes.CHANNEL,
    messageId: D.default.lastMessageId(e)
  }))), null != n && (0, v.transitionTo)(N.Routes.CHANNEL(e, n))
}

function R(e, t, n, l) {
  let s = (0, h.useIsDismissibleContentDismissed)(u.DismissibleContent.CHANNEL_BROWSER_NUX),
    a = (0, o.useStateFromStoresObject)([m.default], () => {
      let t = {},
        n = m.default.getMutableGuildChannelsForGuild(e);
      for (let e in n) {
        let {
          parent_id: s
        } = n[e];
        if (null != s) {
          var l;
          t[s] = (null !== (l = t[s]) && void 0 !== l ? l : 0) + 1
        }
      }
      return t
    }, [e]),
    i = t._categories.map(e => {
      let l = t[e.channel.id];
      return {
        rowCount: "null" !== e.channel.id && 0 === a[e.channel.id] ? 1 : l.length,
        rowHeight: 0 === l.length ? 0 : n
      }
    });
  return !s && null != l && i.unshift({
    rowCount: 1,
    rowHeight: l
  }), i
}

function A(e) {
  var t, n;
  let l = (0, o.useStateFromStores)([C.default], () => C.default.getCategories(e)),
    s = l._categories.length,
    a = l._categories[l._categories.length - 1];
  if (null == a) return 0;
  let i = null !== (n = null === (t = a.channel) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "null",
    r = l[i];
  return null == r ? 0 : 0 === r.length ? a.index + 2 - s : r[r.length - 1].index + 2 - s
}

function U(e) {
  var t;
  return L.default.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({
    timeAgo: r(E.default.extractTimestamp(null !== (t = D.default.lastMessageId(e)) && void 0 !== t ? t : e)).fromNow()
  })
}