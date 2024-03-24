"use strict";
n.r(t), n.d(t, {
  SHAKE_INTENSITY_DEFAULT: function() {
    return j
  },
  SHAKE_INTENSITY_MAX: function() {
    return C
  },
  SHAKE_INTENSITY_INCREMENT: function() {
    return E
  },
  default: function() {
    return R
  }
}), n("424973"), n("881410"), n("222007");
var i = n("37983"),
  s = n("884691"),
  l = n("759843"),
  r = n("669491"),
  o = n("77078"),
  a = n("428958"),
  c = n("69927"),
  u = n("384997"),
  d = n("674574"),
  h = n("304386"),
  m = n("423487"),
  p = n("956089"),
  f = n("659500"),
  S = n("286235"),
  b = n("901582"),
  g = n("534291"),
  v = n("49111"),
  x = n("782340"),
  N = n("380640");
let T = Object.freeze({
    shouldPreventNavigation: !1,
    onPreventNavigation: null,
    sidebarOpen: !0
  }),
  j = 1.4,
  C = 15,
  E = 2;

function I(e) {
  var t, n;
  let {
    section: s,
    setPreventNavigation: r,
    scrollerRef: o
  } = e;
  (0, a.default)({
    type: l.ImpressionTypes.PANE,
    name: null == s ? void 0 : s.impressionName,
    properties: null == s ? void 0 : s.impressionProperties
  });
  let c = null !== (t = null == s ? void 0 : s.element) && void 0 !== t ? t : v.NOOP_NULL,
    u = null !== (n = null == s ? void 0 : s.elementProps) && void 0 !== n ? n : {};
  return (0, i.jsx)(b.default, {
    section: s.section,
    children: (0, i.jsx)(c, {
      ...u,
      setPreventNavigation: r,
      refToScroller: o
    })
  })
}
class P extends s.PureComponent {
  componentDidMount() {
    this.getPredicateSections().forEach(e => {
      let {
        notice: t
      } = e;
      if (null == t) return;
      let {
        stores: n
      } = t;
      null != n && n.forEach(e => {
        e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e)
      })
    })
  }
  componentDidUpdate(e) {
    let {
      section: t
    } = e;
    t !== this.props.section && (this._intensity = j)
  }
  componentWillUnmount() {
    this._unmounted = !0, this._subscribedStores.forEach(e => e.removeChangeListener(this.handleNoticeStoreUpdate)), this.props.sections.forEach(e => {
      var t;
      return null === (t = e.onSettingsClose) || void 0 === t ? void 0 : t.call(e)
    })
  }
  getPredicateSections() {
    return this.props.sections.filter(e => null == e.predicate || e.predicate())
  }
  validNavigation() {
    var e;
    let {
      section: t
    } = this.props, n = this.getPredicateSections(), {
      notice: i
    } = null !== (e = n.find(e => t === e.section)) && void 0 !== e ? e : {};
    return null != i && i.stores.some(e => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly())) ? (f.ComponentDispatch.dispatch(v.ComponentActions.SHAKE_APP, {
      duration: 300,
      intensity: this._intensity
    }), this._intensity = Math.min(this._intensity + E, C), f.ComponentDispatch.dispatch(v.ComponentActions.EMPHASIZE_NOTICE), !1) : (this._intensity = j, !0)
  }
  renderSidebar(e) {
    let {
      section: t,
      title: n
    } = this.props, s = e.flatMap(e => e.newIndicatorDismissibleContentTypes).filter(e => null != e), l = null != t ? t : e[0].section;
    return (0, i.jsx)(u.default, {
      contentTypes: s,
      children: t => {
        let {
          visibleContent: s
        } = t;
        return (0, i.jsx)(o.TabBar, {
          selectedItem: l,
          onItemSelect: this.handleSetSection,
          orientation: "vertical",
          "aria-label": n,
          children: e.map((e, t) => {
            switch (e.section) {
              case g.SectionTypes.HEADER:
                return (0, i.jsx)(o.TabBar.Header, {
                  children: e.label
                }, t);
              case g.SectionTypes.DIVIDER:
                return (0, i.jsx)(o.TabBar.Separator, {}, t);
              case g.SectionTypes.CUSTOM:
                var n;
                let r = null !== (n = e.element) && void 0 !== n ? n : v.NOOP_NULL;
                return (0, i.jsx)(r, {}, t);
              default:
                return this.renderSettingsSectionTabBarItem(e, l === e.section, s)
            }
          })
        })
      }
    })
  }
  renderNotice(e) {
    let {
      theme: t
    } = this.props;
    if (null == e || null == e.notice) return null;
    let {
      stores: n,
      element: s
    } = e.notice;
    return null == n || n.some(e => e.showNotice()) ? (0, i.jsx)(s, {
      theme: t
    }) : null
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
    if (null == a || null == n) return null;
    let u = null !== (e = "string" == typeof a.label ? a.label : a.ariaLabel) && void 0 !== e ? e : s;
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(c.AppPageTitle, {
        location: s,
        subsection: u
      }), (0, i.jsx)(g.default, {
        sidebarTheme: t,
        scrollerRef: this.scrollerRef,
        section: n,
        sidebar: this.renderSidebar(o),
        content: (0, i.jsx)(I, {
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
      })]
    })
  }
  constructor(...e) {
    super(...e), this._unmounted = !1, this._intensity = j, this._subscribedStores = [], this.scrollerRef = s.createRef(), this.state = {
      ...T,
      sidebarOpen: this.props.section !== v.UserSettingsSections.SUBSCRIPTIONS && this.props.section !== v.UserSettingsSections.PROFILE_CUSTOMIZATION
    }, this.setPreventNavigation = (e, t) => {
      this.setState({
        shouldPreventNavigation: e,
        onPreventNavigation: t
      })
    }, this.handleSetSection = e => {
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
          !this._subscribedStores.includes(e) && (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e))
        }), this.setState({
          ...T,
          sidebarOpen: !1
        })
      };
      this.validNavigation() && !i && (l(), S.default.addBreadcrumb({
        category: "settings",
        message: "Set section: ".concat(e)
      })), i && null != s && s(l)
    }, this.handleClose = () => {
      if (this.validNavigation()) {
        let {
          onClose: e
        } = this.props;
        null == e || e()
      }
    }, this.handleNoticeStoreUpdate = () => {
      !this._unmounted && (this._intensity = j, this.forceUpdate())
    }, this.renderSettingsSectionTabBarItem = (e, t, n) => {
      let {
        section: s,
        label: l = null,
        ariaLabel: a,
        onClick: c,
        color: u,
        icon: f,
        className: S,
        newIndicator: b,
        newIndicatorDismissibleContentTypes: g,
        badgeCount: T
      } = e, j = null;
      s === v.UserSettingsSections.ACCOUNT && this.props.isEligibleForPomelo ? j = (0, i.jsx)(m.default, {
        color: r.default.colors.STATUS_WARNING.css
      }) : s === v.UserSettingsSections.INVENTORY && null != this.props.shouldShowSettingBadgeForQuests && this.props.shouldShowSettingBadgeForQuests.length > 0 ? j = (0, i.jsx)(d.QuestUserSettingsBadge, {
        questIds: this.props.shouldShowSettingBadgeForQuests
      }) : null != e.decoration ? j = (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: e.decoration
      }) : null != n && (null == g ? void 0 : g.includes(n)) && !t ? j = null != b ? b : (0, i.jsx)(p.TextBadge, {
        text: x.default.Messages.NEW
      }) : null != f ? j = f : null != T && T > 0 && (j = (0, i.jsx)(p.NumberBadge, {
        count: T
      }));
      let C = s === v.UserSettingsSections.PREMIUM ? (0, i.jsx)(h.default, {
        label: l,
        isSelected: t,
        decoration: j
      }) : null == j ? l : (0, i.jsxs)("div", {
        className: N.tabBarItemContainer,
        children: [l, j]
      });
      return (0, i.jsx)(o.TabBar.Item, {
        color: u,
        id: s,
        onClick: c,
        className: S,
        "aria-label": a,
        children: C
      }, s)
    }
  }
}
var R = P