"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eQ
  },
  getGuildSettingsSections: function() {
    return ez
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
  f = s("593128"),
  m = s("223892"),
  N = s("738774"),
  g = s("296386"),
  h = s("605236"),
  C = s("688465"),
  R = s("826292"),
  x = s("404228"),
  L = s("676317"),
  O = s("874993"),
  A = s("745752"),
  p = s("45966"),
  M = s("637853"),
  D = s("526120"),
  v = s("621923"),
  G = s("352981"),
  j = s("610403"),
  U = s("923726"),
  P = s("144507"),
  b = s("303737"),
  B = s("15030"),
  y = s("220685"),
  F = s("751189"),
  H = s("409059"),
  k = s("810788"),
  w = s("918658"),
  V = s("210887"),
  Y = s("524329"),
  W = s("575258"),
  z = s("995532"),
  K = s("276687"),
  Z = s("984933"),
  X = s("650774"),
  Q = s("496675"),
  J = s("594174"),
  q = s("740727"),
  $ = s("725568"),
  ee = s("585483"),
  et = s("771212"),
  es = s("85001"),
  ea = s("434404"),
  el = s("146596"),
  en = s("559368"),
  ei = s("360606"),
  er = s("946724"),
  eo = s("999382"),
  ed = s("44550"),
  eu = s("853714"),
  ec = s("359191"),
  eE = s("84658"),
  e_ = s("142961"),
  eI = s("730910"),
  eT = s("475013"),
  eS = s("213956"),
  ef = s("702478"),
  em = s("247031"),
  eN = s("787561"),
  eg = s("579648"),
  eh = s("511480"),
  eC = s("460461"),
  eR = s("29605"),
  ex = s("365307"),
  eL = s("497666"),
  eO = s("324330"),
  eA = s("495300"),
  ep = s("312397"),
  eM = s("651780"),
  eD = s("279542"),
  ev = s("413335"),
  eG = s("665324"),
  ej = s("208150"),
  eU = s("353398"),
  eP = s("365774"),
  eb = s("803288"),
  eB = s("804153"),
  ey = s("981631"),
  eF = s("308083"),
  eH = s("190378"),
  ek = s("135899"),
  ew = s("689938"),
  eV = s("354104");

function eY(e) {
  return "" !== e.toString() ? e.toString() : ew.default.Messages.SERVER_SETTINGS
}

function eW(e) {
  let {
    guild: t,
    canManageGuild: l,
    canViewAuditLog: i,
    canViewAuditLogV2: u,
    canManageRoles: E,
    canManageGuildExpressions: _,
    canManageWebhooks: I,
    canManageBans: g,
    canAccessMembersPage: R,
    canViewGuildAnalytics: A,
    isOwner: D,
    isOwnerWithRequiredMfaLevel: F,
    showDirtyGuildTemplateIndicator: H,
    memberCount: w,
    isGuildAuditLogV2Enabled: V,
    showAccessRate: Y,
    onboardingStep: z,
    onboardingEnabled: Z,
    welcomeScreenEmpty: X,
    guildMetadata: Q,
    section: et,
    canAccessClanSettings: el
  } = e, en = () => (0, P.canSeeGuildRoleSubscriptionSettings)({
    guild: t,
    isOwner: D,
    canManageGuildRoleSubscriptions: (0, P.canManageGuildRoleSubscriptions)(t),
    isMonetizationWaitlistEnabledForGuild: (0, m.isMonetizationWaitlistEnabledForGuild)(t.id),
    isGuildEligibleForRoleSubscriptions: (0, U.isGuildEligibleForRoleSubscriptions)(t.id),
    isExpeditedMonetizationOnboardingGuild: (0, m.isExpeditedMonetizationOnboardingGuild)(t),
    isUserInCreatorMonetizationEligibleCountry: (0, m.isUserInCreatorMonetizationEligibleCountry)(),
    shouldRestrictUpdatingRoleSubscriptionSettings: (0, N.shouldRestrictUpdatingCreatorMonetizationSettings)(t.id)
  }), eW = (0, G.isGuildEligibleForGuildProducts)(t.id, "guild_settings"), ez = !1 === t.hasFeature(ey.GuildFeatures.CREATOR_MONETIZABLE) && !1 === t.hasFeature(ey.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL), eK = eW && ez ? {
    label: (0, a.jsx)("div", {
      className: eV.roleSubLabel,
      children: ew.default.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
    }),
    ariaLabel: ew.default.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
  } : {
    label: (0, a.jsx)("div", {
      className: eV.roleSubLabel,
      children: ew.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
    }),
    ariaLabel: ew.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
  };
  return [{
    section: c.SectionTypes.HEADER,
    label: eY(t)
  }, {
    section: ey.GuildSettingsSections.OVERVIEW,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
    label: ew.default.Messages.OVERVIEW,
    ariaLabel: ew.default.Messages.OVERVIEW,
    element: ep.default,
    notice: {
      stores: [eo.default],
      element: ep.GuildSettingsOverviewNotice
    }
  }, {
    section: ey.GuildSettingsSections.ROLES,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_ROLES,
    label: ew.default.Messages.ROLES,
    element: eT.default,
    type: c.ContentTypes.MINIMAL,
    ariaLabel: ew.default.Messages.GUILD_SETTINGS_ROLE_ICON_SIDEBAR_NEW_ARIA_LABEL,
    notice: {
      stores: [er.default],
      element: eT.GuildSettingsRolesNotice
    },
    predicate: () => E
  }, {
    section: ey.GuildSettingsSections.EMOJI,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_EMOJI,
    label: ew.default.Messages.EMOJI,
    element: eR.default,
    predicate: () => _
  }, {
    section: ey.GuildSettingsSections.STICKERS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_STICKERS,
    label: ew.default.Messages.GUILD_SETTINGS_STICKERS,
    ariaLabel: ew.default.Messages.GUILD_SETTINGS_STICKERS,
    element: ej.default,
    predicate: () => _
  }, {
    section: ey.GuildSettingsSections.SOUNDBOARD,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
    label: ew.default.Messages.GUILD_SETTINGS_SOUNDBOARD,
    ariaLabel: ew.default.Messages.GUILD_SETTINGS_SOUNDBOARD,
    element: eG.default,
    predicate: () => _
  }, {
    section: ey.GuildSettingsSections.WIDGET,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_WIDGET,
    label: ew.default.Messages.WIDGET,
    element: eB.default,
    predicate: () => l
  }, {
    section: ey.GuildSettingsSections.GUILD_TEMPLATES,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
    label: (0, a.jsx)(eP.default, {
      showDirtyIndicator: H
    }),
    ariaLabel: ew.default.Messages.GUILD_TEMPLATES,
    element: eU.default,
    notice: {
      stores: [eU.GuildSettingsTemplateMetadataStore],
      element: eU.GuildSettingsTemplateNotice
    },
    predicate: () => l
  }, {
    section: ey.GuildSettingsSections.VANITY_URL,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
    label: ew.default.Messages.VANITY_URL,
    element: eb.default,
    notice: {
      stores: [ed.default],
      element: eb.GuildSettingsVanityURLNotice
    },
    predicate: () => l
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: () => l || I
  }, {
    section: c.SectionTypes.HEADER,
    label: ew.default.Messages.APPS,
    predicate: () => l || I
  }, {
    section: ey.GuildSettingsSections.INTEGRATIONS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
    label: ew.default.Messages.INTEGRATIONS,
    ariaLabel: ew.default.Messages.INTEGRATIONS,
    element: ex.default,
    notice: {
      stores: [ei.default, eo.default],
      element: ex.GuildSettingsIntegrationsNotice
    },
    predicate: () => l || I
  }, {
    section: ey.GuildSettingsSections.APP_DIRECTORY,
    label: ew.default.Messages.APP_DIRECTORY,
    ariaLabel: ew.default.Messages.APP_DIRECTORY,
    onClick() {
      (0, S.goToAppDirectory)({
        guildId: t.id,
        entrypoint: {
          name: T.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
          guildSettingsSection: et
        }
      }), (0, d.popLayer)()
    }
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: () => l
  }, {
    section: c.SectionTypes.HEADER,
    label: ew.default.Messages.MODERATION,
    predicate: () => l
  }, {
    section: ey.GuildSettingsSections.SAFETY,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_SAFETY,
    label: ew.default.Messages.SAFETY_SETUP,
    ariaLabel: ew.default.Messages.SAFETY_SETUP,
    element: eS.default,
    newIndicatorDismissibleContentTypes: [r.DismissibleContent.COMMUNITY_GUILD_SETTINGS_SAFETY],
    predicate: () => l && t.hasFeature(ey.GuildFeatures.COMMUNITY)
  }, {
    section: ey.GuildSettingsSections.MODERATION,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_MODERATION,
    label: ew.default.Messages.SAFETY_SETUP,
    element: eD.default,
    predicate: () => l && !t.hasFeature(ey.GuildFeatures.COMMUNITY)
  }, {
    section: ey.GuildSettingsSections.GUILD_AUTOMOD,
    label: (0, a.jsx)("div", {
      className: eV.landingPageTabLink,
      children: ew.default.Messages.GUILD_SETTINGS_AUTOMOD_TITLE
    }),
    ariaLabel: ew.default.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
    element: O.default,
    newIndicatorDismissibleContentTypes: null,
    predicate: () => !t.hasFeature(ey.GuildFeatures.COMMUNITY) && ((0, L.canCurrentUserManageAutomod)(t.id) || (0, L.canCurrentUserManageMessageFilters)(t.id))
  }, {
    section: ey.GuildSettingsSections.AUDIT_LOG,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
    label: ew.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
    element: eu.default,
    type: c.ContentTypes.CUSTOM,
    predicate: () => i
  }, {
    section: ey.GuildSettingsSections.AUDIT_LOG_V2,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG_V2,
    label: ew.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
    element: x.default,
    type: c.ContentTypes.CUSTOM,
    predicate: () => u && V
  }, {
    section: ey.GuildSettingsSections.BANS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_BANS,
    label: ew.default.Messages.BANS,
    element: em.default,
    predicate: () => g
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: () => l || A
  }, {
    section: c.SectionTypes.HEADER,
    label: ew.default.Messages.COMMUNITY,
    predicate: () => !el && (l || A)
  }, {
    section: ey.GuildSettingsSections.CLAN,
    label: ew.default.Messages.CLAN_SETTINGS,
    ariaLabel: ew.default.Messages.CLAN_SETTINGS,
    onClick() {
      (0, $.openFullScreenLayer)(e => {
        let {
          closeLayer: s
        } = e;
        return (0, a.jsx)(f.default, {
          onClose: s,
          guildId: t.id
        })
      }, {
        layerKey: eF.CLAN_SETTINGS_MODAL_LAYER_KEY
      }), (0, d.popLayer)()
    },
    predicate: () => null != el && el
  }, {
    section: ey.GuildSettingsSections.COMMUNITY,
    impressionName: t.hasFeature(ey.GuildFeatures.COMMUNITY) ? n.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : n.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
    label: t.hasFeature(ey.GuildFeatures.COMMUNITY) ? ew.default.Messages.OVERVIEW : ew.default.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
    element: eN.default,
    ariaLabel: t.hasFeature(ey.GuildFeatures.COMMUNITY) ? ew.default.Messages.OVERVIEW : ew.default.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
    newIndicator: !t.hasFeature(ey.GuildFeatures.COMMUNITY) && null != w && w >= ek.COMMUNITY_UPSELL_MINIMUM_GUILD_SIZE && k.default.hasHotspot(eH.HotspotLocations.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
    notice: {
      stores: [eo.default],
      element: eN.GuildSettingsCommunityOverviewNotice
    },
    predicate: () => l
  }, {
    section: ey.GuildSettingsSections.ONBOARDING,
    label: ew.default.Messages.ONBOARDING,
    element: eA.default,
    ariaLabel: ew.default.Messages.ONBOARDING,
    newIndicatorDismissibleContentTypes: Z ? null : [r.DismissibleContent.COMMUNITY_ONBOARDING_NEW_BADGE],
    notice: {
      stores: [ec.default],
      element: eI.default
    },
    predicate: () => (0, M.isGuildOnboardingSettingsAvailable)(t.id),
    decoration: function(e, t) {
      let {
        homeSettingsEnabled: s
      } = (0, v.getOnboardingHomeAdminExperiment)(e);
      if (p.default.getEnabled(e)) return ew.default.Messages.GUILD_ONBOARDING_ON.toUpperCase();
      if ((0, e_.isOnboardingWizardCompleted)(e)) return ew.default.Messages.GUILD_ONBOARDING_OFF.toUpperCase();
      let a = eE.COMPLETABLE_ONBOARDING_STEPS.filter(e => !!s || e !== eE.GuildSettingsOnboardingPage.HOME_SETTINGS || !1),
        l = a.findIndex(e => e === t);
      if (-1 !== l) return ew.default.Messages.GUILD_ONBOARDING_SETUP_STEP_COUNTER.format({
        count: l + 1,
        total: a.length
      })
    }(t.id, z)
  }, {
    section: ey.GuildSettingsSections.ANALYTICS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
    label: ew.default.Messages.SERVER_INSIGHTS,
    ariaLabel: ew.default.Messages.SERVER_INSIGHTS,
    element: ef.default,
    newIndicator: k.default.hasHotspot(eH.HotspotLocations.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
    newIndicatorDismissibleContentTypes: Y ? [r.DismissibleContent.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
    predicate: () => A && t.hasFeature(ey.GuildFeatures.COMMUNITY)
  }, {
    section: ey.GuildSettingsSections.DISCOVERY,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
    label: ew.default.Messages.DISCOVERY,
    element: eh.default,
    notice: {
      stores: [eo.default],
      element: eh.GuildSettingsDiscoveryNotice
    },
    predicate: () => l && t.hasFeature(ey.GuildFeatures.COMMUNITY),
    ariaLabel: t.hasFeature(ey.GuildFeatures.DISCOVERABLE) ? ew.default.Messages.DISCOVERY : ew.default.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
  }, {
    section: ey.GuildSettingsSections.DISCOVERY_LANDING_PAGE,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
    label: (0, a.jsxs)("div", {
      className: eV.landingPageTabLink,
      children: [ew.default.Messages.DISCOVERY_LANDING_PAGE, " ", (0, a.jsx)(C.default, {})]
    }),
    ariaLabel: ew.default.Messages.DISCOVERY_LANDING_PAGE,
    element: eC.default,
    notice: {
      stores: [eo.default],
      element: eC.GuildSettingsDiscoveryLandingPageNotice
    },
    type: c.ContentTypes.CUSTOM,
    predicate: () => l && (t.hasFeature(ey.GuildFeatures.DISCOVERABLE) || !!(null == Q ? void 0 : Q.isPublished))
  }, {
    section: ey.GuildSettingsSections.COMMUNITY_WELCOME,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
    label: ew.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
    ariaLabel: ew.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
    element: eg.default,
    notice: {
      stores: [W.default],
      element: K.default
    },
    predicate: () => l && t.hasFeature(ey.GuildFeatures.COMMUNITY) && !X && !t.hasFeature(ey.GuildFeatures.GUILD_SERVER_GUIDE)
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: en
  }, {
    section: c.SectionTypes.HEADER,
    label: ew.default.Messages.MONETIZATION,
    predicate: en
  }, {
    ...eK,
    section: ey.GuildSettingsSections.ROLE_SUBSCRIPTIONS,
    element: B.default,
    type: c.ContentTypes.CUSTOM,
    predicate: en,
    newIndicatorDismissibleContentTypes: (0, b.isEligibleForNewBadge)(t) ? [r.DismissibleContent.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
  }, {
    section: ey.GuildSettingsSections.GUILD_PRODUCTS,
    label: ew.default.Messages.GUILD_PRODUCTS_TITLE,
    ariaLabel: ew.default.Messages.GUILD_PRODUCTS_TITLE,
    element: j.default,
    predicate: () => en() && (0, G.isGuildEligibleForGuildProducts)(t.id, "guild_product_settings_predicate") && (0, U.hasEnabledMonetization)(t)
  }, {
    section: ey.GuildSettingsSections.ROLE_SUBSCRIPTIONS_STORE_PAGE,
    impressionName: n.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
    newIndicator: 2022 === new Date().getFullYear(),
    label: ew.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
    ariaLabel: ew.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
    element: y.default,
    predicate: () => en() && (0, U.hasEnabledMonetization)(t)
  }, {
    section: c.SectionTypes.DIVIDER
  }, {
    section: ey.GuildSettingsSections.GUILD_PREMIUM,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
    label: ew.default.Messages.GUILD_PREMIUM,
    ariaLabel: ew.default.Messages.GUILD_PREMIUM,
    element: eM.default,
    className: eV.serverBoostTabItem,
    icon: (0, a.jsx)(ev.default, {
      className: eV.icon
    })
  }, {
    section: c.SectionTypes.DIVIDER
  }, {
    section: c.SectionTypes.HEADER,
    label: ew.default.Messages.USER_MANAGEMENT
  }, {
    section: ey.GuildSettingsSections.MEMBERS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_MEMBERS,
    label: (0, a.jsx)(eO.GuildSettingsMembersRow, {}),
    ariaLabel: ew.default.Messages.MEMBERS,
    element: eO.default,
    type: c.ContentTypes.CUSTOM,
    predicate: () => R
  }, {
    section: ey.GuildSettingsSections.INSTANT_INVITES,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_INVITES,
    label: ew.default.Messages.INVITES,
    element: eL.default,
    type: c.ContentTypes.CUSTOM,
    predicate: () => l
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: () => F
  }, {
    section: ey.GuildSettingsSections.DELETE,
    onClick() {
      let e = J.default.getCurrentUser();
      if (null == e) return;
      let l = t.toString(),
        n = {
          header: ew.default.Messages.DELETE_SERVER_TITLE.format({
            name: l
          }),
          confirmText: ew.default.Messages.DELETE_SERVER,
          cancelText: ew.default.Messages.CANCEL,
          onConfirm: () => {
            ee.ComponentDispatch.subscribeOnce(ey.ComponentActions.LAYER_POP_COMPLETE, () => {
              ea.default.deleteGuild(t.id, l).then(() => {
                if ((0, h.isDismissibleContentDismissed)(r.DismissibleContent.GUILD_DELETE_FEEDBACK)) return;
                es.default.trackExposure({
                  location: "e4be39_1"
                });
                let {
                  showFeedback: e
                } = es.default.getCurrentConfig({
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
          children: ew.default.Messages.DELETE_SERVER_BODY.format({
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
          instructionText: ew.default.Messages.DELETE_SERVER_ENTER_NAME,
          errorText: ew.default.Messages.DELETE_SERVER_INCORRECT_NAME,
          children: ew.default.Messages.DELETE_SERVER_BODY.format({
            name: l
          })
        })
      })
    },
    label: ew.default.Messages.DELETE_SERVER,
    ariaLabel: ew.default.Messages.DELETE_SERVER,
    icon: (0, a.jsx)(q.default, {
      width: 16,
      height: 16
    }),
    predicate: () => F
  }]
}

function ez(e, t) {
  let s = Q.default.getGuildPermissionProps(e);
  return eW({
    channels: t,
    showDirtyGuildTemplateIndicator: !1,
    ...s,
    isGuildAuditLogV2Enabled: !1,
    showAccessRate: !1,
    canAccessClanSettings: s.isGuildAdmin && e.hasFeature(ey.GuildFeatures.CLAN)
  }).filter(e => {
    let {
      section: t
    } = e;
    return t !== c.SectionTypes.HEADER && t !== c.SectionTypes.DIVIDER
  }).filter(e => null == e.predicate || e.predicate())
}

function eK(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    s = arguments.length > 2 ? arguments[2] : void 0;
  _.default.trackWithMetadata(ey.AnalyticEvents.SETTINGS_PANE_VIEWED, {
    settings_type: "guild",
    origin_pane: t,
    destination_pane: e,
    location: s
  })
}
let eZ = {
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
class eX extends l.PureComponent {
  componentDidMount() {
    eK(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    ea.default.close()
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
    s !== t && eK(s, t), (!a && !l && !n && !i && !r && !o && !u && !E && !c || !o && s === ey.GuildSettingsSections.AUDIT_LOG || !u && s === ey.GuildSettingsSections.AUDIT_LOG_V2 || !l && s === ey.GuildSettingsSections.ROLES || !r && s === ey.GuildSettingsSections.EMOJI || !r && s === ey.GuildSettingsSections.STICKERS || !r && s === ey.GuildSettingsSections.SOUNDBOARD || !n && s === ey.GuildSettingsSections.BANS || !_ && s === ey.GuildSettingsSections.ANALYTICS || !E && s === ey.GuildSettingsSections.MEMBERS) && (0, d.popLayer)()
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
      guildMetadata: p,
      canAccessClanSettings: M
    } = this.props;
    if (null == i) return null;
    let D = eW({
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
        section: n,
        canAccessClanSettings: M
      }),
      v = (null === (t = D.find(e => e.section === n)) || void 0 === t ? void 0 : null === (e = t.predicate) || void 0 === e ? void 0 : e.call(t)) !== !1;
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)(u.default, {
        theme: s,
        sidebarTheme: l,
        section: v && null != n ? n : ey.GuildSettingsSections.OVERVIEW,
        onSetSection: ea.default.setSection,
        onClose: d.popLayer,
        title: eY(i),
        sections: D
      }), (0, a.jsx)(w.ViewingRolesSettingsNotice, {
        guildId: i.id
      })]
    })
  }
}

function eQ() {
  var e, t;
  let {
    guild: s,
    section: n,
    analyticsLocation: r,
    guildMetadata: o,
    isGuildMetadataLoaded: d
  } = (0, i.useStateFromStoresObject)([eo.default], () => eo.default.getProps()), {
    analyticsLocations: u
  } = (0, I.default)(E.default.GUILD_SETTINGS), c = (0, i.useStateFromStores)([V.default], () => V.default.theme), _ = (0, i.useStateFromStores)([V.default], () => V.default.darkSidebar ? ey.ThemeTypes.DARK : void 0), T = (0, i.useStateFromStores)([Z.default], () => null != s ? Z.default.getChannels(s.id).SELECTABLE : null, [s]), S = (0, i.useStateFromStoresObject)([Q.default], () => null != s ? Q.default.getGuildPermissionProps(s) : eZ), f = null == s ? void 0 : s.id, m = (0, i.useStateFromStores)([Q.default], () => null != s && Q.default.canAccessGuildSettings(s)), N = null != s && (0, et.staffOnlyGuildSettingsAccess)(s.id), h = N || m, C = N || S.canViewGuildAnalytics, {
    shouldFetchMemberInsights: x,
    hasAccessRate: L
  } = (0, i.useStateFromStoresObject)([en.default], () => ({
    shouldFetchMemberInsights: null != s && en.default.shouldFetchMemberInsights(s.id),
    hasAccessRate: null != s && en.default.getMemberInsights(s.id).hasAccessRate
  }));
  l.useEffect(() => {
    !d && null != f && (0, g.fetchMetadataForGuild)(f)
  }, [d, f]), l.useEffect(() => {
    h && C && x && null != f && (0, el.fetchMemberInsights)(f)
  }, [h, C, x, f]);
  let O = null !== (e = null == s ? void 0 : s.hasFeature(ey.GuildFeatures.COMMUNITY)) && void 0 !== e && e;
  l.useEffect(() => {
    null != f && O && ((0, A.fetchOnboardingPrompts)(f), (0, Y.fetchWelcomeScreen)(f))
  }, [f, O]);
  let {
    homeSettingsEnabled: M
  } = (0, v.useOnboardingHomeAdminExperiment)(null != f ? f : ey.EMPTY_STRING_SNOWFLAKE_ID);
  l.useEffect(() => {
    null != f && M && (0, D.fetchGuildHomeSettings)(f)
  }, [M, f]);
  let {
    showAccessRate: G
  } = (0, et.useGuildAccessRateInsightExperiment)(null == s ? void 0 : s.id, !L || !C || !h), j = S.isGuildAdmin && (null == s ? void 0 : s.hasFeature(ey.GuildFeatures.CLAN)), U = (0, i.useStateFromStores)([H.default], () => {
    var e;
    return (null == s ? void 0 : s.id) != null && (null === (e = H.default.getForGuild(s.id)) || void 0 === e ? void 0 : e.isDirty) === !0
  }, [s]), P = (0, i.useStateFromStores)([X.default], () => X.default.getMemberCount(null == s ? void 0 : s.id), [s]), b = (0, R.useGuildAuditLogV2Enabled)(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : ey.EMPTY_STRING_SNOWFLAKE_ID);
  l.useEffect(() => {
    null != f && S.canManageGuild && F.default.loadTemplatesForGuild(f)
  }, [f, S.canManageGuild]), l.useEffect(() => {
    !h && ea.default.close()
  }, [h]);
  let B = (0, i.useStateFromStores)([ec.default], () => ec.default.getCurrentPage()),
    y = (0, i.useStateFromStores)([p.default], () => null != f && p.default.getEnabled(f)),
    k = (0, i.useStateFromStores)([z.default], () => null != f && z.default.isEmpty(f));
  return (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: u,
    children: (0, a.jsx)(eX, {
      guild: s,
      section: n,
      theme: c,
      sidebarTheme: _,
      channels: T,
      showDirtyGuildTemplateIndicator: U,
      analyticsLocation: r,
      memberCount: P,
      isGuildAuditLogV2Enabled: b,
      ...S,
      canViewGuildAnalytics: C,
      showAccessRate: G,
      onboardingStep: B,
      onboardingEnabled: y,
      welcomeScreenEmpty: k,
      guildMetadata: o,
      canAccessClanSettings: j
    })
  })
}