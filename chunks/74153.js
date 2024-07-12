n(653041), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(442837),
  r = n(481060),
  l = n(16084),
  o = n(730749),
  c = n(812206),
  d = n(984370),
  u = n(703656),
  _ = n(55563),
  h = n(981631),
  E = n(287809);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class m extends s.PureComponent {
  componentDidMount() {
let {
  sku: e,
  primarySkuId: t,
  isFetchingPrimarySku: n
} = this.props;
null != t && !n && null != e && (0, l.$N)(e.applicationId, t);
  }
  render() {
let {
  sku: e,
  primarySku: t
} = this.props, n = [], s = null;
if (null != e) {
  let i = h.Z5c.APPLICATION_STORE_LISTING_SKU(e.id, e.slug);
  s = i, null != t && n.push({
    id: h.Z5c.APPLICATION_STORE_LISTING_SKU(t.id, t.slug),
    label: t.name
  }), n.push({
    id: i,
    label: e.name
  });
}
return (0, i.jsx)(r.Breadcrumbs, {
  renderCustomBreadcrumb: this.renderCustomBreadcrumb,
  onBreadcrumbClick: this.handleClick,
  breadcrumbs: n,
  activeId: s
});
  }
  constructor(...e) {
super(...e), I(this, 'handleClick', e => {
  let {
    sku: t
  } = this.props;
  (0, u.uL)(e.id, {
    state: {
      analyticsSource: {
        object: h.qAy.NAVIGATION_LINK,
        section: h.jXE.NAVIGATION,
        page: null == t ? h.ZY5.STORE_DIRECTORY_BROWSE : h.ZY5.STORE_LISTING
      }
    }
  });
}), I(this, 'renderCustomBreadcrumb', (e, t) => (0, i.jsx)(d.Z.Title, {
  className: t ? null : E.breadcrumb,
  muted: !t,
  children: e.label
}));
  }
}
t.Z = (0, o.Z)(a.ZP.connectStores([
  c.Z,
  _.Z
], e => {
  let {
sku: t
  } = e, n = null != t ? c.Z.getApplication(t.applicationId) : null, i = null != n && null != n.primarySkuId && n.primarySkuId !== t.id ? n.primarySkuId : null;
  return {
primarySkuId: i,
isFetchingPrimarySku: null != i && _.Z.isFetching(i),
primarySku: null != i ? _.Z.get(i) : null
  };
})(m));