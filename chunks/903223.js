"use strict";
n.r(t);
var a, l, s, i, r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("570140"),
  c = n("430824");
let f = null,
  h = {};
class m extends(i = u.default.Store) {
  initialize() {
    this.waitFor(c.default)
  }
  getOptimalRegion() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      n = this.getRegions(t);
    return null != n ? null !== (e = n.find(e => {
      let {
        optimal: t
      } = e;
      return t
    })) && void 0 !== e ? e : o().sample(n) : null
  }
  getOptimalRegionId() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      t = this.getOptimalRegion(e);
    return null != t ? t.id : null
  }
  getRandomRegion() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      t = this.getRegions(e);
    return null != t ? o().sample(t) : null
  }
  getRandomRegionId() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      t = this.getRandomRegion(e);
    return null != t ? t.id : null
  }
  getRegions(e) {
    return null != e ? h[e] : f
  }
}
s = "RegionStore", (l = "displayName") in(a = m) ? Object.defineProperty(a, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = s, t.default = new m(d.default, {
  LOAD_REGIONS: function(e) {
    let t = o().sortBy(e.regions, e => e.name);
    null != e.guildId ? h[e.guildId] = t : f = t
  },
  GUILD_DELETE: function(e) {
    delete h[e.guild.id]
  }
})