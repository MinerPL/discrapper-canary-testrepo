"use strict";
n.r(t), n("411104"), n("47120"), n("724458"), n("653041");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("692547"),
  c = n("780384"),
  f = n("481060"),
  E = n("570140"),
  h = n("239091"),
  _ = n("51025"),
  C = n("785547"),
  m = n("730749"),
  S = n("112724"),
  p = n("812206"),
  g = n("44315"),
  I = n("210887"),
  T = n("283595"),
  A = n("417363"),
  N = n("941128"),
  v = n("451478"),
  R = n("285952"),
  O = n("366695"),
  L = n("366966"),
  M = n("151011"),
  y = n("774832"),
  P = n("465670"),
  x = n("786048"),
  D = n("897353"),
  b = n("424218"),
  U = n("780570"),
  j = n("353042"),
  G = n("86826"),
  k = n("981631"),
  w = n("689938"),
  B = n("31931");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let H = e => {
    let {
      className: t,
      children: n,
      onContextMenu: s,
      item: l
    } = e;
    return (0, a.jsx)("div", {
      className: t,
      onContextMenu: e => s(e, l),
      children: n
    })
  },
  V = [d.default.unsafe_rawColors.BLUE_345.css, d.default.colors.INTERACTIVE_NORMAL.css],
  Y = e => {
    let {
      tooltip: t,
      onClick: n,
      icon: s
    } = e;
    return (0, a.jsx)(f.Tooltip, {
      text: t,
      children: e => {
        let {
          onMouseEnter: l,
          onMouseLeave: i
        } = e;
        return (0, a.jsx)(f.Button, {
          "aria-label": t,
          className: B.actionButton,
          innerClassName: B.actionButtonContents,
          color: f.Button.Colors.PRIMARY,
          size: f.Button.Sizes.ICON,
          onClick: n,
          onMouseEnter: l,
          onMouseLeave: i,
          children: (0, a.jsx)(s, {
            className: B.actionIcon
          })
        })
      }
    })
  };

function W(e, t) {
  switch (t) {
    case k.DispatchApplicationStages.POST_INSTALL_SCRIPTS:
    case k.DispatchApplicationStages.PLANNING:
    case k.DispatchApplicationStages.FINALIZING:
    case k.DispatchApplicationStages.ALLOCATING_DISK:
      return "".concat(e);
    default:
      return (0, b.formatSize)(e, {
        useKibibytes: !0
      })
  }
}
let K = {
  [k.LocalDispatchApplicationStates.INSTALLING]: {
    [L.TimeUnits.NONE]: (e, t, n, a) => w.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING.format({
      percent: e,
      progress: t,
      total: n
    }),
    [L.TimeUnits.SECONDS]: (e, t, n, a) => w.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_SECONDS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    }),
    [L.TimeUnits.MINUTES]: (e, t, n, a) => w.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_MINUTES.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    }),
    [L.TimeUnits.HOURS]: (e, t, n, a) => w.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_HOURS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    })
  },
  [k.LocalDispatchApplicationStates.UPDATING]: {
    [L.TimeUnits.NONE]: (e, t, n, a) => w.default.Messages.GAME_LIBRARY_UPDATES_UPDATING.format({
      percent: e,
      progress: t,
      total: n
    }),
    [L.TimeUnits.SECONDS]: (e, t, n, a) => w.default.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_SECONDS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    }),
    [L.TimeUnits.MINUTES]: (e, t, n, a) => w.default.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_MINUTES.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    }),
    [L.TimeUnits.HOURS]: (e, t, n, a) => w.default.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_HOURS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    })
  },
  [k.LocalDispatchApplicationStates.REPAIRING]: {
    [L.TimeUnits.NONE]: (e, t, n, a) => w.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING.format({
      percent: e,
      progress: t,
      total: n
    }),
    [L.TimeUnits.SECONDS]: (e, t, n, a) => w.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_SECONDS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    }),
    [L.TimeUnits.MINUTES]: (e, t, n, a) => w.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_MINUTES.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    }),
    [L.TimeUnits.HOURS]: (e, t, n, a) => w.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_HOURS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    })
  }
};

function z(e, t, n, a, s) {
  let l = K[t],
    i = null != l ? Object.keys(l) : [],
    {
      unit: r,
      time: o
    } = (0, L.getTimeAndUnit)(null != e ? e / 60 : null, i);
  if (null != l && null != r) {
    let e = l[r];
    return null != e ? e(n, a, s, o) : null
  }
  return null
}

