"use strict";
t.d(s, {
  Z: function() {
    return u
  }
}), t(653041);
var n = t(470079),
  i = t(782568),
  l = t(635142),
  a = t(63063),
  r = t(827086),
  o = t(431516),
  c = t(981631),
  d = t(689938);

function u(e) {
  let {
    onEligibilityBecameStale: s,
    actions: t,
    sortedByIneligible: u
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
    isUserMFAEnabled: E,
    isModerationMFAEnabled: _
  } = (0, o.N)(), I = n.useCallback(async () => {
    var e, n;
    E ? !_ && await (null == t ? void 0 : null === (n = t.onRequireModeratorMFAClick) || void 0 === n ? void 0 : n.call(t)) : await (null == t ? void 0 : null === (e = t.onEnableMFAClick) || void 0 === e ? void 0 : e.call(t)), null == s || s()
  }, [E, _, s, t]), T = (0, r.R)({
    onEnableMFAClick: I
  });
  return n.useMemo(() => {
    if (null == e) return null;
    let {
      minimumOwnerAgeInYears: s,
      minimumSize: n
    } = e, r = !e.noRecentViolations, o = [{
      key: "no_violations_requirement",
      checkedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_VIOLATIONS_ELIGIBLE,
      uncheckedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_VIOLATIONS_NOT_ELIGIBLE,
      description: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_VIOLATIONS_DESCRIPTION.format({
        communityGuidelinesUrl: a.Z.getArticleURL(c.BhN.PUBLIC_GUILD_GUILDLINES)
      }),
      checked: e.noRecentViolations,
      actionLabel: r ? d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_RECENT_VIOLATION_ELIGIBILITY_CTA : void 0,
      actionHandler: r ? () => (0, i.Z)(a.Z.getSubmitRequestURL()) : void 0
    }];
    if (null != s && null != e.meetsOwnerAgeRequirement && o.push({
        key: "owner_age_requirement",
        checkedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_OWNER_AGE_ELIGIBLE,
        uncheckedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_OWNER_AGE_NOT_ELIGIBLE,
        description: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_OWNER_AGE_DESCRIPTION.format({
          minimumOwnerAgeInYears: s
        }),
        checked: e.meetsOwnerAgeRequirement
      }), null != n && null != e.hasSufficientMembers && o.push({
        key: "member_count_requirement",
        checkedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_MEMBERS_ELIGIBLE,
        uncheckedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_MEMBERS_NOT_ELIGIBLE,
        description: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_MEMBERS_DESCRIPTION.format({
          minimumSize: n
        }),
        checked: e.hasSufficientMembers
      }), null != e.minimumAgeInDays && null != e.meetsServerAgeRequirement && o.push({
        key: "server_age_requirement",
        checkedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_AGE_ELIGIBLE,
        uncheckedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_AGE_NOT_ELIGIBLE,
        description: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_AGE_DESCRIPTION.format({
          minimumAge: (0, l.Z)(e.minimumAgeInDays)
        }),
        checked: e.meetsServerAgeRequirement
      }), null != e.weeklyCommunicators && o.push({
        key: "weekly_communicator_count_requirement",
        checkedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_COMMUNICATORS_ELIGIBLE,
        uncheckedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_COMMUNICATORS_NOT_ELIGIBLE,
        description: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_COMMUNICATORS_DESCRIPTION,
        checked: e.weeklyCommunicators
      }), null != e.hasMemberRetention && o.push({
        key: "member_retention_requirement",
        checkedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_RETENTION_ELIGIBLE,
        uncheckedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_RETENTION_NOT_ELIGIBLE,
        description: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_RETENTION_DESCRIPTION,
        checked: e.hasMemberRetention
      }), o.push({
        key: "nsfw_requirement",
        checkedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_NSFW_CONTENT_ELIGIBLE,
        uncheckedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_NSFW_CONTENT_NOT_ELIGIBLE,
        description: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_NSFW_CONTENT_DESCRIPTION,
        checked: e.notNSFW
      }), null != e.hasEnabled2FA) {
      let s = !e.hasEnabled2FA && !E && (null == t ? void 0 : t.onEnableMFAClick) != null,
        n = !e.hasEnabled2FA && !_ && (null == t ? void 0 : t.onRequireModeratorMFAClick) != null,
        i = s || n;
      o.push({
        key: "2fa_requirement",
        checkedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_2FA_ELIGIBLE,
        uncheckedLabel: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_2FA_NOT_ELIGIBLE,
        description: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_2FA_DESCRIPTION.format({
          enableMFAHook: T
        }),
        checked: e.hasEnabled2FA,
        actionLabel: i ? d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_2MFA_ELIGIBILITY_CTA : void 0,
        actionHandler: i ? I : void 0
      })
    }
    return !0 === u && o.sort(e => e.checked ? 0 : -1), o
  }, [e, u, E, t, _, T, I])
}