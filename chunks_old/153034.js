"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("70102"), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("90915"),
  o = n("446674"),
  u = n("862337"),
  d = n("769846"),
  c = n("77078"),
  f = n("913144"),
  E = n("272030"),
  h = n("259083"),
  _ = n("790219"),
  C = n("827825"),
  S = n("577427"),
  I = n("946749"),
  m = n("145131"),
  p = n("953109"),
  T = n("280174"),
  g = n("158352"),
  A = n("867544"),
  N = n("216422"),
  R = n("688342"),
  O = n("599110"),
  v = n("964889"),
  L = n("159885"),
  M = n("950395"),
  P = n("49111"),
  y = n("782340"),
  D = n("393918");
let x = (0, L.cssValueToNumber)(d.default.GAME_LIST_ROW_MIN_HEIGHT),
  b = (0, L.cssValueToNumber)(d.default.GAME_LIST_LINKED_TO_GLOW_DURATION),
  U = Object.freeze({
    [P.GameTableListKeys.PLATFORM]: "Platform",
    [P.GameTableListKeys.LAST_PLAYED]: "Last Played",
    [P.GameTableListKeys.NAME]: "Name"
  }),
  G = e => {
    let {
      flag: t,
      icon: n,
      item: s,
      tooltip: l
    } = e, r = s.libraryApplication.hasFlag(t);
    return (0, a.jsx)(c.Tooltip, {
      text: l,
      children: e => (0, a.jsx)(n, {
        className: i(D.settingIcon, {
          [D.hidden]: !r
        }),
        ...e
      })
    })
  },
  j = [{
    key: P.GameTableListKeys.NAME,
    renderHeader: () => y.default.Messages.GAME_LIBRARY_LIST_HEADER_NAME,
    sort: !0,
    cellClassName: D.nameCell,
    bodyCellClassName: D.nameBodyCell,
    render: e => (0, a.jsxs)(m.default, {
      align: m.default.Align.CENTER,
      children: [(0, a.jsx)(p.default, {
        game: e.application,
        size: p.default.Sizes.SMALL,
        className: D.gameIcon
      }), (0, a.jsxs)("div", {
        className: D.nameCellInfo,
        children: [(0, a.jsx)("div", {
          className: D.nameCellText,
          children: e.libraryApplication.getBranchedName(e.application)
        }), e.libraryApplication.hasFlag(P.LibraryApplicationFlags.PREMIUM) ? (0, a.jsx)(c.Tooltip, {
          text: y.default.Messages.PREMIUM_GAME,
          children: e => (0, a.jsx)(N.default, {
            className: D.nitroIcon,
            ...e
          })
        }) : null]
      })]
    })
  }, {
    key: P.GameTableListKeys.PLATFORM,
    renderHeader: () => y.default.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
    sort: !0,
    cellClassName: D.platformCell,
    bodyCellClassName: D.textCell,
    render(e) {
      let t = e.libraryApplication.getDistributor();
      return (0, a.jsx)(m.default, {
        align: m.default.Align.CENTER,
        children: null != t ? P.DistributorNames[t] : y.default.Messages.GAME_LIBRARY_NOT_APPLICABLE
      })
    }
  }, {
    key: P.GameTableListKeys.LAST_PLAYED,
    renderHeader: () => y.default.Messages.GAME_LIBRARY_LIST_HEADER_LAST_PLAYED,
    sort: !0,
    cellClassName: D.lastPlayedCell,
    bodyCellClassName: D.textCell,
    render(e) {
      let t;
      return t = e.isRunning ? y.default.Messages.GAME_LIBRARY_LAST_PLAYED_PLAYING_NOW : e.isNew ? y.default.Messages.GAME_LIBRARY_NEW : 0 !== e.lastPlayed ? (0, a.jsx)(T.default, {
        end: e.lastPlayed,
        location: T.default.Locations.GAME_LIBRARY_LAST_PLAYED
      }) : y.default.Messages.GAME_LIBRARY_LAST_PLAYED_NONE, (0, a.jsx)(m.default, {
        align: m.default.Align.CENTER,
        className: i({
          [D.lastPlayedCellNew]: e.isNew
        }),
        children: t
      })
    }
  }, {
    key: P.GameTableListKeys.ACTIONS,
    renderHeader: () => null,
    cellClassName: D.actionsCell,
    render(e, t, n) {
      var l, r;
      if (null == t) throw Error("No cell props defined.");
      let o = e.key === t.activeRowKey;
      return (0, a.jsxs)(s.Fragment, {
        children: [(0, a.jsxs)("div", {
          className: D.settingIcons,
          children: [(0, a.jsx)(G, {
            flag: P.LibraryApplicationFlags.PRIVATE,
            item: e,
            icon: A.default,
            tooltip: y.default.Messages.GAME_LIBRARY_PRIVATE_TOOLTIP
          }), (0, a.jsx)(G, {
            flag: P.LibraryApplicationFlags.OVERLAY_DISABLED,
            item: e,
            icon: R.default,
            tooltip: y.default.Messages.GAME_LIBRARY_OVERLAY_DISABLED_TOOLTIP
          }), (0, a.jsx)(M.default, {
            className: i(D.settingIcon, {
              [D.hidden]: !e.supportsCloudSync
            }),
            libraryApplication: e.libraryApplication
          })]
        }), (0, v.isUserEntitledToLibraryApplication)(e.libraryApplication) ? (0, a.jsx)(C.default, {
          analyticsListSort: (l = t.sortKey, r = t.sortDirection, "".concat(U[l], " ").concat(r === P.TableSortDirections.ASCENDING ? "ASC" : "DESC")),
          analyticsListIndex: n,
          source: P.AnalyticsLocations.APPLICATION_LIBRARY,
          libraryApplication: e.libraryApplication,
          color: o ? c.Button.Colors.GREEN : c.Button.Colors.PRIMARY,
          isPlayShiny: o && e.defaultAction === P.LibraryApplicationActions.PLAY,
          size: D.actionButtonSize,
          hideProgress: null != e.defaultAction,
          onDropdownOpen: () => null != t && t.setActiveRowKey(e),
          onDropdownClose: () => null != t && t.clearActiveRowKey()
        }) : (0, a.jsx)(_.default, {
          skuId: e.libraryApplication.sku.id,
          applicationId: e.application.id,
          color: o ? c.Button.Colors.GREEN : c.Button.Colors.PRIMARY,
          customDisabledColor: c.Button.Colors.PRIMARY,
          size: D.actionButtonSize
        })]
      })
    }
  }],
  w = e => {
    let {
      item: t,
      activeRowKey: n,
      highlightedApplicationKey: s,
      onMouseEnter: l,
      onMouseLeave: r,
      onContextMenu: o,
      setRef: u,
      ...d
    } = e, c = t.key === n, f = t.key === s;
    return (0, a.jsx)("div", {
      className: i({
        [D.rowWrapperActive]: c && !f,
        [D.rowWrapperGlow]: f,
        [D.rowWrapper]: !c && !f,
        [D.rowWrapperDim]: !c && !t.isLaunchable
      }),
      ref: e => u(e, t.key),
      onMouseEnter: () => l(t),
      onMouseLeave: r,
      onContextMenu: e => o(e, t),
      children: (0, a.jsx)("div", {
        ...d
      })
    })
  };
