"use strict";
t.d(s, {
  Z: function() {
    return r
  }
}), t(47120);
var n = t(470079),
  i = t(479531),
  l = t(53365),
  a = t(581050);

function r(e) {
  let [s, t] = n.useState(null != e), [r, o] = n.useState(), [c, d] = n.useState(), u = n.useCallback(async e => {
    t(!0), o(void 0);
    try {
      var s, n, r, c, u;
      let t = await l.yk(e);
      d({
        isEligibleForMonetization: t.sufficient,
        hasSufficientMembers: t.size,
        hasEnabled2FA: t.mfa,
        meetsServerAgeRequirement: t.age,
        meetsOwnerAgeRequirement: t.owner_age,
        noRecentViolations: t.safe_environment,
        weeklyCommunicators: t.engagement_healthy,
        hasMemberRetention: t.retention_healthy,
        notNSFW: 0 === Object.keys(t.nsfw_properties).length,
        canApply: t.can_apply,
        isApplicationPending: (null === (s = t.latest_request) || void 0 === s ? void 0 : s.state) === a.X.OPEN,
        actionRequired: (null === (n = t.latest_request) || void 0 === n ? void 0 : n.state) === a.X.ACTION_REQUIRED,
        minimumAgeInDays: t.minimum_age_in_days,
        minimumOwnerAgeInYears: t.minimum_owner_age_in_years,
        minimumSize: t.minimum_size,
        latestRequest: t.latest_request,
        rejection: t.rejection,
        guildMemberCount: null === (r = t.health_score) || void 0 === r ? void 0 : r.guild_size,
        communicatorCount: null === (c = t.health_score) || void 0 === c ? void 0 : c.communicators,
        retentionScore: null === (u = t.health_score) || void 0 === u ? void 0 : u.perc_ret_w1
      })
    } catch (e) {
      o(new i.Z(e))
    } finally {
      t(!1)
    }
  }, []);
  return {
    error: r,
    loading: s,
    eligibility: c,
    refresh: n.useCallback(() => {
      null != e && u(e)
    }, [e, u])
  }
}