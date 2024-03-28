"use strict";
n.r(t), n.d(t, {
  useWatchContentData: function() {
    return h
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("835473"),
  r = n("594174"),
  o = n("81063"),
  u = n("443487"),
  d = n("43205"),
  c = n("701488"),
  f = n("689938");
let h = e => {
  let t = (0, i.useGetOrFetchApplication)(e.extra.application_id),
    n = null == t ? void 0 : t.getIconURL(128),
    a = (0, s.useStateFromStores)([r.default], () => r.default.getUser(e.author_id)),
    l = (0, o.getAssetImage)(e.extra.application_id, e.extra.media_assets_large_image, [c.ImageSizes.LARGE, c.ImageSizes.LARGE]);
  return {
    user: a,
    mediaImageSrc: null != l ? l : n
  }
};
t.default = l.memo(e => {
  var t;
  let {
    entry: n,
    channel: l,
    selected: s
  } = e, {
    mediaImageSrc: i
  } = h(n);
  return (0, a.jsxs)(u.Card, {
    selected: s,
    children: [(0, a.jsxs)(u.CardInfoSection, {
      children: [(0, a.jsx)(u.CardUser, {
        userId: n.author_id,
        channelId: l.id,
        guildId: l.guild_id
      }), (0, a.jsx)(u.CardTitle, {
        children: f.default.Messages.MEMBER_LIST_CONTENT_FEED_WATCHED_MEDIA.format({
          mediaTitle: n.extra.media_title
        })
      }), (0, a.jsx)(u.CardSubtitle, {
        children: null !== (t = n.extra.media_assets_large_text) && void 0 !== t ? t : n.extra.media_subtitle
      })]
    }), (0, a.jsx)(d.ContentImage, {
      src: i,
      size: 48,
      alt: n.extra.media_title
    })]
  })
})