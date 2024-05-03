"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("718017"),
  i = s("442837"),
  r = s("481060"),
  o = s("224706"),
  d = s("493544"),
  u = s("430824"),
  c = s("740727"),
  E = s("931240"),
  _ = s("963202"),
  I = s("389134"),
  T = s("35313"),
  S = s("94963"),
  f = s("745628"),
  m = s("950279"),
  N = s("796918"),
  g = s("513532"),
  h = s("741595"),
  C = s("974842"),
  R = s("359380"),
  x = s("308083"),
  L = s("689938"),
  O = s("413932");
let A = () => [{
    section: d.SectionTypes.HEADER,
    label: L.default.Messages.CLAN_SETTINGS_BASIC_INFO
  }, {
    section: x.ClanSetupSteps.GAMES,
    label: L.default.Messages.CLAN_SETTTINGS_SELECT_GAMES
  }, {
    section: x.ClanSetupSteps.PLAYSTYLE,
    label: L.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.HEADER,
    label: L.default.Messages.CLAN_SETTINGS_PERSONALITY_INFO
  }, {
    section: x.ClanSetupSteps.UTILITY_TRAITS,
    label: L.default.Messages.CLAN_SETTINGS_SELECT_TRAITS
  }, {
    section: x.ClanSetupSteps.INTERESTS,
    label: L.default.Messages.CLAN_SETTINGS_SELECT_INTERESTS
  }, {
    section: x.ClanSetupSteps.DESCRIPTION,
    label: L.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.HEADER,
    label: L.default.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
  }, {
    section: x.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
    label: L.default.Messages.CLAN_SETTINGS_CLAN_BADGE
  }, {
    section: x.ClanSetupSteps.CUSTOMIZE_BANNER,
    label: L.default.Messages.CLAN_SETTINGS_CLAN_PROFILE
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: x.ClanSetupSteps.MEMBER_APPLICATION,
    label: L.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.CUSTOM,
    label: L.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
    element: p
  }],
  p = e => {
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
      className: O.deleteItem,
      "aria-label": L.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
      onClick: () => (0, r.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(s.bind(s, "481060"));
        return t => (0, a.jsx)(e, {
          ...t,
          header: L.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_TITLE,
          confirmText: L.default.Messages.CONFIRM,
          cancelText: L.default.Messages.CANCEL,
          loading: i,
          onConfirm: d,
          children: (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            children: L.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_BODY
          })
        })
      }),
      children: [(0, a.jsx)(c.default, {
        className: O.statusDanger,
        width: 16,
        height: 16
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "status-danger",
        children: L.default.Messages.CLAN_SETTINGS_DISABLE_CLAN
      })]
    })
  };
t.default = e => {
  let {
    guildId: t,
    onClose: s
  } = e, [c, p] = l.useState(x.ClanSetupSteps.GAMES), {
    settings: M,
    errors: D
  } = (0, i.useStateFromStoresObject)([I.default], () => {
    var e;
    let t = I.default.getState();
    return {
      settings: t.settings,
      errors: null !== (e = t.errors) && void 0 !== e ? e : {}
    }
  }), v = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t)), {
    defaultGameId: G
  } = (0, _.useClanPrepilotExperiment)(v, "ClanSettingsModal"), j = (0, T.useFullScreenModalAnimationStyle)(), U = l.useCallback(e => {
    "Escape" === e.key && (e.stopPropagation(), s())
  }, [s]);
  l.useEffect(() => (window.addEventListener("keydown", U), () => {
    window.removeEventListener("keydown", U)
  }), [U]), l.useEffect(() => {
    o.default.getDetectableGames()
  }, []), l.useEffect(() => {
    (0, E.fetchClanSettings)(t)
  }, [t]);
  let P = e => (0, E.updateClanSettings)(t, {
      gameApplicationIds: e
    }),
    b = e => (0, E.updateClanSettings)(t, {
      playstyle: e
    }),
    B = e => (0, E.updateClanSettings)(t, {
      interests: e
    }),
    y = e => (0, E.updateClanSettings)(t, e),
    F = async () => {
      await (0, E.saveClanSettings)(t, M), s()
    };
  if (null == M) return null;
  let H = A();
  return (0, a.jsxs)(n.animated.div, {
    style: j,
    className: O.modal,
    children: [(0, a.jsx)(r.Button, {
      className: O.closeButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.SMALL,
      color: r.Button.Colors.PRIMARY,
      onClick: F,
      children: L.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: O.modalContents,
      children: [(0, a.jsx)("div", {
        className: O.sidebarWrapper,
        children: (0, a.jsx)(r.TabBar, {
          className: O.sidebar,
          selectedItem: c,
          onItemSelect: p,
          orientation: "vertical",
          children: H.map((e, l) => {
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
                  id: e.section,
                  children: e.label
                }, e.section)
            }
          })
        })
      }), (0, a.jsx)("div", {
        className: O.mainContent,
        children: (() => {
          switch (c) {
            case x.ClanSetupSteps.GAMES:
              var e;
              return (0, a.jsx)(m.default, {
                title: L.default.Messages.CLAN_SETUP_GAMES_TITLE,
                description: L.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
                handleUpdate: P,
                gameApplicationIds: null !== (e = M.gameApplicationIds) && void 0 !== e ? e : new Set,
                requiredGameId: null != G ? G : void 0,
                error: D.gameApplicationIds
              });
            case x.ClanSetupSteps.PLAYSTYLE:
              return (0, a.jsx)(h.default, {
                title: L.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
                description: L.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
                handleUpdate: b,
                playstyle: M.playstyle,
                error: D.playstyle
              });
            case x.ClanSetupSteps.UTILITY_TRAITS:
              return (0, a.jsx)(R.default, {
                title: L.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
                description: L.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
                handleUpdate: B,
                interests: M.interests
              });
            case x.ClanSetupSteps.INTERESTS:
              return (0, a.jsx)(N.default, {
                handleUpdate: y,
                interests: M.interests,
                error: D.interests
              });
            case x.ClanSetupSteps.DESCRIPTION:
              return (0, a.jsx)(f.default, {
                handleUpdate: y,
                description: M.description,
                wildcardDescriptors: M.wildcardDescriptors,
                errors: D
              });
            case x.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
              return (0, a.jsx)(C.default, {
                handleUpdate: y,
                tag: M.tag,
                error: D.tag,
                badge: M.badgeKind,
                primaryColor: M.badgePrimaryColor,
                secondaryColor: M.badgeSecondaryColor,
                furthestStep: x.ClanSetupSteps.CUSTOMIZE_TAG_BADGE
              });
            case x.ClanSetupSteps.MEMBER_APPLICATION:
              return (0, a.jsx)(g.default, {
                guildId: t
              });
            case x.ClanSetupSteps.CUSTOMIZE_BANNER:
              return (0, a.jsx)(S.default, {
                guildId: t,
                handleUpdate: y,
                progress: M
              });
            default:
              return null
          }
        })()
      })]
    })]
  })
}