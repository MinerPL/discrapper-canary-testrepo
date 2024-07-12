s.r(a), s(47120), s(653041);
var n = s(735250),
  t = s(470079),
  r = s(120356),
  l = s.n(r),
  i = s(512722),
  E = s.n(i),
  c = s(758713),
  _ = s(442837),
  o = s(433517),
  I = s(481060),
  A = s(224706),
  d = s(812206),
  u = s(168551),
  O = s(485267),
  R = s(26033),
  N = s(561308),
  T = s(669764),
  m = s(962250),
  P = s(706454),
  g = s(768581),
  L = s(814225),
  M = s(810568),
  S = s(998058),
  G = s(839392),
  C = s(567409),
  p = s(774073),
  f = s(383895),
  h = s(183391),
  x = s(689938),
  v = s(421377);
let Z = 'GameProfileModal',
  K = e => {
let {
  game: a,
  onClose: s,
  trackClick: t
} = e, r = (0, _.e7)([d.Z], () => {
  var e;
  return d.Z.getApplication(null !== (e = null == a ? void 0 : a.applicationId) && void 0 !== e ? e : '');
});
if (null == a)
  return null;
let l = a.coverImageUrl;
return (0, n.jsx)(I.Tooltip, {
  text: a.name,
  children: e => {
    var i;
    return (0, n.jsx)(I.Clickable, {
      ...e,
      className: v.clickable,
      onClick: async () => {
        t(M.as.ClickSimilarGame, a.applicationId), (0, I.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(F, {
          applicationId: a.applicationId,
          source: M.m1.SimilarGames,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), s();
      },
      children: (0, n.jsx)('img', {
        src: l,
        className: v.similarGames,
        alt: x.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (i = null == r ? void 0 : r.name) && void 0 !== i ? i : null == a ? void 0 : a.name
        })
      })
    });
  }
});
  },
  D = [
c.z.DESKTOP,
c.z.XBOX,
c.z.PLAYSTATION,
c.z.NINTENDO
  ],
  j = e => {
let {
  platforms: a
} = e, s = [...new Set(a)];
!s.includes(c.z.DESKTOP) && (s.includes(c.z.MACOS) || s.includes(c.z.LINUX)) && s.push(c.z.DESKTOP);
let t = (s = s.filter(e => D.includes(e))).map(e => {
  switch (e) {
    case c.z.DESKTOP:
      return (0, n.jsx)(I.ScreenIcon, {}, e);
    case c.z.XBOX:
      return (0, n.jsx)(I.XboxIcon, {}, e);
    case c.z.PLAYSTATION:
      return (0, n.jsx)(I.PlaystationIcon, {}, e);
    case c.z.NINTENDO:
      return (0, n.jsx)(I.NintendoSwitchNeutralIcon, {}, e);
    default:
      return null;
  }
});
return (0, n.jsx)('div', {
  className: v.row,
  children: t
});
  },
  U = e => e.filter(p.z6).slice(0, 5),
  F = e => {
var a, r, i;
let {
  applicationId: c,
  source: D,
  sourceUserId: F,
  transitionState: B,
  onClose: w
} = e, {
  clientThemesClassName: b
} = (0, u.ZP)(), {
  width: Q,
  height: H
} = (0, m.b)(), [y, Y] = t.useState(null !== (a = o.K.get(Z)) && void 0 !== a ? a : {}), k = (0, _.e7)([P.default], () => P.default.locale), [W, V] = t.useState(!0), [z, X] = t.useState(!1), J = t.useRef(null), q = t.useMemo(() => (0, M.fP)(), []);
t.useEffect(() => {
  let e = J.current;
  null != e && X(e.scrollHeight - e.clientHeight > 1);
}, [
  J,
  Q,
  H
]), t.useEffect(() => {
  (0, O.J)();
}, []);
let $ = (0, _.Wu)([G.Z], () => {
    var e;
    return (null !== (e = G.Z.getSimilarGames(c)) && void 0 !== e ? e : []).slice(0, 25);
  }),
  ee = (0, _.Wu)([T.Z], () => $.map(e => T.Z.getGame(e)).filter(p.W1).slice(0, 5)),
  ea = t.useRef([]);
t.useEffect(() => {
  ea.current = $;
}, [$]);
let {
  entries: es
} = (0, C.Z)(), en = t.useMemo(() => {
  var e;
  return null !== (e = null == es ? void 0 : es.filter(e => (0, R.d)(e) && e.extra.application_id === c)) && void 0 !== e ? e : [];
}, [
  es,
  c
]);
t.useEffect(() => {
  var e, a;
  return (0, M.IS)({
    source: D,
    viewId: q,
    applicationId: c,
    gameName: null !== (a = null !== (e = null == er ? void 0 : er.name) && void 0 !== e ? e : null == et ? void 0 : et.name) && void 0 !== a ? a : '',
    authorId: F
  }), () => {
    var e, a;
    let s = Date.now(),
      n = en.map(e => {
        let a = (0, N.kr)(e) ? (0, N.T_)(e, s) : (0, N.GL)(e, k);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: a
        });
      });
    (0, M.wz)({
      viewId: q,
      applicationId: c,
      gameName: null !== (a = null !== (e = null == er ? void 0 : er.name) && void 0 !== e ? e : null == et ? void 0 : et.name) && void 0 !== a ? a : '',
      playedFriendIds: en.map(e => e.author_id),
      playedFriendsData: n,
      similarGames: U(ea.current)
    });
  };
}, []), t.useEffect(() => {
  0 === $.length && (0, S.i)(c);
}, [
  c,
  $
]), t.useEffect(() => {
  A.Z.getDetectableGamesSupplemental([
    c,
    ...$
  ]);
}, [
  c,
  $
]);
let et = d.Z.getApplication(c),
  er = (0, _.e7)([T.Z], () => T.Z.getGame(c)),
  el = t.useMemo(() => null == er ? void 0 : er.genres.map(L.P3).join(', '), [er]),
  ei = t.useMemo(() => {
    if (null == er)
      return 0;
    let {
      artwork: e,
      screenshots: a
    } = er;
    if (e.length > 0) {
      let a = Math.floor(Math.random() * (e.length - 1));
      return e[a];
    }
    if (a.length > 0) {
      let e = Math.floor(Math.random() * (a.length - 1));
      return a[e];
    }
    return '';
  }, [er]),
  eE = t.useMemo(() => {
    var e, a;
    let s = (null !== (e = null == er ? void 0 : er.artwork) && void 0 !== e ? e : []).map(e => ({
      src: e
    }));
    return [
      ...s,
      ...(null !== (a = null == er ? void 0 : er.screenshots) && void 0 !== a ? a : []).map(e => ({
        src: e
      }))
    ];
  }, [
    null == er ? void 0 : er.artwork,
    null == er ? void 0 : er.screenshots
  ]),
  ec = (e, a) => {
    (0, M.UE)({
      gameName: null != eo ? eo : '',
      applicationId: c,
      action: e,
      similarGameId: a,
      viewId: q
    });
  },
  {
    shouldOpenGameProfile: e_
  } = (0, p.ZP)({
    location: 'GameProfileModal',
    applicationId: c,
    trackEntryPointImpression: !1
  });
