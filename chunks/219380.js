"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var a = n("901165"),
  s = n("50885"),
  l = n("84090"),
  i = n("251744"),
  r = n("261131"),
  o = n("370453"),
  u = n("878099"),
  d = n("221850"),
  c = n("700721"),
  f = n("871832"),
  E = n("805875"),
  h = n("376897"),
  _ = n("683805"),
  C = n("825734"),
  S = n("766383"),
  I = n("696287"),
  m = n("778117"),
  p = n("195180"),
  T = n("357147");
let g = {
    ...l.crossPlatformCommands,
    ...d.default,
    ...c.default,
    ...E.default,
    ...h.default,
    ..._.default,
    ...C.default,
    ...I.default,
    ...p.default,
    ...m.default,
    ...f.default,
    ...S.default
  },
  A = {
    ...i.default,
    ...o.overlayEventHandlers,
    ...u.voiceSettingsEventHandlers
  };
var N = {
  server: r.default,
  commands: g,
  events: A,
  stores: [a.default],
  transports: [T.default],
  registerTransportsForEmbeddedPlatform: function() {
    s.default.ensureModule("discord_rpc").then(() => {
      let e = [n("255516").default, n("90906").default];
      for (let t of e) r.default.registerTransport(t)
    })
  }
}