"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("881410"), s("222007"), s("424973"), s("511434"), s("313619"), s("654714"), s("287168"), s("956660");
var a = s("884691"),
  n = s("65597"),
  l = s("850391"),
  r = s("585722"),
  i = s("856220"),
  o = s("891475");

function u(e, t) {
  var s, u;
  let {
    mediaAttachments: d,
    hasThumbnail: c
  } = function(e) {
    let [t, s] = a.useState(null), o = (0, n.useStateFromStoresArray)([r.default], () => {
      let t = r.default.getUploads(e.id, l.ChatInputTypes.CREATE_FORUM_POST.drafts.type),
        s = t.find(e => e.isThumbnail);
      return null != s ? [s] : t.filter(e => e.isVideo || e.isImage)
    }), u = a.useMemo(() => o.some(e => e.isThumbnail), [o]);
    return a.useEffect(() => {
      let e = [],
        t = o.slice(0, i.MAX_THUMBNAIL_COUNT).flatMap(t => {
          var s;
          let a = null == t ? void 0 : null === (s = t.item) || void 0 === s ? void 0 : s.file;
          if (null == a) return [];
          let n = URL.createObjectURL(a);
          return e.push(n), {
            id: t.id,
            src: n,
            spoiler: t.spoiler,
            alt: t.description,
            isThumbnail: t.isThumbnail,
            upload: !0 === t.isThumbnail ? t : void 0,
            isVideo: t.isVideo
          }
        });
      return s(t), () => {
        s(null), e.forEach(e => URL.revokeObjectURL(e))
      }
    }, [o]), {
      mediaAttachments: t,
      hasThumbnail: u
    }
  }(e), m = Math.max(i.MAX_THUMBNAIL_COUNT - (null !== (s = null == d ? void 0 : d.length) && void 0 !== s ? s : 0), 0), {
    embeds: h
  } = (0, o.useExtractEmbedPreview)(c, m, t), f = a.useMemo(() => null == h ? void 0 : h.flatMap(e => {
    let t = (0, i.getEmbedPreviewImageUrl)(e);
    return null == t ? [] : {
      id: t,
      src: t,
      spoiler: !1,
      alt: e.title
    }
  }), [h]), g = [...null != d ? d : []];
  return !c && m > 0 && g.push(...null !== (u = null == f ? void 0 : f.slice(0, m)) && void 0 !== u ? u : []), g
}