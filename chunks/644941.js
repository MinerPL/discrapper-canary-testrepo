a.r(s), a(47120), a(653041);
var n = a(735250),
  l = a(470079),
  r = a(120356),
  t = a.n(r),
  i = a(512722),
  o = a.n(i),
  E = a(913527),
  c = a.n(E),
  _ = a(758713),
  I = a(705512),
  u = a(442837),
  d = a(433517),
  A = a(481060),
  R = a(224706),
  N = a(812206),
  O = a(168551),
  T = a(485267),
  m = a(26033),
  L = a(561308),
  g = a(669764),
  M = a(962250),
  P = a(706454),
  S = a(768581),
  G = a(814225),
  f = a(709054),
  C = a(810568),
  v = a(998058),
  h = a(839392),
  x = a(96856),
  p = a(567409),
  Z = a(774073),
  K = a(124030),
  D = a(383895),
  j = a(183391),
  F = a(206583),
  B = a(689938),
  U = a(707443);
let w = 'GameProfileModal',
  y = e => {
let {
  game: s,
  onClose: a,
  trackClick: l
} = e, r = (0, u.e7)([N.Z], () => {
  var e;
  return N.Z.getApplication(null !== (e = null == s ? void 0 : s.applicationId) && void 0 !== e ? e : '');
});
if (null == s)
  return null;
let t = s.coverImageUrl;
return (0, n.jsx)(A.Tooltip, {
  text: s.name,
  children: e => {
    var i;
    return (0, n.jsx)(A.Clickable, {
      ...e,
      className: U.clickable,
      onClick: async () => {
        l(C.as.ClickSimilarGame, s.applicationId), (0, A.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(Y, {
          applicationId: s.applicationId,
          source: C.m1.SimilarGames,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), a();
      },
      children: (0, n.jsx)('img', {
        src: t,
        className: U.similarGames,
        alt: B.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (i = null == r ? void 0 : r.name) && void 0 !== i ? i : null == s ? void 0 : s.name
        })
      })
    });
  }
});
  },
  Q = () => (0, n.jsxs)('div', {
className: U.gameBadge,
children: [
  (0, n.jsx)(A.FireIcon, {
    size: 'xxs'
  }),
  (0, n.jsx)(A.Text, {
    variant: 'text-sm/normal',
    color: 'text-muted',
    children: B.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
  })
]
  }),
  b = [
_.z.DESKTOP,
_.z.XBOX,
_.z.PLAYSTATION,
_.z.NINTENDO
  ],
  k = e => {
let {
  platforms: s
} = e, a = [...new Set(s)];
!a.includes(_.z.DESKTOP) && (a.includes(_.z.MACOS) || a.includes(_.z.LINUX)) && a.push(_.z.DESKTOP);
let l = (a = a.filter(e => b.includes(e))).map(e => {
  switch (e) {
    case _.z.DESKTOP:
      return (0, n.jsx)(A.ScreenIcon, {
        size: 'xs'
      }, e);
    case _.z.XBOX:
      return (0, n.jsx)(A.XboxNeutralIcon, {
        size: 'xs'
      }, e);
    case _.z.PLAYSTATION:
      return (0, n.jsx)(A.PlaystationNeutralIcon, {
        size: 'xs'
      }, e);
    case _.z.NINTENDO:
      return (0, n.jsx)(A.NintendoSwitchNeutralIcon, {
        size: 'xs'
      }, e);
    default:
      return null;
  }
});
return (0, n.jsxs)('div', {
  className: t()(U.row, U.gapSm),
  style: {
    alignItems: 'center'
  },
  children: [
    (0, n.jsx)(A.Text, {
      variant: 'text-sm/normal',
      children: ' \xB7 '
    }),
    l
  ]
});
  },
  H = e => e.filter(Z.z6).slice(0, 5),
  Y = e => {
var s, r;
let {
  applicationId: i,
  source: E,
  sourceUserId: _,
  transitionState: b,
  onClose: Y
} = e, {
  clientThemesClassName: W
} = (0, O.ZP)(), {
  width: V,
  height: z
} = (0, M.b)(), [X, J] = l.useState(() => {
  var e;
  return null === (e = d.K.get(w)) || void 0 === e ? void 0 : e[i];
}), q = (0, u.e7)([P.default], () => P.default.locale), [$, ee] = l.useState(!0), [es, ea] = l.useState(!1), en = l.useRef(null), el = l.useMemo(() => (0, C.fP)(), []);
l.useEffect(() => {
  let e = en.current;
  null != e && ea(e.scrollHeight - e.clientHeight > 1);
}, [
  en,
  V,
  z
]), l.useEffect(() => {
  (0, T.Jn)();
}, []);
let er = (0, u.Wu)([h.Z], () => {
    var e;
    return (null !== (e = h.Z.getSimilarGames(i)) && void 0 !== e ? e : []).slice(0, 25);
  }),
  et = (0, u.Wu)([g.Z], () => er.map(e => g.Z.getGame(e)).filter(Z.W1).slice(0, 5)),
  ei = l.useRef([]);
l.useEffect(() => {
  ei.current = er;
}, [er]);
let {
  entries: eo
} = (0, p.Z)(), eE = l.useMemo(() => {
  var e;
  return null !== (e = null == eo ? void 0 : eo.filter(e => (0, m.dX)(e) && e.extra.application_id === i)) && void 0 !== e ? e : [];
}, [
  eo,
  i
]), ec = eE.length > 7, [e_, eI] = l.useState(!1);
l.useEffect(() => {
  var e, s;
  return (0, C.IS)({
    source: E,
    viewId: el,
    applicationId: i,
    gameName: null !== (s = null !== (e = null == ed ? void 0 : ed.name) && void 0 !== e ? e : null == eu ? void 0 : eu.name) && void 0 !== s ? s : '',
    authorId: _
  }), () => {
    var e, s;
    let a = Date.now(),
      n = eE.map(e => {
        let s = (0, L.kr)(e) ? (0, L.T_)(e, a) : (0, L.GL)(e, q);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: s
        });
      });
    (0, C.wz)({
      viewId: el,
      applicationId: i,
      gameName: null !== (s = null !== (e = null == ed ? void 0 : ed.name) && void 0 !== e ? e : null == eu ? void 0 : eu.name) && void 0 !== s ? s : '',
      playedFriendIds: eE.map(e => e.author_id),
      playedFriendsData: n,
      similarGames: H(ei.current)
    });
  };
}, []), l.useEffect(() => {
  0 === er.length && (0, v.i)(i);
}, [
  i,
  er
]), l.useEffect(() => {
  R.Z.getDetectableGamesSupplemental([
    i,
    ...er
  ]);
}, [
  i,
  er
]);
let eu = N.Z.getApplication(i),
  ed = (0, u.e7)([g.Z], () => g.Z.getGame(i)),
  eA = l.useMemo(() => null == ed ? void 0 : ed.genres.map(G.P3).join(', '), [ed]),
  eR = l.useMemo(() => {
    if (null == ed)
      return '';
    let {
      artwork: e,
      screenshots: s
    } = ed;
    if (e.length > 0) {
      let s = Math.floor(Math.random() * (e.length - 1));
      return e[s];
    }
    if (s.length > 0) {
      let e = Math.floor(Math.random() * (s.length - 1));
      return s[e];
    }
    return '';
  }, [ed]),
  eN = l.useMemo(() => {
    var e, s;
    let a = (null !== (e = null == ed ? void 0 : ed.artwork) && void 0 !== e ? e : []).map(e => ({
      src: e
    }));
    return [
      ...(null !== (s = null == ed ? void 0 : ed.screenshots) && void 0 !== s ? s : []).map(e => ({
        src: e
      })),
      ...a
    ];
  }, [
    null == ed ? void 0 : ed.artwork,
    null == ed ? void 0 : ed.screenshots
  ]),
  eO = (e, s) => {
    (0, C.UE)({
      gameName: null != eL ? eL : '',
      applicationId: i,
      action: e,
      similarGameId: s,
      viewId: el
    });
  },
  eT = (0, x.p)('GameProfileModal'),
  {
    shouldOpenGameProfile: em
  } = (0, Z.ZP)({
    location: 'GameProfileModal',
    applicationId: i,
    trackEntryPointImpression: !1
  });
