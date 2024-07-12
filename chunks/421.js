t.d(n, {
  Z: function() {
return N;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  l = t(399606),
  s = t(481060),
  r = t(100527),
  o = t(906732),
  c = t(592125),
  d = t(810090),
  u = t(566620),
  g = t(146936),
  p = t(678173),
  v = t(636508),
  m = t(696068),
  x = t(361213),
  I = t(952561),
  f = t(778569),
  _ = t(182906),
  h = t(513202),
  C = t(412019),
  T = t(431136),
  E = t(226799),
  S = t(689938),
  j = t(795633);

function N(e) {
  var n;
  let {
applicationId: t,
guildId: g,
channelId: v,
onActivityLaunch: m
  } = e, {
analyticsLocations: I
  } = (0, o.ZP)(r.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS);
  a.useEffect(() => {
(0, u.w1)({
  guildId: g
});
  }, [g]);
  let _ = (0, f.Z)({
  applicationId: null != t ? t : '',
  size: 2048
}),
h = (0, l.e7)([c.Z], () => c.Z.getChannel(v)),
C = (0, p.T)(null != g ? g : null, t, h);
  if (null == C)
return null;
  let T = null != C.activity.activity_preview_video_asset_id ? (0, x.Z)(t, C.activity.activity_preview_video_asset_id) : null,
N = E.o[t],
M = (null == N ? void 0 : N.playersSuggestionMin) != null && (null == N ? void 0 : N.playersSuggestionMax) != null ? ''.concat(N.playersSuggestionMin, ' - ').concat(N.playersSuggestionMax) : void 0;
  return (0, i.jsx)(o.Gt, {
value: I,
children: (0, i.jsx)('div', {
  className: j.scrollContainer,
  children: (0, i.jsxs)(s.Scroller, {
    className: j.scroller,
    children: [
      (0, i.jsx)('div', {
        className: j.launcherOuterContainer,
        children: (0, i.jsx)(b, {
          activityItem: C,
          onLaunch: m,
          channelId: v
        })
      }),
      (0, i.jsxs)('div', {
        className: j.activityDetailsContainer,
        children: [
          (0, i.jsxs)('div', {
            children: [
              null != T ? (0, i.jsx)('div', {
                className: j.heroVideoContainer,
                children: (0, i.jsx)(d.Z, {
                  loop: !0,
                  autoPlay: !0,
                  muted: !0,
                  className: j.heroVideo,
                  src: T,
                  poster: _.url
                })
              }) : null,
              (0, i.jsx)('div', {
                className: j.detailsTitle,
                children: (0, i.jsx)(s.Heading, {
                  variant: 'heading-xxl/bold',
                  children: C.application.name
                })
              }),
              (0, i.jsxs)('div', {
                className: j.detailsDetails,
                children: [
                  null != M ? (0, i.jsxs)('div', {
                    className: j.detailItem,
                    children: [
                      (0, i.jsx)(s.GroupIcon, {
                        size: 'xs',
                        color: 'currentColor'
                      }),
                      (0, i.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        className: j.detailItemText,
                        children: S.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({
                          nPlayers: M
                        })
                      })
                    ]
                  }) : null,
                  (null == N ? void 0 : N.timeSuggestionMinutes) != null ? (0, i.jsxs)('div', {
                    className: j.detailItem,
                    children: [
                      (0, i.jsx)(s.HourglassIcon, {
                        size: 'xs',
                        color: 'currentColor'
                      }),
                      (0, i.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        className: j.detailItemText,
                        children: S.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({
                          nMinutes: N.timeSuggestionMinutes
                        })
                      })
                    ]
                  }) : null,
                  (0, i.jsxs)('div', {
                    className: j.detailItem,
                    children: [
                      (0, i.jsx)(s.TagsIcon, {
                        size: 'xs',
                        color: 'currentColor'
                      }),
                      (0, i.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        className: j.detailItemText,
                        children: C.application.tags.slice(0, 3).join(', ')
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          (0, i.jsx)(s.Heading, {
            variant: 'heading-lg/medium',
            className: j.detailsDescription,
            children: C.application.description
          }),
          (0, i.jsx)('div', {
            className: j.divider
          }),
          (0, i.jsx)('div', {
            className: j.imagesContainer,
            children: (null !== (n = null == N ? void 0 : N.gameplayImageUrls) && void 0 !== n ? n : []).map(e => (0, i.jsx)('img', {
              src: e,
              alt: S.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({
                activityName: C.application.name
              }),
              className: j.activityImage
            }, e))
          })
        ]
      })
    ]
  })
})
  });
}

function b(e) {
  var n, r;
  let {
activityItem: d,
onLaunch: u,
channelId: p
  } = e, x = (0, f.Z)({
applicationId: d.application.id,
size: 2048
  }), {
analyticsLocations: E
  } = (0, o.ZP)(), N = (0, I.Z)(), [b, M] = a.useState(null !== (n = (0, v.$)({
allowGdmActivityChannelSuggestion: !0
  })) && void 0 !== n ? n : void 0), [A, Z] = a.useState(null !== (r = (0, m.d)({
guildId: b,
allowGdmActivityChannelSuggestion: !0
  })) && void 0 !== r ? r : void 0), y = (0, l.e7)([c.Z], () => c.Z.getChannel(A), [A]), D = (0, v.W)(), L = (0, m.F)(b), O = a.useCallback(() => {
var e;
if (null != A)
  (0, g.Z)({
    targetApplicationId: null == d ? void 0 : null === (e = d.application) || void 0 === e ? void 0 : e.id,
    currentEmbeddedApplication: N,
    channelId: A,
    guildId: b,
    embeddedActivitiesManager: h.Z,
    analyticsLocations: E
  }).then(u);
  }, [
d,
E,
N,
u,
A,
b
  ]), B = a.useCallback(() => {
(0, s.openModalLazy)(async () => {
  let {
    default: e
  } = await Promise.all([
    t.e('60133'),
    t.e('91249')
  ]).then(t.bind(t, 827940));
  return n => (0, i.jsx)(e, {
    activityItem: d,
    ...n,
    analyticsLocations: E
  });
});
  }, [
d,
E
  ]), V = null == y || null != y.guild_id && !(null != b && null != A && D.some(e => e.value === b) && L.some(e => e.value.channel.id === A)) && !0;
  return (0, i.jsxs)('div', {
className: j.launcherInnerContainer,
children: [
  (0, i.jsx)(_.Z, {
    applicationName: d.application.name,
    imageBackground: x,
    imageClassName: j.launchImage,
    imageNotFoundClassName: j.brokenLaunchImage
  }),
  (0, i.jsx)(s.Text, {
    variant: 'text-md/medium',
    children: S.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
  }),
  null == p ? (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(s.Select, {
        placeholder: S.Z.Messages.GUILD_SELECT,
        optionClassName: j.__invalid_option,
        options: D,
        renderOptionValue: e => {
          let n = e.find(e => e.value === b);
          return null == n ? null : (0, i.jsx)(T.m, {
            guildId: n.value
          });
        },
        renderOptionLabel: e => {
          let {
            value: n
          } = e;
          return (0, i.jsx)(T.m, {
            guildId: n
          });
        },
        isSelected: e => e === b,
        select: e => {
          var n;
          M(e), Z(null !== (n = (0, m.d)({
            guildId: e
          })) && void 0 !== n ? n : void 0);
        },
        serialize: e => e
      }),
      (0, i.jsx)(s.Select, {
        placeholder: S.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
        optionClassName: j.__invalid_option,
        options: L,
        isSelected: e => {
          let {
            channel: n
          } = e;
          return n.id === A;
        },
        select: e => {
          let {
            channel: n
          } = e;
          return Z(n.id);
        },
        serialize: e => {
          let {
            channel: n
          } = e;
          return n.id;
        },
        renderOptionValue: () => {
          let e = L.find(e => e.value.channel.id === A);
          return null == e ? null : (0, i.jsx)(C.O, {
            channel: e.value.channel,
            users: e.value.users
          });
        },
        renderOptionLabel: e => {
          let {
            value: {
              channel: n,
              users: t
            }
          } = e;
          return (0, i.jsx)(C.O, {
            channel: n,
            users: t
          });
        }
      }),
      (0, i.jsx)(s.Button, {
        fullWidth: !0,
        disabled: V,
        onClick: O,
        children: S.Z.Messages.START
      }),
      (0, i.jsx)('div', {
        className: j.divider
      }),
      (0, i.jsx)(s.Button, {
        fullWidth: !0,
        color: s.Button.Colors.PRIMARY,
        onClick: B,
        children: S.Z.Messages.SHARE
      })
    ]
  }) : (0, i.jsxs)('div', {
    className: j.singleRowShareContainer,
    children: [
      (0, i.jsx)(s.Button, {
        fullWidth: !0,
        disabled: V,
        onClick: O,
        children: S.Z.Messages.START
      }),
      (0, i.jsx)(s.Button, {
        className: j.shareIconButton,
        color: s.Button.Colors.PRIMARY,
        onClick: B,
        children: (0, i.jsx)(s.ArrowAngleLeftUpIcon, {
          size: 'md',
          color: 'currentColor'
        })
      })
    ]
  })
]
  });
}