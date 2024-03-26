"use strict";
n.r(t), n.d(t, {
  useMediaPostEmbedData: function() {
    return N
  }
});
var s = n("884691"),
  a = n("65597"),
  l = n("203288"),
  i = n("361572"),
  r = n("271938"),
  o = n("42203"),
  u = n("26989"),
  d = n("305961"),
  c = n("162771"),
  E = n("697218"),
  f = n("639440"),
  _ = n("690563"),
  T = n("921387"),
  I = n("711326"),
  m = n("49111");

function N(e, t) {
  let n = (0, _.useEligibleForGuildMediaChannelPostPreviewEmbed)(),
    N = (0, I.getMediaPostEmbedChannelPath)(e),
    p = (0, a.useStateFromStores)([u.default, r.default], () => {
      let e = r.default.getId();
      return u.default.isMember(null == N ? void 0 : N.guildId, e)
    }, [N]),
    S = (0, a.useStateFromStores)([l.default], () => null != N && (null == N ? void 0 : N.channelId) != null && l.default.isChannelGated(N.guildId, N.channelId), [N]),
    A = t.hasFlag(m.MessageFlags.IS_CROSSPOST),
    {
      rawMediaPostEmbedData: C,
      guild: h,
      parentChannel: g,
      user: M,
      selectedGuildId: O,
      canAccess: R
    } = (0, a.useStateFromStoresObject)([T.default, d.default, o.default, E.default, c.default], () => {
      var e;
      let t = null === (e = T.default.getMediaPostEmbed(null == N ? void 0 : N.threadId)) || void 0 === e ? void 0 : e.media,
        n = d.default.getGuild(null == N ? void 0 : N.guildId),
        s = o.default.getChannel(null == N ? void 0 : N.channelId),
        a = E.default.getUser(null == t ? void 0 : t.author_id),
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
    }, [N]),
    L = s.useMemo(() => {
      let e = (0, I.getMediaPostEmbedCommonData)({
        mediaPostEmbedData: C,
        guild: h,
        parentChannel: g,
        user: M,
        selectedGuildId: O,
        canAccess: R
      });
      return null == e ? null : {
        ...e,
        user: M
      }
    }, [C, h, g, M, O, R]);
  return s.useEffect(() => {
    if ((null == N ? void 0 : N.threadId) != null) {
      let e = T.default.getEmbedFetchState(N.threadId);
      !0 === n && e === T.FetchState.NOT_FETCHED && (!p || !1 !== S) && (p || !A) && (0, f.fetchMediaPostEmbed)(null == N ? void 0 : N.threadId)
    }
  }, [N, n, p, S, A]), L
}