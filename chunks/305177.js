n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(748780),
  o = n(873546),
  c = n(846519),
  d = n(215569),
  u = n(481060),
  _ = n(552253),
  E = n(810090),
  I = n(243592);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class T extends a.Component {
  renderMedia() {
let {
  src: e,
  className: t,
  title: n
} = this.props, {
  imageLoading: a
} = this.state;
return (0, i.jsx)(l.Z.img, {
  className: r()({
    [I.imageLoading]: a
  }, t),
  src: e,
  alt: n,
  style: this.getImageStyle(),
  onError: this.handleImageError,
  onLoad: this.handleImageLoaded
});
  }
  render() {
let {
  className: e,
  title: t,
  src: n
} = this.props, {
  imageLoadError: a,
  imageLoading: s
} = this.state;
return null == n || a ? (0, i.jsx)(l.Z.div, {
  className: r()(I.titleContainer, e),
  style: this.getImageStyle(),
  children: t
}) : (0, i.jsxs)(l.Z.div, {
  className: r()(s ? I.loadingContainer : null, e),
  style: this.getImageStyle(),
  children: [
    s ? (0, i.jsx)(u.Spinner, {
      className: I.spinner,
      itemClassName: I.spinnerItem,
      type: u.Spinner.Type.PULSING_ELLIPSIS,
      animated: !0
    }) : null,
    this.renderMedia()
  ]
});
  }
  constructor(...e) {
super(...e), m(this, '_animatedValue', new l.Z.Value(1)), m(this, 'state', {
  imageLoadError: !1,
  imageLoading: !0
}), m(this, 'componentWillEnter', e => {
  this._animatedValue.setValue(0), l.Z.timing(this._animatedValue, {
    toValue: 1,
    duration: 400
  }).start(e);
}), m(this, 'componentWillLeave', e => {
  l.Z.timing(this._animatedValue, {
    toValue: 0,
    duration: 400
  }).start(e);
}), m(this, 'getImageStyle', () => ({
  opacity: this._animatedValue
})), m(this, 'handleImageError', () => {
  this.setState({
    imageLoadError: !0,
    imageLoading: !1
  });
}), m(this, 'handleImageLoaded', () => {
  this.setState({
    imageLoading: !1
  });
});
  }
}
class h extends a.Component {
  componentWillUnmount() {
this.videoTimeout.stop();
  }
  componentDidUpdate(e) {
let {
  playing: t
} = this.props, n = this._video.current;
if (null != n) {
  if (t && !e.playing) {
    this.videoTimeout.stop(), isFinite(n.duration) && isFinite(n.currentTime) && (n.currentTime = 0), n.volume = 0.3;
    let e = n.play();
    null != e && e.then(() => {
      this.videoPlaying = !0;
    });
  } else
    e.playing && !t && this.videoTimeout.start(400, () => {
      this.videoPlaying && (n.pause(), this.videoPlaying = !1);
    });
}
  }
  renderTypeImage() {
let {
  playing: e,
  slideImages: t,
  image: n,
  title: a,
  splashClassName: s
} = this.props;
return null == t ? (0, i.jsx)(T, {
  className: r()(I.splash, s),
  src: n,
  title: a
}, 'image') : (0, i.jsx)(_.Z, {
  onInterval: this.nextItem,
  interval: 2000,
  className: I.slideshowWrapper,
  disable: !e,
  children: (0, i.jsx)(d.W, {
    children: this.renderSlideItem(t)
  })
});
  }
  render() {
let {
  video: e,
  className: t,
  placeholder: n,
  renderMediaOverlay: a,
  playing: s
} = this.props, {
  videoLoadError: l,
  videoLoaded: o
} = this.state;
return n ? (0, i.jsx)('div', {
  className: t
}) : (0, i.jsxs)('figure', {
  className: r()(I.__invalid_tileMedia, t),
  children: [
    null == e || l ? this.renderTypeImage() : this.renderTypeVideo(),
    null != a && a(s && o)
  ]
});
  }
  constructor(...e) {
super(...e), m(this, 'state', {
  currentIndex: 0,
  videoLoadError: !1,
  videoLoaded: !1
}), m(this, '_video', a.createRef()), m(this, 'videoTimeout', new c.V7()), m(this, 'videoPlaying', !1), m(this, 'handleToggleMute', e => {
  e.stopPropagation(), e.preventDefault();
  let {
    onToggleMute: t
  } = this.props;
  null == t || t(e);
}), m(this, 'handleVideoError', () => {
  this.setState({
    videoLoadError: !0
  });
}), m(this, 'handleVideoLoaded', () => {
  this.setState({
    videoLoaded: !0
  });
}), m(this, 'renderTypeVideo', () => {
  let {
    videoLoaded: e
  } = this.state, {
    video: t,
    image: n,
    title: s,
    playing: l,
    muted: c,
    splashClassName: _,
    splashPlaceholderClassName: m,
    renderMediaOverlay: h
  } = this.props, N = c ? u.VoiceXIcon : u.VoiceNormalIcon;
  return (0, i.jsxs)(a.Fragment, {
    children: [
      o.tq ? null : (0, i.jsx)(E.Z, {
        className: r()(I.splash, _),
        muted: c,
        loop: !0,
        preload: 'none',
        ref: this._video,
        onLoadedMetadata: this.handleVideoLoaded,
        onError: this.handleVideoError,
        children: (0, i.jsx)('source', {
          src: t,
          type: 'video/mp4'
        })
      }),
      (0, i.jsx)(d.W, {
        children: l && e ? null : (0, i.jsx)(T, {
          className: r()(I.splashPlaceholder, m),
          src: n,
          title: s
        }, 0)
      }),
      (0, i.jsx)(u.Clickable, {
        className: r()(I.muteContainer, {
          [I.muteContainerPlaying]: l && e,
          [I.muteContainerMediaOverlay]: null != h
        }),
        onClick: this.handleToggleMute,
        children: l && e ? (0, i.jsx)(N, {
          className: I.mute
        }) : null
      })
    ]
  });
}), m(this, 'nextItem', () => {
  let {
    slideImages: e
  } = this.props;
  null != e && this.setState({
    currentIndex: (this.state.currentIndex + 1) % e.length
  });
}), m(this, 'renderSlideItem', e => {
  let {
    image: t,
    title: n,
    playing: a,
    splashClassName: s
  } = this.props, {
    currentIndex: l
  } = this.state;
  return a ? (0, i.jsx)(T, {
    className: r()(I.splash, s),
    src: e[l],
    title: n
  }, l) : (0, i.jsx)(T, {
    className: r()(I.splash, s),
    src: t,
    title: n
  }, 'image');
});
  }
}
t.Z = h;