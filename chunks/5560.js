n.d(t, {
  V: function() {
return T;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(512722),
  o = n.n(r),
  c = n(699581),
  u = n(374470),
  d = n(442837),
  h = n(481060),
  p = n(260300),
  m = n(819640),
  _ = n(451478),
  f = n(486458),
  E = n(21825),
  g = n(232495),
  C = n(10401),
  I = n(847418);

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class T extends a.PureComponent {
  componentDidMount() {
this.updateCache();
  }
  componentDidUpdate(e) {
let {
  tutorialId: t,
  origin: {
    x: n,
    y: i
  },
  targetWidth: a,
  targetHeight: s,
  position: l,
  offset: r
} = e;
(this.props.tutorialId !== t || this.props.origin.x !== n || this.props.origin.y !== i || this.props.targetWidth !== a || this.props.targetHeight !== s || this.props.position !== l || this.props.offset.x !== r.x || this.props.offset.y !== r.y) && this.updateCache();
  }
  updateCache() {
var e, t;
let n = (0, c.findDOMNode)(this);
if (null == n || !(0, u.k)(n, HTMLElement))
  return;
let {
  offsetWidth: i,
  offsetHeight: a
} = n, s = {
  offsetX: (this.props.targetWidth - i) / 2,
  offsetY: (this.props.targetHeight - a) / 2
};
switch (this.props.position) {
  case 'left':
    s.offsetX = -i;
    break;
  case 'right':
    s.offsetX = this.props.targetWidth;
    break;
  case 'bottom':
    s.offsetY = this.props.targetHeight;
    break;
  default:
    s.offsetY = -a;
}
s.offsetX += null !== (e = this.props.offset.x) && void 0 !== e ? e : 0, s.offsetY += null !== (t = this.props.offset.y) && void 0 !== t ? t : 0, this.setState(s);
  }
  handleSkipTips() {
p.Z.suppressAll();
  }
  getTutorialPopoutText() {
let {
  tutorialId: e
} = this.props;
return (0, g.k)(e);
  }
  render() {
let {
  tutorialId: e,
  autoInvert: t,
  focused: n,
  origin: a
} = this.props, s = (0, E.S)(e);
if (null == s)
  return null;
let {
  media: r,
  textAlign: o,
  isLongText: c,
  highPriority: u,
  spacing: d,
  arrowAlignment: p = f.cy.TOP,
  popoutPosition: m
} = s, {
  offsetX: _,
  offsetY: g
} = this.state, C = {
  left: null != _ ? a.x + _ : void 0,
  top: null != g ? a.y + g : void 0
}, x = e => {
  let t = n && !e;
  return !0 !== u ? null : (0, i.jsxs)('div', {
    children: [
      (0, i.jsx)('div', {
        className: l()(I.top, {
          [I.animating]: t,
          [I.notAnimating]: !t
        })
      }),
      (0, i.jsx)('div', {
        className: l()(I.bottom, {
          [I.animating]: t,
          [I.notAnimating]: !t
        })
      })
    ]
  });
}, T = e => {
  let t = n && !e;
  return {
    [I.animating]: t,
    [I.notAnimating]: !t,
    [I.highPriority]: u
  };
}, N = this.getTutorialPopoutText();
return (0, i.jsx)(f.ZP, {
  position: m,
  renderMedia: r,
  textAlign: o,
  spacing: d,
  isLongText: c,
  uniqueId: e,
  autoInvert: t,
  arrowAlignment: p,
  onSkipAll: this.handleSkipTips,
  onComplete: this.handleDismiss,
  ...N,
  children: (e, t) => {
    let {
      isShown: n
    } = t;
    return (0, i.jsx)(h.Clickable, {
      ...e,
      className: I.indicator,
      style: C,
      children: (0, i.jsxs)('div', {
        className: l()(I.animationContainer, T(n)),
        children: [
          x(n),
          (0, i.jsx)('div', {
            className: l()(I.innerCircle, T(n))
          }),
          (0, i.jsx)('div', {
            className: l()(I.outerCircle, T(n))
          })
        ]
      })
    });
  }
});
  }
  constructor(...e) {
super(...e), x(this, 'state', {
  offsetX: null,
  offsetY: null
}), x(this, 'handleDismiss', () => {
  p.Z.dismiss(this.props.tutorialId);
});
  }
}
t.Z = 12633 == n.j ? function() {
  let {
indicators: e,
tutorialData: t,
windowFocused: n,
shouldShowAny: a
  } = (0, d.cj)([
C.Z,
_.Z,
m.Z
  ], () => ({
indicators: C.Z.getIndicators(),
tutorialData: C.Z.getData(),
shouldShowAny: C.Z.shouldShowAnyIndicators() && !m.Z.hasLayers(),
windowFocused: _.Z.isFocused()
  }));
  return a ? (0, i.jsx)(i.Fragment, {
children: Object.entries(e).map(e => {
  let [a, s] = e, l = t[a];
  return o()(null != l, 'Missing tutorial definition for '.concat(a)), (0, i.jsx)(T, {
    tutorialId: a,
    tutorialDefinition: l,
    focused: n,
    ...s
  }, a);
})
  }) : null;
} : null;