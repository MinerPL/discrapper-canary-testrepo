"use strict";
n.r(t), n.d(t, {
  useFavoritesServerChannelList: function() {
    return g
  },
  computeFavoritesState: function() {
    return b
  }
}), n("222007"), n("424973");
var i = n("884691"),
  o = n("917351"),
  l = n.n(o),
  u = n("151426"),
  a = n("191225"),
  s = n("379881"),
  d = n("106682"),
  r = n("398604"),
  E = n("401690"),
  c = n("755624"),
  _ = n("233069"),
  A = n("870691"),
  C = n("42203"),
  T = n("816092"),
  I = n("546463"),
  S = n("957255"),
  f = n("660478"),
  N = n("18494"),
  O = n("282109"),
  R = n("449008"),
  L = n("319839"),
  p = n("695838"),
  D = n("843455");
let h = [a.default, s.default, r.default, E.default, c.default, A.default, C.default, I.default, S.default, f.default, N.default, O.default];

function g() {
  let [e, t] = i.useState(() => b());
  return i.useEffect(() => {
    let e = l.throttle(() => t(b()), 100);
    return h.forEach(t => t.addChangeListener(e)), () => h.forEach(t => t.removeChangeListener(e))
  }, []), e
}

function b() {
  let e = s.default.getFavoriteChannels(),
    t = O.default.isGuildCollapsed(p.FAVORITES_RAW_GUILD_ID),
    n = N.default.getChannelId(),
    i = C.default.getChannel(n),
    o = N.default.getVoiceChannelId(),
    a = [],
    r = {};
  for (let t in e) {
    let n = e[t],
      i = C.default.getChannel(n.id);
    if (null == i || n.type === u.FavoriteChannelType.CATEGORY) continue;
    let o = (0, d.createFavoritesChannelRecord)(e, n, i);
    if (null == n.parentId || !(n.parentId in e)) {
      a.push(o);
      continue
    }!(n.parentId in r) && (r[n.parentId] = []), r[n.parentId].push(o)
  }

  function c(n, u) {
    let {
      isCollapsed: a,
      isMuted: s
    } = u;
    return l(n).map(n => {
      var d;
      if (!n.isPrivate() && !S.default.can(D.Permissions.VIEW_CHANNEL, n)) return null;
      let r = null != i && (i.id === n.id || o === n.id),
        c = null != i && i.isThread() && i.parent_id === n.id,
        A = null !== (d = r || c || !a ? E.default.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : E.default.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) && void 0 !== d ? d : {},
        C = (0, L.computeThreadIds)(n, A, i, o, t),
        I = T.default.isCollapsed(n.id),
        N = O.default.isChannelMuted(n.guild_id, n.id),
        R = {
          id: n.id,
          record: n,
          category: u,
          position: e[n.id].order,
          threadIds: C,
          threadCount: l.size(C),
          isCollapsed: I,
          isMuted: N,
          isFirstVoiceChannel: !1,
          subtitle: (0, L.computeSubtitle)(n, I, !1)
        };
      return r || c || f.default.getMentionCount(n.id) > 0 ? R : t && N || a && (N || s || (0, _.isVoiceChannel)(n.type) || (0, _.isGuildReadableType)(n.type) && !1 === f.default.hasUnread(n.id)) ? null : R
    }).filter(R.isNotNullish).sortBy(e => {
      let {
        record: t
      } = e;
      return t.isGuildVocal() ? t.position + 1e4 : t.position
    }).value()
  }
  let I = null,
    h = {
      isMuted: !1,
      isCollapsed: !1,
      position: 0,
      getChannelRecords: () => a,
      getShownChannelIds: () => a.map(e => e.id),
      getShownChannelAndThreadIds: () => a.map(e => e.id),
      isEmpty: () => 0 === a.length,
      get channelList() {
        return null == I && (I = c(a, this)), I
      }
    },
    g = l(e).values().filter(e => e.type === u.FavoriteChannelType.CATEGORY).sortBy(e => e.order).map(e => {
      var t;
      let {
        id: n,
        order: i
      } = e, o = s.default.getCategoryRecord(n), l = null !== (t = r[n]) && void 0 !== t ? t : [], u = O.default.isChannelMuted(p.FAVORITES_RAW_GUILD_ID, n), a = A.default.isCollapsed(n), d = null;
      return {
        isMuted: u,
        isCollapsed: a,
        record: o,
        id: n,
        position: i,
        getChannelRecords: () => l,
        getShownChannelIds: () => l.map(e => e.id),
        getShownChannelAndThreadIds: () => l.map(e => e.id),
        isEmpty: () => 0 === l.length,
        get channelList() {
          return null == d && (d = c(l, this)), d
        }
      }
    }).value(),
    b = {
      isEmpty: () => !0,
      getRows: () => [],
      getRow: () => null
    },
    G = {
      id: p.FAVORITES_RAW_GUILD_ID,
      hideMutedChannels: t,
      favoritesSectionNumber: 1,
      recentsSectionNumber: 2,
      voiceChannelsSectionNumber: -999,
      getSections: () => [0, 0, 0, h.channelList.length, ...g.map(e => Math.max(1, e.channelList.length))],
      isPlaceholderRow(e, t) {
        if (e < L.SECTION_INDEX_FIRST_NAMED_CATEGORY || 0 !== t) return !1;
        let n = g[e - L.SECTION_INDEX_FIRST_NAMED_CATEGORY];
        return 0 === n.channelList.length
      },
      getCategoryFromSection: e => e === L.SECTION_INDEX_UNCATEGORIZED_CHANNELS ? h : g[e - L.SECTION_INDEX_FIRST_NAMED_CATEGORY],
      getNamedCategoryFromSection: e => g[e - L.SECTION_INDEX_FIRST_NAMED_CATEGORY],
      getChannelFromSectionRow(e, t) {
        let n = this.getCategoryFromSection(e);
        return null == n || null == n.channelList[t] ? null : {
          category: n,
          channel: n.channelList[t]
        }
      },
      getCommunitySection: () => b,
      getFirstVoiceChannel: () => null,
      getSectionRowsFromChannel(e) {
        let t = [h, ...g];
        for (let n = 0; n < t.length; n++)
          for (let i = 0; i < t[n].channelList.length; i++)
            if (t[n].channelList[i].id === e) return [{
              section: n + L.SECTION_INDEX_UNCATEGORIZED_CHANNELS,
              row: i
            }];
        return []
      },
      forEachShownChannel(e) {
        let t = [h, ...g];
        for (let n of t)
          for (let t of n.channelList)
            for (let n of (e(t.record), t.threadIds)) {
              let t = C.default.getChannel(n);
              null != t && e(t)
            }
      },
      forEachChannel(e) {
        let t = [h, ...g];
        for (let n of t)
          for (let t of n.getChannelRecords()) e(t)
      },
      getSlicedChannels: e => [
        [], e, []
      ],
      getChannels: () => []
    };
  return G
}