n(47120);
var i, a, s = n(735250),
  r = n(470079),
  l = n(120356),
  o = n.n(l),
  c = n(442837),
  d = n(692547),
  u = n(481060),
  _ = n(438139),
  h = n(2052),
  E = n(726542),
  I = n(638880),
  m = n(655922),
  g = n(122810),
  p = n(833664),
  T = n(503438),
  S = n(420660),
  f = n(74433),
  C = n(952561),
  N = n(513202),
  A = n(906732),
  v = n(812206),
  Z = n(933557),
  L = n(925329),
  O = n(382182),
  R = n(871118),
  x = n(707409),
  b = n(849171),
  P = n(314897),
  M = n(592125),
  D = n(594174),
  y = n(368874),
  j = n(446753),
  U = n(395361),
  G = n(639351),
  k = n(368666),
  w = n(81063),
  B = n(823379),
  H = n(51144),
  V = n(599706),
  F = n(981631),
  Y = n(689938),
  W = n(39653);
let z = {
SMALL: 64,
LARGE: 160
  },
  K = [
14,
14,
12,
12,
10,
8,
6
  ],
  q = function(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
return (0, s.jsx)(u.Text, {
  className: o()(W.textContent, t),
  variant: 'text-sm/semibold',
  children: e
});
  },
  Q = function(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
return (0, s.jsx)(u.Text, {
  className: o()(W.textContent, t),
  variant: 'text-xs/normal',
  children: e
});
  },
  X = (0, _.Z)(e => {
let {
  message: t
} = e;
return (0, s.jsx)('div', {
  className: W.__invalid_timestamp,
  children: t
});
  }),
  J = e => {
let {
  children: t
} = e;
return (0, s.jsx)('section', {
  className: W.section,
  children: t
});
  };
class $ extends r.Component {
renderTimePlayed() {
  let e;
  let {
    activity: t
  } = this.props, {
    timestamps: n
  } = t;
  return null == n || !(0, p.Z)(t) || (0, T.Z)(t) ? null : Q(e = (0, g.Z)(t) ? (0, s.jsx)(X, {
    timestamps: n
  }) : (0, s.jsx)(x.ZP, {
    start: n.start,
    end: n.end,
    location: x.ZP.Locations.USER_ACTIVITY,
    className: W.__invalid_playTime
  }));
}
render() {
  var e, t;
  let {
    activity: {
      assets: i,
      details: a,
      state: r,
      application_id: l
    },
    getAssetImage: c
  } = this.props;
  return (0, s.jsx)(J, {
    children: (0, s.jsxs)('div', {
      className: W.activitySection,
      children: [
        null != i && 0 !== Object.keys(i).length ? (0, s.jsxs)('div', {
          className: W.activitySectionAssets,
          children: [
            (0, s.jsx)('img', {
              alt: null !== (e = i.large_text) && void 0 !== e ? e : '',
              src: c(l, i.large_image, [
                z.LARGE,
                z.LARGE
              ]),
              className: o()(W.largeImage, {
                [W.largeImageMask]: null != i.small_image
              })
            }),
            null != i.small_image ? (0, s.jsx)('img', {
              alt: null !== (t = i.small_text) && void 0 !== t ? t : '',
              src: c(l, i.small_image, [
                z.SMALL,
                z.SMALL
              ]),
              className: W.smallImage
            }) : null
          ]
        }) : (0, s.jsx)('div', {
          className: W.activitySectionAssets,
          children: (0, s.jsx)('img', {
            alt: '',
            src: n(211827),
            className: W.largeImage
          })
        }),
        (0, s.jsxs)('div', {
          children: [
            q(null != a && '' !== a ? a : Y.Z.Messages.USER_ACTIVITY_HEADER_PLAYING),
            null != r ? Q(r) : null,
            this.renderTimePlayed()
          ]
        })
      ]
    })
  });
}
  }
  (a = i || (i = {})).XBOX = 'XBOX', a.SPOTIFY = 'SPOTIFY', a.MULTIPLE = 'MULTIPLE';
