n.d(t, {
  A: function() {
return s;
  },
  S: function() {
return o;
  }
});
var r = n(663993),
  i = n(618541),
  a = n(981631);

function o() {
  return (0, r.wE)({
createPromise: () => n.e('661').then(n.t.bind(n, 491668, 23)),
webpackId: 491668
  }).then(e => {
let {
  default: t
} = e;
return t;
  });
}

function s() {
  let e = i.Z.getClient();
  return null == e ? o().then(e => e.client.create({
authorization: a.Ai1.BRAINTREE.KEY
  }).then(e => l(e)).catch(() => null)) : l(e);
}

function l(e) {
  return o().then(t => t.dataCollector.create({
client: e
  }).then(e => e.deviceData).catch(() => null));
}