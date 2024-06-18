"use strict";
n.d(t, {
  Z: function() {
    return f
  }
}), n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(374470),
  a = n(481060),
  l = n(40851),
  u = n(261922),
  _ = n(926836),
  d = n(956664),
  c = n(506071),
  E = n(503349),
  I = n(689938),
  T = n(381237);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class S extends(i = s.PureComponent) {
  render() {
    let {
      appContext: e,
      isWindowFocused: t,
      ...n
    } = this.props;
    return (0, r.jsx)(u.Z, {
      ...n,
      onZoom: this.onZoom,
      onMouseEnter: this.onMouseEnter,
      shouldAnimate: t
    })
  }
  constructor(...e) {
    super(...e), h(this, "onMouseEnter", (e, t) => {
      let {
        preloadImage: n
      } = t, {
        width: i,
        height: r
      } = this.props;
      n((0, d.zp)(i, r))
    }), h(this, "modalContext", (0, a.modalContextFromAppContext)(this.props.appContext)), h(this, "onCloseImage", () => {
      (0, a.closeModal)(E.c, this.modalContext)
    }), h(this, "onZoom", (e, t) => {
      let {
        zoomThumbnailPlaceholder: n,
        trigger: i
      } = t;
      e.preventDefault();
      let {
        alt: s,
        src: l,
        original: u,
        width: d,
        height: c,
        animated: h,
        children: S,
        renderLinkComponent: f,
        renderForwardComponent: N,
        isWindowFocused: A,
        shouldHideMediaOptions: m = !1
      } = this.props, O = {
        alt: s,
        src: l,
        original: null != u ? u : l,
        width: d,
        height: c,
        animated: h,
        children: S,
        zoomThumbnailPlaceholder: n,
        renderLinkComponent: f,
        renderForwardComponent: N,
        onContextMenu: m ? e => {
          e.stopPropagation(), e.preventDefault()
        } : void 0,
        trigger: i
      };
      (0, o.k)(e.currentTarget) && e.currentTarget.blur(), (0, a.openModal)(e => (0, r.jsx)(a.ModalRoot, {
        className: T.modal,
        ...e,
        size: a.ModalSize.DYNAMIC,
        "aria-label": I.Z.Messages.IMAGE,
        children: (0, r.jsx)(_.y, {
          ...O,
          className: T.image,
          shouldAnimate: A,
          onClose: this.onCloseImage,
          shouldHideMediaOptions: m
        })
      }), {
        modalKey: E.c
      }, this.modalContext)
    })
  }
}

function f(e) {
  let t = (0, l.bp)(),
    n = (0, c.n)();
  return (0, r.jsx)(S, {
    ...e,
    isWindowFocused: n,
    appContext: t
  })
}
h(S, "defaultProps", {
  shouldLink: !0,
  autoPlay: !1,
  animated: !1
})