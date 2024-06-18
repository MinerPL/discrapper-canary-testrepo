"use strict";
n.d(t, {
  Z: function() {
    return c
  },
  o: function() {
    return d
  }
}), n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(544891),
  o = n(570140),
  a = n(503013),
  l = n(283595),
  u = n(804739),
  _ = n(981631);
async function d() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Z.entitledBranchIds;
  if (!(0, u.Q)() || 0 === e.length) return [];
  let t = r().chunk(e, 50);
  try {
    let e = t.map(async e => (await s.tn.post({
        url: _.ANM.APPLICATION_BRANCHES,
        body: {
          branch_ids: e
        },
        oldFormErrors: !0
      })).body.map(a.Z.createFromServer)),
      n = await Promise.all(e),
      i = r().flatten(n);
    return o.Z.dispatch({
      type: "APPLICATION_BRANCHES_FETCH_SUCCESS",
      branches: i
    }), i
  } catch (t) {
    return o.Z.dispatch({
      type: "APPLICATION_BRANCHES_FETCH_FAIL",
      branchIds: e
    }), []
  }
}
async function c(e) {
  try {
    let t = await s.tn.get({
        url: _.ANM.OWNED_APPLICATION_BRANCHES(e),
        oldFormErrors: !0
      }),
      n = Array.isArray(t.body) ? t.body.map(a.Z.createFromServer) : [];
    return o.Z.dispatch({
      type: "OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS",
      applicationId: e,
      branches: n
    }), n
  } catch (t) {
    return o.Z.dispatch({
      type: "OWNED_APPLICATION_BRANCHES_FETCH_FAIL",
      applicationId: e
    }), []
  }
}