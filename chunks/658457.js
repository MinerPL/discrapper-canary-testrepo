"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("37983");
n("884691");
var a = n("446674"),
  l = n("77078"),
  i = n("686470"),
  r = n("552712"),
  o = n("964889"),
  u = n("790219"),
  d = n("159467"),
  c = n("827825");

function E(e) {
  let {
    application: t,
    fullWidth: n = !1,
    size: E = l.Button.Sizes.LARGE,
    color: f,
    customDisabledColor: _,
    hideNotLaunchable: T,
    tooltipPosition: I,
    onClick: m,
    className: N,
    source: p,
    storeListingAnalyticsProperties: S,
    pauseAnimation: A,
    hover: C,
    innerClassName: h
  } = e, g = {
    fullWidth: n,
    size: E,
    color: f,
    customDisabledColor: _,
    tooltipPosition: I,
    onClick: m,
    className: N,
    hover: C,
    innerClassName: h
  }, M = (0, a.useStateFromStores)([i.default], () => i.default.getActiveLibraryApplication(t.id)), O = null != M ? M.sku.id : null, R = null != O ? O : t.primarySkuId, v = (0, a.useStateFromStores)([r.default], () => null != R && !r.default.didFetchingSkuFail(R));
  return null != M && (0, o.isUserEntitledToLibraryApplication)(M) ? (0, s.jsx)(c.default, {
    ...g,
    libraryApplication: M,
    source: p
  }) : v ? (0, s.jsx)(u.default, {
    ...g,
    skuId: null != M ? M.sku.id : null,
    applicationId: t.id,
    pauseAnimation: A,
    storeListingAnalyticsProperties: S
  }) : (0, s.jsx)(d.default, {
    ...g,
    hideNotLaunchable: T,
    applicationId: t.id
  })
}