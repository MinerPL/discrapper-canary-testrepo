"use strict";
t.r(s), t.d(s, {
  default: function() {
    return eJ
  },
  getGuildSettingsSections: function() {
    return ez
  }
});
var n = t(735250),
  i = t(470079),
  l = t(990547),
  a = t(442837),
  r = t(704215),
  o = t(481060),
  c = t(37234),
  d = t(503089),
  u = t(493544),
  E = t(100527),
  _ = t(367907),
  I = t(906732),
  T = t(132871),
  N = t(147890),
  m = t(353093),
  S = t(593128),
  h = t(979264),
  g = t(223892),
  x = t(738774),
  C = t(296386),
  R = t(605236),
  L = t(688465),
  O = t(826292),
  A = t(404228),
  p = t(676317),
  M = t(874993),
  f = t(745752),
  v = t(45966),
  D = t(637853),
  Z = t(526120),
  j = t(621923),
  U = t(352981),
  G = t(610403),
  P = t(923726),
  b = t(144507),
  B = t(303737),
  y = t(15030),
  F = t(220685),
  w = t(751189),
  k = t(409059),
  H = t(810788),
  V = t(918658),
  Y = t(210887),
  W = t(524329),
  K = t(575258),
  z = t(995532),
  q = t(276687),
  X = t(984933),
  Q = t(650774),
  J = t(496675),
  $ = t(594174),
  ee = t(740727),
  es = t(725568),
  et = t(585483),
  en = t(771212),
  ei = t(85001),
  el = t(434404),
  ea = t(146596),
  er = t(559368),
  eo = t(360606),
  ec = t(946724),
  ed = t(999382),
  eu = t(44550),
  eE = t(853714),
  e_ = t(359191),
  eI = t(84658),
  eT = t(142961),
  eN = t(730910),
  em = t(475013),
  eS = t(213956),
  eh = t(702478),
  eg = t(247031),
  ex = t(787561),
  eC = t(579648),
  eR = t(511480),
  eL = t(460461),
  eO = t(29605),
  eA = t(365307),
  ep = t(497666),
  eM = t(324330),
  ef = t(495300),
  ev = t(312397),
  eD = t(651780),
  eZ = t(279542),
  ej = t(413335),
  eU = t(665324),
  eG = t(208150),
  eP = t(353398),
  eb = t(365774),
  eB = t(803288),
  ey = t(804153),
  eF = t(981631),
  ew = t(308083),
  ek = t(190378),
  eH = t(135899),
  eV = t(689938),
  eY = t(37869);

function eW(e) {
  return "" !== e.toString() ? e.toString() : eV.Z.Messages.SERVER_SETTINGS
}

