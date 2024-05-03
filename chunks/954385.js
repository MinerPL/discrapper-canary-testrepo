"use strict";
s.r(t), s("653041"), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("442837"),
  n = s("16084"),
  l = s("730749"),
  o = s("812206"),
  u = s("984370"),
  d = s("703656"),
  c = s("55563"),
  _ = s("66579"),
  E = s("981631"),
  T = s("466408");

function I(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class R extends r.PureComponent {
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
    super(...e), I(this, "handleClick", e => {
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
    }), I(this, "renderCustomBreadcrumb", (e, t) => (0, a.jsx)(u.default.Title, {
      className: t ? null : T.breadcrumb,
      muted: !t,
      children: e.label
    }))
  }
}
t.default = (0, l.default)(i.default.connectStores([o.default, c.default], e => {
  let {
    sku: t
  } = e, s = null != t ? o.default.getApplication(t.applicationId) : null, a = null != s && null != s.primarySkuId && s.primarySkuId !== t.id ? s.primarySkuId : null;
  return {
    primarySkuId: a,
    isFetchingPrimarySku: null != a && c.default.isFetching(a),
    primarySku: null != a ? c.default.get(a) : null
  }
})(R))