function q(e) {
  let {
    type: t,
    stage: n,
    percent: a,
    progress: s,
    total: l,
    secondsRemaining: i
  } = e, r = W(l, n), o = W(s, n);
  switch (n) {
    case k.DispatchApplicationStages.QUEUED:
      if (0 === s) return w.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_WAITING_FOR_ANOTHER_NO_TRANSITION;
      return w.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_WAITING_FOR_ANOTHER.format({
        percent: a,
        progress: o,
        total: r
      });
    case k.DispatchApplicationStages.PLANNING:
      return w.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PLANNING.format({
        percent: a
      });
    case k.DispatchApplicationStages.ALLOCATING_DISK:
      return w.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_ALLOCATING_DISK.format({
        percent: a
      });
    case k.DispatchApplicationStages.PATCHING:
      return z(i, t, a, o, r);
    case k.DispatchApplicationStages.FINALIZING:
      return w.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_FINALIZING.format({
        percent: a
      });
    case k.DispatchApplicationStages.PAUSING:
      return w.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSING.format({
        percent: a,
        progress: o,
        total: r
      });
    case k.DispatchApplicationStages.VERIFYING:
      return w.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_VERIFYING.format({
        percent: a,
        progress: o,
        total: r
      });
    case k.DispatchApplicationStages.POST_INSTALL_SCRIPTS:
      return w.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_POST_INSTALL_SCRIPTS.format({
        percent: a,
        progress: o,
        total: r
      });
    case k.DispatchApplicationStages.REPAIRING:
      if (t === k.LocalDispatchApplicationStates.REPAIRING) return z(i, t, a, o, r);
      return w.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_REPAIRING.format({
        percent: a,
        progress: o,
        total: r
      })
  }
  throw Error("Invalid Dispatch stage")
}
let Q = {
  NAME: "name",
  PROGRESS: "progress",
  ACTIONS: "actions"
};
class Z extends s.PureComponent {
  get isFocused() {
    let {
      cellProps: e
    } = this.props;
    return null != e && e.isFocused
  }
  renderBody(e) {
    let {
      percent: t,
      foregroundColor: n,
      foregroundGradientColor: s,
      message: l
    } = e;
    return (0, a.jsxs)(R.default, {
      direction: R.default.Direction.VERTICAL,
      children: [(0, a.jsx)(f.Progress, {
        percent: t,
        size: f.Progress.Sizes.SMALL,
        foregroundColor: (0, g.getColor)(n),
        foregroundGradientColor: null != s ? [(0, g.getColor)(s[0]), (0, g.getColor)(s[1])] : void 0,
        animate: this.isFocused
      }), (0, a.jsx)("div", {
        className: B.progressCellText,
        children: null != l ? l : ""
      })]
    })
  }
  renderStackedProgress(e) {
    let {
      percents: t,
      message: n
    } = e;
    return (0, a.jsxs)(R.default, {
      direction: R.default.Direction.VERTICAL,
      children: [(0, a.jsx)(f.StackedProgress, {
        percents: t,
        size: f.Progress.Sizes.SMALL,
        foregroundColors: V,
        animate: this.isFocused
      }), (0, a.jsx)("div", {
        className: B.progressCellText,
        children: null != n ? n : ""
      })]
    })
  }
  renderFinished() {
    let {
      item: e
    } = this.props;
    return this.renderBody({
      message: w.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_FINISHED.format({
        remove: () => _.removeFinished(e.applicationId, e.branchId)
      }),
      foregroundColor: (0, c.isThemeLight)(e.theme) ? k.Color.PRIMARY_300 : k.Color.PRIMARY_500,
      percent: 100
    })
  }
  renderQueued() {
    let e, t;
    let {
      item: {
        state: n,
        theme: a
      }
    } = this.props;
    if (null != n) {
      let {
        progress: a,
        total: s,
        stage: l
      } = n;
      if (null != a && null != s) {
        let n = W(s, l),
          i = W(a, l),
          r = Math.floor(t = U.calculateProgressPercentage(a, s));
        e = l === k.DispatchApplicationStages.PAUSING ? w.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSING.format({
          percent: r,
          progress: i,
          total: n
        }) : w.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_QUEUED.format({
          percent: r,
          progress: i,
          total: n
        })
      }
    }
    return (null == t || null == e) && (t = 0, e = w.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_QUEUED_NO_TRANSITION), this.renderBody({
      percent: t,
      foregroundColor: (0, c.isThemeLight)(a) ? k.Color.PRIMARY_300 : k.Color.PRIMARY_500,
      message: e
    })
  }
  renderPaused() {
    let {
      item: {
        state: e,
        theme: t
      }
    } = this.props;
    if (null == e) return null;
    let {
      progress: n,
      total: a
    } = e;
    if (null == n || null == a) return null;
    let s = U.calculateProgressPercentage(n, a),
      l = 0 === n && 1 === a ? w.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSED_NO_TRANSITION : w.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSED.format({
        percent: Math.floor(s),
        progress: (0, b.formatSize)(n),
        total: (0, b.formatSize)(a)
      });
    return this.renderBody({
      message: l,
      foregroundColor: (0, c.isThemeLight)(t) ? k.Color.PRIMARY_300 : k.Color.PRIMARY_500,
      percent: s
    })
  }
  renderProgressPatching() {
    return (0, a.jsx)(j.default, {
      getHistoricalTotalBytes: A.default.getHistoricalTotalBytesWritten,
      updateInterval: 5e3,
      children: this.renderProgressPatchingBody
    })
  }
  renderProgressDefault() {
    let {
      state: e
    } = this.props.item;
    if (null == e) return null;
    let {
      total: t,
      progress: n,
      stage: a,
      type: s
    } = e;
    if (null == t || null == n || null == a) return null;
    let l = U.calculateProgressPercentage(n, t),
      i = Math.floor(l);
    return this.renderBody({
      percent: l,
      message: q({
        type: s,
        stage: a,
        percent: i,
        progress: n,
        total: t
      }),
      foregroundColor: k.Color.BLUE_345
    })
  }
  renderProgress() {
    let {
      state: e
    } = this.props.item;
    switch (null != e ? e.stage : null) {
      case k.DispatchApplicationStages.PATCHING:
      case k.DispatchApplicationStages.REPAIRING:
        return this.renderProgressPatching();
      default:
        return this.renderProgressDefault()
    }
  }
  render() {
    let {
      item: e,
      cellProps: t
    } = this.props;
    if (e.finished) return this.renderFinished();
    if (e.index > 0) return this.renderQueued();
    if (null != e.state && (e.state.type === k.LocalDispatchApplicationStates.UPDATING || e.state.type === k.LocalDispatchApplicationStates.REPAIRING || e.state.type === k.LocalDispatchApplicationStates.INSTALLING)) return null != t && t.paused ? this.renderPaused() : this.renderProgress();
    return null
  }
  constructor(...e) {
    super(...e), F(this, "renderProgressPatchingBody", (e, t) => {
      let {
        item: {
          state: n
        }
      } = this.props;
      if (null == n) return null;
      let {
        stage: a,
        progress: s,
        total: l,
        type: i,
        readerProgress: r
      } = n;
      if (null == s || null == l || null == a) return null;
      let o = U.calculateProgressPercentage(s, l),
        u = U.calculateProgressPercentage(null != r ? r : 0, l),
        d = e[e.length - 1] / t * 1e3,
        c = l - s,
        f = q({
          type: i,
          stage: a,
          percent: Math.floor(o),
          progress: s,
          total: l,
          secondsRemaining: 0 !== d ? Math.max(1, c / d) : null
        });
      return this.renderStackedProgress({
        percents: [o, u],
        message: f
      })
    })
  }
}
let X = () => (0, a.jsx)(Y, {
    icon: D.default,
    tooltip: w.default.Messages.GAME_LIBRARY_UPDATES_ACTION_RESUME,
    onClick: () => _.resume()
  }),
  J = () => (0, a.jsx)(Y, {
    icon: x.default,
    tooltip: w.default.Messages.GAME_LIBRARY_UPDATES_ACTION_PAUSE,
    onClick: () => _.pause()
  }),
  $ = e => {
    let {
      item: t
    } = e;
    return (0, a.jsx)(Y, {
      icon: y.default,
      tooltip: w.default.Messages.GAME_LIBRARY_UPDATES_ACTION_MOVE_UP,
      onClick: () => _.moveUp(t.applicationId, t.branchId)
    })
  },
  ee = e => {
    let {
      item: t
    } = e;
    return (0, a.jsx)(Y, {
      icon: P.default,
      tooltip: w.default.Messages.GAME_LIBRARY_UPDATES_ACTION_REMOVE,
      onClick: () => _.cancel(t.applicationId, t.branchId)
    })
  },
  et = [{
    key: Q.NAME,
    cellClassName: B.nameCell,
    render: e => (0, a.jsxs)(R.default, {
      align: R.default.Align.CENTER,
      children: [(0, a.jsx)(O.default, {
        game: e.application,
        className: B.__invalid_gameIcon,
        size: O.default.Sizes.SMALL
      }), (0, a.jsx)("div", {
        className: B.nameCellText,
        children: e.application.name
      })]
    })
  }, {
    key: Q.PROGRESS,
    cellClassName: B.progressCell,
    headerCellClassName: B.progressCellHeader,
    bodyCellClassName: B.progressCellBody,
    render: (e, t) => (0, a.jsx)(Z, {
      item: e,
      cellProps: t
    })
  }, {
    key: Q.ACTIONS,
    cellClassName: B.actionsCell,
    render(e, t) {
      let n, s;
      return e.finished ? n = null != e.libraryApplication ? (0, a.jsx)(C.default, {
        libraryApplication: e.libraryApplication,
        size: f.Button.Sizes.SMALL,
        className: B.gameActionButton,
        source: k.AnalyticsLocations.APPLICATION_LIBRARY_UPDATES
      }) : null : null != e.state ? e.state.type !== k.LocalDispatchApplicationStates.UP_TO_DATE && (n = e.index > 0 ? (0, a.jsx)($, {
        item: e
      }) : null != t && t.paused ? (0, a.jsx)(X, {}) : (0, a.jsx)(J, {
        item: e
      }), s = (0, a.jsx)(ee, {
        item: e
      })) : s = (0, a.jsx)(ee, {
        item: e
      }), (0, a.jsxs)(R.default, {
        justify: R.default.Justify.END,
        children: [n, s]
      })
    }
  }];