let ee = e => {
  let t, {
src: n,
onClick: i,
onContextMenu: a
  } = e;
  switch (n) {
case 'XBOX':
  t = (0, s.jsx)(G.Z, {
    className: W.headerIcon,
    color: d.Z.unsafe_rawColors.PRIMARY_300.css
  });
  break;
case 'SPOTIFY':
  t = (0, s.jsx)(U.Z, {
    className: W.headerIcon,
    color: d.Z.unsafe_rawColors.SPOTIFY.css
  });
  break;
case 'MULTIPLE':
  t = (0, s.jsx)('div', {
    className: W.multipleIconWrapper,
    children: (0, s.jsx)(u.GameControllerIcon, {
      size: 'md',
      className: o()(W.headerIcon, W.multipleIcon),
      color: d.Z.unsafe_rawColors.PRIMARY_300.css
    })
  });
  break;
default:
  t = (0, s.jsx)('img', {
    src: null != n ? n : void 0,
    alt: '',
    className: W.headerIcon
  });
  }
  return null != i || null != a ? (0, s.jsx)(u.Clickable, {
onClick: i,
className: o()(null != i ? W.clickableIcon : ''),
onContextMenu: a,
children: t
  }) : t;
};
ee.Src = i;
let et = e => {
  let {
priorityUser: t,
title: n,
subtitle: i,
icon: a,
onContextMenu: r,
guildId: l
  } = e;
  return (0, s.jsxs)('header', {
className: null != a ? W.headerFull : W.headerSimple,
children: [
  (0, s.jsx)(u.Avatar, {
    src: t.user.getAvatarURL(l, 32),
    'aria-label': t.user.username,
    size: u.AvatarSizes.SIZE_32,
    className: W.headerAvatar,
    status: t.status,
    onContextMenu: r
  }),
  (0, s.jsxs)('div', {
    className: W.__invalid_headerDetails,
    children: [
      (0, s.jsx)(u.Text, {
        className: o()(W.textContent),
        variant: 'text-md/semibold',
        children: n
      }),
      (0, s.jsx)(u.Text, {
        color: 'header-secondary',
        className: W.textContent,
        variant: 'text-sm/normal',
        children: i
      })
    ]
  }),
  null != a ? a : null
]
  });
};
et.Icon = ee;
let en = e => {
  let {
children: t,
className: n,
...i
  } = e;
  return (0, s.jsx)(u.FocusRing, {
children: (0, s.jsx)(j.Z, {
  className: o()(n, W.wrapper),
  padded: !0,
  ...i,
  children: t
})
  });
};
en.Header = et, en.Body = e => {
  let {
children: t
  } = e;
  return (0, s.jsx)(j.Z, {
inset: !0,
padded: !1,
className: W.body,
children: t
  });
}, en.Separator = e => {
  let {
inset: t,
className: n
  } = e;
  return (0, s.jsx)('div', {
className: o()(W.separator, {
  [W.inset]: t
}, n)
  });
}, en.VoiceSection = e => {
  var t, n;
  let {
guild: i,
channel: a,
onGuildClick: l,
partySize: c,
members: d,
onChannelContextMenu: _
  } = e, h = r.useRef(null), E = (0, Z.ZP)(a, !0);
  return (0, s.jsx)(J, {
children: (0, s.jsxs)('div', {
  className: W.voiceSection,
  ref: h,
  onContextMenu: e => _(e, a),
  children: [
    (0, s.jsx)(u.Clickable, {
      onClick: l,
      'aria-hidden': !0,
      tabIndex: -1,
      children: (0, s.jsxs)('div', {
        className: W.voiceSectionAssets,
        children: [
          null != i.getIconURL(32) ? (0, s.jsx)('img', {
            alt: '',
            src: null !== (t = i.getIconURL(32)) && void 0 !== t ? t : void 0,
            className: o()(W.voiceSectionGuildImage, W.largeImageMask)
          }) : (0, s.jsx)('div', {
            className: W.voiceSectionNoGuildImageWrapper,
            children: (0, s.jsx)('div', {
              className: W.voiceSectionNoGuildImage,
              style: {
                fontSize: null !== (n = K[i.acronym.length]) && void 0 !== n ? n : K[K.length - 1]
              },
              children: i.acronym
            })
          }),
          (0, s.jsx)('div', {
            className: W.voiceSectionIconWrapper,
            children: (0, s.jsx)(u.VoiceNormalIcon, {
              size: 'md',
              color: 'currentColor',
              className: W.voiceSectionIcon
            })
          })
        ]
      })
    }),
    (0, s.jsx)(u.Clickable, {
      onClick: l,
      focusProps: {
        ringTarget: h
      },
      children: (0, s.jsxs)('div', {
        className: W.voiceSectionDetails,
        children: [
          q(i.toString(), W.voiceSectionText),
          Q(E, W.voiceSectionText)
        ]
      })
    }),
    (0, s.jsx)(V.Z, {
      partySize: c,
      members: d,
      guildId: i.id
    })
  ]
})
  });
}, en.GameSection = e => {
  let {
icon: t,
name: n,
partySize: i,
members: a
  } = e;
  return (0, s.jsx)(J, {
children: (0, s.jsxs)('div', {
  className: W.gameSection,
  children: [
    null != t ? (0, s.jsx)('img', {
      alt: '',
      src: t,
      className: W.gameSectionIcon
    }) : null,
    (0, s.jsxs)('div', {
      children: [
        q(n),
        Q(Y.Z.Messages.ACTIVITY_FEED_SINGLE_MEMBER_LIST_HEADER.format({
          memberCount: i.totalSize
        }))
      ]
    }),
    (0, s.jsx)(V.Z, {
      partySize: i,
      members: a
    })
  ]
})
  });
}, en.RichPresenceSection = $, en.XboxSection = e => {
  let {
title: t
  } = e;
  return (0, s.jsx)(J, {
children: (0, s.jsxs)('div', {
  className: W.xboxSection,
  children: [
    (0, s.jsx)(G.Z, {
      className: W.xboxSectionIcon
    }),
    (0, s.jsxs)('div', {
      className: W.__invalid_xboxSectionDetails,
      children: [
        q(t),
        Q(Y.Z.Messages.GAME_FEED_ACTIVITY_PLAYING_XBOX)
      ]
    })
  ]
})
  });
}, en.SpotifySection = e => {
  var t;
  let {
activity: {
  assets: n,
  details: i,
  state: a,
  application_id: r
},
partySize: l,
members: c,
isSolo: u,
getAssetImage: _
  } = e;
  return (0, s.jsx)(J, {
children: (0, s.jsxs)('div', {
  className: W.spotifySection,
  children: [
    null != n ? (0, s.jsxs)('div', {
      className: W.activitySectionAssets,
      children: [
        (0, s.jsx)('img', {
          alt: null !== (t = n.large_text) && void 0 !== t ? t : '',
          src: _(r, n.large_image, [
            z.LARGE,
            z.LARGE
          ]),
          className: o()(W.largeImage, W.borderRadius0, {
            [W.largeImageMask]: null != n.small_image
          })
        }),
        u ? null : (0, s.jsx)(U.Z, {
          className: W.smallImage,
          color: d.Z.unsafe_rawColors.SPOTIFY.css
        })
      ]
    }) : (0, s.jsx)('div', {}),
    (0, s.jsxs)('div', {
      children: [
        null != i ? q(i) : null,
        null != a ? Q(a) : null
      ]
    }),
    (0, s.jsx)(V.Z, {
      minAvatarsShown: u ? 2 : 1,
      partySize: l,
      members: c
    })
  ]
})
  });
}, en.TwitchSection = e => {
  let t, {
  activity: i,
  user: a,
  getAssetImage: r,
  guildId: l
} = e,
{
  name: c,
  details: d,
  assets: _,
  application_id: h
} = i;
  if (null != _ && (0, S.Z)(i)) {
var I;
t = (0, s.jsx)(y.Z, {
  className: W.twitchSectionPreviewWrapper,
  aspectRatio: 16 / 9,
  children: (0, s.jsxs)(u.Clickable, {
    href: (0, m.Z)(i),
    tag: 'a',
    target: '_blank',
    children: [
      (0, s.jsx)('img', {
        alt: null !== (I = _.large_text) && void 0 !== I ? I : '',
        src: r(h, _.large_image, [
          900,
          500
        ]),
        className: W.twitchSectionPreview
      }),
      (0, s.jsx)('img', {
        src: n(497726),
        className: W.twitchSectionPlayButton,
        alt: ''
      })
    ]
  })
});
  }
  return (0, s.jsxs)(J, {
children: [
  (0, s.jsxs)('div', {
    className: o()({
      [W.twitchSectionSimple]: null == a,
      [W.twitchSectionFull]: null != a
    }),
    children: [
      (0, s.jsx)('img', {
        alt: '',
        src: E.Z.get(F.ABu.TWITCH).icon.lightSVG,
        className: W.twitchSectionIcon
      }),
      (0, s.jsxs)('div', {
        children: [
          q(c),
          null != d ? Q(d) : null
        ]
      }),
      null != a ? (0, s.jsx)(u.Avatar, {
        src: a.getAvatarURL(l, 24),
        'aria-label': a.username,
        className: W.twitchSectionAvatar,
        size: u.AvatarSizes.SIZE_24
      }) : null
    ]
  }),
  t
]
  });
}, en.ApplicationStreamingSection = e => {
  var t, n;
  let {
activity: i,
user: a,
applicationStream: r,
onPreviewClick: l,
guildId: o
  } = e, d = (0, c.e7)([M.Z], () => M.Z.getChannel(r.channelId)), [_, h] = (0, O.wq)(d), E = (0, s.jsxs)(u.Clickable, {
onClick: _ ? l : void 0,
className: W.applicationStreamingPreviewWrapper,
children: [
  (0, s.jsx)(R.Z, {
    stream: r,
    className: W.applicationStreamingPreviewSize
  }),
  (0, s.jsx)('div', {
    className: W.applicationStreamingHoverWrapper,
    children: (0, s.jsx)('div', {
      className: W.applicationStreamingHoverText,
      children: (0, O.P9)(h)
    })
  })
]
  }), I = null !== (n = null === (t = (0, f.Z)(i, r)) || void 0 === t ? void 0 : t.activityText) && void 0 !== n ? n : Y.Z.Messages.SHARING_SCREEN;
  return (0, s.jsxs)(J, {
children: [
  (0, s.jsxs)('div', {
    className: W.applicationStreamingSection,
    children: [
      (0, s.jsx)(u.Avatar, {
        size: u.AvatarSizes.SIZE_32,
        src: a.getAvatarURL(o, 32),
        'aria-label': a.username,
        className: W.applicationStreamingAvatar
      }),
      (0, s.jsxs)('div', {
        children: [
          q(H.ZP.getName(a)),
          Q(I)
        ]
      }),
      (0, s.jsx)(k.ZP, {
        size: k.ZP.Sizes.SMALL
      })
    ]
  }),
  E
]
  });
}, en.EmbeddedActivitySection = e => {
  let {
activity: t,
channel: n,
guildId: i,
participants: a
  } = e, l = (0, C.Z)(), [o, d] = r.useState(null), _ = t.application_id;
  r.useEffect(() => {
if (null != _)
  (0, w.fetchAssetIds)(_, ['embedded_background']).then(e => {
    let [t] = e;
    return d(t);
  });
  }, [_]);
  let E = (0, c.Wu)([
  D.default,
  P.default
], () => Array.from(a).map(e => P.default.getId() === e ? null : D.default.getUser(e)).filter(B.lm)),
m = (0, h.O)(),
{
  analyticsLocations: g
} = (0, A.ZP)();
  if (null == _)
return null;
  let p = v.Z.getApplication(_);
  if (null == p)
return null;
  let T = null != t.created_at && t.created_at > 0 ? {
  start: t.created_at
} : void 0,
S = (0, w.getAssetImage)(p.id, o, 300);
  return (0, s.jsxs)(J, {
children: [
  (0, s.jsxs)('div', {
    className: W.embeddedActivityTopRow,
    children: [
      (0, s.jsx)(L.Z, {
        game: p,
        size: L.Z.Sizes.XSMALL,
        className: W.embeddedActivityIcon
      }),
      (0, s.jsx)('div', {
        className: W.embeddedActivityName,
        children: (0, s.jsx)(u.Text, {
          variant: 'text-sm/semibold',
          children: p.name
        })
      }),
      null != T ? (0, s.jsx)('div', {
        className: W.embeddedActivityTimeElapsed,
        children: (0, s.jsx)(u.Text, {
          color: 'text-muted',
          variant: 'text-sm/normal',
          children: (0, s.jsx)(X, {
            timestamps: T
          })
        })
      }) : null
    ]
  }),
  (0, s.jsxs)('div', {
    className: W.embeddedActivityPlayerContainer,
    children: [
      null != S ? (0, s.jsx)('img', {
        src: S,
        alt: p.name,
        className: W.embeddedActivityImage
      }) : null,
      (0, s.jsxs)('div', {
        className: W.embeddedActivityImageOverlay,
        children: [
          (0, s.jsx)(b.OV, {
            users: E,
            guildId: i,
            channelId: n.id
          }),
          (0, s.jsx)('div', {
            className: W.embeddedActivityJoinWrapper,
            children: (0, s.jsx)(u.Button, {
              size: u.Button.Sizes.SMALL,
              onClick: e => {
                e.stopPropagation(), (0, I.Z)({
                  applicationId: _,
                  currentEmbeddedApplication: l,
                  activityChannelId: n.id,
                  locationObject: m.location,
                  embeddedActivitiesManager: N.Z,
                  analyticsLocations: g
                });
              },
              children: Y.Z.Messages.JOIN
            })
          })
        ]
      })
    ]
  })
]
  });
}, t.Z = en;