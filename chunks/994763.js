"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eq
  },
  getGuildSettingsSections: function() {
    return eZ
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
  f = s("353093"),
  m = s("593128"),
  N = s("979264"),
  g = s("223892"),
  h = s("738774"),
  C = s("296386"),
  R = s("605236"),
  x = s("688465"),
  L = s("826292"),
  O = s("404228"),
  A = s("676317"),
  p = s("874993"),
  M = s("745752"),
  D = s("45966"),
  v = s("637853"),
  G = s("526120"),
  j = s("621923"),
  U = s("352981"),
  P = s("610403"),
  b = s("923726"),
  B = s("144507"),
  y = s("303737"),
  F = s("15030"),
  H = s("220685"),
  k = s("751189"),
  w = s("409059"),
  V = s("810788"),
  Y = s("918658"),
  W = s("210887"),
  z = s("524329"),
  K = s("575258"),
  Z = s("995532"),
  X = s("276687"),
  Q = s("984933"),
  J = s("650774"),
  q = s("496675"),
  $ = s("594174"),
  ee = s("740727"),
  et = s("725568"),
  es = s("585483"),
  ea = s("771212"),
  el = s("85001"),
  en = s("434404"),
  ei = s("146596"),
  er = s("559368"),
  eo = s("360606"),
  ed = s("946724"),
  eu = s("999382"),
  ec = s("44550"),
  eE = s("853714"),
  e_ = s("359191"),
  eI = s("84658"),
  eT = s("142961"),
  eS = s("730910"),
  ef = s("475013"),
  em = s("213956"),
  eN = s("702478"),
  eg = s("247031"),
  eh = s("787561"),
  eC = s("579648"),
  eR = s("511480"),
  ex = s("460461"),
  eL = s("29605"),
  eO = s("365307"),
  eA = s("497666"),
  ep = s("324330"),
  eM = s("495300"),
  eD = s("312397"),
  ev = s("651780"),
  eG = s("279542"),
  ej = s("413335"),
  eU = s("665324"),
  eP = s("208150"),
  eb = s("353398"),
  eB = s("365774"),
  ey = s("803288"),
  eF = s("804153"),
  eH = s("981631"),
  ek = s("308083"),
  ew = s("190378"),
  eV = s("135899"),
  eY = s("689938"),
  eW = s("37869");

function ez(e) {
  return "" !== e.toString() ? e.toString() : eY.default.Messages.SERVER_SETTINGS
}

function eK(e) {
  var t;
  let {
    guild: l,
    canManageGuild: i,
    canViewAuditLog: u,
    canViewAuditLogV2: E,
    canManageRoles: _,
    canManageGuildExpressions: I,
    canManageWebhooks: C,
    canManageBans: L,
    canAccessMembersPage: M,
    canViewGuildAnalytics: G,
    isOwner: k,
    isOwnerWithRequiredMfaLevel: w,
    showDirtyGuildTemplateIndicator: Y,
    memberCount: W,
    isGuildAuditLogV2Enabled: z,
    showAccessRate: Z,
    onboardingStep: Q,
    onboardingEnabled: J,
    welcomeScreenEmpty: q,
    guildMetadata: ea,
    section: ei,
    canAccessClanSettings: er
  } = e, eK = () => (0, B.canSeeGuildRoleSubscriptionSettings)({
    guild: l,
    isOwner: k,
    canManageGuildRoleSubscriptions: (0, B.canManageGuildRoleSubscriptions)(l),
    isMonetizationWaitlistEnabledForGuild: (0, g.isMonetizationWaitlistEnabledForGuild)(l.id),
    isGuildEligibleForRoleSubscriptions: (0, b.isGuildEligibleForRoleSubscriptions)(l.id),
    isExpeditedMonetizationOnboardingGuild: (0, g.isExpeditedMonetizationOnboardingGuild)(l),
    isUserInCreatorMonetizationEligibleCountry: (0, g.isUserInCreatorMonetizationEligibleCountry)(),
    shouldRestrictUpdatingRoleSubscriptionSettings: (0, h.shouldRestrictUpdatingCreatorMonetizationSettings)(l.id)
  }), eZ = (0, U.isGuildEligibleForGuildProducts)(l.id, "guild_settings"), eX = !1 === l.hasFeature(eH.GuildFeatures.CREATOR_MONETIZABLE) && !1 === l.hasFeature(eH.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL), eQ = eZ && eX ? {
    label: (0, a.jsx)("div", {
      className: eW.roleSubLabel,
      children: eY.default.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
    }),
    ariaLabel: eY.default.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
  } : {
    label: (0, a.jsx)("div", {
      className: eW.roleSubLabel,
      children: eY.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
    }),
    ariaLabel: eY.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
  }, eJ = (null === (t = l.clan) || void 0 === t ? void 0 : t.badge) != null ? (0, f.getClanBadgeUrl)(l.id, l.clan.badge, ek.ClanTagBadgeSize.SIZE_16) : null;
  return [{
    section: c.SectionTypes.HEADER,
    label: ez(l)
  }, {
    section: eH.GuildSettingsSections.OVERVIEW,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
    label: eY.default.Messages.OVERVIEW,
    ariaLabel: eY.default.Messages.OVERVIEW,
    element: eD.default,
    notice: {
      stores: [eu.default],
      element: eD.GuildSettingsOverviewNotice
    }
  }, {
    section: eH.GuildSettingsSections.ROLES,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_ROLES,
    label: eY.default.Messages.ROLES,
    element: ef.default,
    type: c.ContentTypes.MINIMAL,
    ariaLabel: eY.default.Messages.GUILD_SETTINGS_ROLE_ICON_SIDEBAR_NEW_ARIA_LABEL,
    notice: {
      stores: [ed.default],
      element: ef.GuildSettingsRolesNotice
    },
    predicate: () => _
  }, {
    section: eH.GuildSettingsSections.EMOJI,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_EMOJI,
    label: eY.default.Messages.EMOJI,
    element: eL.default,
    predicate: () => I
  }, {
    section: eH.GuildSettingsSections.STICKERS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_STICKERS,
    label: eY.default.Messages.GUILD_SETTINGS_STICKERS,
    ariaLabel: eY.default.Messages.GUILD_SETTINGS_STICKERS,
    element: eP.default,
    predicate: () => I
  }, {
    section: eH.GuildSettingsSections.SOUNDBOARD,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
    label: eY.default.Messages.GUILD_SETTINGS_SOUNDBOARD,
    ariaLabel: eY.default.Messages.GUILD_SETTINGS_SOUNDBOARD,
    element: eU.default,
    predicate: () => I
  }, {
    section: eH.GuildSettingsSections.WIDGET,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_WIDGET,
    label: eY.default.Messages.WIDGET,
    element: eF.default,
    predicate: () => i
  }, {
    section: eH.GuildSettingsSections.GUILD_TEMPLATES,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
    label: (0, a.jsx)(eB.default, {
      showDirtyIndicator: Y
    }),
    ariaLabel: eY.default.Messages.GUILD_TEMPLATES,
    element: eb.default,
    notice: {
      stores: [eb.GuildSettingsTemplateMetadataStore],
      element: eb.GuildSettingsTemplateNotice
    },
    predicate: () => i
  }, {
    section: eH.GuildSettingsSections.VANITY_URL,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
    label: eY.default.Messages.VANITY_URL,
    element: ey.default,
    notice: {
      stores: [ec.default],
      element: ey.GuildSettingsVanityURLNotice
    },
    predicate: () => i
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: () => i || C
  }, {
    section: c.SectionTypes.HEADER,
    label: eY.default.Messages.APPS,
    predicate: () => i || C
  }, {
    section: eH.GuildSettingsSections.INTEGRATIONS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
    label: eY.default.Messages.INTEGRATIONS,
    ariaLabel: eY.default.Messages.INTEGRATIONS,
    element: eO.default,
    notice: {
      stores: [eo.default, eu.default],
      element: eO.GuildSettingsIntegrationsNotice
    },
    predicate: () => i || C
  }, {
    section: eH.GuildSettingsSections.APP_DIRECTORY,
    label: eY.default.Messages.APP_DIRECTORY,
    ariaLabel: eY.default.Messages.APP_DIRECTORY,
    onClick() {
      (0, S.goToAppDirectory)({
        guildId: l.id,
        entrypoint: {
          name: T.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
          guildSettingsSection: ei
        }
      }), (0, d.popLayer)()
    }
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: () => i
  }, {
    section: c.SectionTypes.HEADER,
    label: eY.default.Messages.MODERATION,
    predicate: () => i
  }, {
    section: eH.GuildSettingsSections.SAFETY,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_SAFETY,
    label: eY.default.Messages.SAFETY_SETUP,
    ariaLabel: eY.default.Messages.SAFETY_SETUP,
    element: em.default,
    newIndicatorDismissibleContentTypes: [r.DismissibleContent.COMMUNITY_GUILD_SETTINGS_SAFETY],
    predicate: () => i && l.hasFeature(eH.GuildFeatures.COMMUNITY)
  }, {
    section: eH.GuildSettingsSections.MODERATION,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_MODERATION,
    label: eY.default.Messages.SAFETY_SETUP,
    element: eG.default,
    predicate: () => i && !l.hasFeature(eH.GuildFeatures.COMMUNITY)
  }, {
    section: eH.GuildSettingsSections.GUILD_AUTOMOD,
    label: (0, a.jsx)("div", {
      className: eW.landingPageTabLink,
      children: eY.default.Messages.GUILD_SETTINGS_AUTOMOD_TITLE
    }),
    ariaLabel: eY.default.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
    element: p.default,
    newIndicatorDismissibleContentTypes: null,
    predicate: () => !l.hasFeature(eH.GuildFeatures.COMMUNITY) && ((0, A.canCurrentUserManageAutomod)(l.id) || (0, A.canCurrentUserManageMessageFilters)(l.id))
  }, {
    section: eH.GuildSettingsSections.AUDIT_LOG,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
    label: eY.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
    element: eE.default,
    type: c.ContentTypes.CUSTOM,
    predicate: () => u
  }, {
    section: eH.GuildSettingsSections.AUDIT_LOG_V2,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG_V2,
    label: eY.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
    element: O.default,
    type: c.ContentTypes.CUSTOM,
    predicate: () => E && z
  }, {
    section: eH.GuildSettingsSections.BANS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_BANS,
    label: eY.default.Messages.BANS,
    element: eg.default,
    predicate: () => L
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: () => i || G
  }, {
    section: c.SectionTypes.HEADER,
    label: eY.default.Messages.COMMUNITY,
    predicate: () => !er && (i || G)
  }, {
    section: eH.GuildSettingsSections.CLAN,
    label: eY.default.Messages.CLAN_SETTINGS,
    ariaLabel: eY.default.Messages.CLAN_SETTINGS,
    onClick() {
      (0, et.openFullScreenLayer)(e => {
        let {
          closeLayer: t
        } = e;
        return (0, a.jsx)(m.default, {
          onClose: t,
          guildId: l.id
        })
      }, {
        layerKey: ek.CLAN_SETTINGS_MODAL_LAYER_KEY
      }), (0, d.popLayer)()
    },
    predicate: () => null != er && er,
    icon: null != eJ ? (0, a.jsx)(N.ClanTagBadge, {
      src: eJ
    }) : null
  }, {
    section: eH.GuildSettingsSections.COMMUNITY,
    impressionName: l.hasFeature(eH.GuildFeatures.COMMUNITY) ? n.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : n.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
    label: l.hasFeature(eH.GuildFeatures.COMMUNITY) ? eY.default.Messages.OVERVIEW : eY.default.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
    element: eh.default,
    ariaLabel: l.hasFeature(eH.GuildFeatures.COMMUNITY) ? eY.default.Messages.OVERVIEW : eY.default.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
    newIndicator: !l.hasFeature(eH.GuildFeatures.COMMUNITY) && null != W && W >= eV.COMMUNITY_UPSELL_MINIMUM_GUILD_SIZE && V.default.hasHotspot(ew.HotspotLocations.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
    notice: {
      stores: [eu.default],
      element: eh.GuildSettingsCommunityOverviewNotice
    },
    predicate: () => i
  }, {
    section: eH.GuildSettingsSections.ONBOARDING,
    label: eY.default.Messages.ONBOARDING,
    element: eM.default,
    ariaLabel: eY.default.Messages.ONBOARDING,
    newIndicatorDismissibleContentTypes: J ? null : [r.DismissibleContent.COMMUNITY_ONBOARDING_NEW_BADGE],
    notice: {
      stores: [e_.default],
      element: eS.default
    },
    predicate: () => (0, v.isGuildOnboardingSettingsAvailable)(l.id),
    decoration: function(e, t) {
      let {
        homeSettingsEnabled: s
      } = (0, j.getOnboardingHomeAdminExperiment)(e);
      if (D.default.getEnabled(e)) return eY.default.Messages.GUILD_ONBOARDING_ON.toUpperCase();
      if ((0, eT.isOnboardingWizardCompleted)(e)) return eY.default.Messages.GUILD_ONBOARDING_OFF.toUpperCase();
      let a = eI.COMPLETABLE_ONBOARDING_STEPS.filter(e => !!s || e !== eI.GuildSettingsOnboardingPage.HOME_SETTINGS || !1),
        l = a.findIndex(e => e === t);
      if (-1 !== l) return eY.default.Messages.GUILD_ONBOARDING_SETUP_STEP_COUNTER.format({
        count: l + 1,
        total: a.length
      })
    }(l.id, Q)
  }, {
    section: eH.GuildSettingsSections.ANALYTICS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
    label: eY.default.Messages.SERVER_INSIGHTS,
    ariaLabel: eY.default.Messages.SERVER_INSIGHTS,
    element: eN.default,
    newIndicator: V.default.hasHotspot(ew.HotspotLocations.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
    newIndicatorDismissibleContentTypes: Z ? [r.DismissibleContent.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
    predicate: () => G && l.hasFeature(eH.GuildFeatures.COMMUNITY)
  }, {
    section: eH.GuildSettingsSections.DISCOVERY,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
    label: eY.default.Messages.DISCOVERY,
    element: eR.default,
    notice: {
      stores: [eu.default],
      element: eR.GuildSettingsDiscoveryNotice
    },
    predicate: () => i && l.hasFeature(eH.GuildFeatures.COMMUNITY),
    ariaLabel: l.hasFeature(eH.GuildFeatures.DISCOVERABLE) ? eY.default.Messages.DISCOVERY : eY.default.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
  }, {
    section: eH.GuildSettingsSections.DISCOVERY_LANDING_PAGE,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
    label: (0, a.jsxs)("div", {
      className: eW.landingPageTabLink,
      children: [eY.default.Messages.DISCOVERY_LANDING_PAGE, " ", (0, a.jsx)(x.default, {})]
    }),
    ariaLabel: eY.default.Messages.DISCOVERY_LANDING_PAGE,
    element: ex.default,
    notice: {
      stores: [eu.default],
      element: ex.GuildSettingsDiscoveryLandingPageNotice
    },
    type: c.ContentTypes.CUSTOM,
    predicate: () => i && (l.hasFeature(eH.GuildFeatures.DISCOVERABLE) || !!(null == ea ? void 0 : ea.isPublished))
  }, {
    section: eH.GuildSettingsSections.COMMUNITY_WELCOME,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
    label: eY.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
    ariaLabel: eY.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
    element: eC.default,
    notice: {
      stores: [K.default],
      element: X.default
    },
    predicate: () => i && l.hasFeature(eH.GuildFeatures.COMMUNITY) && !q && !l.hasFeature(eH.GuildFeatures.GUILD_SERVER_GUIDE)
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: eK
  }, {
    section: c.SectionTypes.HEADER,
    label: eY.default.Messages.MONETIZATION,
    predicate: eK
  }, {
    ...eQ,
    section: eH.GuildSettingsSections.ROLE_SUBSCRIPTIONS,
    element: F.default,
    type: c.ContentTypes.CUSTOM,
    predicate: eK,
    newIndicatorDismissibleContentTypes: (0, y.isEligibleForNewBadge)(l) ? [r.DismissibleContent.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
  }, {
    section: eH.GuildSettingsSections.GUILD_PRODUCTS,
    label: eY.default.Messages.GUILD_PRODUCTS_TITLE,
    ariaLabel: eY.default.Messages.GUILD_PRODUCTS_TITLE,
    element: P.default,
    predicate: () => eK() && (0, U.isGuildEligibleForGuildProducts)(l.id, "guild_product_settings_predicate") && (0, b.hasEnabledMonetization)(l)
  }, {
    section: eH.GuildSettingsSections.ROLE_SUBSCRIPTIONS_STORE_PAGE,
    impressionName: n.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
    newIndicator: 2022 === new Date().getFullYear(),
    label: eY.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
    ariaLabel: eY.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
    element: H.default,
    predicate: () => eK() && (0, b.hasEnabledMonetization)(l)
  }, {
    section: c.SectionTypes.DIVIDER
  }, {
    section: eH.GuildSettingsSections.GUILD_PREMIUM,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
    label: eY.default.Messages.GUILD_PREMIUM,
    ariaLabel: eY.default.Messages.GUILD_PREMIUM,
    element: ev.default,
    className: eW.serverBoostTabItem,
    icon: (0, a.jsx)(ej.default, {
      className: eW.icon
    })
  }, {
    section: c.SectionTypes.DIVIDER
  }, {
    section: c.SectionTypes.HEADER,
    label: eY.default.Messages.USER_MANAGEMENT
  }, {
    section: eH.GuildSettingsSections.MEMBERS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_MEMBERS,
    label: (0, a.jsx)(ep.GuildSettingsMembersRow, {}),
    ariaLabel: eY.default.Messages.MEMBERS,
    element: ep.default,
    type: c.ContentTypes.CUSTOM,
    predicate: () => M
  }, {
    section: eH.GuildSettingsSections.INSTANT_INVITES,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_INVITES,
    label: eY.default.Messages.INVITES,
    element: eA.default,
    type: c.ContentTypes.CUSTOM,
    predicate: () => i
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: () => w
  }, {
    section: eH.GuildSettingsSections.DELETE,
    onClick() {
      let e = $.default.getCurrentUser();
      if (null == e) return;
      let t = l.toString(),
        n = {
          header: eY.default.Messages.DELETE_SERVER_TITLE.format({
            name: t
          }),
          confirmText: eY.default.Messages.DELETE_SERVER,
          cancelText: eY.default.Messages.CANCEL,
          onConfirm: () => {
            es.ComponentDispatch.subscribeOnce(eH.ComponentActions.LAYER_POP_COMPLETE, () => {
              en.default.deleteGuild(l.id, t).then(() => {
                if ((0, R.isDismissibleContentDismissed)(r.DismissibleContent.GUILD_DELETE_FEEDBACK)) return;
                el.default.trackExposure({
                  location: "e4be39_1"
                });
                let {
                  showFeedback: e
                } = el.default.getCurrentConfig({
                  location: "e4be39_2"
                }, {
                  autoTrackExposure: !1
                });
                e && (0, o.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([s.e("49237"), s.e("99387"), s.e("7685")]).then(s.bind(s, "945903"));
                  return t => (0, a.jsx)(e, {
                    ...t,
                    guildId: l.id
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
          children: eY.default.Messages.DELETE_SERVER_BODY.format({
            name: t
          })
        })
      })) : (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("18259")]).then(s.bind(s, "1493"));
        return s => (0, a.jsx)(e, {
          ...s,
          ...n,
          validationText: t,
          instructionText: eY.default.Messages.DELETE_SERVER_ENTER_NAME,
          errorText: eY.default.Messages.DELETE_SERVER_INCORRECT_NAME,
          children: eY.default.Messages.DELETE_SERVER_BODY.format({
            name: t
          })
        })
      })
    },
    label: eY.default.Messages.DELETE_SERVER,
    ariaLabel: eY.default.Messages.DELETE_SERVER,
    icon: (0, a.jsx)(ee.default, {
      width: 16,
      height: 16
    }),
    predicate: () => w
  }]
}

function eZ(e, t) {
  let s = q.default.getGuildPermissionProps(e);
  return eK({
    channels: t,
    showDirtyGuildTemplateIndicator: !1,
    ...s,
    isGuildAuditLogV2Enabled: !1,
    showAccessRate: !1,
    canAccessClanSettings: s.isGuildAdmin && e.hasFeature(eH.GuildFeatures.CLAN)
  }).filter(e => {
    let {
      section: t
    } = e;
    return t !== c.SectionTypes.HEADER && t !== c.SectionTypes.DIVIDER
  }).filter(e => null == e.predicate || e.predicate())
}

function eX(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    s = arguments.length > 2 ? arguments[2] : void 0;
  _.default.trackWithMetadata(eH.AnalyticEvents.SETTINGS_PANE_VIEWED, {
    settings_type: "guild",
    origin_pane: t,
    destination_pane: e,
    location: s
  })
}
let eQ = {
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
class eJ extends l.PureComponent {
  componentDidMount() {
    eX(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    en.default.close()
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
    s !== t && eX(s, t), (!a && !l && !n && !i && !r && !o && !u && !E && !c || !o && s === eH.GuildSettingsSections.AUDIT_LOG || !u && s === eH.GuildSettingsSections.AUDIT_LOG_V2 || !l && s === eH.GuildSettingsSections.ROLES || !r && s === eH.GuildSettingsSections.EMOJI || !r && s === eH.GuildSettingsSections.STICKERS || !r && s === eH.GuildSettingsSections.SOUNDBOARD || !n && s === eH.GuildSettingsSections.BANS || !_ && s === eH.GuildSettingsSections.ANALYTICS || !E && s === eH.GuildSettingsSections.MEMBERS) && (0, d.popLayer)()
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
    let D = eK({
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
        section: v && null != n ? n : eH.GuildSettingsSections.OVERVIEW,
        onSetSection: en.default.setSection,
        onClose: d.popLayer,
        title: ez(i),
        sections: D
      }), (0, a.jsx)(Y.ViewingRolesSettingsNotice, {
        guildId: i.id
      })]
    })
  }
}

function eq() {
  var e, t;
  let {
    guild: s,
    section: n,
    analyticsLocation: r,
    guildMetadata: o,
    isGuildMetadataLoaded: d
  } = (0, i.useStateFromStoresObject)([eu.default], () => eu.default.getProps()), {
    analyticsLocations: u
  } = (0, I.default)(E.default.GUILD_SETTINGS), c = (0, i.useStateFromStores)([W.default], () => W.default.theme), _ = (0, i.useStateFromStores)([W.default], () => W.default.darkSidebar ? eH.ThemeTypes.DARK : void 0), T = (0, i.useStateFromStores)([Q.default], () => null != s ? Q.default.getChannels(s.id).SELECTABLE : null, [s]), S = (0, i.useStateFromStoresObject)([q.default], () => null != s ? q.default.getGuildPermissionProps(s) : eQ), f = null == s ? void 0 : s.id, m = (0, i.useStateFromStores)([q.default], () => null != s && q.default.canAccessGuildSettings(s)), N = null != s && (0, ea.staffOnlyGuildSettingsAccess)(s.id), g = N || m, h = N || S.canViewGuildAnalytics, {
    shouldFetchMemberInsights: R,
    hasAccessRate: x
  } = (0, i.useStateFromStoresObject)([er.default], () => ({
    shouldFetchMemberInsights: null != s && er.default.shouldFetchMemberInsights(s.id),
    hasAccessRate: null != s && er.default.getMemberInsights(s.id).hasAccessRate
  }));
  l.useEffect(() => {
    !d && null != f && (0, C.fetchMetadataForGuild)(f)
  }, [d, f]), l.useEffect(() => {
    g && h && R && null != f && (0, ei.fetchMemberInsights)(f)
  }, [g, h, R, f]);
  let O = null !== (e = null == s ? void 0 : s.hasFeature(eH.GuildFeatures.COMMUNITY)) && void 0 !== e && e;
  l.useEffect(() => {
    null != f && O && ((0, M.fetchOnboardingPrompts)(f), (0, z.fetchWelcomeScreen)(f))
  }, [f, O]);
  let {
    homeSettingsEnabled: A
  } = (0, j.useOnboardingHomeAdminExperiment)(null != f ? f : eH.EMPTY_STRING_SNOWFLAKE_ID);
  l.useEffect(() => {
    null != f && A && (0, G.fetchGuildHomeSettings)(f)
  }, [A, f]);
  let {
    showAccessRate: p
  } = (0, ea.useGuildAccessRateInsightExperiment)(null == s ? void 0 : s.id, !x || !h || !g), v = S.isGuildAdmin && (null == s ? void 0 : s.hasFeature(eH.GuildFeatures.CLAN)), U = (0, i.useStateFromStores)([w.default], () => {
    var e;
    return (null == s ? void 0 : s.id) != null && (null === (e = w.default.getForGuild(s.id)) || void 0 === e ? void 0 : e.isDirty) === !0
  }, [s]), P = (0, i.useStateFromStores)([J.default], () => J.default.getMemberCount(null == s ? void 0 : s.id), [s]), b = (0, L.useGuildAuditLogV2Enabled)(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : eH.EMPTY_STRING_SNOWFLAKE_ID);
  l.useEffect(() => {
    null != f && S.canManageGuild && k.default.loadTemplatesForGuild(f)
  }, [f, S.canManageGuild]), l.useEffect(() => {
    !g && en.default.close()
  }, [g]);
  let B = (0, i.useStateFromStores)([e_.default], () => e_.default.getCurrentPage()),
    y = (0, i.useStateFromStores)([D.default], () => null != f && D.default.getEnabled(f)),
    F = (0, i.useStateFromStores)([Z.default], () => null != f && Z.default.isEmpty(f));
  return (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: u,
    children: (0, a.jsx)(eJ, {
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
      canViewGuildAnalytics: h,
      showAccessRate: p,
      onboardingStep: B,
      onboardingEnabled: y,
      welcomeScreenEmpty: F,
      guildMetadata: o,
      canAccessClanSettings: v
    })
  })
}