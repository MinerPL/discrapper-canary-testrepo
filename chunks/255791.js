n(47120);
var i, s, a, r, l = n(442837),
  o = n(433517),
  c = n(570140),
  d = n(650774),
  u = n(430824),
  _ = n(496675),
  h = n(981631);
let E = {
  MAX_MEMBER_COUNT: new Set()
};
class I extends(i = l.ZP.Store) {
  initialize() {
var e;
this.waitFor(_.Z, u.Z, d.Z), this.syncWith([
  _.Z,
  u.Z,
  d.Z
], h.dG4), o.K.remove(h.vID.MAX_MEMBER_COUNT_100), o.K.remove(h.vID.MAX_MEMBER_COUNT_250), e = new Set(o.K.get(h.vID.MAX_MEMBER_COUNT)), E[h.vID.MAX_MEMBER_COUNT] = void 0 !== e ? e : new Set();
  }
  isVisible(e) {
var t;
if (null == e)
  return !1;
let n = null !== (t = d.Z.getMemberCount(e.id)) && void 0 !== t ? t : 0,
  i = _.Z.can(h.Plq.ADMINISTRATOR, e);
return !e.hasFeature(h.oNc.CLAN) && !E[h.vID.MAX_MEMBER_COUNT].has(e.id) && i && e.maxMembers > 0 && e.maxMembers - n <= 10000;
  }
}
r = 'MaxMemberCountChannelNoticeStore', (a = 'displayName') in(s = I) ? Object.defineProperty(s, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = r, t.Z = new I(c.Z, {
  MAX_MEMBER_COUNT_NOTICE_DISMISS: function(e) {
let t = e.guildId;
if (!E[h.vID.MAX_MEMBER_COUNT].has(t))
  return E[h.vID.MAX_MEMBER_COUNT].add(t), o.K.set(h.vID.MAX_MEMBER_COUNT, E[h.vID.MAX_MEMBER_COUNT]), !0;
  }
});