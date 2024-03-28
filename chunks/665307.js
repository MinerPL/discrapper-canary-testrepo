"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("411104"), n("47120");
var a, s = n("735250"),
  l = n("470079"),
  i = n("803997"),
  r = n.n(i),
  o = n("613828"),
  u = n("442837"),
  d = n("846519"),
  c = n("477690"),
  f = n("481060"),
  E = n("570140"),
  h = n("239091"),
  _ = n("287259"),
  C = n("404133"),
  m = n("785547"),
  S = n("490983"),
  I = n("799777"),
  p = n("285952"),
  T = n("366695"),
  g = n("366966"),
  A = n("151011"),
  N = n("880008"),
  v = n("466111"),
  O = n("931003"),
  R = n("626135"),
  L = n("780570"),
  P = n("624138"),
  M = n("645818"),
  y = n("981631"),
  D = n("689938"),
  b = n("373438");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let U = (0, P.cssValueToNumber)(c.default.GAME_LIST_ROW_MIN_HEIGHT),
  j = (0, P.cssValueToNumber)(c.default.GAME_LIST_LINKED_TO_GLOW_DURATION),
  G = Object.freeze({
    [y.GameTableListKeys.PLATFORM]: "Platform",
    [y.GameTableListKeys.LAST_PLAYED]: "Last Played",
    [y.GameTableListKeys.NAME]: "Name"
  }),
  w = e => {
    let {
      flag: t,
      icon: n,
      item: a,
      tooltip: l
    } = e, i = a.libraryApplication.hasFlag(t);
    return (0, s.jsx)(f.Tooltip, {
      text: l,
      children: e => (0, s.jsx)(n, {
        className: r()(b.settingIcon, {
          [b.hidden]: !i
        }),
        ...e
      })
    })
  },
  k = [{
    key: y.GameTableListKeys.NAME,
    renderHeader: () => D.default.Messages.GAME_LIBRARY_LIST_HEADER_NAME,
    sort: !0,
    cellClassName: b.nameCell,
    bodyCellClassName: b.nameBodyCell,
    render: e => (0, s.jsxs)(p.default, {
      align: p.default.Align.CENTER,
      children: [(0, s.jsx)(T.default, {
        game: e.application,
        size: T.default.Sizes.SMALL,
        className: b.gameIcon
      }), (0, s.jsxs)("div", {
        className: b.nameCellInfo,
        children: [(0, s.jsx)("div", {
          className: b.nameCellText,
          children: e.libraryApplication.getBranchedName(e.application)
        }), e.libraryApplication.hasFlag(y.LibraryApplicationFlags.PREMIUM) ? (0, s.jsx)(f.Tooltip, {
          text: D.default.Messages.PREMIUM_GAME,
          children: e => (0, s.jsx)(v.default, {
            className: b.nitroIcon,
            ...e
          })
        }) : null]
      })]
    })
  }, {
    key: y.GameTableListKeys.PLATFORM,
    renderHeader: () => D.default.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
    sort: !0,
    cellClassName: b.platformCell,
    bodyCellClassName: b.textCell,
    render(e) {
      let t = e.libraryApplication.getDistributor();
      return (0, s.jsx)(p.default, {
        align: p.default.Align.CENTER,
        children: null != t ? y.DistributorNames[t] : D.default.Messages.GAME_LIBRARY_NOT_APPLICABLE
      })
    }
  }, {
    key: y.GameTableListKeys.LAST_PLAYED,
    renderHeader: () => D.default.Messages.GAME_LIBRARY_LIST_HEADER_LAST_PLAYED,
    sort: !0,
    cellClassName: b.lastPlayedCell,
    bodyCellClassName: b.textCell,
    render(e) {
      let t;
      return t = e.isRunning ? D.default.Messages.GAME_LIBRARY_LAST_PLAYED_PLAYING_NOW : e.isNew ? D.default.Messages.GAME_LIBRARY_NEW : 0 !== e.lastPlayed ? (0, s.jsx)(g.default, {
        end: e.lastPlayed,
        location: g.default.Locations.GAME_LIBRARY_LAST_PLAYED
      }) : D.default.Messages.GAME_LIBRARY_LAST_PLAYED_NONE, (0, s.jsx)(p.default, {
        align: p.default.Align.CENTER,
        className: r()({
          [b.lastPlayedCellNew]: e.isNew
        }),
        children: t
      })
    }
  }, {
    key: y.GameTableListKeys.ACTIONS,
    renderHeader: () => null,
    cellClassName: b.actionsCell,
    render(e, t, n) {
      var a, i;
      if (null == t) throw Error("No cell props defined.");
      let o = e.key === t.activeRowKey;
      return (0, s.jsxs)(l.Fragment, {
        children: [(0, s.jsxs)("div", {
          className: b.settingIcons,
          children: [(0, s.jsx)(w, {
            flag: y.LibraryApplicationFlags.PRIVATE,
            item: e,
            icon: N.default,
            tooltip: D.default.Messages.GAME_LIBRARY_PRIVATE_TOOLTIP
          }), (0, s.jsx)(w, {
            flag: y.LibraryApplicationFlags.OVERLAY_DISABLED,
            item: e,
            icon: O.default,
            tooltip: D.default.Messages.GAME_LIBRARY_OVERLAY_DISABLED_TOOLTIP
          }), (0, s.jsx)(M.default, {
            className: r()(b.settingIcon, {
              [b.hidden]: !e.supportsCloudSync
            }),
            libraryApplication: e.libraryApplication
          })]
        }), (0, L.isUserEntitledToLibraryApplication)(e.libraryApplication) ? (0, s.jsx)(m.default, {
          analyticsListSort: (a = t.sortKey, i = t.sortDirection, "".concat(G[a], " ").concat(i === y.TableSortDirections.ASCENDING ? "ASC" : "DESC")),
          analyticsListIndex: n,
          source: y.AnalyticsLocations.APPLICATION_LIBRARY,
          libraryApplication: e.libraryApplication,
          color: o ? f.Button.Colors.GREEN : f.Button.Colors.PRIMARY,
          isPlayShiny: o && e.defaultAction === y.LibraryApplicationActions.PLAY,
          size: b.actionButtonSize,
          hideProgress: null != e.defaultAction,
          onDropdownOpen: () => null != t && t.setActiveRowKey(e),
          onDropdownClose: () => null != t && t.clearActiveRowKey()
        }) : (0, s.jsx)(C.default, {
          skuId: e.libraryApplication.sku.id,
          applicationId: e.application.id,
          color: o ? f.Button.Colors.GREEN : f.Button.Colors.PRIMARY,
          customDisabledColor: f.Button.Colors.PRIMARY,
          size: b.actionButtonSize
        })]
      })
    }
  }],
  F = e => {
    let {
      item: t,
      activeRowKey: n,
      highlightedApplicationKey: a,
      onMouseEnter: l,
      onMouseLeave: i,
      onContextMenu: o,
      setRef: u,
      ...d
    } = e, c = t.key === n, f = t.key === a;
    return (0, s.jsx)("div", {
      className: r()({
        [b.rowWrapperActive]: c && !f,
        [b.rowWrapperGlow]: f,
        [b.rowWrapper]: !c && !f,
        [b.rowWrapperDim]: !c && !t.isLaunchable
      }),
      ref: e => u(e, t.key),
      onMouseEnter: () => l(t),
      onMouseLeave: i,
      onContextMenu: e => o(e, t),
      children: (0, s.jsx)("div", {
        ...d
      })
    })
  };
