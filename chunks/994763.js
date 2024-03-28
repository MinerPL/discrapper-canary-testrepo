"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eK
  },
  getGuildSettingsSections: function() {
    return eV
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("990547"),
  i = s("442837"),
  r = s("524437"),
  o = s("481060"),
  d = s("37234"),
  u = s("503089"),
  c = s("493544"),
  E = s("100527"),
  _ = s("367907"),
  I = s("906732"),
  T = s("132871"),
  S = s("147890"),
  f = s("223892"),
  m = s("738774"),
  N = s("296386"),
  g = s("605236"),
  h = s("688465"),
  C = s("826292"),
  R = s("404228"),
  x = s("676317"),
  L = s("874993"),
  O = s("745752"),
  A = s("45966"),
  p = s("637853"),
  M = s("526120"),
  D = s("621923"),
  v = s("352981"),
  j = s("610403"),
  G = s("923726"),
  U = s("144507"),
  P = s("303737"),
  b = s("15030"),
  B = s("220685"),
  y = s("751189"),
  F = s("409059"),
  H = s("810788"),
  k = s("918658"),
  w = s("210887"),
  V = s("524329"),
  Y = s("575258"),
  W = s("995532"),
  z = s("276687"),
  K = s("984933"),
  Z = s("650774"),
  X = s("496675"),
  Q = s("594174"),
  J = s("740727"),
  q = s("585483"),
  $ = s("771212"),
  ee = s("85001"),
  et = s("434404"),
  es = s("146596"),
  ea = s("559368"),
  el = s("360606"),
  en = s("946724"),
  ei = s("999382"),
  er = s("44550"),
  eo = s("853714"),
  ed = s("359191"),
  eu = s("84658"),
  ec = s("142961"),
  eE = s("730910"),
  e_ = s("475013"),
  eI = s("213956"),
  eT = s("702478"),
  eS = s("247031"),
  ef = s("787561"),
  em = s("579648"),
  eN = s("511480"),
  eg = s("460461"),
  eh = s("29605"),
  eC = s("365307"),
  eR = s("497666"),
  ex = s("324330"),
  eL = s("495300"),
  eO = s("312397"),
  eA = s("651780"),
  ep = s("279542"),
  eM = s("413335"),
  eD = s("665324"),
  ev = s("208150"),
  ej = s("353398"),
  eG = s("365774"),
  eU = s("803288"),
  eP = s("804153"),
  eb = s("981631"),
  eB = s("190378"),
  ey = s("135899"),
  eF = s("689938"),
  eH = s("694824");

function ek(e) {
  return "" !== e.toString() ? e.toString() : eF.default.Messages.SERVER_SETTINGS
}

function ew(e) {
  let {
    guild: t,
    canManageGuild: l,
    canViewAuditLog: i,
    canViewAuditLogV2: u,
    canManageRoles: E,
    canManageGuildExpressions: _,
    canManageWebhooks: I,
    canManageBans: N,
    canAccessMembersPage: C,
    canViewGuildAnalytics: O,
    isOwner: M,
    isOwnerWithRequiredMfaLevel: y,
    showDirtyGuildTemplateIndicator: F,
    memberCount: k,
    isGuildAuditLogV2Enabled: w,
    showAccessRate: V,
    onboardingStep: W,
    onboardingEnabled: K,
    welcomeScreenEmpty: Z,
    guildMetadata: X,
    section: $
  } = e, es = () => (0, U.canSeeGuildRoleSubscriptionSettings)({
    guild: t,
    isOwner: M,
    canManageGuildRoleSubscriptions: (0, U.canManageGuildRoleSubscriptions)(t),
    isMonetizationWaitlistEnabledForGuild: (0, f.isMonetizationWaitlistEnabledForGuild)(t.id),
    isGuildEligibleForRoleSubscriptions: (0, G.isGuildEligibleForRoleSubscriptions)(t.id),
    isExpeditedMonetizationOnboardingGuild: (0, f.isExpeditedMonetizationOnboardingGuild)(t),
    isUserInCreatorMonetizationEligibleCountry: (0, f.isUserInCreatorMonetizationEligibleCountry)(),
    shouldRestrictUpdatingRoleSubscriptionSettings: (0, m.shouldRestrictUpdatingCreatorMonetizationSettings)(t.id)
  }), ea = (0, v.isGuildEligibleForGuildProducts)(t.id, "guild_settings"), ew = !1 === t.hasFeature(eb.GuildFeatures.CREATOR_MONETIZABLE) && !1 === t.hasFeature(eb.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL), eV = ea && ew ? {
    label: (0, a.jsx)("div", {
      className: eH.roleSubLabel,
      children: eF.default.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
    }),
    ariaLabel: eF.default.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
  } : {
    label: (0, a.jsx)("div", {
      className: eH.roleSubLabel,
      children: eF.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
    }),
    ariaLabel: eF.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
  };
  return [{
    section: c.SectionTypes.HEADER,
    label: ek(t)
  }, {
    section: eb.GuildSettingsSections.OVERVIEW,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
    label: eF.default.Messages.OVERVIEW,
    ariaLabel: eF.default.Messages.OVERVIEW,
    element: eO.default,
    notice: {
      stores: [ei.default],
      element: eO.GuildSettingsOverviewNotice
    }
  }, {
    section: eb.GuildSettingsSections.ROLES,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_ROLES,
    label: eF.default.Messages.ROLES,
    element: e_.default,
    type: c.ContentTypes.MINIMAL,
    ariaLabel: eF.default.Messages.GUILD_SETTINGS_ROLE_ICON_SIDEBAR_NEW_ARIA_LABEL,
    notice: {
      stores: [en.default],
      element: e_.GuildSettingsRolesNotice
    },
    predicate: () => E
  }, {
    section: eb.GuildSettingsSections.EMOJI,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_EMOJI,
    label: eF.default.Messages.EMOJI,
    element: eh.default,
    predicate: () => _
  }, {
    section: eb.GuildSettingsSections.STICKERS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_STICKERS,
    label: eF.default.Messages.GUILD_SETTINGS_STICKERS,
    ariaLabel: eF.default.Messages.GUILD_SETTINGS_STICKERS,
    element: ev.default,
    predicate: () => _
  }, {
    section: eb.GuildSettingsSections.SOUNDBOARD,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
    label: eF.default.Messages.GUILD_SETTINGS_SOUNDBOARD,
    ariaLabel: eF.default.Messages.GUILD_SETTINGS_SOUNDBOARD,
    element: eD.default,
    predicate: () => _
  }, {
    section: eb.GuildSettingsSections.WIDGET,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_WIDGET,
    label: eF.default.Messages.WIDGET,
    element: eP.default,
    predicate: () => l
  }, {
    section: eb.GuildSettingsSections.GUILD_TEMPLATES,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
    label: (0, a.jsx)(eG.default, {
      showDirtyIndicator: F
    }),
    ariaLabel: eF.default.Messages.GUILD_TEMPLATES,
    element: ej.default,
    notice: {
      stores: [ej.GuildSettingsTemplateMetadataStore],
      element: ej.GuildSettingsTemplateNotice
    },
    predicate: () => l
  }, {
    section: eb.GuildSettingsSections.VANITY_URL,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
    label: eF.default.Messages.VANITY_URL,
    element: eU.default,
    notice: {
      stores: [er.default],
      element: eU.GuildSettingsVanityURLNotice
    },
    predicate: () => l
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: () => l || I
  }, {
    section: c.SectionTypes.HEADER,
    label: eF.default.Messages.APPS,
    predicate: () => l || I
  }, {
    section: eb.GuildSettingsSections.INTEGRATIONS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
    label: eF.default.Messages.INTEGRATIONS,
    ariaLabel: eF.default.Messages.INTEGRATIONS,
    element: eC.default,
    notice: {
      stores: [el.default, ei.default],
      element: eC.GuildSettingsIntegrationsNotice
    },
    predicate: () => l || I
  }, {
    section: eb.GuildSettingsSections.APP_DIRECTORY,
    label: eF.default.Messages.APP_DIRECTORY,
    ariaLabel: eF.default.Messages.APP_DIRECTORY,
    onClick() {
      (0, S.goToAppDirectory)({
        guildId: t.id,
        entrypoint: {
          name: T.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
          guildSettingsSection: $
        }
      }), (0, d.popLayer)()
    }
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: () => l
  }, {
    section: c.SectionTypes.HEADER,
    label: eF.default.Messages.MODERATION,
    predicate: () => l
  }, {
    section: eb.GuildSettingsSections.SAFETY,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_SAFETY,
    label: eF.default.Messages.SAFETY_SETUP,
    ariaLabel: eF.default.Messages.SAFETY_SETUP,
    element: eI.default,
    newIndicatorDismissibleContentTypes: [r.DismissibleContent.COMMUNITY_GUILD_SETTINGS_SAFETY],
    predicate: () => l && t.hasFeature(eb.GuildFeatures.COMMUNITY)
  }, {
    section: eb.GuildSettingsSections.MODERATION,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_MODERATION,
    label: eF.default.Messages.SAFETY_SETUP,
    element: ep.default,
    predicate: () => l && !t.hasFeature(eb.GuildFeatures.COMMUNITY)
  }, {
    section: eb.GuildSettingsSections.GUILD_AUTOMOD,
    label: (0, a.jsx)("div", {
      className: eH.landingPageTabLink,
      children: eF.default.Messages.GUILD_SETTINGS_AUTOMOD_TITLE
    }),
    ariaLabel: eF.default.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
    element: L.default,
    newIndicatorDismissibleContentTypes: null,
    predicate: () => !t.hasFeature(eb.GuildFeatures.COMMUNITY) && ((0, x.canCurrentUserManageAutomod)(t.id) || (0, x.canCurrentUserManageMessageFilters)(t.id))
  }, {
    section: eb.GuildSettingsSections.AUDIT_LOG,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
    label: eF.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
    element: eo.default,
    type: c.ContentTypes.CUSTOM,
    predicate: () => i
  }, {
    section: eb.GuildSettingsSections.AUDIT_LOG_V2,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG_V2,
    label: eF.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
    element: R.default,
    type: c.ContentTypes.CUSTOM,
    predicate: () => u && w
  }, {
    section: eb.GuildSettingsSections.BANS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_BANS,
    label: eF.default.Messages.BANS,
    element: eS.default,
    predicate: () => N
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: () => l || O
  }, {
    section: c.SectionTypes.HEADER,
    label: eF.default.Messages.COMMUNITY,
    predicate: () => l || O
  }, {
    section: eb.GuildSettingsSections.COMMUNITY,
    impressionName: t.hasFeature(eb.GuildFeatures.COMMUNITY) ? n.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : n.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
    label: t.hasFeature(eb.GuildFeatures.COMMUNITY) ? eF.default.Messages.OVERVIEW : eF.default.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
    element: ef.default,
    ariaLabel: t.hasFeature(eb.GuildFeatures.COMMUNITY) ? eF.default.Messages.OVERVIEW : eF.default.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
    newIndicator: !t.hasFeature(eb.GuildFeatures.COMMUNITY) && null != k && k >= ey.COMMUNITY_UPSELL_MINIMUM_GUILD_SIZE && H.default.hasHotspot(eB.HotspotLocations.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
    notice: {
      stores: [ei.default],
      element: ef.GuildSettingsCommunityOverviewNotice
    },
    predicate: () => l
  }, {
    section: eb.GuildSettingsSections.ONBOARDING,
    label: eF.default.Messages.ONBOARDING,
    element: eL.default,
    ariaLabel: eF.default.Messages.ONBOARDING,
    newIndicatorDismissibleContentTypes: K ? null : [r.DismissibleContent.COMMUNITY_ONBOARDING_NEW_BADGE],
    notice: {
      stores: [ed.default],
      element: eE.default
    },
    predicate: () => (0, p.isGuildOnboardingSettingsAvailable)(t.id),
    decoration: function(e, t) {
      let {
        homeSettingsEnabled: s
      } = (0, D.getOnboardingHomeAdminExperiment)(e);
      if (A.default.getEnabled(e)) return eF.default.Messages.GUILD_ONBOARDING_ON.toUpperCase();
      if ((0, ec.isOnboardingWizardCompleted)(e)) return eF.default.Messages.GUILD_ONBOARDING_OFF.toUpperCase();
      let a = eu.COMPLETABLE_ONBOARDING_STEPS.filter(e => !!s || e !== eu.GuildSettingsOnboardingPage.HOME_SETTINGS || !1),
        l = a.findIndex(e => e === t);
      if (-1 !== l) return eF.default.Messages.GUILD_ONBOARDING_SETUP_STEP_COUNTER.format({
        count: l + 1,
        total: a.length
      })
    }(t.id, W)
  }, {
    section: eb.GuildSettingsSections.ANALYTICS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
    label: eF.default.Messages.SERVER_INSIGHTS,
    ariaLabel: eF.default.Messages.SERVER_INSIGHTS,
    element: eT.default,
    newIndicator: H.default.hasHotspot(eB.HotspotLocations.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
    newIndicatorDismissibleContentTypes: V ? [r.DismissibleContent.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
    predicate: () => O && t.hasFeature(eb.GuildFeatures.COMMUNITY)
  }, {
    section: eb.GuildSettingsSections.DISCOVERY,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
    label: eF.default.Messages.DISCOVERY,
    element: eN.default,
    notice: {
      stores: [ei.default],
      element: eN.GuildSettingsDiscoveryNotice
    },
    predicate: () => l && t.hasFeature(eb.GuildFeatures.COMMUNITY),
    ariaLabel: t.hasFeature(eb.GuildFeatures.DISCOVERABLE) ? eF.default.Messages.DISCOVERY : eF.default.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
  }, {
    section: eb.GuildSettingsSections.DISCOVERY_LANDING_PAGE,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
    label: (0, a.jsxs)("div", {
      className: eH.landingPageTabLink,
      children: [eF.default.Messages.DISCOVERY_LANDING_PAGE, " ", (0, a.jsx)(h.default, {})]
    }),
    ariaLabel: eF.default.Messages.DISCOVERY_LANDING_PAGE,
    element: eg.default,
    notice: {
      stores: [ei.default],
      element: eg.GuildSettingsDiscoveryLandingPageNotice
    },
    type: c.ContentTypes.CUSTOM,
    predicate: () => l && (t.hasFeature(eb.GuildFeatures.DISCOVERABLE) || !!(null == X ? void 0 : X.isPublished))
  }, {
    section: eb.GuildSettingsSections.COMMUNITY_WELCOME,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
    label: eF.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
    ariaLabel: eF.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
    element: em.default,
    notice: {
      stores: [Y.default],
      element: z.default
    },
    predicate: () => l && t.hasFeature(eb.GuildFeatures.COMMUNITY) && !Z && !t.hasFeature(eb.GuildFeatures.GUILD_SERVER_GUIDE)
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: es
  }, {
    section: c.SectionTypes.HEADER,
    label: eF.default.Messages.MONETIZATION,
    predicate: es
  }, {
    ...eV,
    section: eb.GuildSettingsSections.ROLE_SUBSCRIPTIONS,
    element: b.default,
    type: c.ContentTypes.CUSTOM,
    predicate: es,
    newIndicatorDismissibleContentTypes: (0, P.isEligibleForNewBadge)(t) ? [r.DismissibleContent.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
  }, {
    section: eb.GuildSettingsSections.GUILD_PRODUCTS,
    label: eF.default.Messages.GUILD_PRODUCTS_TITLE,
    ariaLabel: eF.default.Messages.GUILD_PRODUCTS_TITLE,
    element: j.default,
    predicate: () => es() && (0, v.isGuildEligibleForGuildProducts)(t.id, "guild_product_settings_predicate") && (0, G.hasEnabledMonetization)(t)
  }, {
    section: eb.GuildSettingsSections.ROLE_SUBSCRIPTIONS_STORE_PAGE,
    impressionName: n.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
    newIndicator: 2022 === new Date().getFullYear(),
    label: eF.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
    ariaLabel: eF.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
    element: B.default,
    predicate: () => es() && (0, G.hasEnabledMonetization)(t)
  }, {
    section: c.SectionTypes.DIVIDER
  }, {
    section: eb.GuildSettingsSections.GUILD_PREMIUM,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
    label: eF.default.Messages.GUILD_PREMIUM,
    ariaLabel: eF.default.Messages.GUILD_PREMIUM,
    element: eA.default,
    className: eH.serverBoostTabItem,
    icon: (0, a.jsx)(eM.default, {
      className: eH.icon
    })
  }, {
    section: c.SectionTypes.DIVIDER
  }, {
    section: c.SectionTypes.HEADER,
    label: eF.default.Messages.USER_MANAGEMENT
  }, {
    section: eb.GuildSettingsSections.MEMBERS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_MEMBERS,
    label: (0, a.jsx)(ex.GuildSettingsMembersRow, {}),
    ariaLabel: eF.default.Messages.MEMBERS,
    element: ex.default,
    type: c.ContentTypes.CUSTOM,
    predicate: () => C
  }, {
    section: eb.GuildSettingsSections.INSTANT_INVITES,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_INVITES,
    label: eF.default.Messages.INVITES,
    element: eR.default,
    type: c.ContentTypes.CUSTOM,
    predicate: () => l
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: () => y
  }, {
    section: eb.GuildSettingsSections.DELETE,
    onClick() {
      let e = Q.default.getCurrentUser();
      if (null == e) return;
      let l = t.toString(),
        n = {
          header: eF.default.Messages.DELETE_SERVER_TITLE.format({
            name: l
          }),
          confirmText: eF.default.Messages.DELETE_SERVER,
          cancelText: eF.default.Messages.CANCEL,
          onConfirm: () => {
            q.ComponentDispatch.subscribeOnce(eb.ComponentActions.LAYER_POP_COMPLETE, () => {
              et.default.deleteGuild(t.id, l).then(() => {
                if ((0, g.isDismissibleContentDismissed)(r.DismissibleContent.GUILD_DELETE_FEEDBACK)) return;
                ee.default.trackExposure({
                  location: "e4be39_1"
                });
                let {
                  showFeedback: e
                } = ee.default.getCurrentConfig({
                  location: "e4be39_2"
                }, {
                  autoTrackExposure: !1
                });
                e && (0, o.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([s.e("49237"), s.e("99387"), s.e("7685")]).then(s.bind(s, "945903"));
                  return s => (0, a.jsx)(e, {
                    ...s,
                    guildId: t.id
                  })
                })
              })
            }), (0, d.popLayer)()
          }
        };
      e.mfaEnabled ? (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
        ...e,
        ...n,
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: eF.default.Messages.DELETE_SERVER_BODY.format({
            name: l
          })
        })
      })) : (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("18259")]).then(s.bind(s, "1493"));
        return t => (0, a.jsx)(e, {
          ...t,
          ...n,
          validationText: l,
          instructionText: eF.default.Messages.DELETE_SERVER_ENTER_NAME,
          errorText: eF.default.Messages.DELETE_SERVER_INCORRECT_NAME,
          children: eF.default.Messages.DELETE_SERVER_BODY.format({
            name: l
          })
        })
      })
    },
    label: eF.default.Messages.DELETE_SERVER,
    ariaLabel: eF.default.Messages.DELETE_SERVER,
    icon: (0, a.jsx)(J.default, {
      width: 16,
      height: 16
    }),
    predicate: () => y
  }]
}

