"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("570140"),
  d = n("287259"),
  c = n("819640"),
  f = n("490983"),
  E = n("799777"),
  h = n("6048"),
  _ = n("5967"),
  C = n("346329"),
  m = n("981631"),
  S = n("689938"),
  I = n("581245");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class T extends s.Component {
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
      className: i()({
        [I.libraryFilter]: !0,
        [I.focused]: t
      }),
      children: (0, a.jsx)(h.default, {
        className: I.searchBar,
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
        placeholder: S.default.Messages.APPLICATION_LIBRARY_FILTER_PLACEHOLDER
      })
    })
  }
  constructor(...e) {
    super(...e), p(this, "searchBarRef", null), p(this, "state", {
      focused: !1
    }), p(this, "setRef", e => {
      this.searchBarRef = e
    }), p(this, "handleKeyDown", e => {
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
        case m.KeyboardKeys.ESCAPE:
          e.target !== l.inputRef.current ? this.reset() : null != l.inputRef.current && l.blur();
          break;
        case m.KeyboardKeys.ENTER:
          if (null != n) {
            e.preventDefault();
            let t = s.find(e => e.key === n);
            if (null == t) return;
            let a = t.libraryApplication;
            C.performDefaultLibraryApplicationAction(a, {
              analyticsParams: {
                source: m.AnalyticsLocations.APPLICATION_LIBRARY,
                location: {
                  page: m.AnalyticsPages.LIBRARY,
                  section: m.AnalyticsSections.LIBRARY_APPLICATION_LIST,
                  object: m.AnalyticsObjects.BUTTON_CTA
                }
              }
            })
          }
          break;
        case m.KeyboardKeys.ARROW_DOWN:
        case m.KeyboardKeys.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), this.updateActiveRow(e.which === m.KeyboardKeys.ARROW_DOWN ? 1 : -1);
          break;
        default:
          null != l.inputRef.current && e.target !== l.inputRef.current && l.focus()
      }
    })
  }
}

function g() {
  let e = (0, r.useStateFromStores)([c.default], () => c.default.hasLayers()),
    t = (0, o.useModalsStore)(o.hasAnyModalOpenSelector);
  return (0, a.jsx)(T, {
    activeRowKey: (0, r.useStateFromStores)([E.default], () => E.default.activeRowKey),
    hasModalOpen: t || e,
    filterQuery: (0, r.useStateFromStores)([f.default], () => f.default.applicationFilterQuery),
    applicationViewItems: (0, r.useStateFromStores)([f.default], () => f.default.sortedFilteredLibraryApplicationViewItems)
  })
}