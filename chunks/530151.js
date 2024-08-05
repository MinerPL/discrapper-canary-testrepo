n(411104), n(47120), n(724458), n(653041);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(392711),
  o = n.n(l),
  c = n(442837),
  d = n(692547),
  u = n(780384),
  _ = n(481060),
  h = n(570140),
  E = n(239091),
  I = n(51025),
  m = n(785547),
  g = n(730749),
  p = n(112724),
  T = n(812206),
  S = n(44315),
  f = n(925329),
  C = n(707409),
  N = n(210887),
  A = n(283595),
  v = n(417363),
  Z = n(941128),
  L = n(451478),
  O = n(285952),
  R = n(151011),
  x = n(424218),
  b = n(780570),
  P = n(353042),
  M = n(86826),
  D = n(981631),
  y = n(689938),
  j = n(350062);

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let G = e => {
let {
  className: t,
  children: n,
  onContextMenu: a,
  item: s
} = e;
return (0, i.jsx)('div', {
  className: t,
  onContextMenu: e => a(e, s),
  children: n
});
  },
  k = [
d.Z.unsafe_rawColors.BLUE_345.css,
d.Z.colors.INTERACTIVE_NORMAL.css
  ],
  w = e => {
let {
  tooltip: t,
  onClick: n,
  icon: a
} = e;
return (0, i.jsx)(_.Tooltip, {
  text: t,
  children: e => {
    let {
      onMouseEnter: s,
      onMouseLeave: r
    } = e;
    return (0, i.jsx)(_.Button, {
      'aria-label': t,
      className: j.actionButton,
      innerClassName: j.actionButtonContents,
      color: _.Button.Colors.PRIMARY,
      size: _.Button.Sizes.ICON,
      onClick: n,
      onMouseEnter: s,
      onMouseLeave: r,
      children: (0, i.jsx)(a, {
        className: j.actionIcon
      })
    });
  }
});
  };

function B(e, t) {
  switch (t) {
case D.f07.POST_INSTALL_SCRIPTS:
case D.f07.PLANNING:
case D.f07.FINALIZING:
case D.f07.ALLOCATING_DISK:
  return ''.concat(e);
default:
  return (0, x.BU)(e, {
    useKibibytes: !0
  });
  }
}
let H = {
  [D.vxO.INSTALLING]: {
[C.J6.NONE]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING.format({
  percent: e,
  progress: t,
  total: n
}),
[C.J6.SECONDS]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_SECONDS.format({
  percent: e,
  progress: t,
  total: n,
  timeRemaining: i
}),
[C.J6.MINUTES]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_MINUTES.format({
  percent: e,
  progress: t,
  total: n,
  timeRemaining: i
}),
[C.J6.HOURS]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_HOURS.format({
  percent: e,
  progress: t,
  total: n,
  timeRemaining: i
})
  },
  [D.vxO.UPDATING]: {
[C.J6.NONE]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_UPDATING.format({
  percent: e,
  progress: t,
  total: n
}),
[C.J6.SECONDS]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_SECONDS.format({
  percent: e,
  progress: t,
  total: n,
  timeRemaining: i
}),
[C.J6.MINUTES]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_MINUTES.format({
  percent: e,
  progress: t,
  total: n,
  timeRemaining: i
}),
[C.J6.HOURS]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_HOURS.format({
  percent: e,
  progress: t,
  total: n,
  timeRemaining: i
})
  },
  [D.vxO.REPAIRING]: {
[C.J6.NONE]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING.format({
  percent: e,
  progress: t,
  total: n
}),
[C.J6.SECONDS]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_SECONDS.format({
  percent: e,
  progress: t,
  total: n,
  timeRemaining: i
}),
[C.J6.MINUTES]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_MINUTES.format({
  percent: e,
  progress: t,
  total: n,
  timeRemaining: i
}),
[C.J6.HOURS]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_HOURS.format({
  percent: e,
  progress: t,
  total: n,
  timeRemaining: i
})
  }
};

function V(e, t, n, i, a) {
  let s = H[t],
r = null != s ? Object.keys(s) : [],
{
  unit: l,
  time: o
} = (0, C.CI)(null != e ? e / 60 : null, r);
  if (null != s && null != l) {
let e = s[l];
return null != e ? e(n, i, a, o) : null;
  }
  return null;
}

