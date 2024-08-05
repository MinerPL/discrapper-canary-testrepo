t.d(n, {
  Z: function() {
return el;
  }
}), t(47120);
var l = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  s = t(392711),
  o = t.n(s),
  c = t(338545),
  d = t(866442),
  u = t(442837),
  h = t(692547),
  m = t(780384),
  _ = t(481060),
  f = t(45114),
  C = t(131388),
  p = t(410030),
  x = t(1585),
  g = t(125988),
  N = t(44315),
  I = t(160404),
  b = t(240991),
  E = t(703656),
  Z = t(484459),
  v = t(318661),
  T = t(252532),
  j = t(271383),
  S = t(430824),
  R = t(306680),
  A = t(594174),
  O = t(823379),
  B = t(51144),
  L = t(998502),
  M = t(549817),
  w = t(745752),
  P = t(45966),
  y = t(637853),
  k = t(905204),
  H = t(968644),
  D = t(521941),
  U = t(614328),
  W = t(104265),
  G = t(588632),
  F = t(290511),
  z = t(981631),
  V = t(176505),
  q = t(490897),
  Y = t(689938),
  X = t(680917),
  Q = t(489919),
  K = t(153521);
let J = _.AvatarSizes.SIZE_80,
  $ = 'required';

function ee(e) {
  var n;
  let {
guild: t,
user: i
  } = e, {
avatarSrc: s,
eventHandlers: c,
isAvatarAnimating: h
  } = (0, T.w)({
user: i,
guildId: t.id,
size: 120
  }), {
avatarDecorationSrc: m
  } = (0, g.Z)({
user: i,
size: (0, x.y9)(J),
onlyAnimateOnHover: !h
  }), f = (0, u.e7)([j.ZP], () => j.ZP.getSelfMember(t.id)), C = (0, u.Wu)([j.ZP], () => j.ZP.getMemberRoleWithPendingUpdates(t.id, i.id)), p = (0, u.e7)([S.Z], () => S.Z.getRoles(t.id)), N = o()(C).filter(e => p.hasOwnProperty(e)).map(e => p[e]).orderBy('position', 'desc').value(), I = (0, v.ZP)(i.id, t.id);
  a.useEffect(() => {
(0, Z.Z)(i.id, i.getAvatarURL(t.id, (0, _.getAvatarSize)(J)), {
  guildId: t.id
});
  }, []);
  let E = (0, b.YP)(null == I ? void 0 : I.bio),
R = L.ZP.getEnableHardwareAcceleration() ? _.AnimatedAvatar : _.Avatar;
  return (0, l.jsxs)('div', {
className: X.profile,
children: [
  (0, l.jsx)(_.Heading, {
    variant: 'heading-md/semibold',
    color: 'header-primary',
    children: Y.Z.Messages.CUSTOMIZE_COMMUNITY_PROFILE
  }),
  (0, l.jsx)(_.Text, {
    variant: 'text-xs/normal',
    color: 'text-muted',
    children: Y.Z.Messages.CUSTOMIZE_COMMUNITY_PROFILE_DESCRIPTION
  }),
  (0, l.jsxs)('div', {
    className: X.profileCard,
    children: [
      (0, l.jsx)('div', {
        ...c,
        children: (0, l.jsx)(R, {
          src: s,
          avatarDecoration: m,
          size: J,
          'aria-label': i.username
        })
      }),
      (0, l.jsx)(_.Text, {
        variant: 'text-lg/medium',
        color: 'header-primary',
        className: X.username,
        children: null !== (n = null == f ? void 0 : f.nick) && void 0 !== n ? n : B.ZP.getName(i)
      }),
      (0, l.jsx)(_.Text, {
        variant: 'text-sm/normal',
        color: 'text-muted',
        className: r()(K.markup, X.bio),
        children: E
      }),
      null != N && N.length > 0 && (0, l.jsxs)(l.Fragment, {
        children: [
          (0, l.jsx)('hr', {
            className: X.separator
          }),
          (0, l.jsx)(_.Text, {
            variant: 'text-xs/semibold',
            color: 'text-muted',
            className: X.title,
            children: Y.Z.Messages.ROLES
          }),
          (0, l.jsx)('div', {
            className: X.roles,
            children: null == N ? void 0 : N.map(e => {
              var n;
              return (0, l.jsxs)('div', {
                className: X.role,
                children: [
                  (0, l.jsx)(_.RoleCircle, {
                    color: null !== (n = e.colorString) && void 0 !== n ? n : (0, d.Rf)(z.p6O),
                    className: X.roleDot
                  }),
                  (0, l.jsx)(_.Text, {
                    variant: 'text-xs/medium',
                    color: 'header-primary',
                    children: e.name
                  })
                ]
              }, e.id);
            })
          })
        ]
      })
    ]
  })
]
  });
}

