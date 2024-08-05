a.r(s), a(47120), a(653041);
var n = a(735250),
  l = a(470079),
  r = a(120356),
  t = a.n(r),
  i = a(512722),
  E = a.n(i),
  o = a(913527),
  c = a.n(o),
  _ = a(758713),
  I = a(705512),
  u = a(442837),
  A = a(433517),
  d = a(481060),
  O = a(224706),
  N = a(812206),
  R = a(168551),
  T = a(485267),
  m = a(26033),
  L = a(561308),
  P = a(669764),
  M = a(962250),
  g = a(706454),
  S = a(768581),
  G = a(814225),
  C = a(709054),
  f = a(810568),
  v = a(998058),
  h = a(839392),
  x = a(567409),
  p = a(774073),
  Z = a(383895),
  D = a(183391),
  K = a(206583),
  j = a(689938),
  B = a(421377);
let F = 'GameProfileModal',
  U = e => {
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
return (0, n.jsx)(d.Tooltip, {
  text: s.name,
  children: e => {
    var i;
    return (0, n.jsx)(d.Clickable, {
      ...e,
      className: B.clickable,
      onClick: async () => {
        l(f.as.ClickSimilarGame, s.applicationId), (0, d.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(H, {
          applicationId: s.applicationId,
          source: f.m1.SimilarGames,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), a();
      },
      children: (0, n.jsx)('img', {
        src: t,
        className: B.similarGames,
        alt: j.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (i = null == r ? void 0 : r.name) && void 0 !== i ? i : null == s ? void 0 : s.name
        })
      })
    });
  }
});
  },
  w = () => (0, n.jsxs)('div', {
className: B.gameBadge,
children: [
  (0, n.jsx)(d.FireIcon, {
    size: 'xxs'
  }),
  (0, n.jsx)(d.Text, {
    variant: 'text-sm/normal',
    color: 'text-muted',
    children: j.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
  })
]
  }),
  Q = [
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
let l = (a = a.filter(e => Q.includes(e))).map(e => {
  switch (e) {
    case _.z.DESKTOP:
      return (0, n.jsx)(d.ScreenIcon, {}, e);
    case _.z.XBOX:
      return (0, n.jsx)(d.XboxIcon, {}, e);
    case _.z.PLAYSTATION:
      return (0, n.jsx)(d.PlaystationIcon, {}, e);
    case _.z.NINTENDO:
      return (0, n.jsx)(d.NintendoSwitchNeutralIcon, {}, e);
    default:
      return null;
  }
});
return (0, n.jsx)('div', {
  className: B.row,
  children: l
});
  },
  y = e => e.filter(p.z6).slice(0, 5),
  H = e => {
var s, r;
let {
  applicationId: i,
  source: o,
  sourceUserId: _,
  transitionState: Q,
  onClose: H
} = e, {
  clientThemesClassName: Y
} = (0, R.ZP)(), {
  width: b,
  height: W
} = (0, M.b)(), [V, X] = l.useState(() => {
  var e;
  return null === (e = A.K.get(F)) || void 0 === e ? void 0 : e[i];
}), z = (0, u.e7)([g.default], () => g.default.locale), [J, q] = l.useState(!0), [$, ee] = l.useState(!1), es = l.useRef(null), ea = l.useMemo(() => (0, f.fP)(), []);
l.useEffect(() => {
  let e = es.current;
  null != e && ee(e.scrollHeight - e.clientHeight > 1);
}, [
  es,
  b,
  W
]), l.useEffect(() => {
  (0, T.Jn)();
}, []);
let en = (0, u.Wu)([h.Z], () => {
    var e;
    return (null !== (e = h.Z.getSimilarGames(i)) && void 0 !== e ? e : []).slice(0, 25);
  }),
  el = (0, u.Wu)([P.Z], () => en.map(e => P.Z.getGame(e)).filter(p.W1).slice(0, 5)),
  er = l.useRef([]);
l.useEffect(() => {
  er.current = en;
}, [en]);
let {
  entries: et
} = (0, x.Z)(), ei = l.useMemo(() => {
  var e;
  return null !== (e = null == et ? void 0 : et.filter(e => (0, m.dX)(e) && e.extra.application_id === i)) && void 0 !== e ? e : [];
}, [
  et,
  i
]);
l.useEffect(() => {
  var e, s;
  return (0, f.IS)({
    source: o,
    viewId: ea,
    applicationId: i,
    gameName: null !== (s = null !== (e = null == eo ? void 0 : eo.name) && void 0 !== e ? e : null == eE ? void 0 : eE.name) && void 0 !== s ? s : '',
    authorId: _
  }), () => {
    var e, s;
    let a = Date.now(),
      n = ei.map(e => {
        let s = (0, L.kr)(e) ? (0, L.T_)(e, a) : (0, L.GL)(e, z);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: s
        });
      });
    (0, f.wz)({
      viewId: ea,
      applicationId: i,
      gameName: null !== (s = null !== (e = null == eo ? void 0 : eo.name) && void 0 !== e ? e : null == eE ? void 0 : eE.name) && void 0 !== s ? s : '',
      playedFriendIds: ei.map(e => e.author_id),
      playedFriendsData: n,
      similarGames: y(er.current)
    });
  };
}, []), l.useEffect(() => {
  0 === en.length && (0, v.i)(i);
}, [
  i,
  en
]), l.useEffect(() => {
  O.Z.getDetectableGamesSupplemental([
    i,
    ...en
  ]);
}, [
  i,
  en
]);
let eE = N.Z.getApplication(i),
  eo = (0, u.e7)([P.Z], () => P.Z.getGame(i)),
  ec = l.useMemo(() => null == eo ? void 0 : eo.genres.map(G.P3).join(', '), [eo]),
  e_ = l.useMemo(() => {
    if (null == eo)
      return 0;
    let {
      artwork: e,
      screenshots: s
    } = eo;
    if (e.length > 0) {
      let s = Math.floor(Math.random() * (e.length - 1));
      return e[s];
    }
    if (s.length > 0) {
      let e = Math.floor(Math.random() * (s.length - 1));
      return s[e];
    }
    return '';
  }, [eo]),
  eI = l.useMemo(() => {
    var e, s;
    let a = (null !== (e = null == eo ? void 0 : eo.artwork) && void 0 !== e ? e : []).map(e => ({
      src: e
    }));
    return [
      ...(null !== (s = null == eo ? void 0 : eo.screenshots) && void 0 !== s ? s : []).map(e => ({
        src: e
      })),
      ...a
    ];
  }, [
    null == eo ? void 0 : eo.artwork,
    null == eo ? void 0 : eo.screenshots
  ]),
  eu = (e, s) => {
    (0, f.UE)({
      gameName: null != ed ? ed : '',
      applicationId: i,
      action: e,
      similarGameId: s,
      viewId: ea
    });
  },
  {
    shouldOpenGameProfile: eA
  } = (0, p.ZP)({
    location: 'GameProfileModal',
    applicationId: i,
    trackEntryPointImpression: !1
  });
