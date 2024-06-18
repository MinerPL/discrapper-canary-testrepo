"use strict";
n.d(t, {
  DB: function() {
    return o
  },
  Lm: function() {
    return d
  },
  Ob: function() {
    return a
  },
  Rw: function() {
    return l
  },
  Sd: function() {
    return s
  },
  gS: function() {
    return u
  },
  mG: function() {
    return _
  }
});
var i = n(586072),
  r = n(981631);

function s() {
  let {
    isUserEligibleForCreatorMonetization: e
  } = i.bT.useExperiment({
    location: "e3bb71_1"
  }, {
    autoTrackExposure: !1
  });
  return e
}

function o() {
  let {
    isUserEligibleForCreatorMonetization: e
  } = i.bT.getCurrentConfig({
    location: "e3bb71_2"
  }, {
    autoTrackExposure: !1
  });
  return e
}

function a(e) {
  let t = function(e) {
      let {
        enableFastMonetizationOnboardingForGuild: t
      } = i.z.useExperiment({
        guildId: null != e ? e : r.lds,
        location: "e3bb71_3"
      }, {
        autoTrackExposure: !0
      }), {
        enableFastMonetizationOnboardingForUser: n
      } = i.AC.useExperiment({
        location: "e3bb71_4"
      }, {
        autoTrackExposure: !1
      });
      return null != e && t && n
    }(null == e ? void 0 : e.id),
    n = function(e) {
      let {
        enableFastMonetizationOnboardingForUser: t
      } = i.AC.useExperiment({
        location: "e3bb71_7"
      }, {
        autoTrackExposure: !1
      });
      return null != e && e.hasFeature(r.oNc.CREATOR_MONETIZABLE_WHITEGLOVE) && t
    }(e);
  return t || n
}

function l(e) {
  return function(e) {
    let {
      enableFastMonetizationOnboardingForGuild: t
    } = i.z.getCurrentConfig({
      guildId: null != e ? e : r.lds,
      location: "e3bb71_5"
    }), {
      enableFastMonetizationOnboardingForUser: n
    } = i.AC.getCurrentConfig({
      location: "e3bb71_6"
    });
    return null != e && t && n
  }(null == e ? void 0 : e.id) || function(e) {
    let {
      enableFastMonetizationOnboardingForUser: t
    } = i.AC.getCurrentConfig({
      location: "e3bb71_8"
    });
    return null != e && e.hasFeature(r.oNc.CREATOR_MONETIZABLE_WHITEGLOVE) && t
  }(e)
}

function u(e) {
  let {
    enableWaitlist: t
  } = i.IW.useExperiment({
    guildId: null != e ? e : r.lds,
    location: "e3bb71_9"
  }, {
    autoTrackExposure: !1
  });
  return t
}

function _(e) {
  let {
    enableWaitlist: t
  } = i.IW.getCurrentConfig({
    guildId: null != e ? e : r.lds,
    location: "e3bb71_10"
  });
  return t
}

function d() {
  let {
    enableCreatorMonetizationNagActivateForUser: e
  } = i.aC.getCurrentConfig({
    location: "e3bb71_11"
  }, {
    autoTrackExposure: !0
  });
  return e
}