class en extends s.PureComponent {
  componentDidMount() {
    window.addEventListener("resize", this.throttledUpdateHeight)
  }
  componentDidUpdate(e) {
    this.props.height !== e.height && this.throttledUpdateHeight()
  }
  componentWillUnmount() {
    let {
      applications: e
    } = this.props;
    e.forEach(e => {
      e.finished && E.default.wait(() => {
        _.removeFinished(e.applicationId, e.branchId)
      })
    }), window.removeEventListener("resize", this.throttledUpdateHeight), this.isUnmounted = !0
  }
  render() {
    let {
      applications: e,
      paused: t,
      isFocused: s,
      theme: l,
      analyticsContext: r
    } = this.props;
    return 0 === e.length ? null : (0, a.jsxs)("div", {
      className: B.gameUpdates,
      children: [(0, a.jsxs)("div", {
        className: B.headerRow,
        children: [(0, a.jsx)(G.default, {
          className: i()(B.headerCell, B.networkProgress),
          title: w.default.Messages.GAME_LIBRARY_UPDATES_HEADER_NETWORK,
          getHistoricalTotalBytes: A.default.getHistoricalTotalBytesDownloaded,
          color: k.Color.GREEN_360,
          animate: s
        }), (0, a.jsx)(G.default, {
          className: i()(B.headerCell, B.diskProgress),
          title: w.default.Messages.GAME_LIBRARY_UPDATES_HEADER_DISK,
          getHistoricalTotalBytes: A.default.getHistoricalTotalBytesWritten,
          color: k.Color.BLUE_345,
          animate: s
        })]
      }), (0, a.jsx)(M.default, {
        hasHeader: !1,
        columns: et,
        data: e,
        className: B.table,
        rowClassName: B.row,
        rowComponent: H,
        cellProps: {
          paused: t,
          isFocused: s,
          theme: l
        },
        rowProps: {
          onContextMenu: (e, t) => {
            var s, l, i;
            return s = e, l = t, i = r, void h.openContextMenuLazy(s, async () => {
              let {
                default: e
              } = await n.e("98335").then(n.bind(n, "485292"));
              return t => (0, a.jsx)(e, {
                ...t,
                applicationId: l.applicationId,
                branchId: l.branchId,
                analyticsContext: i
              })
            })
          }
        },
        bodyCellClassName: B.cell
      })]
    })
  }
  constructor(...e) {
    super(...e), F(this, "isUnmounted", !1), F(this, "isTallerThanHalfViewport", !1), F(this, "throttledUpdateHeight", o().throttle(() => {
      if (this.isUnmounted) return;
      let {
        height: e,
        onHeightTallerThanHalfViewportChange: t
      } = this.props, n = e > window.innerHeight / 2;
      this.isTallerThanHalfViewport !== n && (this.isTallerThanHalfViewport = n, t(n))
    }, 1e3))
  }
}

function ea(e, t, n, a) {
  return e.reduce((e, s, l) => {
    let {
      applicationId: i,
      branchId: r
    } = s, o = n.getApplication(i), u = a.getState(i, r);
    return null != o && e.push({
      key: "".concat(i, ":").concat(r),
      applicationId: i,
      branchId: r,
      state: u,
      application: o,
      libraryApplication: T.default.getLibraryApplication(i, r),
      finished: t,
      index: l
    }), e
  }, [])
}
t.default = (0, S.default)(u.default.connectStores([p.default, A.default, N.default, I.default, v.default], () => {
  let e = ea(N.default.activeItems, !1, p.default, A.default);
  return {
    applications: [...e, ...ea(N.default.finishedItems, !0, p.default, A.default)],
    paused: N.default.paused,
    isFocused: v.default.isFocused(),
    theme: I.default.theme
  }
})((0, m.default)(en)))