if (E()(eA, 'Game Profile was opened when it thinks it shouldn\'t have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`'), null == eo)
  return null;
let ed = null !== (s = eo.name) && void 0 !== s ? s : null == eE ? void 0 : eE.name,
  eO = null == eE ? void 0 : eE.getIconURL(160, S.$k ? 'webp' : 'png'),
  eN = null !== (r = eo.coverImageUrl) && void 0 !== r ? r : eO,
  {
    summary: eR,
    websites: eT,
    publishers: em,
    platforms: eL
  } = eo,
  eP = C.default.extractTimestamp(i),
  eM = c()().diff(c()(eP), 'days') <= K.G,
  eg = ei.some(e => (0, L.ig)(e) === I.o.GLOBAL);
return (0, n.jsxs)(d.ModalRoot, {
  transitionState: Q,
  size: d.ModalSize.DYNAMIC,
  className: t()(Y, B.gameProfileModal),
  children: [
    (0, n.jsxs)('div', {
      className: B.gameArtHero,
      children: [
        (0, n.jsx)('div', {
          className: B.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat(e_, '")')
          }
        }),
        (0, n.jsx)('div', {
          className: B.gameHeroGradient
        })
      ]
    }),
    (0, n.jsxs)(d.Scroller, {
      children: [
        (0, n.jsxs)('div', {
          className: t()(B.content, B.column, B.headerInfo),
          children: [
            (0, n.jsx)('div', {
              className: B.logoWrapper,
              children: null != eN && (0, n.jsx)('img', {
                className: B.logo,
                src: eN,
                alt: j.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                  game: ed
                })
              })
            }),
            (0, n.jsxs)('div', {
              className: t()(B.row, B.gapSm, B.gameDetails),
              children: [
                (0, n.jsxs)('div', {
                  children: [
                    (0, n.jsx)(d.Heading, {
                      variant: 'heading-xl/bold',
                      children: ed
                    }),
                    (0, n.jsxs)('div', {
                      className: t()(B.row, B.gapSm),
                      children: [
                        null != eO && (0, n.jsx)('img', {
                          src: eO,
                          height: 16,
                          alt: j.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                            game: ed
                          })
                        }),
                        (0, n.jsx)(d.Text, {
                          variant: 'text-sm/semibold',
                          color: 'text-muted',
                          children: ec
                        }),
                        eM && (0, n.jsx)(d.Text, {
                          variant: 'eyebrow',
                          className: B.newBadge,
                          children: j.Z.Messages.NEW
                        }),
                        eg && (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(d.Text, {
                              variant: 'text-sm/semibold',
                              children: ' \u2022 '
                            }),
                            (0, n.jsx)(w, {})
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, n.jsx)('div', {
                  children: (0, n.jsx)(d.Tooltip, {
                    text: V ? j.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : j.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                    children: e => (0, n.jsxs)(d.Button, {
                      ...e,
                      innerClassName: B.followButton,
                      color: V ? d.Button.Colors.PRIMARY : d.Button.Colors.BRAND,
                      onClick: () => {
                        var e;
                        let s = null !== (e = A.K.get(F)) && void 0 !== e ? e : {};
                        s[i] = !s[i], A.K.set(F, s), eu(s[i] ? f.as.FollowGame : f.as.UnfollowGame), X(s[i]);
                      },
                      children: [
                        V ? (0, n.jsx)(d.BellSlashIcon, {
                          color: 'white'
                        }) : (0, n.jsx)(d.BellIcon, {
                          color: 'white'
                        }),
                        V ? j.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : j.Z.Messages.FOLLOW
                      ]
                    })
                  })
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)('div', {
          className: t()(B.content, B.mainContent),
          children: [
            (0, n.jsxs)('div', {
              className: B.column,
              children: [
                (0, n.jsx)(d.Heading, {
                  variant: 'heading-md/bold',
                  color: 'text-primary',
                  children: j.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                }),
                (0, n.jsxs)('div', {
                  className: B.section,
                  children: [
                    0 === ei.length && (0, n.jsx)(d.Text, {
                      variant: 'text-xs/semibold',
                      color: 'text-primary',
                      className: B.emptyFriendsWhoPlay,
                      children: j.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                    }),
                    (0, n.jsx)('div', {
                      className: t()(B.column, B.gapNone),
                      children: null == ei ? void 0 : ei.map(e => (0, n.jsx)(Z.Z, {
                        entry: e,
                        viewId: ea,
                        onClose: H
                      }, e.id))
                    })
                  ]
                }),
                eI.length > 0 && (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(d.Heading, {
                      variant: 'heading-md/bold',
                      children: j.Z.Messages.GAME_PROFILE_SCREENSHOTS
                    }),
                    (0, n.jsx)(d.Scroller, {
                      style: {
                        overflowY: 'visible'
                      },
                      className: t()(B.row, B.imageScroller),
                      orientation: 'horizontal',
                      children: eI.map((e, s) => (0, n.jsx)(d.Clickable, {
                        className: B.clickable,
                        onClick: () => {
                          eu(f.as.ClickImage), (0, d.openModalLazy)(async () => {
                            let {
                              default: e
                            } = await a.e('99857').then(a.bind(a, 895023));
                            return a => {
                              let {
                                ...l
                              } = a;
                              return (0, n.jsx)(e, {
                                className: B.mediaModal,
                                ...l,
                                items: eI,
                                startingIndex: s
                              });
                            };
                          });
                        },
                        children: (0, n.jsx)('img', {
                          src: e.src,
                          className: B.gameArtwork,
                          alt: j.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                            game: ed
                          })
                        })
                      }, e.src))
                    })
                  ]
                }),
                el.length > 0 && (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(d.Heading, {
                      variant: 'heading-md/bold',
                      children: j.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                    }),
                    (0, n.jsx)('div', {
                      className: B.row,
                      style: {},
                      children: el.map(e => (0, n.jsx)(U, {
                        game: e,
                        onClose: H,
                        trackClick: eu
                      }, null == e ? void 0 : e.applicationId))
                    })
                  ]
                })
              ]
            }),
            (0, n.jsxs)('div', {
              className: t()(B.sidebar, B.column, B.padded),
              children: [
                (0, n.jsx)(d.Heading, {
                  variant: 'heading-md/bold',
                  children: j.Z.Messages.ABOUT
                }),
                null != eR && (0, n.jsxs)('div', {
                  className: t()(B.column, B.gapSm),
                  children: [
                    (0, n.jsx)(d.Text, {
                      ref: es,
                      lineClamp: J ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: eR
                    }),
                    ($ || !J) && (0, n.jsx)(d.Clickable, {
                      className: B.clickable,
                      onClick: () => {
                        eu(J ? f.as.ShowMore : f.as.ShowLess), q(!J);
                      },
                      children: (0, n.jsx)(d.Text, {
                        variant: 'text-sm/semibold',
                        children: J ? j.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : j.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                      })
                    })
                  ]
                }),
                (0, n.jsx)(D.Z, {
                  websites: eT,
                  trackClick: eu
                }),
                (em.length > 0 || eL.length > 0) && (0, n.jsxs)('div', {
                  className: t()(B.column),
                  children: [
                    em.length > 0 && (0, n.jsxs)('div', {
                      className: t()(B.column, B.gapSm),
                      children: [
                        (0, n.jsx)(d.Text, {
                          variant: 'text-xs/semibold',
                          children: j.Z.Messages.GAME_PROFILE_PUBLISHER
                        }),
                        (0, n.jsx)(d.Text, {
                          variant: 'text-sm/normal',
                          children: em.join(', ')
                        })
                      ]
                    }),
                    eL.length > 0 && (0, n.jsxs)('div', {
                      className: t()(B.column, B.gapSm),
                      children: [
                        (0, n.jsx)(d.Text, {
                          variant: 'text-xs/semibold',
                          children: j.Z.Messages.GAME_PROFILE_PLATFORMS
                        }),
                        (0, n.jsx)(k, {
                          platforms: eL
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    })
  ]
});
  };
s.default = H;