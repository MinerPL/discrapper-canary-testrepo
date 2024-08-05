n(47120);
var i, a, s, r, l = n(442837),
  o = n(570140),
  c = n(810788),
  d = n(430824),
  u = n(981631);
let _ = !1;

function h(e) {
  let t = d.Z.getGuild(e);
  return !!(null != t && t.hasFeature(u.oNc.HUB)) && (_ = !0, !0);
}

function E() {
  return !0;
}
class I extends(i = l.ZP.Store) {
  initialize() {
this.waitFor(d.Z, c.Z), this.syncWith([c.Z], E);
  }
  channelNoticePredicate(e) {
return !!e.hasFeature(u.oNc.LINKED_TO_HUB) && !_ && !0;
  }
}
r = 'HubLinkNoticeStore', (s = 'displayName') in(a = I) ? Object.defineProperty(a, s, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = r, t.Z = new I(o.Z, {
  CONNECTION_OPEN: function(e) {
for (let t of e.guilds)
  if (h(t.id))
    return !0;
return !1;
  },
  GUILD_CREATE: function(e) {
let {
  guild: t
} = e;
return h(t.id);
  }
});