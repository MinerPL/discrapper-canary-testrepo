"use strict";
s.r(t), s.d(t, {
  getPageSize: function() {
    return M
  },
  default: function() {
    return L
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  i = s("730290"),
  n = s("90915"),
  l = s("446674"),
  o = s("971178"),
  u = s("850068"),
  d = s("901582"),
  c = s("984376"),
  _ = s("737960"),
  E = s("667247"),
  T = s("493765"),
  I = s("485328"),
  f = s("269936"),
  S = s("967889"),
  R = s("393414"),
  m = s("970366"),
  A = s("592433"),
  N = s("489749"),
  p = s("75576"),
  C = s("49111"),
  g = s("782340"),
  O = s("504659");
let P = (0, f.makeLazy)({
  createPromise: () => s.el("972119").then(s.bind(s, "972119")),
  webpackId: "972119"
});

function M(e) {
  return e < p.PAGE_WIDTH_THRESHOLD ? p.PageSizes.SMALL : p.PageSizes.LARGE
}
l.default.initialize();
class h extends r.PureComponent {
  componentDidMount() {
    (0, o.updateLocation)(this.props.location), this.stopListeningToHistory = (0, R.getHistory)().listen(e => {
      e.pathname.startsWith(C.Routes.APPLICATION_STORE) && (0, o.updateLocation)(e)
    }), this.props.isAuthenticated && (0, u.fetchPaymentSources)(), I.default.disable(), I.default.setLayout(E.APPLICATION_STORE_LAYOUT), I.default.enable(), (0, m.trackAppUIViewed)("application_store")
  }
  componentWillUnmount() {
    null != this.stopListeningToHistory && this.stopListeningToHistory(), I.default.disable(), I.default.setLayout(T.DEFAULT_LAYOUT), I.default.enable()
  }
  renderCustomErrorMessage() {
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)("p", {
        children: g.default.Messages.ERRORS_STORE_CRASH
      }), (0, a.jsx)("p", {
        children: g.default.Messages.ERRORS_ACTION_TO_TAKE
      })]
    })
  }
  render() {
    let {
      isAuthenticated: e,
      location: t
    } = this.props, s = e ? (0, a.jsx)("div", {
      className: O.applicationStore,
      children: this.renderContent()
    }) : (0, a.jsx)(P, {
      className: O.applicationStore,
      location: t,
      render: this.renderContent
    });
    return (0, a.jsx)(S.default, {
      renderCustomMessage: this.renderCustomErrorMessage,
      children: s
    })
  }
  constructor(...e) {
    super(...e), this.renderStoreListing = e => {
      let {
        match: {
          params: {
            skuId: t,
            applicationId: s,
            slug: r
          }
        },
        location: n
      } = e, {
        width: l
      } = this.props, o = (0, i.parse)(n.search);
      return (0, a.jsx)(d.default, {
        page: C.AnalyticsPages.STORE_LISTING,
        root: !0,
        children: (0, a.jsx)(N.default, {
          skuId: t,
          applicationId: s,
          slug: r,
          location: n,
          storeListingId: o.store_listing_id,
          pageSize: M(l)
        })
      })
    }, this.renderContent = () => (0, a.jsxs)(n.Switch, {
      children: [(0, a.jsx)(n.Route, {
        path: C.Routes.APPLICATION_STORE,
        exact: !0,
        render: () => (0, a.jsx)(d.default, {
          page: C.AnalyticsPages.STORE_DIRECTORY_HOME,
          root: !0,
          children: (0, a.jsx)(A.default, {})
        })
      }), (0, a.jsx)(n.Route, {
        path: C.Routes.APPLICATION_STORE_LISTING_APPLICATION(":applicationId", ":slug"),
        render: this.renderStoreListing
      }), (0, a.jsx)(n.Route, {
        path: C.Routes.APPLICATION_STORE_LISTING_APPLICATION(":applicationId"),
        render: this.renderStoreListing
      }), (0, a.jsx)(n.Route, {
        path: C.Routes.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        render: this.renderStoreListing
      }), (0, a.jsx)(n.Route, {
        path: C.Routes.APPLICATION_STORE_LISTING_SKU(":skuId"),
        render: this.renderStoreListing
      }), (0, a.jsx)(n.Redirect, {
        to: C.Routes.APP
      })]
    })
  }
}
var L = (0, n.withRouter)((0, c.default)((0, _.default)(h)))