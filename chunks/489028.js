"use strict";
t(47120);
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(481060),
  r = t(782568),
  o = t(223892),
  c = t(203498),
  d = t(641806),
  u = t(30624),
  E = t(577275),
  _ = t(594174),
  I = t(451478),
  T = t(499150),
  N = t(626135),
  m = t(584825),
  S = t(723047),
  h = t(416867),
  g = t(903773),
  x = t(215124),
  C = t(326578),
  R = t(981631),
  L = t(674563),
  O = t(829857),
  A = t(689938),
  p = t(378934);

function M(e) {
  let {
    onCreateTeamClick: s,
    isGuildOwner: t
  } = e;
  return (0, n.jsx)("div", {
    className: p.selectTeamContainer,
    children: (0, n.jsx)(a.Button, {
      disabled: !t,
      onClick: s,
      className: p.enableTicketingButton,
      fullWidth: !0,
      children: A.Z.Messages.GUILD_MONETIZATION_ENABLE_CREATE_TEAM
    })
  })
}

function f(e) {
  let {
    guild: s,
    eligibleTeams: t,
    isGuildOwner: l
  } = e, [r, o] = i.useState(), {
    enableGuildMonetizationForTeam: d,
    submitting: u,
    error: E
  } = (0, c.Z)(), {
    fetchSubscriptionsSettings: _
  } = (0, m.JH)(), I = (0, S.mY)(), T = i.useMemo(() => t.map(e => ({
    label: e.name,
    value: e.id
  })), [t]), N = async () => {
    await d(s, r, L.wW.GUILD_ROLE_SUBSCRIPTIONS) && (_(s.id), (0, h.B)({
      Icon: C.Z,
      title: A.Z.Messages.GUILD_MONETIZATION_ENABLE_CONFIRMATION_TITLE,
      body: A.Z.Messages.GUILD_MONETIZATION_ENABLE_CONFIRMATION_SUBTITLE
    }))
  };
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: p.selectTeamContainer,
      children: [(0, n.jsx)(a.SingleSelect, {
        className: p.teamSelect,
        options: T,
        placeholder: A.Z.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,
        value: r,
        isDisabled: 0 === T.length || I || !l,
        onChange: e => o(e),
        "aria-label": A.Z.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER
      }), (0, n.jsx)(a.Button, {
        onClick: N,
        className: p.enableTicketingButton,
        submitting: u,
        disabled: null == r || I || !l,
        children: A.Z.Messages.GUILD_MONETIZATION_ENABLE_CTA
      })]
    }), null != E && (0, n.jsx)(a.Text, {
      className: p.error,
      variant: "text-sm/normal",
      children: E.getAnyErrorMessage()
    })]
  })
}
s.Z = e => {
  let {
    guild: s
  } = e, t = (0, l.e7)([_.default], () => _.default.getCurrentUser()), c = s.isOwner(t), m = (0, o.Ob)(s), S = (0, l.e7)([I.Z], () => I.Z.isFocused()), {
    teams: h,
    loading: C
  } = (0, E.Z)({
    refreshOnDepChange: S
  }), L = i.useMemo(() => h.filter(e => {
    var s;
    return e.payout_account_status !== O.C.BLOCKED && (0, u.Z)(null !== (s = null == t ? void 0 : t.id) && void 0 !== s ? s : R.lds, e)
  }), [h, t]), v = L.length > 0, D = i.useCallback(async () => {
    N.default.track(R.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
      is_onboarding_v2: m,
      has_eligible_team: v,
      guild_id: s.id,
      is_owner: c
    });
    let e = await (0, d.$)(R.E07.DEVELOPER_PORTAL_TEAMS);
    (0, r.Z)(e)
  }, [s, c, m, v]), Z = i.useCallback(e => c ? (0, n.jsx)(T.Z, {
    onClick: D,
    children: e
  }) : e, [D, c]);
  return C ? (0, n.jsx)(a.Spinner, {}) : (0, n.jsxs)(n.Fragment, {
    children: [!c && (0, n.jsx)(g.Z, {
      className: p.nonOwnerNotice,
      children: A.Z.Messages.GUILD_MONETIZATION_ENABLE_NON_OWNER_WARNING
    }), (0, n.jsxs)(a.FormSection, {
      title: A.Z.Messages.GUILD_MONETIZATION_ENABLE_HEADER,
      disabled: !c,
      children: [(0, n.jsx)(a.FormText, {
        type: a.FormText.Types.DESCRIPTION,
        className: p.description,
        disabled: !c,
        children: A.Z.Messages.GUILD_MONETIZATION_ENABLE_DESCRIPTION.format({
          onCreateTeamHook: Z
        })
      }), v ? (0, n.jsx)(f, {
        guild: s,
        eligibleTeams: L,
        isGuildOwner: c
      }) : (0, n.jsx)(M, {
        onCreateTeamClick: D,
        isGuildOwner: c
      })]
    }), (0, n.jsx)(a.FormSection, {
      title: A.Z.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_TITLE,
      className: p.selfDemonetization,
      children: (0, n.jsx)(x.Z, {
        guildId: s.id,
        allPeriods: []
      })
    })]
  })
}