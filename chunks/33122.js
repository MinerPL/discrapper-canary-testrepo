s.d(t, {
  r: function() {
return S;
  }
}), s(47120);
var n, i = s(735250),
  a = s(470079),
  r = s(120356),
  l = s.n(r),
  o = s(748780),
  h = s(481060),
  d = s(112724),
  u = s(283756),
  c = s(524444),
  p = s(494735),
  m = s(574735),
  g = s(529815),
  I = s(250496),
  C = s(552253),
  x = s(261922),
  f = s(585483),
  N = s(981631),
  v = s(567698);

function b(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}

function P() {
  var e, t;
  let s = (e = [
'grayscale(',
')'
  ], !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
raw: {
  value: Object.freeze(t)
}
  })));
  return P = function() {
return s;
  }, s;
}
let S = {
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
  E = {
width: 1920,
height: 1080
  },
  L = {
width: 1280,
height: 720
  },
  y = e => (0, c.lV)({
...e,
className: v.videoWrapper,
mediaPlayerClassName: v.mediaPlayer
  }),
  O = e => (0, i.jsx)(x.Z, {
...e
  }),
  j = e => {
let t, s, n, {
  item: a,
  size: r,
  onPlay: l,
  onEnded: o,
  onClick: d,
  playable: u,
  volume: p,
  isMuted: m,
  onVolumeChange: C,
  onMute: x
} = e;
if (a.type === N.s9s.YOUTUBE_VIDEO)
  t = {
    url: (0, N.n8r)(a.youtubeVideoId),
    ...E
  }, s = {
    url: ''.concat((0, N.ivE)(a.youtubeVideoId), '?').concat('rel=0&iv_load_policy=3&showinfo=0&modestbranding=1'),
    ...L
  }, n = I.pn.YOUTUBE;
else {
  let e = null != a.width ? a.width : 0,
    n = null != a.height ? a.height : 0;
  t = {
    url: a.thumbnailSrc,
    width: e,
    height: n
  }, s = {
    url: a.src,
    proxyURL: a.src,
    width: e,
    height: n
  };
}
let f = (0, i.jsx)(g.BC, {
  href: null,
  thumbnail: t,
  video: s,
  provider: n,
  allowFullScreen: !0,
  maxHeight: r.height,
  maxWidth: r.width,
  onPlay: l,
  onEnded: o,
  playable: u,
  className: v.video,
  volume: p,
  onVolumeChange: C,
  autoMute: m,
  onMute: x,
  autoPlay: u,
  renderVideoComponent: y,
  renderImageComponent: O,
  renderLinkComponent: c.iT
});
return u ? f : (0, i.jsx)(h.Clickable, {
  className: v.itemImageWrapper,
  onClick: d,
  children: f
});
  },
  k = () => (0, i.jsx)('div', {
className: v.paginationVideoOverlay,
children: (0, i.jsx)(u.Z, {
  inactive: !0,
  className: v.paginationVideoPlayPill,
  renderLinkComponent: c.iT
})
  });
class M extends(n = a.PureComponent) {
  componentDidMount() {
f.S.subscribe(N.CkL.CAROUSEL_PREV, this.manualPrevious), f.S.subscribe(N.CkL.CAROUSEL_NEXT, this.manualNext);
  }
  componentWillUnmount() {
f.S.unsubscribe(N.CkL.CAROUSEL_PREV, this.manualPrevious), f.S.unsubscribe(N.CkL.CAROUSEL_NEXT, this.manualNext);
  }
  getStyle(e, t) {
let s = t.interpolate({
  inputRange: [
    0,
    1
  ],
  outputRange: [
    1,
    0
  ],
  extrapolate: o.Z.Extrapolate.CLAMP
});
return {
  opacity: t.interpolate({
    inputRange: [
      0,
      1
    ],
    outputRange: [
      0.3,
      1
    ],
    extrapolate: o.Z.Extrapolate.CLAMP
  }),
  filter: o.Z.template(P(), s)
};
  }
  handleCurrentItemClick(e, t) {
let {
  onCurrentItemClick: s
} = this.props;
null != s && s(e, t), this.setState({
  hasInteracted: !0
});
  }
  handleEdgeItemMouseEnter(e) {
let {
  currentIndex: t
} = this.state;
e < t ? this.setState({
  hoveringPreviousItem: !0
}) : e > t && this.setState({
  hoveringNextItem: !0
});
  }
  renderCarousel() {
let {
  items: e
} = this.props, {
  currentIndex: t,
  animate: s,
  hoveringPreviousItem: n,
  hoveringNextItem: a
} = this.state, r = (0, i.jsx)(m.ZP, {
  items: e,
  itemSize: this.getItemSize(),
  renderItem: this.renderItem,
  currentIndex: t,
  animate: s,
  edgeItems: 2
});
return e.length <= 1 ? r : (0, i.jsxs)('div', {
  className: v.carouselButtonsContainer,
  children: [
    r,
    (0, i.jsx)(p.am, {
      onClick: this.manualPrevious,
      className: l()(v.arrow, {
        [v.arrowHovered]: n
      })
    }),
    (0, i.jsx)(p.Pz, {
      onClick: this.manualNext,
      className: l()(v.arrow, {
        [v.arrowHovered]: a
      })
    })
  ]
});
  }
  getPaginationSrc(e) {
return e.type === N.s9s.YOUTUBE_VIDEO ? (0, N.n8r)(e.youtubeVideoId) : e.type === N.s9s.IMG ? e.src : e.type === N.s9s.VIDEO ? e.thumbnailSrc : null;
  }
  render() {
let {
  items: e,
  className: t,
  autoplayInterval: s,
  paused: n
} = this.props, {
  currentIndex: a,
  playingVideo: r,
  hasInteracted: l
} = this.state;
return (0, i.jsxs)(C.Z, {
  pauseOnHover: !0,
  onInterval: this.autoNext,
  interval: s,
  className: t,
  disable: r || l || n,
  children: [
    this.renderCarousel(),
    (0, i.jsx)('div', {
      className: v.pagination,
      children: (0, i.jsx)(p.ZP, {
        renderItem: this.renderPaginationItem,
        scrollToPadding: 85,
        items: e,
        selectedIndex: a,
        onSetItem: e => this.setItem(e, !0),
        paginationContainerClass: v.scroller,
        align: e.length < 6 ? p.ZP.Align.LEFT : p.ZP.Align.CENTER
      })
    })
  ]
});
  }
  constructor(...e) {
super(...e), b(this, 'state', {
  currentIndex: 0,
  animate: !0,
  playingVideo: !1,
  hasInteracted: !1,
  hoveringPreviousItem: !1,
  hoveringNextItem: !1,
  volume: 1,
  isMuted: !0
}), b(this, 'getItemSize', () => {
  let {
    width: e
  } = this.props, t = S.MEDIUM;
  return null != e && e < t.width && (t = S.SMALL), t;
}), b(this, 'setItem', (e, t) => {
  let {
    props: {
      items: s,
      onIntentionalChange: n
    },
    state: {
      currentIndex: i
    }
  } = this, a = (0, m.gN)(i, s.length), r = (0, m.gN)(e, s.length), l = 1 === Math.abs(e - a) || e === s.length - 1 && 0 === a || 0 === e && a === s.length - 1;
  this.setState({
    playingVideo: !1,
    currentIndex: r,
    animate: l,
    hasInteracted: t
  }), t && null != n && n(s[r], a, r);
}), b(this, 'autoNext', () => {
  this.setItem(this.state.currentIndex + 1, !1);
}), b(this, 'manualNext', () => {
  this.setItem(this.state.currentIndex + 1, !0);
}), b(this, 'manualPrevious', () => {
  this.setItem(this.state.currentIndex - 1, !0);
}), b(this, 'handlePlay', e => this.setState({
  playingVideo: !0,
  hasInteracted: !e
})), b(this, 'handleEnded', () => {
  !this.state.hasInteracted && this.autoNext();
}), b(this, 'handleVolumeChange', e => {
  this.setState({
    volume: e,
    hasInteracted: !0
  });
}), b(this, 'handleMute', e => {
  this.setState({
    isMuted: e,
    hasInteracted: !0
  });
}), b(this, 'handleVideoClick', e => {
  this.setItem(e, !0);
}), b(this, 'handleEdgeItemMouseLeave', () => {
  this.setState({
    hoveringPreviousItem: !1,
    hoveringNextItem: !1
  });
}), b(this, 'renderCarouselImage', (e, t, s) => s ? (0, i.jsx)(h.Clickable, {
  onClick: () => this.handleCurrentItemClick(e, t),
  className: v.itemImageWrapper,
  children: (0, i.jsx)('img', {
    src: e.src,
    alt: '',
    className: v.currentImage
  })
}) : (0, i.jsx)(h.Clickable, {
  onClick: () => this.setItem(t, !0),
  className: v.itemImageWrapper,
  children: (0, i.jsx)('img', {
    alt: '',
    className: v.itemImage,
    src: e.src,
    draggable: !1
  })
})), b(this, 'renderItem', (e, t, s) => {
  let {
    currentIndex: n,
    volume: a,
    isMuted: r
  } = this.state, h = t === (0, m.gN)(n, this.props.items.length);
  return (0, i.jsx)(o.Z.div, {
    className: l()(v.item, {
      [v.currentItem]: h
    }),
    style: null != s ? this.getStyle(t, s) : null,
    onMouseEnter: h ? null : () => this.handleEdgeItemMouseEnter(t),
    onMouseLeave: h ? null : this.handleEdgeItemMouseLeave,
    children: e.type === N.s9s.VIDEO || e.type === N.s9s.YOUTUBE_VIDEO ? (0, i.jsx)(j, {
      item: e,
      size: this.getItemSize(),
      onPlay: this.handlePlay,
      onEnded: this.handleEnded,
      playable: h,
      onClick: () => this.handleVideoClick(t),
      volume: a,
      onVolumeChange: this.handleVolumeChange,
      isMuted: r,
      onMute: this.handleMute
    }) : this.renderCarouselImage(e, t, h)
  });
}), b(this, 'renderPaginationItem', (e, t) => {
  let {
    currentIndex: s
  } = this.state, n = s === t;
  return (0, i.jsxs)('div', {
    className: l()(v.paginationItem, n ? v.selectedStorePaginationItem : v.unselectedStorePaginationItem),
    children: [
      (0, i.jsx)('img', {
        alt: null == e.alt ? t : e.alt,
        className: v.storePaginationImg,
        src: this.getPaginationSrc(e),
        draggable: !1
      }),
      e.type === N.s9s.YOUTUBE_VIDEO || e.type === N.s9s.VIDEO ? (0, i.jsx)(k, {}) : null,
      n ? (0, i.jsx)('div', {
        className: v.overlappingBorder
      }) : null
    ]
  }, 'page-'.concat(t));
});
  }
}
b(M, 'defaultProps', {
  autoplayInterval: 8000,
  paused: !1
}), t.Z = (0, d.Z)(M);