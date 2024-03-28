"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  i = s("481060"),
  r = s("782568"),
  o = s("223892"),
  d = s("203498"),
  u = s("641806"),
  c = s("30624"),
  E = s("577275"),
  _ = s("594174"),
  I = s("451478"),
  T = s("499150"),
  S = s("626135"),
  f = s("584825"),
  m = s("723047"),
  N = s("416867"),
  g = s("903773"),
  h = s("215124"),
  C = s("326578"),
  R = s("981631"),
  x = s("674563"),
  L = s("829857"),
  O = s("689938"),
  A = s("757922");

function p(e) {
  let {
    onCreateTeamClick: t,
    isGuildOwner: s
  } = e;
  return (0, a.jsx)("div", {
    className: A.selectTeamContainer,
    children: (0, a.jsx)(i.Button, {
      disabled: !s,
      onClick: t,
      className: A.enableTicketingButton,
      fullWidth: !0,
      children: O.default.Messages.GUILD_MONETIZATION_ENABLE_CREATE_TEAM
    })
  })
}

function M(e) {
  let {
    guild: t,
    eligibleTeams: s,
    isGuildOwner: n
  } = e, [r, o] = l.useState(), {
    enableGuildMonetizationForTeam: u,
    submitting: c,
    error: E
  } = (0, d.default)(), {
    fetchSubscriptionsSettings: _
  } = (0, f.useFetchSubscriptionsSettings)(), I = (0, m.useRoleSubscriptionSettingsDisabled)(), T = l.useMemo(() => s.map(e => ({
    label: e.name,
    value: e.id
  })), [s]), S = async () => {
    await u(t, r, x.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS) && (_(t.id), (0, N.openActionCompleteSuccessModal)({
      Icon: C.default,
      title: O.default.Messages.GUILD_MONETIZATION_ENABLE_CONFIRMATION_TITLE,
      body: O.default.Messages.GUILD_MONETIZATION_ENABLE_CONFIRMATION_SUBTITLE
    }))
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: A.selectTeamContainer,
      children: [(0, a.jsx)(i.SingleSelect, {
        className: A.teamSelect,
        options: T,
        placeholder: O.default.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,
        value: r,
        isDisabled: 0 === T.length || I || !n,
        onChange: e => o(e),
        "aria-label": O.default.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER
      }), (0, a.jsx)(i.Button, {
        onClick: S,
        className: A.enableTicketingButton,
        submitting: c,
        disabled: null == r || I || !n,
        children: O.default.Messages.GUILD_MONETIZATION_ENABLE_CTA
      })]
    }), null != E && (0, a.jsx)(i.Text, {
      className: A.error,
      variant: "text-sm/normal",
      children: E.getAnyErrorMessage()
    })]
  })
}
t.default = e => {
  let {
    guild: t
  } = e, s = (0, n.useStateFromStores)([_.default], () => _.default.getCurrentUser()), d = t.isOwner(s), f = (0, o.useIsExpeditedOnboardingGuild)(t), m = (0, n.useStateFromStores)([I.default], () => I.default.isFocused()), {
    teams: N,
    loading: C
  } = (0, E.default)({
    refreshOnDepChange: m
  }), x = l.useMemo(() => N.filter(e => {
    var t;
    return e.payout_account_status !== L.PayoutAccountStatuses.BLOCKED && (0, c.isUserTeamAdministrator)(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : R.EMPTY_STRING_SNOWFLAKE_ID, e)
  }), [N, s]), D = x.length > 0, v = l.useCallback(async () => {
    S.default.track(R.AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
      is_onboarding_v2: f,
      has_eligible_team: D,
      guild_id: t.id,
      is_owner: d
    });
    let e = await (0, u.generateDeveloperPortalLink)(R.RelativeMarketingURLs.DEVELOPER_PORTAL_TEAMS);
    (0, r.default)(e)
  }, [t, d, f, D]), j = l.useCallback(e => d ? (0, a.jsx)(T.default, {
    onClick: v,
    children: e
  }) : e, [v, d]);
  return C ? (0, a.jsx)(i.Spinner, {}) : (0, a.jsxs)(a.Fragment, {
    children: [!d && (0, a.jsx)(g.default, {
      className: A.nonOwnerNotice,
      children: O.default.Messages.GUILD_MONETIZATION_ENABLE_NON_OWNER_WARNING
    }), (0, a.jsxs)(i.FormSection, {
      title: O.default.Messages.GUILD_MONETIZATION_ENABLE_HEADER,
      disabled: !d,
      children: [(0, a.jsx)(i.FormText, {
        type: i.FormText.Types.DESCRIPTION,
        className: A.description,
        disabled: !d,
        children: O.default.Messages.GUILD_MONETIZATION_ENABLE_DESCRIPTION.format({
          onCreateTeamHook: j
        })
      }), D ? (0, a.jsx)(M, {
        guild: t,
        eligibleTeams: x,
        isGuildOwner: d
      }) : (0, a.jsx)(p, {
        onCreateTeamClick: v,
        isGuildOwner: d
      })]
    }), (0, a.jsx)(i.FormSection, {
      title: O.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_TITLE,
      className: A.selfDemonetization,
      children: (0, a.jsx)(h.default, {
        guildId: t.id,
        allPeriods: []
      })
    })]
  })
}