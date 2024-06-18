"use strict";
n.d(t, {
  E2: function() {
    return o
  },
  cn: function() {
    return a
  },
  g9: function() {
    return u
  },
  q2: function() {
    return l
  }
});
var i = n(751767),
  r = n(960048),
  s = n(231338);

function o(e, t) {
  let n = new Date;
  return n.setMonth(e - 1), n.toLocaleString(t, {
    month: "short"
  })
}
async function a(e) {
  let t = null;
  if (null != e && e.paymentGateway === s.gg.BRAINTREE) {
    let e = await (0, i.A)();
    null != e && (t = {
      braintree_device_data: e
    })
  }
  return t
}

function l(e, t) {
  r.Z.captureException(e, {
    ...t,
    tags: {
      ...null == t ? void 0 : t.tags,
      app_context: "billing"
    }
  })
}

function u(e, t) {
  r.Z.captureMessage(e, {
    ...t,
    tags: {
      ...null == t ? void 0 : t.tags,
      app_context: "billing"
    }
  })
}