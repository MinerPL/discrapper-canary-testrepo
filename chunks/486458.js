"use strict";
n.r(t), n.d(t, {
  ArrowAlignments: function() {
    return l
  },
  TextAlignments: function() {
    return a
  },
  default: function() {
    return I
  }
}), n("47120");
var a, l, s, i, r, o = n("735250"),
  u = n("470079"),
  d = n("803997"),
  c = n.n(d),
  f = n("780384"),
  h = n("481060"),
  m = n("626135"),
  p = n("792125"),
  E = n("285952"),
  C = n("981631"),
  g = n("689938"),
  S = n("903438");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(i = a || (a = {})).CENTER = "center", i.LEFT = "left", (r = l || (l = {})).TOP = "top", r.MIDDLE = "middle";
class T extends u.PureComponent {
  componentDidMount() {
    let {
      uniqueId: e
    } = this.props;
    m.default.track(C.AnalyticEvents.SHOW_TUTORIAL, {
      tutorial: e
    })
  }
  componentWillUnmount() {
    m.default.track(C.AnalyticEvents.CLOSE_TUTORIAL, {
      tutorial: this.props.uniqueId,
      acknowledged: this.state.confirmed
    })
  }
  render() {
    let {
      renderMedia: e,
      textAlign: t,
      isLongText: n,
      title: a,
      body: l,
      className: s,
      forceTheme: i,
      onClickSkipAll: r
    } = this.props, u = "left" === t || n, d = "center" === t || !u;
    return (0, o.jsxs)(h.Dialog, {
      className: c()(S.popoutRoot, s),
      children: [null != e && (0, o.jsx)(E.default, {
        className: S.mediaContainer,
        justify: u ? E.default.Justify.START : E.default.Justify.CENTER,
        children: e()
      }), (0, o.jsx)(h.H, {
        className: c()({
          [S.titleCenter]: d,
          [S.titleLeft]: u
        }),
        children: a
      }), (0, o.jsx)("string" == typeof l ? "p" : "div", {
        className: c()({
          [S.bodyCenter]: d,
          [S.bodyLeft]: u
        }),
        children: l
      }), (0, o.jsxs)(E.default, {
        className: S.buttonContainer,
        justify: u ? E.default.Justify.BETWEEN : E.default.Justify.CENTER,
        children: [(0, o.jsx)(h.Button, {
          size: h.ButtonSizes.SMALL,
          onClick: this.handleDismiss,
          children: g.default.Messages.TUTORIAL_CLOSE
        }), (0, o.jsx)(h.Button, {
          size: h.ButtonSizes.SMALL,
          look: h.Button.Looks.BLANK,
          onClick: r,
          color: (0, f.isThemeLight)(i) ? h.Button.Colors.PRIMARY : h.Button.Colors.WHITE,
          className: u ? S.buttonSkipLeftAlign : S.buttonSkipCenterAlign,
          children: g.default.Messages.SKIP_ALL_TIPS
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      confirmed: !1
    }), _(this, "handleDismiss", () => {
      let {
        onClickComplete: e
      } = this.props;
      this.setState({
        confirmed: !0
      }, () => null == e ? void 0 : e())
    })
  }
}
class I extends(s = u.PureComponent) {
  render() {
    let {
      renderMedia: e,
      textAlign: t,
      onComplete: n,
      onSkipAll: a,
      isLongText: l,
      title: s,
      body: i,
      children: r,
      spacing: u,
      forceTheme: d,
      ...c
    } = this.props, f = "top" === c.position || "bottom" === c.position ? "center" : "top";
    return (0, o.jsx)(h.Popout, {
      ...c,
      align: f,
      spacing: null != u ? u : 0,
      renderPopout: this.renderPopoutContent,
      nudgeAlignIntoViewport: !0,
      children: r
    })
  }
  constructor(...e) {
    super(...e), _(this, "onClickComplete", e => {
      e(), this.props.onComplete()
    }), _(this, "onClickSkipAll", e => {
      let {
        onSkipAll: t,
        uniqueId: n
      } = this.props;
      e(), t(), m.default.track(C.AnalyticEvents.DISMISS_ALL_TUTORIALS, {
        tutorial: n
      })
    }), _(this, "renderPopoutContent", e => {
      let {
        closePopout: t,
        position: n
      } = e, {
        forceTheme: a,
        isLongText: l,
        arrowAlignment: s,
        renderMedia: i
      } = this.props, r = null != i;
      return (0, o.jsx)(T, {
        ...this.props,
        className: c()({
          [S.bottom]: "bottom" === n,
          [S.contentNarrowNoMedia]: !l && !r,
          [S.contentNarrowWithMedia]: !l && r,
          [S.contentWideNoMedia]: l && !r,
          [S.contentWideWithMedia]: l && r,
          [S.right]: "right" === n,
          [S.top]: "top" === n,
          [S.left]: "left" === n,
          [S.arrowAlignmentTop]: "top" === s,
          [S.arrowAlignmentMiddle]: "middle" === s,
          "force-theme": null != a
        }, (0, p.getThemeClass)(a)),
        onClickComplete: () => this.onClickComplete(t),
        onClickSkipAll: () => this.onClickSkipAll(t)
      })
    })
  }
}
_(I, "TextAlignments", a), _(I, "defaultProps", {
  textAlign: "left"
})