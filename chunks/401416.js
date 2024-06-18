"use strict";
n.d(t, {
  Y: function() {
    return u
  }
}), n(47120);
var i = n(544891),
  r = n(147913),
  s = n(25733),
  o = n(704587),
  a = n(981631);
class l extends r.Z {
  intialize() {
    o.s.getCurrentConfig({
      location: "initializer"
    }, {
      autoTrackExposure: !1
    })
  }
  handleDmSettingsUpsellShow(e) {
    s.Z.openDmSettingsUpsellModal(e.guildId)
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      DM_SETTINGS_UPSELL_SHOW: this.handleDmSettingsUpsellShow
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}

function u(e) {
  return i.tn.post({
    url: a.ANM.DM_SETTINGS_UPSELL_ACK(e)
  })
}
t.Z = new l