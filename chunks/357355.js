"use strict";
var i = n(442837),
  r = n(570140);
let s = {
  fetched: !1,
  affinities: []
};
class o extends i.ZP.Store {
  get hasFetched() {
    return s.fetched
  }
  get affinities() {
    return s.affinities
  }
}
t.Z = new o(r.Z, {
  BILLING_NITRO_AFFINITY_FETCHED: function(e) {
    let {} = e;
    s.fetched = !0
  },
  BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(e) {
    let {
      res: t
    } = e;
    s.affinities = t
  }
})