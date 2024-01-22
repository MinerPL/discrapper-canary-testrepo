"use strict";
n.r(t), n.d(t, {
  EXAMPLE_DOMAIN: function() {
    return s
  },
  getDnsName: function() {
    return r
  },
  getHttpName: function() {
    return a
  },
  DomainConnectionExperiment: function() {
    return o
  }
});
var i = n("862205");
let s = "example.com",
  r = e => "_discord.".concat(e),
  a = e => "https://".concat(e, "/.well-known/discord"),
  o = (0, i.createExperiment)({
    id: "2023-07_domain_connection",
    label: "Domain Connection",
    kind: "user",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enabled",
      config: {
        enabled: !0
      }
    }]
  })