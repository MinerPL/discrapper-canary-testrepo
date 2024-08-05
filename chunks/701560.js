n.d(t, {
  Z: function() {
return S;
  }
}), n(47120), n(411104);
var i, s = n(735250),
  a = n(470079),
  r = n(120356),
  l = n.n(r),
  o = n(442837),
  c = n(481060),
  u = n(239091),
  d = n(2052),
  _ = n(594190),
  E = n(592745),
  I = n(757266),
  m = n(417363),
  T = n(358085),
  h = n(346329),
  N = n(981631),
  C = n(689938),
  f = n(376296);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class g extends(i = a.PureComponent) {
  get analyticsLocation() {
return {
  ...this.props.analyticsContext.location,
  object: N.qAy.BUTTON_CTA
};
  }
  renderDropdown() {
let {
  dispatchState: e
} = this.props;
return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1 ? (0, s.jsxs)(c.Clickable, {
  'aria-label': C.Z.Messages.APPLICATION_CONTEXT_MENU_LAUNCH_OPTIONS,
  className: f.dropdownArrowHitbox,
  onClick: this.handleDropdownClick,
  children: [
    (0, s.jsx)('div', {
      className: f.arrowSeparator
    }),
    (0, s.jsx)(c.ChevronSmallDownIcon, {
      size: 'md',
      color: 'currentColor',
      className: f.dropdownArrow
    })
  ]
}) : null;
  }
  renderDisabledButton(e, t) {
let {
  className: n,
  fullWidth: i,
  size: a,
  customDisabledColor: r,
  tooltipPosition: l
} = this.props;
return (0, s.jsxs)('div', {
  className: f.disabledButtonWrapper,
  children: [
    (0, s.jsx)(c.Button, {
      className: n,
      fullWidth: i,
      size: a,
      color: null != r ? r : f.disabledButtonColor,
      disabled: !0,
      children: e
    }),
    (0, s.jsx)(c.Tooltip, {
      text: t,
      position: l,
      children: e => (0, s.jsx)('div', {
        className: f.disabledButtonOverlay,
        ...e
      })
    })
  ]
});
  }
  render() {
let {
  className: e,
  fullWidth: t,
  size: n,
  color: i,
  isLaunchable: a,
  isLaunching: r,
  isRunning: o,
  isShiny: u,
  hideNotLaunchable: d
} = this.props;
if (!a)
  return d ? null : this.renderDisabledButton(C.Z.Messages.GAME_ACTION_BUTTON_PLAY, T.isPlatformEmbedded ? C.Z.Messages.GAME_ACTION_BUTTON_GAME_NOT_DETECTED : C.Z.Messages.GAME_ACTION_BUTTON_PLAY_DISABLED_DESKTOP_APP);
if (o)
  return this.renderDisabledButton(C.Z.Messages.GAME_ACTION_BUTTON_NOW_PLAYING);
let _ = u ? c.ShinyButton : c.Button;
return (0, s.jsxs)(_, {
  className: l()(f.playButton, e),
  innerClassName: f.playButtonContents,
  fullWidth: t,
  size: n,
  color: null != i ? i : c.Button.Colors.GREEN,
  submitting: r,
  onClick: this.handleClick,
  children: [
    (0, s.jsx)('div', {
      className: f.buttonText,
      children: C.Z.Messages.GAME_ACTION_BUTTON_PLAY
    }),
    this.renderDropdown()
  ]
});
  }
  constructor(...e) {
super(...e), p(this, 'handleDropdownClick', e => {
  e.stopPropagation();
  let {
    libraryApplication: t,
    onDropdownOpen: i,
    onDropdownClose: a
  } = this.props;
  if (null == i || i(e), null == t)
    throw Error('Unexpected missing libraryApplication');
  u.jW(e, async () => {
    let {
      default: e
    } = await n.e('53195').then(n.bind(n, 918306));
    return n => (0, s.jsx)(e, {
      ...n,
      libraryApplication: t,
      onPlay: this.handleClick
    });
  }, {
    onClose: a
  });
}), p(this, 'handleClick', () => {
  let {
    applicationId: e,
    libraryApplication: t,
    analyticsListSort: n,
    analyticsListIndex: i
  } = this.props;
  h.playApplication(e, t, {
    analyticsParams: {
      location: this.analyticsLocation,
      list_sort: n,
      list_index: i
    }
  });
});
  }
}

function S(e) {
  let {
applicationId: t,
libraryApplication: n
  } = e, i = (0, d.O)(), [a, r] = (0, o.Wu)([
I.Z,
E.Z,
m.Z
  ], () => [
I.Z.isConnected(t) || E.Z.isLaunchable(t) || null != n && m.Z.isLaunchable(n.id, n.branchId),
E.Z.launchingGames.has(t)
  ], [
t,
n
  ]), l = (0, o.e7)([_.ZP], () => new Set(_.ZP.getRunningVerifiedApplicationIds()).has(t), [t]), c = (0, o.e7)([m.Z], () => null != n ? m.Z.getState(n.id, n.branchId) : null, [n]);
  return (0, s.jsx)(g, {
...e,
analyticsContext: i,
isLaunchable: a,
isLaunching: r,
isRunning: l,
dispatchState: c
  });
}
p(g, 'defaultProps', {
  fullWidth: !1,
  size: c.Button.Sizes.LARGE,
  tooltipPosition: 'top',
  isShiny: !1,
  hideNotLaunchable: !1
});