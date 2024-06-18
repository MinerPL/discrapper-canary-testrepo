"use strict";
n.d(t, {
  $F: function() {
    return E
  },
  Bt: function() {
    return s
  },
  Gp: function() {
    return I
  },
  hQ: function() {
    return _
  },
  kT: function() {
    return o
  },
  s1: function() {
    return a
  },
  ss: function() {
    return d
  },
  sy: function() {
    return u
  },
  yi: function() {
    return c
  }
}), n(223892);
var i = n(644542),
  r = n(981631);

function s(e) {
  let {
    enableRoleSubscriptionsForGuild: t
  } = i.Xv.useExperiment({
    guildId: null != e ? e : r.lds,
    location: "504714_1"
  }, {
    autoTrackExposure: !0
  }), {
    enableRoleSubscriptionsForUser: n
  } = i.Zo.useExperiment({
    location: "504714_2"
  }, {
    autoTrackExposure: !1
  });
  return null != e && t && n
}

function o(e) {
  let {
    enableRoleSubscriptionsForGuild: t
  } = i.Xv.getCurrentConfig({
    guildId: null != e ? e : r.lds,
    location: "504714_3"
  }), {
    enableRoleSubscriptionsForUser: n
  } = i.Zo.getCurrentConfig({
    location: "504714_4"
  }, {
    autoTrackExposure: !1
  });
  return null != e && t && n
}

function a(e) {
  return i.ai.useExperiment({
    guildId: null != e ? e : r.lds,
    location: "504714_7"
  })
}
let l = [r.oNc.ROLE_SUBSCRIPTIONS_ENABLED, r.oNc.CREATOR_MONETIZABLE, r.oNc.CREATOR_MONETIZABLE_PROVISIONAL],
  u = e => null != e && l.some(t => e.hasFeature(t));

function _(e) {
  let {
    enabled: t
  } = i.jJ.getCurrentConfig({
    guildId: null != e ? e : r.lds,
    location: "504714_9"
  }, {
    autoTrackExposure: !1
  });
  return t
}

function d(e) {
  let {
    enabled: t
  } = i.jJ.useExperiment({
    guildId: null != e ? e : r.lds,
    location: "504714_10"
  }, {
    autoTrackExposure: !1
  });
  return t
}

function c(e) {
  let {
    showCreatorPortalLink: t
  } = i.jJ.useExperiment({
    guildId: null != e ? e : r.lds,
    location: "504714_11"
  }, {
    autoTrackExposure: !1
  });
  return t
}

function E() {
  let {
    enabled: e
  } = i.$i.getCurrentConfig({
    location: "504714_12"
  }, {
    autoTrackExposure: !1
  });
  return e
}

function I() {
  let {
    enabled: e
  } = i.$i.useExperiment({
    location: "504714_13"
  }, {
    autoTrackExposure: !1
  });
  return e
}