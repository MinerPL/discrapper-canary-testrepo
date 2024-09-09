n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(653041);
var s = n(470079),
    a = n(782568),
    i = n(635142),
    r = n(63063),
    l = n(827086),
    o = n(431516),
    c = n(981631),
    d = n(689938);
function u(e) {
    let { onEligibilityBecameStale: t, actions: n, sortedByIneligible: u } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { isUserMFAEnabled: _, isModerationMFAEnabled: I } = (0, o.N)(),
        E = s.useCallback(async () => {
            var e, s;
            _ ? !I && (await (null == n ? void 0 : null === (s = n.onRequireModeratorMFAClick) || void 0 === s ? void 0 : s.call(n))) : await (null == n ? void 0 : null === (e = n.onEnableMFAClick) || void 0 === e ? void 0 : e.call(n)), null == t || t();
        }, [_, I, t, n]),
        T = (0, l.R)({ onEnableMFAClick: E });
    return s.useMemo(() => {
        if (null == e) return null;
        let { minimumOwnerAgeInYears: t, minimumSize: s } = e,
            l = !e.noRecentViolations,
            o = [
                {
                    key: 'no_violations_requirement',
                    checkedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_VIOLATIONS_ELIGIBLE,
                    uncheckedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_VIOLATIONS_NOT_ELIGIBLE,
                    description: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_VIOLATIONS_DESCRIPTION.format({ communityGuidelinesUrl: r.Z.getArticleURL(c.BhN.PUBLIC_GUILD_GUILDLINES) }),
                    checked: e.noRecentViolations,
                    actionLabel: l ? d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_RECENT_VIOLATION_ELIGIBILITY_CTA : void 0,
                    actionHandler: l ? () => (0, a.Z)(r.Z.getSubmitRequestURL()) : void 0
                }
            ];
        if (
            (null != t &&
                null != e.meetsOwnerAgeRequirement &&
                o.push({
                    key: 'owner_age_requirement',
                    checkedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_OWNER_AGE_ELIGIBLE,
                    uncheckedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_OWNER_AGE_NOT_ELIGIBLE,
                    description: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_OWNER_AGE_DESCRIPTION.format({ minimumOwnerAgeInYears: t }),
                    checked: e.meetsOwnerAgeRequirement
                }),
            null != s &&
                null != e.hasSufficientMembers &&
                o.push({
                    key: 'member_count_requirement',
                    checkedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_MEMBERS_ELIGIBLE,
                    uncheckedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_MEMBERS_NOT_ELIGIBLE,
                    description: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_MEMBERS_DESCRIPTION.format({ minimumSize: s }),
                    checked: e.hasSufficientMembers
                }),
            null != e.minimumAgeInDays &&
                null != e.meetsServerAgeRequirement &&
                o.push({
                    key: 'server_age_requirement',
                    checkedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_AGE_ELIGIBLE,
                    uncheckedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_AGE_NOT_ELIGIBLE,
                    description: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_AGE_DESCRIPTION.format({ minimumAge: (0, i.Z)(e.minimumAgeInDays) }),
                    checked: e.meetsServerAgeRequirement
                }),
            null != e.weeklyCommunicators &&
                o.push({
                    key: 'weekly_communicator_count_requirement',
                    checkedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_COMMUNICATORS_ELIGIBLE,
                    uncheckedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_COMMUNICATORS_NOT_ELIGIBLE,
                    description: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_COMMUNICATORS_DESCRIPTION,
                    checked: e.weeklyCommunicators
                }),
            null != e.hasMemberRetention &&
                o.push({
                    key: 'member_retention_requirement',
                    checkedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_RETENTION_ELIGIBLE,
                    uncheckedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_RETENTION_NOT_ELIGIBLE,
                    description: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_RETENTION_DESCRIPTION,
                    checked: e.hasMemberRetention
                }),
            o.push({
                key: 'nsfw_requirement',
                checkedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_NSFW_CONTENT_ELIGIBLE,
                uncheckedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_NSFW_CONTENT_NOT_ELIGIBLE,
                description: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_NSFW_CONTENT_DESCRIPTION,
                checked: e.notNSFW
            }),
            null != e.hasEnabled2FA)
        ) {
            let t = !e.hasEnabled2FA && !_ && (null == n ? void 0 : n.onEnableMFAClick) != null,
                s = !e.hasEnabled2FA && !I && (null == n ? void 0 : n.onRequireModeratorMFAClick) != null,
                a = t || s;
            o.push({
                key: '2fa_requirement',
                checkedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_2FA_ELIGIBLE,
                uncheckedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_2FA_NOT_ELIGIBLE,
                description: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_2FA_DESCRIPTION.format({ enableMFAHook: T }),
                checked: e.hasEnabled2FA,
                actionLabel: a ? d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_2MFA_ELIGIBILITY_CTA : void 0,
                actionHandler: a ? E : void 0
            });
        }
        return !0 === u && o.sort((e) => (e.checked ? 0 : -1)), o;
    }, [e, u, _, n, I, T, E]);
}
