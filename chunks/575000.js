"use strict";
s.r(t), s.d(t, {
  FIRST_TIER_KEY: function() {
    return N
  }
}), s("47120");
var a, l = s("735250"),
  n = s("470079"),
  i = s("803997"),
  r = s.n(i),
  o = s("718017"),
  d = s("153832"),
  u = s("374470"),
  c = s("477690"),
  E = s("481060"),
  _ = s("624138"),
  I = s("263704"),
  T = s("981631"),
  S = s("689938"),
  f = s("246590");

function m(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let N = -1,
  g = (0, _.cssValueToNumber)(c.default.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
  h = (0, _.cssValueToNumber)(c.default.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
  C = {
    tension: 140,
    friction: 30
  },
  R = {
    tension: 800,
    friction: 20
  };
class x extends(a = n.Component) {
  getTotalHeight() {
    let {
      tiers: e
    } = this.props;
    return e[e.length - 1].y + h / 2
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
      foregroundTooltipY: a
    } = this.state;
    if (!s || null == this.foregroundTooltipElementRef.current) return null;
    let n = t[this.getCurrentTierIndex() + 1],
      i = null != n ? n.numRequired : null,
      r = null != i ? i - e : null;
    return (0, l.jsxs)(E.TooltipLayer, {
      targetElementRef: this.foregroundTooltipElementRef,
      position: "right",
      color: E.Tooltip.Colors.BLACK,
      tooltipClassName: f.foregroundTooltip,
      children: [(0, l.jsx)("div", {
        children: S.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_NUM_SUBSCRIPTIONS.format({
          numSubscriptions: e
        })
      }), null != r && null != n ? (0, l.jsx)("div", {
        className: f.tooltipMuted,
        children: S.default.Messages.PREMIUM_GUILD_SETTINGS_MEMBERS_SUBSCRIBED_NEEDED.format({
          number: r,
          tier: n.name
        })
      }) : null]
    }, a)
  }
  renderTierMarkerTooltip(e) {
    let {
      progress: t
    } = this.props;
    if (null == e.name || e.key === T.BoostedGuildTiers.NONE) return null;
    let s = Math.min(t, e.numRequired);
    return (0, l.jsxs)("div", {
      className: f.__invalid_tierTooltip,
      children: [(0, l.jsx)("div", {
        children: e.name
      }), (0, l.jsx)("div", {
        children: S.default.Messages.PREMIUM_GUILD_SETTINGS_X_OF_Y_SUBSCRIPTIONS.format({
          subscribers: s,
          numRequired: e.numRequired
        })
      })]
    })
  }
  renderTierMarker(e, t, s) {
    var a;
    let n;
    let {
      progress: i,
      tiers: r
    } = this.props, d = r[s], u = i >= e.numRequired, c = null != d && e.key === d.key, _ = e.key === r[0].key;
    n = _ ? f.tierFirst : c ? f.tierCurrent : u ? f.tierAccomplished : f.tierInProgress;
    let T = e.y - (_ ? 0 : h / 2),
      S = this.state.tierMarkerActive === t,
      m = !_ && c && S;
    return (0, l.jsx)(E.Tooltip, {
      text: this.renderTierMarkerTooltip(e),
      position: "right",
      "aria-label": null !== (a = e.name) && void 0 !== a ? a : "",
      children: e => (0, l.jsx)(o.Spring, {
        from: {
          scale: 1
        },
        to: {
          scale: m ? 1.625 : 1
        },
        config: R,
        children: t => (0, l.jsx)(o.animated.div, {
          ...e,
          className: n,
          style: {
            top: T,
            transform: t.scale.interpolate(e => "scale(".concat(e, ")"))
          },
          children: m && (0, l.jsx)(I.default, {
            className: f.currentTierIcon
          })
        })
      })
    }, e.key)
  }
  renderProgressMask(e) {
    let {
      tiers: t
    } = this.props;
    return (0, l.jsxs)("mask", {
      id: "".concat(this.tierMarkerMaskId),
      children: [(0, l.jsx)("rect", {
        x: "0",
        y: "0",
        width: g,
        height: e,
        fill: "white"
      }), t.map(e => (0, l.jsx)("circle", {
        cx: g / 2,
        cy: e.y,
        r: g / 2,
        fill: "black"
      }, e.key))]
    })
  }
  renderProgressBar(e, t) {
    let s = this.getProgressHeight(t),
      {
        finishedInitialAnimation: a,
        showForegroundTooltip: n
      } = this.state;
    return (0, l.jsxs)("g", {
      mask: "url(#".concat(this.tierMarkerMaskId, ")"),
      children: [(0, l.jsx)("rect", {
        className: f.background,
        height: e,
        fill: "currentColor"
      }), (0, l.jsx)(o.Spring, {
        from: {
          height: 0
        },
        to: {
          height: s
        },
        config: C,
        delay: a ? 0 : this.props.initialAnimationDelay,
        onChange: this.handleForegroundFrame,
        onRest: a ? void 0 : this.handleFinishedInitialAnimation,
        children: e => (0, l.jsx)(o.animated.rect, {
          className: f.foreground,
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
    } = this.props, s = this.getCurrentTierIndex(), a = this.getTotalHeight();
    return (0, l.jsxs)("div", {
      className: r()(e, f.progressBar),
      style: {
        height: a
      },
      children: [(0, l.jsxs)("svg", {
        viewBox: "0 0 ".concat(g, " ").concat(a),
        width: g,
        height: a,
        children: [this.renderProgressMask(a), this.renderProgressBar(a, s)]
      }), (0, l.jsx)("div", {
        ref: this.foregroundTooltipElementRef,
        style: {
          top: this.state.foregroundTooltipY
        },
        className: f.foregroundTooltipPosition
      }), t.map((e, t) => this.renderTierMarker(e, t, s)), this.renderForegroundTooltip()]
    })
  }
  constructor(...e) {
    super(...e), m(this, "state", {
      showForegroundTooltip: !1,
      foregroundTooltipY: 0,
      tierMarkerActive: 0,
      finishedInitialAnimation: !1
    }), m(this, "foregroundTooltipElementRef", n.createRef()), m(this, "tierMarkerMaskId", (0, d.v4)()), m(this, "handleForegroundMouseEnter", e => {
      this.setState({
        showForegroundTooltip: !0
      }), this.handleForegroundMouseMove(e)
    }), m(this, "handleForegroundMouseMove", e => {
      if (!(0, u.isElement)(e.target)) return;
      let t = e.target.getBoundingClientRect(),
        s = e.clientY - t.top;
      s !== this.state.foregroundTooltipY && this.setState({
        foregroundTooltipY: s
      })
    }), m(this, "handleForegroundMouseLeave", () => {
      this.setState({
        showForegroundTooltip: !1
      })
    }), m(this, "handleForegroundFrame", e => {
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
    }), m(this, "handleFinishedInitialAnimation", () => {
      this.setState({
        finishedInitialAnimation: !0
      })
    })
  }
}
m(x, "defaultProps", {
  initialAnimationDelay: 0
}), t.default = x