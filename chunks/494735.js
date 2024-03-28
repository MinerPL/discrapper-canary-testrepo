"use strict";
n.r(e), n.d(e, {
  CarouselNext: function() {
    return m
  },
  CarouselPrevious: function() {
    return f
  }
}), n("47120");
var o, s = n("735250"),
  i = n("470079"),
  r = n("803997"),
  a = n.n(r),
  l = n("481060"),
  c = n("996753"),
  u = n("997940");

function d(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t
}
let p = {
  CENTER: u.alignCenter,
  LEFT: u.alignLeft
};
class h extends(o = i.PureComponent) {
  componentDidUpdate(t) {
    let {
      selectedIndex: e
    } = this.props;
    t.selectedIndex !== e && this.handleSelectedIndexChange(e)
  }
  render() {
    let {
      renderItem: t,
      items: e,
      vertical: n,
      paginationContainerClass: o,
      align: r
    } = this.props, c = n ? u.verticalPaginationItemContainer : u.horizontalPaginationItemContainer;
    return (0, s.jsx)(l.AdvancedScrollerAuto, {
      orientation: n ? "vertical" : "horizontal",
      className: a()(c, o, r),
      ref: this.handleSetScrollerRef,
      children: e.map((e, n) => i.cloneElement(t(e, n), {
        onClick: () => this.handlePageClick(n),
        key: n,
        ref: t => {
          this._paginationItemRefs[n] = t
        }
      }))
    })
  }
  constructor(...t) {
    super(...t), d(this, "_scrollerRef", null), d(this, "_paginationItemRefs", []), d(this, "handleSetScrollerRef", t => {
      this._scrollerRef = t
    }), d(this, "handleSelectedIndexChange", t => {
      let e = this._scrollerRef;
      if (null == e) return;
      let n = this._paginationItemRefs[t];
      null != n && e.scrollIntoViewNode({
        node: n,
        animate: !0,
        padding: this.props.scrollToPadding
      })
    }), d(this, "handlePageClick", t => {
      let {
        onSetItem: e
      } = this.props;
      e(t)
    })
  }
}
d(h, "Align", p), d(h, "defaultProps", {
  scrollToPadding: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  align: p.CENTER
});
class f extends i.PureComponent {
  render() {
    let {
      className: t
    } = this.props;
    return (0, s.jsx)(l.Button, {
      look: l.Button.Looks.BLANK,
      size: l.Button.Sizes.NONE,
      className: a()(u.prevButtonContainer, t),
      onClick: this.handlePrevClick,
      children: (0, s.jsx)(c.default, {
        className: u.arrow,
        direction: c.default.Directions.LEFT
      })
    })
  }
  constructor(...t) {
    super(...t), d(this, "handlePrevClick", t => {
      t.stopPropagation(), t.preventDefault();
      let {
        onClick: e
      } = this.props;
      null == e || e(t)
    })
  }
}
class m extends i.PureComponent {
  render() {
    let {
      className: t
    } = this.props;
    return (0, s.jsx)(l.Button, {
      look: l.Button.Looks.BLANK,
      size: l.Button.Sizes.NONE,
      className: a()(u.nextButtonContainer, t),
      onClick: this.handleNextClick,
      children: (0, s.jsx)(c.default, {
        className: u.arrow,
        direction: c.default.Directions.RIGHT
      })
    })
  }
  constructor(...t) {
    super(...t), d(this, "handleNextClick", t => {
      t.stopPropagation(), t.preventDefault();
      let {
        onClick: e
      } = this.props;
      null == e || e(t)
    })
  }
}
e.default = h