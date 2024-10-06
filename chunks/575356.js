let s;
var a,
    r,
    i,
    l,
    o = n(442837),
    c = n(570140);
let d = !1;
class _ extends (l = o.ZP.Store) {
    get harvestType() {
        return s;
    }
    get requestingHarvest() {
        return d;
    }
}
(i = 'DataHarvestStore'),
    (r = 'displayName') in (a = _)
        ? Object.defineProperty(a, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[r] = i),
    (t.Z = new _(c.Z, {
        CONNECTION_OPEN: function () {
            s = void 0;
        },
        UPDATE_DATA_HARVEST_TYPE: function (e) {
            let { harvestType: t } = e;
            (d = !1), (s = t);
        },
        LOAD_DATA_HARVEST_TYPE_START: function () {
            d = !0;
        },
        LOAD_DATA_HARVEST_TYPE_FAILURE: function () {
            d = !1;
        },
        LOGOUT: function () {
            (d = !1), (s = null);
        }
    }));
