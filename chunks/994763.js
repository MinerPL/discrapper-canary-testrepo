n.r(t), n.d(t, {
  default: function() {
return e$;
  },
  getGuildSettingsSections: function() {
return eq;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(990547),
  r = n(442837),
  l = n(704215),
  o = n(481060),
  c = n(37234),
  d = n(503089),
  u = n(493544),
  _ = n(100527),
  I = n(367907),
  E = n(906732),
  T = n(132871),
  m = n(147890),
  N = n(353093),
  S = n(593128),
  h = n(979264),
  g = n(223892),
  C = n(738774),
  x = n(296386),
  p = n(605236),
  R = n(688465),
  f = n(826292),
  L = n(404228),
  O = n(676317),
  A = n(874993),
  M = n(745752),
  D = n(45966),
  v = n(637853),
  j = n(526120),
  Z = n(621923),
  b = n(352981),
  U = n(610403),
  G = n(923726),
  P = n(144507),
  B = n(303737),
  y = n(15030),
  F = n(220685),
  k = n(751189),
  w = n(409059),
  H = n(810788),
  V = n(918658),
  Y = n(84615),
  W = n(210887),
  z = n(524329),
  K = n(575258),
  q = n(995532),
  X = n(276687),
  Q = n(984933),
  J = n(650774),
  $ = n(496675),
  ee = n(594174),
  et = n(585483),
  en = n(771212),
  es = n(85001),
  ea = n(434404),
  ei = n(146596),
  er = n(559368),
  el = n(600553),
  eo = n(360606),
  ec = n(946724),
  ed = n(999382),
  eu = n(44550),
  e_ = n(853714),
  eI = n(359191),
  eE = n(84658),
  eT = n(142961),
  em = n(730910),
  eN = n(475013),
  eS = n(213956),
  eh = n(702478),
  eg = n(247031),
  eC = n(787561),
  ex = n(579648),
  ep = n(511480),
  eR = n(460461),
  ef = n(29605),
  eL = n(365307),
  eO = n(497666),
  eA = n(324330),
  eM = n(495300),
  eD = n(312397),
  ev = n(651780),
  ej = n(279542),
  eZ = n(413335),
  eb = n(665324),
  eU = n(208150),
  eG = n(353398),
  eP = n(365774),
  eB = n(803288),
  ey = n(804153),
  eF = n(981631),
  ek = n(308083),
  ew = n(190378),
  eH = n(135899),
  eV = n(689938),
  eY = n(235262);

function eW(e) {
  return '' !== e.toString() ? e.toString() : eV.Z.Messages.SERVER_SETTINGS;
}

function ez(e, t) {
  let {
homeSettingsEnabled: n
  } = (0, Z.l6)(e);
  if (D.Z.getEnabled(e))
return eV.Z.Messages.GUILD_ONBOARDING_ON.toUpperCase();
  if ((0, eT.C)(e))
return eV.Z.Messages.GUILD_ONBOARDING_OFF.toUpperCase();
  let s = eE.ug.filter(e => !!n || e !== eE.PG.HOME_SETTINGS || !1),
a = s.findIndex(e => e === t);
  if (-1 !== a)
return eV.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_COUNTER.format({
  count: a + 1,
  total: s.length
});
}

function eK(e) {
  var t;
  let {
guild: a,
canManageGuild: r,
canViewAuditLog: d,
canViewAuditLogV2: _,
canManageRoles: I,
canManageGuildExpressions: E,
canManageWebhooks: x,
canManageBans: f,
canAccessMembersPage: M,
canViewGuildAnalytics: D,
isOwner: j,
isOwnerWithRequiredMfaLevel: Z,
showDirtyGuildTemplateIndicator: k,
memberCount: w,
isGuildAuditLogV2Enabled: V,
showAccessRate: W,
onboardingStep: z,
onboardingEnabled: q,
welcomeScreenEmpty: Q,
guildMetadata: J,
section: $,
canAccessClanSettings: en
  } = e, ei = el.$.getCurrentConfig({
guildId: a.id,
location: 'generateSections'
  }).enabled, er = () => (0, P.X$)({
guild: a,
isOwner: j,
canManageGuildRoleSubscriptions: (0, P.H2)(a),
isMonetizationWaitlistEnabledForGuild: (0, g.mG)(a.id),
isGuildEligibleForRoleSubscriptions: (0, G.kT)(a.id),
isExpeditedMonetizationOnboardingGuild: (0, g.Rw)(a),
isUserInCreatorMonetizationEligibleCountry: (0, g.DB)(),
shouldRestrictUpdatingRoleSubscriptionSettings: (0, C.cu)(a.id)
  }), eE = (0, b.p)(a.id, 'guild_settings'), eT = !1 === a.hasFeature(eF.oNc.CREATOR_MONETIZABLE) && !1 === a.hasFeature(eF.oNc.CREATOR_MONETIZABLE_PROVISIONAL), eK = eE && eT ? {
label: (0, s.jsx)('div', {
  className: eY.roleSubLabel,
  children: eV.Z.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
}),
ariaLabel: eV.Z.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
  } : {
label: (0, s.jsx)('div', {
  className: eY.roleSubLabel,
  children: eV.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
}),
ariaLabel: eV.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
  }, eq = (null === (t = a.clan) || void 0 === t ? void 0 : t.badge) != null ? (0, N.ky)(a.id, a.clan.badge, ek.NC.SIZE_16) : null, eX = {
section: eF.pNK.DELETE,
onClick() {
  let e = ee.default.getCurrentUser();
  if (null == e)
    return;
  let t = a.toString(),
    i = {
      header: eV.Z.Messages.DELETE_SERVER_TITLE.format({
        name: t
      }),
      confirmText: eV.Z.Messages.DELETE_SERVER,
      cancelText: eV.Z.Messages.CANCEL,
      onConfirm: () => {
        et.S.subscribeOnce(eF.CkL.LAYER_POP_COMPLETE, () => {
          ea.Z.deleteGuild(a.id, t).then(() => {
            if ((0, p.un)(l.z.GUILD_DELETE_FEEDBACK))
              return;
            es.Z.trackExposure({
              location: 'e4be39_1'
            });
            let {
              showFeedback: e
            } = es.Z.getCurrentConfig({
              location: 'e4be39_2'
            }, {
              autoTrackExposure: !1
            });
            e && (0, o.openModalLazy)(async () => {
              let {
                default: e
              } = await n.e('31811').then(n.bind(n, 945903));
              return t => (0, s.jsx)(e, {
                ...t,
                guildId: a.id
              });
            });
          });
        }), (0, c.xf)();
      }
    };
  e.mfaEnabled ? (0, o.openModal)(e => (0, s.jsx)(o.ConfirmModal, {
    ...e,
    ...i,
    children: (0, s.jsx)(o.Text, {
      variant: 'text-md/normal',
      children: eV.Z.Messages.DELETE_SERVER_BODY.format({
        name: t
      })
    })
  })) : (0, o.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('18259').then(n.bind(n, 1493));
    return n => (0, s.jsx)(e, {
      ...n,
      ...i,
      validationText: t,
      instructionText: eV.Z.Messages.DELETE_SERVER_ENTER_NAME,
      errorText: eV.Z.Messages.DELETE_SERVER_INCORRECT_NAME,
      children: eV.Z.Messages.DELETE_SERVER_BODY.format({
        name: t
      })
    });
  });
},
label: eV.Z.Messages.DELETE_SERVER,
ariaLabel: eV.Z.Messages.DELETE_SERVER,
icon: (0, s.jsx)(o.TrashIcon, {
  size: 'xs',
  color: 'currentColor'
}),
predicate: () => Z
  };
  if (ei) {
let e = [{
      section: u.ID.DIVIDER
    },
    {
      section: u.ID.HEADER,
      label: eV.Z.Messages.GUILD_SETTINGS_SECTION_TITLE_ADD_FUN_STUFF
    },
    {
      section: eF.pNK.EMOJI,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
      label: eV.Z.Messages.EMOJI,
      element: ef.ZP,
      predicate: () => E
    },
    {
      section: eF.pNK.STICKERS,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
      label: eV.Z.Messages.GUILD_SETTINGS_STICKERS,
      ariaLabel: eV.Z.Messages.GUILD_SETTINGS_STICKERS,
      element: eU.Z,
      predicate: () => E
    },
    {
      section: eF.pNK.SOUNDBOARD,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
      label: eV.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
      ariaLabel: eV.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
      element: eb.Z,
      predicate: () => E
    },
    {
      section: eF.pNK.APP_DIRECTORY,
      label: eV.Z.Messages.APPS,
      ariaLabel: eV.Z.Messages.APPS,
      onClick() {
        (0, m.goToAppDirectory)({
          guildId: a.id,
          entrypoint: {
            name: T.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
            guildSettingsSection: $
          }
        }), (0, c.xf)();
      }
    },
    {
      section: eF.pNK.INTEGRATIONS,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
      label: eV.Z.Messages.INTEGRATIONS,
      ariaLabel: eV.Z.Messages.INTEGRATIONS,
      element: eL.Z,
      notice: {
        stores: [
          eo.Z,
          ed.Z
        ],
        element: eL.j
      },
      predicate: () => r || x
    }
  ],
  t = I || M || r ? [{
      section: u.ID.DIVIDER
    },
    {
      section: u.ID.HEADER,
      label: eV.Z.Messages.GUILD_SETTINGS_SECTION_TITLE_MANAGE_USERS
    },
    {
      section: eF.pNK.ROLES,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
      label: eV.Z.Messages.ROLES,
      element: eN.Z,
      type: u.bT.MINIMAL,
      ariaLabel: eV.Z.Messages.GUILD_SETTINGS_ROLE_ICON_SIDEBAR_NEW_ARIA_LABEL,
      notice: {
        stores: [ec.Z],
        element: eN._
      },
      predicate: () => I
    },
    {
      section: eF.pNK.MEMBERS,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
      label: (0, s.jsx)(eA.$, {}),
      ariaLabel: eV.Z.Messages.MEMBERS,
      element: eA.Z,
      type: u.bT.CUSTOM,
      predicate: () => M
    },
    {
      section: eF.pNK.INSTANT_INVITES,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES,
      label: eV.Z.Messages.INVITES,
      element: eO.Z,
      type: u.bT.CUSTOM,
      predicate: () => r
    }
  ] : [],
  n = a.hasFeature(eF.oNc.COMMUNITY),
  o = r && n,
  N = r && !n,
  g = !n && ((0, O.Nb)(a.id) || (0, O.ze)(a.id)),
  C = _ && V,
  p = o || N || g || d || C || f ? [{
      section: u.ID.DIVIDER
    },
    {
      section: u.ID.HEADER,
      label: eV.Z.Messages.GUILD_SETTINGS_SECTION_TITLE_KEEP_IT_SAFE
    },
    {
      section: eF.pNK.SAFETY,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
      label: eV.Z.Messages.SAFETY_SETUP,
      ariaLabel: eV.Z.Messages.SAFETY_SETUP,
      element: eS.Z,
      newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
      predicate: () => o
    },
    {
      section: eF.pNK.MODERATION,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
      label: eV.Z.Messages.SAFETY_SETUP,
      element: ej.ZP,
      predicate: () => N
    },
    {
      section: eF.pNK.GUILD_AUTOMOD,
      label: (0, s.jsx)('div', {
        className: eY.landingPageTabLink,
        children: eV.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE
      }),
      ariaLabel: eV.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
      element: A.Z,
      newIndicatorDismissibleContentTypes: null,
      predicate: () => g
    },
    {
      section: eF.pNK.AUDIT_LOG,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
      label: eV.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
      element: e_.Z,
      type: u.bT.CUSTOM,
      predicate: () => d
    },
    {
      section: eF.pNK.AUDIT_LOG_V2,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG_V2,
      label: eV.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
      element: L.Z,
      type: u.bT.CUSTOM,
      predicate: () => C
    },
    {
      section: eF.pNK.BANS,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
      label: eV.Z.Messages.BANS,
      element: eg.Z,
      predicate: () => f
    }
  ] : [],
  j = (0, v.wC)(a.id),
  P = n && D,
  ee = r && (a.hasFeature(eF.oNc.DISCOVERABLE) || !!(null == J ? void 0 : J.isPublished)),
  et = r && !Q && !a.hasFeature(eF.oNc.GUILD_SERVER_GUIDE),
  es = n && (r || j || P || ee || et) ? [{
      section: u.ID.DIVIDER
    },
    {
      section: u.ID.HEADER,
      label: eV.Z.Messages.COMMUNITY
    },
    {
      section: eF.pNK.COMMUNITY,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW,
      label: eV.Z.Messages.OVERVIEW,
      element: eC.Z,
      ariaLabel: eV.Z.Messages.OVERVIEW,
      notice: {
        stores: [ed.Z],
        element: eC.X
      },
      predicate: () => r
    },
    {
      section: eF.pNK.ONBOARDING,
      label: eV.Z.Messages.ONBOARDING,
      element: eM.Z,
      ariaLabel: eV.Z.Messages.ONBOARDING,
      newIndicatorDismissibleContentTypes: q ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
      notice: {
        stores: [eI.Z],
        element: em.Z
      },
      predicate: () => j,
      decoration: ez(a.id, z)
    },
    {
      section: eF.pNK.ANALYTICS,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
      label: eV.Z.Messages.SERVER_INSIGHTS,
      ariaLabel: eV.Z.Messages.SERVER_INSIGHTS,
      element: eh.Z,
      newIndicator: H.Z.hasHotspot(ew.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
      newIndicatorDismissibleContentTypes: W ? [l.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
      predicate: () => P
    },
    {
      section: eF.pNK.DISCOVERY,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
      label: eV.Z.Messages.DISCOVERY,
      element: ep.Z,
      notice: {
        stores: [ed.Z],
        element: ep.s
      },
      predicate: () => r,
      ariaLabel: a.hasFeature(eF.oNc.DISCOVERABLE) ? eV.Z.Messages.DISCOVERY : eV.Z.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
    },
    {
      section: eF.pNK.DISCOVERY_LANDING_PAGE,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
      label: (0, s.jsxs)('div', {
        className: eY.landingPageTabLink,
        children: [
          eV.Z.Messages.DISCOVERY_LANDING_PAGE,
          ' ',
          (0, s.jsx)(R.Z, {})
        ]
      }),
      ariaLabel: eV.Z.Messages.DISCOVERY_LANDING_PAGE,
      element: eR.Z,
      notice: {
        stores: [ed.Z],
        element: eR.J
      },
      type: u.bT.CUSTOM,
      predicate: () => ee
    },
    {
      section: eF.pNK.COMMUNITY_WELCOME,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
      label: eV.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
      ariaLabel: eV.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
      element: ex.Z,
      notice: {
        stores: [K.Z],
        element: X.Z
      },
      predicate: () => et
    }
  ] : [],
  ea = er() ? [{
      section: u.ID.DIVIDER
    },
    {
      section: u.ID.HEADER,
      label: eV.Z.Messages.MONETIZATION
    },
    {
      ...eK,
      section: eF.pNK.ROLE_SUBSCRIPTIONS,
      element: y.Z,
      type: u.bT.CUSTOM,
      newIndicatorDismissibleContentTypes: (0, B.sO)(a) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
    },
    {
      section: eF.pNK.GUILD_PRODUCTS,
      label: eV.Z.Messages.GUILD_PRODUCTS_TITLE,
      ariaLabel: eV.Z.Messages.GUILD_PRODUCTS_TITLE,
      element: U.Z,
      predicate: () => (0, b.p)(a.id, 'guild_product_settings_predicate') && (0, G.sy)(a)
    },
    {
      section: eF.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
      impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
      newIndicator: 2022 === new Date().getFullYear(),
      label: eV.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
      ariaLabel: eV.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
      element: F.Z,
      predicate: () => (0, G.sy)(a)
    }
  ] : [],
  ei = null != en && en,
  el = r && !a.hasFeature(eF.oNc.COMMUNITY),
  eE = ei || el || r ? [{
      section: u.ID.DIVIDER
    },
    {
      section: eF.pNK.CLAN,
      label: eV.Z.Messages.CLAN_SETTINGS,
      ariaLabel: eV.Z.Messages.CLAN_SETTINGS,
      onClick() {
        (0, Y.q4)(e => {
          let {
            closeLayer: t
          } = e;
          return (0, s.jsx)(S.Z, {
            onClose: t,
            guildId: a.id
          });
        }, {
          layerKey: ek.q2
        }), (0, c.xf)();
      },
      predicate: () => ei,
      icon: null != eq ? (0, s.jsx)(h.KQ, {
        src: eq
      }) : null
    },
    {
      section: eF.pNK.COMMUNITY,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
      label: eV.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
      element: eC.Z,
      ariaLabel: eV.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
      newIndicator: null != w && w >= eH.U3 && H.Z.hasHotspot(ew.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
      notice: {
        stores: [ed.Z],
        element: eC.X
      },
      predicate: () => el
    },
    {
      section: eF.pNK.WIDGET,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_WIDGET,
      label: eV.Z.Messages.WIDGET,
      element: ey.Z,
      predicate: () => r
    },
    {
      section: eF.pNK.VANITY_URL,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
      label: eV.Z.Messages.VANITY_URL,
      element: eB.Z,
      notice: {
        stores: [eu.Z],
        element: eB.T
      },
      predicate: () => r
    },
    {
      section: eF.pNK.GUILD_TEMPLATES,
      impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
      label: (0, s.jsx)(eP.Z, {
        showDirtyIndicator: k
      }),
      ariaLabel: eV.Z.Messages.GUILD_TEMPLATES,
      element: eG.ZP,
      notice: {
        stores: [eG.Sf],
        element: eG.Q5
      },
      predicate: () => r
    }
  ] : [];
return [{
    section: u.ID.HEADER,
    label: eW(a)
  },
  {
    section: eF.pNK.OVERVIEW,
    impressionName: i.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
    label: eV.Z.Messages.OVERVIEW,
    ariaLabel: eV.Z.Messages.OVERVIEW,
    element: eD.Z,
    notice: {
      stores: [ed.Z],
      element: eD.O
    }
  },
  ...e,
  ...t,
  ...p,
  ...es,
  ...ea,
  {
    section: u.ID.DIVIDER
  },
  {
    section: eF.pNK.GUILD_PREMIUM,
    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
    label: eV.Z.Messages.GUILD_PREMIUM,
    ariaLabel: eV.Z.Messages.GUILD_PREMIUM,
    element: ev.Z,
    className: eY.serverBoostTabItem,
    icon: (0, s.jsx)(eZ.Z, {
      className: eY.icon
    })
  },
  ...eE,
  {
    section: u.ID.DIVIDER,
    predicate: () => Z
  },
  eX
];
  }
  return [{
  section: u.ID.HEADER,
  label: eW(a)
},
{
  section: eF.pNK.OVERVIEW,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
  label: eV.Z.Messages.OVERVIEW,
  ariaLabel: eV.Z.Messages.OVERVIEW,
  element: eD.Z,
  notice: {
    stores: [ed.Z],
    element: eD.O
  }
},
{
  section: eF.pNK.ROLES,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
  label: eV.Z.Messages.ROLES,
  element: eN.Z,
  type: u.bT.MINIMAL,
  ariaLabel: eV.Z.Messages.GUILD_SETTINGS_ROLE_ICON_SIDEBAR_NEW_ARIA_LABEL,
  notice: {
    stores: [ec.Z],
    element: eN._
  },
  predicate: () => I
},
{
  section: eF.pNK.EMOJI,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
  label: eV.Z.Messages.EMOJI,
  element: ef.ZP,
  predicate: () => E
},
{
  section: eF.pNK.STICKERS,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
  label: eV.Z.Messages.GUILD_SETTINGS_STICKERS,
  ariaLabel: eV.Z.Messages.GUILD_SETTINGS_STICKERS,
  element: eU.Z,
  predicate: () => E
},
{
  section: eF.pNK.SOUNDBOARD,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
  label: eV.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
  ariaLabel: eV.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
  element: eb.Z,
  predicate: () => E
},
{
  section: eF.pNK.WIDGET,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_WIDGET,
  label: eV.Z.Messages.WIDGET,
  element: ey.Z,
  predicate: () => r
},
{
  section: eF.pNK.GUILD_TEMPLATES,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
  label: (0, s.jsx)(eP.Z, {
    showDirtyIndicator: k
  }),
  ariaLabel: eV.Z.Messages.GUILD_TEMPLATES,
  element: eG.ZP,
  notice: {
    stores: [eG.Sf],
    element: eG.Q5
  },
  predicate: () => r
},
{
  section: eF.pNK.VANITY_URL,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
  label: eV.Z.Messages.VANITY_URL,
  element: eB.Z,
  notice: {
    stores: [eu.Z],
    element: eB.T
  },
  predicate: () => r
},
{
  section: u.ID.DIVIDER,
  predicate: () => r || x
},
{
  section: u.ID.HEADER,
  label: eV.Z.Messages.APPS,
  predicate: () => r || x
},
{
  section: eF.pNK.INTEGRATIONS,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
  label: eV.Z.Messages.INTEGRATIONS,
  ariaLabel: eV.Z.Messages.INTEGRATIONS,
  element: eL.Z,
  notice: {
    stores: [
      eo.Z,
      ed.Z
    ],
    element: eL.j
  },
  predicate: () => r || x
},
{
  section: eF.pNK.APP_DIRECTORY,
  label: eV.Z.Messages.APP_DIRECTORY,
  ariaLabel: eV.Z.Messages.APP_DIRECTORY,
  onClick() {
    (0, m.goToAppDirectory)({
      guildId: a.id,
      entrypoint: {
        name: T.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
        guildSettingsSection: $
      }
    }), (0, c.xf)();
  }
},
{
  section: u.ID.DIVIDER,
  predicate: () => r
},
{
  section: u.ID.HEADER,
  label: eV.Z.Messages.MODERATION,
  predicate: () => r
},
{
  section: eF.pNK.SAFETY,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
  label: eV.Z.Messages.SAFETY_SETUP,
  ariaLabel: eV.Z.Messages.SAFETY_SETUP,
  element: eS.Z,
  newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
  predicate: () => r && a.hasFeature(eF.oNc.COMMUNITY)
},
{
  section: eF.pNK.MODERATION,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
  label: eV.Z.Messages.SAFETY_SETUP,
  element: ej.ZP,
  predicate: () => r && !a.hasFeature(eF.oNc.COMMUNITY)
},
{
  section: eF.pNK.GUILD_AUTOMOD,
  label: (0, s.jsx)('div', {
    className: eY.landingPageTabLink,
    children: eV.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE
  }),
  ariaLabel: eV.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
  element: A.Z,
  newIndicatorDismissibleContentTypes: null,
  predicate: () => !a.hasFeature(eF.oNc.COMMUNITY) && ((0, O.Nb)(a.id) || (0, O.ze)(a.id))
},
{
  section: eF.pNK.AUDIT_LOG,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
  label: eV.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
  element: e_.Z,
  type: u.bT.CUSTOM,
  predicate: () => d
},
{
  section: eF.pNK.AUDIT_LOG_V2,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG_V2,
  label: eV.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
  element: L.Z,
  type: u.bT.CUSTOM,
  predicate: () => _ && V
},
{
  section: eF.pNK.BANS,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
  label: eV.Z.Messages.BANS,
  element: eg.Z,
  predicate: () => f
},
{
  section: u.ID.DIVIDER,
  predicate: () => r || D
},
{
  section: u.ID.HEADER,
  label: eV.Z.Messages.COMMUNITY,
  predicate: () => !en && (r || D)
},
{
  section: eF.pNK.CLAN,
  label: eV.Z.Messages.CLAN_SETTINGS,
  ariaLabel: eV.Z.Messages.CLAN_SETTINGS,
  onClick() {
    (0, Y.q4)(e => {
      let {
        closeLayer: t
      } = e;
      return (0, s.jsx)(S.Z, {
        onClose: t,
        guildId: a.id
      });
    }, {
      layerKey: ek.q2
    }), (0, c.xf)();
  },
  predicate: () => null != en && en,
  icon: null != eq ? (0, s.jsx)(h.KQ, {
    src: eq
  }) : null
},
{
  section: eF.pNK.COMMUNITY,
  impressionName: a.hasFeature(eF.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
  label: a.hasFeature(eF.oNc.COMMUNITY) ? eV.Z.Messages.OVERVIEW : eV.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
  element: eC.Z,
  ariaLabel: a.hasFeature(eF.oNc.COMMUNITY) ? eV.Z.Messages.OVERVIEW : eV.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
  newIndicator: !a.hasFeature(eF.oNc.COMMUNITY) && null != w && w >= eH.U3 && H.Z.hasHotspot(ew.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
  notice: {
    stores: [ed.Z],
    element: eC.X
  },
  predicate: () => r
},
{
  section: eF.pNK.ONBOARDING,
  label: eV.Z.Messages.ONBOARDING,
  element: eM.Z,
  ariaLabel: eV.Z.Messages.ONBOARDING,
  newIndicatorDismissibleContentTypes: q ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
  notice: {
    stores: [eI.Z],
    element: em.Z
  },
  predicate: () => (0, v.wC)(a.id),
  decoration: ez(a.id, z)
},
{
  section: eF.pNK.ANALYTICS,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
  label: eV.Z.Messages.SERVER_INSIGHTS,
  ariaLabel: eV.Z.Messages.SERVER_INSIGHTS,
  element: eh.Z,
  newIndicator: H.Z.hasHotspot(ew.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
  newIndicatorDismissibleContentTypes: W ? [l.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
  predicate: () => D && a.hasFeature(eF.oNc.COMMUNITY)
},
{
  section: eF.pNK.DISCOVERY,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
  label: eV.Z.Messages.DISCOVERY,
  element: ep.Z,
  notice: {
    stores: [ed.Z],
    element: ep.s
  },
  predicate: () => r && a.hasFeature(eF.oNc.COMMUNITY),
  ariaLabel: a.hasFeature(eF.oNc.DISCOVERABLE) ? eV.Z.Messages.DISCOVERY : eV.Z.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
},
{
  section: eF.pNK.DISCOVERY_LANDING_PAGE,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
  label: (0, s.jsxs)('div', {
    className: eY.landingPageTabLink,
    children: [
      eV.Z.Messages.DISCOVERY_LANDING_PAGE,
      ' ',
      (0, s.jsx)(R.Z, {})
    ]
  }),
  ariaLabel: eV.Z.Messages.DISCOVERY_LANDING_PAGE,
  element: eR.Z,
  notice: {
    stores: [ed.Z],
    element: eR.J
  },
  type: u.bT.CUSTOM,
  predicate: () => r && (a.hasFeature(eF.oNc.DISCOVERABLE) || !!(null == J ? void 0 : J.isPublished))
},
{
  section: eF.pNK.COMMUNITY_WELCOME,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
  label: eV.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
  ariaLabel: eV.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
  element: ex.Z,
  notice: {
    stores: [K.Z],
    element: X.Z
  },
  predicate: () => r && a.hasFeature(eF.oNc.COMMUNITY) && !Q && !a.hasFeature(eF.oNc.GUILD_SERVER_GUIDE)
},
{
  section: u.ID.DIVIDER,
  predicate: er
},
{
  section: u.ID.HEADER,
  label: eV.Z.Messages.MONETIZATION,
  predicate: er
},
{
  ...eK,
  section: eF.pNK.ROLE_SUBSCRIPTIONS,
  element: y.Z,
  type: u.bT.CUSTOM,
  predicate: er,
  newIndicatorDismissibleContentTypes: (0, B.sO)(a) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
},
{
  section: eF.pNK.GUILD_PRODUCTS,
  label: eV.Z.Messages.GUILD_PRODUCTS_TITLE,
  ariaLabel: eV.Z.Messages.GUILD_PRODUCTS_TITLE,
  element: U.Z,
  predicate: () => er() && (0, b.p)(a.id, 'guild_product_settings_predicate') && (0, G.sy)(a)
},
{
  section: eF.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
  impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
  newIndicator: 2022 === new Date().getFullYear(),
  label: eV.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
  ariaLabel: eV.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
  element: F.Z,
  predicate: () => er() && (0, G.sy)(a)
},
{
  section: u.ID.DIVIDER
},
{
  section: eF.pNK.GUILD_PREMIUM,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
  label: eV.Z.Messages.GUILD_PREMIUM,
  ariaLabel: eV.Z.Messages.GUILD_PREMIUM,
  element: ev.Z,
  className: eY.serverBoostTabItem,
  icon: (0, s.jsx)(eZ.Z, {
    className: eY.icon
  })
},
{
  section: u.ID.DIVIDER
},
{
  section: u.ID.HEADER,
  label: eV.Z.Messages.USER_MANAGEMENT
},
{
  section: eF.pNK.MEMBERS,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
  label: (0, s.jsx)(eA.$, {}),
  ariaLabel: eV.Z.Messages.MEMBERS,
  element: eA.Z,
  type: u.bT.CUSTOM,
  predicate: () => M
},
{
  section: eF.pNK.INSTANT_INVITES,
  impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES,
  label: eV.Z.Messages.INVITES,
  element: eO.Z,
  type: u.bT.CUSTOM,
  predicate: () => r
},
{
  section: u.ID.DIVIDER,
  predicate: () => Z
},
eX
  ];
}

function eq(e, t) {
  let n = $.Z.getGuildPermissionProps(e);
  return eK({
channels: t,
showDirtyGuildTemplateIndicator: !1,
...n,
isGuildAuditLogV2Enabled: !1,
showAccessRate: !1,
canAccessClanSettings: n.isGuildAdmin && e.hasFeature(eF.oNc.CLAN),
welcomeScreenEmpty: q.Z.isEmpty(e.id)
  }).filter(e => {
let {
  section: t
} = e;
return t !== u.ID.HEADER && t !== u.ID.DIVIDER;
  }).filter(e => null == e.predicate || e.predicate());
}

function eX(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
n = arguments.length > 2 ? arguments[2] : void 0;
  I.ZP.trackWithMetadata(eF.rMx.SETTINGS_PANE_VIEWED, {
settings_type: 'guild',
origin_pane: t,
destination_pane: e,
location: n
  });
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
class eJ extends a.PureComponent {
  componentDidMount() {
eX(this.props.section, null, this.props.analyticsLocation);
  }
  componentWillUnmount() {
ea.Z.close();
  }
  componentDidUpdate(e) {
let {
  section: t
} = e, {
  section: n,
  canManageGuild: s,
  canManageRoles: a,
  canManageBans: i,
  canManageNicknames: r,
  canManageGuildExpressions: l,
  canViewAuditLog: o,
  canViewAuditLogV2: d,
  canManageWebhooks: u,
  canAccessMembersPage: _,
  canViewGuildAnalytics: I
} = this.props;
n !== t && eX(n, t), (!s && !a && !i && !r && !l && !o && !d && !_ && !u || !o && n === eF.pNK.AUDIT_LOG || !d && n === eF.pNK.AUDIT_LOG_V2 || !a && n === eF.pNK.ROLES || !l && n === eF.pNK.EMOJI || !l && n === eF.pNK.STICKERS || !l && n === eF.pNK.SOUNDBOARD || !i && n === eF.pNK.BANS || !I && n === eF.pNK.ANALYTICS || !_ && n === eF.pNK.MEMBERS) && (0, c.xf)();
  }
  render() {
var e, t;
let {
  theme: n,
  sidebarTheme: a,
  section: i,
  guild: r,
  channels: l,
  canManageGuild: o,
  canViewAuditLog: u,
  canViewAuditLogV2: _,
  canManageRoles: I,
  canManageGuildExpressions: E,
  canManageWebhooks: T,
  canManageBans: m,
  canAccessMembersPage: N,
  canViewGuildAnalytics: S,
  isOwner: h,
  isOwnerWithRequiredMfaLevel: g,
  showDirtyGuildTemplateIndicator: C,
  memberCount: x,
  isGuildAuditLogV2Enabled: p,
  showAccessRate: R,
  onboardingStep: f,
  onboardingEnabled: L,
  welcomeScreenEmpty: O,
  guildMetadata: A,
  canAccessClanSettings: M
} = this.props;
if (null == r)
  return null;
let D = eK({
    guild: r,
    channels: l,
    canManageGuild: o,
    canViewAuditLog: u,
    canViewAuditLogV2: _,
    canManageRoles: I,
    canManageGuildExpressions: E,
    canManageWebhooks: T,
    canManageBans: m,
    canAccessMembersPage: N,
    canViewGuildAnalytics: S,
    isOwner: h,
    isOwnerWithRequiredMfaLevel: g,
    showDirtyGuildTemplateIndicator: C,
    memberCount: x,
    isGuildAuditLogV2Enabled: p,
    showAccessRate: R,
    onboardingStep: f,
    onboardingEnabled: L,
    welcomeScreenEmpty: O,
    guildMetadata: A,
    section: i,
    canAccessClanSettings: M
  }),
  v = (null === (t = D.find(e => e.section === i)) || void 0 === t ? void 0 : null === (e = t.predicate) || void 0 === e ? void 0 : e.call(t)) !== !1;
return (0, s.jsxs)('div', {
  children: [
    (0, s.jsx)(d.ZP, {
      theme: n,
      sidebarTheme: a,
      section: v && null != i ? i : eF.pNK.OVERVIEW,
      onSetSection: ea.Z.setSection,
      onClose: c.xf,
      title: eW(r),
      sections: D
    }),
    (0, s.jsx)(V.d, {
      guildId: r.id
    })
  ]
});
  }
}

function e$() {
  var e, t;
  let {
guild: n,
section: i,
analyticsLocation: l,
guildMetadata: o,
isGuildMetadataLoaded: c
  } = (0, r.cj)([ed.Z], () => ed.Z.getProps()), {
analyticsLocations: d
  } = (0, E.ZP)(_.Z.GUILD_SETTINGS), u = (0, r.e7)([W.Z], () => W.Z.theme), I = (0, r.e7)([W.Z], () => W.Z.darkSidebar ? eF.BRd.DARK : void 0), T = (0, r.e7)([Q.ZP], () => null != n ? Q.ZP.getChannels(n.id).SELECTABLE : null, [n]), m = (0, r.cj)([$.Z], () => null != n ? $.Z.getGuildPermissionProps(n) : eQ), N = null == n ? void 0 : n.id, S = (0, r.e7)([$.Z], () => null != n && $.Z.canAccessGuildSettings(n)), h = null != n && (0, en.Fv)(n.id), g = h || S, C = h || m.canViewGuildAnalytics, {
shouldFetchMemberInsights: p,
hasAccessRate: R
  } = (0, r.cj)([er.Z], () => ({
shouldFetchMemberInsights: null != n && er.Z.shouldFetchMemberInsights(n.id),
hasAccessRate: null != n && er.Z.getMemberInsights(n.id).hasAccessRate
  }));
  a.useEffect(() => {
!c && null != N && (0, x.aC)(N);
  }, [
c,
N
  ]), a.useEffect(() => {
g && C && p && null != N && (0, ei.r2)(N);
  }, [
g,
C,
p,
N
  ]);
  let L = null !== (e = null == n ? void 0 : n.hasFeature(eF.oNc.COMMUNITY)) && void 0 !== e && e;
  a.useEffect(() => {
null != N && L && ((0, M.eM)(N), (0, z.RM)(N));
  }, [
N,
L
  ]);
  let {
homeSettingsEnabled: O
  } = (0, Z.kZ)(null != N ? N : eF.lds);
  a.useEffect(() => {
null != N && O && (0, j.cP)(N);
  }, [
O,
N
  ]);
  let {
showAccessRate: A
  } = (0, en.eA)(null == n ? void 0 : n.id, !R || !C || !g), v = m.isGuildAdmin && (null == n ? void 0 : n.hasFeature(eF.oNc.CLAN)), b = (0, r.e7)([w.Z], () => {
var e;
return (null == n ? void 0 : n.id) != null && (null === (e = w.Z.getForGuild(n.id)) || void 0 === e ? void 0 : e.isDirty) === !0;
  }, [n]), U = (0, r.e7)([J.Z], () => J.Z.getMemberCount(null == n ? void 0 : n.id), [n]), G = (0, f.pU)(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eF.lds);
  a.useEffect(() => {
null != N && m.canManageGuild && k.Z.loadTemplatesForGuild(N);
  }, [
N,
m.canManageGuild
  ]), a.useEffect(() => {
!g && ea.Z.close();
  }, [g]);
  let P = (0, r.e7)([eI.Z], () => eI.Z.getCurrentPage()),
B = (0, r.e7)([D.Z], () => null != N && D.Z.getEnabled(N)),
y = (0, r.e7)([q.Z], () => null != N && q.Z.isEmpty(N));
  return (0, s.jsx)(E.Gt, {
value: d,
children: (0, s.jsx)(eJ, {
  guild: n,
  section: i,
  theme: u,
  sidebarTheme: I,
  channels: T,
  showDirtyGuildTemplateIndicator: b,
  analyticsLocation: l,
  memberCount: U,
  isGuildAuditLogV2Enabled: G,
  ...m,
  canViewGuildAnalytics: C,
  showAccessRate: A,
  onboardingStep: P,
  onboardingEnabled: B,
  welcomeScreenEmpty: y,
  guildMetadata: o,
  canAccessClanSettings: v
})
  });
}