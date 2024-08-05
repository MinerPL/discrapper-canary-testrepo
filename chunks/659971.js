var i, a, s, r, l = n(873546),
  o = n(442837),
  c = n(570140);
let d = !1;
class u extends(r = o.ZP.Store) {
  getIsOpen() {
return !l.tq || d;
  }
}
s = 'MobileWebSidebarStore', (a = 'displayName') in(i = u) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new u(c.Z, {
  MOBILE_WEB_SIDEBAR_OPEN: function() {
d = !0;
  },
  MOBILE_WEB_SIDEBAR_CLOSE: function() {
d = !1;
  }
});