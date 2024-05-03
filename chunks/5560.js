"use strict";
n.r(t), n.d(t, {
  TutorialIndicator: function() {
    return I
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("699581"),
  d = n("374470"),
  c = n("442837"),
  f = n("481060"),
  h = n("260300"),
  m = n("819640"),
  p = n("451478"),
  E = n("486458"),
  C = n("21825"),
  g = n("232495"),
  S = n("10401"),
  _ = n("11285");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class I extends l.PureComponent {
  componentDidMount() {
    this.updateCache()
  }
  componentDidUpdate(e) {
    let {
      tutorialId: t,
      origin: {
        x: n,
        y: a
      },
      targetWidth: l,
      targetHeight: s,
      position: i,
      offset: r
    } = e;
    (this.props.tutorialId !== t || this.props.origin.x !== n || this.props.origin.y !== a || this.props.targetWidth !== l || this.props.targetHeight !== s || this.props.position !== i || this.props.offset.x !== r.x || this.props.offset.y !== r.y) && this.updateCache()
  }
  updateCache() {
    var e, t;
    let n = (0, u.findDOMNode)(this);
    if (null == n || !(0, d.isElement)(n, HTMLElement)) return;
    let {
      offsetWidth: a,
      offsetHeight: l
    } = n, s = {
      offsetX: (this.props.targetWidth - a) / 2,
      offsetY: (this.props.targetHeight - l) / 2
    };
    switch (this.props.position) {
      case "left":
        s.offsetX = -a;
        break;
      case "right":
        s.offsetX = this.props.targetWidth;
        break;
      case "bottom":
        s.offsetY = this.props.targetHeight;
        break;
      default:
        s.offsetY = -l
    }
    s.offsetX += null !== (e = this.props.offset.x) && void 0 !== e ? e : 0, s.offsetY += null !== (t = this.props.offset.y) && void 0 !== t ? t : 0, this.setState(s)
  }
  handleSkipTips() {
    h.default.suppressAll()
  }
  getTutorialPopoutText() {
    let {
      tutorialId: e
    } = this.props;
    return (0, g.getTutorialPopoutText)(e)
  }
  render() {
    let {
      tutorialId: e,
      autoInvert: t,
      focused: n,
      origin: l
    } = this.props, s = (0, C.getTutorialPopoutAttributes)(e);
    if (null == s) return null;
    let {
      media: r,
      textAlign: o,
      isLongText: u,
      highPriority: d,
      spacing: c,
      arrowAlignment: h = E.ArrowAlignments.TOP,
      popoutPosition: m
    } = s, {
      offsetX: p,
      offsetY: g
    } = this.state, S = {
      left: null != p ? l.x + p : void 0,
      top: null != g ? l.y + g : void 0
    }, T = e => {
      let t = n && !e;
      return !0 !== d ? null : (0, a.jsxs)("div", {
        children: [(0, a.jsx)("div", {
          className: i()(_.top, {
            [_.animating]: t,
            [_.notAnimating]: !t
          })
        }), (0, a.jsx)("div", {
          className: i()(_.bottom, {
            [_.animating]: t,
            [_.notAnimating]: !t
          })
        })]
      })
    }, I = e => {
      let t = n && !e;
      return {
        [_.animating]: t,
        [_.notAnimating]: !t,
        [_.highPriority]: d
      }
    }, A = this.getTutorialPopoutText();
    return (0, a.jsx)(E.default, {
      position: m,
      renderMedia: r,
      textAlign: o,
      spacing: c,
      isLongText: u,
      uniqueId: e,
      autoInvert: t,
      arrowAlignment: h,
      onSkipAll: this.handleSkipTips,
      onComplete: this.handleDismiss,
      ...A,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, a.jsx)(f.Clickable, {
          ...e,
          className: _.indicator,
          style: S,
          children: (0, a.jsxs)("div", {
            className: i()(_.animationContainer, I(n)),
            children: [T(n), (0, a.jsx)("div", {
              className: i()(_.innerCircle, I(n))
            }), (0, a.jsx)("div", {
              className: i()(_.outerCircle, I(n))
            })]
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), T(this, "state", {
      offsetX: null,
      offsetY: null
    }), T(this, "handleDismiss", () => {
      h.default.dismiss(this.props.tutorialId)
    })
  }
}
t.default = function() {
  let {
    indicators: e,
    tutorialData: t,
    windowFocused: n,
    shouldShowAny: l
  } = (0, c.useStateFromStoresObject)([S.default, p.default, m.default], () => ({
    indicators: S.default.getIndicators(),
    tutorialData: S.default.getData(),
    shouldShowAny: S.default.shouldShowAnyIndicators() && !m.default.hasLayers(),
    windowFocused: p.default.isFocused()
  }));
  return l ? (0, a.jsx)(a.Fragment, {
    children: Object.entries(e).map(e => {
      let [l, s] = e, i = t[l];
      return o()(null != i, "Missing tutorial definition for ".concat(l)), (0, a.jsx)(I, {
        tutorialId: l,
        tutorialDefinition: i,
        focused: n,
        ...s
      }, l)
    })
  }) : null
}