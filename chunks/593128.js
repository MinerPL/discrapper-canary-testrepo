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
  N = n(35313),
  S = n(94963),
  h = n(745628),
  g = n(950279),
  C = n(796918),
  x = n(513532),
  p = n(741595),
  R = n(974842),
  f = n(359380),
  L = n(308083),
  O = n(981631),
  A = n(231338),
  M = n(689938),
  D = n(867716);
let v = e => [{
  section: _.ID.HEADER,
  label: M.Z.Messages.CLAN_SETTINGS_BASIC_INFO
},
{
  section: L.Wy.GAMES,
  label: M.Z.Messages.CLAN_SETTTINGS_SELECT_GAMES,
  hasError: (null == e ? void 0 : e.gameApplicationIds) != null
},
{
  section: L.Wy.PLAYSTYLE,
  label: M.Z.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE,
  hasError: (null == e ? void 0 : e.playstyle) != null
},
{
  section: _.ID.DIVIDER
},
{
  section: _.ID.HEADER,
  label: M.Z.Messages.CLAN_SETTINGS_PERSONALITY_INFO
},
{
  section: L.Wy.UTILITY_TRAITS,
  label: M.Z.Messages.CLAN_SETTINGS_SELECT_TRAITS
},
{
  section: L.Wy.INTERESTS,
  label: M.Z.Messages.CLAN_SETTINGS_SELECT_INTERESTS,
  hasError: (null == e ? void 0 : e.interests) != null
},
{
  section: L.Wy.DESCRIPTION,
  label: M.Z.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION,
  hasError: (null == e ? void 0 : e.description) != null || (null == e ? void 0 : e.wildcardDescriptors) != null
},
{
  section: _.ID.DIVIDER
},
{
  section: _.ID.HEADER,
  label: M.Z.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
},
{
  section: L.Wy.CUSTOMIZE_TAG_BADGE,
  label: M.Z.Messages.CLAN_SETTINGS_CLAN_BADGE,
  hasError: (null == e ? void 0 : e.tag) != null || (null == e ? void 0 : e.badgeKind) != null || (null == e ? void 0 : e.badgePrimaryColor) != null || (null == e ? void 0 : e.badgeSecondaryColor) != null
},
{
  section: L.Wy.CUSTOMIZE_BANNER,
  label: M.Z.Messages.CLAN_SETTINGS_CLAN_PROFILE,
  hasError: (null == e ? void 0 : e.banner) != null || (null == e ? void 0 : e.brandPrimaryColor) != null || (null == e ? void 0 : e.brandSecondaryColor) != null
},
{
  section: _.ID.DIVIDER
},
{
  section: L.Wy.MEMBER_APPLICATION,
  label: M.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP,
  hasError: (null == e ? void 0 : e.verificationForm) != null
},
{
  section: _.ID.DIVIDER
},
{
  section: _.ID.CUSTOM,
  label: M.Z.Messages.CLAN_SETTINGS_DISABLE_CLAN,
  element: j
}
  ],
  j = e => {
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
  className: D.deleteItem,
  'aria-label': M.Z.Messages.CLAN_SETTINGS_DISABLE_CLAN,
  onClick: () => {
    if (r) {
      I.S.dispatch(O.CkL.EMPHASIZE_NOTICE);
      return;
    }
    (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: e
      } = await Promise.resolve().then(n.bind(n, 481060));
      return t => (0, s.jsx)(e, {
        ...t,
        header: M.Z.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_TITLE,
        confirmText: M.Z.Messages.CONFIRM,
        cancelText: M.Z.Messages.CANCEL,
        loading: l,
        onConfirm: d,
        children: (0, s.jsx)(o.Text, {
          variant: 'text-md/normal',
          children: M.Z.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_BODY
        })
      });
    });
  },
  children: [
    (0, s.jsx)(o.TrashIcon, {
      size: 'xs',
      color: 'currentColor',
      className: D.statusDanger
    }),
    (0, s.jsx)(o.Text, {
      variant: 'text-md/medium',
      color: 'status-danger',
      children: M.Z.Messages.CLAN_SETTINGS_DISABLE_CLAN
    })
  ]
});
  },
  Z = e => {
let {
  isErrorVisible: t
} = e, n = (0, o.useToken)(o.tokens.colors.HEADER_PRIMARY, A.BR.DARK), a = (0, o.useToken)(o.tokens.colors.TEXT_MUTED, A.BR.DARK);
return t ? (0, s.jsxs)('div', {
  className: D.tooltipContents,
  children: [
    (0, s.jsx)(o.WarningIcon, {
      size: 'xs',
      color: 'currentColor',
      className: D.errorIconTooltip
    }),
    (0, s.jsxs)('div', {
      children: [
        (0, s.jsx)(o.Text, {
          variant: 'text-sm/medium',
          style: {
            color: n.hex()
          },
          children: M.Z.Messages.CLAN_SUBMIT_ERROR_TITLE
        }),
        (0, s.jsx)(o.Text, {
          variant: 'text-xs/normal',
          style: {
            color: a.hex()
          },
          children: M.Z.Messages.CLAN_SUBMIT_ERROR_SUBTITLE
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
  } = e, [A, j] = a.useState(L.Wy.GAMES), {
initialSettings: b,
settings: U,
errors: G,
submitting: P,
dirty: B
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
  }), y = a.useCallback(e => {
B ? I.S.dispatch(O.CkL.EMPHASIZE_NOTICE) : j(e);
  }, [B]), F = (0, N.f)(), k = a.useCallback(e => {
'Escape' === e.key && (e.stopPropagation(), n());
  }, [n]);
  a.useEffect(() => {
(0, T.GO)(t, (0, T.Qh)(A));
  }, [
t,
A
  ]), a.useEffect(() => (window.addEventListener('keydown', k), () => {
window.removeEventListener('keydown', k);
  }), [k]), a.useEffect(() => {
c.Z.getDetectableGames();
  }, []), a.useEffect(() => {
(0, E.aH)(t);
  }, [t]);
  let w = a.useCallback(e => (0, E.mf)(t, {
  gameApplicationIds: e
}), [t]),
H = a.useCallback(e => (0, E.mf)(t, {
  playstyle: e
}), [t]),
V = a.useCallback(e => (0, E.mf)(t, {
  interests: e
}), [t]),
Y = a.useCallback(e => (0, E.mf)(t, e), [t]),
W = a.useCallback(() => {
  B ? I.S.dispatch(O.CkL.EMPHASIZE_NOTICE) : n();
}, [
  B,
  n
]),
z = async () => {
  await (0, E.Ii)(t, U), (0, T.Af)(t);
}, K = a.useMemo(() => null != G && Object.values(G).some(e => null != e), [G]);
  if (null == U)
return null;
  let q = v(G);
  return (0, s.jsxs)(i.animated.div, {
style: F,
className: D.modal,
children: [
  (0, s.jsx)(o.Tooltip, {
    color: o.Tooltip.Colors.GREY,
    tooltipClassName: D.tooltip,
    text: (0, s.jsx)(Z, {
      isErrorVisible: K
    }),
    position: 'left',
    'aria-label': null != K ? M.Z.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
    shouldShow: K,
    forceOpen: K,
    children: e => (0, s.jsx)(d.Z, {
      ...e,
      className: D.closeButton,
      closeAction: W,
      keybind: 'ESC'
    })
  }),
  (0, s.jsxs)('div', {
    className: D.modalContents,
    children: [
      (0, s.jsx)('div', {
        className: D.sidebarWrapper,
        children: (0, s.jsx)(o.TabBar, {
          className: D.sidebar,
          selectedItem: A,
          onItemSelect: y,
          orientation: 'vertical',
          children: q.map((e, a) => {
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
                  dirty: B,
                  guildId: t,
                  onClose: n
                }, e.label);
              default:
                return (0, s.jsx)(o.TabBar.Item, {
                  className: D.settingsTab,
                  'aria-label': e.label,
                  id: e.section,
                  children: (0, s.jsxs)(s.Fragment, {
                    children: [
                      e.label,
                      e.hasError && (0, s.jsx)(o.Tooltip, {
                        color: o.Tooltip.Colors.GREY,
                        position: 'right',
                        text: M.Z.Messages.CLAN_SUBMIT_ERROR_TITLE,
                        children: e => (0, s.jsx)(o.WarningIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          ...e,
                          className: D.errorIcon
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
        className: D.mainContent,
        children: [
          (0, s.jsx)(o.ScrollerThin, {
            children: (() => {
              switch (A) {
                case L.Wy.GAMES:
                  var e;
                  return (0, s.jsx)(g.Z, {
                    title: M.Z.Messages.CLAN_SETUP_GAMES_TITLE,
                    description: M.Z.Messages.CLAN_SETUP_GAMES_SUBTITLE,
                    onUpdateGames: w,
                    gameApplicationIds: null !== (e = U.gameApplicationIds) && void 0 !== e ? e : new Set(),
                    error: G.gameApplicationIds
                  });
                case L.Wy.PLAYSTYLE:
                  return (0, s.jsx)(p.Z, {
                    title: M.Z.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
                    description: M.Z.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
                    onUpdatePlaystyle: H,
                    playstyle: U.playstyle,
                    error: G.playstyle
                  });
                case L.Wy.UTILITY_TRAITS:
                  return (0, s.jsx)(f.Z, {
                    guildId: t,
                    title: M.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
                    description: M.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
                    onUpdateTraits: V,
                    progress: U
                  });
                case L.Wy.INTERESTS:
                  return (0, s.jsx)(C.Z, {
                    guildId: t,
                    handleUpdate: Y,
                    progress: U,
                    error: G.interests
                  });
                case L.Wy.DESCRIPTION:
                  return (0, s.jsx)(h.Z, {
                    guildId: t,
                    handleUpdate: Y,
                    progress: U,
                    errors: G
                  });
                case L.Wy.CUSTOMIZE_TAG_BADGE:
                  return (0, s.jsx)(R.Z, {
                    handleUpdate: Y,
                    tag: U.tag,
                    error: G.tag,
                    badge: U.badgeKind,
                    primaryColor: U.badgePrimaryColor,
                    secondaryColor: U.badgeSecondaryColor,
                    furthestStep: L.Wy.CUSTOMIZE_TAG_BADGE,
                    inSettings: !0
                  });
                case L.Wy.MEMBER_APPLICATION:
                  return (0, s.jsx)(x.Z, {
                    guildId: t,
                    inSettings: !0,
                    error: G.verificationForm
                  });
                case L.Wy.CUSTOMIZE_BANNER:
                  return (0, s.jsx)(S.Z, {
                    guildId: t,
                    handleUpdate: Y,
                    progress: U
                  });
                default:
                  return null;
              }
            })()
          }),
          (0, s.jsx)(l.W, {
            component: 'div',
            children: B && (0, s.jsx)(o.SlideIn, {
              className: D.noticeRegion,
              children: (0, s.jsx)(u.Z, {
                onSave: z,
                submitting: P,
                onReset: () => {
                  (0, E.mf)(t, b);
                },
                errorMessage: Object.values(G).find(e => null != e)
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