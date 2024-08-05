a.r(n), a.d(n, {
  default: function() {
return T;
  }
}), a(47120), a(789020);
var t = a(735250),
  s = a(470079),
  i = a(266067),
  l = a(692547),
  r = a(481060),
  o = a(100527),
  c = a(906732),
  u = a(665149),
  d = a(703656),
  g = a(810090),
  m = a(630388),
  p = a(566620),
  x = a(146936),
  v = a(678173),
  f = a(880308),
  b = a(636508),
  I = a(696068),
  h = a(361213),
  j = a(952561),
  S = a(778569),
  _ = a(513202),
  y = a(412019),
  C = a(431136),
  M = a(226799),
  Z = a(981631),
  N = a(689938),
  E = a(779277);

function T(e) {
  var n, a;
  let {
match: x
  } = e, b = null !== (n = (0, d.DR)()) && void 0 !== n ? n : [], {
analyticsLocations: I
  } = (0, c.ZP)([
...b,
o.Z.ACTIVITY_DETAIL_PAGE
  ]), {
applicationId: j
  } = x.params;
  (0, f.g)(), s.useEffect(() => {
(0, p.w1)({
  guildId: null
});
  }, []);
  let _ = (0, S.Z)({
  applicationId: null != j ? j : '',
  size: 2048,
  names: ['embedded_cover']
}),
y = (0, v.T)(null, null != j && '' !== j ? j : null);
  if (null == j || null == y)
return null;
  if (!(0, m.yE)(y.application.flags, Z.udG.EMBEDDED))
return (0, t.jsx)(i.l_, {
  to: Z.Z5c.ACTIVITIES
});
  let C = null != y.activity.activity_preview_video_asset_id ? (0, h.Z)(j, y.activity.activity_preview_video_asset_id) : null,
T = M.o[j],
D = (null == T ? void 0 : T.playersSuggestionMin) != null && (null == T ? void 0 : T.playersSuggestionMax) != null ? ''.concat(T.playersSuggestionMin, ' - ').concat(T.playersSuggestionMax) : void 0;
  return (0, t.jsx)(c.Gt, {
value: I,
children: (0, t.jsxs)('div', {
  className: E.outerContainer,
  children: [
    (0, t.jsxs)(u.ZP, {
      children: [
        (0, t.jsxs)('div', {
          className: E.titleContainer,
          children: [
            (0, t.jsx)(r.ActivitiesIcon, {
              size: 'md',
              color: 'currentColor',
              className: E.rocketIcon
            }),
            (0, t.jsx)(r.Heading, {
              variant: 'heading-md/semibold',
              children: y.application.name
            })
          ]
        }),
        (0, t.jsx)('div', {
          className: E.__invalid_headerBarRightSideFiller
        })
      ]
    }),
    (0, t.jsx)(r.Scroller, {
      className: E.scroller,
      children: (0, t.jsxs)('div', {
        className: E.innerContainer,
        children: [
          (0, t.jsxs)('div', {
            className: E.header,
            children: [
              (0, t.jsx)('img', {
                src: _.url,
                className: E.headerImage,
                alt: y.application.name
              }),
              (0, t.jsx)('div', {
                className: E.headerImageOverlay
              }),
              (0, t.jsxs)(r.Clickable, {
                onClick: () => {
                  (0, d.op)();
                },
                className: E.backButtonContainer,
                children: [
                  (0, t.jsx)(r.ChevronSmallLeftIcon, {
                    size: 'md',
                    color: l.Z.unsafe_rawColors.WHITE_100,
                    className: E.backButtonIcon
                  }),
                  (0, t.jsx)(r.Heading, {
                    color: 'always-white',
                    variant: 'heading-lg/semibold',
                    children: N.Z.Messages.BACK
                  })
                ]
              })
            ]
          }),
          (0, t.jsx)('div', {
            className: E.detailsOuterContainer,
            children: (0, t.jsx)('div', {
              className: E.detailsInnerContainer,
              children: (0, t.jsxs)('div', {
                className: E.detailsInnerInnerContainer,
                children: [
                  (0, t.jsxs)('div', {
                    className: E.activityDetailsContainer,
                    children: [
                      (0, t.jsxs)('div', {
                        children: [
                          (0, t.jsx)('div', {
                            className: E.detailsTitle,
                            children: (0, t.jsx)(r.Heading, {
                              variant: 'heading-xxl/bold',
                              children: y.application.name
                            })
                          }),
                          (0, t.jsxs)('div', {
                            className: E.detailsDetails,
                            children: [
                              null != D ? (0, t.jsxs)('div', {
                                className: E.detailItem,
                                children: [
                                  (0, t.jsx)(r.GroupIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                  }),
                                  (0, t.jsx)(r.Text, {
                                    variant: 'text-xs/semibold',
                                    className: E.detailItemText,
                                    children: N.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({
                                      nPlayers: D
                                    })
                                  })
                                ]
                              }) : null,
                              (null == T ? void 0 : T.timeSuggestionMinutes) != null ? (0, t.jsxs)('div', {
                                className: E.detailItem,
                                children: [
                                  (0, t.jsx)(r.HourglassIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                  }),
                                  (0, t.jsx)(r.Text, {
                                    variant: 'text-xs/semibold',
                                    className: E.detailItemText,
                                    children: N.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({
                                      nMinutes: T.timeSuggestionMinutes
                                    })
                                  })
                                ]
                              }) : null,
                              (0, t.jsxs)('div', {
                                className: E.detailItem,
                                children: [
                                  (0, t.jsx)(r.TagsIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                  }),
                                  (0, t.jsx)(r.Text, {
                                    variant: 'text-xs/semibold',
                                    className: E.detailItemText,
                                    children: y.application.tags.slice(0, 3).join(', ')
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      (0, t.jsx)(r.Heading, {
                        variant: 'heading-lg/medium',
                        className: E.detailsDescription,
                        children: y.application.description
                      }),
                      (0, t.jsx)('div', {
                        className: E.divider
                      }),
                      (0, t.jsxs)('div', {
                        className: E.imagesContainer,
                        children: [
                          (null !== (a = null == T ? void 0 : T.gameplayImageUrls) && void 0 !== a ? a : []).map(e => (0, t.jsx)('img', {
                            src: e,
                            alt: N.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({
                              activityName: y.application.name
                            }),
                            className: E.activityImage
                          }, e)),
                          (0, t.jsx)(g.Z, {
                            loop: !0,
                            autoPlay: !0,
                            muted: !0,
                            className: E.activityImage,
                            src: C,
                            poster: _.url
                          })
                        ]
                      })
                    ]
                  }),
                  (0, t.jsx)('div', {
                    className: E.launcherOuterContainer,
                    children: (0, t.jsx)(A, {
                      activityItem: y
                    })
                  })
                ]
              })
            })
          })
        ]
      })
    })
  ]
})
  });
}

function A(e) {
  var n, i;
  let {
activityItem: l
  } = e, {
analyticsLocations: o
  } = (0, c.ZP)(), u = (0, j.Z)(), [d, g] = s.useState(null !== (n = (0, b.$)()) && void 0 !== n ? n : void 0), [m, p] = s.useState(null !== (i = (0, I.d)({
guildId: d
  })) && void 0 !== i ? i : void 0), v = (0, b.W)(), f = (0, I.F)(d), h = s.useCallback(() => {
var e;
if (null != m && null != d)
  (0, x.Z)({
    targetApplicationId: null == l ? void 0 : null === (e = l.application) || void 0 === e ? void 0 : e.id,
    currentEmbeddedApplication: u,
    channelId: m,
    guildId: d,
    embeddedActivitiesManager: _.Z,
    analyticsLocations: o
  });
  }, [
l,
o,
u,
m,
d
  ]), S = s.useCallback(() => {
(0, r.openModalLazy)(async () => {
  let {
    default: e
  } = await Promise.all([
    a.e('60133'),
    a.e('45260')
  ]).then(a.bind(a, 827940));
  return n => (0, t.jsx)(e, {
    activityItem: l,
    ...n,
    analyticsLocations: o
  });
});
  }, [
l,
o
  ]);
  return (0, t.jsxs)('div', {
className: E.launcherInnerContainer,
children: [
  (0, t.jsx)(r.Text, {
    variant: 'text-md/medium',
    children: N.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
  }),
  (0, t.jsx)(r.Select, {
    placeholder: N.Z.Messages.GUILD_SELECT,
    optionClassName: E.__invalid_option,
    options: v,
    renderOptionValue: e => {
      let n = e.find(e => e.value === d);
      return null == n ? null : (0, t.jsx)(C.m, {
        guildId: n.value
      });
    },
    renderOptionLabel: e => {
      let {
        value: n
      } = e;
      return (0, t.jsx)(C.m, {
        guildId: n
      });
    },
    isSelected: e => e === d,
    select: e => {
      var n;
      g(e), p(null !== (n = (0, I.d)({
        guildId: e
      })) && void 0 !== n ? n : void 0);
    },
    serialize: e => e
  }),
  (0, t.jsx)(r.Select, {
    placeholder: N.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
    optionClassName: E.__invalid_option,
    options: f,
    isSelected: e => {
      let {
        channel: n
      } = e;
      return n.id === m;
    },
    select: e => {
      let {
        channel: n
      } = e;
      return p(n.id);
    },
    serialize: e => {
      let {
        channel: n
      } = e;
      return n.id;
    },
    renderOptionValue: () => {
      let e = f.find(e => e.value.channel.id === m);
      return null == e ? null : (0, t.jsx)(y.O, {
        channel: e.value.channel,
        users: e.value.users
      });
    },
    renderOptionLabel: e => {
      let {
        value: {
          channel: n,
          users: a
        }
      } = e;
      return (0, t.jsx)(y.O, {
        channel: n,
        users: a
      });
    }
  }),
  (0, t.jsx)(r.Button, {
    fullWidth: !0,
    disabled: null == d || null == m || !v.some(e => e.value === d) || !f.some(e => e.value.channel.id === m),
    onClick: h,
    children: N.Z.Messages.START
  }),
  (0, t.jsx)('div', {
    className: E.divider
  }),
  (0, t.jsx)(r.Button, {
    fullWidth: !0,
    color: r.Button.Colors.PRIMARY,
    onClick: S,
    children: N.Z.Messages.SHARE
  })
]
  });
}