n.d(t, {
  $x: function() {
return C;
  },
  d7: function() {
return E;
  },
  w6: function() {
return T;
  }
}), n(653041), n(390547), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(990547),
  r = n(692547),
  o = n(481060),
  a = n(213609),
  c = n(252618),
  u = n(243778),
  d = n(495065),
  h = n(126848),
  m = n(207874),
  p = n(585483),
  f = n(960048),
  b = n(410575),
  S = n(493544),
  v = n(981631),
  x = n(689938),
  g = n(598627);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let j = Object.freeze({
shouldPreventNavigation: !1,
onPreventNavigation: null,
sidebarOpen: !0
  }),
  C = 1.4,
  T = 15,
  E = 2;

function R(e) {
  var t, n;
  let {
section: s,
setPreventNavigation: r,
scrollerRef: o
  } = e;
  (0, a.Z)({
type: l.ImpressionTypes.PANE,
name: null == s ? void 0 : s.impressionName,
properties: null == s ? void 0 : s.impressionProperties
  });
  let c = null !== (t = null == s ? void 0 : s.element) && void 0 !== t ? t : v.VqG,
u = null !== (n = null == s ? void 0 : s.elementProps) && void 0 !== n ? n : {};
  return (0, i.jsx)(b.Z, {
section: s.section,
children: (0, i.jsx)(c, {
  ...u,
  setPreventNavigation: r,
  refToScroller: o
})
  });
}
class I extends s.PureComponent {
  componentDidMount() {
this.getPredicateSections().forEach(e => {
  let {
    notice: t
  } = e;
  if (null == t)
    return;
  let {
    stores: n
  } = t;
  null != n && n.forEach(e => {
    e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e);
  });
});
  }
  componentDidUpdate(e) {
let {
  section: t
} = e;
t !== this.props.section && (this._intensity = C);
  }
  componentWillUnmount() {
this._unmounted = !0, this._subscribedStores.forEach(e => e.removeChangeListener(this.handleNoticeStoreUpdate)), this.props.sections.forEach(e => {
  var t;
  return null === (t = e.onSettingsClose) || void 0 === t ? void 0 : t.call(e);
});
  }
  getPredicateSections() {
return this.props.sections.filter(e => null == e.predicate || e.predicate());
  }
  validNavigation() {
var e;
let {
  section: t
} = this.props, {
  notice: n
} = null !== (e = this.getPredicateSections().find(e => t === e.section)) && void 0 !== e ? e : {};
return null != n && n.stores.some(e => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly())) ? (p.S.dispatch(v.CkL.SHAKE_APP, {
  duration: 300,
  intensity: this._intensity
}), this._intensity = Math.min(this._intensity + E, T), p.S.dispatch(v.CkL.EMPHASIZE_NOTICE), !1) : (this._intensity = C, !0);
  }
  renderSidebar(e) {
let {
  section: t,
  title: n,
  isUserSettingsSearchEnabled: s
} = this.props, l = e.flatMap(e => e.newIndicatorDismissibleContentTypes).filter(e => null != e), r = null != t ? t : e[0].section;
return (0, i.jsx)(u.ZP, {
  contentTypes: l,
  children: t => {
    let {
      visibleContent: l
    } = t;
    return (0, i.jsxs)(o.TabBar, {
      selectedItem: r,
      onItemSelect: this.handleSetSection,
      orientation: 'vertical',
      'aria-label': n,
      children: [
        s ? (0, i.jsx)(m.Z, {
          style: g.searchBar
        }) : null,
        e.map((e, t) => {
          if (null != e.tabPredicate && !e.tabPredicate())
            return null;
          switch (e.section) {
            case S.ID.HEADER:
              return (0, i.jsx)(o.TabBar.Header, {
                children: e.label
              }, t);
            case S.ID.DIVIDER:
              return (0, i.jsx)(o.TabBar.Separator, {}, t);
            case S.ID.CUSTOM:
              var n;
              let s = null !== (n = e.element) && void 0 !== n ? n : v.VqG;
              return (0, i.jsx)(s, {}, t);
            default:
              return this.renderSettingsSectionTabBarItem(e, r === e.section, l);
          }
        })
      ]
    });
  }
});
  }
  renderNotice(e) {
let {
  theme: t
} = this.props;
if (null == e || null == e.notice)
  return null;
let {
  stores: n,
  element: s
} = e.notice;
return null == n || n.some(e => e.showNotice()) ? (0, i.jsx)(s, {
  theme: t
}) : null;
  }
  render() {
var e;
let {
  sidebarTheme: t,
  section: n,
  title: s,
  onClose: l,
  hideSidebar: r
} = this.props, o = this.getPredicateSections(), a = o.find(e => e.section === n);
if (null == a || null == n)
  return null;
let u = null !== (e = 'string' == typeof a.label ? a.label : a.ariaLabel) && void 0 !== e ? e : s;
return (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)(c.yY, {
      location: s,
      subsection: u
    }),
    (0, i.jsx)(S.ZP, {
      sidebarTheme: t,
      scrollerRef: this.scrollerRef,
      section: n,
      sidebar: this.renderSidebar(o),
      content: (0, i.jsx)(R, {
        section: a,
        setPreventNavigation: this.setPreventNavigation,
        scrollerRef: this.scrollerRef
      }),
      mobileSidebarOpen: this.state.sidebarOpen,
      hideSidebar: r,
      toggleSidebar: () => this.setState({
        sidebarOpen: !0
      }),
      contentType: a.type,
      notice: this.renderNotice(a),
      closeAction: null != l ? this.handleClose : void 0
    })
  ]
});
  }
  constructor(...e) {
super(...e), N(this, '_unmounted', !1), N(this, '_intensity', C), N(this, '_subscribedStores', []), N(this, 'scrollerRef', s.createRef()), N(this, 'state', {
  ...j,
  sidebarOpen: this.props.section !== v.oAB.SUBSCRIPTIONS && this.props.section !== v.oAB.PROFILE_CUSTOMIZATION
}), N(this, 'setPreventNavigation', (e, t) => {
  this.setState({
    shouldPreventNavigation: e,
    onPreventNavigation: t
  });
}), N(this, 'handleSetSection', e => {
  let {
    onSetSection: t,
    sections: n
  } = this.props, {
    shouldPreventNavigation: i,
    onPreventNavigation: s
  } = this.state, l = () => {
    var i;
    null == t || t(e);
    let {
      notice: s
    } = null !== (i = n.find(t => e === t.section)) && void 0 !== i ? i : {}, l = null != s ? s.stores : null;
    null != l && l.forEach(e => {
      !this._subscribedStores.includes(e) && (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
    }), this.setState({
      ...j,
      sidebarOpen: !1
    });
  };
  this.validNavigation() && !i && (l(), f.Z.addBreadcrumb({
    category: 'settings',
    message: 'Set section: '.concat(e)
  })), i && null != s && s(l);
}), N(this, 'handleClose', () => {
  if (this.validNavigation()) {
    let {
      onClose: e
    } = this.props;
    null == e || e();
  }
}), N(this, 'handleNoticeStoreUpdate', () => {
  if (!this._unmounted)
    this._intensity = C, this.forceUpdate();
}), N(this, 'renderSettingsSectionTabBarItem', (e, t, n) => {
  let {
    section: s,
    label: l = null,
    ariaLabel: a,
    onClick: c,
    color: u,
    icon: m,
    className: p,
    newIndicator: f,
    newIndicatorDismissibleContentTypes: b,
    badgeCount: S,
    searchFilterCount: N
  } = e, j = null;
  null != N && N > 0 ? j = (0, i.jsx)(o.NumberBadge, {
    count: N,
    disableColor: !0,
    className: g.searchFilterCount
  }) : s === v.oAB.ACCOUNT && this.props.isEligibleForPomelo ? j = (0, i.jsx)(o.CircleWarningIcon, {
    size: 'custom',
    width: 20,
    height: 20,
    color: r.Z.colors.STATUS_WARNING.css
  }) : s === v.oAB.INVENTORY && null != this.props.questsForBadge && this.props.questsForBadge.length > 0 ? j = (0, i.jsx)(d.R, {
    quests: this.props.questsForBadge
  }) : null != e.decoration ? j = (0, i.jsx)(o.Text, {
    variant: 'text-md/normal',
    color: 'text-muted',
    children: e.decoration
  }) : null != n && (null == b ? void 0 : b.includes(n)) && !t ? j = null != f ? f : (0, i.jsx)(o.TextBadge, {
    text: x.Z.Messages.NEW
  }) : null != m ? j = m : null != S && S > 0 && (j = (0, i.jsx)(o.NumberBadge, {
    count: S
  }));
  let C = s === v.oAB.PREMIUM ? (0, i.jsx)(h.Z, {
    label: l,
    isSelected: t,
    decoration: j
  }) : null == j ? l : (0, i.jsxs)('div', {
    className: g.tabBarItemContainer,
    children: [
      l,
      j
    ]
  });
  return (0, i.jsx)(o.TabBar.Item, {
    color: u,
    id: s,
    onClick: c,
    className: p,
    'aria-label': a,
    children: C
  }, s);
});
  }
}
t.ZP = I;