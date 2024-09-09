var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(65154);
let c = u.dX;
class d extends (s = o.ZP.Store) {
    get bitrate() {
        return c;
    }
}
(a = 'BitRateStore'),
    (i = 'displayName') in (r = d)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new d(l.Z, {
        SET_CHANNEL_BITRATE: function (e) {
            c = e.bitrate;
        }
    }));
