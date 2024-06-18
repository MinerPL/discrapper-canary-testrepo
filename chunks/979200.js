"use strict";
n.d(t, {
  PM: function() {
    return u
  },
  ZC: function() {
    return r.u$
  },
  de: function() {
    return a
  },
  x9: function() {
    return l
  }
});
var i = n(544891),
  r = n(921072),
  s = n(981631),
  o = n(689938);
async function a(e) {
  let t = s.ANM.APPLICATION_DISCLOSURES(e),
    n = await i.tn.get({
      url: t,
      retries: 3
    }),
    r = n.body.disclosures,
    o = n.body.acked_disclosures;
  return {
    disclosures: r,
    ackedDisclosures: o,
    allAcked: n.body.all_acked
  }
}
async function l(e, t) {
  let n = s.ANM.APPLICATION_DISCLOSURES(e);
  await i.tn.post({
    url: n,
    body: {
      disclosures: t
    }
  })
}

function u(e) {
  switch (e) {
    case r.u$.IP_LOCATION:
      return o.Z.Messages.OAUTH2_IP_LOCATION_DISCLOSURE;
    case r.u$.DISPLAYS_ADVERTISEMENTS:
      return o.Z.Messages.OAUTH2_ADVERTISEMENTS_DISCLOSURE;
    default:
      return null
  }
}