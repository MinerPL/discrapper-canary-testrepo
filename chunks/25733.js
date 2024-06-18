"use strict";
var i = n(735250);
n(470079);
var r = n(433517),
  s = n(481060),
  o = n(704587),
  a = n(920133),
  l = n(338096);
t.Z = {
  openDmSettingsUpsellModal(e) {
    if (!(0, o.G)({
        location: "DmSettingsUpsellManager"
      })) return;
    let t = r.K.get(l.G),
      u = Date.now();
    null == t || u - t > l.k ? (r.K.set(l.G, u), (0, s.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("99387"), n.e("35489")]).then(n.bind(n, 582712));
      return n => (0, i.jsx)(t, {
        ...n,
        guildId: e
      })
    })) : (0, a.L)(a.Q.SUPPRESSED_BY_COOLDOWN, e)
  }
}