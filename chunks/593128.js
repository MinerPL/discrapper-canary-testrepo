"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("920906"),
  i = s("442837"),
  r = s("481060"),
  o = s("224706"),
  d = s("493544"),
  u = s("740727"),
  c = s("729017"),
  E = s("931240"),
  _ = s("970606"),
  I = s("389134"),
  T = s("432632"),
  S = s("35313"),
  f = s("94963"),
  m = s("745628"),
  N = s("950279"),
  g = s("796918"),
  h = s("513532"),
  C = s("741595"),
  R = s("974842"),
  x = s("359380"),
  L = s("308083"),
  O = s("231338"),
  A = s("689938"),
  p = s("943303");
let M = e => [{
    section: d.SectionTypes.HEADER,
    label: A.default.Messages.CLAN_SETTINGS_BASIC_INFO
  }, {
    section: L.ClanSetupSteps.GAMES,
    label: A.default.Messages.CLAN_SETTTINGS_SELECT_GAMES,
    hasError: (null == e ? void 0 : e.gameApplicationIds) != null
  }, {
    section: L.ClanSetupSteps.PLAYSTYLE,
    label: A.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE,
    hasError: (null == e ? void 0 : e.playstyle) != null
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.HEADER,
    label: A.default.Messages.CLAN_SETTINGS_PERSONALITY_INFO
  }, {
    section: L.ClanSetupSteps.UTILITY_TRAITS,
    label: A.default.Messages.CLAN_SETTINGS_SELECT_TRAITS
  }, {
    section: L.ClanSetupSteps.INTERESTS,
    label: A.default.Messages.CLAN_SETTINGS_SELECT_INTERESTS,
    hasError: (null == e ? void 0 : e.interests) != null
  }, {
    section: L.ClanSetupSteps.DESCRIPTION,
    label: A.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION,
    hasError: (null == e ? void 0 : e.description) != null || (null == e ? void 0 : e.wildcardDescriptors) != null
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.HEADER,
    label: A.default.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
  }, {
    section: L.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
    label: A.default.Messages.CLAN_SETTINGS_CLAN_BADGE,
    hasError: (null == e ? void 0 : e.tag) != null || (null == e ? void 0 : e.badgeKind) != null || (null == e ? void 0 : e.badgePrimaryColor) != null || (null == e ? void 0 : e.badgeSecondaryColor) != null
  }, {
    section: L.ClanSetupSteps.CUSTOMIZE_BANNER,
    label: A.default.Messages.CLAN_SETTINGS_CLAN_PROFILE,
    hasError: (null == e ? void 0 : e.banner) != null || (null == e ? void 0 : e.brandPrimaryColor) != null || (null == e ? void 0 : e.brandSecondaryColor) != null
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: L.ClanSetupSteps.MEMBER_APPLICATION,
    label: A.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP,
    hasError: (null == e ? void 0 : e.verificationForm) != null
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.CUSTOM,
    label: A.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
    element: D
  }],
  D = e => {
    let {
      guildId: t,
      onClose: n
    } = e, [i, o] = l.useState(!1), d = async () => {
      o(!0);
      try {
        await (0, E.disableClan)(t), n()
      } catch (e) {
        throw o(!1), e
      }
    };
    return (0, a.jsxs)(r.TabBar.Item, {
      selectedItem: !1,
      className: p.deleteItem,
      "aria-label": A.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
      onClick: () => (0, r.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(s.bind(s, "481060"));
        return t => (0, a.jsx)(e, {
          ...t,
          header: A.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_TITLE,
          confirmText: A.default.Messages.CONFIRM,
          cancelText: A.default.Messages.CANCEL,
          loading: i,
          onConfirm: d,
          children: (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            children: A.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_BODY
          })
        })
      }),
      children: [(0, a.jsx)(u.default, {
        className: p.statusDanger,
        width: 16,
        height: 16
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "status-danger",
        children: A.default.Messages.CLAN_SETTINGS_DISABLE_CLAN
      })]
    })
  },
  v = e => {
    let {
      isErrorVisible: t
    } = e, s = (0, r.useToken)(r.tokens.colors.HEADER_PRIMARY, O.ThemeTypes.DARK), l = (0, r.useToken)(r.tokens.colors.TEXT_MUTED, O.ThemeTypes.DARK);
    return t ? (0, a.jsxs)("div", {
      className: p.tooltipContents,
      children: [(0, a.jsx)(c.default, {
        className: p.errorIconTooltip
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(r.Text, {
          variant: "text-sm/medium",
          style: {
            color: s.hex()
          },
          children: A.default.Messages.CLAN_SUBMIT_ERROR_TITLE
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          style: {
            color: l.hex()
          },
          children: A.default.Messages.CLAN_SUBMIT_ERROR_SUBTITLE
        })]
      })]
    }) : null
  };
