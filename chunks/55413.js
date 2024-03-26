"use strict";
n.r(t), n.d(t, {
  useWatchContentData: function() {
    return h
  },
  default: function() {
    return m
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("442939"),
  r = n("697218"),
  u = n("550368"),
  o = n("816260"),
  d = n("911589"),
  c = n("954016"),
  f = n("782340");
let h = e => {
  let t = (0, i.useGetOrFetchApplication)(e.extra.application_id),
    n = null == t ? void 0 : t.getIconURL(128),
    a = (0, s.useStateFromStores)([r.default], () => r.default.getUser(e.author_id)),
    l = (0, u.getAssetImage)(e.extra.application_id, e.extra.media_assets_large_image, [c.ImageSizes.LARGE, c.ImageSizes.LARGE]);
  return {
    user: a,
    mediaImageSrc: null != l ? l : n
  }
};
var m = l.memo(e => {
  var t;
  let {
    entry: n,
    channel: l,
    selected: s
  } = e, {
    mediaImageSrc: i
  } = h(n);
  return (0, a.jsxs)(o.Card, {
    selected: s,
    children: [(0, a.jsxs)(o.CardInfoSection, {
      children: [(0, a.jsx)(o.CardUser, {
        userId: n.author_id,
        channelId: l.id,
        guildId: l.guild_id
      }), (0, a.jsx)(o.CardTitle, {
        children: f.default.Messages.MEMBER_LIST_CONTENT_FEED_WATCHED_MEDIA.format({
          mediaTitle: n.extra.media_title
        })
      }), (0, a.jsx)(o.CardSubtitle, {
        children: null !== (t = n.extra.media_assets_large_text) && void 0 !== t ? t : n.extra.media_subtitle
      })]
    }), (0, a.jsx)(d.ContentImage, {
      src: i,
      size: 48,
      alt: n.extra.media_title
    })]
  })
})