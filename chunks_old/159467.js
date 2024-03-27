"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007"), n("70102");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("272030"),
  d = n("997289"),
  c = n("161454"),
  E = n("860285"),
  f = n("86878"),
  _ = n("535974"),
  T = n("181114"),
  I = n("837899"),
  m = n("773336"),
  N = n("780009"),
  p = n("49111"),
  S = n("782340"),
  C = n("434118");
class A extends a.PureComponent {
  get analyticsLocation() {
    return {
      ...this.props.analyticsContext.location,
      object: p.AnalyticsObjects.BUTTON_CTA
    }
  }
  renderDropdown() {
    let {
      dispatchState: e
    } = this.props, t = null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1;
    return t ? (0, s.jsxs)(o.Clickable, {
      "aria-label": S.default.Messages.APPLICATION_CONTEXT_MENU_LAUNCH_OPTIONS,
      className: C.dropdownArrowHitbox,
      onClick: this.handleDropdownClick,
      children: [(0, s.jsx)("div", {
        className: C.arrowSeparator
      }), (0, s.jsx)(I.default, {
        className: C.dropdownArrow
      })]
    }) : null
  }
  renderDisabledButton(e, t) {
    let {
      className: n,
      fullWidth: a,
      size: l,
      customDisabledColor: i,
      tooltipPosition: r
    } = this.props;
    return (0, s.jsxs)("div", {
      className: C.disabledButtonWrapper,
      children: [(0, s.jsx)(o.Button, {
        className: n,
        fullWidth: a,
        size: l,
        color: null != i ? i : C.disabledButtonColor,
        disabled: !0,
        children: e
      }), (0, s.jsx)(o.Tooltip, {
        text: t,
        position: r,
        children: e => (0, s.jsx)("div", {
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
      color: a,
      isLaunchable: l,
      isLaunching: r,
      isRunning: u,
      isShiny: d,
      hideNotLaunchable: c
    } = this.props;
    if (!l) return c ? null : this.renderDisabledButton(S.default.Messages.GAME_ACTION_BUTTON_PLAY, m.isPlatformEmbedded ? S.default.Messages.GAME_ACTION_BUTTON_GAME_NOT_DETECTED : S.default.Messages.GAME_ACTION_BUTTON_PLAY_DISABLED_DESKTOP_APP);
    if (u) return this.renderDisabledButton(S.default.Messages.GAME_ACTION_BUTTON_NOW_PLAYING);
    let E = d ? T.default : o.Button;
    return (0, s.jsxs)(E, {
      className: i(C.playButton, e),
      innerClassName: C.playButtonContents,
      fullWidth: t,
      size: n,
      color: null != a ? a : o.Button.Colors.GREEN,
      hover: null != a ? o.Button.Hovers.GREEN : o.Button.Hovers.DEFAULT,
      submitting: r,
      onClick: this.handleClick,
      children: [(0, s.jsx)("div", {
        className: C.buttonText,
        children: S.default.Messages.GAME_ACTION_BUTTON_PLAY
      }), this.renderDropdown()]
    })
  }
  constructor(...e) {
    super(...e), this.handleDropdownClick = e => {
      e.stopPropagation();
      let {
        libraryApplication: t,
        onDropdownOpen: a,
        onDropdownClose: l
      } = this.props;
      if (null == a || a(e), null == t) throw Error("Unexpected missing libraryApplication");
      u.openContextMenuLazy(e, async () => {
        let {
          default: e
        } = await n.el("220792").then(n.bind(n, "220792"));
        return n => (0, s.jsx)(e, {
          ...n,
          libraryApplication: t,
          onPlay: this.handleClick
        })
      }, {
        onClose: l
      })
    }, this.handleClick = () => {
      let {
        applicationId: e,
        libraryApplication: t,
        analyticsListSort: n,
        analyticsListIndex: s
      } = this.props;
      N.playApplication(e, t, {
        analyticsParams: {
          location: this.analyticsLocation,
          list_sort: n,
          list_index: s
        }
      })
    }
  }
}

function h(e) {
  let {
    applicationId: t,
    libraryApplication: n
  } = e, a = (0, d.useAnalyticsContext)(), [l, i] = (0, r.useStateFromStoresArray)([f.default, E.default, _.default], () => [f.default.isConnected(t) || E.default.isLaunchable(t) || null != n && _.default.isLaunchable(n.id, n.branchId), E.default.launchingGames.has(t)], [t, n]), o = (0, r.useStateFromStores)([c.default], () => new Set(c.default.getRunningVerifiedApplicationIds()).has(t), [t]), u = (0, r.useStateFromStores)([_.default], () => null != n ? _.default.getState(n.id, n.branchId) : null, [n]);
  return (0, s.jsx)(A, {
    ...e,
    analyticsContext: a,
    isLaunchable: l,
    isLaunching: i,
    isRunning: o,
    dispatchState: u
  })
}
A.defaultProps = {
  fullWidth: !1,
  size: o.Button.Sizes.LARGE,
  tooltipPosition: "top",
  isShiny: !1,
  hideNotLaunchable: !1
}