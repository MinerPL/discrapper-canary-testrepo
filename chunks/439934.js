t.d(n, {
  Z: function() {
return O;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  l = t(120356),
  s = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(239091),
  d = t(434650),
  u = t(213459),
  g = t(695346),
  p = t(594174),
  v = t(695103),
  m = t(880448),
  x = t(810090),
  I = t(823379),
  f = t(5192),
  _ = t(624138),
  h = t(115130),
  C = t(147865),
  T = t(542094),
  E = t(665811),
  S = t(182906),
  j = t(556505),
  N = t(513202),
  b = t(884338),
  M = t(823531),
  A = t(689938),
  Z = t(93679),
  y = t(969728);

function D(e) {
  let {
value: n,
icon: t
  } = e;
  return (0, i.jsxs)(o.Text, {
className: Z.activityTag,
color: 'interactive-normal',
variant: 'text-xs/semibold',
children: [
  (0, I.lm)(t) ? (0, i.jsx)(t, {
    className: Z.icon
  }) : null,
  n
]
  });
}

function L(e) {
  let {
activity: n,
application: t,
channel: a,
guildId: l,
large: s = !1
  } = e, c = (0, r.Wu)([p.default], () => {
var e;
return Array.from(null !== (e = null == n ? void 0 : n.userIds) && void 0 !== e ? e : []).map(e => {
  let [n] = e;
  return p.default.getUser(n);
}).filter(I.lm);
  }), d = f.ZP.getName(l, null == a ? void 0 : a.id, null == c ? void 0 : c[0]);
  if (d = (0, _.aF)(d, 15), null == n || 0 === c.length) {
var u, g;
let e = ''.concat((0, C.Z)(null !== (u = t.maxParticipants) && void 0 !== u ? u : 0));
return s && (e = null !== (g = t.description) && void 0 !== g ? g : ''), (0, i.jsx)(o.Text, {
  className: Z.activitySubtitleText,
  variant: 'text-xs/normal',
  color: 'interactive-normal',
  children: e
});
  }
  return (0, i.jsxs)('div', {
className: Z.activitySubtitleText,
children: [
  (0, i.jsx)(o.Text, {
    className: Z.usersArePlayingText,
    variant: 'text-xs/normal',
    children: c.length > 1 ? A.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
      username: d,
      count: c.length - 1
    }) : A.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
      username: d
    })
  }),
  (0, i.jsx)(b.Z, {
    size: s ? b.u.SIZE_24 : b.u.SIZE_16,
    guildId: l,
    users: c,
    max: 6
  })
]
  });
}

function O(e) {
  var n;
  let {
activityItem: t,
channel: l,
guildId: p,
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
activityItem: t,
channel: l,
guildId: p,
locationObject: I,
onActivityItemVisible: f,
onActivityItemSelected: _,
embeddedActivitiesManager: N.Z
  }), F = (0, r.e7)([
h.Z,
v.Z
  ], () => h.Z.inDevModeForApplication(t.application.id) || v.Z.inTestModeForApplication(t.application.id), [t.application.id]), {
application: Y
  } = t, w = a.useCallback(e => e && (null == f ? void 0 : f({
applicationId: t.application.id
  })), [
t.application.id,
f
  ]), U = (0, d.O)(w, 0.8, !0), [G, W] = a.useState(!1), [z, q] = a.useState(G);
  a.useEffect(() => {
G && q(!0);
  }, [G]);
  let J = () => W(!0),
K = () => W(!1),
X = g.Sb.useSetting(),
$ = a.useCallback(() => {
  null == k || k(), u.ZP.maybeQueryForInstallLessApps(Y.id, null == l ? void 0 : l.id);
}, [
  Y.id,
  null == l ? void 0 : l.id,
  k
]);
  return (0, i.jsxs)(o.Clickable, {
onClick: V === T.JS.START ? $ : void 0,
onContextMenu: X ? e => {
  (0, c.vq)(e, e => (0, i.jsx)(M.Z, {
    application: Y,
    ...e
  }));
} : void 0,
className: s()(Z.activityItem, {
  [Z.large]: !0 === b,
  [Z.disabled]: V !== T.JS.START
}),
children: [
  (0, i.jsxs)('div', {
    ref: U,
    className: s()(Z.activityImageContainer, {
      [Z.large]: !0 === b
    }),
    onMouseEnter: J,
    onFocus: J,
    onMouseLeave: K,
    onBlur: K,
    children: [
      (0, i.jsx)(S.Z, {
        imageBackground: O,
        applicationName: Y.name,
        imageClassName: s()(Z.activityImage, {
          [Z.large]: !0 === b
        }),
        imageNotFoundClassName: Z.brokenImageIconWrapper
      }),
      null != B && z && V === T.JS.START ? (0, i.jsx)('div', {
        className: s()(Z.activityVideo, {
          [Z.videoFadeOut]: !G
        }),
        onAnimationEnd: () => G ? null : q(!1),
        children: (0, i.jsx)(x.Z, {
          className: Z.activityVideo,
          src: B,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      }) : null,
      V !== T.JS.START ? (0, i.jsx)(E.U, {
        action: V,
        onClick: $
      }) : null,
      (0, i.jsx)('div', {
        className: Z.overlayBadge,
        children: (0, i.jsx)('div', {
          className: Z.badgeContainer,
          children: (0, i.jsx)(j.Z, {
            name: Y.name,
            labelType: H
          })
        })
      }),
      F ? (0, i.jsx)(o.Tooltip, {
        text: A.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
        children: e => (0, i.jsx)('div', {
          className: Z.devShelfBadge,
          ...e,
          children: (0, i.jsx)(m.Z, {
            className: Z.devShelfIcon
          })
        })
      }) : null
    ]
  }),
  (0, i.jsxs)('div', {
    className: s()(Z.activityTextContainer, {
      [Z.large]: b
    }),
    children: [
      b ? (0, i.jsx)(o.Text, {
        className: Z.activityMaxParticipantsLarge,
        variant: 'text-xs/normal',
        color: 'interactive-normal',
        children: (0, C.Z)(null !== (n = Y.maxParticipants) && void 0 !== n ? n : 0)
      }) : null,
      (0, i.jsxs)('div', {
        className: Z.activityName,
        children: [
          (0, i.jsx)(o.Heading, {
            className: Z.activityTitleText,
            variant: 'heading-md/semibold',
            color: 'interactive-active',
            children: Y.name
          }),
          null != P ? (0, i.jsx)(o.Tooltip, {
            text: P,
            children: e => (0, i.jsx)('img', {
              className: Z.staffBadge,
              alt: P,
              src: y,
              ...e
            })
          }) : null
        ]
      }),
      (0, i.jsx)(L, {
        activity: null == R ? void 0 : R.embeddedActivity,
        application: Y,
        channel: l,
        guildId: p,
        large: b
      }),
      (0, i.jsx)('div', {
        className: Z.activityTagsContainer,
        children: Y.tags.slice(0, 3).map(e => (0, i.jsx)(D, {
          value: e
        }, 'activity-tag-'.concat(Y.id, '-').concat(e)))
      })
    ]
  })
]
  });
}