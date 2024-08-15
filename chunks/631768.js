var r, i, a, s, o = n(442837),
  l = n(570140),
  u = n(981631);
let c = u.Ucd.AUTO;
class d extends(s = o.ZP.Store) {
  get mode() {
return c;
  }
}
a = 'VideoQualityModeStore', (i = 'displayName') in(r = d) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new d(l.Z, {
  SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
c = e.mode;
  }
});