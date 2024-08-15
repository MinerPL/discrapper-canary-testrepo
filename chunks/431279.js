n.d(t, {
  Z: function() {
return g;
  }
}), n(47120);
var r, i = n(735250),
  a = n(470079),
  s = n(374470),
  o = n(481060),
  l = n(40851),
  u = n(124347),
  c = n(751586),
  d = n(626135),
  _ = n(956664),
  E = n(506071),
  f = n(981631),
  h = n(503349),
  p = n(689938),
  m = n(365862);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class T extends(r = a.PureComponent) {
  render() {
let {
  appContext: e,
  isWindowFocused: t,
  ...n
} = this.props;
return (0, i.jsx)(u.Z, {
  ...n,
  onZoom: this.onZoom,
  onMouseEnter: this.onMouseEnter,
  shouldAnimate: t
});
  }
  constructor(...e) {
super(...e), I(this, 'onMouseEnter', (e, t) => {
  let {
    preloadImage: n
  } = t, {
    width: r,
    height: i,
    onMouseEnter: a
  } = this.props;
  null == a || a(e, {
    preloadImage: n
  }), n((0, _.zp)(r, i));
}), I(this, 'modalContext', (0, o.modalContextFromAppContext)(this.props.appContext)), I(this, 'onCloseImage', () => {
  (0, o.closeModal)(h.c, this.modalContext);
}), I(this, 'onZoom', (e, t) => {
  let {
    zoomThumbnailPlaceholder: n,
    trigger: r
  } = t;
  e.preventDefault();
  let {
    alt: a,
    src: l,
    original: u,
    width: _,
    height: E,
    animated: I,
    children: T,
    renderLinkComponent: g,
    renderForwardComponent: S,
    isWindowFocused: A,
    shouldHideMediaOptions: N = !1
  } = this.props, v = {
    alt: a,
    src: l,
    original: null != u ? u : l,
    width: _,
    height: E,
    animated: I,
    children: T,
    zoomThumbnailPlaceholder: n,
    renderLinkComponent: g,
    renderForwardComponent: S,
    onContextMenu: N ? e => {
      e.stopPropagation(), e.preventDefault();
    } : void 0,
    trigger: r
  };
  (0, s.k)(e.currentTarget) && e.currentTarget.blur(), d.default.track(f.rMx.OPEN_MODAL, {
    type: 'Media Modal'
  }), (0, o.openModal)(e => (0, i.jsx)(o.ModalRoot, {
    className: m.modal,
    ...e,
    size: o.ModalSize.DYNAMIC,
    'aria-label': p.Z.Messages.IMAGE,
    children: (0, i.jsx)(c.y, {
      ...v,
      className: m.image,
      shouldAnimate: A,
      onClose: this.onCloseImage,
      shouldHideMediaOptions: N
    })
  }), {
    modalKey: h.c
  }, this.modalContext);
});
  }
}

function g(e) {
  let t = (0, l.bp)(),
n = (0, E.n)();
  return (0, i.jsx)(T, {
...e,
isWindowFocused: n,
appContext: t
  });
}
I(T, 'defaultProps', {
  shouldLink: !0,
  autoPlay: !1,
  animated: !1
});