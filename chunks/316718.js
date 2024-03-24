"use strict";
n.r(t), n.d(t, {
  fetchUserEntitlementsForApplication: function() {
    return o
  },
  fetchUserEntitlements: function() {
    return s
  },
  fetchGiftableEntitlements: function() {
    return c
  }
});
var u = n("872717"),
  r = n("913144"),
  i = n("271560"),
  a = n("49111");

function o(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return r.default.wait(() => {
    r.default.dispatch({
      type: "ENTITLEMENT_FETCH_APPLICATION_START",
      applicationId: e
    })
  }), u.HTTP.get({
    url: a.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
    oldFormErrors: !0,
    query: {
      exclude_consumed: t
    }
  }).then(t => (r.default.dispatch({
    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
    applicationId: e,
    entitlements: t.body
  }), t.body)).catch(() => {
    r.default.dispatch({
      type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
      applicationId: e
    })
  })
}
async function s(e) {
  let {
    withSku: t = !1,
    withApplication: n = !1,
    entitlementType: i
  } = e;
  r.default.dispatch({
    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
  });
  try {
    let e = await u.HTTP.get({
      url: a.Endpoints.ENTITLEMENTS_FOR_USER,
      query: {
        with_sku: t,
        with_application: n,
        entitlement_type: i
      }
    });
    r.default.dispatch({
      type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
      entitlements: e.body
    })
  } catch (e) {
    r.default.dispatch({
      type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
    })
  }
}
async function c() {
  r.default.dispatch({
    type: "ENTITLEMENTS_GIFTABLE_FETCH"
  });
  try {
    let e = await (0, i.httpGetWithCountryCodeQuery)({
      url: a.Endpoints.ENTITLEMENTS_GIFTABLE
    });
    r.default.dispatch({
      type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
      entitlements: e.body
    })
  } catch (e) {
    r.default.dispatch({
      type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
    })
  }
}