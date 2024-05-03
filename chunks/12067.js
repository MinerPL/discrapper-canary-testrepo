"use strict";
t.r(n), t.d(n, {
  default: function() {
    return S
  }
});
var l = t("735250");
t("470079");
var a = t("442837"),
  r = t("169525"),
  u = t("611170"),
  s = t("128854"),
  o = t("592125"),
  i = t("52824"),
  d = t("310043"),
  c = t("69750"),
  m = t("592256"),
  p = t("823379"),
  f = t("970184"),
  C = t("981631");

function S(e) {
  let {
    message: n
  } = (0, f.useComponentStateContext)(), t = (0, a.useStateFromStores)([o.default], () => o.default.getChannel(null == n ? void 0 : n.channel_id)), {
    shouldHideMediaOptions: S,
    shouldRedactExplicitContent: E,
    gifAutoPlay: v,
    getGifFavButton: N,
    getOnMediaItemContextMenu: h
  } = (0, s.useMessageAccessoriesComponentContext)();
  if (null == n || null == t) return null;
  let T = e.items.map(e => (0, m.carouselAssetFromMediaItem)(e.media, S, E)).filter(p.isNotNullish),
    g = {
      source: "Media Mosaic",
      guild_id: t.guild_id,
      channel_id: t.id,
      channel_type: t.type
    },
    x = T.length > 1 ? (0, m.createMediaOnClickOverrides)(T, g) : {};

  function y(e, n) {
    let t = e.originalItem;
    return (0, r.getObscureReasonForUnfurledMediaItem)(t.media, n, t.spoiler)
  }
  let O = e.items.map(e => {
    let t = e.media,
      l = null == h ? void 0 : h(t),
      a = {
        message: n,
        item: {
          uniqueId: t.proxyUrl,
          originalItem: e,
          type: (0, c.getMosaicMediaTypeForUnfurledMediaItem)(t, !0),
          downloadUrl: t.url,
          height: t.height,
          width: t.width,
          spoiler: e.spoiler,
          contentType: t.contentType
        },
        onContextMenu: l,
        autoPlayGif: v,
        getObscureReason: y,
        renderImageComponent: u.renderImageComponentForGalleryItem,
        renderVideoComponent: u.renderVideoComponentForGalleryItem,
        renderAudioComponent: C.NOOP,
        renderPlaintextFilePreview: C.NOOP,
        renderGenericFileComponent: C.NOOP,
        renderMosaicItemFooter: C.NOOP,
        gifFavoriteButton: N(t),
        onPlay: (e, n, t) => {},
        canRemoveItem: !1,
        onRemoveItem: C.NOOP
      },
      r = (0, i.getBestEffortSrcUrl)({
        proxyURL: t.proxyUrl,
        url: t.url
      });
    return r in x && (a.onClick = x[r]), a
  });
  return (0, l.jsx)("div", {
    children: (0, l.jsx)(d.default, {
      items: O
    })
  })
}