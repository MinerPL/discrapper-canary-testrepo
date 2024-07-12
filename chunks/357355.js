var r = n(442837),
  i = n(570140);
let a = {
  fetched: !1,
  affinities: []
};
class o extends r.ZP.Store {
  get hasFetched() {
return a.fetched;
  }
  get affinities() {
return a.affinities;
  }
}
t.Z = new o(i.Z, {
  BILLING_NITRO_AFFINITY_FETCHED: function(e) {
let {} = e;
a.fetched = !0;
  },
  BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(e) {
let {
  res: t
} = e;
a.affinities = t;
  }
});