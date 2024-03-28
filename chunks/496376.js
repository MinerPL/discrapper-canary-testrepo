"use strict";
n.r(t), n("47120");
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("803997"),
  o = n.n(r),
  u = n("442837"),
  d = n("481060"),
  c = n("224706"),
  f = n("77498"),
  E = n("430824"),
  h = n("931240"),
  _ = n("650461"),
  C = n("745628"),
  m = n("950279"),
  S = n("796918"),
  I = n("741595"),
  p = n("884486"),
  T = n("974842"),
  g = n("308083"),
  A = n("689938"),
  N = n("653196");
(s = a || (a = {}))[s.GAMES = 1] = "GAMES", s[s.PLAYSTYLE = 2] = "PLAYSTYLE", s[s.INTERESTS = 3] = "INTERESTS", s[s.DESCRIPTION = 4] = "DESCRIPTION", s[s.PRIMETIME = 5] = "PRIMETIME", s[s.CUSTOMIZE = 6] = "CUSTOMIZE";
let v = [1, 2, 3, 4, 5, 6],
  O = e => {
    let {
      guildId: t,
      selectedGames: n,
      gameDetails: a,
      playstyle: s,
      interests: r
    } = e, o = (0, u.useStateFromStores)([E.default], () => {
      var e, n;
      return null !== (n = null === (e = E.default.getGuild(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : ""
    }), c = Array.from(n).map(e => {
      var t;
      return null === (t = a[e]) || void 0 === t ? void 0 : t.name
    }).join(", "), f = i.useMemo(() => {
      switch (s) {
        case g.ClanPlaystyles.SOCIAL:
          return A.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_TITLE;
        case g.ClanPlaystyles.CASUAL:
          return A.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_TITLE;
        case g.ClanPlaystyles.COMPETITIVE:
          return A.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_TITLE;
        case g.ClanPlaystyles.VERY_HARDCORE:
          return A.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_TITLE;
        default:
          return ""
      }
    }, [s]);
    return (0, l.jsxs)("div", {
      className: N.overviewSidebar,
      children: [(0, l.jsxs)("div", {
        className: N.scrollBg,
        children: [(0, l.jsx)("div", {
          className: N.scrollBgTop
        }), (0, l.jsx)("div", {
          className: N.scrollBgBottom
        })]
      }), (0, l.jsxs)("div", {
        className: N.overviewSidebarContent,
        children: [(0, l.jsx)(d.Heading, {
          variant: "heading-lg/semibold",
          color: "text-muted",
          className: N.overviewText,
          children: A.default.Messages.CLAN_SETUP_OVERVIEW_TITLE.format({
            guildName: o
          })
        }), n.size > 0 ? s === g.ClanPlaystyles.NONE ? (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: N.overviewText,
          children: A.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({
            games: c
          })
        }) : (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: N.overviewText,
          children: A.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format({
            playstyle: f,
            games: c
          })
        }) : (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: N.overviewText,
          children: A.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT
        }), r.size > 0 ? (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: N.overviewText,
          children: A.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({
            traits: Array.from(r).join(", ")
          })
        }) : null, (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: N.overviewText,
          children: A.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
        })]
      })]
    })
  },
  R = e => {
    let {
      currentStep: t,
      setCurrentStep: n,
      selectedGames: a,
      playstyle: s,
      interests: r,
      description: u,
      tag: c,
      primetime: f,
      handleSubmit: E
    } = e, h = t === v.length, _ = i.useMemo(() => ({
      1: {
        disableNextStep: 0 === a.size
      },
      2: {
        disableNextStep: s === g.ClanPlaystyles.NONE
      },
      3: {
        disableNextStep: 0 === r.size
      },
      4: {
        disableNextStep: 0 === u.length
      },
      5: {
        disableNextStep: 0 === f.length
      },
      6: {
        disableNextStep: 0 === c.length
      }
    }), [u.length, r.size, s, f.length, a.size, c.length]);
    return (0, l.jsxs)("div", {
      className: N.footer,
      children: [(0, l.jsx)("div", {
        className: N.progressContainer,
        children: v.map(e => (0, l.jsx)("div", {
          className: o()(N.progressStep, {
            [N.progressStepFilled]: e <= t
          })
        }, "step-".concat(e)))
      }), (0, l.jsxs)("div", {
        className: N.buttonsContainer,
        children: [(0, l.jsx)(d.Button, {
          look: d.Button.Looks.OUTLINED,
          size: d.Button.Sizes.MEDIUM,
          color: d.Button.Colors.PRIMARY,
          onClick: () => {
            n(t - 1)
          },
          disabled: 1 === t,
          children: A.default.Messages.PAGINATION_PREVIOUS
        }), (0, l.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          children: A.default.Messages.CLAN_SETUP_STEPS.format({
            currentStep: t,
            totalSteps: v.length
          })
        }), (0, l.jsx)(d.Button, {
          look: d.Button.Looks.FILLED,
          size: d.Button.Sizes.MEDIUM,
          color: d.Button.Colors.PRIMARY,
          onClick: () => {
            if (h) {
              E();
              return
            }
            n(t + 1)
          },
          disabled: _[t].disableNextStep,
          children: h ? A.default.Messages.FINISH : A.default.Messages.PAGINATION_NEXT
        })]
      })]
    })
  };
