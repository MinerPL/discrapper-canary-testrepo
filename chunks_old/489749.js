"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  i = s("55620"),
  n = s("294135");
class l extends r.Component {
  componentDidMount() {
    this.fetchStoreListing()
  }
  render() {
    let {
      skuId: e,
      applicationId: t,
      slug: s,
      storeListingId: r,
      pageSize: i,
      location: l
    } = this.props;
    return (0, a.jsx)(n.default, {
      inputSkuId: e,
      applicationId: t,
      fetchStoreListing: this.fetchStoreListing,
      slug: s,
      storeListingId: r,
      location: l,
      pageSize: i
    })
  }
  constructor(...e) {
    super(...e), this.fetchStoreListing = e => {
      let {
        storeListingId: t,
        skuId: s,
        applicationId: a
      } = this.props, r = null != e ? e : s;
      if (null != t) return (0, i.fetchStoreListingById)(t);
      if (null != r) return (0, i.fetchStoreListingForSku)(r);
      if (null != a) return (0, i.fetchStoreListingForApplication)(a)
    }
  }
}
var o = l