"use strict";
l.r(t), l.d(t, {
  carouselAssetFromAttachment: function() {
    return y
  },
  carouselAssetFromImageEmbed: function() {
    return b
  },
  carouselAssetFromMediaItem: function() {
    return x
  },
  createMediaOnClickOverrides: function() {
    return v
  }
}), l("47120");
var n = l("735250");
l("470079");
var r = l("374470"),
  s = l("481060"),
  i = l("794295"),
  a = l("163268"),
  o = l("768494"),
  d = l("254109"),
  u = l("118139"),
  c = l("926836"),
  h = l("52824"),
  m = l("626135"),
  p = l("591759"),
  g = l("981631"),
  f = l("545402");

function b(e) {
  let {
    width: t,
    height: l
  } = e, r = (0, h.getBestEffortSrcUrl)(e);
  return {
    component: (0, n.jsx)(c.ImageModal, {
      width: t,
      height: l,
      original: e.url,
      renderLinkComponent: e => (0, n.jsx)(i.default, {
        ...e
      }),
      src: r
    }),
    width: t,
    height: l,
    src: r
  }
}

function x(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if ((0, u.isImageContentType)(e.contentType)) {
        var r, s;
        let o = null !== (r = e.width) && void 0 !== r ? r : 0,
          d = null !== (s = e.height) && void 0 !== s ? s : 0,
          u = (0, h.getBestEffortSrcUrl)({
            proxyURL: e.proxyUrl,
            url: e.url
          });
        return {
          component: (0, n.jsx)(c.ImageModal, {
            width: o,
            height: d,
            original: e.url,
            renderLinkComponent: e => (0, n.jsx)(i.default, {
              ...e
            }),
            src: u,
            shouldHideMediaOptions: t,
            obscure: (0, a.isMediaObscured)({
              type: a.ObscuredMediaTypes.GenericMedia,
              media: e
            }, l)
          }),
          width: o,
          height: d,
          src: u
        }
      }
      return null
    }(e, t, l);
  if (null != r) return r;
  let s = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if ((0, u.isVideoContentType)(e.contentType)) {
      var r, s;
      let o = null !== (r = e.width) && void 0 !== r ? r : 0,
        d = null !== (s = e.height) && void 0 !== s ? s : 0,
        u = (0, h.getBestEffortSrcUrl)({
          proxyURL: e.proxyUrl,
          url: e.url
        }),
        m = p.default.toURLSafe(e.proxyUrl);
      return null == m ? null : (m.searchParams.append("format", "jpeg"), {
        component: (0, n.jsx)(c.VideoModal, {
          width: o,
          height: d,
          poster: m.toString(),
          naturalWidth: o,
          naturalHeight: d,
          renderLinkComponent: e => (0, n.jsx)(i.default, {
            ...e
          }),
          src: u,
          shouldHideMediaOptions: t,
          obscure: (0, a.isMediaObscured)({
            type: a.ObscuredMediaTypes.GenericMedia,
            media: e
          }, l)
        }),
        width: o,
        height: d,
        src: u
      })
    }
    return null
  }(e, t, l);
  return null != s ? s : null
}

function y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return x((0, o.messageAttachmentToUnfurledMediaItem)(e), t, l)
}

function v(e, t) {
  let i = {};
  for (let [a, o] of e.entries()) i[o.src] = i => (function(e, t, i, a) {
    e.preventDefault(), (0, r.isElement)(e.currentTarget) && e.currentTarget.blur(), null != a && (m.default.track(g.AnalyticEvents.OPEN_MODAL, {
      type: g.AnalyticsSections.MEDIA_VIEWER,
      ...a
    }, {
      throttlePercent: .01
    }), (0, d.startMediaViewerSession)(a.guild_id, a.channel_id, a.channel_type, t.length)), (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([l.e("49237"), l.e("99387"), l.e("99857")]).then(l.bind(l, "895023"));
      return l => {
        let {
          ...r
        } = l;
        return (0, n.jsx)(e, {
          ...r,
          onIndexChange: null != a ? d.incrementSelectedItemChanges : void 0,
          className: f.zoomedCarouselModalRoot,
          items: t,
          modalCarouselClassName: f.modalCarouselWrapper,
          startingIndex: i
        })
      }
    }, {
      onCloseCallback: null != a ? d.endMediaViewerSession : void 0
    })
  })(i, e, a, t);
  return i
}