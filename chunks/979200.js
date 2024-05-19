"use strict";
n.r(t), n.d(t, {
  ApplicationDisclosure: function() {
    return r.ApplicationDisclosureType
  },
  ackDisclosures: function() {
    return l
  },
  getDisclosures: function() {
    return o
  },
  getTextForDisclosure: function() {
    return u
  }
});
var i = n("544891"),
  r = n("921072"),
  a = n("981631"),
  s = n("689938");
async function o(e) {
  let t = a.Endpoints.APPLICATION_DISCLOSURES(e),
    n = await i.HTTP.get({
      url: t,
      retries: 3
    }),
    r = n.body.disclosures,
    s = n.body.acked_disclosures;
  return {
    disclosures: r,
    ackedDisclosures: s,
    allAcked: n.body.all_acked
  }
}
async function l(e, t) {
  let n = a.Endpoints.APPLICATION_DISCLOSURES(e);
  await i.HTTP.post({
    url: n,
    body: {
      disclosures: t
    }
  })
}

function u(e) {
  switch (e) {
    case r.ApplicationDisclosureType.IP_LOCATION:
      return s.default.Messages.OAUTH2_IP_LOCATION_DISCLOSURE;
    case r.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS:
      return s.default.Messages.OAUTH2_ADVERTISEMENTS_DISCLOSURE;
    default:
      return null
  }
}