n(47120);
var i = n(544891),
  a = n(626135),
  s = n(186901),
  r = n(981631);
t.Z = {
  [r.Etm.GET_NETWORKING_CONFIG]: {
scope: s.lH,
handler: () => Promise.all([
  i.tn.get({
    url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT,
    retries: 3
  }).then(e => {
    let {
      body: {
        address: t
      }
    } = e;
    return t;
  }),
  i.tn.post({
    url: r.ANM.NETWORKING_TOKEN,
    retries: 3,
    oldFormErrors: !0
  }).then(e => {
    let {
      body: {
        token: t
      }
    } = e;
    return t;
  })
]).then(e => {
  let [t, n] = e;
  return {
    address: t,
    token: n
  };
})
  },
  [r.Etm.NETWORKING_SYSTEM_METRICS]: {
scope: s.lH,
handler(e) {
  let {
    socket: t,
    args: n
  } = e;
  n.application_id = t.application.id, a.default.track(r.rMx.NETWORKING_SYSTEM_METRICS, n);
}
  },
  [r.Etm.NETWORKING_PEER_METRICS]: {
scope: s.lH,
handler(e) {
  let {
    socket: t,
    args: n
  } = e;
  n.application_id = t.application.id, a.default.track(r.rMx.NETWORKING_PEER_METRICS, n);
}
  },
  [r.Etm.NETWORKING_CREATE_TOKEN]: {
scope: s.lH,
handler: () => i.tn.post({
  url: r.ANM.NETWORKING_TOKEN,
  retries: 1,
  oldFormErrors: !0
}).then(e => e.body)
  }
};