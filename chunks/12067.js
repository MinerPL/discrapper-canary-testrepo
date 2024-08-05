t.d(n, {
  Z: function() {
return v;
  }
});
var l = t(735250);
t(470079);
var r = t(442837),
  i = t(169525),
  a = t(611170),
  o = t(128854),
  s = t(884182),
  c = t(546432),
  u = t(592125),
  d = t(52824),
  m = t(592256),
  f = t(823379),
  _ = t(970184),
  p = t(981631);

function v(e) {
  let {
message: n
  } = (0, _.CJ)(), t = (0, r.e7)([u.Z], () => u.Z.getChannel(null == n ? void 0 : n.channel_id)), {
shouldHideMediaOptions: v,
shouldRedactExplicitContent: C,
gifAutoPlay: h,
getGifFavButton: x,
getOnMediaItemContextMenu: I
  } = (0, o.c)();
  if (null == n || null == t)
return null;
  let E = e.items.map(e => (0, m.j0)(e.media, p.VqG, v, C)).filter(f.lm),
T = {
  source: 'Media Mosaic',
  guild_id: t.guild_id,
  channel_id: t.id,
  channel_type: t.type
},
N = E.length > 1 ? (0, m.Cx)(E, T) : {};

  function g(e, n) {
let t = e.originalItem;
return (0, i.lK)(t.media, n, t.spoiler);
  }
  let S = e.items.map(e => {
let t = e.media,
  l = null == I ? void 0 : I(t),
  r = {
    message: n,
    item: {
      uniqueId: t.proxyUrl,
      originalItem: e,
      type: (0, c.pU)(t, !0),
      downloadUrl: t.url,
      height: t.height,
      width: t.width,
      spoiler: e.spoiler,
      contentType: t.contentType
    },
    onContextMenu: l,
    autoPlayGif: h,
    getObscureReason: g,
    renderImageComponent: a.a,
    renderVideoComponent: a.r,
    renderAudioComponent: p.dG4,
    renderPlaintextFilePreview: p.dG4,
    renderGenericFileComponent: p.dG4,
    renderMosaicItemFooter: p.dG4,
    gifFavoriteButton: x(t),
    onPlay: (e, n, t) => {},
    canRemoveItem: !1,
    onRemoveItem: p.dG4
  },
  i = (0, d.q)({
    proxyURL: t.proxyUrl,
    url: t.url
  });
return i in N && (r.onClick = N[i]), r;
  });
  return (0, l.jsx)('div', {
children: (0, l.jsx)(s.Z, {
  items: S
})
  });
}