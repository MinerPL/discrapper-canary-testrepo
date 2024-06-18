"use strict";
n.d(t, {
  AG: function() {
    return c
  },
  FR: function() {
    return d
  },
  Ij: function() {
    return E
  },
  MQ: function() {
    return _
  },
  WC: function() {
    return u
  }
}), n(47120);
var i = n(442837),
  r = n(818083),
  s = n(487419),
  o = n(496675),
  a = n(434404),
  l = n(981631);
let u = (0, r.B)({
  kind: "guild",
  id: "2022-07_invites_disabled",
  label: "Report Raids",
  defaultConfig: {
    enableInvitesDisabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Reporting Of Raids",
    config: {
      enableInvitesDisabled: !0
    }
  }]
});

function _(e) {
  return (0, i.e7)([o.Z], () => null != e && o.Z.can(l.Plq.MANAGE_GUILD, e), [e])
}

function d(e) {
  return u.useExperiment({
    guildId: e.id,
    location: "108f83_1"
  }, {
    autoTrackExposure: !1
  })
}
async function c(e, t) {
  if (e.hasFeature(l.oNc.INVITES_DISABLED) === t) return;
  let n = new Set(e.features);
  t ? n.add(l.oNc.INVITES_DISABLED) : n.delete(l.oNc.INVITES_DISABLED), await a.Z.saveGuild(e.id, {
    features: n
  }, {
    throwErr: !0
  })
}

function E(e) {
  var t;
  let n = _(e),
    r = (0, i.e7)([s.Z], () => null != e ? s.Z.getGuildIncident(e.id) : null),
    o = (null == e ? void 0 : null === (t = e.hasFeature) || void 0 === t ? void 0 : t.call(e, l.oNc.INVITES_DISABLED)) || (null == r ? void 0 : r.invitesDisabledUntil) != null && new Date(r.invitesDisabledUntil) > new Date;
  return n && o
}