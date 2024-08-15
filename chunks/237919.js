n.d(t, {
  Z: function() {
return f;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(570140),
  d = n(287259),
  u = n(819640),
  _ = n(490983),
  E = n(799777),
  h = n(5967),
  m = n(346329),
  I = n(981631),
  g = n(689938),
  p = n(636600);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class S extends a.Component {
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
} = this.props, i = t.findIndex(e => e.key === n), a = 0;
i >= 0 && (a = (i + e) % t.length) < 0 && (a = t.length - 1);
let s = t[a];
d.wX(null != s ? s.key : null, !0);
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
    applicationViewItems: a
  } = this.props, {
    searchBarRef: s
  } = this;
  if (i || e.ctrlKey || e.altKey || e.metaKey || null == s)
    return;
  let r = null === (t = (0, h.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
  if (!(r !== s.inputRef.current && (0, h.VG)(r)))
    switch (e.which) {
      case I.yXg.ESCAPE:
        e.target !== s.inputRef.current ? this.reset() : null != s.inputRef.current && s.blur();
        break;
      case I.yXg.ENTER:
        if (null != n) {
          e.preventDefault();
          let t = a.find(e => e.key === n);
          if (null == t)
            return;
          let i = t.libraryApplication;
          m.performDefaultLibraryApplicationAction(i, {
            analyticsParams: {
              source: I.Sbl.APPLICATION_LIBRARY,
              location: {
                page: I.ZY5.LIBRARY,
                section: I.jXE.LIBRARY_APPLICATION_LIST,
                object: I.qAy.BUTTON_CTA
              }
            }
          });
        }
        break;
      case I.yXg.ARROW_DOWN:
      case I.yXg.ARROW_UP:
        e.preventDefault(), e.stopPropagation(), this.updateActiveRow(e.which === I.yXg.ARROW_DOWN ? 1 : -1);
        break;
      default:
        null != s.inputRef.current && e.target !== s.inputRef.current && s.focus();
    }
});
  }
}

function f() {
  let e = (0, l.e7)([u.Z], () => u.Z.hasLayers()),
t = (0, o.useModalsStore)(o.hasAnyModalOpenSelector);
  return (0, i.jsx)(S, {
activeRowKey: (0, l.e7)([E.Z], () => E.Z.activeRowKey),
hasModalOpen: t || e,
filterQuery: (0, l.e7)([_.Z], () => _.Z.applicationFilterQuery),
applicationViewItems: (0, l.e7)([_.Z], () => _.Z.sortedFilteredLibraryApplicationViewItems)
  });
}