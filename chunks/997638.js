n.d(t, {
  ZP: function() {
return T;
  },
  cy: function() {
return a;
  },
  iu: function() {
return i;
  }
}), n(47120);
var i, a, s, l, r, o = n(735250),
  c = n(470079),
  u = n(120356),
  d = n.n(u),
  h = n(780384),
  m = n(481060),
  p = n(626135),
  _ = n(792125),
  f = n(600164),
  E = n(981631),
  g = n(689938),
  C = n(834095);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(l = i || (i = {})).CENTER = 'center', l.LEFT = 'left', (r = a || (a = {})).TOP = 'top', r.MIDDLE = 'middle';
class x extends c.PureComponent {
  componentDidMount() {
let {
  uniqueId: e
} = this.props;
p.default.track(E.rMx.SHOW_TUTORIAL, {
  tutorial: e
});
  }
  componentWillUnmount() {
p.default.track(E.rMx.CLOSE_TUTORIAL, {
  tutorial: this.props.uniqueId,
  acknowledged: this.state.confirmed
});
  }
  render() {
let {
  renderMedia: e,
  textAlign: t,
  isLongText: n,
  title: i,
  body: a,
  className: s,
  forceTheme: l,
  onClickSkipAll: r
} = this.props, c = 'left' === t || n, u = 'center' === t || !c;
return (0, o.jsxs)(m.Dialog, {
  className: d()(C.popoutRoot, s),
  children: [
    null != e && (0, o.jsx)(f.Z, {
      className: C.mediaContainer,
      justify: c ? f.Z.Justify.START : f.Z.Justify.CENTER,
      children: e()
    }),
    (0, o.jsx)(m.H, {
      className: d()({
        [C.titleCenter]: u,
        [C.titleLeft]: c
      }),
      children: i
    }),
    (0, o.jsx)('string' == typeof a ? 'p' : 'div', {
      className: d()({
        [C.bodyCenter]: u,
        [C.bodyLeft]: c
      }),
      children: a
    }),
    (0, o.jsxs)(f.Z, {
      className: C.buttonContainer,
      justify: c ? f.Z.Justify.BETWEEN : f.Z.Justify.CENTER,
      children: [
        (0, o.jsx)(m.Button, {
          size: m.ButtonSizes.SMALL,
          onClick: this.handleDismiss,
          children: g.Z.Messages.TUTORIAL_CLOSE
        }),
        (0, o.jsx)(m.Button, {
          size: m.ButtonSizes.SMALL,
          look: m.Button.Looks.BLANK,
          onClick: r,
          color: (0, h.ap)(l) ? m.Button.Colors.PRIMARY : m.Button.Colors.WHITE,
          className: c ? C.buttonSkipLeftAlign : C.buttonSkipCenterAlign,
          children: g.Z.Messages.SKIP_ALL_TIPS
        })
      ]
    })
  ]
});
  }
  constructor(...e) {
super(...e), I(this, 'state', {
  confirmed: !1
}), I(this, 'handleDismiss', () => {
  let {
    onClickComplete: e
  } = this.props;
  this.setState({
    confirmed: !0
  }, () => null == e ? void 0 : e());
});
  }
}
class T extends(s = c.PureComponent) {
  render() {
let {
  renderMedia: e,
  textAlign: t,
  onComplete: n,
  onSkipAll: i,
  isLongText: a,
  title: s,
  body: l,
  children: r,
  spacing: c,
  forceTheme: u,
  ...d
} = this.props, h = 'top' === d.position || 'bottom' === d.position ? 'center' : 'top';
return (0, o.jsx)(m.Popout, {
  ...d,
  align: h,
  spacing: null != c ? c : 0,
  renderPopout: this.renderPopoutContent,
  nudgeAlignIntoViewport: !0,
  children: r
});
  }
  constructor(...e) {
super(...e), I(this, 'onClickComplete', e => {
  e(), this.props.onComplete();
}), I(this, 'onClickSkipAll', e => {
  let {
    onSkipAll: t,
    uniqueId: n
  } = this.props;
  e(), t(), p.default.track(E.rMx.DISMISS_ALL_TUTORIALS, {
    tutorial: n
  });
}), I(this, 'renderPopoutContent', e => {
  let {
    closePopout: t,
    position: n
  } = e, {
    forceTheme: i,
    isLongText: a,
    arrowAlignment: s,
    renderMedia: l
  } = this.props, r = null != l;
  return (0, o.jsx)(x, {
    ...this.props,
    className: d()({
      [C.bottom]: 'bottom' === n,
      [C.contentNarrowNoMedia]: !a && !r,
      [C.contentNarrowWithMedia]: !a && r,
      [C.contentWideNoMedia]: a && !r,
      [C.contentWideWithMedia]: a && r,
      [C.right]: 'right' === n,
      [C.top]: 'top' === n,
      [C.left]: 'left' === n,
      [C.arrowAlignmentTop]: 'top' === s,
      [C.arrowAlignmentMiddle]: 'middle' === s,
      'force-theme': null != i
    }, (0, _.Q)(i)),
    onClickComplete: () => this.onClickComplete(t),
    onClickSkipAll: () => this.onClickSkipAll(t)
  });
});
  }
}
I(T, 'TextAlignments', i), I(T, 'defaultProps', {
  textAlign: 'left'
});