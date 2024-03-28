"use strict";
n.r(t), n("47120"), n("411104");
var s, a = n("735250"),
  i = n("470079"),
  r = n("803997"),
  l = n.n(r),
  o = n("481060"),
  d = n("33122"),
  u = n("524444"),
  h = n("731081"),
  c = n("529815"),
  p = n("250496"),
  m = n("261922"),
  g = n("133910"),
  f = n("843445"),
  C = n("981631"),
  I = n("689938"),
  x = n("655044");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let v = e => {
    let {
      className: t,
      ...n
    } = e;
    return (0, a.jsx)(g.default, {
      ...n,
      className: l()(x.sizedToParent, t),
      mediaPlayerClassName: x.sizedToParent,
      renderLinkComponent: u.renderMaskedLinkComponent
    })
  },
  N = e => {
    let {
      containerClassName: t,
      className: n,
      ...s
    } = e;
    return (0, a.jsx)(m.default, {
      ...s,
      className: l()(n, t)
    })
  },
  b = {
    width: 1280,
    height: 720
  },
  L = {
    width: 640,
    height: 360
  },
  S = e => {
    let t, n, s, {
      item: i,
      onPlay: r,
      volume: l,
      onVolumeChange: o,
      onMute: h,
      isMuted: m,
      autoPlay: g
    } = e;
    if (i.type === C.CarouselMediaTypes.YOUTUBE_VIDEO) t = {
      url: (0, C.YOUTUBE_PREVIEW_URL)(i.youtubeVideoId),
      ...b
    }, n = {
      url: "".concat((0, C.YOUTUBE_EMBED_URL)(i.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
      ...L
    }, s = p.SupportedEmbedIFrame.YOUTUBE;
    else {
      let e = null != i.width ? i.width : 0,
        s = null != i.height ? i.height : 0;
      t = {
        url: i.thumbnailSrc,
        width: e,
        height: s
      }, n = {
        url: i.src,
        proxyURL: i.src,
        width: e,
        height: s
      }
    }
    return (0, a.jsx)("div", {
      className: x.embedContainer,
      children: (0, a.jsx)(c.EmbedVideo, {
        className: x.sizedToParent,
        iframeWrapperClassName: x.sizedToParent,
        href: null,
        thumbnail: t,
        video: n,
        provider: s,
        maxHeight: d.ItemSizes.SMALL.height,
        maxWidth: f.PageSizes.SMALL,
        onPlay: r,
        playable: !0,
        volume: l,
        onVolumeChange: o,
        autoMute: m,
        onMute: h,
        autoPlay: g,
        renderImageComponent: N,
        renderVideoComponent: v,
        renderLinkComponent: u.renderMaskedLinkComponent
      })
    })
  };
class P extends(s = i.PureComponent) {
  componentDidMount() {
    let {
      items: e
    } = this.props;
    e.length > 0 && e[0].type === C.CarouselMediaTypes.IMG && this.setState({
      imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now())
    })
  }
  handleCurrentItemClick(e, t) {
    let {
      onCurrentItemClick: n
    } = this.props;
    null != n && n(e, t), this.setState({
      hasInteracted: !0
    })
  }
  render() {
    let {
      items: e,
      autoplayInterval: t,
      className: n,
      paused: s,
      themedPagination: i
    } = this.props, {
      hasInteracted: r
    } = this.state;
    return (0, a.jsx)(h.default, {
      items: e.slice(0, 12),
      delay: t,
      paused: s || r,
      renderItem: this.renderItem,
      className: l()(x.smallCarousel, n),
      themedPagination: i,
      onIntentionalChange: this.handleIntentionalChange,
      onChangeItem: this.handleChangeItem
    })
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      hasInteracted: !1,
      isVideoPlaying: !1,
      isMuted: !0,
      volume: 1,
      status: new Map,
      imageLoadingStartTime: new Map
    }), E(this, "handlePlay", e => {
      this.setState({
        isVideoPlaying: !0,
        hasInteracted: !e
      })
    }), E(this, "handleVolumeChange", e => {
      this.setState({
        volume: e,
        hasInteracted: !0
      })
    }), E(this, "handleMute", e => {
      this.setState({
        isMuted: e,
        hasInteracted: !0
      })
    }), E(this, "handleChangeItem", e => {
      this.setState({
        isVideoPlaying: !1
      }), e.type === C.CarouselMediaTypes.IMG && this.setState({
        imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now())
      })
    }), E(this, "handleIntentionalChange", (e, t, n, s) => {
      this.setState({
        hasInteracted: !0
      });
      let {
        onIntentionalChange: a
      } = this.props;
      null != a && a(e, t, n, s)
    }), E(this, "handleOnErrorImg", e => {
      this.setState({
        status: new Map(this.state.status).set(e.target.src, "errored")
      })
    }), E(this, "handleOnLoadImg", e => {
      let {
        onImageLoad: t
      } = this.props;
      this.setState({
        status: new Map(this.state.status).set(e.target.src, "loaded")
      });
      let n = this.state.imageLoadingStartTime.get(e.target.src),
        s = null != n ? Date.now() - n : void 0;
      null == t || t({
        src: e.target.src,
        loadTimeMs: s
      })
    }), E(this, "renderItem", (e, t) => {
      let n;
      let {
        isMuted: s,
        volume: i
      } = this.state, {
        videoAutoPlay: r
      } = this.props;
      switch (e.type) {
        case C.CarouselMediaTypes.YOUTUBE_VIDEO:
        case C.CarouselMediaTypes.VIDEO:
          n = (0, a.jsx)(S, {
            item: e,
            onPlay: this.handlePlay,
            isMuted: s,
            volume: i,
            onVolumeChange: this.handleVolumeChange,
            onMute: this.handleMute,
            autoPlay: r
          });
          break;
        case C.CarouselMediaTypes.IMG:
          if ("errored" === this.state.status.get(e.src)) {
            let e = (0, a.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              children: I.default.Messages.ERRORS_IMAGE_NOT_FOUND
            });
            return (0, a.jsx)("div", {
              className: x.errorContainer,
              children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e
            })
          } {
            var d;
            let t = null !== (d = e.alt) && void 0 !== d ? d : I.default.Messages.IMAGE;
            n = (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(o.Spinner, {
                className: l()(x.spinner, {
                  [x.hidden]: void 0 !== this.state.status.get(e.src)
                }),
                type: o.Spinner.Type.SPINNING_CIRCLE
              }), (0, a.jsx)("img", {
                onError: this.handleOnErrorImg,
                onLoad: this.handleOnLoadImg,
                className: l()(x.smallCarouselImage, {
                  [x.hidden]: "loaded" !== this.state.status.get(e.src)
                }),
                src: e.src,
                alt: t
              })]
            })
          }
          break;
        default:
          throw Error("Unexpected MediaType")
      }
      return (0, a.jsx)(o.Clickable, {
        className: x.smallCarouselItem,
        onClick: () => this.handleCurrentItemClick(e, t),
        children: n
      })
    })
  }
}
E(P, "defaultProps", {
  paused: !1,
  videoAutoPlay: !0
}), t.default = P