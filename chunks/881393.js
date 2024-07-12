n(47120), n(653041);
var i = n(496929),
  s = n(16084),
  a = n(558381),
  r = n(115130),
  l = n(106976),
  o = n(695103),
  c = n(996106),
  d = n(334288),
  u = n(186901),
  _ = n(981631);
async function h(e, t) {
  let n = t.filter(e => e.type === _.epS.SUBSCRIPTION_GROUP),
i = await Promise.all(n.map(async t => await (0, l.rx)(e, t.id))),
s = [];
  return i.forEach(e => {
if (null == e)
  return null;
let n = e.subscription_listings;
if (null == n)
  return null;
let i = [];
n.forEach(e => {
  e.subscription_plans.forEach(n => {
    var s;
    let a = null == n ? void 0 : n.price,
      r = t.find(e => e.id === n.sku_id);
    if (null == r)
      return;
    let l = {
      id: n.sku_id,
      name: r.name,
      type: r.type,
      price: {
        amount: a,
        currency: _.pKx.USD
      },
      application_id: e.application_id,
      flags: e.sku_flags,
      release_date: null !== (s = r.release_date) && void 0 !== s ? s : null
    };
    i.push(l);
  });
}), i.filter(e => (null == e ? void 0 : e.price) != null).forEach(e => s.push(e));
  }), s;
}
async function E(e) {
  let {
socket: t
  } = e;
  (0, d.f)(t.transport);
  let n = t.application.id;
  if (null == n)
throw new c.Z({
  errorCode: _.lTL.INVALID_COMMAND
}, 'No application.');
  if (o.Z.inTestModeForApplication(n) || r.Z.inDevModeForApplication(n)) {
let e = await s.uE(n, !1),
  t = await h(n, e);
return [
  ...e.filter(e => null != e.price),
  ...t
];
  }
  let i = await a.oJ(n),
l = i.filter(e => e.sku.type !== _.epS.SUBSCRIPTION_GROUP).map(e => e.sku).filter(e => null != e.price);
  return [
...l,
...await h(n, i.map(e => e.sku))
  ];
}

function I(e) {
  let {
socket: t
  } = e;
  (0, d.f)(t.transport);
  let n = t.application.id;
  if (null == n)
throw new c.Z({
  errorCode: _.lTL.INVALID_COMMAND
}, 'No application.');
  return i.yD(n);
}
t.Z = {
  [_.Etm.GET_SKUS]: {
[u.Gp.ANY]: [
  u.wE,
  u.lH
],
handler: E
  },
  [_.Etm.GET_ENTITLEMENTS]: {
[u.Gp.ANY]: [
  u.wE,
  u.lH
],
handler: I
  },
  [_.Etm.GET_SKUS_EMBEDDED]: {
[u.Gp.ANY]: [
  u.wE,
  u.lH
],
handler: async e => ({
  skus: await E(e)
})
  },
  [_.Etm.GET_ENTITLEMENTS_EMBEDDED]: {
[u.Gp.ANY]: [
  u.wE,
  u.lH
],
handler: async e => ({
  entitlements: await I(e)
})
  }
};