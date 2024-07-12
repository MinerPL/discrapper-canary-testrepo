t.d(n, {
  Z: function() {
return Z;
  },
  d: function() {
return D;
  }
});
var i = t(735250);
t(470079);
var r = t(120356),
  o = t.n(r),
  l = t(442837),
  u = t(692547),
  s = t(481060),
  a = t(549817),
  c = t(819553),
  d = t(17181),
  _ = t(303737),
  f = t(434404),
  E = t(703656),
  I = t(944486),
  g = t(914010),
  p = t(671533),
  S = t(259580),
  C = t(358085),
  m = t(962086),
  T = t(160404),
  h = t(889695),
  A = t(981631),
  N = t(176505),
  v = t(302463),
  R = t(293810),
  L = t(689938),
  b = t(591756);

function O(e) {
  let {
className: n,
onClick: t,
children: r
  } = e;
  return (0, i.jsx)(s.Button, {
className: o()(b.button, n),
innerClassName: b.buttonInner,
look: s.Button.Looks.OUTLINED,
color: s.Button.Colors.WHITE,
size: s.Button.Sizes.NONE,
onClick: t,
children: r
  });
}

function M(e) {
  let {
onClick: n
  } = e;
  return (0, i.jsx)(O, {
onClick: n,
children: L.Z.Messages.DISABLE
  });
}

function Z() {
  let e = (0, l.e7)([g.Z], () => g.Z.getGuildId()),
n = (0, l.e7)([I.Z], () => I.Z.getChannelId(e)),
{
  viewingRoles: t,
  backNavigationSection: r,
  isFullServerPreview: o,
  isServerShopPreview: C
} = (0, l.cj)([T.Z], () => ({
  viewingRoles: null != e ? T.Z.getViewingRoles(e) : null,
  backNavigationSection: T.Z.getBackNavigationSection(e),
  isFullServerPreview: null != e && T.Z.isFullServerPreview(e),
  isServerShopPreview: null != e && T.Z.isViewingServerShop(e)
}));
  if (null == t || null == e)
return null;
  let Z = function(e) {
  switch (e) {
    case A.pNK.INTEGRATIONS:
      return L.Z.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
    case A.pNK.ROLE_SUBSCRIPTIONS:
      return L.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
    case A.pNK.ONBOARDING:
      return L.Z.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
    default:
      return L.Z.Messages.VIEWING_AS_ROLES_BACK;
  }
}(r),
D = r === A.pNK.ROLE_SUBSCRIPTIONS ? L.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : L.Z.Messages.VIEWING_AS_ROLES_SELECT,
U = n === N.oC.GUILD_ONBOARDING,
P = n => {
  let {
    backToSettings: t
  } = n;
  null != e && (T.Z.isFullServerPreview(e) && (0, E.uL)(A.Z5c.CHANNEL(e)), c.ZP.shouldShowOnboarding(e) && (a.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, m.mL)(e), t && f.Z.open(e, r), r === A.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e));
};
  return (0, i.jsxs)(s.Notice, {
color: s.NoticeColors.BRAND,
className: b.notice,
children: [
  (0, i.jsxs)(O, {
    onClick: () => P({
      backToSettings: !0
    }),
    className: b.backButton,
    children: [
      (0, i.jsx)(p.Z, {
        width: 16,
        height: 16,
        direction: p.Z.Directions.LEFT,
        className: b.backArrow
      }),
      Z
    ]
  }),
  U && o ? (0, i.jsx)('div', {
    className: b.noticeContents,
    children: (0, i.jsx)('div', {
      className: b.noticeText,
      children: L.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION
    })
  }) : (0, i.jsxs)('div', {
    className: b.noticeContents,
    children: [
      (0, i.jsx)('div', {
        className: b.noticeText,
        children: o ? L.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({
          numRoles: Object.keys(t).length
        }) : L.Z.Messages.VIEWING_AS_ROLES.format({
          numRoles: Object.keys(t).length
        })
      }),
      (0, i.jsx)(s.Popout, {
        position: 'bottom',
        renderPopout: () => (0, i.jsx)(h.Z, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: n
          } = e;
          return (0, i.jsxs)(O, {
            onClick: n,
            children: [
              D,
              (0, i.jsx)(S.Z, {
                width: 16,
                height: 16,
                direction: S.Z.Directions.DOWN,
                className: b.selectCaret
              })
            ]
          });
        }
      }),
      o && (0, i.jsx)(s.TooltipContainer, {
        className: b.previewWarning,
        text: L.Z.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
        children: (0, i.jsx)(s.CircleExclamationPointIcon, {
          size: 'xs',
          color: u.Z.unsafe_rawColors.YELLOW_300.css
        })
      }),
      C && (0, i.jsx)(s.TooltipContainer, {
        className: b.previewWarning,
        text: L.Z.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
          maxTiers: R.fF,
          maxProducts: v.dD
        }),
        children: (0, i.jsx)(s.CircleExclamationPointIcon, {
          size: 'xs',
          color: u.Z.unsafe_rawColors.YELLOW_300.css
        })
      })
    ]
  }),
  o || r === A.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(M, {
    onClick: () => P({
      backToSettings: !1
    })
  })
]
  });
}

function D(e) {
  let {
guildId: n
  } = e;
  return (0, l.e7)([T.Z], () => T.Z.isViewingRoles(n)) ? (0, i.jsx)('div', {
className: o()(b.settingsWrapper, {
  [b.windows]: (0, C.isWindows)(),
  [b.osx]: (0, C.isMac)()
}),
children: (0, i.jsx)(Z, {})
  }) : null;
}