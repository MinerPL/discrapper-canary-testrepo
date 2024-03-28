"use strict";
n.r(t), n.d(t, {
  useMediaPostEmbedData: function() {
    return p
  }
});
var s = n("470079"),
  a = n("399606"),
  l = n("430198"),
  i = n("754688"),
  r = n("314897"),
  o = n("592125"),
  u = n("271383"),
  d = n("430824"),
  c = n("914010"),
  f = n("594174"),
  E = n("158222"),
  _ = n("312146"),
  T = n("410473"),
  m = n("874748"),
  I = n("981631");

function p(e, t) {
  let n = (0, _.useEligibleForGuildMediaChannelPostPreviewEmbed)(),
    p = (0, m.getMediaPostEmbedChannelPath)(e),
    h = (0, a.useStateFromStores)([u.default, r.default], () => {
      let e = r.default.getId();
      return u.default.isMember(null == p ? void 0 : p.guildId, e)
    }, [p]),
    N = (0, a.useStateFromStores)([l.default], () => null != p && (null == p ? void 0 : p.channelId) != null && l.default.isChannelGated(p.guildId, p.channelId), [p]),
    S = t.hasFlag(I.MessageFlags.IS_CROSSPOST),
    {
      rawMediaPostEmbedData: C,
      guild: A,
      parentChannel: g,
      user: M,
      selectedGuildId: R,
      canAccess: O
    } = (0, a.useStateFromStoresObject)([T.default, d.default, o.default, f.default, c.default], () => {
      var e;
      let t = null === (e = T.default.getMediaPostEmbed(null == p ? void 0 : p.threadId)) || void 0 === e ? void 0 : e.media,
        n = d.default.getGuild(null == p ? void 0 : p.guildId),
        s = o.default.getChannel(null == p ? void 0 : p.channelId),
        a = f.default.getUser(null == t ? void 0 : t.author_id),
        l = c.default.getGuildId(),
        r = null != s && (0, i.canViewChannel)(s);
      return {
        rawMediaPostEmbedData: t,
        guild: n,
        parentChannel: s,
        user: a,
        selectedGuildId: l,
        canAccess: r
      }
    }, [p]),
    v = s.useMemo(() => {
      let e = (0, m.getMediaPostEmbedCommonData)({
        mediaPostEmbedData: C,
        guild: A,
        parentChannel: g,
        user: M,
        selectedGuildId: R,
        canAccess: O
      });
      return null == e ? null : {
        ...e,
        user: M
      }
    }, [C, A, g, M, R, O]);
  return s.useEffect(() => {
    if ((null == p ? void 0 : p.threadId) != null) {
      let e = T.default.getEmbedFetchState(p.threadId);
      !0 === n && e === T.FetchState.NOT_FETCHED && (!h || !1 !== N) && (h || !S) && (0, E.fetchMediaPostEmbed)(null == p ? void 0 : p.threadId)
    }
  }, [p, n, h, N, S]), v
}