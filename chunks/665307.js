n.d(t, {
  Z: function() {
return G;
  }
}), n(411104), n(47120);
var i, s = n(735250),
  a = n(470079),
  r = n(120356),
  l = n.n(r),
  o = n(266067),
  c = n(442837),
  d = n(846519),
  u = n(477690),
  _ = n(481060),
  h = n(570140),
  E = n(239091),
  I = n(287259),
  m = n(785547),
  g = n(490983),
  p = n(799777),
  T = n(285952),
  S = n(366695),
  C = n(366966),
  f = n(151011),
  N = n(626135),
  A = n(780570),
  Z = n(624138),
  L = n(645818),
  v = n(981631),
  O = n(689938),
  R = n(895220);

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let b = (0, Z.Mg)(u.Z.GAME_LIST_ROW_MIN_HEIGHT),
  P = (0, Z.Mg)(u.Z.GAME_LIST_LINKED_TO_GLOW_DURATION),
  M = Object.freeze({
[v.iEv.PLATFORM]: 'Platform',
[v.iEv.LAST_PLAYED]: 'Last Played',
[v.iEv.NAME]: 'Name'
  }),
  D = e => {
let {
  flag: t,
  icon: n,
  item: i,
  tooltip: a
} = e, r = i.libraryApplication.hasFlag(t);
return (0, s.jsx)(_.Tooltip, {
  text: a,
  children: e => (0, s.jsx)(n, {
    className: l()(R.settingIcon, {
      [R.hidden]: !r
    }),
    ...e
  })
});
  },
  y = [{
  key: v.iEv.NAME,
  renderHeader: () => O.Z.Messages.GAME_LIBRARY_LIST_HEADER_NAME,
  sort: !0,
  cellClassName: R.nameCell,
  bodyCellClassName: R.nameBodyCell,
  render: e => (0, s.jsxs)(T.Z, {
    align: T.Z.Align.CENTER,
    children: [
      (0, s.jsx)(S.Z, {
        game: e.application,
        size: S.Z.Sizes.SMALL,
        className: R.gameIcon
      }),
      (0, s.jsxs)('div', {
        className: R.nameCellInfo,
        children: [
          (0, s.jsx)('div', {
            className: R.nameCellText,
            children: e.libraryApplication.getBranchedName(e.application)
          }),
          e.libraryApplication.hasFlag(v.eHb.PREMIUM) ? (0, s.jsx)(_.Tooltip, {
            text: O.Z.Messages.PREMIUM_GAME,
            children: e => (0, s.jsx)(_.NitroWheelIcon, {
              size: 'md',
              color: 'currentColor',
              className: R.nitroIcon,
              ...e
            })
          }) : null
        ]
      })
    ]
  })
},
{
  key: v.iEv.PLATFORM,
  renderHeader: () => O.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
  sort: !0,
  cellClassName: R.platformCell,
  bodyCellClassName: R.textCell,
  render(e) {
    let t = e.libraryApplication.getDistributor();
    return (0, s.jsx)(T.Z, {
      align: T.Z.Align.CENTER,
      children: null != t ? v.EOG[t] : O.Z.Messages.GAME_LIBRARY_NOT_APPLICABLE
    });
  }
},
{
  key: v.iEv.LAST_PLAYED,
  renderHeader: () => O.Z.Messages.GAME_LIBRARY_LIST_HEADER_LAST_PLAYED,
  sort: !0,
  cellClassName: R.lastPlayedCell,
  bodyCellClassName: R.textCell,
  render(e) {
    let t;
    return t = e.isRunning ? O.Z.Messages.GAME_LIBRARY_LAST_PLAYED_PLAYING_NOW : e.isNew ? O.Z.Messages.GAME_LIBRARY_NEW : 0 !== e.lastPlayed ? (0, s.jsx)(C.ZP, {
      end: e.lastPlayed,
      location: C.ZP.Locations.GAME_LIBRARY_LAST_PLAYED
    }) : O.Z.Messages.GAME_LIBRARY_LAST_PLAYED_NONE, (0, s.jsx)(T.Z, {
      align: T.Z.Align.CENTER,
      className: l()({
        [R.lastPlayedCellNew]: e.isNew
      }),
      children: t
    });
  }
},
{
  key: v.iEv.ACTIONS,
  renderHeader: () => null,
  cellClassName: R.actionsCell,
  render(e, t, n) {
    var i, r;
    if (null == t)
      throw Error('No cell props defined.');
    let o = e.key === t.activeRowKey;
    return (0, s.jsxs)(a.Fragment, {
      children: [
        (0, s.jsxs)('div', {
          className: R.settingIcons,
          children: [
            (0, s.jsx)(D, {
              flag: v.eHb.PRIVATE,
              item: e,
              icon: _.EyeSlashIcon,
              tooltip: O.Z.Messages.GAME_LIBRARY_PRIVATE_TOOLTIP
            }),
            (0, s.jsx)(D, {
              flag: v.eHb.OVERLAY_DISABLED,
              item: e,
              icon: _.ScreenSlashIcon,
              tooltip: O.Z.Messages.GAME_LIBRARY_OVERLAY_DISABLED_TOOLTIP
            }),
            (0, s.jsx)(L.Z, {
              className: l()(R.settingIcon, {
                [R.hidden]: !e.supportsCloudSync
              }),
              libraryApplication: e.libraryApplication
            })
          ]
        }),
        (0, A.Je)(e.libraryApplication) ? (0, s.jsx)(m.Z, {
          analyticsListSort: (i = t.sortKey, r = t.sortDirection, ''.concat(M[i], ' ').concat(r === v.sHY.ASCENDING ? 'ASC' : 'DESC')),
          analyticsListIndex: n,
          source: v.Sbl.APPLICATION_LIBRARY,
          libraryApplication: e.libraryApplication,
          color: o ? _.Button.Colors.GREEN : _.Button.Colors.PRIMARY,
          isPlayShiny: o && e.defaultAction === v.apO.PLAY,
          size: R.actionButtonSize,
          hideProgress: null != e.defaultAction,
          onDropdownOpen: () => null != t && t.setActiveRowKey(e),
          onDropdownClose: () => null != t && t.clearActiveRowKey()
        }) : (0, s.jsx)('div', {
          children: 'deprecated!'
        })
      ]
    });
  }
}
  ],
  j = e => {
let {
  item: t,
  activeRowKey: n,
  highlightedApplicationKey: i,
  onMouseEnter: a,
  onMouseLeave: r,
  onContextMenu: o,
  setRef: c,
  ...d
} = e, u = t.key === n, _ = t.key === i;
return (0, s.jsx)('div', {
  className: l()({
    [R.rowWrapperActive]: u && !_,
    [R.rowWrapperGlow]: _,
    [R.rowWrapper]: !u && !_,
    [R.rowWrapperDim]: !u && !t.isLaunchable
  }),
  ref: e => c(e, t.key),
  onMouseEnter: () => a(t),
  onMouseLeave: r,
  onContextMenu: e => o(e, t),
  children: (0, s.jsx)('div', {
    ...d
  })
});
  };
