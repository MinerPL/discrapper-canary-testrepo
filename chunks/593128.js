"use strict";
t(47120);
var n = t(735250),
  i = t(470079),
  l = t(920906),
  a = t(442837),
  r = t(215569),
  o = t(481060),
  c = t(224706),
  d = t(425493),
  u = t(852860),
  E = t(493544),
  _ = t(740727),
  I = t(729017),
  T = t(585483),
  N = t(931240),
  m = t(970606),
  S = t(389134),
  h = t(432632),
  g = t(35313),
  x = t(94963),
  C = t(745628),
  R = t(950279),
  L = t(796918),
  O = t(513532),
  A = t(741595),
  p = t(974842),
  M = t(359380),
  f = t(308083),
  v = t(981631),
  D = t(231338),
  Z = t(689938),
  j = t(943303);
let U = e => [{
    section: E.ID.HEADER,
    label: Z.Z.Messages.CLAN_SETTINGS_BASIC_INFO
  }, {
    section: f.Wy.GAMES,
    label: Z.Z.Messages.CLAN_SETTTINGS_SELECT_GAMES,
    hasError: (null == e ? void 0 : e.gameApplicationIds) != null
  }, {
    section: f.Wy.PLAYSTYLE,
    label: Z.Z.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE,
    hasError: (null == e ? void 0 : e.playstyle) != null
  }, {
    section: E.ID.DIVIDER
  }, {
    section: E.ID.HEADER,
    label: Z.Z.Messages.CLAN_SETTINGS_PERSONALITY_INFO
  }, {
    section: f.Wy.UTILITY_TRAITS,
    label: Z.Z.Messages.CLAN_SETTINGS_SELECT_TRAITS
  }, {
    section: f.Wy.INTERESTS,
    label: Z.Z.Messages.CLAN_SETTINGS_SELECT_INTERESTS,
    hasError: (null == e ? void 0 : e.interests) != null
  }, {
    section: f.Wy.DESCRIPTION,
    label: Z.Z.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION,
    hasError: (null == e ? void 0 : e.description) != null || (null == e ? void 0 : e.wildcardDescriptors) != null
  }, {
    section: E.ID.DIVIDER
  }, {
    section: E.ID.HEADER,
    label: Z.Z.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
  }, {
    section: f.Wy.CUSTOMIZE_TAG_BADGE,
    label: Z.Z.Messages.CLAN_SETTINGS_CLAN_BADGE,
    hasError: (null == e ? void 0 : e.tag) != null || (null == e ? void 0 : e.badgeKind) != null || (null == e ? void 0 : e.badgePrimaryColor) != null || (null == e ? void 0 : e.badgeSecondaryColor) != null
  }, {
    section: f.Wy.CUSTOMIZE_BANNER,
    label: Z.Z.Messages.CLAN_SETTINGS_CLAN_PROFILE,
    hasError: (null == e ? void 0 : e.banner) != null || (null == e ? void 0 : e.brandPrimaryColor) != null || (null == e ? void 0 : e.brandSecondaryColor) != null
  }, {
    section: E.ID.DIVIDER
  }, {
    section: f.Wy.MEMBER_APPLICATION,
    label: Z.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP,
    hasError: (null == e ? void 0 : e.verificationForm) != null
  }, {
    section: E.ID.DIVIDER
  }, {
    section: E.ID.CUSTOM,
    label: Z.Z.Messages.CLAN_SETTINGS_DISABLE_CLAN,
    element: G
  }],
  G = e => {
    let {
      guildId: s,
      onClose: l,
      dirty: a
    } = e, [r, c] = i.useState(!1), d = async () => {
      c(!0);
      try {
        await (0, N.nr)(s), l()
      } catch (e) {
        throw c(!1), e
      }
    };
    return (0, n.jsxs)(o.TabBar.Item, {
      selectedItem: !1,
      className: j.deleteItem,
      "aria-label": Z.Z.Messages.CLAN_SETTINGS_DISABLE_CLAN,
      onClick: () => {
        if (a) {
          T.S.dispatch(v.CkL.EMPHASIZE_NOTICE);
          return
        }(0, o.openModalLazy)(async () => {
          let {
            ConfirmModal: e
          } = await Promise.resolve().then(t.bind(t, 481060));
          return s => (0, n.jsx)(e, {
            ...s,
            header: Z.Z.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_TITLE,
            confirmText: Z.Z.Messages.CONFIRM,
            cancelText: Z.Z.Messages.CANCEL,
            loading: r,
            onConfirm: d,
            children: (0, n.jsx)(o.Text, {
              variant: "text-md/normal",
              children: Z.Z.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_BODY
            })
          })
        })
      },
      children: [(0, n.jsx)(_.Z, {
        className: j.statusDanger,
        width: 16,
        height: 16
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "status-danger",
        children: Z.Z.Messages.CLAN_SETTINGS_DISABLE_CLAN
      })]
    })
  },
  P = e => {
    let {
      isErrorVisible: s
    } = e, t = (0, o.useToken)(o.tokens.colors.HEADER_PRIMARY, D.BR.DARK), i = (0, o.useToken)(o.tokens.colors.TEXT_MUTED, D.BR.DARK);
    return s ? (0, n.jsxs)("div", {
      className: j.tooltipContents,
      children: [(0, n.jsx)(I.Z, {
        className: j.errorIconTooltip
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)(o.Text, {
          variant: "text-sm/medium",
          style: {
            color: t.hex()
          },
          children: Z.Z.Messages.CLAN_SUBMIT_ERROR_TITLE
        }), (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          style: {
            color: i.hex()
          },
          children: Z.Z.Messages.CLAN_SUBMIT_ERROR_SUBTITLE
        })]
      })]
    }) : null
  };
