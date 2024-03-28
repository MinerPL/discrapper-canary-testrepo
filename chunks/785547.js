"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("411104"), n("47120");
var s, a, l, i = n("735250"),
  r = n("470079"),
  o = n("442837"),
  u = n("692547"),
  d = n("481060"),
  c = n("58642"),
  f = n("2052"),
  E = n("710845"),
  _ = n("703656"),
  T = n("173747"),
  m = n("7956"),
  I = n("293245"),
  p = n("417363"),
  h = n("941128"),
  N = n("780570"),
  S = n("358085"),
  C = n("814225"),
  A = n("346329"),
  g = n("701560"),
  M = n("981631"),
  R = n("689938"),
  O = n("308743");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(l = s || (s = {})).PLAY = "play", l.NOW_PLAYING = "now_playing", l.INSTALL = "install", l.UPDATE = "update", l.PAUSED = "paused", l.LOCATE = "locate", l.UNINSTALLING = "uninstalling", l.QUEUED = "queued", l.DOWNLOADING = "downloading", l.UNSUPPORTED_OS = "unsupported_os", l.ADD_TO_LIBRARY = "add_to_library", l.PREORDER_WAIT = "preorder_wait";
let L = Object.freeze({
    [M.LibraryApplicationActions.PLAY]: "play",
    [M.LibraryApplicationActions.INSTALL]: "install",
    [M.LibraryApplicationActions.UPDATE]: "update",
    [M.LibraryApplicationActions.PAUSE]: "downloading",
    [M.LibraryApplicationActions.MOVE_UP]: "queued",
    [M.LibraryApplicationActions.RESUME]: "paused"
  }),
  x = () => [R.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_1, R.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_2, R.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_3, R.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_4, R.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_5, R.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_6, R.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_7, R.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_8, R.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_9, R.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_10];
