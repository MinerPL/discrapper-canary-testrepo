n(47120);
var s = n(735250),
  a = n(470079),
  i = n(338545),
  r = n(442837),
  l = n(215569),
  o = n(481060),
  c = n(224706),
  d = n(425493),
  u = n(852860),
  _ = n(493544),
  I = n(585483),
  E = n(931240),
  T = n(970606),
  m = n(389134),
  N = n(432632),
  S = n(35313),
  h = n(94963),
  g = n(745628),
  C = n(950279),
  x = n(796918),
  p = n(513532),
  R = n(741595),
  f = n(974842),
  L = n(359380),
  O = n(308083),
  A = n(981631),
  M = n(231338),
  D = n(689938),
  v = n(867716);
let j = e => [{
  section: _.ID.HEADER,
  label: D.Z.Messages.CLAN_SETTINGS_BASIC_INFO
},
{
  section: O.Wy.GAMES,
  label: D.Z.Messages.CLAN_SETTTINGS_SELECT_GAMES,
  hasError: (null == e ? void 0 : e.gameApplicationIds) != null
},
{
  section: O.Wy.PLAYSTYLE,
  label: D.Z.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE,
  hasError: (null == e ? void 0 : e.playstyle) != null
},
{
  section: _.ID.DIVIDER
},
{
  section: _.ID.HEADER,
  label: D.Z.Messages.CLAN_SETTINGS_PERSONALITY_INFO
},
{
  section: O.Wy.UTILITY_TRAITS,
  label: D.Z.Messages.CLAN_SETTINGS_SELECT_TRAITS
},
{
  section: O.Wy.INTERESTS,
  label: D.Z.Messages.CLAN_SETTINGS_SELECT_INTERESTS,
  hasError: (null == e ? void 0 : e.interests) != null
},
{
  section: O.Wy.DESCRIPTION,
  label: D.Z.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION,
  hasError: (null == e ? void 0 : e.description) != null || (null == e ? void 0 : e.wildcardDescriptors) != null
},
{
  section: _.ID.DIVIDER
},
{
  section: _.ID.HEADER,
  label: D.Z.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
},
{
  section: O.Wy.CUSTOMIZE_TAG_BADGE,
  label: D.Z.Messages.CLAN_SETTINGS_CLAN_BADGE,
  hasError: (null == e ? void 0 : e.tag) != null || (null == e ? void 0 : e.badgeKind) != null || (null == e ? void 0 : e.badgePrimaryColor) != null || (null == e ? void 0 : e.badgeSecondaryColor) != null
},
{
  section: O.Wy.CUSTOMIZE_BANNER,
  label: D.Z.Messages.CLAN_SETTINGS_CLAN_PROFILE,
  hasError: (null == e ? void 0 : e.banner) != null || (null == e ? void 0 : e.brandPrimaryColor) != null || (null == e ? void 0 : e.brandSecondaryColor) != null
},
{
  section: _.ID.DIVIDER
},
{
  section: O.Wy.MEMBER_APPLICATION,
  label: D.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP,
  hasError: (null == e ? void 0 : e.verificationForm) != null
},
{
  section: _.ID.DIVIDER
},
{
  section: _.ID.CUSTOM,
  label: D.Z.Messages.CLAN_SETTINGS_DISABLE_CLAN,
  element: Z
}
  ],
  Z = e => {
let {
  guildId: t,
  onClose: i,
  dirty: r
} = e, [l, c] = a.useState(!1), d = async () => {
  c(!0);
  try {
    await (0, E.nr)(t), i();
  } catch (e) {
    throw c(!1), e;
  }
};
return (0, s.jsxs)(o.TabBar.Item, {
  selectedItem: !1,
  className: v.deleteItem,
  'aria-label': D.Z.Messages.CLAN_SETTINGS_DISABLE_CLAN,
  onClick: () => {
    if (r) {
      I.S.dispatch(A.CkL.EMPHASIZE_NOTICE);
      return;
    }
    (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: e
      } = await Promise.resolve().then(n.bind(n, 481060));
      return t => (0, s.jsx)(e, {
        ...t,
        header: D.Z.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_TITLE,
        confirmText: D.Z.Messages.CONFIRM,
        cancelText: D.Z.Messages.CANCEL,
        loading: l,
        onConfirm: d,
        children: (0, s.jsx)(o.Text, {
          variant: 'text-md/normal',
          children: D.Z.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_BODY
        })
      });
    });
  },
  children: [
    (0, s.jsx)(o.TrashIcon, {
      size: 'xs',
      color: 'currentColor',
      className: v.statusDanger
    }),
    (0, s.jsx)(o.Text, {
      variant: 'text-md/medium',
      color: 'status-danger',
      children: D.Z.Messages.CLAN_SETTINGS_DISABLE_CLAN
    })
  ]
});
  },
  b = e => {
let {
  isErrorVisible: t
} = e, n = (0, o.useToken)(o.tokens.colors.HEADER_PRIMARY, M.BR.DARK), a = (0, o.useToken)(o.tokens.colors.TEXT_MUTED, M.BR.DARK);
return t ? (0, s.jsxs)('div', {
  className: v.tooltipContents,
  children: [
    (0, s.jsx)(o.WarningIcon, {
      size: 'xs',
      color: 'currentColor',
      className: v.errorIconTooltip
    }),
    (0, s.jsxs)('div', {
      children: [
        (0, s.jsx)(o.Text, {
          variant: 'text-sm/medium',
          style: {
            color: n.hex()
          },
          children: D.Z.Messages.CLAN_SUBMIT_ERROR_TITLE
        }),
        (0, s.jsx)(o.Text, {
          variant: 'text-xs/normal',
          style: {
            color: a.hex()
          },
          children: D.Z.Messages.CLAN_SUBMIT_ERROR_SUBTITLE
        })
      ]
    })
  ]
}) : null;
  };