function en(e) {
  var n;
  let {
prompt: t,
guild: i
  } = e, [s, o] = a.useState(null), [d, m] = a.useState(new Set()), f = null == t ? void 0 : null === (n = t.options) || void 0 === n ? void 0 : n.filter(e => d.has(e.id)), C = (0, y.L6)(f), p = (0, y.dX)(f), x = (0, u.Wu)([P.Z], () => P.Z.getOnboardingResponsesForPrompt(i.id, t.id)), {
helpText: g,
helpTextAdditional: I
  } = (0, H.p)({
guild: i,
prompt: t,
selectedRoleIds: C,
selectedChannelIds: p,
itemHook: (e, n) => (0, l.jsx)(_.Text, {
  variant: 'text-xs/medium',
  color: 'header-primary',
  children: e
}, n)
  }), {
handleSelectOption: b
  } = (0, k.Z)(i.id), E = (0, _.useToken)(h.Z.unsafe_rawColors.BRAND_500), Z = (0, _.useSpring)({
from: {
  color: t.isNew ? E.hex({
    opacity: 1
  }) : E.hex({
    opacity: 0
  })
},
color: E.hex({
  opacity: 0
}),
config: {
  duration: 300
},
delay: 500
  }, 'animate-always'), v = t.options.map(e => ({
value: e.id,
...e
  })), T = t.options.filter(e => x.includes(e.id)).map(e => e.id);
  return (0, l.jsx)(l.Fragment, {
children: (0, l.jsxs)(c.animated.div, {
  className: X.prompt,
  style: {
    borderColor: Z.color
  },
  children: [
    t.isNew && (0, l.jsx)(_.TextBadge, {
      color: (0, N.Lq)(z.Ilk.BRAND_260),
      text: Y.Z.Messages.NEW,
      className: X.newBadge
    }),
    (0, l.jsxs)(_.Heading, {
      className: X.promptTitle,
      variant: 'heading-md/semibold',
      color: 'header-primary',
      children: [
        t.title,
        t.required ? (0, l.jsx)('span', {
          className: r()(X.required, {
            [X.error]: (null == s ? void 0 : s.type) === $
          }),
          children: '*'
        }) : null
      ]
    }),
    (0, l.jsx)(G.Z, {
      options: v,
      value: T,
      onChange: e => {
        let n = e.find(e => !x.includes(e.id)),
          l = e.map(e => e.id);
        if (null != n)
          b(t, n, !0), t.singleSelect && t.options.forEach(e => d.delete(e.id)), d.add(n.id);
        else {
          let e = x.filter(e => !l.includes(e)),
            n = t.options.filter(n => e.includes(n.id));
          if (x.length <= n.length && t.required) {
            o({
              type: $
            });
            return;
          }
          n.forEach(e => {
            b(t, e, !1), d.delete(e.id);
          });
        }
        m(new Set(d)), o(null);
      },
      canBeNew: !t.isNew
    }),
    (0, l.jsxs)(_.Text, {
      variant: 'text-xs/normal',
      color: 'text-muted',
      className: X.helpText,
      children: [
        g,
        ' ',
        I
      ]
    })
  ]
})
  });
}