function eV(e, t) {
  return ew({
    channels: t,
    showDirtyGuildTemplateIndicator: !1,
    ...X.default.getGuildPermissionProps(e),
    isGuildAuditLogV2Enabled: !1,
    showAccessRate: !1
  }).filter(e => {
    let {
      section: t
    } = e;
    return t !== c.SectionTypes.HEADER && t !== c.SectionTypes.DIVIDER
  }).filter(e => null == e.predicate || e.predicate())
}

function eY(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    s = arguments.length > 2 ? arguments[2] : void 0;
  _.default.trackWithMetadata(eb.AnalyticEvents.SETTINGS_PANE_VIEWED, {
    settings_type: "guild",
    origin_pane: t,
    destination_pane: e,
    location: s
  })
}
let eW = {
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
  isOwnerWithRequiredMfaLevel: !1
};
class ez extends l.PureComponent {
  componentDidMount() {
    eY(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    et.default.close()
  }
  componentDidUpdate(e) {
    let {
      section: t
    } = e, {
      section: s,
      canManageGuild: a,
      canManageRoles: l,
      canManageBans: n,
      canManageNicknames: i,
      canManageGuildExpressions: r,
      canViewAuditLog: o,
      canViewAuditLogV2: u,
      canManageWebhooks: c,
      canAccessMembersPage: E,
      canViewGuildAnalytics: _
    } = this.props;
    s !== t && eY(s, t), (!a && !l && !n && !i && !r && !o && !u && !E && !c || !o && s === eb.GuildSettingsSections.AUDIT_LOG || !u && s === eb.GuildSettingsSections.AUDIT_LOG_V2 || !l && s === eb.GuildSettingsSections.ROLES || !r && s === eb.GuildSettingsSections.EMOJI || !r && s === eb.GuildSettingsSections.STICKERS || !r && s === eb.GuildSettingsSections.SOUNDBOARD || !n && s === eb.GuildSettingsSections.BANS || !_ && s === eb.GuildSettingsSections.ANALYTICS || !E && s === eb.GuildSettingsSections.MEMBERS) && (0, d.popLayer)()
  }
  render() {
    var e, t;
    let {
      theme: s,
      sidebarTheme: l,
      section: n,
      guild: i,
      channels: r,
      canManageGuild: o,
      canViewAuditLog: c,
      canViewAuditLogV2: E,
      canManageRoles: _,
      canManageGuildExpressions: I,
      canManageWebhooks: T,
      canManageBans: S,
      canAccessMembersPage: f,
      canViewGuildAnalytics: m,
      isOwner: N,
      isOwnerWithRequiredMfaLevel: g,
      showDirtyGuildTemplateIndicator: h,
      memberCount: C,
      isGuildAuditLogV2Enabled: R,
      showAccessRate: x,
      onboardingStep: L,
      onboardingEnabled: O,
      welcomeScreenEmpty: A,
      guildMetadata: p
    } = this.props;
    if (null == i) return null;
    let M = ew({
        guild: i,
        channels: r,
        canManageGuild: o,
        canViewAuditLog: c,
        canViewAuditLogV2: E,
        canManageRoles: _,
        canManageGuildExpressions: I,
        canManageWebhooks: T,
        canManageBans: S,
        canAccessMembersPage: f,
        canViewGuildAnalytics: m,
        isOwner: N,
        isOwnerWithRequiredMfaLevel: g,
        showDirtyGuildTemplateIndicator: h,
        memberCount: C,
        isGuildAuditLogV2Enabled: R,
        showAccessRate: x,
        onboardingStep: L,
        onboardingEnabled: O,
        welcomeScreenEmpty: A,
        guildMetadata: p,
        section: n
      }),
      D = (null === (t = M.find(e => e.section === n)) || void 0 === t ? void 0 : null === (e = t.predicate) || void 0 === e ? void 0 : e.call(t)) !== !1;
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)(u.default, {
        theme: s,
        sidebarTheme: l,
        section: D && null != n ? n : eb.GuildSettingsSections.OVERVIEW,
        onSetSection: et.default.setSection,
        onClose: d.popLayer,
        title: ek(i),
        sections: M
      }), (0, a.jsx)(k.ViewingRolesSettingsNotice, {
        guildId: i.id
      })]
    })
  }
}