t.Z = e => {
  let {
guildId: t,
onClose: n
  } = e, [M, Z] = a.useState(O.Wy.GAMES), {
initialSettings: U,
settings: G,
errors: P,
submitting: B,
dirty: y
  } = (0, r.cj)([m.Z], () => {
var e;
let t = m.Z.getState();
return {
  initialSettings: t.initialSettings,
  settings: t.settings,
  errors: null !== (e = t.errors) && void 0 !== e ? e : {},
  submitting: t.submitting,
  dirty: t.dirty
};
  }), F = a.useCallback(e => {
y ? I.S.dispatch(A.CkL.EMPHASIZE_NOTICE) : Z(e);
  }, [y]), w = (0, N.N)(t, 'ClanSettingsModal'), k = (0, S.f)(), H = a.useCallback(e => {
'Escape' === e.key && (e.stopPropagation(), n());
  }, [n]);
  a.useEffect(() => {
(0, T.GO)(t, (0, T.Qh)(M));
  }, [
t,
M
  ]), a.useEffect(() => (window.addEventListener('keydown', H), () => {
window.removeEventListener('keydown', H);
  }), [H]), a.useEffect(() => {
c.Z.getDetectableGames();
  }, []), a.useEffect(() => {
(0, E.aH)(t);
  }, [t]);
  let V = a.useCallback(e => (0, E.mf)(t, {
  gameApplicationIds: e
}), [t]),
Y = a.useCallback(e => (0, E.mf)(t, {
  playstyle: e
}), [t]),
W = a.useCallback(e => (0, E.mf)(t, {
  interests: e
}), [t]),
z = a.useCallback(e => (0, E.mf)(t, e), [t]),
K = a.useCallback(() => {
  y ? I.S.dispatch(A.CkL.EMPHASIZE_NOTICE) : n();
}, [
  y,
  n
]),
q = async () => {
  await (0, E.Ii)(t, G), (0, T.Af)(t);
}, X = a.useMemo(() => null != P && Object.values(P).some(e => null != e), [P]);
  if (null == G)
return null;
  let Q = j(P);
  return (0, s.jsxs)(i.animated.div, {
style: k,
className: v.modal,
children: [
  (0, s.jsx)(o.Tooltip, {
    color: o.Tooltip.Colors.GREY,
    tooltipClassName: v.tooltip,
    text: (0, s.jsx)(b, {
      isErrorVisible: X
    }),
    position: 'left',
    'aria-label': null != X ? D.Z.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
    shouldShow: X,
    forceOpen: X,
    children: e => (0, s.jsx)(d.Z, {
      ...e,
      className: v.closeButton,
      closeAction: K,
      keybind: 'ESC'
    })
  }),
  (0, s.jsxs)('div', {
    className: v.modalContents,
    children: [
      (0, s.jsx)('div', {
        className: v.sidebarWrapper,
        children: (0, s.jsx)(o.TabBar, {
          className: v.sidebar,
          selectedItem: M,
          onItemSelect: F,
          orientation: 'vertical',
          children: Q.map((e, a) => {
            switch (e.section) {
              case _.ID.HEADER:
                return (0, s.jsx)(o.TabBar.Header, {
                  children: e.label
                }, 'header-'.concat(a));
              case _.ID.DIVIDER:
                return (0, s.jsx)(o.TabBar.Separator, {}, 'divider-'.concat(a));
              case _.ID.CUSTOM:
                let i = e.element;
                return (0, s.jsx)(i, {
                  dirty: y,
                  guildId: t,
                  onClose: n
                }, e.label);
              default:
                return (0, s.jsx)(o.TabBar.Item, {
                  className: v.settingsTab,
                  'aria-label': e.label,
                  id: e.section,
                  children: (0, s.jsxs)(s.Fragment, {
                    children: [
                      e.label,
                      e.hasError && (0, s.jsx)(o.Tooltip, {
                        color: o.Tooltip.Colors.GREY,
                        position: 'right',
                        text: D.Z.Messages.CLAN_SUBMIT_ERROR_TITLE,
                        children: e => (0, s.jsx)(o.WarningIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          ...e,
                          className: v.errorIcon
                        })
                      })
                    ]
                  })
                }, e.section);
            }
          })
        })
      }),
      (0, s.jsxs)('div', {
        className: v.mainContent,
        children: [
          (0, s.jsx)(o.ScrollerThin, {
            children: (() => {
              switch (M) {
                case O.Wy.GAMES:
                  var e;
                  return (0, s.jsx)(C.Z, {
                    title: D.Z.Messages.CLAN_SETUP_GAMES_TITLE,
                    description: D.Z.Messages.CLAN_SETUP_GAMES_SUBTITLE,
                    handleUpdate: V,
                    gameApplicationIds: null !== (e = G.gameApplicationIds) && void 0 !== e ? e : new Set(),
                    requiredGameId: null != w ? w : void 0,
                    error: P.gameApplicationIds,
                    inSettings: !0
                  });
                case O.Wy.PLAYSTYLE:
                  return (0, s.jsx)(R.Z, {
                    title: D.Z.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
                    description: D.Z.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
                    handleUpdate: Y,
                    playstyle: G.playstyle,
                    error: P.playstyle
                  });
                case O.Wy.UTILITY_TRAITS:
                  return (0, s.jsx)(L.Z, {
                    guildId: t,
                    title: D.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
                    description: D.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
                    handleUpdate: W,
                    progress: G,
                    requiredGameId: null != w ? w : void 0
                  });
                case O.Wy.INTERESTS:
                  return (0, s.jsx)(x.Z, {
                    guildId: t,
                    handleUpdate: z,
                    progress: G,
                    error: P.interests
                  });
                case O.Wy.DESCRIPTION:
                  return (0, s.jsx)(g.Z, {
                    guildId: t,
                    handleUpdate: z,
                    progress: G,
                    errors: P
                  });
                case O.Wy.CUSTOMIZE_TAG_BADGE:
                  return (0, s.jsx)(f.Z, {
                    handleUpdate: z,
                    tag: G.tag,
                    error: P.tag,
                    badge: G.badgeKind,
                    primaryColor: G.badgePrimaryColor,
                    secondaryColor: G.badgeSecondaryColor,
                    furthestStep: O.Wy.CUSTOMIZE_TAG_BADGE,
                    inSettings: !0
                  });
                case O.Wy.MEMBER_APPLICATION:
                  return (0, s.jsx)(p.Z, {
                    guildId: t,
                    inSettings: !0,
                    error: P.verificationForm
                  });
                case O.Wy.CUSTOMIZE_BANNER:
                  return (0, s.jsx)(h.Z, {
                    guildId: t,
                    handleUpdate: z,
                    progress: G
                  });
                default:
                  return null;
              }
            })()
          }),
          (0, s.jsx)(l.W, {
            component: 'div',
            children: y && (0, s.jsx)(o.SlideIn, {
              className: v.noticeRegion,
              children: (0, s.jsx)(u.Z, {
                onSave: q,
                submitting: B,
                onReset: () => {
                  (0, E.mf)(t, U);
                },
                errorMessage: Object.values(P).find(e => null != e)
              })
            })
          })
        ]
      })
    ]
  })
]
  });
};