function eK(e) {
  var s;
  let {
    guild: i,
    canManageGuild: a,
    canViewAuditLog: d,
    canViewAuditLogV2: E,
    canManageRoles: _,
    canManageGuildExpressions: I,
    canManageWebhooks: C,
    canManageBans: O,
    canAccessMembersPage: f,
    canViewGuildAnalytics: Z,
    isOwner: w,
    isOwnerWithRequiredMfaLevel: k,
    showDirtyGuildTemplateIndicator: V,
    memberCount: Y,
    isGuildAuditLogV2Enabled: W,
    showAccessRate: z,
    onboardingStep: X,
    onboardingEnabled: Q,
    welcomeScreenEmpty: J,
    guildMetadata: en,
    section: ea,
    canAccessClanSettings: er
  } = e, eK = () => (0, b.X$)({
    guild: i,
    isOwner: w,
    canManageGuildRoleSubscriptions: (0, b.H2)(i),
    isMonetizationWaitlistEnabledForGuild: (0, g.mG)(i.id),
    isGuildEligibleForRoleSubscriptions: (0, P.kT)(i.id),
    isExpeditedMonetizationOnboardingGuild: (0, g.Rw)(i),
    isUserInCreatorMonetizationEligibleCountry: (0, g.DB)(),
    shouldRestrictUpdatingRoleSubscriptionSettings: (0, x.cu)(i.id)
  }), ez = (0, U.p)(i.id, "guild_settings"), eq = !1 === i.hasFeature(eF.oNc.CREATOR_MONETIZABLE) && !1 === i.hasFeature(eF.oNc.CREATOR_MONETIZABLE_PROVISIONAL), eX = ez && eq ? {
    label: (0, n.jsx)("div", {
      className: eY.roleSubLabel,
      children: eV.Z.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
    }),
    ariaLabel: eV.Z.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
  } : {
    label: (0, n.jsx)("div", {
      className: eY.roleSubLabel,
      children: eV.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
    }),
    ariaLabel: eV.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
  }, eQ = (null === (s = i.clan) || void 0 === s ? void 0 : s.badge) != null ? (0, m.ky)(i.id, i.clan.badge, ew.NC.SIZE_16) : null;
  return [{
    section: u.ID.HEADER,
    label: eW(i)
  }, {
    section: eF.pNK.OVERVIEW,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
    label: eV.Z.Messages.OVERVIEW,
    ariaLabel: eV.Z.Messages.OVERVIEW,
    element: ev.Z,
    notice: {
      stores: [ed.Z],
      element: ev.O
    }
  }, {
    section: eF.pNK.ROLES,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_ROLES,
    label: eV.Z.Messages.ROLES,
    element: em.Z,
    type: u.bT.MINIMAL,
    ariaLabel: eV.Z.Messages.GUILD_SETTINGS_ROLE_ICON_SIDEBAR_NEW_ARIA_LABEL,
    notice: {
      stores: [ec.Z],
      element: em._
    },
    predicate: () => _
  }, {
    section: eF.pNK.EMOJI,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_EMOJI,
    label: eV.Z.Messages.EMOJI,
    element: eO.ZP,
    predicate: () => I
  }, {
    section: eF.pNK.STICKERS,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_STICKERS,
    label: eV.Z.Messages.GUILD_SETTINGS_STICKERS,
    ariaLabel: eV.Z.Messages.GUILD_SETTINGS_STICKERS,
    element: eG.Z,
    predicate: () => I
  }, {
    section: eF.pNK.SOUNDBOARD,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
    label: eV.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
    ariaLabel: eV.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
    element: eU.Z,
    predicate: () => I
  }, {
    section: eF.pNK.WIDGET,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_WIDGET,
    label: eV.Z.Messages.WIDGET,
    element: ey.Z,
    predicate: () => a
  }, {
    section: eF.pNK.GUILD_TEMPLATES,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
    label: (0, n.jsx)(eb.Z, {
      showDirtyIndicator: V
    }),
    ariaLabel: eV.Z.Messages.GUILD_TEMPLATES,
    element: eP.ZP,
    notice: {
      stores: [eP.Sf],
      element: eP.Q5
    },
    predicate: () => a
  }, {
    section: eF.pNK.VANITY_URL,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
    label: eV.Z.Messages.VANITY_URL,
    element: eB.Z,
    notice: {
      stores: [eu.Z],
      element: eB.T
    },
    predicate: () => a
  }, {
    section: u.ID.DIVIDER,
    predicate: () => a || C
  }, {
    section: u.ID.HEADER,
    label: eV.Z.Messages.APPS,
    predicate: () => a || C
  }, {
    section: eF.pNK.INTEGRATIONS,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
    label: eV.Z.Messages.INTEGRATIONS,
    ariaLabel: eV.Z.Messages.INTEGRATIONS,
    element: eA.Z,
    notice: {
      stores: [eo.Z, ed.Z],
      element: eA.j
    },
    predicate: () => a || C
  }, {
    section: eF.pNK.APP_DIRECTORY,
    label: eV.Z.Messages.APP_DIRECTORY,
    ariaLabel: eV.Z.Messages.APP_DIRECTORY,
    onClick() {
      (0, N.goToAppDirectory)({
        guildId: i.id,
        entrypoint: {
          name: T.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
          guildSettingsSection: ea
        }
      }), (0, c.xf)()
    }
  }, {
    section: u.ID.DIVIDER,
    predicate: () => a
  }, {
    section: u.ID.HEADER,
    label: eV.Z.Messages.MODERATION,
    predicate: () => a
  }, {
    section: eF.pNK.SAFETY,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_SAFETY,
    label: eV.Z.Messages.SAFETY_SETUP,
    ariaLabel: eV.Z.Messages.SAFETY_SETUP,
    element: eS.Z,
    newIndicatorDismissibleContentTypes: [r.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
    predicate: () => a && i.hasFeature(eF.oNc.COMMUNITY)
  }, {
    section: eF.pNK.MODERATION,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_MODERATION,
    label: eV.Z.Messages.SAFETY_SETUP,
    element: eZ.ZP,
    predicate: () => a && !i.hasFeature(eF.oNc.COMMUNITY)
  }, {
    section: eF.pNK.GUILD_AUTOMOD,
    label: (0, n.jsx)("div", {
      className: eY.landingPageTabLink,
      children: eV.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE
    }),
    ariaLabel: eV.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
    element: M.Z,
    newIndicatorDismissibleContentTypes: null,
    predicate: () => !i.hasFeature(eF.oNc.COMMUNITY) && ((0, p.Nb)(i.id) || (0, p.ze)(i.id))
  }, {
    section: eF.pNK.AUDIT_LOG,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
    label: eV.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
    element: eE.Z,
    type: u.bT.CUSTOM,
    predicate: () => d
  }, {
    section: eF.pNK.AUDIT_LOG_V2,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG_V2,
    label: eV.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
    element: A.Z,
    type: u.bT.CUSTOM,
    predicate: () => E && W
  }, {
    section: eF.pNK.BANS,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_BANS,
    label: eV.Z.Messages.BANS,
    element: eg.Z,
    predicate: () => O
  }, {
    section: u.ID.DIVIDER,
    predicate: () => a || Z
  }, {
    section: u.ID.HEADER,
    label: eV.Z.Messages.COMMUNITY,
    predicate: () => !er && (a || Z)
  }, {
    section: eF.pNK.CLAN,
    label: eV.Z.Messages.CLAN_SETTINGS,
    ariaLabel: eV.Z.Messages.CLAN_SETTINGS,
    onClick() {
      (0, es.q4)(e => {
        let {
          closeLayer: s
        } = e;
        return (0, n.jsx)(S.Z, {
          onClose: s,
          guildId: i.id
        })
      }, {
        layerKey: ew.q2
      }), (0, c.xf)()
    },
    predicate: () => null != er && er,
    icon: null != eQ ? (0, n.jsx)(h.KQ, {
      src: eQ
    }) : null
  }, {
    section: eF.pNK.COMMUNITY,
    impressionName: i.hasFeature(eF.oNc.COMMUNITY) ? l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : l.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
    label: i.hasFeature(eF.oNc.COMMUNITY) ? eV.Z.Messages.OVERVIEW : eV.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
    element: ex.Z,
    ariaLabel: i.hasFeature(eF.oNc.COMMUNITY) ? eV.Z.Messages.OVERVIEW : eV.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
    newIndicator: !i.hasFeature(eF.oNc.COMMUNITY) && null != Y && Y >= eH.U3 && H.Z.hasHotspot(ek.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
    notice: {
      stores: [ed.Z],
      element: ex.X
    },
    predicate: () => a
  }, {
    section: eF.pNK.ONBOARDING,
    label: eV.Z.Messages.ONBOARDING,
    element: ef.Z,
    ariaLabel: eV.Z.Messages.ONBOARDING,
    newIndicatorDismissibleContentTypes: Q ? null : [r.z.COMMUNITY_ONBOARDING_NEW_BADGE],
    notice: {
      stores: [e_.Z],
      element: eN.Z
    },
    predicate: () => (0, D.wC)(i.id),
    decoration: function(e, s) {
      let {
        homeSettingsEnabled: t
      } = (0, j.l6)(e);
      if (v.Z.getEnabled(e)) return eV.Z.Messages.GUILD_ONBOARDING_ON.toUpperCase();
      if ((0, eT.C)(e)) return eV.Z.Messages.GUILD_ONBOARDING_OFF.toUpperCase();
      let n = eI.ug.filter(e => !!t || e !== eI.PG.HOME_SETTINGS || !1),
        i = n.findIndex(e => e === s);
      if (-1 !== i) return eV.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_COUNTER.format({
        count: i + 1,
        total: n.length
      })
    }(i.id, X)
  }, {
    section: eF.pNK.ANALYTICS,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
    label: eV.Z.Messages.SERVER_INSIGHTS,
    ariaLabel: eV.Z.Messages.SERVER_INSIGHTS,
    element: eh.Z,
    newIndicator: H.Z.hasHotspot(ek.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
    newIndicatorDismissibleContentTypes: z ? [r.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
    predicate: () => Z && i.hasFeature(eF.oNc.COMMUNITY)
  }, {
    section: eF.pNK.DISCOVERY,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
    label: eV.Z.Messages.DISCOVERY,
    element: eR.Z,
    notice: {
      stores: [ed.Z],
      element: eR.s
    },
    predicate: () => a && i.hasFeature(eF.oNc.COMMUNITY),
    ariaLabel: i.hasFeature(eF.oNc.DISCOVERABLE) ? eV.Z.Messages.DISCOVERY : eV.Z.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
  }, {
    section: eF.pNK.DISCOVERY_LANDING_PAGE,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
    label: (0, n.jsxs)("div", {
      className: eY.landingPageTabLink,
      children: [eV.Z.Messages.DISCOVERY_LANDING_PAGE, " ", (0, n.jsx)(L.Z, {})]
    }),
    ariaLabel: eV.Z.Messages.DISCOVERY_LANDING_PAGE,
    element: eL.Z,
    notice: {
      stores: [ed.Z],
      element: eL.J
    },
    type: u.bT.CUSTOM,
    predicate: () => a && (i.hasFeature(eF.oNc.DISCOVERABLE) || !!(null == en ? void 0 : en.isPublished))
  }, {
    section: eF.pNK.COMMUNITY_WELCOME,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
    label: eV.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
    ariaLabel: eV.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
    element: eC.Z,
    notice: {
      stores: [K.Z],
      element: q.Z
    },
    predicate: () => a && i.hasFeature(eF.oNc.COMMUNITY) && !J && !i.hasFeature(eF.oNc.GUILD_SERVER_GUIDE)
  }, {
    section: u.ID.DIVIDER,
    predicate: eK
  }, {
    section: u.ID.HEADER,
    label: eV.Z.Messages.MONETIZATION,
    predicate: eK
  }, {
    ...eX,
    section: eF.pNK.ROLE_SUBSCRIPTIONS,
    element: y.Z,
    type: u.bT.CUSTOM,
    predicate: eK,
    newIndicatorDismissibleContentTypes: (0, B.sO)(i) ? [r.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
  }, {
    section: eF.pNK.GUILD_PRODUCTS,
    label: eV.Z.Messages.GUILD_PRODUCTS_TITLE,
    ariaLabel: eV.Z.Messages.GUILD_PRODUCTS_TITLE,
    element: G.Z,
    predicate: () => eK() && (0, U.p)(i.id, "guild_product_settings_predicate") && (0, P.sy)(i)
  }, {
    section: eF.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
    impressionName: l.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
    newIndicator: 2022 === new Date().getFullYear(),
    label: eV.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
    ariaLabel: eV.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
    element: F.Z,
    predicate: () => eK() && (0, P.sy)(i)
  }, {
    section: u.ID.DIVIDER
  }, {
    section: eF.pNK.GUILD_PREMIUM,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
    label: eV.Z.Messages.GUILD_PREMIUM,
    ariaLabel: eV.Z.Messages.GUILD_PREMIUM,
    element: eD.Z,
    className: eY.serverBoostTabItem,
    icon: (0, n.jsx)(ej.Z, {
      className: eY.icon
    })
  }, {
    section: u.ID.DIVIDER
  }, {
    section: u.ID.HEADER,
    label: eV.Z.Messages.USER_MANAGEMENT
  }, {
    section: eF.pNK.MEMBERS,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_MEMBERS,
    label: (0, n.jsx)(eM.$, {}),
    ariaLabel: eV.Z.Messages.MEMBERS,
    element: eM.Z,
    type: u.bT.CUSTOM,
    predicate: () => f
  }, {
    section: eF.pNK.INSTANT_INVITES,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_INVITES,
    label: eV.Z.Messages.INVITES,
    element: ep.Z,
    type: u.bT.CUSTOM,
    predicate: () => a
  }, {
    section: u.ID.DIVIDER,
    predicate: () => k
  }, {
    section: eF.pNK.DELETE,
    onClick() {
      let e = $.default.getCurrentUser();
      if (null == e) return;
      let s = i.toString(),
        l = {
          header: eV.Z.Messages.DELETE_SERVER_TITLE.format({
            name: s
          }),
          confirmText: eV.Z.Messages.DELETE_SERVER,
          cancelText: eV.Z.Messages.CANCEL,
          onConfirm: () => {
            et.S.subscribeOnce(eF.CkL.LAYER_POP_COMPLETE, () => {
              el.Z.deleteGuild(i.id, s).then(() => {
                if ((0, R.un)(r.z.GUILD_DELETE_FEEDBACK)) return;
                ei.Z.trackExposure({
                  location: "e4be39_1"
                });
                let {
                  showFeedback: e
                } = ei.Z.getCurrentConfig({
                  location: "e4be39_2"
                }, {
                  autoTrackExposure: !1
                });
                e && (0, o.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([t.e("49237"), t.e("99387"), t.e("7685")]).then(t.bind(t, 945903));
                  return s => (0, n.jsx)(e, {
                    ...s,
                    guildId: i.id
                  })
                })
              })
            }), (0, c.xf)()
          }
        };
      e.mfaEnabled ? (0, o.openModal)(e => (0, n.jsx)(o.ConfirmModal, {
        ...e,
        ...l,
        children: (0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          children: eV.Z.Messages.DELETE_SERVER_BODY.format({
            name: s
          })
        })
      })) : (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("18259")]).then(t.bind(t, 1493));
        return t => (0, n.jsx)(e, {
          ...t,
          ...l,
          validationText: s,
          instructionText: eV.Z.Messages.DELETE_SERVER_ENTER_NAME,
          errorText: eV.Z.Messages.DELETE_SERVER_INCORRECT_NAME,
          children: eV.Z.Messages.DELETE_SERVER_BODY.format({
            name: s
          })
        })
      })
    },
    label: eV.Z.Messages.DELETE_SERVER,
    ariaLabel: eV.Z.Messages.DELETE_SERVER,
    icon: (0, n.jsx)(ee.Z, {
      width: 16,
      height: 16
    }),
    predicate: () => k
  }]
}

