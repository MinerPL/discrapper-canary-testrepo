n.d(t, {
  Z: function() {
return B;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(831209),
  l = n(442837),
  u = n(481060),
  c = n(700582),
  d = n(812206),
  _ = n(686546),
  E = n(925329),
  f = n(924301),
  h = n(454585),
  p = n(565799),
  m = n(501655),
  I = n(427679),
  T = n(543882),
  g = n(592125),
  S = n(496675),
  A = n(594174),
  N = n(979651),
  v = n(912787),
  O = n(623552),
  R = n(718582),
  C = n(177963),
  y = n(835248),
  D = n(437431),
  L = n(874070),
  b = n(185885),
  M = n(126134),
  P = n(981631),
  U = n(765305),
  w = n(689938),
  x = n(440002);

function G(e) {
  let t = (0, v.Z)(e),
{
  category: n
} = e;
  return (null == t ? void 0 : t.isGuildStageVoice()) ? u.StageIcon : (n === M.L.GAMING || n === M.L.EMBEDDED_ACTIVITY) && e.streamersCount > 0 || n === M.L.HANGOUT && e.streamUserIds.length > 0 ? u.ScreenArrowIcon : n === M.L.EVENT && (null == t ? void 0 : t.isGuildVoice()) ? u.VoiceNormalIcon : null != t && N.Z.hasVideo(t.id) ? u.VideoIcon : u.VoiceNormalIcon;
}

function k(e) {
  let {
users: t,
othersCount: n,
extraPill: i
  } = e;
  return (0, r.jsxs)('div', {
className: x.facepile,
children: [
  t.map((e, i) => {
    let a = (0, r.jsx)(c.Z, {
      user: e,
      size: u.AvatarSizes.SIZE_20,
      'aria-label': ''
    });
    return i === t.length - 1 && 0 === n ? (0, r.jsx)('div', {
      className: x.facePileItem,
      children: a
    }, e.id) : (0, r.jsx)(_.ZP, {
      width: 20,
      height: 20,
      mask: _.ZP.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
      className: x.facePileItem,
      children: a
    }, e.id);
  }),
  n > 0 && (0, r.jsxs)(u.Text, {
    color: 'interactive-normal',
    variant: 'text-xs/medium',
    className: x.othersCount,
    children: [
      '+',
      n
    ]
  }),
  i
]
  });
}

function B(e) {
  var t, n;
  let {
cardData: a,
guildId: c,
cardIndex: _
  } = e, {
category: y
  } = a, [L, b] = i.useState(!1), B = y === M.L.HANGOUT && a.streamUserIds.length > 0, F = (0, l.e7)([T.Z], () => B ? T.Z.getPreviewURL(c, a.channelId, a.streamUserIds[0]) : null), V = (0, l.e7)([T.Z], () => y === M.L.HANGOUT ? T.Z.getIsPreviewLoading(c, a.channelId, a.streamUserIds[0]) : null), H = y === M.L.HANGOUT && a.streamUserIds.length > 0 && null == F && !V, Z = (0, l.e7)([g.Z], () => {
let e = y === M.L.HANGOUT || y === M.L.GAMING ? a.channelId : y === M.L.EVENT ? a.event.channel_id : y === M.L.EMBEDDED_ACTIVITY ? a.embeddedActivities[0].channelId : null;
return g.Z.getChannel(e);
  }), Y = (0, l.e7)([f.ZP], () => f.ZP.getActiveEventByChannel(null == Z ? void 0 : Z.id)), {
usersToShow: j,
othersCount: W
  } = (0, R.QO)(null !== (n = null == Z ? void 0 : Z.id) && void 0 !== n ? n : '', c), {
usersToShow: K
  } = (0, R.Es)(Z), z = (0, R.ni)(a), q = function(e, t, n, i) {
let {
  category: a
} = e, s = (0, v.Z)(e), {
  usersToShow: c
} = (0, R.Es)(s), _ = (0, l.e7)([T.Z], () => a === M.L.HANGOUT ? T.Z.getIsPreviewLoading(t, e.channelId, e.streamUserIds[0]) : null);
switch (a) {
  case M.L.GAMING:
    let {
      games: f
    } = e;
    if (null == f[0].application_id)
      return (0, r.jsx)(u.GameControllerIcon, {
        size: 'md',
        color: 'currentColor'
      });
    return (0, r.jsx)(E.Z, {
      game: d.Z.getApplication(f[0].application_id),
      size: 'xl',
      className: x.gameIcon
    });
  case M.L.EVENT:
    if (c.length > 0)
      return (0, r.jsx)(O.Z, {
        guildId: t,
        users: c
      });
    return e.isStage ? (0, r.jsx)(D.Z, {
      className: x.imageIcon
    }) : (0, r.jsx)(C.Z, {
      className: x.imageIcon
    });
  case M.L.EMBEDDED_ACTIVITY:
    let {
      embeddedActivities: h
    } = e;
    if (null == h[0].applicationId)
      return (0, r.jsx)(u.ActivitiesIcon, {
        size: 'md',
        color: 'currentColor'
      });
    return (0, r.jsx)(E.Z, {
      game: i,
      size: 'xl',
      className: x.gameIcon
    });
  case M.L.HANGOUT: {
    let {
      streamUserIds: i,
      userIds: a,
      channelHasVideo: s,
      isStage: l
    } = e, d = l ? c : [];
    if (l) {
      if (0 === d.length)
        return (0, r.jsx)(D.Z, {
          className: x.imageIcon
        });
      return (0, r.jsx)(O.Z, {
        guildId: t,
        users: d
      });
    }
    if (i.length > 0) {
      let e = e => (0, r.jsx)(u.TextBadge, {
        text: w.Z.Messages.LIVE,
        color: o.Z.STATUS_DANGER,
        className: e
      });
      if (_)
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(u.Spinner, {
              className: x.streamPreview
            }),
            e(x.liveBadge)
          ]
        });
      if (null != n)
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)('img', {
              src: n,
              alt: '',
              className: x.streamPreview
            }),
            e(x.liveBadge)
          ]
        });
      let a = i.map(e => A.default.getUser(e)).filter(e => null != e);
      return (0, r.jsx)(O.Z, {
        guildId: t,
        users: a
      });
    }
    let E = a.map(e => A.default.getUser(e)).filter(e => null != e);
    return (0, r.jsx)(O.Z, {
      guildId: t,
      users: E
    });
  }
}
  }(a, c, F, z), Q = function(e, t) {
let {
  category: n
} = e, i = (0, R.FP)(n === M.L.HANGOUT ? null == e ? void 0 : e.userIds : []), a = (0, R.FP)(n === M.L.HANGOUT ? null == e ? void 0 : e.streamUserIds : []), o = (0, R.FP)(n === M.L.GAMING ? null == e ? void 0 : e.gameUserIds : []), l = (0, v.Z)(e), {
  hasChannelStatus: c
} = (0, R.CE)(l), {
  usersToShow: d
} = (0, R.Es)(l), _ = (0, R.FP)(n === M.L.HANGOUT && e.isStage ? d.map(e => e.id) : []), E = new Set();
n === M.L.EMBEDDED_ACTIVITY && e.embeddedActivities.forEach(e => {
  E = new Set([
    ...E,
    ...e.userIds
  ]);
});
let f = (0, R.FP)(n === M.L.EMBEDDED_ACTIVITY ? [...E] : []);
switch (n) {
  case M.L.HANGOUT: {
    if (c && 0 === a.length) {
      let e = (0, R.K6)(i, t, !0),
        n = i.length - 1;
      return (0, r.jsxs)('div', {
        className: x.hangoutStatusTitleContainer,
        children: [
          (0, r.jsx)(u.Heading, {
            color: 'header-primary',
            variant: 'heading-sm/semibold',
            className: s()(x.hangoutStatusUsername, x.ellipsis),
            children: e
          }),
          n > 0 && (0, r.jsx)(u.Heading, {
            color: 'header-primary',
            variant: 'heading-sm/semibold',
            className: x.hangoutStatusOthers,
            children: w.Z.Messages.USER_SUMMARY_AND_OTHERS.format({
              count: n
            })
          })
        ]
      });
    }
    let n = (0, R.K6)(_.length > 0 ? _ : a.length > 0 ? a : i, t);
    if (e.isStage) {
      var h, p;
      return null !== (p = null === (h = I.Z.getStageInstanceByChannel(e.channelId)) || void 0 === h ? void 0 : h.topic) && void 0 !== p ? p : n;
    }
    return n;
  }
  case M.L.EVENT:
    return e.event.name;
  case M.L.EMBEDDED_ACTIVITY:
    return (0, R.K6)(f, t);
  case M.L.GAMING:
    return (0, R.K6)(o, t);
  default:
    return null;
}
  }(a, c), X = function(e, t, n) {
var i, a, s;
let {
  category: o
} = e, l = (0, v.Z)(e), c = G(e), {
  audienceCount: d
} = (0, R.Es)(l), {
  channelStatus: _,
  hasChannelStatus: E
} = (0, R.CE)(l);
switch (o) {
  case M.L.GAMING:
    let {
      games: f,
        channelId: p
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(u.GameControllerIcon, {
          size: 'md',
          color: 'currentColor',
          className: x.categoryIcon
        }),
        (0, r.jsx)(u.Text, {
          variant: 'text-xs/medium',
          color: 'text-secondary',
          className: x.ellipsis,
          children: 1 === f.length ? f[0].name : w.Z.Messages.MULTIPLE_GAMES_IN_CHANNEL.format({
            numGames: f.length
          })
        }),
        '\u2022',
        null != c && (0, r.jsx)(c, {
          className: x.categoryIcon
        }),
        (0, r.jsx)(u.Text, {
          variant: 'text-xs/medium',
          color: 'text-secondary',
          className: x.ellipsis,
          children: null === (i = g.Z.getChannel(p)) || void 0 === i ? void 0 : i.name
        })
      ]
    });
  case M.L.EVENT:
    let {
      event: m
    } = e, I = (0, R.NZ)(m), T = null == I ? void 0 : I.IconComponent, S = null == I ? void 0 : I.locationName;
    if (null != T && null != S)
      return (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(T, {
            className: x.categoryIcon
          }),
          (0, r.jsx)(u.Text, {
            variant: 'text-xs/medium',
            color: 'text-secondary',
            className: x.ellipsis,
            children: S
          }),
          null != d && d > 0 && (0, r.jsxs)(r.Fragment, {
            children: [
              '\u2022',
              (0, r.jsx)(u.GroupIcon, {
                size: 'md',
                color: 'currentColor',
                className: x.categoryIcon
              }),
              (0, r.jsx)(u.Text, {
                variant: 'text-xs/medium',
                color: 'text-secondary',
                children: d
              })
            ]
          })
        ]
      });
    return null;
  case M.L.EMBEDDED_ACTIVITY:
    let {
      embeddedActivities: A
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(u.ActivitiesIcon, {
          size: 'md',
          color: 'currentColor',
          className: x.categoryIcon
        }),
        (0, r.jsx)(u.Text, {
          variant: 'text-xs/medium',
          color: 'text-secondary',
          className: x.ellipsis,
          children: 1 === A.length ? null == t ? void 0 : t.name : w.Z.Messages.MULTIPLE_ACTIVITIES_IN_CHANNEL.format({
            numActivities: A.length
          })
        }),
        '\u2022',
        null != c && (0, r.jsx)(c, {
          className: x.categoryIcon
        }),
        (0, r.jsx)(u.Text, {
          variant: 'text-xs/medium',
          color: 'text-secondary',
          className: x.ellipsis,
          children: null === (a = g.Z.getChannel(A[0].channelId)) || void 0 === a ? void 0 : a.name
        })
      ]
    });
  case M.L.HANGOUT: {
    let {
      channelId: t
    } = e, i = E && null == n;
    return (0, r.jsx)(r.Fragment, {
      children: i ? (0, r.jsx)(u.Text, {
        variant: 'text-xs/medium',
        color: 'text-secondary',
        className: x.ellipsis,
        children: h.Z.parseVoiceChannelStatus(_, !0, {
          channelId: t
        })
      }) : (0, r.jsxs)(r.Fragment, {
        children: [
          null != c && (0, r.jsx)(c, {
            className: x.categoryIcon
          }),
          (0, r.jsx)(u.Text, {
            variant: 'text-xs/medium',
            color: 'text-secondary',
            className: x.ellipsis,
            children: null === (s = g.Z.getChannel(t)) || void 0 === s ? void 0 : s.name
          }),
          E && null != n && (0, r.jsxs)(r.Fragment, {
            children: [
              '\u2022',
              (0, r.jsx)(u.Text, {
                variant: 'text-xs/medium',
                color: 'text-secondary',
                className: x.ellipsis,
                children: h.Z.parseVoiceChannelStatus(_, !0, {
                  channelId: t
                })
              })
            ]
          }),
          null != d && d > 0 && (0, r.jsxs)(r.Fragment, {
            children: [
              '\u2022',
              (0, r.jsx)(u.GroupIcon, {
                size: 'md',
                color: 'currentColor',
                className: x.categoryIcon
              }),
              (0, r.jsx)(u.Text, {
                variant: 'text-xs/medium',
                color: 'text-secondary',
                children: d
              })
            ]
          })
        ]
      })
    });
  }
  default:
    return null;
}
  }(a, z, F), $ = function(e) {
let {
  category: t
} = e, n = (0, v.Z)(e), {
  audienceCount: r
} = (0, R.Es)(n);
switch (t) {
  case M.L.EVENT:
    if (null != r)
      return [{
        icon: u.HeadphonesIcon,
        count: r
      }];
    return [];
  case M.L.HANGOUT:
    let {
      streamUserIds: i,
        userIds: a,
        channelId: s,
        isStage: o
    } = e;
    if (o) {
      var l;
      return [{
        icon: u.HeadphonesIcon,
        count: null !== (l = p.Z.getParticipantCount(s, m.pV.AUDIENCE)) && void 0 !== l ? l : 0
      }];
    }
    if (i.length > 0)
      return [{
        icon: u.GroupIcon,
        count: a.length > 0 ? a.length : null
      }];
    return [];
  case M.L.EMBEDDED_ACTIVITY:
    return [{
        icon: u.GroupIcon,
        count: e.voiceUsersCount > 0 ? e.voiceUsersCount : null
      },
      {
        icon: u.ScreenArrowIcon,
        count: e.streamersCount > 0 ? e.streamersCount : null
      }
    ];
  case M.L.GAMING:
    return [{
        icon: u.GroupIcon,
        count: e.voiceStates.length > 0 ? e.voiceStates.length : null
      },
      {
        icon: u.ScreenArrowIcon,
        count: e.streamersCount > 0 ? e.streamersCount : null
      }
    ];
  default:
    return [];
}
  }(a), J = (0, R.$1)(a, c, _), ee = function(e, t, n) {
var i;
let {
  category: a
} = e, s = null, o = a === M.L.EVENT;
if (null == (s = o ? e.event.channel_id : a === M.L.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : e.channelId) && !o)
  return;
let l = null != s && N.Z.isInChannel(s),
  c = o && (e.event.entity_type === U.WX.EXTERNAL || e.event.entity_type === U.WX.NONE) ? w.Z.Messages.VIEW : l ? w.Z.Messages.GUILD_POPOUT_JOINED : w.Z.Messages.JOIN,
  d = (null === (i = g.Z.getChannel(s)) || void 0 === i ? void 0 : i.isGuildVocal()) && !S.Z.can(P.Plq.CONNECT, g.Z.getChannel(s)),
  _ = (0, R.DE)(e, t),
  E = (0, r.jsxs)(u.Button, {
    size: u.Button.Sizes.MIN,
    innerClassName: x.joinButtonInner,
    color: u.Button.Colors.GREEN,
    disabled: l || d,
    onClick: r => {
      r.stopPropagation(), (0, R.ob)(e, t, n, R.pV.JOIN_BUTTON), null == _ || _();
    },
    className: x.joinButton,
    children: [
      c,
      d && (0, r.jsx)(u.LockIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 14,
        height: 14
      })
    ]
  });
