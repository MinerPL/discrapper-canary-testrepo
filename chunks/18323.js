var r, i, a, o, s = n(442837),
  l = n(570140);
let u = !1;
class c extends(o = s.ZP.Store) {
  isProtocolRegistered() {
return u;
  }
}
a = 'SpotifyProtocolStore', (i = 'displayName') in(r = c) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new c(l.Z, {
  SPOTIFY_SET_PROTOCOL_REGISTERED: function(e) {
let {
  isRegistered: t
} = e;
u = t;
  }
});