function eK() {
  var e, t;
  let {
    guild: s,
    section: n,
    analyticsLocation: r,
    guildMetadata: o,
    isGuildMetadataLoaded: d
  } = (0, i.useStateFromStoresObject)([ei.default], () => ei.default.getProps()), {
    analyticsLocations: u
  } = (0, I.default)(E.default.GUILD_SETTINGS), c = (0, i.useStateFromStores)([w.default], () => w.default.theme), _ = (0, i.useStateFromStores)([w.default], () => w.default.darkSidebar ? eb.ThemeTypes.DARK : void 0), T = (0, i.useStateFromStores)([K.default], () => null != s ? K.default.getChannels(s.id).SELECTABLE : null, [s]), S = (0, i.useStateFromStoresObject)([X.default], () => null != s ? X.default.getGuildPermissionProps(s) : eW), f = null == s ? void 0 : s.id, m = (0, i.useStateFromStores)([X.default], () => null != s && X.default.canAccessGuildSettings(s)), g = null != s && (0, $.staffOnlyGuildSettingsAccess)(s.id), h = g || m, R = g || S.canViewGuildAnalytics, {
    shouldFetchMemberInsights: x,
    hasAccessRate: L
  } = (0, i.useStateFromStoresObject)([ea.default], () => ({
    shouldFetchMemberInsights: null != s && ea.default.shouldFetchMemberInsights(s.id),
    hasAccessRate: null != s && ea.default.getMemberInsights(s.id).hasAccessRate
  }));
  l.useEffect(() => {
    !d && null != f && (0, N.fetchMetadataForGuild)(f)
  }, [d, f]), l.useEffect(() => {
    h && R && x && null != f && (0, es.fetchMemberInsights)(f)
  }, [h, R, x, f]);
  let p = null !== (e = null == s ? void 0 : s.hasFeature(eb.GuildFeatures.COMMUNITY)) && void 0 !== e && e;
  l.useEffect(() => {
    null != f && p && ((0, O.fetchOnboardingPrompts)(f), (0, V.fetchWelcomeScreen)(f))
  }, [f, p]);
  let {
    homeSettingsEnabled: v
  } = (0, D.useOnboardingHomeAdminExperiment)(null != f ? f : eb.EMPTY_STRING_SNOWFLAKE_ID);
  l.useEffect(() => {
    null != f && v && (0, M.fetchGuildHomeSettings)(f)
  }, [v, f]);
  let {
    showAccessRate: j
  } = (0, $.useGuildAccessRateInsightExperiment)(null == s ? void 0 : s.id, !L || !R || !h), G = (0, i.useStateFromStores)([F.default], () => {
    var e;
    return (null == s ? void 0 : s.id) != null && (null === (e = F.default.getForGuild(s.id)) || void 0 === e ? void 0 : e.isDirty) === !0
  }, [s]), U = (0, i.useStateFromStores)([Z.default], () => Z.default.getMemberCount(null == s ? void 0 : s.id), [s]), P = (0, C.useGuildAuditLogV2Enabled)(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : eb.EMPTY_STRING_SNOWFLAKE_ID);
  l.useEffect(() => {
    null != f && S.canManageGuild && y.default.loadTemplatesForGuild(f)
  }, [f, S.canManageGuild]), l.useEffect(() => {
    !h && et.default.close()
  }, [h]);
  let b = (0, i.useStateFromStores)([ed.default], () => ed.default.getCurrentPage()),
    B = (0, i.useStateFromStores)([A.default], () => null != f && A.default.getEnabled(f)),
    H = (0, i.useStateFromStores)([W.default], () => null != f && W.default.isEmpty(f));
  return (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: u,
    children: (0, a.jsx)(ez, {
      guild: s,
      section: n,
      theme: c,
      sidebarTheme: _,
      channels: T,
      showDirtyGuildTemplateIndicator: G,
      analyticsLocation: r,
      memberCount: U,
      isGuildAuditLogV2Enabled: P,
      ...S,
      canViewGuildAnalytics: R,
      showAccessRate: j,
      onboardingStep: b,
      onboardingEnabled: B,
      welcomeScreenEmpty: H,
      guildMetadata: o
    })
  })
}