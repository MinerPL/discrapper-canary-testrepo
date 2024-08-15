n.d(t, {
  Cy: function() {
return v;
  },
  DY: function() {
return L;
  },
  FG: function() {
return r;
  },
  u: function() {
return D;
  }
}), n(411104), n(47120);
var r, i, a, s = n(735250),
  o = n(470079),
  l = n(120356),
  u = n.n(l),
  c = n(699581),
  d = n(338545),
  _ = n(873546),
  E = n(374470),
  f = n(846519),
  h = n(377527),
  p = n(186325),
  m = n(481060),
  I = n(607070),
  T = n(314910),
  g = n(646115);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(a = r || (r = {})).PRIMARY = 'primary', a.NESTED = 'nested', a.BLACK = 'black', a.GREY = 'grey', a.BRAND = 'brand', a.GREEN = 'green', a.YELLOW = 'yellow', a.RED = 'red', a.CUSTOM = 'custom', a.PREMIUM = 'premium';
let A = Object.freeze({}),
  N = Object.freeze({
top: g.tooltipTop,
bottom: g.tooltipBottom,
left: g.tooltipLeft,
right: g.tooltipRight,
center: g.tooltipCenter,
window_center: g.tooltipCenter,
primary: g.tooltipPrimary,
nested: g.tooltipNested,
black: g.tooltipBlack,
grey: g.tooltipGrey,
brand: g.tooltipBrand,
green: g.tooltipGreen,
yellow: g.tooltipYellow,
red: g.tooltipRed,
custom: null,
premium: g.tooltipPremium
  }),
  v = e => {
let {
  targetElementRef: t,
  align: n = 'center',
  position: r,
  color: i,
  children: a,
  onNonAccessibleClick: o,
  tooltipClassName: l,
  tooltipStyle: c,
  tooltipContentClassName: _,
  spacing: E = 8,
  animationStyle: f,
  disableTooltipPointerEvents: h = !1,
  allowOverflow: p = !1,
  tooltipPointerClassName: m
} = e, I = ''.concat('string' == typeof a ? a : '', ':').concat(r);
return (0, s.jsx)(T.W5, {
  disablePointerEvents: h,
  targetRef: t,
  position: r,
  autoInvert: !0,
  align: n,
  positionKey: I,
  spacing: E,
  nudgeAlignIntoViewport: !0,
  children: e => {
    let {
      position: t,
      nudge: E
    } = e;
    return (0, s.jsxs)(d.animated.div, {
      onClick: o,
      className: u()(g.tooltip, N[null != t ? t : r], N[i], {
        [g.tooltipDisablePointerEvents]: h
      }, l),
      style: {
        ...f,
        ...c
      },
      children: [
        (0, s.jsx)('div', {
          className: u()(g.tooltipPointer, m),
          style: function(e, t, n) {
            let r = 'left' === e || 'right' === e,
              i = '50%',
              a = n;
            return t === (r ? 'top' : 'left') ? (i = '0%', a += 16) : t === (r ? 'bottom' : 'right') && (i = '100%', a -= 20), {
              [r ? 'top' : 'left']: 'calc('.concat(i, ' + ').concat(a, 'px)')
            };
          }(null != t ? t : r, n, E)
        }),
        (0, s.jsx)('div', {
          className: u()(g.tooltipContent, {
            [g.tooltipContentAllowOverflow]: p
          }, _),
          children: a
        })
      ]
    });
  }
});
  },
  O = {
scale: 0.95,
opacity: 0
  },
  R = {
scale: 1,
opacity: 0
  },
  C = {
scale: 1,
opacity: 1
  },
  y = e => {
let {
  isVisible: t,
  onAnimationRest: n,
  targetElementRef: r,
  ...i
} = e, {
  reducedMotion: a
} = o.useContext(p.S);
return (0, m.useTransition)(t, {
  keys: e => e ? 'tooltip' : 'empty',
  config: h.F,
  from: a.enabled ? R : O,
  enter: C,
  leave: a.enabled ? R : O,
  onRest: n
}, 'animate-always')((e, t) => t ? (0, s.jsx)(v, {
  animationStyle: e,
  targetElementRef: r,
  ...i
}) : null);
  };
