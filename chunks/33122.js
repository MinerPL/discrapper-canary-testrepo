"use strict";
n.r(t), n.d(t, {
  ItemSizes: function() {
    return L
  }
}), n("47120");
var s, a = n("735250"),
  i = n("470079"),
  r = n("803997"),
  l = n.n(r),
  o = n("748780"),
  d = n("481060"),
  u = n("112724"),
  h = n("524444"),
  c = n("494735"),
  p = n("574735"),
  m = n("529815"),
  g = n("250496"),
  f = n("552253"),
  C = n("261922"),
  I = n("259773"),
  x = n("585483"),
  E = n("981631"),
  v = n("434861");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function b() {
  var e, t;
  let n = (e = ["grayscale(", ")"], !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  })));
  return b = function() {
    return n
  }, n
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
  P = {
    width: 1280,
    height: 720
  },
  y = e => (0, h.renderVideoComponent)({
    ...e,
    className: v.videoWrapper,
    mediaPlayerClassName: v.mediaPlayer
  }),
  O = e => (0, a.jsx)(C.default, {
    ...e
  }),
  A = e => {
    let t, n, s, {
      item: i,
      size: r,
      onPlay: l,
      onEnded: o,
      onClick: u,
      playable: c,
      volume: p,
      isMuted: f,
      onVolumeChange: C,
      onMute: I
    } = e;
    if (i.type === E.CarouselMediaTypes.YOUTUBE_VIDEO) t = {
      url: (0, E.YOUTUBE_PREVIEW_URL)(i.youtubeVideoId),
      ...S
    }, n = {
      url: "".concat((0, E.YOUTUBE_EMBED_URL)(i.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
      ...P
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
      onVolumeChange: C,
      autoMute: f,
      onMute: I,
      autoPlay: c,
      renderVideoComponent: y,
      renderImageComponent: O,
      renderLinkComponent: h.renderMaskedLinkComponent
    });
    return c ? x : (0, a.jsx)(d.Clickable, {
      className: v.itemImageWrapper,
      onClick: u,
      children: x
    })
  },
  M = () => (0, a.jsx)("div", {
    className: v.paginationVideoOverlay,
    children: (0, a.jsx)(I.default, {
      inactive: !0,
      className: v.paginationVideoPlayPill,
      renderLinkComponent: h.renderMaskedLinkComponent
    })
  });
class R extends(s = i.PureComponent) {
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
      filter: o.default.template(b(), n)
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
        className: l()(v.arrow, {
          [v.arrowHovered]: s
        })
      }), (0, a.jsx)(c.CarouselNext, {
        onClick: this.manualNext,
        className: l()(v.arrow, {
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
    return (0, a.jsxs)(f.default, {
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
    super(...e), N(this, "state", {
      currentIndex: 0,
      animate: !0,
      playingVideo: !1,
      hasInteracted: !1,
      hoveringPreviousItem: !1,
      hoveringNextItem: !1,
      volume: 1,
      isMuted: !0
    }), N(this, "getItemSize", () => {
      let {
        width: e
      } = this.props, t = L.MEDIUM;
      return null != e && e < t.width && (t = L.SMALL), t
    }), N(this, "setItem", (e, t) => {
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
    }), N(this, "autoNext", () => {
      this.setItem(this.state.currentIndex + 1, !1)
    }), N(this, "manualNext", () => {
      this.setItem(this.state.currentIndex + 1, !0)
    }), N(this, "manualPrevious", () => {
      this.setItem(this.state.currentIndex - 1, !0)
    }), N(this, "handlePlay", e => this.setState({
      playingVideo: !0,
      hasInteracted: !e
    })), N(this, "handleEnded", () => {
      !this.state.hasInteracted && this.autoNext()
    }), N(this, "handleVolumeChange", e => {
      this.setState({
        volume: e,
        hasInteracted: !0
      })
    }), N(this, "handleMute", e => {
      this.setState({
        isMuted: e,
        hasInteracted: !0
      })
    }), N(this, "handleVideoClick", e => {
      this.setItem(e, !0)
    }), N(this, "handleEdgeItemMouseLeave", () => {
      this.setState({
        hoveringPreviousItem: !1,
        hoveringNextItem: !1
      })
    }), N(this, "renderCarouselImage", (e, t, n) => n ? (0, a.jsx)(d.Clickable, {
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
    })), N(this, "renderItem", (e, t, n) => {
      let {
        currentIndex: s,
        volume: i,
        isMuted: r
      } = this.state, d = t === (0, p.normalizeIndex)(s, this.props.items.length);
      return (0, a.jsx)(o.default.div, {
        className: l()(v.item, {
          [v.currentItem]: d
        }),
        style: null != n ? this.getStyle(t, n) : null,
        onMouseEnter: d ? null : () => this.handleEdgeItemMouseEnter(t),
        onMouseLeave: d ? null : this.handleEdgeItemMouseLeave,
        children: e.type === E.CarouselMediaTypes.VIDEO || e.type === E.CarouselMediaTypes.YOUTUBE_VIDEO ? (0, a.jsx)(A, {
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
    }), N(this, "renderPaginationItem", (e, t) => {
      let {
        currentIndex: n
      } = this.state, s = n === t;
      return (0, a.jsxs)("div", {
        className: l()(v.paginationItem, s ? v.selectedStorePaginationItem : v.unselectedStorePaginationItem),
        children: [(0, a.jsx)("img", {
          alt: null == e.alt ? t : e.alt,
          className: v.storePaginationImg,
          src: this.getPaginationSrc(e),
          draggable: !1
        }), e.type === E.CarouselMediaTypes.YOUTUBE_VIDEO || e.type === E.CarouselMediaTypes.VIDEO ? (0, a.jsx)(M, {}) : null, s ? (0, a.jsx)("div", {
          className: v.overlappingBorder
        }) : null]
      }, "page-".concat(t))
    })
  }
}
N(R, "defaultProps", {
  autoplayInterval: 8e3,
  paused: !1
}), t.default = (0, u.default)(R)