if (E()(e_, 'Game Profile was opened when it thinks it shouldn\'t have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`'), null == er)
  return null;
let eo = null !== (r = er.name) && void 0 !== r ? r : null == et ? void 0 : et.name,
  eI = null == et ? void 0 : et.getIconURL(160, g.$k ? 'webp' : 'png'),
  eA = null !== (i = er.coverImageUrl) && void 0 !== i ? i : eI,
  {
    summary: ed,
    websites: eu,
    publishers: eO,
    platforms: eR
  } = er,
  eN = y[c];
return (0, n.jsxs)(I.ModalRoot, {
  transitionState: B,
  size: I.ModalSize.DYNAMIC,
  className: l()(b, v.gameProfileModal),
  children: [
    (0, n.jsxs)('div', {
      className: v.gameArtHero,
      children: [
        (0, n.jsx)('div', {
          className: v.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat(ei, '")')
          }
        }),
        (0, n.jsx)('div', {
          className: v.gameHeroGradient
        })
      ]
    }),
    (0, n.jsxs)('div', {
      className: l()(v.content, v.column, v.headerInfo),
      children: [
        (0, n.jsx)('div', {
          className: v.logoWrapper,
          children: null != eA && (0, n.jsx)('img', {
            className: v.logo,
            src: eA,
            alt: x.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: eo
            })
          })
        }),
        (0, n.jsxs)('div', {
          className: l()(v.row, v.gapSm, v.gameDetails),
          children: [
            (0, n.jsxs)('div', {
              children: [
                (0, n.jsx)(I.Heading, {
                  variant: 'heading-xl/bold',
                  children: eo
                }),
                (0, n.jsxs)('div', {
                  className: l()(v.row, v.gapSm),
                  children: [
                    (0, n.jsx)(I.Text, {
                      variant: 'text-sm/semibold',
                      color: 'text-muted',
                      children: el
                    }),
                    null != eI && (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(I.Text, {
                          variant: 'text-sm/semibold',
                          children: ' \u2022 '
                        }),
                        (0, n.jsx)('img', {
                          src: eI,
                          height: 16,
                          alt: x.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                            game: eo
                          })
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, n.jsx)('div', {
              children: (0, n.jsx)(I.Tooltip, {
                text: eN ? x.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : x.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                children: e => (0, n.jsxs)(I.Button, {
                  ...e,
                  innerClassName: v.followButton,
                  color: eN ? I.Button.Colors.PRIMARY : I.Button.Colors.BRAND,
                  onClick: () => {
                    let e = {
                      ...y
                    };
                    e[c] = !e[c], Y(e), o.K.set(Z, e), ec(e[c] ? M.as.FollowGame : M.as.UnfollowGame);
                  },
                  children: [
                    eN ? (0, n.jsx)(I.BellSlashIcon, {
                      color: 'white'
                    }) : (0, n.jsx)(I.BellIcon, {
                      color: 'white'
                    }),
                    eN ? x.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : x.Z.Messages.FOLLOW
                  ]
                })
              })
            })
          ]
        })
      ]
    }),
    (0, n.jsx)(I.Scroller, {
      children: (0, n.jsxs)('div', {
        className: l()(v.content, v.mainContent),
        children: [
          (0, n.jsxs)('div', {
            className: v.column,
            children: [
              (0, n.jsx)(I.Heading, {
                variant: 'heading-md/bold',
                color: 'text-primary',
                children: x.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
              }),
              (0, n.jsxs)('div', {
                className: v.section,
                children: [
                  0 === en.length && (0, n.jsx)(I.Text, {
                    variant: 'text-xs/semibold',
                    color: 'text-primary',
                    className: v.emptyFriendsWhoPlay,
                    children: x.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                  }),
                  (0, n.jsx)('div', {
                    className: l()(v.column, v.gapNone),
                    children: null == en ? void 0 : en.map(e => (0, n.jsx)(f.Z, {
                      entry: e,
                      viewId: q,
                      onClose: w
                    }, e.id))
                  })
                ]
              }),
              eE.length > 0 && (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(I.Heading, {
                    variant: 'heading-md/bold',
                    children: x.Z.Messages.GAME_PROFILE_SCREENSHOTS
                  }),
                  (0, n.jsx)(I.Scroller, {
                    style: {
                      overflowY: 'visible'
                    },
                    className: l()(v.row, v.imageScroller),
                    orientation: 'horizontal',
                    children: eE.map((e, a) => (0, n.jsx)(I.Clickable, {
                      className: v.clickable,
                      onClick: () => {
                        ec(M.as.ClickImage), (0, I.openModalLazy)(async () => {
                          let {
                            default: e
                          } = await s.e('99857').then(s.bind(s, 895023));
                          return s => {
                            let {
                              ...t
                            } = s;
                            return (0, n.jsx)(e, {
                              className: v.mediaModal,
                              ...t,
                              items: eE,
                              startingIndex: a
                            });
                          };
                        });
                      },
                      children: (0, n.jsx)('img', {
                        src: e.src,
                        className: v.gameArtwork,
                        alt: x.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                          game: eo
                        })
                      })
                    }, e.src))
                  })
                ]
              }),
              ee.length > 0 && (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(I.Heading, {
                    variant: 'heading-md/bold',
                    children: x.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                  }),
                  (0, n.jsx)('div', {
                    className: v.row,
                    style: {},
                    children: ee.map(e => (0, n.jsx)(K, {
                      game: e,
                      onClose: w,
                      trackClick: ec
                    }, null == e ? void 0 : e.applicationId))
                  })
                ]
              })
            ]
          }),
          (0, n.jsxs)('div', {
            className: l()(v.sidebar, v.column, v.padded),
            children: [
              (0, n.jsx)(I.Heading, {
                variant: 'heading-md/bold',
                children: x.Z.Messages.ABOUT
              }),
              null != ed && (0, n.jsxs)('div', {
                className: l()(v.column, v.gapSm),
                children: [
                  (0, n.jsx)(I.Text, {
                    ref: J,
                    lineClamp: W ? 8 : void 0,
                    variant: 'text-sm/normal',
                    children: ed
                  }),
                  (z || !W) && (0, n.jsx)(I.Clickable, {
                    className: v.clickable,
                    onClick: () => {
                      ec(W ? M.as.ShowMore : M.as.ShowLess), V(!W);
                    },
                    children: (0, n.jsx)(I.Text, {
                      variant: 'text-sm/semibold',
                      children: W ? x.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : x.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                    })
                  })
                ]
              }),
              (0, n.jsx)(h.Z, {
                websites: eu,
                trackClick: ec
              }),
              (eO.length > 0 || eR.length > 0) && (0, n.jsxs)('div', {
                className: l()(v.column),
                children: [
                  eO.length > 0 && (0, n.jsxs)('div', {
                    className: l()(v.column, v.gapSm),
                    children: [
                      (0, n.jsx)(I.Text, {
                        variant: 'text-xs/semibold',
                        children: x.Z.Messages.GAME_PROFILE_PUBLISHER
                      }),
                      (0, n.jsx)(I.Text, {
                        variant: 'text-sm/normal',
                        children: eO.join(', ')
                      })
                    ]
                  }),
                  eR.length > 0 && (0, n.jsxs)('div', {
                    className: l()(v.column, v.gapSm),
                    children: [
                      (0, n.jsx)(I.Text, {
                        variant: 'text-xs/semibold',
                        children: x.Z.Messages.GAME_PROFILE_PLATFORMS
                      }),
                      (0, n.jsx)(j, {
                        platforms: eR
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    })
  ]
});
  };
a.default = F;