function F(e) {
  let {
type: t,
stage: n,
percent: i,
progress: a,
total: s,
secondsRemaining: r
  } = e, l = B(s, n), o = B(a, n);
  switch (n) {
case D.f07.QUEUED:
  if (0 === a)
    return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_WAITING_FOR_ANOTHER_NO_TRANSITION;
  return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_WAITING_FOR_ANOTHER.format({
    percent: i,
    progress: o,
    total: l
  });
case D.f07.PLANNING:
  return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PLANNING.format({
    percent: i
  });
case D.f07.ALLOCATING_DISK:
  return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_ALLOCATING_DISK.format({
    percent: i
  });
case D.f07.PATCHING:
  return V(r, t, i, o, l);
case D.f07.FINALIZING:
  return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_FINALIZING.format({
    percent: i
  });
case D.f07.PAUSING:
  return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSING.format({
    percent: i,
    progress: o,
    total: l
  });
case D.f07.VERIFYING:
  return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_VERIFYING.format({
    percent: i,
    progress: o,
    total: l
  });
case D.f07.POST_INSTALL_SCRIPTS:
  return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_POST_INSTALL_SCRIPTS.format({
    percent: i,
    progress: o,
    total: l
  });
case D.f07.REPAIRING:
  if (t === D.vxO.REPAIRING)
    return V(r, t, i, o, l);
  return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_REPAIRING.format({
    percent: i,
    progress: o,
    total: l
  });
  }
  throw Error('Invalid Dispatch stage');
}
let Y = 'name',
  W = 'progress',
  z = 'actions';
