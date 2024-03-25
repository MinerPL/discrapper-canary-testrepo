"use strict";
s.r(t), s.d(t, {
  FIRST_TIER_KEY: function() {
    return f
  },
  default: function() {
    return R
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("146606"),
  o = s("748820"),
  d = s("118810"),
  u = s("769846"),
  c = s("77078"),
  E = s("159885"),
  _ = s("36694"),
  I = s("49111"),
  T = s("782340"),
  S = s("443941");
let f = -1,
  m = (0, E.cssValueToNumber)(u.default.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
  N = (0, E.cssValueToNumber)(u.default.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
  g = {
    tension: 140,
    friction: 30
  },
  h = {
    tension: 800,
    friction: 20
  };
class C extends l.Component {
  getTotalHeight() {
    let {
      tiers: e
    } = this.props;
    return e[e.length - 1].y + N / 2
  }
  getProgressHeight(e) {
    let {
      tiers: t,
      progress: s
    } = this.props, a = t[e], l = t[e + 1];
    if (null == l || s === a.numRequired) return a.y;
    let n = l.y - a.y,
      i = l.numRequired - a.numRequired,
      r = s - a.numRequired;
    return a.y + r / i * n
  }
  getCurrentTierIndex() {
    let {
      tiers: e,
      progress: t
    } = this.props;
    for (let s = e.length - 1; s > 0; s--)
      if (t >= e[s].numRequired) return s;
    return 0
  }
  renderForegroundTooltip() {
    let {
      progress: e,
      tiers: t
    } = this.props, {
      showForegroundTooltip: s,
      foregroundTooltipY: l
    } = this.state;
    if (!s || null == this.foregroundTooltipElementRef.current) return null;
    let n = this.getCurrentTierIndex(),
      i = t[n + 1],
      r = null != i ? i.numRequired : null,
      o = null != r ? r - e : null;
    return (0, a.jsxs)(c.TooltipLayer, {
      targetElementRef: this.foregroundTooltipElementRef,
      position: "right",
      color: c.Tooltip.Colors.BLACK,
      tooltipClassName: S.foregroundTooltip,
      children: [(0, a.jsx)("div", {
        children: T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_NUM_SUBSCRIPTIONS.format({
          numSubscriptions: e
        })
      }), null != o && null != i ? (0, a.jsx)("div", {
        className: S.tooltipMuted,
        children: T.default.Messages.PREMIUM_GUILD_SETTINGS_MEMBERS_SUBSCRIBED_NEEDED.format({
          number: o,
          tier: i.name
        })
      }) : null]
    }, l)
  }
  renderTierMarkerTooltip(e) {
    let {
      progress: t
    } = this.props;
    if (null == e.name || e.key === I.BoostedGuildTiers.NONE) return null;
    let s = Math.min(t, e.numRequired);
    return (0, a.jsxs)("div", {
      className: S.tierTooltip,
      children: [(0, a.jsx)("div", {
        children: e.name
      }), (0, a.jsx)("div", {
        children: T.default.Messages.PREMIUM_GUILD_SETTINGS_X_OF_Y_SUBSCRIPTIONS.format({
          subscribers: s,
          numRequired: e.numRequired
        })
      })]
    })
  }
  renderTierMarker(e, t, s) {
    var l;
    let n;
    let {
      progress: i,
      tiers: o
    } = this.props, d = o[s], u = i >= e.numRequired, E = null != d && e.key === d.key, I = e.key === o[0].key;
    n = I ? S.tierFirst : E ? S.tierCurrent : u ? S.tierAccomplished : S.tierInProgress;
    let T = e.y - (I ? 0 : N / 2),
      f = this.state.tierMarkerActive === t,
      m = !I && E && f;
    return (0, a.jsx)(c.Tooltip, {
      text: this.renderTierMarkerTooltip(e),
      position: "right",
      "aria-label": null !== (l = e.name) && void 0 !== l ? l : "",
      children: e => (0, a.jsx)(r.Spring, {
        from: {
          scale: 1
        },
        to: {
          scale: m ? 1.625 : 1
        },
        config: h,
        children: t => (0, a.jsx)(r.animated.div, {
          ...e,
          className: n,
          style: {
            top: T,
            transform: t.scale.interpolate(e => "scale(".concat(e, ")"))
          },
          children: m && (0, a.jsx)(_.default, {
            className: S.currentTierIcon
          })
        })
      })
    }, e.key)
  }
  renderProgressMask(e) {
    let {
      tiers: t
    } = this.props;
    return (0, a.jsxs)("mask", {
      id: "".concat(this.tierMarkerMaskId),
      children: [(0, a.jsx)("rect", {
        x: "0",
        y: "0",
        width: m,
        height: e,
        fill: "white"
      }), t.map(e => (0, a.jsx)("circle", {
        cx: m / 2,
        cy: e.y,
        r: m / 2,
        fill: "black"
      }, e.key))]
    })
  }
  renderProgressBar(e, t) {
    let s = this.getProgressHeight(t),
      {
        finishedInitialAnimation: l,
        showForegroundTooltip: n
      } = this.state;
    return (0, a.jsxs)("g", {
      mask: "url(#".concat(this.tierMarkerMaskId, ")"),
      children: [(0, a.jsx)("rect", {
        className: S.background,
        height: e,
        fill: "currentColor"
      }), (0, a.jsx)(r.Spring, {
        from: {
          height: 0
        },
        to: {
          height: s
        },
        config: g,
        delay: l ? 0 : this.props.initialAnimationDelay,
        onChange: this.handleForegroundFrame,
        onRest: l ? void 0 : this.handleFinishedInitialAnimation,
        children: e => (0, a.jsx)(r.animated.rect, {
          className: S.foreground,
          height: e.height.interpolate(e => Math.max(0, e)),
          onMouseEnter: this.handleForegroundMouseEnter,
          onMouseLeave: this.handleForegroundMouseLeave,
          onMouseMove: n ? this.handleForegroundMouseMove : void 0,
          fill: "currentColor"
        })
      })]
    })
  }
  render() {
    let {
      className: e,
      tiers: t
    } = this.props, s = this.getCurrentTierIndex(), l = this.getTotalHeight();
    return (0, a.jsxs)("div", {
      className: i(e, S.progressBar),
      style: {
        height: l
      },
      children: [(0, a.jsxs)("svg", {
        viewBox: "0 0 ".concat(m, " ").concat(l),
        width: m,
        height: l,
        children: [this.renderProgressMask(l), this.renderProgressBar(l, s)]
      }), (0, a.jsx)("div", {
        ref: this.foregroundTooltipElementRef,
        style: {
          top: this.state.foregroundTooltipY
        },
        className: S.foregroundTooltipPosition
      }), t.map((e, t) => this.renderTierMarker(e, t, s)), this.renderForegroundTooltip()]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      showForegroundTooltip: !1,
      foregroundTooltipY: 0,
      tierMarkerActive: 0,
      finishedInitialAnimation: !1
    }, this.foregroundTooltipElementRef = l.createRef(), this.tierMarkerMaskId = (0, o.v4)(), this.handleForegroundMouseEnter = e => {
      this.setState({
        showForegroundTooltip: !0
      }), this.handleForegroundMouseMove(e)
    }, this.handleForegroundMouseMove = e => {
      if (!(0, d.isElement)(e.target)) return;
      let t = e.target.getBoundingClientRect(),
        s = e.clientY - t.top;
      s !== this.state.foregroundTooltipY && this.setState({
        foregroundTooltipY: s
      })
    }, this.handleForegroundMouseLeave = () => {
      this.setState({
        showForegroundTooltip: !1
      })
    }, this.handleForegroundFrame = e => {
      let {
        height: t
      } = e, {
        tiers: s,
        progress: a,
        onAnimatedTierMaker: l
      } = this.props, {
        tierMarkerActive: n
      } = this.state;
      for (let e = s.length - 1; e > 0; e--) {
        let i = s[e],
          r = n === e;
        if (t + 20 >= i.y && a >= i.numRequired) {
          !r && (this.setState({
            tierMarkerActive: e
          }), null != l && l(i));
          return
        }
      }
    }, this.handleFinishedInitialAnimation = () => {
      this.setState({
        finishedInitialAnimation: !0
      })
    }
  }
}
C.defaultProps = {
  initialAnimationDelay: 0
};
var R = C