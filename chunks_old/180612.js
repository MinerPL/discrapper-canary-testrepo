"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007"), n("70102");
var s = n("37983"),
  a = n("884691"),
  i = n("414456"),
  r = n.n(i),
  l = n("77078"),
  o = n("700468"),
  d = n("933629"),
  u = n("749344"),
  h = n("560176"),
  c = n("633667"),
  p = n("952368"),
  m = n("888673"),
  g = n("75576"),
  C = n("49111"),
  f = n("782340"),
  I = n("568174");
let x = e => {
    let {
      className: t,
      ...n
    } = e;
    return (0, s.jsx)(m.default, {
      ...n,
      className: r(I.sizedToParent, t),
      mediaPlayerClassName: I.sizedToParent,
      renderLinkComponent: d.renderMaskedLinkComponent
    })
  },
  E = e => {
    let {
      containerClassName: t,
      className: n,
      ...a
    } = e;
    return (0, s.jsx)(p.default, {
      ...a,
      className: r(n, t)
    })
  },
  v = {
    width: 1280,
    height: 720
  },
  N = {
    width: 640,
    height: 360
  },
  L = e => {
    let t, n, a, {
      item: i,
      onPlay: r,
      volume: l,
      onVolumeChange: u,
      onMute: p,
      isMuted: m,
      autoPlay: f
    } = e;
    if (i.type === C.CarouselMediaTypes.YOUTUBE_VIDEO) t = {
      url: (0, C.YOUTUBE_PREVIEW_URL)(i.youtubeVideoId),
      ...v
    }, n = {
      url: "".concat((0, C.YOUTUBE_EMBED_URL)(i.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
      ...N
    }, a = c.SupportedEmbedIFrame.YOUTUBE;
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
    return (0, s.jsx)("div", {
      className: I.embedContainer,
      children: (0, s.jsx)(h.EmbedVideo, {
        className: I.sizedToParent,
        iframeWrapperClassName: I.sizedToParent,
        href: null,
        thumbnail: t,
        video: n,
        provider: a,
        maxHeight: o.ItemSizes.SMALL.height,
        maxWidth: g.PageSizes.SMALL,
        onPlay: r,
        playable: !0,
        volume: l,
        onVolumeChange: u,
        autoMute: m,
        onMute: p,
        autoPlay: f,
        renderImageComponent: E,
        renderVideoComponent: x,
        renderLinkComponent: d.renderMaskedLinkComponent
      })
    })
  };
class S extends a.PureComponent {
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
      paused: a,
      themedPagination: i
    } = this.props, {
      hasInteracted: l
    } = this.state;
    return (0, s.jsx)(u.default, {
      items: e.slice(0, 12),
      delay: t,
      paused: a || l,
      renderItem: this.renderItem,
      className: r(I.smallCarousel, n),
      themedPagination: i,
      onIntentionalChange: this.handleIntentionalChange,
      onChangeItem: this.handleChangeItem
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      hasInteracted: !1,
      isVideoPlaying: !1,
      isMuted: !0,
      volume: 1,
      status: new Map,
      imageLoadingStartTime: new Map
    }, this.handlePlay = e => {
      this.setState({
        isVideoPlaying: !0,
        hasInteracted: !e
      })
    }, this.handleVolumeChange = e => {
      this.setState({
        volume: e,
        hasInteracted: !0
      })
    }, this.handleMute = e => {
      this.setState({
        isMuted: e,
        hasInteracted: !0
      })
    }, this.handleChangeItem = e => {
      this.setState({
        isVideoPlaying: !1
      }), e.type === C.CarouselMediaTypes.IMG && this.setState({
        imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now())
      })
    }, this.handleIntentionalChange = (e, t, n, s) => {
      this.setState({
        hasInteracted: !0
      });
      let {
        onIntentionalChange: a
      } = this.props;
      null != a && a(e, t, n, s)
    }, this.handleOnErrorImg = e => {
      this.setState({
        status: new Map(this.state.status).set(e.target.src, "errored")
      })
    }, this.handleOnLoadImg = e => {
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
    }, this.renderItem = (e, t) => {
      let n;
      let {
        isMuted: a,
        volume: i
      } = this.state, {
        videoAutoPlay: o
      } = this.props;
      switch (e.type) {
        case C.CarouselMediaTypes.YOUTUBE_VIDEO:
        case C.CarouselMediaTypes.VIDEO:
          n = (0, s.jsx)(L, {
            item: e,
            onPlay: this.handlePlay,
            isMuted: a,
            volume: i,
            onVolumeChange: this.handleVolumeChange,
            onMute: this.handleMute,
            autoPlay: o
          });
          break;
        case C.CarouselMediaTypes.IMG:
          if ("errored" === this.state.status.get(e.src)) {
            let e = (0, s.jsx)(l.Heading, {
              variant: "heading-xl/semibold",
              children: f.default.Messages.ERRORS_IMAGE_NOT_FOUND
            });
            return (0, s.jsx)("div", {
              className: I.errorContainer,
              children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e
            })
          } {
            var d;
            let t = null !== (d = e.alt) && void 0 !== d ? d : f.default.Messages.IMAGE;
            n = (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)(l.Spinner, {
                className: r(I.spinner, {
                  [I.hidden]: void 0 !== this.state.status.get(e.src)
                }),
                type: l.Spinner.Type.SPINNING_CIRCLE
              }), (0, s.jsx)("img", {
                onError: this.handleOnErrorImg,
                onLoad: this.handleOnLoadImg,
                className: r(I.smallCarouselImage, {
                  [I.hidden]: "loaded" !== this.state.status.get(e.src)
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
      return (0, s.jsx)(l.Clickable, {
        className: I.smallCarouselItem,
        onClick: () => this.handleCurrentItemClick(e, t),
        children: n
      })
    }
  }
}
S.defaultProps = {
  paused: !1,
  videoAutoPlay: !0
};
var A = S