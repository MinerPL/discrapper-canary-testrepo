n.d(t, {
    Z: function () {
        return l;
    }
}), n(47120);
var s = n(470079), a = n(479531), i = n(53365), r = n(581050);
function l(e) {
    let [t, n] = s.useState(null != e), [l, o] = s.useState(), [c, d] = s.useState(), u = s.useCallback(async e => {
            n(!0), o(void 0);
            try {
                var t, s, l, c, u;
                let n = await i.yk(e);
                d({
                    isEligibleForMonetization: n.sufficient,
                    hasSufficientMembers: n.size,
                    hasEnabled2FA: n.mfa,
                    meetsServerAgeRequirement: n.age,
                    meetsOwnerAgeRequirement: n.owner_age,
                    noRecentViolations: n.safe_environment,
                    weeklyCommunicators: n.engagement_healthy,
                    hasMemberRetention: n.retention_healthy,
                    notNSFW: 0 === Object.keys(n.nsfw_properties).length,
                    canApply: n.can_apply,
                    isApplicationPending: (null === (t = n.latest_request) || void 0 === t ? void 0 : t.state) === r.X.OPEN,
                    actionRequired: (null === (s = n.latest_request) || void 0 === s ? void 0 : s.state) === r.X.ACTION_REQUIRED,
                    minimumAgeInDays: n.minimum_age_in_days,
                    minimumOwnerAgeInYears: n.minimum_owner_age_in_years,
                    minimumSize: n.minimum_size,
                    latestRequest: n.latest_request,
                    rejection: n.rejection,
                    guildMemberCount: null === (l = n.health_score) || void 0 === l ? void 0 : l.guild_size,
                    communicatorCount: null === (c = n.health_score) || void 0 === c ? void 0 : c.communicators,
                    retentionScore: null === (u = n.health_score) || void 0 === u ? void 0 : u.perc_ret_w1
                });
            } catch (e) {
                o(new a.Z(e));
            } finally {
                n(!1);
            }
        }, []);
    return {
        error: l,
        loading: t,
        eligibility: c,
        refresh: s.useCallback(() => {
            null != e && u(e);
        }, [
            e,
            u
        ])
    };
}
