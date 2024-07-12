var i, a, l, s, r = n(392711),
  o = n.n(r),
  c = n(442837),
  d = n(570140),
  u = n(430824);
let h = null,
  p = {};
class m extends(s = c.ZP.Store) {
  initialize() {
this.waitFor(u.Z);
  }
  getOptimalRegion() {
var e;
let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
  n = this.getRegions(t);
return null != n ? null !== (e = n.find(e => {
  let {
    optimal: t
  } = e;
  return t;
})) && void 0 !== e ? e : o().sample(n) : null;
  }
  getOptimalRegionId() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
  t = this.getOptimalRegion(e);
return null != t ? t.id : null;
  }
  getRandomRegion() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
  t = this.getRegions(e);
return null != t ? o().sample(t) : null;
  }
  getRandomRegionId() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
  t = this.getRandomRegion(e);
return null != t ? t.id : null;
  }
  getRegions(e) {
return null != e ? p[e] : h;
  }
}
l = 'RegionStore', (a = 'displayName') in(i = m) ? Object.defineProperty(i, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = l, t.Z = new m(d.Z, {
  LOAD_REGIONS: function(e) {
let t = o().sortBy(e.regions, e => e.name);
null != e.guildId ? p[e.guildId] = t : h = t;
  },
  GUILD_DELETE: function(e) {
delete p[e.guild.id];
  }
});