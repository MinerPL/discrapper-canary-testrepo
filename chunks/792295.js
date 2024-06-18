"use strict";
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(481060),
  u = n(414497);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = {
  SMALL: u.sizeSmall,
  MEDIUM: u.sizeMedium,
  LARGE: u.sizeLarge
};
class c extends(i = s.PureComponent) {
  calculateScroll() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._scroller;
    if (null == e) return;
    let {
      scrollTop: t
    } = e.getScrollerState(), {
      hideSeparator: n
    } = this.state;
    0 !== t || n ? t > 0 && n && this.setState({
      hideSeparator: !1
    }) : this.setState({
      hideSeparator: !0
    })
  }
  getScroller() {
    return this._scroller
  }
  renderChildren() {
    let {
      hideSeparator: e
    } = this.state;
    return s.Children.map(this.props.children, t => s.isValidElement(t) ? t.type === l.ModalContent || t.type === l.ModalListContent ? s.cloneElement(t, {
      scrollerRef: this.setRef,
      onScroll: this.handleScroll,
      onResize: this.handleScroll
    }) : t.type === l.ModalHeader && e ? s.cloneElement(t, {
      separator: !1
    }) : t : t)
  }
  render() {
    let {
      className: e,
      children: t,
      tag: n,
      size: i,
      fullscreenOnMobile: s,
      ...o
    } = this.props;
    return (0, r.jsx)(n, {
      className: a()(u.modal, e, i, {
        [u.fullscreenOnMobile]: s
      }),
      ...o,
      children: this.renderChildren()
    })
  }
  constructor(e) {
    super(e), _(this, "_scroller", null), _(this, "setRef", e => {
      this._scroller = e, null != e && this.calculateScroll()
    }), _(this, "handleScroll", e => {
      this.calculateScroll();
      let {
        onScroll: t
      } = this.props;
      null == t || t(e)
    }), this.state = {
      hideSeparator: !1
    }
  }
}
_(c, "Header", l.ModalHeader), _(c, "Footer", l.ModalFooter), _(c, "Content", l.ModalContent), _(c, "ListContent", l.ModalListContent), _(c, "CloseButton", l.ModalCloseButton), _(c, "Sizes", d), _(c, "defaultProps", {
  fullscreenOnMobile: !0,
  size: d.SMALL,
  tag: "div"
})