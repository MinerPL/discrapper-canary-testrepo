"use strict";
n.r(t), n.d(t, {
  WATCH_BADGES: function() {
    return p
  },
  useWatchContentData: function() {
    return E
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("835473"),
  r = n("594174"),
  o = n("81063"),
  u = n("297781"),
  d = n("443487"),
  c = n("43205"),
  f = n("701488"),
  h = n("689938"),
  m = n("288564");
let p = [u.WatchTimestampBadge, u.EpisodeBadge],
  E = e => {
    var t;
    let n = (0, i.useGetOrFetchApplication)(e.extra.application_id),
      a = null == n ? void 0 : n.getIconURL(128),
      l = (0, s.useStateFromStores)([r.default], () => r.default.getUser(e.author_id)),
      u = (0, o.getAssetImage)(e.extra.application_id, e.extra.media_assets_large_image, [f.ImageSizes.LARGE, f.ImageSizes.LARGE]),
      d = /\w+ (\d+), \w+ (\d+)/.exec(null !== (t = e.extra.media_assets_large_text) && void 0 !== t ? t : "");
    return {
      user: l,
      mediaImageSrc: null != u ? u : a,
      episodeDescription: null != d ? h.default.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
        seasonNum: d[1],
        episodeNum: d[2]
      }) : null
    }
  };
t.default = l.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: l
  } = e, {
    mediaImageSrc: s
  } = E(t);
  return (0, a.jsxs)(d.Card, {
    selected: l,
    children: [(0, a.jsxs)(d.CardInfoSection, {
      children: [(0, a.jsx)(d.CardParticipants, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(d.CardTitle, {
        children: h.default.Messages.MEMBER_LIST_CONTENT_FEED_WATCHED_MEDIA.format({
          mediaTitle: t.extra.media_title
        })
      }), (0, a.jsx)(u.BadgesContainer, {
        location: u.BadgeLocation.CARD,
        children: p.map((e, n) => (0, a.jsx)(e, {
          entry: t
        }, n))
      })]
    }), (0, a.jsx)(c.ContentImage, {
      src: s,
      size: 48,
      className: m.thumbnail,
      alt: t.extra.media_title
    })]
  })
})