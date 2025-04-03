let i;
var r,
    a,
    s,
    l,
    o = n(442837),
    c = n(570140);
let d = !1;
class u extends (l = o.ZP.Store) {
    get harvestType() {
        return i;
    }
    get requestingHarvest() {
        return d;
    }
}
(s = 'DataHarvestStore'),
    (a = 'displayName') in (r = u)
        ? Object.defineProperty(r, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[a] = s),
    (t.Z = new u(c.Z, {
        CONNECTION_OPEN: function () {
            i = void 0;
        },
        UPDATE_DATA_HARVEST_TYPE: function (e) {
            let { harvestType: t } = e;
            (d = !1), (i = t);
        },
        LOAD_DATA_HARVEST_TYPE_START: function () {
            d = !0;
        },
        LOAD_DATA_HARVEST_TYPE_FAILURE: function () {
            d = !1;
        },
        LOGOUT: function () {
            (d = !1), (i = null);
        }
    }));
