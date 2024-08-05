n.d(t, {
  Z: function() {
return O;
  }
}), n(47120);
var a = n(735250),
  i = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(239091),
  d = n(434650),
  u = n(213459),
  g = n(695346),
  v = n(594174),
  m = n(695103),
  p = n(880448),
  x = n(810090),
  I = n(823379),
  f = n(5192),
  _ = n(624138),
  h = n(115130),
  C = n(147865),
  T = n(542094),
  E = n(665811),
  S = n(182906),
  j = n(556505),
  N = n(513202),
  b = n(884338),
  M = n(823531),
  A = n(689938),
  Z = n(93679),
  y = n(969728);

function D(e) {
  let {
value: t,
icon: n
  } = e;
  return (0, a.jsxs)(o.Text, {
className: Z.activityTag,
color: 'interactive-normal',
variant: 'text-xs/semibold',
children: [
  (0, I.lm)(n) ? (0, a.jsx)(n, {
    className: Z.icon
  }) : null,
  t
]
  });
}

function L(e) {
  let {
activity: t,
application: n,
channel: i,
guildId: l,
large: s = !1
  } = e, c = (0, r.Wu)([v.default], () => {
var e;
return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : []).map(e => {
  let [t] = e;
  return v.default.getUser(t);
}).filter(I.lm);
  }), d = f.ZP.getName(l, null == i ? void 0 : i.id, null == c ? void 0 : c[0]);
  if (d = (0, _.aF)(d, 15), null == t || 0 === c.length) {
var u, g;
let e = ''.concat((0, C.ZP)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0));
return s && (e = null !== (g = n.description) && void 0 !== g ? g : ''), (0, a.jsx)(o.Text, {
  className: Z.activitySubtitleText,
  variant: 'text-xs/normal',
  color: 'interactive-normal',
  children: e
});
  }
  return (0, a.jsxs)('div', {
className: Z.activitySubtitleText,
children: [
  (0, a.jsx)(o.Text, {
    className: Z.usersArePlayingText,
    variant: 'text-xs/normal',
    children: c.length > 1 ? A.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
      username: d,
      count: c.length - 1
    }) : A.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
      username: d
    })
  }),
  (0, a.jsx)(b.Z, {
    size: s ? b.u.SIZE_24 : b.u.SIZE_16,
    guildId: l,
    users: c,
    max: 6
  })
]
  });
}

function O(e) {
  var t;
  let {
activityItem: n,
channel: l,
guildId: v,
locationObject: I,
onActivityItemVisible: f,
onActivityItemSelected: _,
large: b = !1
  } = e, {
imageBackground: O,
videoUrl: B,
activityAction: V,
joinableEmbeddedApp: R,
onActivityItemSelected: k,
labelType: H,
staffReleasePhase: P
  } = (0, T.ZP)({
activityItem: n,
channel: l,
guildId: v,
locationObject: I,
onActivityItemVisible: f,
onActivityItemSelected: _,
embeddedActivitiesManager: N.Z
  }), F = (0, r.e7)([
h.Z,
m.Z
  ], () => h.Z.inDevModeForApplication(n.application.id) || m.Z.inTestModeForApplication(n.application.id), [n.application.id]), {
application: Y
  } = n, w = i.useCallback(e => e && (null == f ? void 0 : f({
applicationId: n.application.id
  })), [
n.application.id,
f
  ]), U = (0, d.O)(w, 0.8, !0), [G, W] = i.useState(!1), [z, q] = i.useState(G);
  i.useEffect(() => {
G && q(!0);
  }, [G]);
  let J = () => W(!0),
K = () => W(!1),
X = g.Sb.useSetting(),
$ = i.useCallback(() => {
  null == k || k(), u.ZP.maybeQueryForInstallLessApps(Y.id, null == l ? void 0 : l.id);
}, [
  Y.id,
  null == l ? void 0 : l.id,
  k
]);
  return (0, a.jsxs)(o.Clickable, {
onClick: V === T.JS.START ? $ : void 0,
onContextMenu: X ? e => {
  (0, c.vq)(e, e => (0, a.jsx)(M.Z, {
    application: Y,
    ...e
  }));
} : void 0,
className: s()(Z.activityItem, {
  [Z.large]: !0 === b,
  [Z.disabled]: V !== T.JS.START
}),
children: [
  (0, a.jsxs)('div', {
    ref: U,
    className: s()(Z.activityImageContainer, {
      [Z.large]: !0 === b
    }),
    onMouseEnter: J,
    onFocus: J,
    onMouseLeave: K,
    onBlur: K,
    children: [
      (0, a.jsx)(S.Z, {
        imageBackground: O,
        applicationName: Y.name,
        imageClassName: s()(Z.activityImage, {
          [Z.large]: !0 === b
        }),
        imageNotFoundClassName: Z.brokenImageIconWrapper
      }),
      null != B && z && V === T.JS.START ? (0, a.jsx)('div', {
        className: s()(Z.activityVideo, {
          [Z.videoFadeOut]: !G
        }),
        onAnimationEnd: () => G ? null : q(!1),
        children: (0, a.jsx)(x.Z, {
          className: Z.activityVideo,
          src: B,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      }) : null,
      V !== T.JS.START ? (0, a.jsx)(E.U, {
        action: V,
        onClick: $
      }) : null,
      (0, a.jsx)('div', {
        className: Z.overlayBadge,
        children: (0, a.jsx)('div', {
          className: Z.badgeContainer,
          children: (0, a.jsx)(j.Z, {
            name: Y.name,
            labelType: H
          })
        })
      }),
      F ? (0, a.jsx)(o.Tooltip, {
        text: A.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
        children: e => (0, a.jsx)('div', {
          className: Z.devShelfBadge,
          ...e,
          children: (0, a.jsx)(p.Z, {
            className: Z.devShelfIcon
          })
        })
      }) : null
    ]
  }),
  (0, a.jsxs)('div', {
    className: s()(Z.activityTextContainer, {
      [Z.large]: b
    }),
    children: [
      b ? (0, a.jsx)(o.Text, {
        className: Z.activityMaxParticipantsLarge,
        variant: 'text-xs/normal',
        color: 'interactive-normal',
        children: (0, C.ZP)(null !== (t = Y.maxParticipants) && void 0 !== t ? t : 0)
      }) : null,
      (0, a.jsxs)('div', {
        className: Z.activityName,
        children: [
          (0, a.jsx)(o.Heading, {
            className: Z.activityTitleText,
            variant: 'heading-md/semibold',
            color: 'interactive-active',
            children: Y.name
          }),
          null != P ? (0, a.jsx)(o.Tooltip, {
            text: P,
            children: e => (0, a.jsx)('img', {
              className: Z.staffBadge,
              alt: P,
              src: y,
              ...e
            })
          }) : null
        ]
      }),
      (0, a.jsx)(L, {
        activity: null == R ? void 0 : R.embeddedActivity,
        application: Y,
        channel: l,
        guildId: v,
        large: b
      }),
      (0, a.jsx)('div', {
        className: Z.activityTagsContainer,
        children: Y.tags.slice(0, 3).map(e => (0, a.jsx)(D, {
          value: e
        }, 'activity-tag-'.concat(Y.id, '-').concat(e)))
      })
    ]
  })
]
  });
}