class K extends a.PureComponent {
  get isFocused() {
let {
  cellProps: e
} = this.props;
return null != e && e.isFocused;
  }
  renderBody(e) {
let {
  percent: t,
  foregroundColor: n,
  foregroundGradientColor: a,
  message: s
} = e;
return (0, i.jsxs)(O.Z, {
  direction: O.Z.Direction.VERTICAL,
  children: [
    (0, i.jsx)(_.Progress, {
      percent: t,
      size: _.Progress.Sizes.SMALL,
      foregroundColor: (0, S.Lq)(n),
      foregroundGradientColor: null != a ? [
        (0, S.Lq)(a[0]),
        (0, S.Lq)(a[1])
      ] : void 0,
      animate: this.isFocused
    }),
    (0, i.jsx)('div', {
      className: j.progressCellText,
      children: null != s ? s : ''
    })
  ]
});
  }
  renderStackedProgress(e) {
let {
  percents: t,
  message: n
} = e;
return (0, i.jsxs)(O.Z, {
  direction: O.Z.Direction.VERTICAL,
  children: [
    (0, i.jsx)(_.StackedProgress, {
      percents: t,
      size: _.Progress.Sizes.SMALL,
      foregroundColors: k,
      animate: this.isFocused
    }),
    (0, i.jsx)('div', {
      className: j.progressCellText,
      children: null != n ? n : ''
    })
  ]
});
  }
  renderFinished() {
let {
  item: e
} = this.props;
return this.renderBody({
  message: y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_FINISHED.format({
    remove: () => I.wi(e.applicationId, e.branchId)
  }),
  foregroundColor: (0, u.ap)(e.theme) ? D.Ilk.PRIMARY_300 : D.Ilk.PRIMARY_500,
  percent: 100
});
  }
  renderQueued() {
let e, t;
let {
  item: {
    state: n,
    theme: i
  }
} = this.props;
if (null != n) {
  let {
    progress: i,
    total: a,
    stage: s
  } = n;
  if (null != i && null != a) {
    let n = B(a, s),
      r = B(i, s),
      l = Math.floor(t = b.xI(i, a));
    e = s === D.f07.PAUSING ? y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSING.format({
      percent: l,
      progress: r,
      total: n
    }) : y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_QUEUED.format({
      percent: l,
      progress: r,
      total: n
    });
  }
}
return (null == t || null == e) && (t = 0, e = y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_QUEUED_NO_TRANSITION), this.renderBody({
  percent: t,
  foregroundColor: (0, u.ap)(i) ? D.Ilk.PRIMARY_300 : D.Ilk.PRIMARY_500,
  message: e
});
  }
  renderPaused() {
let {
  item: {
    state: e,
    theme: t
  }
} = this.props;
if (null == e)
  return null;
let {
  progress: n,
  total: i
} = e;
if (null == n || null == i)
  return null;
let a = b.xI(n, i),
  s = Math.floor(a),
  r = 0 === n && 1 === i ? y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSED_NO_TRANSITION : y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSED.format({
    percent: s,
    progress: (0, x.BU)(n),
    total: (0, x.BU)(i)
  });
return this.renderBody({
  message: r,
  foregroundColor: (0, u.ap)(t) ? D.Ilk.PRIMARY_300 : D.Ilk.PRIMARY_500,
  percent: a
});
  }
  renderProgressPatching() {
return (0, i.jsx)(P.Z, {
  getHistoricalTotalBytes: v.Z.getHistoricalTotalBytesWritten,
  updateInterval: 5000,
  children: this.renderProgressPatchingBody
});
  }
  renderProgressDefault() {
let {
  state: e
} = this.props.item;
if (null == e)
  return null;
let {
  total: t,
  progress: n,
  stage: i,
  type: a
} = e;
if (null == t || null == n || null == i)
  return null;
let s = b.xI(n, t),
  r = Math.floor(s);
return this.renderBody({
  percent: s,
  message: F({
    type: a,
    stage: i,
    percent: r,
    progress: n,
    total: t
  }),
  foregroundColor: D.Ilk.BLUE_345
});
  }
  renderProgress() {
let {
  state: e
} = this.props.item;
switch (null != e ? e.stage : null) {
  case D.f07.PATCHING:
  case D.f07.REPAIRING:
    return this.renderProgressPatching();
  default:
    return this.renderProgressDefault();
}
  }
  render() {
let {
  item: e,
  cellProps: t
} = this.props;
if (e.finished)
  return this.renderFinished();
if (e.index > 0)
  return this.renderQueued();
if (null != e.state && (e.state.type === D.vxO.UPDATING || e.state.type === D.vxO.REPAIRING || e.state.type === D.vxO.INSTALLING))
  return null != t && t.paused ? this.renderPaused() : this.renderProgress();
return null;
  }
  constructor(...e) {
super(...e), U(this, 'renderProgressPatchingBody', (e, t) => {
  let {
    item: {
      state: n
    }
  } = this.props;
  if (null == n)
    return null;
  let {
    stage: i,
    progress: a,
    total: s,
    type: r,
    readerProgress: l
  } = n;
  if (null == a || null == s || null == i)
    return null;
  let o = b.xI(a, s),
    c = b.xI(null != l ? l : 0, s),
    d = e[e.length - 1] / t * 1000,
    u = s - a,
    _ = F({
      type: r,
      stage: i,
      percent: Math.floor(o),
      progress: a,
      total: s,
      secondsRemaining: 0 !== d ? Math.max(1, u / d) : null
    });
  return this.renderStackedProgress({
    percents: [
      o,
      c
    ],
    message: _
  });
});
  }
}
let q = () => (0, i.jsx)(w, {
icon: _.PlayIcon,
tooltip: y.Z.Messages.GAME_LIBRARY_UPDATES_ACTION_RESUME,
onClick: () => I.v4()
  }),
  Q = () => (0, i.jsx)(w, {
icon: _.PauseIcon,
tooltip: y.Z.Messages.GAME_LIBRARY_UPDATES_ACTION_PAUSE,
onClick: () => I.wO()
  }),
  X = e => {
let {
  item: t
} = e;
return (0, i.jsx)(w, {
  icon: _.ArrowSmallUpIcon,
  tooltip: y.Z.Messages.GAME_LIBRARY_UPDATES_ACTION_MOVE_UP,
  onClick: () => I.A1(t.applicationId, t.branchId)
});
  },
  J = e => {
let {
  item: t
} = e;
return (0, i.jsx)(w, {
  icon: _.CloseSmallIcon,
  tooltip: y.Z.Messages.GAME_LIBRARY_UPDATES_ACTION_REMOVE,
  onClick: () => I.al(t.applicationId, t.branchId)
});
  },
  $ = [{
  key: Y,
  cellClassName: j.nameCell,
  render: e => (0, i.jsxs)(O.Z, {
    align: O.Z.Align.CENTER,
    children: [
      (0, i.jsx)(f.Z, {
        game: e.application,
        className: j.__invalid_gameIcon,
        size: f.Z.Sizes.SMALL
      }),
      (0, i.jsx)('div', {
        className: j.nameCellText,
        children: e.application.name
      })
    ]
  })
},
{
  key: W,
  cellClassName: j.progressCell,
  headerCellClassName: j.progressCellHeader,
  bodyCellClassName: j.progressCellBody,
  render: (e, t) => (0, i.jsx)(K, {
    item: e,
    cellProps: t
  })
},
{
  key: z,
  cellClassName: j.actionsCell,
  render(e, t) {
    let n, a;
    return e.finished ? n = null != e.libraryApplication ? (0, i.jsx)(m.Z, {
      libraryApplication: e.libraryApplication,
      size: _.Button.Sizes.SMALL,
      className: j.gameActionButton,
      source: D.Sbl.APPLICATION_LIBRARY_UPDATES
    }) : null : null != e.state ? e.state.type !== D.vxO.UP_TO_DATE && (n = e.index > 0 ? (0, i.jsx)(X, {
      item: e
    }) : null != t && t.paused ? (0, i.jsx)(q, {}) : (0, i.jsx)(Q, {
      item: e
    }), a = (0, i.jsx)(J, {
      item: e
    })) : a = (0, i.jsx)(J, {
      item: e
    }), (0, i.jsxs)(O.Z, {
      justify: O.Z.Justify.END,
      children: [
        n,
        a
      ]
    });
  }
}
  ];