class B extends(a = l.PureComponent) {
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
      null != e && (E.default.wait(h.closeContextMenu), this.props.scrollToRow(e, U))
    }
  }
  handleHighlightedApplicationKey() {
    let {
      highlightedApplicationKey: e
    } = this.state;
    null != e && null != this._rowRefs[e] && (this.props.scrollToRow(this._rowRefs[e], U), new d.Timeout().start(j, () => {
      !this._didUnmount && this.setState({
        highlightedApplicationKey: null
      })
    }))
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
        case y.Distributors.DISCORD:
          e.num_applications_discord++;
          break;
        case y.Distributors.STEAM:
          e.num_applications_steam++;
          break;
        case y.Distributors.BATTLENET:
          e.num_applications_battlenet++;
          break;
        case y.Distributors.TWITCH:
          e.num_applications_twitch++;
          break;
        case y.Distributors.UPLAY:
          e.num_applications_uplay++;
          break;
        case y.Distributors.ORIGIN:
          e.num_applications_origin++;
          break;
        case y.Distributors.GOG:
          e.num_applications_gog++;
          break;
        case y.Distributors.EPIC:
          e.num_applications_epic++
      }
      e.num_applications_total++
    }
    R.default.track(y.AnalyticEvents.LIBRARY_VIEWED, {
      ...e,
      load_id: t.loadId
    })
  }
  handleSort(e, t) {
    _.sortList(e, t)
  }
  renderImportHelp() {
    let e;
    let {
      applicationViewItems: t,
      filterQuery: n
    } = this.props, a = t.length > 0;
    return a ? null : (e = "" !== n ? D.default.Messages.APPLICATION_LIBRARY_EMPTY_SEARCH_DESCRIPTION.format({
      query: n
    }) : D.default.Messages.APPLICATION_LIBRARY_EMPTY_STATE_DESCRIPTION_NO_IMPORT, (0, s.jsxs)("div", {
      className: a ? b.emptyStateSmall : b.emptyStateLarge,
      children: [(0, s.jsx)("div", {
        className: b.emptyWumpus
      }), (0, s.jsx)(p.default, {
        grow: 0,
        shrink: a ? 1 : 0,
        direction: p.default.Direction.VERTICAL,
        children: (0, s.jsxs)("div", {
          className: b.emptyStateText,
          children: [(0, s.jsx)("div", {
            className: b.emptyStateHeader,
            children: D.default.Messages.APPLICATION_LIBRARY_EMPTY_STATE_HEADER
          }), (0, s.jsx)("div", {
            className: b.emptyStateDescription,
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
      activeRowKey: a,
      stickyHeader: i
    } = this.props, {
      overflowMenuRowKey: r,
      highlightedApplicationKey: o
    } = this.state;
    return (0, s.jsxs)(l.Fragment, {
      children: [n.length > 0 ? (0, s.jsx)(A.default, {
        columns: k,
        data: n,
        sortData: !1,
        rowComponent: F,
        className: b.table,
        headerClassName: i ? b.stickyHeader : b.header,
        headerCellClassName: b.headerCell,
        sortedHeaderCellClassName: b.headerCellSorted,
        bodyCellClassName: b.bodyCell,
        rowClassName: b.row,
        sortKey: e,
        sortDirection: t,
        stickyHeader: i,
        rowProps: {
          activeRowKey: null != r ? r : a,
          highlightedApplicationKey: o,
          onMouseEnter: this.handleRowMouseEnter,
          onMouseLeave: this.handleRowMouseLeave,
          onContextMenu: this.handleApplicationContextMenu,
          setRef: this.setRowRef
        },
        cellProps: {
          activeRowKey: null != r ? r : a,
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
    super(...e), x(this, "_didUnmount", !1), x(this, "_rowRefs", {}), x(this, "state", {
      overflowMenuRowKey: null,
      highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null
    }), x(this, "setActiveRowKey", e => {
      this.setState({
        overflowMenuRowKey: e.key
      })
    }), x(this, "clearActiveRowKey", () => {
      !this._didUnmount && this.setState({
        overflowMenuRowKey: null
      })
    }), x(this, "handleRowMouseEnter", e => {
      !this.props.isNavigatingByKeyboard && _.updateActiveRowKey(e.key)
    }), x(this, "handleRowMouseLeave", () => {
      !this.props.isNavigatingByKeyboard && _.updateActiveRowKey(null)
    }), x(this, "setRowRef", (e, t) => {
      this._rowRefs[t] = e
    }), x(this, "handleApplicationContextMenu", (e, t) => {
      this.setActiveRowKey(t);
      let {
        analyticsContext: a
      } = this.props;
      (0, h.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.e("98335").then(n.bind(n, "485292"));
        return n => (0, s.jsx)(e, {
          ...n,
          applicationId: t.libraryApplication.id,
          branchId: t.libraryApplication.branchId,
          analyticsContext: a
        })
      }, {
        onClose: this.clearActiveRowKey
      })
    })
  }
}

function H(e) {
  let t = l.useContext(R.AnalyticsContext),
    n = (0, o.useLocation)(),
    {
      applicationViewItems: a,
      filterQuery: i,
      fetched: r
    } = (0, u.useStateFromStoresObject)([S.default], () => ({
      applicationViewItems: S.default.sortedFilteredLibraryApplicationViewItems,
      filterQuery: S.default.applicationFilterQuery,
      fetched: S.default.hasFetchedApplications
    })),
    {
      sortKey: d,
      sortDirection: c,
      activeRowKey: f,
      isNavigatingByKeyboard: E
    } = (0, u.useStateFromStoresObject)([I.default], () => ({
      sortKey: I.default.sortKey,
      sortDirection: I.default.sortDirection,
      activeRowKey: I.default.activeRowKey,
      isNavigatingByKeyboard: I.default.isNavigatingByKeyboard
    }));
  return (0, s.jsx)(B, {
    ...e,
    analyticsContext: t,
    location: n,
    applicationViewItems: a,
    filterQuery: i,
    fetched: r,
    sortKey: d,
    sortDirection: c,
    activeRowKey: f,
    isNavigatingByKeyboard: E
  })
}
x(B, "defaultProps", {
  stickyHeader: !1
})