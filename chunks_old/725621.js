"use strict";
s.r(t), s.d(t, {
  getGuildSettingsSections: function() {
    return eV
  },
  default: function() {
    return eK
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("759843"),
  i = s("446674"),
  r = s("151426"),
  o = s("77078"),
  d = s("54239"),
  u = s("800751"),
  c = s("534291"),
  E = s("812204"),
  _ = s("716241"),
  I = s("685665"),
  T = s("412707"),
  S = s("646186"),
  f = s("7331"),
  m = s("736271"),
  N = s("283167"),
  g = s("10641"),
  h = s("298878"),
  C = s("184890"),
  R = s("773372"),
  x = s("348934"),
  L = s("329606"),
  O = s("685829"),
  A = s("863636"),
  p = s("380710"),
  M = s("347895"),
  D = s("233706"),
  v = s("287883"),
  G = s("883206"),
  j = s("808388"),
  U = s("65722"),
  P = s("432153"),
  b = s("922835"),
  B = s("46166"),
  y = s("883069"),
  F = s("569808"),
  H = s("269596"),
  k = s("977169"),
  w = s("161778"),
  V = s("223170"),
  Y = s("478964"),
  W = s("59811"),
  z = s("628624"),
  K = s("923959"),
  Z = s("525065"),
  X = s("957255"),
  Q = s("697218"),
  J = s("228220"),
  q = s("659500"),
  $ = s("199938"),
  ee = s("961394"),
  et = s("592407"),
  es = s("738216"),
  ea = s("692541"),
  el = s("952943"),
  en = s("531493"),
  ei = s("900938"),
  er = s("914581"),
  eo = s("137933"),
  ed = s("397947"),
  eu = s("259483"),
  ec = s("867928"),
  eE = s("648704"),
  e_ = s("887754"),
  eI = s("614840"),
  eT = s("902273"),
  eS = s("721822"),
  ef = s("925538"),
  em = s("631011"),
  eN = s("191329"),
  eg = s("851545"),
  eh = s("527042"),
  eC = s("977887"),
  eR = s("912477"),
  ex = s("969741"),
  eL = s("849823"),
  eO = s("788831"),
  eA = s("201461"),
  ep = s("817674"),
  eM = s("187975"),
  eD = s("473126"),
  ev = s("582372"),
  eG = s("789123"),
  ej = s("78730"),
  eU = s("757120"),
  eP = s("310490"),
  eb = s("49111"),
  eB = s("533613"),
  ey = s("69741"),
  eF = s("782340"),
  eH = s("110206");

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
    isGuildEligibleForRoleSubscriptions: (0, j.isGuildEligibleForRoleSubscriptions)(t.id),
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
    label: (0, a.jsx)(ej.default, {
      showDirtyIndicator: F
    }),
    ariaLabel: eF.default.Messages.GUILD_TEMPLATES,
    element: eG.default,
    notice: {
      stores: [eG.GuildSettingsTemplateMetadataStore],
      element: eG.GuildSettingsTemplateNotice
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
    element: G.default,
    predicate: () => es() && (0, v.isGuildEligibleForGuildProducts)(t.id, "guild_product_settings_predicate") && (0, j.hasEnabledMonetization)(t)
  }, {
    section: eb.GuildSettingsSections.ROLE_SUBSCRIPTIONS_STORE_PAGE,
    impressionName: n.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
    newIndicator: 2022 === new Date().getFullYear(),
    label: eF.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
    ariaLabel: eF.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
    element: B.default,
    predicate: () => es() && (0, j.hasEnabledMonetization)(t)
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
                  } = await s.el("56814").then(s.bind(s, "56814"));
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
        } = await s.el("494078").then(s.bind(s, "494078"));
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
    showAccessRate: G
  } = (0, $.useGuildAccessRateInsightExperiment)(null == s ? void 0 : s.id, !L || !R || !h), j = (0, i.useStateFromStores)([F.default], () => {
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
      showDirtyGuildTemplateIndicator: j,
      analyticsLocation: r,
      memberCount: U,
      isGuildAuditLogV2Enabled: P,
      ...S,
      canViewGuildAnalytics: R,
      showAccessRate: G,
      onboardingStep: b,
      onboardingEnabled: B,
      welcomeScreenEmpty: H,
      guildMetadata: o
    })
  })
}