class U extends(i = a.PureComponent) {
  componentDidMount() {
let {
  fetched: e
} = this.props;
e && (this.handleHighlightedApplicationKey(), this.trackViewed());
  }
  componentWillUnmount() {
this._didUnmount = !0;
  }
  componentDidUpdate(e) {
!e.fetched && this.props.fetched && (this.handleHighlightedApplicationKey(), this.trackViewed());
let t = this.props.activeRowKey;
if (null != t && e.activeRowKey !== t && this.props.isNavigatingByKeyboard) {
  let e = this._rowRefs[t];
  null != e && (h.Z.wait(E.Zy), this.props.scrollToRow(e, b));
}
  }
  handleHighlightedApplicationKey() {
let {
  highlightedApplicationKey: e
} = this.state;
null != e && null != this._rowRefs[e] && (this.props.scrollToRow(this._rowRefs[e], b), new d.V7().start(P, () => {
  !this._didUnmount && this.setState({
    highlightedApplicationKey: null
  });
}));
  }
  trackViewed() {
let e = {
    num_applications_total: 0,
    num_applications_discord: 0,
    num_applications_steam: 0,
    num_applications_battlenet: 0,
    num_applications_twitch: 0,
    num_applications_uplay: 0,
    num_applications_origin: 0,
    num_applications_gog: 0,
    num_applications_epic: 0
  },
  {
    analyticsContext: t,
    applicationViewItems: n
  } = this.props;
for (let t of n) {
  switch (t.libraryApplication.getDistributor()) {
    case v.GQo.DISCORD:
      e.num_applications_discord++;
      break;
    case v.GQo.STEAM:
      e.num_applications_steam++;
      break;
    case v.GQo.BATTLENET:
      e.num_applications_battlenet++;
      break;
    case v.GQo.TWITCH:
      e.num_applications_twitch++;
      break;
    case v.GQo.UPLAY:
      e.num_applications_uplay++;
      break;
    case v.GQo.ORIGIN:
      e.num_applications_origin++;
      break;
    case v.GQo.GOG:
      e.num_applications_gog++;
      break;
    case v.GQo.EPIC:
      e.num_applications_epic++;
  }
  e.num_applications_total++;
}
N.default.track(v.rMx.LIBRARY_VIEWED, {
  ...e,
  load_id: t.loadId
});
  }
  handleSort(e, t) {
I.fS(e, t);
  }
  renderImportHelp() {
let e;
let {
  applicationViewItems: t,
  filterQuery: n
} = this.props, i = t.length > 0;
return i ? null : (e = '' !== n ? O.Z.Messages.APPLICATION_LIBRARY_EMPTY_SEARCH_DESCRIPTION.format({
  query: n
}) : O.Z.Messages.APPLICATION_LIBRARY_EMPTY_STATE_DESCRIPTION_NO_IMPORT, (0, s.jsxs)('div', {
  className: i ? R.emptyStateSmall : R.emptyStateLarge,
  children: [
    (0, s.jsx)('div', {
      className: R.emptyWumpus
    }),
    (0, s.jsx)(T.Z, {
      grow: 0,
      shrink: i ? 1 : 0,
      direction: T.Z.Direction.VERTICAL,
      children: (0, s.jsxs)('div', {
        className: R.emptyStateText,
        children: [
          (0, s.jsx)('div', {
            className: R.emptyStateHeader,
            children: O.Z.Messages.APPLICATION_LIBRARY_EMPTY_STATE_HEADER
          }),
          (0, s.jsx)('div', {
            className: R.emptyStateDescription,
            children: e
          })
        ]
      })
    })
  ]
}));
  }
  render() {
let {
  sortKey: e,
  sortDirection: t,
  applicationViewItems: n,
  activeRowKey: i,
  stickyHeader: r
} = this.props, {
  overflowMenuRowKey: l,
  highlightedApplicationKey: o
} = this.state;
return (0, s.jsxs)(a.Fragment, {
  children: [
    n.length > 0 ? (0, s.jsx)(f.Z, {
      columns: y,
      data: n,
      sortData: !1,
      rowComponent: j,
      className: R.table,
      headerClassName: r ? R.stickyHeader : R.header,
      headerCellClassName: R.headerCell,
      sortedHeaderCellClassName: R.headerCellSorted,
      bodyCellClassName: R.bodyCell,
      rowClassName: R.row,
      sortKey: e,
      sortDirection: t,
      stickyHeader: r,
      rowProps: {
        activeRowKey: null != l ? l : i,
        highlightedApplicationKey: o,
        onMouseEnter: this.handleRowMouseEnter,
        onMouseLeave: this.handleRowMouseLeave,
        onContextMenu: this.handleApplicationContextMenu,
        setRef: this.setRowRef
      },
      cellProps: {
        activeRowKey: null != l ? l : i,
        onContextMenu: this.handleApplicationContextMenu,
        setActiveRowKey: this.setActiveRowKey,
        clearActiveRowKey: this.clearActiveRowKey,
        sortKey: e,
        sortDirection: t
      },
      onSort: this.handleSort
    }) : null,
    this.renderImportHelp()
  ]
});
  }
  constructor(...e) {
super(...e), x(this, '_didUnmount', !1), x(this, '_rowRefs', {}), x(this, 'state', {
  overflowMenuRowKey: null,
  highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null
}), x(this, 'setActiveRowKey', e => {
  this.setState({
    overflowMenuRowKey: e.key
  });
}), x(this, 'clearActiveRowKey', () => {
  !this._didUnmount && this.setState({
    overflowMenuRowKey: null
  });
}), x(this, 'handleRowMouseEnter', e => {
  !this.props.isNavigatingByKeyboard && I.wX(e.key);
}), x(this, 'handleRowMouseLeave', () => {
  !this.props.isNavigatingByKeyboard && I.wX(null);
}), x(this, 'setRowRef', (e, t) => {
  this._rowRefs[t] = e;
}), x(this, 'handleApplicationContextMenu', (e, t) => {
  this.setActiveRowKey(t);
  let {
    analyticsContext: i
  } = this.props;
  (0, E.jW)(e, async () => {
    let {
      default: e
    } = await n.e('98335').then(n.bind(n, 485292));
    return n => (0, s.jsx)(e, {
      ...n,
      applicationId: t.libraryApplication.id,
      branchId: t.libraryApplication.branchId,
      analyticsContext: i
    });
  }, {
    onClose: this.clearActiveRowKey
  });
});
  }
}

function G(e) {
  let t = a.useContext(N.AnalyticsContext),
n = (0, o.TH)(),
{
  applicationViewItems: i,
  filterQuery: r,
  fetched: l
} = (0, c.cj)([g.Z], () => ({
  applicationViewItems: g.Z.sortedFilteredLibraryApplicationViewItems,
  filterQuery: g.Z.applicationFilterQuery,
  fetched: g.Z.hasFetchedApplications
})),
{
  sortKey: d,
  sortDirection: u,
  activeRowKey: _,
  isNavigatingByKeyboard: h
} = (0, c.cj)([p.Z], () => ({
  sortKey: p.Z.sortKey,
  sortDirection: p.Z.sortDirection,
  activeRowKey: p.Z.activeRowKey,
  isNavigatingByKeyboard: p.Z.isNavigatingByKeyboard
}));
  return (0, s.jsx)(U, {
...e,
analyticsContext: t,
location: n,
applicationViewItems: i,
filterQuery: r,
fetched: l,
sortKey: d,
sortDirection: u,
activeRowKey: _,
isNavigatingByKeyboard: h
  });
}
x(U, 'defaultProps', {
  stickyHeader: !1
});