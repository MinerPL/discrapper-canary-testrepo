var i,
    a,
    s,
    r,
    l = n(442837),
    o = n(570140);
let c = 'UPDATE_NOT_AVAILABLE';
function u(e) {
    c = e.type;
}
class d extends (r = l.ZP.Store) {
    getState() {
        return c;
    }
}
(s = 'AutoUpdateStore'),
    (a = 'displayName') in (i = d)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new d(o.Z, {
        CHECKING_FOR_UPDATES: u,
        UPDATE_NOT_AVAILABLE: u,
        UPDATE_AVAILABLE: u,
        UPDATE_MANUALLY: u,
        UPDATE_ERROR: u,
        UPDATE_DOWNLOADED: u
    }));
