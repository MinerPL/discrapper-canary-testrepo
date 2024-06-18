"use strict";
var i = n(735250);
n(470079);
var r = n(433517),
  s = n(481060),
  o = n(358085);
t.Z = {
  show(e) {
    (0, s.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("99387"), n.e("2435")]).then(n.bind(n, 821606));
      return n => (0, i.jsx)(t, {
        ...n,
        url: e
      })
    })
  },
  getBlockedDomains() {
    if ((0, o.isDesktop)()) {
      let e = r.K.get("BlockedDomainsV2");
      return Promise.resolve(null == e ? [] : e.split("\n"))
    }
    return Promise.resolve([])
  },
  saveBlockedDomains(e) {
    (0, o.isDesktop)() && r.K.set("BlockedDomainsV2", e.join("\n"))
  }
}