n.d(t, {
  Z: function() {
return N;
  }
}), n(47120);
var a = n(735250),
  i = n(470079),
  l = n(399606),
  s = n(481060),
  r = n(100527),
  o = n(906732),
  c = n(70097),
  d = n(592125),
  u = n(566620),
  g = n(146936),
  v = n(678173),
  m = n(636508),
  p = n(696068),
  I = n(361213),
  f = n(952561),
  x = n(778569),
  _ = n(182906),
  h = n(513202),
  C = n(412019),
  T = n(431136),
  E = n(226799),
  S = n(689938),
  b = n(795633);

function N(e) {
  var t;
  let {
applicationId: n,
guildId: l,
channelId: d,
onActivityLaunch: g
  } = e, {
analyticsLocations: m
  } = (0, o.ZP)(r.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS);
  i.useEffect(() => {
(0, u.w1)({
  guildId: l
});
  }, [l]);
  let p = (0, x.Z)({
  applicationId: null != n ? n : '',
  size: 2048
}),
f = (0, v.T)(null != l ? l : null, n);
  if (null == f)
return null;
  let _ = null != f.activity.activity_preview_video_asset_id ? (0, I.Z)(n, f.activity.activity_preview_video_asset_id) : null,
h = E.o[n],
C = (null == h ? void 0 : h.playersSuggestionMin) != null && (null == h ? void 0 : h.playersSuggestionMax) != null ? ''.concat(h.playersSuggestionMin, ' - ').concat(h.playersSuggestionMax) : void 0;
  return (0, a.jsx)(o.Gt, {
value: m,
children: (0, a.jsx)('div', {
  className: b.scrollContainer,
  children: (0, a.jsxs)(s.Scroller, {
    className: b.scroller,
    children: [
      (0, a.jsx)('div', {
        className: b.launcherOuterContainer,
        children: (0, a.jsx)(j, {
          activityItem: f,
          onLaunch: g,
          channelId: d
        })
      }),
      (0, a.jsxs)('div', {
        className: b.activityDetailsContainer,
        children: [
          (0, a.jsxs)('div', {
            children: [
              null != _ ? (0, a.jsx)('div', {
                className: b.heroVideoContainer,
                children: (0, a.jsx)(c.Z, {
                  loop: !0,
                  autoPlay: !0,
                  muted: !0,
                  className: b.heroVideo,
                  src: _,
                  poster: p.url
                })
              }) : null,
              (0, a.jsx)('div', {
                className: b.detailsTitle,
                children: (0, a.jsx)(s.Heading, {
                  variant: 'heading-xxl/bold',
                  children: f.application.name
                })
              }),
              (0, a.jsxs)('div', {
                className: b.detailsDetails,
                children: [
                  null != C ? (0, a.jsxs)('div', {
                    className: b.detailItem,
                    children: [
                      (0, a.jsx)(s.GroupIcon, {
                        size: 'xs',
                        color: 'currentColor'
                      }),
                      (0, a.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        className: b.detailItemText,
                        children: S.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({
                          nPlayers: C
                        })
                      })
                    ]
                  }) : null,
                  (null == h ? void 0 : h.timeSuggestionMinutes) != null ? (0, a.jsxs)('div', {
                    className: b.detailItem,
                    children: [
                      (0, a.jsx)(s.HourglassIcon, {
                        size: 'xs',
                        color: 'currentColor'
                      }),
                      (0, a.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        className: b.detailItemText,
                        children: S.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({
                          nMinutes: h.timeSuggestionMinutes
                        })
                      })
                    ]
                  }) : null,
                  (0, a.jsxs)('div', {
                    className: b.detailItem,
                    children: [
                      (0, a.jsx)(s.TagsIcon, {
                        size: 'xs',
                        color: 'currentColor'
                      }),
                      (0, a.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        className: b.detailItemText,
                        children: f.application.tags.slice(0, 3).join(', ')
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          (0, a.jsx)(s.Heading, {
            variant: 'heading-lg/medium',
            className: b.detailsDescription,
            children: f.application.description
          }),
          (0, a.jsx)('div', {
            className: b.divider
          }),
          (0, a.jsx)('div', {
            className: b.imagesContainer,
            children: (null !== (t = null == h ? void 0 : h.gameplayImageUrls) && void 0 !== t ? t : []).map(e => (0, a.jsx)('img', {
              src: e,
              alt: S.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({
                activityName: f.application.name
              }),
              className: b.activityImage
            }, e))
          })
        ]
      })
    ]
  })
})
  });
}

function j(e) {
  var t, r;
  let {
activityItem: c,
onLaunch: u,
channelId: v
  } = e, I = (0, x.Z)({
applicationId: c.application.id,
size: 2048
  }), {
analyticsLocations: E
  } = (0, o.ZP)(), N = (0, f.Z)(), [j, M] = i.useState(null !== (t = (0, m.$)({
allowGdmActivityChannelSuggestion: !0
  })) && void 0 !== t ? t : void 0), [A, Z] = i.useState(null !== (r = (0, p.d)({
guildId: j,
allowGdmActivityChannelSuggestion: !0
  })) && void 0 !== r ? r : void 0), y = (0, l.e7)([d.Z], () => d.Z.getChannel(A), [A]), D = (0, m.W)(), L = (0, p.F)(j), O = i.useCallback(() => {
var e;
if (null != A)
  (0, g.Z)({
    targetApplicationId: null == c ? void 0 : null === (e = c.application) || void 0 === e ? void 0 : e.id,
    currentEmbeddedApplication: N,
    channelId: A,
    guildId: j,
    embeddedActivitiesManager: h.Z,
    analyticsLocations: E
  }).then(u);
  }, [
c,
E,
N,
u,
A,
j
  ]), B = i.useCallback(() => {
(0, s.openModalLazy)(async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('60133'),
    n.e('99418')
  ]).then(n.bind(n, 827940));
  return t => (0, a.jsx)(e, {
    activityItem: c,
    ...t,
    analyticsLocations: E
  });
});
  }, [
c,
E
  ]), V = null == y || null != y.guild_id && !(null != j && null != A && D.some(e => e.value === j) && L.some(e => e.value.channel.id === A)) && !0;
  return (0, a.jsxs)('div', {
className: b.launcherInnerContainer,
children: [
  (0, a.jsx)(_.Z, {
    applicationName: c.application.name,
    imageBackground: I,
    imageClassName: b.launchImage,
    imageNotFoundClassName: b.brokenLaunchImage
  }),
  (0, a.jsx)(s.Text, {
    variant: 'text-md/medium',
    children: S.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
  }),
  null == v ? (0, a.jsxs)(a.Fragment, {
    children: [
      (0, a.jsx)(s.Select, {
        placeholder: S.Z.Messages.GUILD_SELECT,
        optionClassName: b.__invalid_option,
        options: D,
        renderOptionValue: e => {
          let t = e.find(e => e.value === j);
          return null == t ? null : (0, a.jsx)(T.m, {
            guildId: t.value
          });
        },
        renderOptionLabel: e => {
          let {
            value: t
          } = e;
          return (0, a.jsx)(T.m, {
            guildId: t
          });
        },
        isSelected: e => e === j,
        select: e => {
          var t;
          M(e), Z(null !== (t = (0, p.d)({
            guildId: e
          })) && void 0 !== t ? t : void 0);
        },
        serialize: e => e
      }),
      (0, a.jsx)(s.Select, {
        placeholder: S.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
        optionClassName: b.__invalid_option,
        options: L,
        isSelected: e => {
          let {
            channel: t
          } = e;
          return t.id === A;
        },
        select: e => {
          let {
            channel: t
          } = e;
          return Z(t.id);
        },
        serialize: e => {
          let {
            channel: t
          } = e;
          return t.id;
        },
        renderOptionValue: () => {
          let e = L.find(e => e.value.channel.id === A);
          return null == e ? null : (0, a.jsx)(C.O, {
            channel: e.value.channel,
            users: e.value.users
          });
        },
        renderOptionLabel: e => {
          let {
            value: {
              channel: t,
              users: n
            }
          } = e;
          return (0, a.jsx)(C.O, {
            channel: t,
            users: n
          });
        }
      }),
      (0, a.jsx)(s.Button, {
        fullWidth: !0,
        disabled: V,
        onClick: O,
        children: S.Z.Messages.START
      }),
      (0, a.jsx)('div', {
        className: b.divider
      }),
      (0, a.jsx)(s.Button, {
        fullWidth: !0,
        color: s.Button.Colors.PRIMARY,
        onClick: B,
        children: S.Z.Messages.SHARE
      })
    ]
  }) : (0, a.jsxs)('div', {
    className: b.singleRowShareContainer,
    children: [
      (0, a.jsx)(s.Button, {
        fullWidth: !0,
        disabled: V,
        onClick: O,
        children: S.Z.Messages.START
      }),
      (0, a.jsx)(s.Button, {
        className: b.shareIconButton,
        color: s.Button.Colors.PRIMARY,
        onClick: B,
        children: (0, a.jsx)(s.ArrowAngleLeftUpIcon, {
          size: 'md',
          color: 'currentColor'
        })
      })
    ]
  })
]
  });
}