class D extends(i = o.Component) {
  static getDerivedStateFromProps(e, t) {
return t.shouldShowTooltip && null == e.text ? {
  shouldShowTooltip: !1
} : null;
  }
  componentDidMount() {
this.shouldShowTooltip(this.props, this.state) && this.setDomElement();
  }
  componentDidUpdate(e, t) {
let n = this.shouldShowTooltip(this.props, this.state);
n !== this.shouldShowTooltip(e, t) && (n ? this.setDomElement() : this.hasDomElement = !1);
  }
  setDomElement() {
let e = c.findDOMNode(this);
if (!(0, E.k)(e))
  throw Error('Tooltip cannot find DOM node');
this.domElementRef.current = e, this.hasDomElement = !0, this.forceUpdate();
  }
  componentWillUnmount() {
this.showTimeout.stop(), this.domElementRef.current = null;
  }
  render() {
let e;
let {
  children: t,
  text: n,
  'aria-label': r
} = this.props;
if (null == n)
  return t(A);
'string' == typeof r ? e = r : 'string' == typeof n && !1 !== r && (e = n);
let i = {
  onClick: this.handleClick,
  onMouseEnter: this.handleMouseEnter,
  onMouseLeave: this.handleMouseLeave,
  onContextMenu: this.handleContextMenu,
  onFocus: this.handleFocus,
  onBlur: this.handleBlur
};
return null != e && (i['aria-label'] = e), (0, s.jsxs)(o.Fragment, {
  children: [
    t(i),
    this.renderTooltip()
  ]
});
  }
  shouldShowTooltip(e, t) {
return e.shouldShow && (t.shouldShowTooltip || e.forceOpen);
  }
  renderTooltip() {
let {
  text: e,
  align: t,
  position: n,
  color: r,
  spacing: i,
  tooltipClassName: a,
  tooltipStyle: o,
  tooltipContentClassName: l,
  disableTooltipPointerEvents: u,
  onAnimationRest: c,
  allowOverflow: d,
  clickableOnMobile: E,
  hideOnClick: f,
  tooltipPointerClassName: h
} = this.props, p = (_.tq || _.Em) && !0 === E && f, m = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement, I = null;
return I = e instanceof Function ? m ? e() : null : e, (0, s.jsx)(y, {
  disableTooltipPointerEvents: !1 !== u && !p || !0 === u,
  targetElementRef: this.domElementRef,
  tooltipStyle: o,
  tooltipClassName: a,
  tooltipContentClassName: l,
  tooltipPointerClassName: h,
  align: t,
  position: n,
  color: r,
  spacing: i,
  isVisible: m,
  onAnimationRest: c,
  onNonAccessibleClick: p ? this.handleClick : void 0,
  allowOverflow: d,
  children: I
});
  }
  show() {
let {
  delay: e,
  overflowOnly: t
} = this.props;
if (t) {
  let e = c.findDOMNode(this);
  if (null == e || (0, E.k)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth)
    return;
}
null != e ? this.showTimeout.start(e, () => this.toggleShow(!0), !1) : this.toggleShow(!0);
  }
  hide() {
this.showTimeout.stop(), this.toggleShow(!1);
  }
  toggleShow(e) {
if (this.state.shouldShowTooltip !== e) {
  var t, n, r, i;
  e ? null === (t = (n = this.props).onTooltipShow) || void 0 === t || t.call(n) : null === (r = (i = this.props).onTooltipHide) || void 0 === r || r.call(i), c.flushSync(() => {
    this.setState({
      shouldShowTooltip: e
    });
  });
}
  }
  constructor(...e) {
super(...e), S(this, 'showTimeout', new f.V7()), S(this, 'domElementRef', o.createRef()), S(this, 'hasDomElement', !1), S(this, 'state', {
  shouldShowTooltip: !1
}), S(this, 'handleMouseEnter', () => {
  !((_.tq || _.Em) && !0 === this.props.clickableOnMobile) && this.show();
}), S(this, 'handleMouseLeave', () => {
  !((_.tq || _.Em) && !0 === this.props.clickableOnMobile) && this.hide();
}), S(this, 'handleFocus', () => {
  I.Z.keyboardModeEnabled && this.show();
}), S(this, 'handleBlur', () => {
  this.hide();
}), S(this, 'handleClick', () => {
  let e = this.hasDomElement;
  e && this.props.hideOnClick ? this.hide() : !e && (_.tq || _.Em) && !0 === this.props.clickableOnMobile && this.show();
}), S(this, 'handleContextMenu', () => {
  this.hide();
});
  }
}
S(D, 'Colors', r), S(D, 'defaultProps', {
  hideOnClick: !0,
  position: 'top',
  color: 'primary',
  forceOpen: !1,
  spacing: 8,
  shouldShow: !0,
  allowOverflow: !1,
  overflowOnly: !1
});
let L = e => {
  let {
children: t,
className: n,
element: r = 'div',
...i
  } = e;
  return (0, s.jsx)(D, {
...i,
children: e => o.createElement(r, null != n ? {
  ...e,
  className: n
} : e, t)
  });
};