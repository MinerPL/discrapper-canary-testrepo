"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("558381"),
  n = s("613311");
class l extends i.Component {
  componentDidMount() {
    this.fetchStoreListing()
  }
  render() {
    let {
      skuId: e,
      applicationId: t,
      slug: s,
      storeListingId: i,
      pageSize: r,
      location: l
    } = this.props;
    return (0, a.jsx)(n.default, {
      inputSkuId: e,
      applicationId: t,
      fetchStoreListing: this.fetchStoreListing,
      slug: s,
      storeListingId: i,
      location: l,
      pageSize: r
    })
  }
  constructor(...e) {
    var t, s, a;
    super(...e), t = this, s = "fetchStoreListing", a = e => {
      let {
        storeListingId: t,
        skuId: s,
        applicationId: a
      } = this.props, i = null != e ? e : s;
      if (null != t) return (0, r.fetchStoreListingById)(t);
      if (null != i) return (0, r.fetchStoreListingForSku)(i);
      if (null != a) return (0, r.fetchStoreListingForApplication)(a)
    }, s in t ? Object.defineProperty(t, s, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[s] = a
  }
}
t.default = l