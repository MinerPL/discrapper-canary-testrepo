n(47120);
var i = n(735250),
  s = n(470079),
  a = n(558381),
  r = n(613311);
class l extends s.Component {
  componentDidMount() {
this.fetchStoreListing();
  }
  render() {
let {
  skuId: e,
  applicationId: t,
  slug: n,
  storeListingId: s,
  pageSize: a,
  location: l
} = this.props;
return (0, i.jsx)(r.Z, {
  inputSkuId: e,
  applicationId: t,
  fetchStoreListing: this.fetchStoreListing,
  slug: n,
  storeListingId: s,
  location: l,
  pageSize: a
});
  }
  constructor(...e) {
var t, n, i;
super(...e), t = this, n = 'fetchStoreListing', i = e => {
  let {
    storeListingId: t,
    skuId: n,
    applicationId: i
  } = this.props, s = null != e ? e : n;
  if (null != t)
    return (0, a.rV)(t);
  if (null != s)
    return (0, a.km)(s);
  if (null != i)
    return (0, a.Hq)(i);
}, n in t ? Object.defineProperty(t, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = i;
  }
}
t.Z = l;