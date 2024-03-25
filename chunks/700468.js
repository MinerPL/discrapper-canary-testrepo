"use strict";
n.r(t), n.d(t, {
  ItemSizes: function() {
    return L
  },
  default: function() {
    return O
  }
});
var s = n("926607");
n("222007");
var a = n("37983"),
  i = n("884691"),
  r = n("414456"),
  l = n.n(r),
  o = n("458960"),
  d = n("77078"),
  u = n("737960"),
  h = n("933629"),
  c = n("87465"),
  p = n("963241"),
  m = n("560176"),
  g = n("633667"),
  C = n("265836"),
  f = n("952368"),
  I = n("468482"),
  x = n("659500"),
  E = n("49111"),
  v = n("958575");

function N() {
  let e = (0, s._)(["grayscale(", ")"]);
  return N = function() {
    return e
  }, e
}
let L = {
    SMALL: {
      width: 640,
      height: 360,
      margin: 15
    },
    MEDIUM: {
      width: 880,
      height: 495,
      margin: 20
    }
  },
  S = {
    width: 1920,
    height: 1080
  },
  A = {
    width: 1280,
    height: 720
  },
  y = e => (0, h.renderVideoComponent)({
    ...e,
    className: v.videoWrapper,
    mediaPlayerClassName: v.mediaPlayer
  }),
  P = e => (0, a.jsx)(f.default, {
    ...e
  }),
  M = e => {
    let t, n, s, {
      item: i,
      size: r,
      onPlay: l,
      onEnded: o,
      onClick: u,
      playable: c,
      volume: p,
      isMuted: C,
      onVolumeChange: f,
      onMute: I
    } = e;
    if (i.type === E.CarouselMediaTypes.YOUTUBE_VIDEO) t = {
      url: (0, E.YOUTUBE_PREVIEW_URL)(i.youtubeVideoId),
      ...S
    }, n = {
      url: "".concat((0, E.YOUTUBE_EMBED_URL)(i.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
      ...A
    }, s = g.SupportedEmbedIFrame.YOUTUBE;
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
    let x = (0, a.jsx)(m.EmbedVideo, {
      href: null,
      thumbnail: t,
      video: n,
      provider: s,
      allowFullScreen: !0,
      maxHeight: r.height,
      maxWidth: r.width,
      onPlay: l,
      onEnded: o,
      playable: c,
      className: v.video,
      volume: p,
      onVolumeChange: f,
      autoMute: C,
      onMute: I,
      autoPlay: c,
      renderVideoComponent: y,
      renderImageComponent: P,
      renderLinkComponent: h.renderMaskedLinkComponent
    });
    return c ? x : (0, a.jsx)(d.Clickable, {
      className: v.itemImageWrapper,
      onClick: u,
      children: x
    })
  },
  R = () => (0, a.jsx)("div", {
    className: v.paginationVideoOverlay,
    children: (0, a.jsx)(I.default, {
      inactive: !0,
      className: v.paginationVideoPlayPill,
      renderLinkComponent: h.renderMaskedLinkComponent
    })
  });
class T extends i.PureComponent {
  componentDidMount() {
    x.ComponentDispatch.subscribe(E.ComponentActions.CAROUSEL_PREV, this.manualPrevious), x.ComponentDispatch.subscribe(E.ComponentActions.CAROUSEL_NEXT, this.manualNext)
  }
  componentWillUnmount() {
    x.ComponentDispatch.unsubscribe(E.ComponentActions.CAROUSEL_PREV, this.manualPrevious), x.ComponentDispatch.unsubscribe(E.ComponentActions.CAROUSEL_NEXT, this.manualNext)
  }
  getStyle(e, t) {
    let n = t.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: o.default.Extrapolate.CLAMP
    });
    return {
      opacity: t.interpolate({
        inputRange: [0, 1],
        outputRange: [.3, 1],
        extrapolate: o.default.Extrapolate.CLAMP
      }),
      filter: o.default.template(N(), n)
    }
  }
  handleCurrentItemClick(e, t) {
    let {
      onCurrentItemClick: n
    } = this.props;
    null != n && n(e, t), this.setState({
      hasInteracted: !0
    })
  }
  handleEdgeItemMouseEnter(e) {
    let {
      currentIndex: t
    } = this.state;
    e < t ? this.setState({
      hoveringPreviousItem: !0
    }) : e > t && this.setState({
      hoveringNextItem: !0
    })
  }
  renderCarousel() {
    let {
      items: e
    } = this.props, {
      currentIndex: t,
      animate: n,
      hoveringPreviousItem: s,
      hoveringNextItem: i
    } = this.state, r = (0, a.jsx)(p.default, {
      items: e,
      itemSize: this.getItemSize(),
      renderItem: this.renderItem,
      currentIndex: t,
      animate: n,
      edgeItems: 2
    });
    return e.length <= 1 ? r : (0, a.jsxs)("div", {
      className: v.carouselButtonsContainer,
      children: [r, (0, a.jsx)(c.CarouselPrevious, {
        onClick: this.manualPrevious,
        className: l(v.arrow, {
          [v.arrowHovered]: s
        })
      }), (0, a.jsx)(c.CarouselNext, {
        onClick: this.manualNext,
        className: l(v.arrow, {
          [v.arrowHovered]: i
        })
      })]
    })
  }
  getPaginationSrc(e) {
    return e.type === E.CarouselMediaTypes.YOUTUBE_VIDEO ? (0, E.YOUTUBE_PREVIEW_URL)(e.youtubeVideoId) : e.type === E.CarouselMediaTypes.IMG ? e.src : e.type === E.CarouselMediaTypes.VIDEO ? e.thumbnailSrc : null
  }
  render() {
    let {
      items: e,
      className: t,
      autoplayInterval: n,
      paused: s
    } = this.props, {
      currentIndex: i,
      playingVideo: r,
      hasInteracted: l
    } = this.state;
    return (0, a.jsxs)(C.default, {
      pauseOnHover: !0,
      onInterval: this.autoNext,
      interval: n,
      className: t,
      disable: r || l || s,
      children: [this.renderCarousel(), (0, a.jsx)("div", {
        className: v.pagination,
        children: (0, a.jsx)(c.default, {
          renderItem: this.renderPaginationItem,
          scrollToPadding: 85,
          items: e,
          selectedIndex: i,
          onSetItem: e => this.setItem(e, !0),
          paginationContainerClass: v.scroller,
          align: e.length < 6 ? c.default.Align.LEFT : c.default.Align.CENTER
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      currentIndex: 0,
      animate: !0,
      playingVideo: !1,
      hasInteracted: !1,
      hoveringPreviousItem: !1,
      hoveringNextItem: !1,
      volume: 1,
      isMuted: !0
    }, this.getItemSize = () => {
      let {
        width: e
      } = this.props, t = L.MEDIUM;
      return null != e && e < t.width && (t = L.SMALL), t
    }, this.setItem = (e, t) => {
      let {
        props: {
          items: n,
          onIntentionalChange: s
        },
        state: {
          currentIndex: a
        }
      } = this, i = (0, p.normalizeIndex)(a, n.length), r = (0, p.normalizeIndex)(e, n.length), l = 1 === Math.abs(e - i) || e === n.length - 1 && 0 === i || 0 === e && i === n.length - 1;
      this.setState({
        playingVideo: !1,
        currentIndex: r,
        animate: l,
        hasInteracted: t
      }), t && null != s && s(n[r], i, r)
    }, this.autoNext = () => {
      this.setItem(this.state.currentIndex + 1, !1)
    }, this.manualNext = () => {
      this.setItem(this.state.currentIndex + 1, !0)
    }, this.manualPrevious = () => {
      this.setItem(this.state.currentIndex - 1, !0)
    }, this.handlePlay = e => this.setState({
      playingVideo: !0,
      hasInteracted: !e
    }), this.handleEnded = () => {
      !this.state.hasInteracted && this.autoNext()
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
    }, this.handleVideoClick = e => {
      this.setItem(e, !0)
    }, this.handleEdgeItemMouseLeave = () => {
      this.setState({
        hoveringPreviousItem: !1,
        hoveringNextItem: !1
      })
    }, this.renderCarouselImage = (e, t, n) => n ? (0, a.jsx)(d.Clickable, {
      onClick: () => this.handleCurrentItemClick(e, t),
      className: v.itemImageWrapper,
      children: (0, a.jsx)("img", {
        src: e.src,
        alt: "",
        className: v.currentImage
      })
    }) : (0, a.jsx)(d.Clickable, {
      onClick: () => this.setItem(t, !0),
      className: v.itemImageWrapper,
      children: (0, a.jsx)("img", {
        alt: "",
        className: v.itemImage,
        src: e.src,
        draggable: !1
      })
    }), this.renderItem = (e, t, n) => {
      let {
        currentIndex: s,
        volume: i,
        isMuted: r
      } = this.state, d = t === (0, p.normalizeIndex)(s, this.props.items.length);
      return (0, a.jsx)(o.default.div, {
        className: l(v.item, {
          [v.currentItem]: d
        }),
        style: null != n ? this.getStyle(t, n) : null,
        onMouseEnter: d ? null : () => this.handleEdgeItemMouseEnter(t),
        onMouseLeave: d ? null : this.handleEdgeItemMouseLeave,
        children: e.type === E.CarouselMediaTypes.VIDEO || e.type === E.CarouselMediaTypes.YOUTUBE_VIDEO ? (0, a.jsx)(M, {
          item: e,
          size: this.getItemSize(),
          onPlay: this.handlePlay,
          onEnded: this.handleEnded,
          playable: d,
          onClick: () => this.handleVideoClick(t),
          volume: i,
          onVolumeChange: this.handleVolumeChange,
          isMuted: r,
          onMute: this.handleMute
        }) : this.renderCarouselImage(e, t, d)
      })
    }, this.renderPaginationItem = (e, t) => {
      let {
        currentIndex: n
      } = this.state, s = n === t;
      return (0, a.jsxs)("div", {
        className: l(v.paginationItem, s ? v.selectedStorePaginationItem : v.unselectedStorePaginationItem),
        children: [(0, a.jsx)("img", {
          alt: null == e.alt ? t : e.alt,
          className: v.storePaginationImg,
          src: this.getPaginationSrc(e),
          draggable: !1
        }), e.type === E.CarouselMediaTypes.YOUTUBE_VIDEO || e.type === E.CarouselMediaTypes.VIDEO ? (0, a.jsx)(R, {}) : null, s ? (0, a.jsx)("div", {
          className: v.overlappingBorder
        }) : null]
      }, "page-".concat(t))
    }
  }
}
T.defaultProps = {
  autoplayInterval: 8e3,
  paused: !1
};
var O = (0, u.default)(T)