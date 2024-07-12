var r = n(735250);
n(470079);
var i = n(433517),
  a = n(481060),
  o = n(358085);
t.Z = {
  show(e) {
(0, a.openModalLazy)(async () => {
  let {
    default: t
  } = await n.e('2435').then(n.bind(n, 821606));
  return n => (0, r.jsx)(t, {
    ...n,
    url: e
  });
});
  },
  getBlockedDomains() {
if ((0, o.isDesktop)()) {
  let e = i.K.get('BlockedDomainsV2');
  return Promise.resolve(null == e ? [] : e.split('\n'));
}
return Promise.resolve([]);
  },
  saveBlockedDomains(e) {
(0, o.isDesktop)() && i.K.set('BlockedDomainsV2', e.join('\n'));
  }
};