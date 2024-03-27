"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("913144"),
  d = n("259083"),
  c = n("778588"),
  f = n("577427"),
  E = n("946749"),
  h = n("810567"),
  _ = n("791776"),
  C = n("780009"),
  S = n("49111"),
  I = n("782340"),
  m = n("960245");
class p extends s.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)
  }
  componentWillUnmount() {
    u.default.wait(() => d.updateActiveRowKey(null)), document.removeEventListener("keydown", this.handleKeyDown)
  }
  reset() {
    d.updateActiveRowKey(null), d.updateLibraryFilter("")
  }
  focusInput() {
    let {
      searchBarRef: e
    } = this;
    null != e && e.focus()
  }
  updateActiveRow(e) {
    let {
      applicationViewItems: t,
      activeRowKey: n
    } = this.props, a = t.findIndex(e => e.key === n), s = 0;
    a >= 0 && (s = (a + e) % t.length) < 0 && (s = t.length - 1);
    let l = t[s];
    d.updateActiveRowKey(null != l ? l.key : null, !0)
  }
  render() {
    let {
      filterQuery: e
    } = this.props, {
      focused: t
    } = this.state;
    return (0, a.jsx)("div", {
      className: i({
        [m.libraryFilter]: !0,
        [m.focused]: t
      }),
      children: (0, a.jsx)(h.default, {
        className: m.searchBar,
        ref: this.setRef,
        onChange: d.updateLibraryFilter,
        onFocus: () => this.setState({
          focused: !0
        }),
        onBlur: () => this.setState({
          focused: !1
        }),
        name: "filter",
        onClear: () => {
          this.reset(), this.focusInput()
        },
        maxLength: 100,
        query: e,
        placeholder: I.default.Messages.APPLICATION_LIBRARY_FILTER_PLACEHOLDER
      })
    })
  }
  constructor(...e) {
    super(...e), this.searchBarRef = null, this.state = {
      focused: !1
    }, this.setRef = e => {
      this.searchBarRef = e
    }, this.handleKeyDown = e => {
      var t;
      let {
        activeRowKey: n,
        hasModalOpen: a,
        applicationViewItems: s
      } = this.props, {
        searchBarRef: l
      } = this;
      if (a || e.ctrlKey || e.altKey || e.metaKey || null == l) return;
      let i = null === (t = (0, _.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
      if (!(i !== l.inputRef.current && (0, _.isInputLikeElement)(i))) switch (e.which) {
        case S.KeyboardKeys.ESCAPE:
          e.target !== l.inputRef.current ? this.reset() : null != l.inputRef.current && l.blur();
          break;
        case S.KeyboardKeys.ENTER:
          if (null != n) {
            e.preventDefault();
            let t = s.find(e => e.key === n);
            if (null == t) return;
            let a = t.libraryApplication;
            C.performDefaultLibraryApplicationAction(a, {
              analyticsParams: {
                source: S.AnalyticsLocations.APPLICATION_LIBRARY,
                location: {
                  page: S.AnalyticsPages.LIBRARY,
                  section: S.AnalyticsSections.LIBRARY_APPLICATION_LIST,
                  object: S.AnalyticsObjects.BUTTON_CTA
                }
              }
            })
          }
          break;
        case S.KeyboardKeys.ARROW_DOWN:
        case S.KeyboardKeys.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), this.updateActiveRow(e.which === S.KeyboardKeys.ARROW_DOWN ? 1 : -1);
          break;
        default:
          null != l.inputRef.current && e.target !== l.inputRef.current && l.focus()
      }
    }
  }
}

function T() {
  let e = (0, r.useStateFromStores)([c.default], () => c.default.hasLayers()),
    t = (0, o.useModalsStore)(o.hasAnyModalOpenSelector);
  return (0, a.jsx)(p, {
    activeRowKey: (0, r.useStateFromStores)([E.default], () => E.default.activeRowKey),
    hasModalOpen: t || e,
    filterQuery: (0, r.useStateFromStores)([f.default], () => f.default.applicationFilterQuery),
    applicationViewItems: (0, r.useStateFromStores)([f.default], () => f.default.sortedFilteredLibraryApplicationViewItems)
  })
}