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
  g = n(70097),
  v = n(695346),
  m = n(594174),
  p = n(695103),
  f = n(880448),
  I = n(823379),
  x = n(5192),
  _ = n(624138),
  h = n(115130),
  C = n(147865),
  T = n(542094),
  E = n(665811),
  S = n(182906),
  b = n(556505),
  N = n(513202),
  j = n(884338),
  M = n(823531),
  A = n(689938),
  Z = n(325428),
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
  } = e, c = (0, r.Wu)([m.default], () => {
var e;
return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : []).map(e => {
  let [t] = e;
  return m.default.getUser(t);
}).filter(I.lm);
  }), d = x.ZP.getName(l, null == i ? void 0 : i.id, null == c ? void 0 : c[0]);
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
  (0, a.jsx)(j.Z, {
    size: s ? j.u.SIZE_24 : j.u.SIZE_16,
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
guildId: m,
locationObject: I,
onActivityItemVisible: x,
onActivityItemSelected: _,
large: j = !1
  } = e, {
imageBackground: O,
videoUrl: B,
activityAction: V,
joinableEmbeddedApp: R,
onActivityItemSelected: k,
labelType: P,
staffReleasePhase: H
  } = (0, T.ZP)({
activityItem: n,
channel: l,
guildId: m,
locationObject: I,
onActivityItemVisible: x,
onActivityItemSelected: _,
embeddedActivitiesManager: N.Z
  }), F = (0, r.e7)([
h.Z,
p.Z
  ], () => h.Z.inDevModeForApplication(n.application.id) || p.Z.inTestModeForApplication(n.application.id), [n.application.id]), {
application: U
  } = n, w = i.useCallback(e => e && (null == x ? void 0 : x({
applicationId: n.application.id
  })), [
n.application.id,
x
  ]), Y = (0, d.O)(w, 0.8, !0), [G, W] = i.useState(!1), [z, q] = i.useState(G);
  i.useEffect(() => {
G && q(!0);
  }, [G]);
  let J = () => W(!0),
K = () => W(!1),
X = v.Sb.useSetting(),
$ = i.useCallback(() => {
  null == k || k(), u.ZP.maybeQueryForInstallLessApps(U.id, null == l ? void 0 : l.id);
}, [
  U.id,
  null == l ? void 0 : l.id,
  k
]);
  return (0, a.jsxs)(o.Clickable, {
onClick: V === T.JS.START ? $ : void 0,
onContextMenu: X ? e => {
  (0, c.vq)(e, e => (0, a.jsx)(M.Z, {
    application: U,
    ...e
  }));
} : void 0,
className: s()(Z.activityItem, {
  [Z.large]: !0 === j,
  [Z.disabled]: V !== T.JS.START
}),
children: [
  (0, a.jsxs)('div', {
    ref: Y,
    className: s()(Z.activityImageContainer, {
      [Z.large]: !0 === j
    }),
    onMouseEnter: J,
    onFocus: J,
    onMouseLeave: K,
    onBlur: K,
    children: [
      (0, a.jsx)(S.Z, {
        imageBackground: O,
        applicationName: U.name,
        imageClassName: s()(Z.activityImage, {
          [Z.large]: !0 === j
        }),
        imageNotFoundClassName: Z.brokenImageIconWrapper
      }),
      null != B && z && V === T.JS.START ? (0, a.jsx)('div', {
        className: s()(Z.activityVideo, {
          [Z.videoFadeOut]: !G
        }),
        onAnimationEnd: () => G ? null : q(!1),
        children: (0, a.jsx)(g.Z, {
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
          children: (0, a.jsx)(b.Z, {
            name: U.name,
            labelType: P
          })
        })
      }),
      F ? (0, a.jsx)(o.Tooltip, {
        text: A.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
        children: e => (0, a.jsx)('div', {
          className: Z.devShelfBadge,
          ...e,
          children: (0, a.jsx)(f.Z, {
            className: Z.devShelfIcon
          })
        })
      }) : null
    ]
  }),
  (0, a.jsxs)('div', {
    className: s()(Z.activityTextContainer, {
      [Z.large]: j
    }),
    children: [
      j ? (0, a.jsx)(o.Text, {
        className: Z.activityMaxParticipantsLarge,
        variant: 'text-xs/normal',
        color: 'interactive-normal',
        children: (0, C.ZP)(null !== (t = U.maxParticipants) && void 0 !== t ? t : 0)
      }) : null,
      (0, a.jsxs)('div', {
        className: Z.activityName,
        children: [
          (0, a.jsx)(o.Heading, {
            className: Z.activityTitleText,
            variant: 'heading-md/semibold',
            color: 'interactive-active',
            children: U.name
          }),
          null != H ? (0, a.jsx)(o.Tooltip, {
            text: H,
            children: e => (0, a.jsx)('img', {
              className: Z.staffBadge,
              alt: H,
              src: y,
              ...e
            })
          }) : null
        ]
      }),
      (0, a.jsx)(L, {
        activity: null == R ? void 0 : R.embeddedActivity,
        application: U,
        channel: l,
        guildId: m,
        large: j
      }),
      (0, a.jsx)('div', {
        className: Z.activityTagsContainer,
        children: U.tags.slice(0, 3).map(e => (0, a.jsx)(D, {
          value: e
        }, 'activity-tag-'.concat(U.id, '-').concat(e)))
      })
    ]
  })
]
  });
}