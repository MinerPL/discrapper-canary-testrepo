"use strict";
n.d(t, {
  Go: function() {
    return E
  },
  NV: function() {
    return _
  },
  Zq: function() {
    return I
  },
  ln: function() {
    return c
  },
  nM: function() {
    return T
  },
  xt: function() {
    return h
  }
});
var i = n(818083),
  r = n(836157),
  s = n(441167),
  o = n(131951),
  a = n(74538),
  l = n(779618),
  u = n(474936);
let _ = (0, i.B)({
    kind: "user",
    id: "2022-11_clips_experiment",
    label: "Clips Experiment",
    defaultConfig: {
      enableClips: !1,
      ignorePlatformRestriction: !1,
      showClipsHeaderEntrypoint: !1
    },
    treatments: [{
      id: 1,
      label: "Clips without upsells",
      config: {
        enableClips: !0,
        ignorePlatformRestriction: !1,
        showClipsHeaderEntrypoint: !0
      }
    }, {
      id: 2,
      label: "Clips with upsells",
      config: {
        enableClips: !0,
        ignorePlatformRestriction: !1,
        showClipsHeaderEntrypoint: !0
      }
    }, {
      id: 99,
      label: "Clips 4 da Developerz",
      config: {
        enableClips: !0,
        ignorePlatformRestriction: !0,
        showClipsHeaderEntrypoint: !0
      }
    }]
  }),
  d = (0, i.B)({
    kind: "user",
    id: "2023-09_clips_nitro_early_access",
    label: "Clips (Nitro EA)",
    defaultConfig: {
      enableClips: !1,
      enablePremiumEarlyAccessAnnouncementCoachmark: !1,
      enablePremiumEarlyAccessGoLiveRoadblock: !1
    },
    treatments: [{
      id: 1,
      label: "Clips Nitro EA Upsells Visible",
      config: {
        enableClips: !1,
        enablePremiumEarlyAccessAnnouncementCoachmark: !0,
        enablePremiumEarlyAccessGoLiveRoadblock: !0
      }
    }, {
      id: 2,
      label: "Clips Enabled (Nitro)",
      config: {
        enableClips: !0,
        enablePremiumEarlyAccessAnnouncementCoachmark: !0,
        enablePremiumEarlyAccessGoLiveRoadblock: !1
      }
    }]
  });

function c() {
  if (!(0, l.Z)(o.Z)) return !1;
  let {
    enableClips: e
  } = d.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: !1
  }), {
    enableClips: t
  } = _.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: !1
  }), {
    enableDecoupledGameClipping: n
  } = r.Z.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: !1
  }), {
    enableViewerClipping: i
  } = s.Z.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: !1
  });
  return e || t || n || i
}

function E() {
  let e = (0, l.Z)(o.Z),
    {
      enableClips: t
    } = d.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: !1
    }),
    {
      enableClips: n
    } = _.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: !1
    }),
    {
      enableDecoupledGameClipping: i
    } = r.Z.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: !1
    }),
    {
      enableViewerClipping: a
    } = s.Z.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: !1
    });
  return (n || t || i || a) && e
}
let I = e => {
    let {
      autoTrackExposure: t
    } = e, n = (0, l.Z)(o.Z), {
      enablePremiumEarlyAccessGoLiveRoadblock: i
    } = d.useExperiment({
      location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
    }, {
      autoTrackExposure: t && n
    });
    return !!n && i
  },
  T = e => {
    let {
      autoTrackExposure: t
    } = e, n = (0, l.Z)(o.Z), {
      enablePremiumEarlyAccessAnnouncementCoachmark: i
    } = d.useExperiment({
      location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
    }, {
      autoTrackExposure: t && n
    });
    return !!n && i
  };

function h(e) {
  return a.ZP.isPremiumAtLeast(e.premiumType, u.p9.TIER_2)
}