t.default = e => {
  let {
    guildId: t,
    onClose: n
  } = e, {
    selectedGames: a,
    playstyle: s,
    interests: r,
    description: o,
    tag: E,
    primetime: g
  } = (0, u.useStateFromStoresObject)([_.default], () => {
    var e;
    return null !== (e = _.default.getState(t)) && void 0 !== e ? e : (0, _.newClanProgress)()
  }), [L, P] = i.useState(1);
  i.useEffect(() => {
    c.default.getDetectableGames()
  }, []);
  let M = (0, u.useStateFromStoresObject)([f.default], () => {
      let e = {};
      return Array.from(a).forEach(t => {
        let n = f.default.getDetectableGame(t);
        null != n && (e[t] = n)
      }), e
    }),
    y = i.useCallback(e => h.updateClanSettings(t, e), [t]),
    D = i.useCallback(() => {
      h.convertGuildToClan(t, {
        selectedGames: a,
        playstyle: s,
        interests: r,
        description: o,
        tag: E,
        primetime: g
      }), n()
    }, [o, t, r, n, s, g, a, E]);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(d.Button, {
      className: N.closeButton,
      look: d.Button.Looks.OUTLINED,
      size: d.Button.Sizes.SMALL,
      color: d.Button.Colors.PRIMARY,
      onClick: n,
      children: A.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, l.jsxs)("div", {
      className: N.mainContent,
      children: [(0, l.jsx)(d.Sequencer, {
        step: L,
        steps: v,
        sideMargin: 24,
        verticalMargin: 24,
        className: N.sequencer,
        innerClassName: N.sequencer,
        animatedNodeClassName: N.sequencer,
        children: (0, l.jsx)(d.ScrollerAuto, {
          className: N.scroller,
          children: (() => {
            switch (L) {
              case 1:
                return (0, l.jsx)(m.default, {
                  handleUpdate: y,
                  selectedGames: a,
                  gameDetails: M
                });
              case 2:
                return (0, l.jsx)(I.default, {
                  handleUpdate: y,
                  playstyle: s
                });
              case 3:
                return (0, l.jsx)(S.default, {
                  handleUpdate: y,
                  interests: r
                });
              case 4:
                return (0, l.jsx)(C.default, {
                  handleUpdate: y,
                  description: o
                });
              case 5:
                return (0, l.jsx)(p.default, {
                  handleUpdate: y,
                  selectedTimes: g
                });
              case 6:
                return (0, l.jsx)(T.default, {
                  handleUpdate: y,
                  tag: E
                })
            }
          })()
        })
      }), (0, l.jsx)(R, {
        currentStep: L,
        setCurrentStep: P,
        selectedGames: a,
        playstyle: s,
        interests: r,
        description: o,
        primetime: g,
        tag: E,
        handleSubmit: D
      })]
    }), (0, l.jsx)(O, {
      guildId: t,
      selectedGames: a,
      gameDetails: M,
      playstyle: s,
      interests: r
    })]
  })
}