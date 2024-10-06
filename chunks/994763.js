n.r(t),
    n.d(t, {
        default: function () {
            return eJ;
        },
        getGuildSettingsSections: function () {
            return eK;
        }
    }),
    n(47120);
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
    g = n(979264),
    h = n(223892),
    C = n(738774),
    x = n(296386),
    p = n(605236),
    R = n(688465),
    L = n(676317),
    f = n(874993),
    O = n(745752),
    A = n(45966),
    M = n(637853),
    D = n(526120),
    v = n(621923),
    j = n(352981),
    Z = n(610403),
    b = n(923726),
    U = n(144507),
    G = n(303737),
    P = n(15030),
    B = n(220685),
    y = n(751189),
    F = n(409059),
    k = n(810788),
    w = n(918658),
    H = n(84615),
    V = n(163400),
    Y = n(210887),
    W = n(524329),
    z = n(575258),
    K = n(995532),
    q = n(276687),
    X = n(984933),
    Q = n(650774),
    J = n(496675),
    $ = n(594174),
    ee = n(585483),
    et = n(771212),
    en = n(85001),
    es = n(434404),
    ea = n(146596),
    ei = n(559368),
    er = n(600553),
    el = n(360606),
    eo = n(946724),
    ec = n(999382),
    ed = n(44550),
    eu = n(853714),
    e_ = n(359191),
    eI = n(84658),
    eE = n(142961),
    eT = n(730910),
    em = n(475013),
    eN = n(213956),
    eS = n(702478),
    eg = n(247031),
    eh = n(787561),
    eC = n(579648),
    ex = n(511480),
    ep = n(460461),
    eR = n(29605),
    eL = n(365307),
    ef = n(497666),
    eO = n(324330),
    eA = n(495300),
    eM = n(312397),
    eD = n(651780),
    ev = n(279542),
    ej = n(413335),
    eZ = n(665324),
    eb = n(208150),
    eU = n(353398),
    eG = n(365774),
    eP = n(803288),
    eB = n(804153),
    ey = n(981631),
    eF = n(308083),
    ek = n(190378),
    ew = n(135899),
    eH = n(689938),
    eV = n(9917);
