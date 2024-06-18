"use strict";
t.d(s, {
  x: function() {
    return h
  }
}), t(47120);
var n, i = t(735250),
  l = t(470079),
  a = t(120356),
  r = t.n(a),
  o = t(920906),
  c = t(772848),
  d = t(374470),
  u = t(477690),
  E = t(481060),
  _ = t(624138),
  I = t(263704),
  T = t(981631),
  N = t(689938),
  m = t(589737);

function S(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let h = -1,
  g = (0, _.Mg)(u.Z.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
  x = (0, _.Mg)(u.Z.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
  C = {
    tension: 140,
    friction: 30
  },
  R = {
    tension: 800,
    friction: 20
  };
class L extends(n = l.Component) {
  getTotalHeight() {
    let {
      tiers: e
    } = this.props;
    return e[e.length - 1].y + x / 2
  }
  getProgressHeight(e) {
    let {
      tiers: s,
      progress: t
    } = this.props, n = s[e], i = s[e + 1];
    if (null == i || t === n.numRequired) return n.y;
    let l = i.y - n.y,
      a = i.numRequired - n.numRequired,
      r = t - n.numRequired;
    return n.y + r / a * l
  }
  getCurrentTierIndex() {
    let {
      tiers: e,
      progress: s
    } = this.props;
    for (let t = e.length - 1; t > 0; t--)
      if (s >= e[t].numRequired) return t;
    return 0
  }
  renderForegroundTooltip() {
    let {
      progress: e,
      tiers: s
    } = this.props, {
      showForegroundTooltip: t,
      foregroundTooltipY: n
    } = this.state;
    if (!t || null == this.foregroundTooltipElementRef.current) return null;
    let l = s[this.getCurrentTierIndex() + 1],
      a = null != l ? l.numRequired : null,
      r = null != a ? a - e : null;
    return (0, i.jsxs)(E.TooltipLayer, {
      targetElementRef: this.foregroundTooltipElementRef,
      position: "right",
      color: E.Tooltip.Colors.BLACK,
      tooltipClassName: m.foregroundTooltip,
      children: [(0, i.jsx)("div", {
        children: N.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_NUM_SUBSCRIPTIONS.format({
          numSubscriptions: e
        })
      }), null != r && null != l ? (0, i.jsx)("div", {
        className: m.tooltipMuted,
        children: N.Z.Messages.PREMIUM_GUILD_SETTINGS_MEMBERS_SUBSCRIBED_NEEDED.format({
          number: r,
          tier: l.name
        })
      }) : null]
    }, n)
  }
  renderTierMarkerTooltip(e) {
    let {
      progress: s
    } = this.props;
    if (null == e.name || e.key === T.Eu4.NONE) return null;
    let t = Math.min(s, e.numRequired);
    return (0, i.jsxs)("div", {
      className: m.__invalid_tierTooltip,
      children: [(0, i.jsx)("div", {
        children: e.name
      }), (0, i.jsx)("div", {
        children: N.Z.Messages.PREMIUM_GUILD_SETTINGS_X_OF_Y_SUBSCRIPTIONS.format({
          subscribers: t,
          numRequired: e.numRequired
        })
      })]
    })
  }
  renderTierMarker(e, s, t) {
    var n;
    let l;
    let {
      progress: a,
      tiers: r
    } = this.props, c = r[t], d = a >= e.numRequired, u = null != c && e.key === c.key, _ = e.key === r[0].key;
    l = _ ? m.tierFirst : u ? m.tierCurrent : d ? m.tierAccomplished : m.tierInProgress;
    let T = e.y - (_ ? 0 : x / 2),
      N = this.state.tierMarkerActive === s,
      S = !_ && u && N;
    return (0, i.jsx)(E.Tooltip, {
      text: this.renderTierMarkerTooltip(e),
      position: "right",
      "aria-label": null !== (n = e.name) && void 0 !== n ? n : "",
      children: e => (0, i.jsx)(o.Spring, {
        from: {
          scale: 1
        },
        to: {
          scale: S ? 1.625 : 1
        },
        config: R,
        children: s => (0, i.jsx)(o.animated.div, {
          ...e,
          className: l,
          style: {
            top: T,
            transform: s.scale.interpolate(e => "scale(".concat(e, ")"))
          },
          children: S && (0, i.jsx)(I.Z, {
            className: m.currentTierIcon
          })
        })
      })
    }, e.key)
  }
  renderProgressMask(e) {
    let {
      tiers: s
    } = this.props;
    return (0, i.jsxs)("mask", {
      id: "".concat(this.tierMarkerMaskId),
      children: [(0, i.jsx)("rect", {
        x: "0",
        y: "0",
        width: g,
        height: e,
        fill: "white"
      }), s.map(e => (0, i.jsx)("circle", {
        cx: g / 2,
        cy: e.y,
        r: g / 2,
        fill: "black"
      }, e.key))]
    })
  }
  renderProgressBar(e, s) {
    let t = this.getProgressHeight(s),
      {
        finishedInitialAnimation: n,
        showForegroundTooltip: l
      } = this.state;
    return (0, i.jsxs)("g", {
      mask: "url(#".concat(this.tierMarkerMaskId, ")"),
      children: [(0, i.jsx)("rect", {
        className: m.background,
        height: e,
        fill: "currentColor"
      }), (0, i.jsx)(o.Spring, {
        from: {
          height: 0
        },
        to: {
          height: t
        },
        config: C,
        delay: n ? 0 : this.props.initialAnimationDelay,
        onChange: this.handleForegroundFrame,
        onRest: n ? void 0 : this.handleFinishedInitialAnimation,
        children: e => (0, i.jsx)(o.animated.rect, {
          className: m.foreground,
          height: e.height.interpolate(e => Math.max(0, e)),
          onMouseEnter: this.handleForegroundMouseEnter,
          onMouseLeave: this.handleForegroundMouseLeave,
          onMouseMove: l ? this.handleForegroundMouseMove : void 0,
          fill: "currentColor"
        })
      })]
    })
  }
  render() {
    let {
      className: e,
      tiers: s
    } = this.props, t = this.getCurrentTierIndex(), n = this.getTotalHeight();
    return (0, i.jsxs)("div", {
      className: r()(e, m.progressBar),
      style: {
        height: n
      },
      children: [(0, i.jsxs)("svg", {
        viewBox: "0 0 ".concat(g, " ").concat(n),
        width: g,
        height: n,
        children: [this.renderProgressMask(n), this.renderProgressBar(n, t)]
      }), (0, i.jsx)("div", {
        ref: this.foregroundTooltipElementRef,
        style: {
          top: this.state.foregroundTooltipY
        },
        className: m.foregroundTooltipPosition
      }), s.map((e, s) => this.renderTierMarker(e, s, t)), this.renderForegroundTooltip()]
    })
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      showForegroundTooltip: !1,
      foregroundTooltipY: 0,
      tierMarkerActive: 0,
      finishedInitialAnimation: !1
    }), S(this, "foregroundTooltipElementRef", l.createRef()), S(this, "tierMarkerMaskId", (0, c.Z)()), S(this, "handleForegroundMouseEnter", e => {
      this.setState({
        showForegroundTooltip: !0
      }), this.handleForegroundMouseMove(e)
    }), S(this, "handleForegroundMouseMove", e => {
      if (!(0, d.k)(e.target)) return;
      let s = e.target.getBoundingClientRect(),
        t = e.clientY - s.top;
      t !== this.state.foregroundTooltipY && this.setState({
        foregroundTooltipY: t
      })
    }), S(this, "handleForegroundMouseLeave", () => {
      this.setState({
        showForegroundTooltip: !1
      })
    }), S(this, "handleForegroundFrame", e => {
      let {
        height: s
      } = e, {
        tiers: t,
        progress: n,
        onAnimatedTierMaker: i
      } = this.props, {
        tierMarkerActive: l
      } = this.state;
      for (let e = t.length - 1; e > 0; e--) {
        let a = t[e],
          r = l === e;
        if (s + 20 >= a.y && n >= a.numRequired) {
          !r && (this.setState({
            tierMarkerActive: e
          }), null != i && i(a));
          return
        }
      }
    }), S(this, "handleFinishedInitialAnimation", () => {
      this.setState({
        finishedInitialAnimation: !0
      })
    })
  }
}
S(L, "defaultProps", {
  initialAnimationDelay: 0
}), s.Z = L