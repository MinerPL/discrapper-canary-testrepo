"use strict";
n.r(t), n.d(t, {
  getListboxOptionProps: function() {
    return m
  }
}), n("411104");
var s, a, l, i, r = n("735250"),
  o = n("470079"),
  u = n("120356"),
  d = n.n(u),
  c = n("481060"),
  f = n("689938"),
  E = n("527186");

function _(e) {
  e.stopPropagation(), e.preventDefault()
}

function m(e, t, n) {
  return {
    id: "".concat(e, "-").concat(t),
    role: "option",
    tabIndex: -1,
    "aria-selected": n
  }
}
class T extends(s = o.PureComponent) {
  renderQuery(e) {
    let {
      query: t,
      navId: n,
      focusedIndex: s,
      onSelectQuery: a,
      onSelectSearchEverywhere: l,
      onHighlightQuery: i,
      hideQuery: o,
      searchFavorites: u
    } = this.props;
    if (e || o) return null;
    let _ = -1 === s;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(c.Clickable, {
        className: d()(E.queryContainer, {
          [E.focused]: _
        }),
        ...m(n, -1, _),
        onMouseEnter: i,
        onClick: a,
        children: [(0, r.jsx)("div", {
          className: E.queryText,
          children: u ? f.default.Messages.SEARCH_FAVORITES : f.default.Messages.SEARCH_FOR_VALUE.format({
            value: t
          })
        }), (0, r.jsx)("div", {
          className: E.queryShortcut,
          "aria-hidden": !0,
          children: (0, r.jsx)(c.KeyCombo, {
            shortcut: "return",
            dim: !0,
            className: E.keyCombo
          })
        })]
      }), u && (0, r.jsxs)(c.Clickable, {
        className: d()(E.queryContainer, {
          [E.focused]: _
        }),
        ...m(n, -1, _),
        onMouseEnter: i,
        onClick: l,
        children: [(0, r.jsx)("div", {
          className: E.queryText,
          children: f.default.Messages.SEARCH_EVERYWHERE
        }), (0, r.jsx)("div", {
          className: E.queryShortcut,
          "aria-hidden": !0,
          children: (0, r.jsx)(c.KeyCombo, {
            shortcut: "shift+return",
            dim: !0,
            className: E.keyCombo
          })
        })]
      })]
    })
  }
  renderResults(e) {
    let {
      numResults: t,
      renderNoResults: n,
      renderInitialState: s,
      renderResult: a,
      renderCustomResults: l
    } = this.props;
    if (e) return s();
    if (0 === t) return n();
    if (null != a) return Array.from({
      length: t
    }).map((e, t) => a(t));
    if (null != l) return l();
    throw Error("SearchResultsPopout.renderResults: Flow should never allow this...")
  }
  render() {
    let {
      query: e,
      focusedIndex: t,
      navId: n,
      width: s
    } = this.props, a = "" === e.trim();
    return (0, r.jsxs)("div", {
      className: E.container,
      style: {
        width: s
      },
      onMouseDown: _,
      role: "listbox",
      id: n,
      tabIndex: -1,
      "aria-activedescendant": "".concat(n, "-").concat(t),
      children: [this.renderQuery(a), this.renderResults(a)]
    })
  }
}
i = {
  renderInitialState: () => null,
  hideQuery: !1,
  width: 320
}, (l = "defaultProps") in(a = T) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, t.default = T