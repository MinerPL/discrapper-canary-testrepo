i(47120);
var n, a, r, o, s = i(735250),
  l = i(470079),
  c = i(120356),
  d = i.n(c),
  u = i(392711),
  h = i.n(u),
  _ = i(846519),
  p = i(481060),
  m = i(570140),
  f = i(585483),
  g = i(996753),
  C = i(206895),
  x = i(259580),
  I = i(981631),
  b = i(689938),
  N = i(252411);

function v(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
value: i,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = i, e;
}
let A = {
  JUMP: 'jump',
  NEXT: 'next',
  PREVIOUS: 'previous'
};
(o = n || (n = {})).ARROW = 'arrow', o.CARET = 'caret';
class E extends(a = l.PureComponent) {
  componentDidMount() {
f.S.subscribe(I.CkL.CAROUSEL_PREV, this.handlePrevious), f.S.subscribe(I.CkL.CAROUSEL_NEXT, this.handleNext);
  }
  componentWillUnmount() {
f.S.unsubscribe(I.CkL.CAROUSEL_PREV, this.handlePrevious), f.S.unsubscribe(I.CkL.CAROUSEL_NEXT, this.handleNext);
  }
  render() {
let {
  current: e,
  count: t,
  includeHitboxPadding: i,
  arrowClassName: n,
  paginationDotClassName: a,
  paginationDotSelectedClassName: r,
  paginationArrowIconType: o = 'arrow'
} = this.props, l = d()(N.arrowHitbox, {
  [N.arrowHitboxPadding]: i
}, n);
return (0, s.jsxs)('div', {
  className: d()(N.controls, this.props.className),
  children: [
    (0, s.jsx)(p.Button, {
      look: p.Button.Looks.BLANK,
      className: l,
      onClick: this.handlePrevious,
      'aria-label': b.Z.Messages.PAGINATION_PREVIOUS,
      children: 'caret' === o ? (0, s.jsx)(x.Z, {
        className: N.arrow,
        direction: x.Z.Directions.LEFT
      }) : (0, s.jsx)(g.Z, {
        className: N.arrow,
        direction: g.Z.Directions.LEFT
      })
    }),
    (0, s.jsx)('div', {
      className: N.dots,
      children: h().times(t, t => (0, s.jsx)(p.Button, {
        look: p.Button.Looks.BLANK,
        size: p.Button.Sizes.NONE,
        onClick: () => this.handleDotClick(t),
        className: t === e ? d()(N.dotSelected, r) : d()(N.dotNormal, a),
        'aria-label': b.Z.Messages.PAGINATION_SLIDE_LABEL.format({
          pageNumber: t + 1
        })
      }, 'dot-'.concat(t)))
    }),
    (0, s.jsx)(p.Button, {
      look: p.Button.Looks.BLANK,
      className: l,
      onClick: this.handleNext,
      'aria-label': b.Z.Messages.PAGINATION_NEXT,
      children: 'caret' === o ? (0, s.jsx)(x.Z, {
        className: N.arrow,
        direction: x.Z.Directions.RIGHT
      }) : (0, s.jsx)(g.Z, {
        className: N.arrow,
        direction: g.Z.Directions.RIGHT
      })
    })
  ]
});
  }
  constructor(...e) {
super(...e), v(this, 'handleDotClick', e => {
  let {
    onSetItem: t,
    onIntentionalChange: i,
    current: n
  } = this.props;
  null == i || i(n, e, A.JUMP), t(e);
}), v(this, 'handleNext', () => {
  let {
    onIntentionalChange: e,
    current: t,
    onChangePage: i
  } = this.props, n = i(1);
  null == e || e(t, n, A.NEXT);
}), v(this, 'handlePrevious', () => {
  let {
    onIntentionalChange: e,
    current: t,
    onChangePage: i
  } = this.props, n = i(-1);
  null == e || e(t, n, A.PREVIOUS);
});
  }
}
v(E, 'defaultProps', {
  includeHitboxPadding: !0
});
class T extends(r = l.PureComponent) {
  componentDidMount() {
m.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocusChange), !this.props.initialPaused && !this.state.paused && this.startTimer();
  }
  componentWillUnmount() {
this.stopTimer(), m.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocusChange);
  }
  componentDidUpdate(e, t) {
let i, n, a, r;
let o = (i = this.props, n = this.state, !i.initialPaused && !n.paused);
let s = (a = e, r = t, !a.initialPaused && !r.paused);
o && !s ? this.startTimer() : !o && s && this.stopTimer();
let {
  items: l
} = this.props, {
  visibleIndex: c
} = this.state;
null == l[c] && this.changeItem(l, 1);
  }
  startTimer() {
if (null != this.props.delay)
  this.timer.start(this.props.delay, this.nextItem);
  }
  stopTimer() {
if (null != this.props.delay)
  this.timer.stop();
  }
  changeItem(e, t) {
let i = this.state.visibleIndex + t;
i < 0 ? i = e.length - 1 : i > e.length - 1 && (i = 0);
let {
  onChangeItem: n
} = this.props;
null == n || n(e[i], this.state.visibleIndex, i);
let a = t > 0 ? C.n.LEFT : C.n.RIGHT;
return this.setState({
  visibleIndex: i,
  direction: a
}), i;
  }
  render() {
let {
  items: e,
  renderItem: t,
  className: i,
  slideAnimatorClassName: n,
  slideAnimatorSpringSettings: a,
  slideAnimatorFadeInOut: r,
  paginationClassName: o,
  paginationArrowClassName: l,
  paginationArrowIconType: c,
  paginationDotClassName: u,
  paginationDotSelectedClassName: h,
  themedPagination: _,
  includeHitboxPadding: p,
  style: m,
  aspectRatio: f,
  children: g
} = this.props, {
  visibleIndex: x
} = this.state;
return (0, s.jsxs)('div', {
  className: N.root,
  children: [
    (0, s.jsxs)('div', {
      className: d()(N.carouselContainer, i),
      style: m,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [
        (0, s.jsx)('div', {
          style: {
            aspectRatio: f
          },
          children: (0, s.jsx)(C.Z, {
            className: d()(N.carousel, n),
            step: x,
            direction: this.getCurrentDirection(),
            springSettings: a,
            fadeInOut: r,
            children: t(e[x], x)
          })
        }),
        e.length > 1 && (0, s.jsx)(E, {
          className: d()(o, _ ? N.themedPagination : N.pagination),
          arrowClassName: l,
          includeHitboxPadding: p,
          current: x,
          count: e.length,
          onChangePage: t => this.changeItem(e, t),
          onSetItem: this.handleSetItem,
          onIntentionalChange: this.handleIntentionalChange,
          paginationArrowIconType: c,
          paginationDotClassName: u,
          paginationDotSelectedClassName: h
        })
      ]
    }),
    null != g && g({
      step: x,
      direction: this.getCurrentDirection()
    })
  ]
});
  }
  constructor(e) {
super(e), v(this, 'timer', new _.Xp()), v(this, 'handleWindowFocusChange', e => {
  let {
    focused: t
  } = e;
  this.setState({
    paused: !t
  });
}), v(this, 'getCurrentDirection', () => this.state.direction), v(this, 'nextItem', () => {
  let {
    items: e
  } = this.props;
  this.changeItem(e, 1);
}), v(this, 'previousItem', () => {
  let {
    items: e
  } = this.props;
  this.changeItem(e, -1);
}), v(this, 'handleSetItem', e => {
  let {
    visibleIndex: t
  } = this.state, {
    items: i
  } = this.props;
  this.changeItem(i, e - t);
}), v(this, 'handleMouseEnter', () => {
  this.setState({
    paused: !0
  });
}), v(this, 'handleMouseLeave', () => {
  this.setState({
    paused: !1
  });
}), v(this, 'handleIntentionalChange', (e, t, i) => {
  let {
    items: n,
    onIntentionalChange: a
  } = this.props;
  return null == a ? void 0 : a(n[t], e, t, i);
}), this.state = {
  visibleIndex: !0 === e.randomize ? h().random(0, e.items.length - 1) : 0,
  direction: C.n.LEFT,
  paused: !1
};
  }
}
v(T, 'defaultProps', {
  aspectRatio: 16 / 9
}), t.Z = T;