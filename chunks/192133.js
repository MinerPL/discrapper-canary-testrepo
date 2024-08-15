n.d(t, {
  Z: function() {
return U;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(481060),
  u = n(580552),
  c = n(314897),
  d = n(592125),
  _ = n(246946),
  E = n(5192),
  f = n(51144),
  h = n(621853),
  p = n(652853),
  m = n(421486),
  I = n(138394),
  T = n(790711),
  g = n(248345),
  S = n(337125),
  A = n(19836),
  N = n(207570),
  v = n(77097),
  O = n(538564),
  R = n(489642),
  C = n(319300),
  y = n(591600),
  D = n(579729),
  L = n(186395),
  b = n(584045),
  M = n(981631),
  P = n(685328);

function U(e) {
  var t, n, a;
  let {
activity: U,
customStatusActivity: w,
user: x,
displayProfile: G,
guild: k,
guildMember: B,
channelId: F,
onClose: V,
setNote: H = !1,
canDM: Z,
hideNote: Y = !1,
showCopiableUsername: j = !1,
analyticsParams: W
  } = e, K = (0, o.e7)([_.Z], () => _.Z.hidePersonalInformation), z = (0, o.e7)([h.Z], () => {
var e;
return null === (e = h.Z.getUserProfile(x.id)) || void 0 === e ? void 0 : e.application;
  }), q = (0, o.e7)([d.Z], () => d.Z.getChannel(F)), {
theme: Q
  } = (0, p.z)(), X = i.useRef(null), [$, J] = i.useState(!0), ee = i.useCallback(() => {
let {
  current: e
} = X;
null != e && J(0 === e.getScrollerState().scrollTop);
  }, []);
  i.useLayoutEffect(() => {
var e;
let {
  current: t
} = X;
null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
  top: 0
}));
  }, []);
  let et = (0, o.e7)([c.default], () => c.default.getId()),
en = x.id === et,
er = x.bot || en;
  if ((0, u.Z)(x.id))
return (0, r.jsxs)(r.Fragment, {
  children: [
    (0, r.jsx)(b.Z, {
      className: P.usernameSection,
      user: x,
      nickname: f.ZP.getName(x),
      pronouns: null
    }),
    (0, r.jsxs)(l.HeadingLevel, {
      children: [
        (0, r.jsx)(I.Z, {
          className: P.divider
        }),
        (0, r.jsx)(l.AdvancedScroller, {
          className: s()(P.scroller, {
            [P.scrollerSeparator]: !$
          }),
          onScroll: ee,
          ref: X,
          children: (0, r.jsx)(A.Z, {
            bio: null,
            hidePersonalInformation: !1,
            userId: x.id,
            lastSection: !0
          })
        })
      ]
    })
  ]
});
  if (x.isSystemUser())
return (0, r.jsx)(b.Z, {
  user: x,
  nickname: f.ZP.getName(x),
  pronouns: null,
  className: P.usernameSection,
  lastSection: !0
});
  if (x.isNonUserBot())
return (0, r.jsx)(b.Z, {
  user: x,
  nickname: null,
  pronouns: null,
  className: P.usernameSection,
  lastSection: !0
});
  let ei = null !== (t = E.ZP.getNickname(null == k ? void 0 : k.id, F, x)) && void 0 !== t ? t : f.ZP.getName(x),
ea = {
  location: {
    page: M.ZY5.USER_POPOUT,
    section: M.jXE.USER_PROFILE
  }
};
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(b.Z, {
    className: P.usernameSection,
    user: x,
    nickname: ei,
    pronouns: null == G ? void 0 : G.pronouns,
    usernameIcon: x.hasAvatarForGuild(null == k ? void 0 : k.id) && (0, r.jsx)(T.Z, {
      user: x,
      nickname: ei
    }),
    shouldCopyOnClick: j
  }),
  (0, r.jsxs)(l.HeadingLevel, {
    children: [
      (0, r.jsx)(O.Z, {
        className: P.customStatusSection,
        customStatusActivity: w
      }),
      (0, r.jsx)(I.Z, {
        className: P.divider
      }),
      (0, r.jsxs)(l.AdvancedScroller, {
        className: s()(P.scroller, {
          [P.scrollerSeparator]: !$
        }),
        onScroll: ee,
        ref: X,
        children: [
          (0, r.jsx)(N.Z, {
            user: x,
            guildId: null == k ? void 0 : k.id
          }),
          (0, r.jsx)(A.Z, {
            isUsingGuildBio: null !== (n = null == G ? void 0 : G.isUsingGuildMemberBio()) && void 0 !== n && n,
            bio: null == G ? void 0 : G.bio,
            guild: k,
            hidePersonalInformation: K
          }),
          !er && (0, r.jsx)(m.ZP, {
            className: P.profileMutuals,
            user: x,
            onClose: V
          }),
          (0, r.jsx)(C.Z, {
            userId: x.id,
            guildId: null == k ? void 0 : k.id
          }),
          (0, r.jsx)(g.Z, {
            activity: U,
            user: x,
            guild: k,
            channelId: F,
            onClose: V,
            analyticsParams: (null == W ? void 0 : W.location) != null ? W : ea
          }),
          (null == z ? void 0 : z.popularApplicationCommandIds) != null && null != q ? (0, r.jsx)(D.Z, {
            applicationId: z.id,
            commandIds: z.popularApplicationCommandIds,
            channel: q,
            guildId: null == k ? void 0 : k.id,
            onClick: V
          }) : null,
          (0, r.jsx)(S.Z, {
            user: x,
            guildId: null == k ? void 0 : k.id
          }),
          (0, r.jsx)(L.Z, {
            user: x,
            guild: k,
            guildMember: B,
            showBorder: null !== (a = null == G ? void 0 : G.canEditThemes) && void 0 !== a && a
          }),
          (0, r.jsx)(v.Z, {
            userId: x.id,
            channelId: F,
            guild: k,
            onClose: V,
            theme: Q
          }),
          !K && !Y && (0, r.jsx)(y.Z, {
            user: x,
            setNote: H,
            autoFocus: !Z,
            lastSection: !Z
          }),
          !x.isNonUserBot() && Z && (0, r.jsx)(R.Z, {
            user: x,
            setNote: H,
            canDM: Z,
            onClose: V
          })
        ]
      })
    ]
  })
]
  });
}