function et(e) {
  var n;
  let {
prompt: t,
guild: i
  } = e, [s, o] = a.useState(null), [d, m] = a.useState(new Set()), f = null == t ? void 0 : null === (n = t.options) || void 0 === n ? void 0 : n.filter(e => d.has(e.id)), C = (0, y.L6)(f), p = (0, y.dX)(f), x = (0, u.Wu)([P.Z], () => P.Z.getOnboardingResponsesForPrompt(i.id, t.id)), {
helpText: g,
helpTextAdditional: I
  } = (0, H.p)({
guild: i,
prompt: t,
selectedRoleIds: C,
selectedChannelIds: p,
itemHook: (e, n) => (0, l.jsx)(_.Text, {
  variant: 'text-xs/medium',
  color: 'header-primary',
  children: e
}, n)
  }), {
handleSelectOption: b
  } = (0, k.Z)(i.id), E = (e, n) => {
if (!n && 1 === x.length && t.required) {
  o({
    type: $
  });
  return;
}
b(t, e, null != n && n), t.singleSelect && n && t.options.forEach(e => d.delete(e.id)), n ? d.add(e.id) : d.delete(e.id), m(new Set(d)), o(null);
  }, Z = (0, _.useToken)(h.Z.unsafe_rawColors.BRAND_500), v = (0, _.useSpring)({
from: {
  color: t.isNew ? Z.hex({
    opacity: 1
  }) : Z.hex({
    opacity: 0
  })
},
color: Z.hex({
  opacity: 0
}),
config: {
  duration: 300
},
delay: 500
  }, 'animate-always');
  return (0, l.jsx)(l.Fragment, {
children: (0, l.jsxs)(c.animated.div, {
  className: X.prompt,
  style: {
    borderColor: v.color
  },
  children: [
    t.isNew && (0, l.jsx)(_.TextBadge, {
      color: (0, N.Lq)(z.Ilk.BRAND_260),
      text: Y.Z.Messages.NEW,
      className: X.newBadge
    }),
    (0, l.jsxs)(_.Heading, {
      className: X.promptTitle,
      variant: 'heading-md/semibold',
      color: 'header-primary',
      children: [
        t.title,
        t.required ? (0, l.jsx)('span', {
          className: r()(X.required, {
            [X.error]: (null == s ? void 0 : s.type) === $
          }),
          children: '*'
        }) : null
      ]
    }),
    (0, l.jsx)('div', {
      className: X.promptOptions,
      children: t.options.map(e => (0, l.jsx)(W.Z, {
        hideMemberCount: !0,
        guildId: i.id,
        option: e,
        onSelect: n => E(e, n),
        selected: x.includes(e.id),
        canBeNew: !t.isNew
      }, e.id))
    }),
    (0, l.jsxs)(_.Text, {
      variant: 'text-xs/normal',
      color: 'text-muted',
      className: X.helpText,
      children: [
        g,
        ' ',
        I
      ]
    })
  ]
})
  });
}

