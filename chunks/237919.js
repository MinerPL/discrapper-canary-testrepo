n.d(t, {
  Z: function() {
return C;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(442837),
  o = n(481060),
  c = n(570140),
  d = n(287259),
  u = n(819640),
  _ = n(490983),
  h = n(799777),
  E = n(5967),
  I = n(346329),
  m = n(981631),
  g = n(689938),
  p = n(493506);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class S extends s.Component {
  componentDidMount() {
document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
c.Z.wait(() => d.wX(null)), document.removeEventListener('keydown', this.handleKeyDown);
  }
  reset() {
d.wX(null), d.JZ('');
  }
  focusInput() {
let {
  searchBarRef: e
} = this;
null != e && e.focus();
  }
  updateActiveRow(e) {
let {
  applicationViewItems: t,
  activeRowKey: n
} = this.props, i = t.findIndex(e => e.key === n), s = 0;
i >= 0 && (s = (i + e) % t.length) < 0 && (s = t.length - 1);
let a = t[s];
d.wX(null != a ? a.key : null, !0);
  }
  render() {
let {
  filterQuery: e
} = this.props, {
  focused: t
} = this.state;
return (0, i.jsx)('div', {
  className: r()({
    [p.libraryFilter]: !0,
    [p.focused]: t
  }),
  children: (0, i.jsx)(o.SearchBar, {
    className: p.searchBar,
    ref: this.setRef,
    onChange: d.JZ,
    onFocus: () => this.setState({
      focused: !0
    }),
    onBlur: () => this.setState({
      focused: !1
    }),
    name: 'filter',
    onClear: () => {
      this.reset(), this.focusInput();
    },
    maxLength: 100,
    query: e,
    placeholder: g.Z.Messages.APPLICATION_LIBRARY_FILTER_PLACEHOLDER
  })
});
  }
  constructor(...e) {
super(...e), T(this, 'searchBarRef', null), T(this, 'state', {
  focused: !1
}), T(this, 'setRef', e => {
  this.searchBarRef = e;
}), T(this, 'handleKeyDown', e => {
  var t;
  let {
    activeRowKey: n,
    hasModalOpen: i,
    applicationViewItems: s
  } = this.props, {
    searchBarRef: a
  } = this;
  if (i || e.ctrlKey || e.altKey || e.metaKey || null == a)
    return;
  let r = null === (t = (0, E.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
  if (!(r !== a.inputRef.current && (0, E.VG)(r)))
    switch (e.which) {
      case m.yXg.ESCAPE:
        e.target !== a.inputRef.current ? this.reset() : null != a.inputRef.current && a.blur();
        break;
      case m.yXg.ENTER:
        if (null != n) {
          e.preventDefault();
          let t = s.find(e => e.key === n);
          if (null == t)
            return;
          let i = t.libraryApplication;
          I.performDefaultLibraryApplicationAction(i, {
            analyticsParams: {
              source: m.Sbl.APPLICATION_LIBRARY,
              location: {
                page: m.ZY5.LIBRARY,
                section: m.jXE.LIBRARY_APPLICATION_LIST,
                object: m.qAy.BUTTON_CTA
              }
            }
          });
        }
        break;
      case m.yXg.ARROW_DOWN:
      case m.yXg.ARROW_UP:
        e.preventDefault(), e.stopPropagation(), this.updateActiveRow(e.which === m.yXg.ARROW_DOWN ? 1 : -1);
        break;
      default:
        null != a.inputRef.current && e.target !== a.inputRef.current && a.focus();
    }
});
  }
}

function C() {
  let e = (0, l.e7)([u.Z], () => u.Z.hasLayers()),
t = (0, o.useModalsStore)(o.hasAnyModalOpenSelector);
  return (0, i.jsx)(S, {
activeRowKey: (0, l.e7)([h.Z], () => h.Z.activeRowKey),
hasModalOpen: t || e,
filterQuery: (0, l.e7)([_.Z], () => _.Z.applicationFilterQuery),
applicationViewItems: (0, l.e7)([_.Z], () => _.Z.sortedFilteredLibraryApplicationViewItems)
  });
}