class k extends s.PureComponent {
  componentDidMount() {
    let {
      fetched: e
    } = this.props;
    e && (this.handleHighlightedApplicationKey(), this.trackViewed())
  }
  componentWillUnmount() {
    this._didUnmount = !0
  }
  componentDidUpdate(e) {
    !e.fetched && this.props.fetched && (this.handleHighlightedApplicationKey(), this.trackViewed());
    let t = this.props.activeRowKey;
    if (null != t && e.activeRowKey !== t && this.props.isNavigatingByKeyboard) {
      let e = this._rowRefs[t];
      null != e && (f.default.wait(E.closeContextMenu), this.props.scrollToRow(e, x))
    }
  }
  handleHighlightedApplicationKey() {
    let {
      highlightedApplicationKey: e
    } = this.state;
    if (null != e && null != this._rowRefs[e]) {
      this.props.scrollToRow(this._rowRefs[e], x);
      let t = new u.Timeout;
      t.start(b, () => {
        !this._didUnmount && this.setState({
          highlightedApplicationKey: null
        })
      })
    }
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
        case P.Distributors.DISCORD:
          e.num_applications_discord++;
          break;
        case P.Distributors.STEAM:
          e.num_applications_steam++;
          break;
        case P.Distributors.BATTLENET:
          e.num_applications_battlenet++;
          break;
        case P.Distributors.TWITCH:
          e.num_applications_twitch++;
          break;
        case P.Distributors.UPLAY:
          e.num_applications_uplay++;
          break;
        case P.Distributors.ORIGIN:
          e.num_applications_origin++;
          break;
        case P.Distributors.GOG:
          e.num_applications_gog++;
          break;
        case P.Distributors.EPIC:
          e.num_applications_epic++
      }
      e.num_applications_total++
    }
    O.default.track(P.AnalyticEvents.LIBRARY_VIEWED, {
      ...e,
      load_id: t.loadId
    })
  }
  handleSort(e, t) {
    h.sortList(e, t)
  }
  renderImportHelp() {
    let e;
    let {
      applicationViewItems: t,
      filterQuery: n
    } = this.props, s = t.length > 0;
    return s ? null : (e = "" !== n ? y.default.Messages.APPLICATION_LIBRARY_EMPTY_SEARCH_DESCRIPTION.format({
      query: n
    }) : y.default.Messages.APPLICATION_LIBRARY_EMPTY_STATE_DESCRIPTION_NO_IMPORT, (0, a.jsxs)("div", {
      className: s ? D.emptyStateSmall : D.emptyStateLarge,
      children: [(0, a.jsx)("div", {
        className: D.emptyWumpus
      }), (0, a.jsx)(m.default, {
        grow: 0,
        shrink: s ? 1 : 0,
        direction: m.default.Direction.VERTICAL,
        children: (0, a.jsxs)("div", {
          className: D.emptyStateText,
          children: [(0, a.jsx)("div", {
            className: D.emptyStateHeader,
            children: y.default.Messages.APPLICATION_LIBRARY_EMPTY_STATE_HEADER
          }), (0, a.jsx)("div", {
            className: D.emptyStateDescription,
            children: e
          })]
        })
      })]
    }))
  }
  render() {
    let {
      sortKey: e,
      sortDirection: t,
      applicationViewItems: n,
      activeRowKey: l,
      stickyHeader: i
    } = this.props, {
      overflowMenuRowKey: r,
      highlightedApplicationKey: o
    } = this.state;
    return (0, a.jsxs)(s.Fragment, {
      children: [n.length > 0 ? (0, a.jsx)(g.default, {
        columns: j,
        data: n,
        sortData: !1,
        rowComponent: w,
        className: D.table,
        headerClassName: i ? D.stickyHeader : D.header,
        headerCellClassName: D.headerCell,
        sortedHeaderCellClassName: D.headerCellSorted,
        bodyCellClassName: D.bodyCell,
        rowClassName: D.row,
        sortKey: e,
        sortDirection: t,
        stickyHeader: i,
        rowProps: {
          activeRowKey: null != r ? r : l,
          highlightedApplicationKey: o,
          onMouseEnter: this.handleRowMouseEnter,
          onMouseLeave: this.handleRowMouseLeave,
          onContextMenu: this.handleApplicationContextMenu,
          setRef: this.setRowRef
        },
        cellProps: {
          activeRowKey: null != r ? r : l,
          onContextMenu: this.handleApplicationContextMenu,
          setActiveRowKey: this.setActiveRowKey,
          clearActiveRowKey: this.clearActiveRowKey,
          sortKey: e,
          sortDirection: t
        },
        onSort: this.handleSort
      }) : null, this.renderImportHelp()]
    })
  }
  constructor(...e) {
    super(...e), this._didUnmount = !1, this._rowRefs = {}, this.state = {
      overflowMenuRowKey: null,
      highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null
    }, this.setActiveRowKey = e => {
      this.setState({
        overflowMenuRowKey: e.key
      })
    }, this.clearActiveRowKey = () => {
      !this._didUnmount && this.setState({
        overflowMenuRowKey: null
      })
    }, this.handleRowMouseEnter = e => {
      !this.props.isNavigatingByKeyboard && h.updateActiveRowKey(e.key)
    }, this.handleRowMouseLeave = () => {
      !this.props.isNavigatingByKeyboard && h.updateActiveRowKey(null)
    }, this.setRowRef = (e, t) => {
      this._rowRefs[t] = e
    }, this.handleApplicationContextMenu = (e, t) => {
      this.setActiveRowKey(t);
      let {
        analyticsContext: s
      } = this.props;
      (0, E.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("975419").then(n.bind(n, "975419"));
        return n => (0, a.jsx)(e, {
          ...n,
          applicationId: t.libraryApplication.id,
          branchId: t.libraryApplication.branchId,
          analyticsContext: s
        })
      }, {
        onClose: this.clearActiveRowKey
      })
    }
  }
}

function F(e) {
  let t = s.useContext(O.AnalyticsContext),
    n = (0, r.useLocation)(),
    {
      applicationViewItems: l,
      filterQuery: i,
      fetched: u
    } = (0, o.useStateFromStoresObject)([S.default], () => ({
      applicationViewItems: S.default.sortedFilteredLibraryApplicationViewItems,
      filterQuery: S.default.applicationFilterQuery,
      fetched: S.default.hasFetchedApplications
    })),
    {
      sortKey: d,
      sortDirection: c,
      activeRowKey: f,
      isNavigatingByKeyboard: E
    } = (0, o.useStateFromStoresObject)([I.default], () => ({
      sortKey: I.default.sortKey,
      sortDirection: I.default.sortDirection,
      activeRowKey: I.default.activeRowKey,
      isNavigatingByKeyboard: I.default.isNavigatingByKeyboard
    }));
  return (0, a.jsx)(k, {
    ...e,
    analyticsContext: t,
    location: n,
    applicationViewItems: l,
    filterQuery: i,
    fetched: u,
    sortKey: d,
    sortDirection: c,
    activeRowKey: f,
    isNavigatingByKeyboard: E
  })
}
k.defaultProps = {
  stickyHeader: !1
}