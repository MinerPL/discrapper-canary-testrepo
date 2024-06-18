"use strict";
n.d(t, {
  GB: function() {
    return _
  },
  Rh: function() {
    return l
  },
  Yz: function() {
    return u
  }
}), n(411104), n(729594);
var i = n(261470);
n(243814);
var r = n(544891),
  s = n(570140);
n(591759);
var o = n(628566),
  a = n(981631);
n(689938);

function l() {
  o.Z.getApplicationsShelfFetchState() === o.M.NOT_FETCHED && (s.Z.dispatch({
    type: "APPLICATIONS_SHELF_FETCH_START"
  }), r.tn.get(a.ANM.APPLICATIONS_SHELF).then(e => s.Z.dispatch({
    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
    applications: e.body.applications
  })).catch(e => s.Z.dispatch({
    type: "APPLICATIONS_SHELF_FETCH_FAIL"
  })))
}

function u(e) {
  let t = new i.Z(1e3, 5e3);
  s.Z.dispatch({
    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
    channelId: e
  }), r.tn.get({
    url: a.ANM.CHANNEL_INTEGRATIONS(e),
    backoff: t,
    retries: 10
  }).then(t => {
    s.Z.dispatch({
      type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
      channelId: e,
      integrations: t.body
    })
  }).catch(() => {
    s.Z.dispatch({
      type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
      channelId: e
    })
  })
}

function _(e, t) {
  return r.tn.del(a.ANM.CHANNEL_INTEGRATION(e, t)).then(e => {
    var t;
    if (null === (t = e.body) || void 0 === t ? void 0 : t.message) throw Error(e.body.message)
  })
}