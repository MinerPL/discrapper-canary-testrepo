n.d(t, {
  z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(772848),
  s = n(481060),
  r = n(976255),
  l = n(667),
  o = n(626135),
  c = n(981631);

function d(e) {
  let {
guildProductListing: t,
guildId: d,
sourceAnalyticsLocations: u
  } = e, _ = !1, E = (0, a.Z)(), I = () => {
_ = !0;
  };
  (0, s.openModalLazy)(async () => {
let {
  default: e
} = await Promise.all([
  n.e('96427'),
  n.e('77298'),
  n.e('23357'),
  n.e('15972'),
  n.e('12013'),
  n.e('47006'),
  n.e('29609'),
  n.e('32776'),
  n.e('95900'),
  n.e('16130')
]).then(n.bind(n, 578780));
return n => (0, i.jsx)(e, {
  ...n,
  applicationId: t.application_id,
  skuId: t.id,
  sourceAnalyticsLocations: u,
  guildProductContext: {
    guildProductListingId: t.id,
    guildId: d
  },
  loadId: E,
  onComplete: I
});
  }, {
onCloseCallback: () => {
  !_ && o.default.track(c.rMx.PAYMENT_FLOW_CANCELED, {
    load_id: E,
    payment_type: c.Zuq[c.GZQ.ONE_TIME],
    is_gift: !1,
    location_stack: Array.isArray(u) ? u : [u]
  }), (0, r.fw)(), (0, l.p)();
},
onCloseRequest: c.dG4
  });
}