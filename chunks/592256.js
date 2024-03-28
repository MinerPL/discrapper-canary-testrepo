"use strict";
l.r(t), l.d(t, {
  carouselAssetFromAttachment: function() {
    return b
  },
  carouselAssetFromImageEmbed: function() {
    return f
  },
  createMediaOnClickOverrides: function() {
    return x
  }
}), l("47120");
var n = l("735250");
l("470079");
var r = l("374470"),
  i = l("481060"),
  s = l("794295"),
  a = l("163268"),
  o = l("254109"),
  d = l("118139"),
  u = l("926836"),
  c = l("52824"),
  m = l("626135"),
  h = l("591759"),
  p = l("981631"),
  g = l("640092");

function f(e) {
  let {
    width: t,
    height: l
  } = e, r = (0, c.getBestEffortSrcUrl)(e);
  return {
    component: (0, n.jsx)(u.ImageModal, {
      width: t,
      height: l,
      original: e.url,
      renderLinkComponent: e => (0, n.jsx)(s.default, {
        ...e
      }),
      src: r
    }),
    width: t,
    height: l,
    src: r
  }
}

function b(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if ((0, d.isImageFile)(e.filename)) {
        var r, i;
        let o = null !== (r = e.width) && void 0 !== r ? r : 0,
          d = null !== (i = e.height) && void 0 !== i ? i : 0,
          m = (0, c.getBestEffortSrcUrl)({
            proxyURL: e.proxy_url,
            url: e.url
          });
        return {
          component: (0, n.jsx)(u.ImageModal, {
            width: o,
            height: d,
            original: e.url,
            renderLinkComponent: e => (0, n.jsx)(s.default, {
              ...e
            }),
            src: m,
            shouldHideMediaOptions: t,
            obscure: (0, a.isMediaObscured)({
              type: a.ObscuredMediaTypes.Attachment,
              media: e
            }, l)
          }),
          width: o,
          height: d,
          src: m
        }
      }
      return null
    }(e, t, l);
  if (null != r) return r;
  let i = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if ((0, d.isVideoFile)(e.filename)) {
      var r, i;
      let o = null !== (r = e.width) && void 0 !== r ? r : 0,
        d = null !== (i = e.height) && void 0 !== i ? i : 0,
        m = (0, c.getBestEffortSrcUrl)({
          proxyURL: e.proxy_url,
          url: e.url
        }),
        p = h.default.toURLSafe(e.proxy_url);
      return null == p ? null : (p.searchParams.append("format", "jpeg"), {
        component: (0, n.jsx)(u.VideoModal, {
          width: o,
          height: d,
          poster: p.toString(),
          naturalWidth: o,
          naturalHeight: d,
          renderLinkComponent: e => (0, n.jsx)(s.default, {
            ...e
          }),
          src: m,
          fileSize: e.size,
          fileName: e.filename,
          shouldHideMediaOptions: t,
          obscure: (0, a.isMediaObscured)({
            type: a.ObscuredMediaTypes.Attachment,
            media: e
          }, l)
        }),
        width: o,
        height: d,
        src: m
      })
    }
    return null
  }(e, t, l);
  return null != i ? i : null
}

function x(e, t) {
  let s = {};
  for (let [a, d] of e.entries()) s[d.src] = s => (function(e, t, s, a) {
    e.preventDefault(), (0, r.isElement)(e.currentTarget) && e.currentTarget.blur(), null != a && (m.default.track(p.AnalyticEvents.OPEN_MODAL, {
      type: p.AnalyticsSections.MEDIA_VIEWER,
      ...a
    }, {
      throttlePercent: .01
    }), (0, o.startMediaViewerSession)(a.guild_id, a.channel_id, a.channel_type, t.length)), (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([l.e("49237"), l.e("99387"), l.e("99857")]).then(l.bind(l, "895023"));
      return l => {
        let {
          ...r
        } = l;
        return (0, n.jsx)(e, {
          ...r,
          onIndexChange: null != a ? o.incrementSelectedItemChanges : void 0,
          className: g.zoomedCarouselModalRoot,
          items: t,
          modalCarouselClassName: g.modalCarouselWrapper,
          startingIndex: s
        })
      }
    }, {
      onCloseCallback: null != a ? o.endMediaViewerSession : void 0
    })
  })(s, e, a, t);
  return s
}