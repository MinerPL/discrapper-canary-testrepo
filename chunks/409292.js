"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("613828"),
  i = n("442837"),
  r = n("493683"),
  o = n("112724"),
  u = n("108427"),
  d = n("184107"),
  c = n("410575"),
  f = n("613311"),
  E = n("601564"),
  h = n("981631"),
  _ = n("757473");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class m extends s.Component {
  componentDidMount() {
    this.fetchStoreListing(), (0, u.trackAppUIViewed)("channel_store_listing")
  }
  render() {
    return null != this.props.skuId ? (0, a.jsx)(c.default, {
      page: h.AnalyticsPages.CHANNEL_STORE_LISTING,
      root: !0,
      children: (0, a.jsx)("div", {
        className: _.applicationStore,
        children: (0, a.jsx)(l.Route, {
          path: "*",
          render: this.renderApplicationListing
        })
      })
    }) : null
  }
  constructor(...e) {
    super(...e), C(this, "fetchStoreListing", e => {
      let {
        channel: t,
        inputSkuId: n
      } = this.props;
      return null != e ? r.default.fetchChannelStoreListing(t.id, e) : null != n ? r.default.fetchChannelStoreListing(t.id, n) : r.default.fetchChannelStoreListing(t.id)
    }), C(this, "renderApplicationListing", e => {
      let {
        location: t
      } = e, {
        channel: n,
        skuId: s,
        width: l
      } = this.props;
      return (0, a.jsx)(f.default, {
        channel: n,
        inputSkuId: s,
        fetchStoreListing: this.fetchStoreListing,
        location: t,
        pageSize: (0, E.getPageSize)(l)
      })
    })
  }
}
t.default = (0, o.default)(i.default.connectStores([d.default], e => {
  let {
    channel: t,
    inputSkuId: n
  } = e;
  return {
    skuId: null != n ? n : d.default.getSkuIdForChannel(t.id)
  }
})(m))