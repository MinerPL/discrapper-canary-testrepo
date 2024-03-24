"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("446674"),
  i = s("77078"),
  r = s("545158"),
  o = s("7331"),
  d = s("615303"),
  u = s("827159"),
  c = s("963393"),
  E = s("719887"),
  _ = s("697218"),
  I = s("471671"),
  T = s("37785"),
  S = s("599110"),
  f = s("837008"),
  m = s("757715"),
  N = s("352807"),
  g = s("417186"),
  h = s("441901"),
  C = s("341020"),
  R = s("49111"),
  x = s("988268"),
  L = s("810367"),
  O = s("782340"),
  A = s("775261");

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
    let e = await u(t, r, x.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS);
    e && (_(t.id), (0, N.openActionCompleteSuccessModal)({
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
var D = e => {
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
  }, [t, d, f, D]), G = l.useCallback(e => d ? (0, a.jsx)(T.default, {
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
          onCreateTeamHook: G
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