class D extends(a = r.Component) {
  get analyticsLocation() {
    return {
      ...this.props.analyticsContext.location,
      object: M.AnalyticsObjects.BUTTON_CTA
    }
  }
  getText(e) {
    switch ("uninstalling" !== e && (this._uninstallStringIndex = null), e) {
      case "install":
      case "unsupported_os":
        return R.default.Messages.GAME_ACTION_BUTTON_INSTALL;
      case "update":
        return R.default.Messages.GAME_ACTION_BUTTON_UPDATE;
      case "paused":
        return R.default.Messages.GAME_ACTION_BUTTON_PAUSED;
      case "locate":
        return R.default.Messages.GAME_ACTION_BUTTON_LOCATE;
      case "uninstalling":
        let t = x();
        return null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex];
      case "queued":
        return R.default.Messages.GAME_ACTION_BUTTON_QUEUED;
      case "downloading":
        return R.default.Messages.GAME_ACTION_BUTTON_DOWNLOADING;
      case "preorder_wait":
        return R.default.Messages.GAME_ACTION_BUTTON_PREORDER_WAIT;
      case "add_to_library":
        return R.default.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY;
      default:
        throw Error("Unexpected button state")
    }
  }
  getButtonState() {
    let {
      libraryApplication: e,
      dispatchState: t,
      actionState: n
    } = this.props;
    if (e.isHidden()) return "add_to_library";
    if (e.isPreorder()) return "preorder_wait";
    let s = null != n ? L[n] : null;
    return null != s ? s : null != t && t.type === M.LocalDispatchApplicationStates.UNINSTALLING ? "uninstalling" : (0, S.isWeb)() ? "play" : "unsupported_os"
  }
  renderPlayButton() {
    let {
      libraryApplication: e,
      fullWidth: t,
      size: n,
      color: s,
      customDisabledColor: a,
      isPlayShiny: l,
      onDropdownOpen: r,
      onDropdownClose: o,
      analyticsListSort: u,
      analyticsListIndex: d
    } = this.props;
    return (0, i.jsx)(g.default, {
      applicationId: e.id,
      libraryApplication: e,
      fullWidth: t,
      size: n,
      color: s,
      customDisabledColor: a,
      isShiny: l,
      onDropdownOpen: r,
      onDropdownClose: o,
      analyticsListSort: u,
      analyticsListIndex: d
    })
  }
  renderDisabledButton(e, t) {
    let {
      className: n,
      fullWidth: s,
      size: a,
      customDisabledColor: l,
      tooltipPosition: r
    } = this.props;
    return (0, i.jsxs)("div", {
      className: O.disabledButtonWrapper,
      children: [(0, i.jsxs)(d.Button, {
        className: n,
        fullWidth: s,
        size: a,
        color: null != l ? l : O.disabledButtonColor,
        disabled: !0,
        children: [this.getText(e), this.renderProgressBar()]
      }), (0, i.jsx)(d.Tooltip, {
        text: t,
        position: r,
        children: e => (0, i.jsx)("div", {
          className: O.disabledButtonOverlay,
          ...e
        })
      })]
    })
  }
  renderProgressBar() {
    let {
      hideProgress: e,
      dispatchState: t
    } = this.props;
    if (e) return null;
    let n = N.convertToTransitionState(t);
    if (null == n) return null;
    let s = n.type === M.LocalDispatchApplicationStates.UNINSTALLING ? d.Progress.INDETERMINATE : N.calculateProgressPercentage(Number(n.progress), Number(n.total));
    return (0, i.jsx)(d.Progress, {
      percent: s,
      size: d.Progress.Sizes.XSMALL,
      foregroundColor: n.paused ? u.default.unsafe_rawColors.PRIMARY_500.css : u.default.unsafe_rawColors.GREEN_360.css,
      backgroundColor: u.default.unsafe_rawColors.TRANSPARENT.css,
      className: O.progress
    })
  }
  renderActionButton(e, t) {
    let {
      className: n,
      fullWidth: s,
      size: a,
      color: l,
      isCloudSyncing: r
    } = this.props;
    return (0, i.jsxs)(d.Button, {
      className: n,
      fullWidth: s,
      size: a,
      color: null != l ? l : d.Button.Colors.GREEN,
      hover: null != l ? d.Button.Hovers.GREEN : d.Button.Hovers.DEFAULT,
      submitting: "uninstalling" === e || r,
      onClick: e => this.handleClick(e, t),
      children: [this.getText(e), this.renderProgressBar()]
    })
  }
  render() {
    let {
      hasNoBuild: e,
      libraryApplication: t
    } = this.props, n = this.getButtonState();
    if ("play" === n) return this.renderPlayButton();
    if ("preorder_wait" === n) return this.renderDisabledButton(n, function(e) {
      let t = C.getReadablePreorderReleaseDate(e.sku);
      return null != t ? R.default.Messages.GAME_ACTION_BUTTON_PREORDER_WAIT_TOOLTIP.format({
        date: t
      }) : null
    }(t));
    if ("unsupported_os" === n) return this.renderDisabledButton(n, R.default.Messages.GAME_ACTION_BUTTON_UNAVAILABLE_TOOLTIP.format({
      operatingSystem: R.default.Messages.WINDOWS
    }));
    if ("install" === n && e) return this.renderDisabledButton(n, R.default.Messages.GAME_ACTION_BUTTON_CANNOT_INSTALL);
    let s = this.onClickHandlers[n];
    return null == s ? this.renderDisabledButton(n) : this.renderActionButton(n, s)
  }
  constructor(...e) {
    super(...e), v(this, "_uninstallStringIndex", null), v(this, "handleAddToLibrary", async () => {
      try {
        let {
          libraryApplication: e
        } = this.props;
        await c.updateFlags(e.id, e.branchId, e.getFlags() & ~M.LibraryApplicationFlags.HIDDEN), (0, _.transitionTo)(M.Routes.APPLICATION_LIBRARY)
      } catch (e) {
        new E.default("LibraryApplicationButton").error(e)
      }
    }), v(this, "handleInstall", () => {
      let {
        libraryApplication: e,
        source: t
      } = this.props;
      A.installApplication(e.id, e.branchId, t)
    }), v(this, "handleUpdate", () => {
      let {
        libraryApplication: e
      } = this.props;
      A.updateApplication(e.id, e.branchId)
    }), v(this, "onClickHandlers", {
      add_to_library: this.handleAddToLibrary,
      install: this.handleInstall,
      update: this.handleUpdate
    }), v(this, "handleClick", (e, t) => {
      let {
        onClick: n
      } = this.props;
      null == n || n(e), t(e)
    })
  }
}

function P(e) {
  let {
    libraryApplication: t
  } = e, n = (0, f.useAnalyticsContext)(), [s, a] = (0, o.useStateFromStoresArray)([p.default, h.default], () => [(0, m.getDefaultLibraryApplicationAction)(t, p.default, h.default), p.default.getState(t.id, t.branchId)], [t]), l = (0, o.useStateFromStores)([I.default], () => I.default.isSyncing(t.id, t.branchId), [t]), r = (0, o.useStateFromStores)([T.default], () => T.default.hasNoBuild(t.id, t.branchId), [t]);
  return (0, i.jsx)(D, {
    ...e,
    analyticsContext: n,
    actionState: s,
    dispatchState: a,
    isCloudSyncing: l,
    hasNoBuild: r
  })
}
v(D, "defaultProps", {
  fullWidth: !1,
  size: d.Button.Sizes.LARGE,
  hideProgress: !1,
  isPlayShiny: !1,
  tooltipPosition: "top"
}), v(D, "ButtonStates", s)