if (o()(em, 'Game Profile was opened when it thinks it shouldn\'t have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`'), null == ed)
  return null;
let eL = null !== (s = ed.name) && void 0 !== s ? s : null == eu ? void 0 : eu.name,
  eg = null == eu ? void 0 : eu.getIconURL(160, S.$k ? 'webp' : 'png'),
  eM = null !== (r = ed.coverImageUrl) && void 0 !== r ? r : eg,
  {
    summary: eP,
    websites: eS,
    publishers: eG,
    platforms: ef
  } = ed,
  eC = f.default.extractTimestamp(i),
  ev = c()().diff(c()(eC), 'days') <= F.G,
  eh = eE.some(e => (0, L.ig)(e) === I.o.GLOBAL);
return (0, n.jsx)(A.ModalRoot, {
  transitionState: b,
  size: A.ModalSize.DYNAMIC,
  className: t()(W, U.gameProfileModal),
  children: (0, n.jsxs)(A.ScrollerNone, {
    className: U.scrollable,
    children: [
      (0, n.jsx)('div', {
        className: t()(U.gameArtHero),
        style: {
          backgroundImage: 'url("'.concat(eR, '")')
        }
      }),
      (0, n.jsxs)('div', {
        className: t()(U.content, U.column, U.headerInfo),
        children: [
          (0, n.jsx)('div', {
            className: U.logoWrapper,
            children: null != eM && (0, n.jsx)('img', {
              className: U.logo,
              src: eM,
              alt: B.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                game: eL
              })
            })
          }),
          (0, n.jsxs)('div', {
            className: t()(U.row, U.gapSm, U.gameDetails),
            children: [
              (0, n.jsxs)('div', {
                children: [
                  (0, n.jsx)(A.Heading, {
                    variant: 'heading-xl/bold',
                    children: eL
                  }),
                  (0, n.jsxs)('div', {
                    className: t()(U.row, U.gapSm),
                    children: [
                      null != eg && (0, n.jsx)('img', {
                        src: eg,
                        height: 16,
                        alt: B.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                          game: eL
                        })
                      }),
                      (0, n.jsx)(A.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-muted',
                        children: eA
                      }),
                      ev && (0, n.jsx)(A.Text, {
                        variant: 'eyebrow',
                        className: U.newBadge,
                        children: B.Z.Messages.NEW
                      }),
                      eh && (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(A.Text, {
                            variant: 'text-sm/medium',
                            children: ' \xB7 '
                          }),
                          (0, n.jsx)(Q, {})
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, n.jsx)('div', {
                children: eT && (0, n.jsx)(A.Tooltip, {
                  text: X ? B.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : B.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                  children: e => (0, n.jsxs)(A.Button, {
                    ...e,
                    innerClassName: U.followButton,
                    color: X ? A.Button.Colors.PRIMARY : A.Button.Colors.BRAND,
                    onClick: () => {
                      var e;
                      let s = null !== (e = d.K.get(w)) && void 0 !== e ? e : {};
                      s[i] = !s[i], d.K.set(w, s), eO(s[i] ? C.as.FollowGame : C.as.UnfollowGame), s[i] && (0, K.L)() && (0, A.openModalLazy)(async () => {
                        let {
                          default: e
                        } = await a.e('86564').then(a.bind(a, 641758));
                        return s => (0, n.jsx)(e, {
                          ...s,
                          applicationId: i,
                          background: eR,
                          viewId: el
                        });
                      }), J(s[i]);
                    },
                    children: [
                      X ? (0, n.jsx)(A.BellSlashIcon, {
                        color: 'white'
                      }) : (0, n.jsx)(A.BellIcon, {
                        color: 'white'
                      }),
                      X ? B.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : B.Z.Messages.FOLLOW
                    ]
                  })
                })
              })
            ]
          })
        ]
      }),
      (0, n.jsx)(A.HeadingLevel, {
        children: (0, n.jsxs)('div', {
          className: t()(U.content, U.mainContent),
          children: [
            (0, n.jsxs)('div', {
              className: U.column,
              children: [
                (0, n.jsx)(A.Heading, {
                  variant: 'text-md/semibold',
                  color: 'header-primary',
                  children: B.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                }),
                (0, n.jsxs)('div', {
                  className: t()(U.section, {
                    [U.fadedEntries]: ec && !e_
                  }),
                  children: [
                    0 === eE.length && (0, n.jsx)(A.Text, {
                      variant: 'text-xs/semibold',
                      color: 'text-primary',
                      className: U.emptyFriendsWhoPlay,
                      children: B.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                    }),
                    (0, n.jsx)('div', {
                      className: t()(U.column, U.gapNone),
                      children: null == eE ? void 0 : eE.slice(0, ec && !e_ ? 6 : void 0).map(e => (0, n.jsx)(D.Z, {
                        entry: e,
                        viewId: el,
                        onClose: Y
                      }, e.id))
                    })
                  ]
                }),
                ec && !e_ && (0, n.jsxs)(A.Clickable, {
                  className: U.expandEntriesButton,
                  onClick: () => eI(!0),
                  children: [
                    (0, n.jsx)(A.Text, {
                      variant: 'text-xs/semibold',
                      color: 'interactive-normal',
                      children: B.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                    }),
                    (0, n.jsx)(A.ChevronSmallDownIcon, {
                      size: 'xs'
                    })
                  ]
                }),
                eN.length > 0 && (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(A.Heading, {
                      variant: 'heading-md/bold',
                      children: B.Z.Messages.GAME_PROFILE_SCREENSHOTS
                    }),
                    (0, n.jsx)(A.Scroller, {
                      style: {
                        overflowY: 'visible'
                      },
                      className: t()(U.row, U.imageScroller),
                      orientation: 'horizontal',
                      children: eN.map((e, s) => (0, n.jsx)(A.Clickable, {
                        className: U.clickable,
                        onClick: () => {
                          eO(C.as.ClickImage), (0, A.openModalLazy)(async () => {
                            let {
                              default: e
                            } = await a.e('99857').then(a.bind(a, 895023));
                            return a => {
                              let {
                                ...l
                              } = a;
                              return (0, n.jsx)(e, {
                                className: U.mediaModal,
                                ...l,
                                items: eN,
                                startingIndex: s
                              });
                            };
                          });
                        },
                        children: (0, n.jsx)('img', {
                          src: e.src,
                          className: U.gameArtwork,
                          alt: B.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                            game: eL
                          })
                        })
                      }, e.src))
                    })
                  ]
                }),
                et.length > 0 && (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(A.Heading, {
                      variant: 'heading-md/bold',
                      children: B.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                    }),
                    (0, n.jsx)('div', {
                      className: U.row,
                      style: {},
                      children: et.map(e => (0, n.jsx)(y, {
                        game: e,
                        onClose: Y,
                        trackClick: eO
                      }, null == e ? void 0 : e.applicationId))
                    })
                  ]
                })
              ]
            }),
            (0, n.jsxs)('div', {
              className: t()(U.sidebar, U.column),
              children: [
                (0, n.jsx)(A.Heading, {
                  variant: 'heading-md/bold',
                  children: B.Z.Messages.ABOUT
                }),
                (0, n.jsxs)('div', {
                  className: U.sidebarSections,
                  children: [
                    null != eP && (0, n.jsxs)('div', {
                      className: t()(U.column, U.gapSm),
                      children: [
                        (0, n.jsx)(A.Text, {
                          ref: en,
                          lineClamp: $ ? 8 : void 0,
                          variant: 'text-sm/normal',
                          children: eP
                        }),
                        (es || !$) && (0, n.jsx)(A.Clickable, {
                          className: U.clickable,
                          onClick: () => {
                            eO($ ? C.as.ShowMore : C.as.ShowLess), ee(!$);
                          },
                          children: (0, n.jsx)(A.Text, {
                            variant: 'text-sm/semibold',
                            children: $ ? B.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : B.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                          })
                        })
                      ]
                    }),
                    (0, n.jsx)(j.Z, {
                      websites: eS,
                      trackClick: eO
                    }),
                    (eG.length > 0 || ef.length > 0) && (0, n.jsx)('div', {
                      className: t()(U.column),
                      children: eG.length > 0 && (0, n.jsxs)('div', {
                        className: t()(U.column, U.gapSm),
                        children: [
                          (0, n.jsx)(A.Heading, {
                            variant: 'text-xs/semibold',
                            color: 'header-secondary',
                            children: B.Z.Messages.GAME_PROFILE_PUBLISHER
                          }),
                          (0, n.jsxs)('div', {
                            className: t()(U.row, U.gapMd),
                            children: [
                              (0, n.jsx)(A.Text, {
                                variant: 'text-sm/normal',
                                children: eG.join(', ')
                              }),
                              ef.length > 0 && (0, n.jsx)(k, {
                                platforms: ef
                              })
                            ]
                          })
                        ]
                      })
                    })
                  ]
                })
              ]
            })
          ]
        })
      })
    ]
  })
});
  };
s.default = Y;