function ez(e, s) {
  let t = J.Z.getGuildPermissionProps(e);
  return eK({
    channels: s,
    showDirtyGuildTemplateIndicator: !1,
    ...t,
    isGuildAuditLogV2Enabled: !1,
    showAccessRate: !1,
    canAccessClanSettings: t.isGuildAdmin && e.hasFeature(eF.oNc.CLAN)
  }).filter(e => {
    let {
      section: s
    } = e;
    return s !== u.ID.HEADER && s !== u.ID.DIVIDER
  }).filter(e => null == e.predicate || e.predicate())
}

function eq(e) {
  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    t = arguments.length > 2 ? arguments[2] : void 0;
  _.ZP.trackWithMetadata(eF.rMx.SETTINGS_PANE_VIEWED, {
    settings_type: "guild",
    origin_pane: s,
    destination_pane: e,
    location: t
  })
}
let eX = {
  canManageGuild: !1,
  canManageChannels: !1,
  canManageRoles: !1,
  canManageBans: !1,
  canManageNicknames: !1,
  canManageGuildExpressions: !1,
  canViewAuditLog: !1,
  canViewAuditLogV2: !1,
  canManageWebhooks: !1,
  canAccessMembersPage: !1,
  canViewGuildAnalytics: !1,
  isOwner: !1,
  isOwnerWithRequiredMfaLevel: !1,
  isGuildAdmin: !1
};
class eQ extends i.PureComponent {
  componentDidMount() {
    eq(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    el.Z.close()
  }
  componentDidUpdate(e) {
    let {
      section: s
    } = e, {
      section: t,
      canManageGuild: n,
      canManageRoles: i,
      canManageBans: l,
      canManageNicknames: a,
      canManageGuildExpressions: r,
      canViewAuditLog: o,
      canViewAuditLogV2: d,
      canManageWebhooks: u,
      canAccessMembersPage: E,
      canViewGuildAnalytics: _
    } = this.props;
    t !== s && eq(t, s), (!n && !i && !l && !a && !r && !o && !d && !E && !u || !o && t === eF.pNK.AUDIT_LOG || !d && t === eF.pNK.AUDIT_LOG_V2 || !i && t === eF.pNK.ROLES || !r && t === eF.pNK.EMOJI || !r && t === eF.pNK.STICKERS || !r && t === eF.pNK.SOUNDBOARD || !l && t === eF.pNK.BANS || !_ && t === eF.pNK.ANALYTICS || !E && t === eF.pNK.MEMBERS) && (0, c.xf)()
  }
  render() {
    var e, s;
    let {
      theme: t,
      sidebarTheme: i,
      section: l,
      guild: a,
      channels: r,
      canManageGuild: o,
      canViewAuditLog: u,
      canViewAuditLogV2: E,
      canManageRoles: _,
      canManageGuildExpressions: I,
      canManageWebhooks: T,
      canManageBans: N,
      canAccessMembersPage: m,
      canViewGuildAnalytics: S,
      isOwner: h,
      isOwnerWithRequiredMfaLevel: g,
      showDirtyGuildTemplateIndicator: x,
      memberCount: C,
      isGuildAuditLogV2Enabled: R,
      showAccessRate: L,
      onboardingStep: O,
      onboardingEnabled: A,
      welcomeScreenEmpty: p,
      guildMetadata: M,
      canAccessClanSettings: f
    } = this.props;
    if (null == a) return null;
    let v = eK({
        guild: a,
        channels: r,
        canManageGuild: o,
        canViewAuditLog: u,
        canViewAuditLogV2: E,
        canManageRoles: _,
        canManageGuildExpressions: I,
        canManageWebhooks: T,
        canManageBans: N,
        canAccessMembersPage: m,
        canViewGuildAnalytics: S,
        isOwner: h,
        isOwnerWithRequiredMfaLevel: g,
        showDirtyGuildTemplateIndicator: x,
        memberCount: C,
        isGuildAuditLogV2Enabled: R,
        showAccessRate: L,
        onboardingStep: O,
        onboardingEnabled: A,
        welcomeScreenEmpty: p,
        guildMetadata: M,
        section: l,
        canAccessClanSettings: f
      }),
      D = (null === (s = v.find(e => e.section === l)) || void 0 === s ? void 0 : null === (e = s.predicate) || void 0 === e ? void 0 : e.call(s)) !== !1;
    return (0, n.jsxs)("div", {
      children: [(0, n.jsx)(d.ZP, {
        theme: t,
        sidebarTheme: i,
        section: D && null != l ? l : eF.pNK.OVERVIEW,
        onSetSection: el.Z.setSection,
        onClose: c.xf,
        title: eW(a),
        sections: v
      }), (0, n.jsx)(V.d, {
        guildId: a.id
      })]
    })
  }
}

function eJ() {
  var e, s;
  let {
    guild: t,
    section: l,
    analyticsLocation: r,
    guildMetadata: o,
    isGuildMetadataLoaded: c
  } = (0, a.cj)([ed.Z], () => ed.Z.getProps()), {
    analyticsLocations: d
  } = (0, I.ZP)(E.Z.GUILD_SETTINGS), u = (0, a.e7)([Y.Z], () => Y.Z.theme), _ = (0, a.e7)([Y.Z], () => Y.Z.darkSidebar ? eF.BRd.DARK : void 0), T = (0, a.e7)([X.ZP], () => null != t ? X.ZP.getChannels(t.id).SELECTABLE : null, [t]), N = (0, a.cj)([J.Z], () => null != t ? J.Z.getGuildPermissionProps(t) : eX), m = null == t ? void 0 : t.id, S = (0, a.e7)([J.Z], () => null != t && J.Z.canAccessGuildSettings(t)), h = null != t && (0, en.Fv)(t.id), g = h || S, x = h || N.canViewGuildAnalytics, {
    shouldFetchMemberInsights: R,
    hasAccessRate: L
  } = (0, a.cj)([er.Z], () => ({
    shouldFetchMemberInsights: null != t && er.Z.shouldFetchMemberInsights(t.id),
    hasAccessRate: null != t && er.Z.getMemberInsights(t.id).hasAccessRate
  }));
  i.useEffect(() => {
    !c && null != m && (0, C.aC)(m)
  }, [c, m]), i.useEffect(() => {
    g && x && R && null != m && (0, ea.r2)(m)
  }, [g, x, R, m]);
  let A = null !== (e = null == t ? void 0 : t.hasFeature(eF.oNc.COMMUNITY)) && void 0 !== e && e;
  i.useEffect(() => {
    null != m && A && ((0, f.eM)(m), (0, W.RM)(m))
  }, [m, A]);
  let {
    homeSettingsEnabled: p
  } = (0, j.kZ)(null != m ? m : eF.lds);
  i.useEffect(() => {
    null != m && p && (0, Z.cP)(m)
  }, [p, m]);
  let {
    showAccessRate: M
  } = (0, en.eA)(null == t ? void 0 : t.id, !L || !x || !g), D = N.isGuildAdmin && (null == t ? void 0 : t.hasFeature(eF.oNc.CLAN)), U = (0, a.e7)([k.Z], () => {
    var e;
    return (null == t ? void 0 : t.id) != null && (null === (e = k.Z.getForGuild(t.id)) || void 0 === e ? void 0 : e.isDirty) === !0
  }, [t]), G = (0, a.e7)([Q.Z], () => Q.Z.getMemberCount(null == t ? void 0 : t.id), [t]), P = (0, O.pU)(null !== (s = null == t ? void 0 : t.id) && void 0 !== s ? s : eF.lds);
  i.useEffect(() => {
    null != m && N.canManageGuild && w.Z.loadTemplatesForGuild(m)
  }, [m, N.canManageGuild]), i.useEffect(() => {
    !g && el.Z.close()
  }, [g]);
  let b = (0, a.e7)([e_.Z], () => e_.Z.getCurrentPage()),
    B = (0, a.e7)([v.Z], () => null != m && v.Z.getEnabled(m)),
    y = (0, a.e7)([z.Z], () => null != m && z.Z.isEmpty(m));
  return (0, n.jsx)(I.Gt, {
    value: d,
    children: (0, n.jsx)(eQ, {
      guild: t,
      section: l,
      theme: u,
      sidebarTheme: _,
      channels: T,
      showDirtyGuildTemplateIndicator: U,
      analyticsLocation: r,
      memberCount: G,
      isGuildAuditLogV2Enabled: P,
      ...N,
      canViewGuildAnalytics: x,
      showAccessRate: M,
      onboardingStep: b,
      onboardingEnabled: B,
      welcomeScreenEmpty: y,
      guildMetadata: o,
      canAccessClanSettings: D
    })
  })
}