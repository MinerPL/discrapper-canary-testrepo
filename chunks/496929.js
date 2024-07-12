n.d(t, {
  Qv: function() {
return u;
  },
  p0: function() {
return l;
  },
  yD: function() {
return s;
  }
});
var r = n(544891),
  i = n(570140),
  a = n(73346),
  o = n(981631);

function s(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return i.Z.wait(() => {
i.Z.dispatch({
  type: 'ENTITLEMENT_FETCH_APPLICATION_START',
  applicationId: e
});
  }), r.tn.get({
url: o.ANM.ENTITLEMENTS_FOR_APPLICATION(e),
oldFormErrors: !0,
query: {
  exclude_consumed: t
}
  }).then(t => (i.Z.dispatch({
type: 'ENTITLEMENT_FETCH_APPLICATION_SUCCESS',
applicationId: e,
entitlements: t.body
  }), t.body)).catch(() => {
i.Z.dispatch({
  type: 'ENTITLEMENT_FETCH_APPLICATION_FAIL',
  applicationId: e
});
  });
}
async function l(e) {
  let {
withSku: t = !1,
withApplication: n = !1,
entitlementType: a
  } = e;
  i.Z.dispatch({
type: 'ENTITLEMENTS_FETCH_FOR_USER_START'
  });
  try {
let e = await r.tn.get({
  url: o.ANM.ENTITLEMENTS_FOR_USER,
  query: {
    with_sku: t,
    with_application: n,
    entitlement_type: a
  }
});
i.Z.dispatch({
  type: 'ENTITLEMENTS_FETCH_FOR_USER_SUCCESS',
  entitlements: e.body
});
  } catch (e) {
i.Z.dispatch({
  type: 'ENTITLEMENTS_FETCH_FOR_USER_FAIL'
});
  }
}
async function u() {
  i.Z.dispatch({
type: 'ENTITLEMENTS_GIFTABLE_FETCH'
  });
  try {
let e = await (0, a.Kb)({
  url: o.ANM.ENTITLEMENTS_GIFTABLE
});
i.Z.dispatch({
  type: 'ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS',
  entitlements: e.body
});
  } catch (e) {
i.Z.dispatch({
  type: 'ENTITLEMENTS_GIFTABLE_FETCH_FAIL'
});
  }
}