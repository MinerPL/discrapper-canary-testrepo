n.d(t, {
  M: function() {
return m;
  }
}), n(411104);
var i, s, a, r, l = n(735250),
  o = n(470079),
  c = n(120356),
  u = n.n(c),
  d = n(481060),
  _ = n(689938),
  E = n(452822);

function I(e) {
  e.stopPropagation(), e.preventDefault();
}

function m(e, t, n) {
  return {
id: ''.concat(e, '-').concat(t),
role: 'option',
tabIndex: -1,
'aria-selected': n
  };
}
class T extends(i = o.PureComponent) {
  renderQuery(e) {
let {
  query: t,
  navId: n,
  focusedIndex: i,
  onSelectQuery: s,
  onSelectSearchEverywhere: a,
  onHighlightQuery: r,
  hideQuery: o,
  searchFavorites: c
} = this.props;
if (e || o)
  return null;
let I = -1 === i;
return (0, l.jsxs)(l.Fragment, {
  children: [
    (0, l.jsxs)(d.Clickable, {
      className: u()(E.queryContainer, {
        [E.focused]: I
      }),
      ...m(n, -1, I),
      onMouseEnter: r,
      onClick: s,
      children: [
        (0, l.jsx)('div', {
          className: E.queryText,
          children: c ? _.Z.Messages.SEARCH_FAVORITES : _.Z.Messages.SEARCH_FOR_VALUE.format({
            value: t
          })
        }),
        (0, l.jsx)('div', {
          className: E.queryShortcut,
          'aria-hidden': !0,
          children: (0, l.jsx)(d.KeyCombo, {
            shortcut: 'return',
            dim: !0,
            className: E.keyCombo
          })
        })
      ]
    }),
    c && (0, l.jsxs)(d.Clickable, {
      className: u()(E.queryContainer, {
        [E.focused]: I
      }),
      ...m(n, -1, I),
      onMouseEnter: r,
      onClick: a,
      children: [
        (0, l.jsx)('div', {
          className: E.queryText,
          children: _.Z.Messages.SEARCH_EVERYWHERE
        }),
        (0, l.jsx)('div', {
          className: E.queryShortcut,
          'aria-hidden': !0,
          children: (0, l.jsx)(d.KeyCombo, {
            shortcut: 'shift+return',
            dim: !0,
            className: E.keyCombo
          })
        })
      ]
    })
  ]
});
  }
  renderResults(e) {
let {
  numResults: t,
  renderNoResults: n,
  renderInitialState: i,
  renderResult: s,
  renderCustomResults: a
} = this.props;
if (e)
  return i();
if (0 === t)
  return n();
if (null != s)
  return Array.from({
    length: t
  }).map((e, t) => s(t));
if (null != a)
  return a();
throw Error('SearchResultsPopout.renderResults: Flow should never allow this...');
  }
  render() {
let {
  query: e,
  focusedIndex: t,
  navId: n,
  width: i
} = this.props, s = '' === e.trim();
return (0, l.jsxs)('div', {
  className: E.container,
  style: {
    width: i
  },
  onMouseDown: I,
  role: 'listbox',
  id: n,
  tabIndex: -1,
  'aria-activedescendant': ''.concat(n, '-').concat(t),
  children: [
    this.renderQuery(s),
    this.renderResults(s)
  ]
});
  }
}
r = {
  renderInitialState: () => null,
  hideQuery: !1,
  width: 320
}, (a = 'defaultProps') in(s = T) ? Object.defineProperty(s, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = r, t.Z = T;