s.Z = e => {
  let {
    guildId: s,
    onClose: t
  } = e, [_, D] = i.useState(f.Wy.GAMES), {
    initialSettings: G,
    settings: b,
    errors: B,
    submitting: y,
    dirty: F
  } = (0, a.cj)([S.Z], () => {
    var e;
    let s = S.Z.getState();
    return {
      initialSettings: s.initialSettings,
      settings: s.settings,
      errors: null !== (e = s.errors) && void 0 !== e ? e : {},
      submitting: s.submitting,
      dirty: s.dirty
    }
  }), w = i.useCallback(e => {
    F ? T.S.dispatch(v.CkL.EMPHASIZE_NOTICE) : D(e)
  }, [F]), k = (0, h.N)(s, "ClanSettingsModal"), H = (0, g.f)(), V = i.useCallback(e => {
    "Escape" === e.key && (e.stopPropagation(), t())
  }, [t]);
  i.useEffect(() => {
    (0, m.GO)(s, (0, m.Qh)(_))
  }, [s, _]), i.useEffect(() => (window.addEventListener("keydown", V), () => {
    window.removeEventListener("keydown", V)
  }), [V]), i.useEffect(() => {
    c.Z.getDetectableGames()
  }, []), i.useEffect(() => {
    (0, N.aH)(s)
  }, [s]);
  let Y = i.useCallback(e => (0, N.mf)(s, {
      gameApplicationIds: e
    }), [s]),
    W = i.useCallback(e => (0, N.mf)(s, {
      playstyle: e
    }), [s]),
    K = i.useCallback(e => (0, N.mf)(s, {
      interests: e
    }), [s]),
    z = i.useCallback(e => (0, N.mf)(s, e), [s]),
    q = i.useCallback(() => {
      F ? T.S.dispatch(v.CkL.EMPHASIZE_NOTICE) : t()
    }, [F, t]),
    X = async () => {
      await (0, N.Ii)(s, b), (0, m.Af)(s)
    }, Q = i.useMemo(() => null != B && Object.values(B).some(e => null != e), [B]);
  if (null == b) return null;
  let J = U(B);
  return (0, n.jsxs)(l.animated.div, {
    style: H,
    className: j.modal,
    children: [(0, n.jsx)(o.Tooltip, {
      color: o.Tooltip.Colors.GREY,
      tooltipClassName: j.tooltip,
      text: (0, n.jsx)(P, {
        isErrorVisible: Q
      }),
      position: "left",
      "aria-label": null != Q ? Z.Z.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
      shouldShow: Q,
      forceOpen: Q,
      children: e => (0, n.jsx)(d.Z, {
        ...e,
        className: j.closeButton,
        closeAction: q,
        keybind: "ESC"
      })
    }), (0, n.jsxs)("div", {
      className: j.modalContents,
      children: [(0, n.jsx)("div", {
        className: j.sidebarWrapper,
        children: (0, n.jsx)(o.TabBar, {
          className: j.sidebar,
          selectedItem: _,
          onItemSelect: w,
          orientation: "vertical",
          children: J.map((e, i) => {
            switch (e.section) {
              case E.ID.HEADER:
                return (0, n.jsx)(o.TabBar.Header, {
                  children: e.label
                }, "header-".concat(i));
              case E.ID.DIVIDER:
                return (0, n.jsx)(o.TabBar.Separator, {}, "divider-".concat(i));
              case E.ID.CUSTOM:
                let l = e.element;
                return (0, n.jsx)(l, {
                  dirty: F,
                  guildId: s,
                  onClose: t
                }, e.label);
              default:
                return (0, n.jsx)(o.TabBar.Item, {
                  className: j.settingsTab,
                  "aria-label": e.label,
                  id: e.section,
                  children: (0, n.jsxs)(n.Fragment, {
                    children: [e.label, e.hasError && (0, n.jsx)(o.Tooltip, {
                      color: o.Tooltip.Colors.GREY,
                      position: "right",
                      text: Z.Z.Messages.CLAN_SUBMIT_ERROR_TITLE,
                      children: e => (0, n.jsx)(I.Z, {
                        ...e,
                        className: j.errorIcon
                      })
                    })]
                  })
                }, e.section)
            }
          })
        })
      }), (0, n.jsxs)("div", {
        className: j.mainContent,
        children: [(0, n.jsx)(o.ScrollerThin, {
          children: (() => {
            switch (_) {
              case f.Wy.GAMES:
                var e;
                return (0, n.jsx)(R.Z, {
                  title: Z.Z.Messages.CLAN_SETUP_GAMES_TITLE,
                  description: Z.Z.Messages.CLAN_SETUP_GAMES_SUBTITLE,
                  handleUpdate: Y,
                  gameApplicationIds: null !== (e = b.gameApplicationIds) && void 0 !== e ? e : new Set,
                  requiredGameId: null != k ? k : void 0,
                  error: B.gameApplicationIds,
                  inSettings: !0
                });
              case f.Wy.PLAYSTYLE:
                return (0, n.jsx)(A.Z, {
                  title: Z.Z.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
                  description: Z.Z.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
                  handleUpdate: W,
                  playstyle: b.playstyle,
                  error: B.playstyle
                });
              case f.Wy.UTILITY_TRAITS:
                return (0, n.jsx)(M.Z, {
                  guildId: s,
                  title: Z.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
                  description: Z.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
                  handleUpdate: K,
                  progress: b,
                  requiredGameId: null != k ? k : void 0
                });
              case f.Wy.INTERESTS:
                return (0, n.jsx)(L.Z, {
                  guildId: s,
                  handleUpdate: z,
                  progress: b,
                  error: B.interests
                });
              case f.Wy.DESCRIPTION:
                return (0, n.jsx)(C.Z, {
                  guildId: s,
                  handleUpdate: z,
                  progress: b,
                  errors: B
                });
              case f.Wy.CUSTOMIZE_TAG_BADGE:
                return (0, n.jsx)(p.Z, {
                  handleUpdate: z,
                  tag: b.tag,
                  error: B.tag,
                  badge: b.badgeKind,
                  primaryColor: b.badgePrimaryColor,
                  secondaryColor: b.badgeSecondaryColor,
                  furthestStep: f.Wy.CUSTOMIZE_TAG_BADGE,
                  inSettings: !0
                });
              case f.Wy.MEMBER_APPLICATION:
                return (0, n.jsx)(O.Z, {
                  guildId: s,
                  inSettings: !0,
                  error: B.verificationForm
                });
              case f.Wy.CUSTOMIZE_BANNER:
                return (0, n.jsx)(x.Z, {
                  guildId: s,
                  handleUpdate: z,
                  progress: b
                });
              default:
                return null
            }
          })()
        }), (0, n.jsx)(r.W, {
          component: "div",
          children: F && (0, n.jsx)(o.SlideIn, {
            className: j.noticeRegion,
            children: (0, n.jsx)(u.Z, {
              onSave: X,
              submitting: y,
              onReset: () => {
                (0, N.mf)(s, G)
              },
              errorMessage: Object.values(B).find(e => null != e)
            })
          })
        })]
      })]
    })]
  })
}