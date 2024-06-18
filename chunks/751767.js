"use strict";
n.d(t, {
  A: function() {
    return a
  },
  S: function() {
    return o
  }
});
var i = n(663993),
  r = n(618541),
  s = n(981631);

function o() {
  return (0, i.wE)({
    createPromise: () => n.e("661").then(n.t.bind(n, 491668, 23)),
    webpackId: 491668
  }).then(e => {
    let {
      default: t
    } = e;
    return t
  })
}

function a() {
  let e = r.Z.getClient();
  return null == e ? o().then(e => e.client.create({
    authorization: s.Ai1.BRAINTREE.KEY
  }).then(e => l(e)).catch(() => null)) : l(e)
}

function l(e) {
  return o().then(t => t.dataCollector.create({
    client: e
  }).then(e => e.deviceData).catch(() => null))
}