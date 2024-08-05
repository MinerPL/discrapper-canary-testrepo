n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(748780),
  o = n(873546),
  c = n(846519),
  u = n(215569),
  d = n(481060),
  _ = n(679056),
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
class T extends s.Component {
  renderMedia() {
let {
  src: e,
  className: t,
  title: n
} = this.props, {
  imageLoading: s
} = this.state;
return (0, i.jsx)(l.Z.img, {
  className: r()({
    [I.imageLoading]: s
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
  imageLoadError: s,
  imageLoading: a
} = this.state;
return null == n || s ? (0, i.jsx)(l.Z.div, {
  className: r()(I.titleContainer, e),
  style: this.getImageStyle(),
  children: t
}) : (0, i.jsxs)(l.Z.div, {
  className: r()(a ? I.loadingContainer : null, e),
  style: this.getImageStyle(),
  children: [
    a ? (0, i.jsx)(d.Spinner, {
      className: I.spinner,
      itemClassName: I.spinnerItem,
      type: d.Spinner.Type.PULSING_ELLIPSIS,
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
class h extends s.Component {
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
  title: s,
  splashClassName: a
} = this.props;
return null == t ? (0, i.jsx)(T, {
  className: r()(I.splash, a),
  src: n,
  title: s
}, 'image') : (0, i.jsx)(_.Z, {
  onInterval: this.nextItem,
  interval: 2000,
  className: I.slideshowWrapper,
  disable: !e,
  children: (0, i.jsx)(u.W, {
    children: this.renderSlideItem(t)
  })
});
  }
  render() {
let {
  video: e,
  className: t,
  placeholder: n,
  renderMediaOverlay: s,
  playing: a
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
    null != s && s(a && o)
  ]
});
  }
  constructor(...e) {
super(...e), m(this, 'state', {
  currentIndex: 0,
  videoLoadError: !1,
  videoLoaded: !1
}), m(this, '_video', s.createRef()), m(this, 'videoTimeout', new c.V7()), m(this, 'videoPlaying', !1), m(this, 'handleToggleMute', e => {
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
    title: a,
    playing: l,
    muted: c,
    splashClassName: _,
    splashPlaceholderClassName: m,
    renderMediaOverlay: h
  } = this.props, N = c ? d.VoiceXIcon : d.VoiceNormalIcon;
  return (0, i.jsxs)(s.Fragment, {
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
      (0, i.jsx)(u.W, {
        children: l && e ? null : (0, i.jsx)(T, {
          className: r()(I.splashPlaceholder, m),
          src: n,
          title: a
        }, 0)
      }),
      (0, i.jsx)(d.Clickable, {
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
    playing: s,
    splashClassName: a
  } = this.props, {
    currentIndex: l
  } = this.state;
  return s ? (0, i.jsx)(T, {
    className: r()(I.splash, a),
    src: e[l],
    title: n
  }, l) : (0, i.jsx)(T, {
    className: r()(I.splash, a),
    src: t,
    title: n
  }, 'image');
});
  }
}
t.Z = h;