function el(e) {
  let {
guildId: n,
onBrowseChannels: t
  } = e, i = (0, m.wj)((0, p.ZP)()), s = (0, u.e7)([S.Z], () => S.Z.getGuild(n)), o = (0, u.e7)([A.default], () => A.default.getCurrentUser()), c = (0, C.Z)('(min-width: 1344px)') && null != o, d = a.useCallback(() => {
(0, E.uL)(z.Z5c.CHANNEL(n, V.oC.CHANNEL_BROWSER)), null == t || t();
  }, [
n,
t
  ]), h = (0, u.e7)([R.ZP], () => R.ZP.hasUnread(n, q.W.GUILD_ONBOARDING_QUESTION)), {
onboardingPromptsRaw: x,
newOnboardingPrompts: g,
onboardingPromptsWithNewAnswers: b,
newAnswersCount: Z,
onboardingPrompts: v
  } = (0, D.Z)(n);
  a.useEffect(() => {
if ((null == s ? void 0 : s.id) != null)
  !I.Z.isFullServerPreview(s.id) && (P.Z.shouldFetchPrompts(s.id) || h) && (0, w.eM)(s.id);
  }, [
null == s ? void 0 : s.id,
h
  ]), a.useEffect(() => {
if ((null == s ? void 0 : s.id) != null) {
  if (!I.Z.isFullServerPreview(s.id))
    return () => {
      (0, f.Ju)(s.id, q.W.GUILD_ONBOARDING_QUESTION, P.Z.ackIdForGuild(s.id)), M.Z.updateOnboardingResponses(s.id);
    };
}
  }, [null == s ? void 0 : s.id]);
  let T = a.useCallback(e => {
if (null == s)
  return null;
switch (e.type) {
  case F.FN.MULTIPLE_CHOICE:
    return (0, l.jsx)(et, {
      prompt: e,
      guild: s
    }, e.id);
  case F.FN.DROPDOWN:
    return (0, l.jsx)(en, {
      prompt: e,
      guild: s
    }, e.id);
  default:
    (0, O.vE)(e.type);
}
  }, [s]);
  if (null == s)
return null;
  if (0 === x.length) {
let e = (0, N.Lq)(i ? z.Ilk.PRIMARY_300 : z.Ilk.PRIMARY_500),
  n = (0, N.Lq)(i ? z.Ilk.PRIMARY_700 : z.Ilk.PRIMARY_230);
return (0, l.jsx)('div', {
  className: r()(Q.content, X.emptyPage),
  children: (0, l.jsxs)('div', {
    className: X.emptyContainer,
    children: [
      (0, l.jsx)(U.Z, {
        className: X.emptyIcon,
        foregroundColor: e,
        backgroundColor: n
      }),
      (0, l.jsx)(_.Heading, {
        className: X.emptyHeader,
        variant: 'heading-md/semibold',
        children: Y.Z.Messages.CUSTOMIZE_COMMUNITY_EMPTY_HEADER
      }),
      (0, l.jsx)(_.Text, {
        variant: 'text-sm/medium',
        children: Y.Z.Messages.CUSTOMIZE_COMMUNITY_EMPTY_SUBHEADER.format({
          onBrowseChannels: d
        })
      })
    ]
  })
});
  }
  return (0, l.jsxs)(_.AdvancedScroller, {
className: X.scroller,
fade: !0,
children: [
  (0, l.jsxs)('div', {
    className: X.pageBody,
    children: [
      (g.length > 0 || b.length > 0) && (0, l.jsxs)(l.Fragment, {
        children: [
          (0, l.jsx)('div', {
            children: (0, l.jsx)(_.Heading, {
              variant: 'heading-md/semibold',
              color: 'header-primary',
              children: Y.Z.Messages.ONBOARDING_PROMPT_ANSWERS_NEW.format({
                count: g.length + Z
              })
            })
          }),
          g.map(T),
          b.map(T),
          (0, l.jsx)('div', {
            className: X.sectionSeparator
          })
        ]
      }),
      v.length > 0 && (0, l.jsxs)(l.Fragment, {
        children: [
          (0, l.jsxs)('div', {
            children: [
              (0, l.jsx)(_.Heading, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: Y.Z.Messages.ONBOARDING_PROMPT_QUESTIONS_HEADER.format({
                  count: v.length
                })
              }),
              (0, l.jsx)(_.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: Y.Z.Messages.ONBOARDING_PROMPT_MEMBER_DESCRIPTION
              })
            ]
          }),
          v.map(T)
        ]
      })
    ]
  }),
  c && (0, l.jsx)(ee, {
    guild: s,
    user: o
  })
]
  });
}