t.default = e => {
  let {
    guildId: t,
    onClose: s
  } = e, [u, O] = l.useState(L.ClanSetupSteps.GAMES), {
    settings: D,
    errors: G
  } = (0, i.useStateFromStoresObject)([I.default], () => {
    var e;
    let t = I.default.getState();
    return {
      settings: t.settings,
      errors: null !== (e = t.errors) && void 0 !== e ? e : {}
    }
  }), j = (0, T.useDefaultGameIdForClan)(t, "ClanSettingsModal"), U = (0, S.useFullScreenModalAnimationStyle)(), P = l.useCallback(e => {
    "Escape" === e.key && (e.stopPropagation(), s())
  }, [s]);
  l.useEffect(() => {
    (0, _.trackSettingsViewed)(t, (0, _.getProgressStepAnalyticsName)(u))
  }, [t, u]), l.useEffect(() => (window.addEventListener("keydown", P), () => {
    window.removeEventListener("keydown", P)
  }), [P]), l.useEffect(() => {
    o.default.getDetectableGames()
  }, []), l.useEffect(() => {
    (0, E.fetchClanSettings)(t)
  }, [t]);
  let b = e => (0, E.updateClanSettings)(t, {
      gameApplicationIds: e
    }),
    B = e => (0, E.updateClanSettings)(t, {
      playstyle: e
    }),
    y = e => (0, E.updateClanSettings)(t, {
      interests: e
    }),
    F = e => (0, E.updateClanSettings)(t, e),
    H = async () => {
      await (0, E.saveClanSettings)(t, D), (0, _.trackSettingsSaved)(t), s()
    }, k = l.useMemo(() => null != G && Object.values(G).some(e => null != e), [G]);
  if (null == D) return null;
  let w = M(G);
  return (0, a.jsxs)(n.animated.div, {
    style: U,
    className: p.modal,
    children: [(0, a.jsx)(r.Tooltip, {
      color: r.Tooltip.Colors.GREY,
      tooltipClassName: p.tooltip,
      text: (0, a.jsx)(v, {
        isErrorVisible: k
      }),
      position: "left",
      "aria-label": null != k ? A.default.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
      shouldShow: k,
      forceOpen: k,
      children: e => (0, a.jsx)(r.Button, {
        ...e,
        className: p.closeButton,
        look: r.Button.Looks.OUTLINED,
        size: r.Button.Sizes.SMALL,
        color: r.Button.Colors.PRIMARY,
        onClick: H,
        children: A.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
      })
    }), (0, a.jsxs)("div", {
      className: p.modalContents,
      children: [(0, a.jsx)("div", {
        className: p.sidebarWrapper,
        children: (0, a.jsx)(r.TabBar, {
          className: p.sidebar,
          selectedItem: u,
          onItemSelect: O,
          orientation: "vertical",
          children: w.map((e, l) => {
            switch (e.section) {
              case d.SectionTypes.HEADER:
                return (0, a.jsx)(r.TabBar.Header, {
                  children: e.label
                }, "header-".concat(l));
              case d.SectionTypes.DIVIDER:
                return (0, a.jsx)(r.TabBar.Separator, {}, "divider-".concat(l));
              case d.SectionTypes.CUSTOM:
                let n = e.element;
                return (0, a.jsx)(n, {
                  guildId: t,
                  onClose: s
                }, e.label);
              default:
                return (0, a.jsx)(r.TabBar.Item, {
                  className: p.settingsTab,
                  "aria-label": e.label,
                  id: e.section,
                  children: (0, a.jsxs)(a.Fragment, {
                    children: [e.label, e.hasError && (0, a.jsx)(r.Tooltip, {
                      color: r.Tooltip.Colors.GREY,
                      position: "right",
                      text: A.default.Messages.CLAN_SUBMIT_ERROR_TITLE,
                      children: e => (0, a.jsx)(c.default, {
                        ...e,
                        className: p.errorIcon
                      })
                    })]
                  })
                }, e.section)
            }
          })
        })
      }), (0, a.jsx)(r.ScrollerThin, {
        className: p.mainContent,
        children: (() => {
          switch (u) {
            case L.ClanSetupSteps.GAMES:
              var e;
              return (0, a.jsx)(N.default, {
                title: A.default.Messages.CLAN_SETUP_GAMES_TITLE,
                description: A.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
                handleUpdate: b,
                gameApplicationIds: null !== (e = D.gameApplicationIds) && void 0 !== e ? e : new Set,
                requiredGameId: null != j ? j : void 0,
                error: G.gameApplicationIds
              });
            case L.ClanSetupSteps.PLAYSTYLE:
              return (0, a.jsx)(C.default, {
                title: A.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
                description: A.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
                handleUpdate: B,
                playstyle: D.playstyle,
                error: G.playstyle
              });
            case L.ClanSetupSteps.UTILITY_TRAITS:
              return (0, a.jsx)(x.default, {
                guildId: t,
                title: A.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
                description: A.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
                handleUpdate: y,
                progress: D,
                requiredGameId: null != j ? j : void 0
              });
            case L.ClanSetupSteps.INTERESTS:
              return (0, a.jsx)(g.default, {
                guildId: t,
                handleUpdate: F,
                progress: D,
                error: G.interests
              });
            case L.ClanSetupSteps.DESCRIPTION:
              return (0, a.jsx)(m.default, {
                guildId: t,
                handleUpdate: F,
                progress: D,
                errors: G
              });
            case L.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
              return (0, a.jsx)(R.default, {
                handleUpdate: F,
                tag: D.tag,
                error: G.tag,
                badge: D.badgeKind,
                primaryColor: D.badgePrimaryColor,
                secondaryColor: D.badgeSecondaryColor,
                furthestStep: L.ClanSetupSteps.CUSTOMIZE_TAG_BADGE
              });
            case L.ClanSetupSteps.MEMBER_APPLICATION:
              return (0, a.jsx)(h.default, {
                guildId: t,
                inSettings: !0
              });
            case L.ClanSetupSteps.CUSTOMIZE_BANNER:
              return (0, a.jsx)(f.default, {
                guildId: t,
                handleUpdate: F,
                progress: D
              });
            default:
              return null
          }
        })()
      })]
    })]
  })
}