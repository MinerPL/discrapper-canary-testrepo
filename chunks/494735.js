n.d(e, {
  Pz: function() {
return f;
  },
  am: function() {
return g;
  }
}), n(47120);
var o, r = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  c = n(996753),
  u = n(506094);

function p(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : t[e] = n, t;
}
let h = {
  CENTER: u.alignCenter,
  LEFT: u.alignLeft
};
class d extends(o = i.PureComponent) {
  componentDidUpdate(t) {
let {
  selectedIndex: e
} = this.props;
t.selectedIndex !== e && this.handleSelectedIndexChange(e);
  }
  render() {
let {
  renderItem: t,
  items: e,
  vertical: n,
  paginationContainerClass: o,
  align: s
} = this.props, c = n ? u.verticalPaginationItemContainer : u.horizontalPaginationItemContainer;
return (0, r.jsx)(l.AdvancedScrollerAuto, {
  orientation: n ? 'vertical' : 'horizontal',
  className: a()(c, o, s),
  ref: this.handleSetScrollerRef,
  children: e.map((e, n) => i.cloneElement(t(e, n), {
    onClick: () => this.handlePageClick(n),
    key: n,
    ref: t => {
      this._paginationItemRefs[n] = t;
    }
  }))
});
  }
  constructor(...t) {
super(...t), p(this, '_scrollerRef', null), p(this, '_paginationItemRefs', []), p(this, 'handleSetScrollerRef', t => {
  this._scrollerRef = t;
}), p(this, 'handleSelectedIndexChange', t => {
  let e = this._scrollerRef;
  if (null == e)
    return;
  let n = this._paginationItemRefs[t];
  if (null != n)
    e.scrollIntoViewNode({
      node: n,
      animate: !0,
      padding: this.props.scrollToPadding
    });
}), p(this, 'handlePageClick', t => {
  let {
    onSetItem: e
  } = this.props;
  e(t);
});
  }
}
p(d, 'Align', h), p(d, 'defaultProps', {
  scrollToPadding: {
top: 0,
left: 0,
bottom: 0,
right: 0
  },
  align: h.CENTER
});
class g extends i.PureComponent {
  render() {
let {
  className: t
} = this.props;
return (0, r.jsx)(l.Button, {
  look: l.Button.Looks.BLANK,
  size: l.Button.Sizes.NONE,
  className: a()(u.prevButtonContainer, t),
  onClick: this.handlePrevClick,
  children: (0, r.jsx)(c.Z, {
    className: u.arrow,
    direction: c.Z.Directions.LEFT
  })
});
  }
  constructor(...t) {
super(...t), p(this, 'handlePrevClick', t => {
  t.stopPropagation(), t.preventDefault();
  let {
    onClick: e
  } = this.props;
  null == e || e(t);
});
  }
}
class f extends i.PureComponent {
  render() {
let {
  className: t
} = this.props;
return (0, r.jsx)(l.Button, {
  look: l.Button.Looks.BLANK,
  size: l.Button.Sizes.NONE,
  className: a()(u.nextButtonContainer, t),
  onClick: this.handleNextClick,
  children: (0, r.jsx)(c.Z, {
    className: u.arrow,
    direction: c.Z.Directions.RIGHT
  })
});
  }
  constructor(...t) {
super(...t), p(this, 'handleNextClick', t => {
  t.stopPropagation(), t.preventDefault();
  let {
    onClick: e
  } = this.props;
  null == e || e(t);
});
  }
}
e.ZP = 12633 == n.j ? d : null;