return (0, r.jsx)('div', {
  className: x.joinButtonWhatWrapper,
  children: E
});
  }(a, c, _), {
hasChannelStatus: et
  } = (0, R.CE)(Z), en = G(a), er = y === M.L.HANGOUT && et && null == F, ei = (null != Y || !!(null == Z ? void 0 : Z.isGuildStageVoice())) && K.length > 0, ea = y === M.L.HANGOUT && (0 === a.streamUserIds.length || H) && !(null == Z ? void 0 : Z.isGuildStageVoice()), es = y === M.L.EMBEDDED_ACTIVITY && a.streamersCount > 0 ? (0, r.jsxs)('div', {
className: x.pill,
children: [
  (0, r.jsx)(u.ScreenArrowIcon, {
    size: 'md',
    color: 'currentColor',
    className: x.pillIcon
  }),
  (0, r.jsx)(u.Text, {
    color: 'text-normal',
    variant: 'text-xs/medium',
    children: a.streamersCount
  })
]
  }) : null;
  return (0, r.jsxs)(u.Clickable, {
onClick: () => null == J ? void 0 : J(),
tag: 'div',
className: x.container,
onMouseEnter: () => b(!0),
onMouseLeave: () => b(!1),
children: [
  (0, r.jsx)('div', {
    className: s()(x.image, {
      [x.streamContainer]: B && !H && !(null == Z ? void 0 : Z.isGuildStageVoice())
    }),
    children: q
  }),
  (0, r.jsxs)('div', {
    className: s()(x.content, er && x.hangoutChannelStatusContent),
    children: [
      null != Q && (0, r.jsx)(u.Heading, {
        color: 'header-primary',
        variant: 'heading-sm/semibold',
        className: 0 === $.length ? x.multiLineTitle : x.singleLineTitle,
        children: Q
      }),
      null != X && (0, r.jsx)(u.Text, {
        variant: 'text-xs/medium',
        color: 'text-secondary',
        className: x.subtitle,
        children: X
      }),
      !(ei || ea) && !(null == Z ? void 0 : Z.isGuildStageVoice()) && j.length > 0 && (0, r.jsx)(k, {
        users: j,
        othersCount: W,
        extraPill: es
      }),
      er && (0, r.jsxs)(u.Text, {
        variant: 'text-xs/medium',
        color: 'text-secondary',
        className: x.hangoutChannel,
        children: [
          null != en && (0, r.jsx)(en, {
            className: x.categoryIcon
          }),
          (0, r.jsx)(u.Text, {
            variant: 'text-xs/medium',
            color: 'text-secondary',
            className: x.ellipsis,
            children: null === (t = g.Z.getChannel(a.channelId)) || void 0 === t ? void 0 : t.name
          })
        ]
      })
    ]
  }),
  L && ee
]
  });
}