function eY(e) {
    return '' !== e.toString() ? e.toString() : eH.Z.Messages.SERVER_SETTINGS;
}
function eW(e, t) {
    let { homeSettingsEnabled: n } = (0, v.l6)(e);
    if (A.Z.getEnabled(e)) return eH.Z.Messages.GUILD_ONBOARDING_ON.toUpperCase();
    if ((0, eE.C)(e)) return eH.Z.Messages.GUILD_ONBOARDING_OFF.toUpperCase();
    let s = eI.ug.filter((e) => !!n || e !== eI.PG.HOME_SETTINGS || !1),
        a = s.findIndex((e) => e === t);
    if (-1 !== a)
        return eH.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_COUNTER.format({
            count: a + 1,
            total: s.length
        });
}
function ez(e) {
    var t;
    let { guild: a, isGuildAdmin: r, canManageGuild: d, canViewAuditLog: _, canManageRoles: I, canManageGuildExpressions: E, canManageWebhooks: x, canUnlinkChannels: O, canManageBans: A, canAccessMembersPage: D, canViewGuildAnalytics: v, isOwner: y, isOwnerWithRequiredMfaLevel: F, showDirtyGuildTemplateIndicator: w, memberCount: V, showAccessRate: Y, onboardingStep: W, onboardingEnabled: K, welcomeScreenEmpty: X, guildMetadata: Q, section: J, canAccessClanSettings: et } = e,
        ea = er.$.getCurrentConfig({
            guildId: a.id,
            location: 'generateSections'
        }).enabled,
        ei = () =>
            (0, U.X$)({
                guild: a,
                isOwner: y,
                canManageGuildRoleSubscriptions: (0, U.H2)(a),
                isMonetizationWaitlistEnabledForGuild: (0, h.mG)(a.id),
                isGuildEligibleForRoleSubscriptions: (0, b.kT)(a.id),
                isExpeditedMonetizationOnboardingGuild: (0, h.Rw)(a),
                isUserInCreatorMonetizationEligibleCountry: (0, h.DB)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, C.cu)(a.id)
            }),
        eI = (0, j.p)(a.id, 'guild_settings'),
        eE = !1 === a.hasFeature(ey.oNc.CREATOR_MONETIZABLE) && !1 === a.hasFeature(ey.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
        ez =
            eI && eE
                ? {
                      label: (0, s.jsx)('div', {
                          className: eV.roleSubLabel,
                          children: eH.Z.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
                      }),
                      ariaLabel: eH.Z.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
                  }
                : {
                      label: (0, s.jsx)('div', {
                          className: eV.roleSubLabel,
                          children: eH.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
                      }),
                      ariaLabel: eH.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
                  },
        eK = (null === (t = a.clan) || void 0 === t ? void 0 : t.badge) != null ? (0, N.ky)(a.id, a.clan.badge, eF.NC.SIZE_16) : null,
        eq = {
            section: ey.pNK.DELETE,
            onClick() {
                let e = $.default.getCurrentUser();
                if (null == e) return;
                let t = a.toString(),
                    i = {
                        header: eH.Z.Messages.DELETE_SERVER_TITLE.format({ name: t }),
                        confirmText: eH.Z.Messages.DELETE_SERVER,
                        cancelText: eH.Z.Messages.CANCEL,
                        onConfirm: () => {
                            ee.S.subscribeOnce(ey.CkL.LAYER_POP_COMPLETE, () => {
                                es.Z.deleteGuild(a.id, t).then(() => {
                                    if ((0, p.un)(l.z.GUILD_DELETE_FEEDBACK)) return;
                                    en.Z.trackExposure({ location: 'e4be39_1' });
                                    let { showFeedback: e } = en.Z.getCurrentConfig({ location: 'e4be39_2' }, { autoTrackExposure: !1 });
                                    e &&
                                        (0, o.openModalLazy)(async () => {
                                            let { default: e } = await n.e('31811').then(n.bind(n, 945903));
                                            return (t) =>
                                                (0, s.jsx)(e, {
                                                    ...t,
                                                    guildId: a.id
                                                });
                                        });
                                });
                            }),
                                (0, c.xf)();
                        }
                    };
                e.mfaEnabled
                    ? (0, o.openModal)((e) =>
                          (0, s.jsx)(o.ConfirmModal, {
                              ...e,
                              ...i,
                              children: (0, s.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  children: eH.Z.Messages.DELETE_SERVER_BODY.format({ name: t })
                              })
                          })
                      )
                    : (0, o.openModalLazy)(async () => {
                          let { default: e } = await n.e('18259').then(n.bind(n, 1493));
                          return (n) =>
                              (0, s.jsx)(e, {
                                  ...n,
                                  ...i,
                                  validationText: t,
                                  instructionText: eH.Z.Messages.DELETE_SERVER_ENTER_NAME,
                                  errorText: eH.Z.Messages.DELETE_SERVER_INCORRECT_NAME,
                                  children: eH.Z.Messages.DELETE_SERVER_BODY.format({ name: t })
                              });
                      });
            },
            label: eH.Z.Messages.DELETE_SERVER,
            ariaLabel: eH.Z.Messages.DELETE_SERVER,
            icon: (0, s.jsx)(o.TrashIcon, {
                size: 'xs',
                color: 'currentColor'
            }),
            predicate: () => F
        };
    if (ea) {
        let e = [
                { section: u.ID.DIVIDER },
                {
                    section: u.ID.HEADER,
                    label: eH.Z.Messages.GUILD_SETTINGS_SECTION_TITLE_ADD_FUN_STUFF
                },
                {
                    section: ey.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eH.Z.Messages.EMOJI,
                    element: eR.ZP,
                    predicate: () => E
                },
                {
                    section: ey.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eH.Z.Messages.GUILD_SETTINGS_STICKERS,
                    ariaLabel: eH.Z.Messages.GUILD_SETTINGS_STICKERS,
                    element: eb.Z,
                    predicate: () => E
                },
                {
                    section: ey.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eH.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
                    ariaLabel: eH.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
                    element: eZ.Z,
                    predicate: () => E
                },
                {
                    section: ey.pNK.APP_DIRECTORY,
                    label: eH.Z.Messages.APPS,
                    ariaLabel: eH.Z.Messages.APPS,
                    onClick() {
                        (0, m.goToAppDirectory)({
                            guildId: a.id,
                            entrypoint: {
                                name: T.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
                                guildSettingsSection: J
                            }
                        }),
                            (0, c.xf)();
                    }
                },
                {
                    section: ey.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eH.Z.Messages.INTEGRATIONS,
                    ariaLabel: eH.Z.Messages.INTEGRATIONS,
                    element: eL.Z,
                    notice: {
                        stores: [el.Z, ec.Z],
                        element: eL.j
                    },
                    predicate: () => d || x || O
                }
            ],
            t =
                I || D || d
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: u.ID.HEADER,
                              label: eH.Z.Messages.GUILD_SETTINGS_SECTION_TITLE_MANAGE_USERS
                          },
                          {
                              section: ey.pNK.ROLES,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                              label: eH.Z.Messages.ROLES,
                              element: em.Z,
                              type: u.bT.MINIMAL,
                              ariaLabel: eH.Z.Messages.GUILD_SETTINGS_ROLE_ICON_SIDEBAR_NEW_ARIA_LABEL,
                              notice: {
                                  stores: [eo.Z],
                                  element: em._
                              },
                              predicate: () => I
                          },
                          {
                              section: ey.pNK.MEMBERS,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                              label: (0, s.jsx)(eO.$, {}),
                              ariaLabel: eH.Z.Messages.MEMBERS,
                              element: eO.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => D
                          },
                          {
                              section: ey.pNK.INSTANT_INVITES,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES,
                              label: eH.Z.Messages.INVITES,
                              element: ef.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => d
                          }
                      ]
                    : [],
            n = a.hasFeature(ey.oNc.COMMUNITY),
            r = d && n,
            o = d && !n,
            N = !n && ((0, L.Nb)(a.id) || (0, L.ze)(a.id)),
            h =
                r || o || N || _ || A
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: u.ID.HEADER,
                              label: eH.Z.Messages.GUILD_SETTINGS_SECTION_TITLE_KEEP_IT_SAFE
                          },
                          {
                              section: ey.pNK.SAFETY,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                              label: eH.Z.Messages.SAFETY_SETUP,
                              ariaLabel: eH.Z.Messages.SAFETY_SETUP,
                              element: eN.Z,
                              newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                              predicate: () => r
                          },
                          {
                              section: ey.pNK.MODERATION,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                              label: eH.Z.Messages.SAFETY_SETUP,
                              element: ev.ZP,
                              predicate: () => o
                          },
                          {
                              section: ey.pNK.GUILD_AUTOMOD,
                              label: (0, s.jsx)('div', {
                                  className: eV.landingPageTabLink,
                                  children: eH.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE
                              }),
                              ariaLabel: eH.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
                              element: f.Z,
                              newIndicatorDismissibleContentTypes: null,
                              predicate: () => N
                          },
                          {
                              section: ey.pNK.AUDIT_LOG,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                              label: eH.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
                              element: eu.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => _
                          },
                          {
                              section: ey.pNK.BANS,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                              label: eH.Z.Messages.BANS,
                              element: eg.Z,
                              predicate: () => A
                          }
                      ]
                    : [],
            C = (0, M.wC)(a.id),
            p = n && v,
            U = d && (a.hasFeature(ey.oNc.DISCOVERABLE) || !!(null == Q ? void 0 : Q.isPublished)),
            y = d && !X && !a.hasFeature(ey.oNc.GUILD_SERVER_GUIDE),
            $ =
                n && (d || C || p || U || y)
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: u.ID.HEADER,
                              label: eH.Z.Messages.COMMUNITY
                          },
                          {
                              section: ey.pNK.COMMUNITY,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW,
                              label: eH.Z.Messages.OVERVIEW,
                              element: eh.Z,
                              ariaLabel: eH.Z.Messages.OVERVIEW,
                              notice: {
                                  stores: [ec.Z],
                                  element: eh.X
                              },
                              predicate: () => d
                          },
                          {
                              section: ey.pNK.ONBOARDING,
                              label: eH.Z.Messages.ONBOARDING,
                              element: eA.Z,
                              ariaLabel: eH.Z.Messages.ONBOARDING,
                              newIndicatorDismissibleContentTypes: K ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                              notice: {
                                  stores: [e_.Z],
                                  element: eT.Z
                              },
                              predicate: () => C,
                              decoration: eW(a.id, W)
                          },
                          {
                              section: ey.pNK.ANALYTICS,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                              label: eH.Z.Messages.SERVER_INSIGHTS,
                              ariaLabel: eH.Z.Messages.SERVER_INSIGHTS,
                              element: eS.Z,
                              newIndicator: k.Z.hasHotspot(ek.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
                              newIndicatorDismissibleContentTypes: Y ? [l.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
                              predicate: () => p
                          },
                          {
                              section: ey.pNK.DISCOVERY,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                              label: eH.Z.Messages.DISCOVERY,
                              element: ex.Z,
                              notice: {
                                  stores: [ec.Z],
                                  element: ex.s
                              },
                              predicate: () => d,
                              ariaLabel: a.hasFeature(ey.oNc.DISCOVERABLE) ? eH.Z.Messages.DISCOVERY : eH.Z.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
                          },
                          {
                              section: ey.pNK.DISCOVERY_LANDING_PAGE,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                              label: (0, s.jsxs)('div', {
                                  className: eV.landingPageTabLink,
                                  children: [eH.Z.Messages.DISCOVERY_LANDING_PAGE, ' ', (0, s.jsx)(R.Z, {})]
                              }),
                              ariaLabel: eH.Z.Messages.DISCOVERY_LANDING_PAGE,
                              element: ep.Z,
                              notice: {
                                  stores: [ec.Z],
                                  element: ep.J
                              },
                              type: u.bT.CUSTOM,
                              predicate: () => U
                          },
                          {
                              section: ey.pNK.COMMUNITY_WELCOME,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                              label: eH.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
                              ariaLabel: eH.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
                              element: eC.Z,
                              notice: {
                                  stores: [z.Z],
                                  element: q.Z
                              },
                              predicate: () => y
                          }
                      ]
                    : [],
            ee = ei()
                ? [
                      { section: u.ID.DIVIDER },
                      {
                          section: u.ID.HEADER,
                          label: eH.Z.Messages.MONETIZATION
                      },
                      {
                          ...ez,
                          section: ey.pNK.ROLE_SUBSCRIPTIONS,
                          element: P.Z,
                          type: u.bT.CUSTOM,
                          newIndicatorDismissibleContentTypes: (0, G.sO)(a) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                      },
                      {
                          section: ey.pNK.GUILD_PRODUCTS,
                          label: eH.Z.Messages.GUILD_PRODUCTS_TITLE,
                          ariaLabel: eH.Z.Messages.GUILD_PRODUCTS_TITLE,
                          element: Z.Z,
                          predicate: () => (0, j.p)(a.id, 'guild_product_settings_predicate') && (0, b.sy)(a)
                      },
                      {
                          section: ey.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                          impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                          newIndicator: 2022 === new Date().getFullYear(),
                          label: eH.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
                          ariaLabel: eH.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
                          element: B.Z,
                          predicate: () => (0, b.sy)(a)
                      }
                  ]
                : [],
            en = null != et && et,
            es = d && !a.hasFeature(ey.oNc.COMMUNITY),
            ea =
                en || es || d
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: ey.pNK.CLAN,
                              label: eH.Z.Messages.CLAN_SETTINGS,
                              ariaLabel: eH.Z.Messages.CLAN_SETTINGS,
                              onClick() {
                                  (0, H.q4)(
                                      (e) => {
                                          let { closeLayer: t } = e;
                                          return (0, s.jsx)(S.Z, {
                                              onClose: t,
                                              guildId: a.id
                                          });
                                      },
                                      { layerKey: eF.q2 }
                                  ),
                                      (0, c.xf)();
                              },
                              predicate: () => en,
                              icon: null != eK ? (0, s.jsx)(g.KQ, { src: eK }) : null
                          },
                          {
                              section: ey.pNK.COMMUNITY,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                              label: eH.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
                              element: eh.Z,
                              ariaLabel: eH.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
                              newIndicator: null != V && V >= ew.U3 && k.Z.hasHotspot(ek.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                              notice: {
                                  stores: [ec.Z],
                                  element: eh.X
                              },
                              predicate: () => es
                          },
                          {
                              section: ey.pNK.WIDGET,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_WIDGET,
                              label: eH.Z.Messages.WIDGET,
                              element: eB.Z,
                              predicate: () => d
                          },
                          {
                              section: ey.pNK.VANITY_URL,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
                              label: eH.Z.Messages.VANITY_URL,
                              element: eP.Z,
                              notice: {
                                  stores: [ed.Z],
                                  element: eP.T
                              },
                              predicate: () => d
                          },
                          {
                              section: ey.pNK.GUILD_TEMPLATES,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                              label: (0, s.jsx)(eG.Z, { showDirtyIndicator: w }),
                              ariaLabel: eH.Z.Messages.GUILD_TEMPLATES,
                              element: eU.ZP,
                              notice: {
                                  stores: [eU.Sf],
                                  element: eU.Q5
                              },
                              predicate: () => d
                          }
                      ]
                    : [];
        return [
            {
                section: u.ID.HEADER,
                label: eY(a)
            },
            {
                section: ey.pNK.OVERVIEW,
                impressionName: i.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
                label: eH.Z.Messages.OVERVIEW,
                ariaLabel: eH.Z.Messages.OVERVIEW,
                element: eM.Z,
                notice: {
                    stores: [ec.Z],
                    element: eM.O
                }
            },
            ...e,
            ...t,
            ...h,
            ...$,
            ...ee,
            { section: u.ID.DIVIDER },
            {
                section: ey.pNK.GUILD_PREMIUM,
                impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                label: eH.Z.Messages.GUILD_PREMIUM,
                ariaLabel: eH.Z.Messages.GUILD_PREMIUM,
                element: eD.Z,
                className: eV.serverBoostTabItem,
                icon: (0, s.jsx)(ej.Z, { className: eV.icon })
            },
            ...ea,
            {
                section: u.ID.DIVIDER,
                predicate: () => F
            },
            eq
        ];
    }
    return [
        {
            section: u.ID.HEADER,
            label: eY(a)
        },
        {
            section: ey.pNK.OVERVIEW,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
            label: eH.Z.Messages.OVERVIEW,
            ariaLabel: eH.Z.Messages.OVERVIEW,
            element: eM.Z,
            notice: {
                stores: [ec.Z],
                element: eM.O
            }
        },
        {
            section: ey.pNK.ROLES,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
            label: eH.Z.Messages.ROLES,
            element: em.Z,
            type: u.bT.MINIMAL,
            ariaLabel: eH.Z.Messages.GUILD_SETTINGS_ROLE_ICON_SIDEBAR_NEW_ARIA_LABEL,
            notice: {
                stores: [eo.Z],
                element: em._
            },
            predicate: () => I
        },
        {
            section: ey.pNK.EMOJI,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
            label: eH.Z.Messages.EMOJI,
            element: eR.ZP,
            predicate: () => E
        },
        {
            section: ey.pNK.STICKERS,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
            label: eH.Z.Messages.GUILD_SETTINGS_STICKERS,
            ariaLabel: eH.Z.Messages.GUILD_SETTINGS_STICKERS,
            element: eb.Z,
            predicate: () => E
        },
        {
            section: ey.pNK.SOUNDBOARD,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
            label: eH.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
            ariaLabel: eH.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
            element: eZ.Z,
            predicate: () => E
        },
        {
            section: ey.pNK.WIDGET,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_WIDGET,
            label: eH.Z.Messages.WIDGET,
            element: eB.Z,
            predicate: () => d
        },
        {
            section: ey.pNK.GUILD_TEMPLATES,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
            label: (0, s.jsx)(eG.Z, { showDirtyIndicator: w }),
            ariaLabel: eH.Z.Messages.GUILD_TEMPLATES,
            element: eU.ZP,
            notice: {
                stores: [eU.Sf],
                element: eU.Q5
            },
            predicate: () => d
        },
        {
            section: ey.pNK.VANITY_URL,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
            label: eH.Z.Messages.VANITY_URL,
            element: eP.Z,
            notice: {
                stores: [ed.Z],
                element: eP.T
            },
            predicate: () => r
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => d || x
        },
        {
            section: u.ID.HEADER,
            label: eH.Z.Messages.APPS,
            predicate: () => d || x
        },
        {
            section: ey.pNK.INTEGRATIONS,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
            label: eH.Z.Messages.INTEGRATIONS,
            ariaLabel: eH.Z.Messages.INTEGRATIONS,
            element: eL.Z,
            notice: {
                stores: [el.Z, ec.Z],
                element: eL.j
            },
            predicate: () => d || x
        },
        {
            section: ey.pNK.APP_DIRECTORY,
            label: eH.Z.Messages.APP_DIRECTORY,
            ariaLabel: eH.Z.Messages.APP_DIRECTORY,
            onClick() {
                (0, m.goToAppDirectory)({
                    guildId: a.id,
                    entrypoint: {
                        name: T.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
                        guildSettingsSection: J
                    }
                }),
                    (0, c.xf)();
            }
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => d
        },
        {
            section: u.ID.HEADER,
            label: eH.Z.Messages.MODERATION,
            predicate: () => d
        },
        {
            section: ey.pNK.SAFETY,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
            label: eH.Z.Messages.SAFETY_SETUP,
            ariaLabel: eH.Z.Messages.SAFETY_SETUP,
            element: eN.Z,
            newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
            predicate: () => d && a.hasFeature(ey.oNc.COMMUNITY)
        },
        {
            section: ey.pNK.MODERATION,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
            label: eH.Z.Messages.SAFETY_SETUP,
            element: ev.ZP,
            predicate: () => d && !a.hasFeature(ey.oNc.COMMUNITY)
        },
        {
            section: ey.pNK.GUILD_AUTOMOD,
            label: (0, s.jsx)('div', {
                className: eV.landingPageTabLink,
                children: eH.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE
            }),
            ariaLabel: eH.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
            element: f.Z,
            newIndicatorDismissibleContentTypes: null,
            predicate: () => !a.hasFeature(ey.oNc.COMMUNITY) && ((0, L.Nb)(a.id) || (0, L.ze)(a.id))
        },
        {
            section: ey.pNK.AUDIT_LOG,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
            label: eH.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
            element: eu.Z,
            type: u.bT.CUSTOM,
            predicate: () => _
        },
        {
            section: ey.pNK.BANS,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
            label: eH.Z.Messages.BANS,
            element: eg.Z,
            predicate: () => A
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => d || v
        },
        {
            section: u.ID.HEADER,
            label: eH.Z.Messages.COMMUNITY,
            predicate: () => !et && (d || v)
        },
        {
            section: ey.pNK.CLAN,
            label: eH.Z.Messages.CLAN_SETTINGS,
            ariaLabel: eH.Z.Messages.CLAN_SETTINGS,
            onClick() {
                (0, H.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, s.jsx)(S.Z, {
                            onClose: t,
                            guildId: a.id
                        });
                    },
                    { layerKey: eF.q2 }
                ),
                    (0, c.xf)();
            },
            predicate: () => null != et && et,
            icon: null != eK ? (0, s.jsx)(g.KQ, { src: eK }) : null
        },
        {
            section: ey.pNK.COMMUNITY,
            impressionName: a.hasFeature(ey.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
            label: a.hasFeature(ey.oNc.COMMUNITY) ? eH.Z.Messages.OVERVIEW : eH.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
            element: eh.Z,
            ariaLabel: a.hasFeature(ey.oNc.COMMUNITY) ? eH.Z.Messages.OVERVIEW : eH.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
            newIndicator: !a.hasFeature(ey.oNc.COMMUNITY) && null != V && V >= ew.U3 && k.Z.hasHotspot(ek.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
            notice: {
                stores: [ec.Z],
                element: eh.X
            },
            predicate: () => d
        },
        {
            section: ey.pNK.ONBOARDING,
            label: eH.Z.Messages.ONBOARDING,
            element: eA.Z,
            ariaLabel: eH.Z.Messages.ONBOARDING,
            newIndicatorDismissibleContentTypes: K ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
            notice: {
                stores: [e_.Z],
                element: eT.Z
            },
            predicate: () => (0, M.wC)(a.id),
            decoration: eW(a.id, W)
        },
        {
            section: ey.pNK.ANALYTICS,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
            label: eH.Z.Messages.SERVER_INSIGHTS,
            ariaLabel: eH.Z.Messages.SERVER_INSIGHTS,
            element: eS.Z,
            newIndicator: k.Z.hasHotspot(ek.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
            newIndicatorDismissibleContentTypes: Y ? [l.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
            predicate: () => v && a.hasFeature(ey.oNc.COMMUNITY)
        },
        {
            section: ey.pNK.DISCOVERY,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
            label: eH.Z.Messages.DISCOVERY,
            element: ex.Z,
            notice: {
                stores: [ec.Z],
                element: ex.s
            },
            predicate: () => d && a.hasFeature(ey.oNc.COMMUNITY),
            ariaLabel: a.hasFeature(ey.oNc.DISCOVERABLE) ? eH.Z.Messages.DISCOVERY : eH.Z.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
        },
        {
            section: ey.pNK.DISCOVERY_LANDING_PAGE,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
            label: (0, s.jsxs)('div', {
                className: eV.landingPageTabLink,
                children: [eH.Z.Messages.DISCOVERY_LANDING_PAGE, ' ', (0, s.jsx)(R.Z, {})]
            }),
            ariaLabel: eH.Z.Messages.DISCOVERY_LANDING_PAGE,
            element: ep.Z,
            notice: {
                stores: [ec.Z],
                element: ep.J
            },
            type: u.bT.CUSTOM,
            predicate: () => d && (a.hasFeature(ey.oNc.DISCOVERABLE) || !!(null == Q ? void 0 : Q.isPublished))
        },
        {
            section: ey.pNK.COMMUNITY_WELCOME,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
            label: eH.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
            ariaLabel: eH.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
            element: eC.Z,
            notice: {
                stores: [z.Z],
                element: q.Z
            },
            predicate: () => d && a.hasFeature(ey.oNc.COMMUNITY) && !X && !a.hasFeature(ey.oNc.GUILD_SERVER_GUIDE)
        },
        {
            section: u.ID.DIVIDER,
            predicate: ei
        },
        {
            section: u.ID.HEADER,
            label: eH.Z.Messages.MONETIZATION,
            predicate: ei
        },
        {
            ...ez,
            section: ey.pNK.ROLE_SUBSCRIPTIONS,
            element: P.Z,
            type: u.bT.CUSTOM,
            predicate: ei,
            newIndicatorDismissibleContentTypes: (0, G.sO)(a) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        },
        {
            section: ey.pNK.GUILD_PRODUCTS,
            label: eH.Z.Messages.GUILD_PRODUCTS_TITLE,
            ariaLabel: eH.Z.Messages.GUILD_PRODUCTS_TITLE,
            element: Z.Z,
            predicate: () => ei() && (0, j.p)(a.id, 'guild_product_settings_predicate') && (0, b.sy)(a)
        },
        {
            section: ey.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
            impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
            newIndicator: 2022 === new Date().getFullYear(),
            label: eH.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
            ariaLabel: eH.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
            element: B.Z,
            predicate: () => ei() && (0, b.sy)(a)
        },
        { section: u.ID.DIVIDER },
        {
            section: ey.pNK.GUILD_PREMIUM,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
            label: eH.Z.Messages.GUILD_PREMIUM,
            ariaLabel: eH.Z.Messages.GUILD_PREMIUM,
            element: eD.Z,
            className: eV.serverBoostTabItem,
            icon: (0, s.jsx)(ej.Z, { className: eV.icon })
        },
        { section: u.ID.DIVIDER },
        {
            section: u.ID.HEADER,
            label: eH.Z.Messages.USER_MANAGEMENT
        },
        {
            section: ey.pNK.MEMBERS,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
            label: (0, s.jsx)(eO.$, {}),
            ariaLabel: eH.Z.Messages.MEMBERS,
            element: eO.Z,
            type: u.bT.CUSTOM,
            predicate: () => D
        },
        {
            section: ey.pNK.INSTANT_INVITES,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES,
            label: eH.Z.Messages.INVITES,
            element: ef.Z,
            type: u.bT.CUSTOM,
            predicate: () => d
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => F
        },
        eq
    ];
}
function eK(e, t) {
    let n = J.Z.getGuildPermissionProps(e),
        s = (0, V.p)(e.id).length > 0;
    return ez({
        channels: t,
        showDirtyGuildTemplateIndicator: !1,
        ...n,
        canUnlinkChannels: s,
        showAccessRate: !1,
        canAccessClanSettings: n.isGuildAdmin && e.hasFeature(ey.oNc.CLAN),
        welcomeScreenEmpty: K.Z.isEmpty(e.id)
    })
        .filter((e) => {
            let { section: t } = e;
            return t !== u.ID.HEADER && t !== u.ID.DIVIDER;
        })
        .filter((e) => null == e.predicate || e.predicate());
}
function eq(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    I.ZP.trackWithMetadata(ey.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: t,
        destination_pane: e,
        location: n
    });
}
let eX = {
    canManageGuild: !1,
    canManageChannels: !1,
    canManageRoles: !1,
    canManageBans: !1,
    canManageNicknames: !1,
    canManageGuildExpressions: !1,
    canViewAuditLog: !1,
    canManageWebhooks: !1,
    canAccessMembersPage: !1,
    canViewGuildAnalytics: !1,
    isOwner: !1,
    isOwnerWithRequiredMfaLevel: !1,
    isGuildAdmin: !1
};
class eQ extends a.PureComponent {
    componentDidMount() {
        eq(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        es.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            { section: n, isGuildAdmin: s, canManageGuild: a, canManageRoles: i, canManageBans: r, canManageNicknames: l, canManageGuildExpressions: o, canViewAuditLog: d, canManageWebhooks: u, canAccessMembersPage: _, canViewGuildAnalytics: I } = this.props;
        n !== t && eq(n, t), ((!s && !a && !i && !r && !l && !o && !d && !_ && !u) || (!d && n === ey.pNK.AUDIT_LOG) || (!i && n === ey.pNK.ROLES) || (!o && n === ey.pNK.EMOJI) || (!o && n === ey.pNK.STICKERS) || (!o && n === ey.pNK.SOUNDBOARD) || (!r && n === ey.pNK.BANS) || (!I && n === ey.pNK.ANALYTICS) || (!_ && n === ey.pNK.MEMBERS)) && (0, c.xf)();
    }
    render() {
        var e, t;
        let { theme: n, sidebarTheme: a, section: i, guild: r, channels: l, isGuildAdmin: o, canManageGuild: u, canViewAuditLog: _, canManageRoles: I, canManageGuildExpressions: E, canManageWebhooks: T, canUnlinkChannels: m, canManageBans: N, canAccessMembersPage: S, canViewGuildAnalytics: g, isOwner: h, isOwnerWithRequiredMfaLevel: C, showDirtyGuildTemplateIndicator: x, memberCount: p, showAccessRate: R, onboardingStep: L, onboardingEnabled: f, welcomeScreenEmpty: O, guildMetadata: A, canAccessClanSettings: M } = this.props;
        if (null == r) return null;
        let D = ez({
                guild: r,
                channels: l,
                isGuildAdmin: o,
                canManageGuild: u,
                canViewAuditLog: _,
                canManageRoles: I,
                canManageGuildExpressions: E,
                canManageWebhooks: T,
                canUnlinkChannels: m,
                canManageBans: N,
                canAccessMembersPage: S,
                canViewGuildAnalytics: g,
                isOwner: h,
                isOwnerWithRequiredMfaLevel: C,
                showDirtyGuildTemplateIndicator: x,
                memberCount: p,
                showAccessRate: R,
                onboardingStep: L,
                onboardingEnabled: f,
                welcomeScreenEmpty: O,
                guildMetadata: A,
                section: i,
                canAccessClanSettings: M
            }),
            v = (null === (t = D.find((e) => e.section === i)) || void 0 === t ? void 0 : null === (e = t.predicate) || void 0 === e ? void 0 : e.call(t)) !== !1;
        return (0, s.jsxs)('div', {
            children: [
                (0, s.jsx)(d.ZP, {
                    theme: n,
                    sidebarTheme: a,
                    section: v && null != i ? i : ey.pNK.OVERVIEW,
                    onSetSection: es.Z.setSection,
                    onClose: c.xf,
                    title: eY(r),
                    sections: D
                }),
                (0, s.jsx)(w.d, { guildId: r.id })
            ]
        });
    }
}
function eJ() {
    var e;
    let { guild: t, section: n, analyticsLocation: i, guildMetadata: l, isGuildMetadataLoaded: o } = (0, r.cj)([ec.Z], () => ec.Z.getProps()),
        { analyticsLocations: c } = (0, E.ZP)(_.Z.GUILD_SETTINGS),
        d = (0, r.e7)([Y.Z], () => Y.Z.theme),
        u = (0, r.e7)([Y.Z], () => (Y.Z.darkSidebar ? ey.BRd.DARK : void 0)),
        I = (0, r.e7)([X.ZP], () => (null != t ? X.ZP.getChannels(t.id).SELECTABLE : null), [t]),
        T = (0, r.cj)([J.Z], () => (null != t ? J.Z.getGuildPermissionProps(t) : eX)),
        m = null == t ? void 0 : t.id,
        N = (0, r.e7)([J.Z], () => null != t && J.Z.canAccessGuildSettings(t)),
        S = null != t && (0, et.Fv)(t.id),
        g = S || N,
        h = S || T.canViewGuildAnalytics,
        { shouldFetchMemberInsights: C, hasAccessRate: p } = (0, r.cj)([ei.Z], () => ({
            shouldFetchMemberInsights: null != t && ei.Z.shouldFetchMemberInsights(t.id),
            hasAccessRate: null != t && ei.Z.getMemberInsights(t.id).hasAccessRate
        }));
    a.useEffect(() => {
        !o && null != m && (0, x.aC)(m);
    }, [o, m]),
        a.useEffect(() => {
            g && h && C && null != m && (0, ea.r2)(m);
        }, [g, h, C, m]);
    let R = null !== (e = null == t ? void 0 : t.hasFeature(ey.oNc.COMMUNITY)) && void 0 !== e && e;
    a.useEffect(() => {
        null != m && R && ((0, O.eM)(m), (0, W.RM)(m));
    }, [m, R]);
    let { homeSettingsEnabled: L } = (0, v.kZ)(null != m ? m : ey.lds);
    a.useEffect(() => {
        null != m && L && (0, D.cP)(m);
    }, [L, m]);
    let { showAccessRate: f } = (0, et.eA)(null == t ? void 0 : t.id, !p || !h || !g),
        M = T.isGuildAdmin && (null == t ? void 0 : t.hasFeature(ey.oNc.CLAN)),
        j = (0, r.e7)(
            [F.Z],
            () => {
                var e;
                return (null == t ? void 0 : t.id) != null && (null === (e = F.Z.getForGuild(t.id)) || void 0 === e ? void 0 : e.isDirty) === !0;
            },
            [t]
        ),
        Z = (0, r.e7)([Q.Z], () => Q.Z.getMemberCount(null == t ? void 0 : t.id), [t]);
    a.useEffect(() => {
        null != m && T.canManageGuild && y.Z.loadTemplatesForGuild(m);
    }, [m, T.canManageGuild]),
        a.useEffect(() => {
            !g && es.Z.close();
        }, [g]);
    let b = (0, r.e7)([e_.Z], () => e_.Z.getCurrentPage()),
        U = (0, r.e7)([A.Z], () => null != m && A.Z.getEnabled(m)),
        G = (0, r.e7)([K.Z], () => null != m && K.Z.isEmpty(m)),
        P = (0, V.F)(m).length > 0;
    return (0, s.jsx)(E.Gt, {
        value: c,
        children: (0, s.jsx)(eQ, {
            guild: t,
            section: n,
            theme: d,
            sidebarTheme: u,
            channels: I,
            showDirtyGuildTemplateIndicator: j,
            analyticsLocation: i,
            memberCount: Z,
            ...T,
            canUnlinkChannels: P,
            canViewGuildAnalytics: h,
            showAccessRate: f,
            onboardingStep: b,
            onboardingEnabled: U,
            welcomeScreenEmpty: G,
            guildMetadata: l,
            canAccessClanSettings: M
        })
    });
}
