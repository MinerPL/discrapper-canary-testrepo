"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("424973"), s("222007");
var a = s("37983"),
  r = s("884691"),
  i = s("446674"),
  n = s("465527"),
  l = s("86621"),
  o = s("299285"),
  u = s("539938"),
  d = s("393414"),
  c = s("552712"),
  _ = s("454589"),
  E = s("49111"),
  T = s("232067");
class I extends r.PureComponent {
  componentDidMount() {
    let {
      sku: e,
      primarySkuId: t,
      isFetchingPrimarySku: s
    } = this.props;
    null != t && !s && null != e && (0, n.fetchSKU)(e.applicationId, t)
  }
  render() {
    let {
      sku: e,
      primarySku: t
    } = this.props, s = [], r = null;
    if (null != e) {
      let a = E.Routes.APPLICATION_STORE_LISTING_SKU(e.id, e.slug);
      r = a, null != t && s.push({
        id: E.Routes.APPLICATION_STORE_LISTING_SKU(t.id, t.slug),
        label: t.name
      }), s.push({
        id: a,
        label: e.name
      })
    }
    return (0, a.jsx)(_.default, {
      renderCustomBreadcrumb: this.renderCustomBreadcrumb,
      onBreadcrumbClick: this.handleClick,
      breadcrumbs: s,
      activeId: r
    })
  }
  constructor(...e) {
    super(...e), this.handleClick = e => {
      let {
        sku: t
      } = this.props;
      (0, d.transitionTo)(e.id, {
        state: {
          analyticsSource: {
            object: E.AnalyticsObjects.NAVIGATION_LINK,
            section: E.AnalyticsSections.NAVIGATION,
            page: null == t ? E.AnalyticsPages.STORE_DIRECTORY_BROWSE : E.AnalyticsPages.STORE_LISTING
          }
        }
      })
    }, this.renderCustomBreadcrumb = (e, t) => (0, a.jsx)(u.default.Title, {
      className: t ? null : T.breadcrumb,
      muted: !t,
      children: e.label
    })
  }
}
var f = (0, l.default)(i.default.connectStores([o.default, c.default], e => {
  let {
    sku: t
  } = e, s = null != t ? o.default.getApplication(t.applicationId) : null, a = null != s && null != s.primarySkuId && s.primarySkuId !== t.id ? s.primarySkuId : null;
  return {
    primarySkuId: a,
    isFetchingPrimarySku: null != a && c.default.isFetching(a),
    primarySku: null != a ? c.default.get(a) : null
  }
})(I))