"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("47120"), n("411104");
var s, a = n("735250"),
  l = n("470079"),
  i = n("120356"),
  r = n.n(i),
  o = n("442837"),
  u = n("481060"),
  d = n("239091"),
  c = n("2052"),
  f = n("594190"),
  E = n("592745"),
  _ = n("757266"),
  m = n("417363"),
  T = n("976644"),
  I = n("86813"),
  p = n("358085"),
  h = n("346329"),
  N = n("981631"),
  S = n("689938"),
  C = n("2050");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class g extends(s = l.PureComponent) {
  get analyticsLocation() {
    return {
      ...this.props.analyticsContext.location,
      object: N.AnalyticsObjects.BUTTON_CTA
    }
  }
  renderDropdown() {
    let {
      dispatchState: e
    } = this.props;
    return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1 ? (0, a.jsxs)(u.Clickable, {
      "aria-label": S.default.Messages.APPLICATION_CONTEXT_MENU_LAUNCH_OPTIONS,
      className: C.dropdownArrowHitbox,
      onClick: this.handleDropdownClick,
      children: [(0, a.jsx)("div", {
        className: C.arrowSeparator
      }), (0, a.jsx)(I.default, {
        className: C.dropdownArrow
      })]
    }) : null
  }
  renderDisabledButton(e, t) {
    let {
      className: n,
      fullWidth: s,
      size: l,
      customDisabledColor: i,
      tooltipPosition: r
    } = this.props;
    return (0, a.jsxs)("div", {
      className: C.disabledButtonWrapper,
      children: [(0, a.jsx)(u.Button, {
        className: n,
        fullWidth: s,
        size: l,
        color: null != i ? i : C.disabledButtonColor,
        disabled: !0,
        children: e
      }), (0, a.jsx)(u.Tooltip, {
        text: t,
        position: r,
        children: e => (0, a.jsx)("div", {
          className: C.disabledButtonOverlay,
          ...e
        })
      })]
    })
  }
  render() {
    let {
      className: e,
      fullWidth: t,
      size: n,
      color: s,
      isLaunchable: l,
      isLaunching: i,
      isRunning: o,
      isShiny: d,
      hideNotLaunchable: c
    } = this.props;
    if (!l) return c ? null : this.renderDisabledButton(S.default.Messages.GAME_ACTION_BUTTON_PLAY, p.isPlatformEmbedded ? S.default.Messages.GAME_ACTION_BUTTON_GAME_NOT_DETECTED : S.default.Messages.GAME_ACTION_BUTTON_PLAY_DISABLED_DESKTOP_APP);
    if (o) return this.renderDisabledButton(S.default.Messages.GAME_ACTION_BUTTON_NOW_PLAYING);
    let f = d ? T.default : u.Button;
    return (0, a.jsxs)(f, {
      className: r()(C.playButton, e),
      innerClassName: C.playButtonContents,
      fullWidth: t,
      size: n,
      color: null != s ? s : u.Button.Colors.GREEN,
      hover: null != s ? u.Button.Hovers.GREEN : u.Button.Hovers.DEFAULT,
      submitting: i,
      onClick: this.handleClick,
      children: [(0, a.jsx)("div", {
        className: C.buttonText,
        children: S.default.Messages.GAME_ACTION_BUTTON_PLAY
      }), this.renderDropdown()]
    })
  }
  constructor(...e) {
    super(...e), A(this, "handleDropdownClick", e => {
      e.stopPropagation();
      let {
        libraryApplication: t,
        onDropdownOpen: s,
        onDropdownClose: l
      } = this.props;
      if (null == s || s(e), null == t) throw Error("Unexpected missing libraryApplication");
      d.openContextMenuLazy(e, async () => {
        let {
          default: e
        } = await n.e("53195").then(n.bind(n, "918306"));
        return n => (0, a.jsx)(e, {
          ...n,
          libraryApplication: t,
          onPlay: this.handleClick
        })
      }, {
        onClose: l
      })
    }), A(this, "handleClick", () => {
      let {
        applicationId: e,
        libraryApplication: t,
        analyticsListSort: n,
        analyticsListIndex: s
      } = this.props;
      h.playApplication(e, t, {
        analyticsParams: {
          location: this.analyticsLocation,
          list_sort: n,
          list_index: s
        }
      })
    })
  }
}

function M(e) {
  let {
    applicationId: t,
    libraryApplication: n
  } = e, s = (0, c.useAnalyticsContext)(), [l, i] = (0, o.useStateFromStoresArray)([_.default, E.default, m.default], () => [_.default.isConnected(t) || E.default.isLaunchable(t) || null != n && m.default.isLaunchable(n.id, n.branchId), E.default.launchingGames.has(t)], [t, n]), r = (0, o.useStateFromStores)([f.default], () => new Set(f.default.getRunningVerifiedApplicationIds()).has(t), [t]), u = (0, o.useStateFromStores)([m.default], () => null != n ? m.default.getState(n.id, n.branchId) : null, [n]);
  return (0, a.jsx)(g, {
    ...e,
    analyticsContext: s,
    isLaunchable: l,
    isLaunching: i,
    isRunning: r,
    dispatchState: u
  })
}
A(g, "defaultProps", {
  fullWidth: !1,
  size: u.Button.Sizes.LARGE,
  tooltipPosition: "top",
  isShiny: !1,
  hideNotLaunchable: !1
})