class ee extends a.PureComponent {
  componentDidMount() {
window.addEventListener('resize', this.throttledUpdateHeight);
  }
  componentDidUpdate(e) {
this.props.height !== e.height && this.throttledUpdateHeight();
  }
  componentWillUnmount() {
let {
  applications: e
} = this.props;
e.forEach(e => {
  e.finished && h.Z.wait(() => {
    I.wi(e.applicationId, e.branchId);
  });
}), window.removeEventListener('resize', this.throttledUpdateHeight), this.isUnmounted = !0;
  }
  render() {
let {
  applications: e,
  paused: t,
  isFocused: a,
  theme: s,
  analyticsContext: l
} = this.props;
return 0 === e.length ? null : (0, i.jsxs)('div', {
  className: j.gameUpdates,
  children: [
    (0, i.jsxs)('div', {
      className: j.headerRow,
      children: [
        (0, i.jsx)(M.Z, {
          className: r()(j.headerCell, j.networkProgress),
          title: y.Z.Messages.GAME_LIBRARY_UPDATES_HEADER_NETWORK,
          getHistoricalTotalBytes: v.Z.getHistoricalTotalBytesDownloaded,
          color: D.Ilk.GREEN_360,
          animate: a
        }),
        (0, i.jsx)(M.Z, {
          className: r()(j.headerCell, j.diskProgress),
          title: y.Z.Messages.GAME_LIBRARY_UPDATES_HEADER_DISK,
          getHistoricalTotalBytes: v.Z.getHistoricalTotalBytesWritten,
          color: D.Ilk.BLUE_345,
          animate: a
        })
      ]
    }),
    (0, i.jsx)(R.Z, {
      hasHeader: !1,
      columns: $,
      data: e,
      className: j.table,
      rowClassName: j.row,
      rowComponent: G,
      cellProps: {
        paused: t,
        isFocused: a,
        theme: s
      },
      rowProps: {
        onContextMenu: (e, t) => {
          var a, s, r;
          return a = e, s = t, r = l, void E.jW(a, async () => {
            let {
              default: e
            } = await n.e('98335').then(n.bind(n, 485292));
            return t => (0, i.jsx)(e, {
              ...t,
              applicationId: s.applicationId,
              branchId: s.branchId,
              analyticsContext: r
            });
          });
        }
      },
      bodyCellClassName: j.cell
    })
  ]
});
  }
  constructor(...e) {
super(...e), U(this, 'isUnmounted', !1), U(this, 'isTallerThanHalfViewport', !1), U(this, 'throttledUpdateHeight', o().throttle(() => {
  if (this.isUnmounted)
    return;
  let {
    height: e,
    onHeightTallerThanHalfViewportChange: t
  } = this.props, n = e > window.innerHeight / 2;
  this.isTallerThanHalfViewport !== n && (this.isTallerThanHalfViewport = n, t(n));
}, 1000));
  }
}

function et(e, t, n, i) {
  return e.reduce((e, a, s) => {
let {
  applicationId: r,
  branchId: l
} = a, o = n.getApplication(r), c = i.getState(r, l);
return null != o && e.push({
  key: ''.concat(r, ':').concat(l),
  applicationId: r,
  branchId: l,
  state: c,
  application: o,
  libraryApplication: A.Z.getLibraryApplication(r, l),
  finished: t,
  index: s
}), e;
  }, []);
}
t.Z = (0, p.Z)(c.ZP.connectStores([
  T.Z,
  v.Z,
  Z.Z,
  N.Z,
  L.Z
], () => {
  let e = et(Z.Z.activeItems, !1, T.Z, v.Z);
  return {
applications: [
  ...e,
  ...et(Z.Z.finishedItems, !0, T.Z, v.Z)
],
paused: Z.Z.paused,
isFocused: L.Z.isFocused(),
theme: N.Z.theme
  };
})((0, g.Z)(ee)));