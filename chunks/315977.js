"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("90915"),
  i = n("446674"),
  r = n("450911"),
  o = n("737960"),
  u = n("970366"),
  d = n("2105"),
  c = n("901582"),
  f = n("294135"),
  E = n("404247"),
  h = n("49111"),
  _ = n("504659");
class C extends s.Component {
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
    super(...e), this.fetchStoreListing = e => {
      let {
        channel: t,
        inputSkuId: n
      } = this.props;
      return null != e ? r.default.fetchChannelStoreListing(t.id, e) : null != n ? r.default.fetchChannelStoreListing(t.id, n) : r.default.fetchChannelStoreListing(t.id)
    }, this.renderApplicationListing = e => {
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
    }
  }
}
var S = (0, o.default)(i.default.connectStores([d.default], e => {
  let {
    channel: t,
    inputSkuId: n
  } = e;
  return {
    skuId: null != n ? n : d.default.getSkuIdForChannel(t.id)
  }
})(C))