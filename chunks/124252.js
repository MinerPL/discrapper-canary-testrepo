"use strict";
n.d(t, {
  Z: function() {
    return c
  }
}), n(390547), n(47120), n(653041), n(315314), n(610138), n(216116), n(78328), n(815648);
var s = n(470079),
  l = n(399606),
  a = n(541716),
  i = n(117530),
  r = n(154135),
  o = n(337077);

function c(e, t) {
  var n, c;
  let {
    mediaAttachments: d,
    hasThumbnail: u
  } = function(e) {
    let [t, n] = s.useState(null), o = (0, l.Wu)([i.Z], () => {
      let t = i.Z.getUploads(e.id, a.I.CREATE_FORUM_POST.drafts.type),
        n = t.find(e => e.isThumbnail);
      return null != n ? [n] : t.filter(e => e.isVideo || e.isImage)
    }), c = s.useMemo(() => o.some(e => e.isThumbnail), [o]);
    return s.useEffect(() => {
      let e = [];
      return n(o.slice(0, r.Yh).flatMap(t => {
        var n;
        let s = null == t ? void 0 : null === (n = t.item) || void 0 === n ? void 0 : n.file;
        if (null == s) return [];
        let l = URL.createObjectURL(s);
        return e.push(l), {
          id: t.id,
          src: l,
          spoiler: t.spoiler,
          alt: t.description,
          isThumbnail: t.isThumbnail,
          upload: !0 === t.isThumbnail ? t : void 0,
          isVideo: t.isVideo
        }
      })), () => {
        n(null), e.forEach(e => URL.revokeObjectURL(e))
      }
    }, [o]), {
      mediaAttachments: t,
      hasThumbnail: c
    }
  }(e), h = Math.max(r.Yh - (null !== (n = null == d ? void 0 : d.length) && void 0 !== n ? n : 0), 0), {
    embeds: m
  } = (0, o.M)(u, h, t), g = s.useMemo(() => null == m ? void 0 : m.flatMap(e => {
    let t = (0, r.Vh)(e);
    return null == t ? [] : {
      id: t,
      src: t,
      spoiler: !1,
      alt: e.title
    }
  }), [m]), x = [...null != d ? d : []];
  return !u && h > 0 && x.push(...null !== (c = null == g ? void 0 : g.slice(0, h)) && void 0 !== c ? c : []), x
}