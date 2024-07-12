n.d(t, {
  x: function() {
return S;
  }
}), n(47120);
var s, a = n(735250),
  i = n(470079),
  r = n(120356),
  l = n.n(r),
  o = n(338545),
  c = n(772848),
  d = n(374470),
  u = n(477690),
  _ = n(481060),
  I = n(624138),
  E = n(981631),
  T = n(689938),
  m = n(974458);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let S = -1,
  h = (0, I.Mg)(u.Z.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
  g = (0, I.Mg)(u.Z.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
  C = {
tension: 140,
friction: 30
  },
  x = {
tension: 800,
friction: 20
  };
class p extends(s = i.Component) {
  getTotalHeight() {
let {
  tiers: e
} = this.props;
return e[e.length - 1].y + g / 2;
  }
  getProgressHeight(e) {
let {
  tiers: t,
  progress: n
} = this.props, s = t[e], a = t[e + 1];
if (null == a || n === s.numRequired)
  return s.y;
let i = a.y - s.y,
  r = a.numRequired - s.numRequired,
  l = n - s.numRequired;
return s.y + l / r * i;
  }
  getCurrentTierIndex() {
let {
  tiers: e,
  progress: t
} = this.props;
for (let n = e.length - 1; n > 0; n--)
  if (t >= e[n].numRequired)
    return n;
return 0;
  }
  renderForegroundTooltip() {
let {
  progress: e,
  tiers: t
} = this.props, {
  showForegroundTooltip: n,
  foregroundTooltipY: s
} = this.state;
if (!n || null == this.foregroundTooltipElementRef.current)
  return null;
let i = t[this.getCurrentTierIndex() + 1],
  r = null != i ? i.numRequired : null,
  l = null != r ? r - e : null;
return (0, a.jsxs)(_.TooltipLayer, {
  targetElementRef: this.foregroundTooltipElementRef,
  position: 'right',
  color: _.Tooltip.Colors.BLACK,
  tooltipClassName: m.foregroundTooltip,
  children: [
    (0, a.jsx)('div', {
      children: T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_NUM_SUBSCRIPTIONS.format({
        numSubscriptions: e
      })
    }),
    null != l && null != i ? (0, a.jsx)('div', {
      className: m.tooltipMuted,
      children: T.Z.Messages.PREMIUM_GUILD_SETTINGS_MEMBERS_SUBSCRIBED_NEEDED.format({
        number: l,
        tier: i.name
      })
    }) : null
  ]
}, s);
  }
  renderTierMarkerTooltip(e) {
let {
  progress: t
} = this.props;
if (null == e.name || e.key === E.Eu4.NONE)
  return null;
let n = Math.min(t, e.numRequired);
return (0, a.jsxs)('div', {
  className: m.__invalid_tierTooltip,
  children: [
    (0, a.jsx)('div', {
      children: e.name
    }),
    (0, a.jsx)('div', {
      children: T.Z.Messages.PREMIUM_GUILD_SETTINGS_X_OF_Y_SUBSCRIPTIONS.format({
        subscribers: n,
        numRequired: e.numRequired
      })
    })
  ]
});
  }
  renderTierMarker(e, t, n) {
var s;
let i;
let {
  progress: r,
  tiers: l
} = this.props, c = l[n], d = r >= e.numRequired, u = null != c && e.key === c.key, I = e.key === l[0].key;
i = I ? m.tierFirst : u ? m.tierCurrent : d ? m.tierAccomplished : m.tierInProgress;
let E = e.y - (I ? 0 : g / 2),
  T = this.state.tierMarkerActive === t,
  N = !I && u && T;
return (0, a.jsx)(_.Tooltip, {
  text: this.renderTierMarkerTooltip(e),
  position: 'right',
  'aria-label': null !== (s = e.name) && void 0 !== s ? s : '',
  children: e => (0, a.jsx)(o.Spring, {
    from: {
      scale: 1
    },
    to: {
      scale: N ? 1.625 : 1
    },
    config: x,
    children: t => (0, a.jsx)(o.animated.div, {
      ...e,
      className: i,
      style: {
        top: E,
        transform: t.scale.interpolate(e => 'scale('.concat(e, ')'))
      },
      children: N && (0, a.jsx)(_.CheckmarkLargeIcon, {
        size: 'md',
        color: 'currentColor',
        className: m.currentTierIcon
      })
    })
  })
}, e.key);
  }
  renderProgressMask(e) {
let {
  tiers: t
} = this.props;
return (0, a.jsxs)('mask', {
  id: ''.concat(this.tierMarkerMaskId),
  children: [
    (0, a.jsx)('rect', {
      x: '0',
      y: '0',
      width: h,
      height: e,
      fill: 'white'
    }),
    t.map(e => (0, a.jsx)('circle', {
      cx: h / 2,
      cy: e.y,
      r: h / 2,
      fill: 'black'
    }, e.key))
  ]
});
  }
  renderProgressBar(e, t) {
let n = this.getProgressHeight(t),
  {
    finishedInitialAnimation: s,
    showForegroundTooltip: i
  } = this.state;
return (0, a.jsxs)('g', {
  mask: 'url(#'.concat(this.tierMarkerMaskId, ')'),
  children: [
    (0, a.jsx)('rect', {
      className: m.background,
      height: e,
      fill: 'currentColor'
    }),
    (0, a.jsx)(o.Spring, {
      from: {
        height: 0
      },
      to: {
        height: n
      },
      config: C,
      delay: s ? 0 : this.props.initialAnimationDelay,
      onChange: this.handleForegroundFrame,
      onRest: s ? void 0 : this.handleFinishedInitialAnimation,
      children: e => (0, a.jsx)(o.animated.rect, {
        className: m.foreground,
        height: e.height.interpolate(e => Math.max(0, e)),
        onMouseEnter: this.handleForegroundMouseEnter,
        onMouseLeave: this.handleForegroundMouseLeave,
        onMouseMove: i ? this.handleForegroundMouseMove : void 0,
        fill: 'currentColor'
      })
    })
  ]
});
  }
  render() {
let {
  className: e,
  tiers: t
} = this.props, n = this.getCurrentTierIndex(), s = this.getTotalHeight();
return (0, a.jsxs)('div', {
  className: l()(e, m.progressBar),
  style: {
    height: s
  },
  children: [
    (0, a.jsxs)('svg', {
      viewBox: '0 0 '.concat(h, ' ').concat(s),
      width: h,
      height: s,
      children: [
        this.renderProgressMask(s),
        this.renderProgressBar(s, n)
      ]
    }),
    (0, a.jsx)('div', {
      ref: this.foregroundTooltipElementRef,
      style: {
        top: this.state.foregroundTooltipY
      },
      className: m.foregroundTooltipPosition
    }),
    t.map((e, t) => this.renderTierMarker(e, t, n)),
    this.renderForegroundTooltip()
  ]
});
  }
  constructor(...e) {
super(...e), N(this, 'state', {
  showForegroundTooltip: !1,
  foregroundTooltipY: 0,
  tierMarkerActive: 0,
  finishedInitialAnimation: !1
}), N(this, 'foregroundTooltipElementRef', i.createRef()), N(this, 'tierMarkerMaskId', (0, c.Z)()), N(this, 'handleForegroundMouseEnter', e => {
  this.setState({
    showForegroundTooltip: !0
  }), this.handleForegroundMouseMove(e);
}), N(this, 'handleForegroundMouseMove', e => {
  if (!(0, d.k)(e.target))
    return;
  let t = e.target.getBoundingClientRect(),
    n = e.clientY - t.top;
  n !== this.state.foregroundTooltipY && this.setState({
    foregroundTooltipY: n
  });
}), N(this, 'handleForegroundMouseLeave', () => {
  this.setState({
    showForegroundTooltip: !1
  });
}), N(this, 'handleForegroundFrame', e => {
  let {
    height: t
  } = e, {
    tiers: n,
    progress: s,
    onAnimatedTierMaker: a
  } = this.props, {
    tierMarkerActive: i
  } = this.state;
  for (let e = n.length - 1; e > 0; e--) {
    let r = n[e],
      l = i === e;
    if (t + 20 >= r.y && s >= r.numRequired) {
      !l && (this.setState({
        tierMarkerActive: e
      }), null != a && a(r));
      return;
    }
  }
}), N(this, 'handleFinishedInitialAnimation', () => {
  this.setState({
    finishedInitialAnimation: !0
  });
});
  }
}
N(p, 'defaultProps', {
  initialAnimationDelay: 0
}), t.Z = p;