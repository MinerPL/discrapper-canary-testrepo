"use strict";
n.d(t, {
  Z: function() {
    return w
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(100527),
  _ = n(314897),
  d = n(592125),
  c = n(246946),
  E = n(5192),
  I = n(51144),
  T = n(342656),
  h = n(621853),
  S = n(652853),
  f = n(421486),
  N = n(138394),
  A = n(790711),
  m = n(248345),
  O = n(337125),
  R = n(19836),
  C = n(207570),
  p = n(77097),
  g = n(538564),
  L = n(489642),
  v = n(319300),
  D = n(591600),
  M = n(579729),
  P = n(302316),
  y = n(186395),
  U = n(584045),
  b = n(981631),
  G = n(383630);

function w(e) {
  var t, n, s;
  let {
    activity: w,
    customStatusActivity: k,
    user: B,
    displayProfile: x,
    guild: V,
    guildMember: Z,
    channelId: H,
    onClose: F,
    setNote: Y = !1,
    canDM: j,
    hideNote: W = !1,
    showCopiableUsername: K = !1,
    analyticsParams: z
  } = e, q = (0, a.e7)([c.Z], () => c.Z.hidePersonalInformation), X = (0, a.e7)([h.Z], () => {
    var e;
    return null === (e = h.Z.getUserProfile(B.id)) || void 0 === e ? void 0 : e.application
  }), Q = (0, a.e7)([d.Z], () => d.Z.getChannel(H)), {
    theme: J
  } = (0, S.z)(), $ = r.useRef(null), [ee, et] = r.useState(!0), en = r.useCallback(() => {
    let {
      current: e
    } = $;
    null != e && et(0 === e.getScrollerState().scrollTop)
  }, []);
  r.useLayoutEffect(() => {
    var e;
    let {
      current: t
    } = $;
    null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
      top: 0
    }))
  }, []);
  let ei = (0, a.e7)([_.default], () => _.default.getId()),
    er = B.id === ei,
    es = B.bot || er,
    {
      enabled: eo
    } = (0, T.qI)({
      autoTrackExposure: !0,
      location: u.Z.PROFILE_POPOUT,
      disable: es
    });
  if (B.isSystemUser()) return null;
  if (B.isNonUserBot()) return (0, i.jsx)(U.Z, {
    user: B,
    nickname: null,
    pronouns: null,
    className: G.usernameSection,
    lastSection: !0
  });
  let ea = null !== (t = E.ZP.getNickname(null == V ? void 0 : V.id, H, B)) && void 0 !== t ? t : I.ZP.getName(B),
    el = {
      location: {
        page: b.ZY5.USER_POPOUT,
        section: b.jXE.USER_PROFILE
      }
    };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(U.Z, {
      className: G.usernameSection,
      user: B,
      nickname: ea,
      pronouns: null == x ? void 0 : x.pronouns,
      usernameIcon: B.hasAvatarForGuild(null == V ? void 0 : V.id) && (0, i.jsx)(A.Z, {
        user: B,
        nickname: ea
      }),
      shouldCopyOnClick: K
    }), (0, i.jsxs)(l.HeadingLevel, {
      children: [(0, i.jsx)(g.Z, {
        className: G.customStatusSection,
        customStatusActivity: k
      }), (0, i.jsx)(N.Z, {
        className: G.divider
      }), (0, i.jsxs)(l.AdvancedScroller, {
        className: o()(G.scroller, {
          [G.scrollerSeparator]: !ee
        }),
        onScroll: en,
        ref: $,
        children: [(0, i.jsx)(C.Z, {
          user: B,
          guildId: null == V ? void 0 : V.id
        }), (0, i.jsx)(R.Z, {
          isUsingGuildBio: null !== (n = null == x ? void 0 : x.isUsingGuildMemberBio()) && void 0 !== n && n,
          bio: null == x ? void 0 : x.bio,
          guild: V,
          hidePersonalInformation: q
        }), eo && (0, i.jsx)(f.ZP, {
          className: G.profileMutuals,
          user: B,
          onClose: F
        }), (0, i.jsx)(v.Z, {
          userId: B.id,
          guildId: null == V ? void 0 : V.id
        }), (0, i.jsx)(m.Z, {
          activity: w,
          user: B,
          guild: V,
          channelId: H,
          onClose: F,
          analyticsParams: (null == z ? void 0 : z.location) != null ? z : el
        }), (null == X ? void 0 : X.popularApplicationCommandIds) != null && null != Q ? (0, i.jsx)(M.Z, {
          applicationId: X.id,
          commandIds: X.popularApplicationCommandIds,
          channel: Q,
          guildId: null == V ? void 0 : V.id,
          onClick: F
        }) : null, (0, i.jsx)(O.Z, {
          user: B,
          guildId: null == V ? void 0 : V.id
        }), (0, i.jsx)(y.Z, {
          user: B,
          guild: V,
          guildMember: Z,
          showBorder: null !== (s = null == x ? void 0 : x.canEditThemes) && void 0 !== s && s
        }), (0, i.jsx)(p.Z, {
          userId: B.id,
          channelId: H,
          guild: V,
          onClose: F,
          theme: J
        }), null != X && void 0 !== H && (0, i.jsx)(P.Z, {
          channelId: H,
          applicationId: X.id
        }), !q && !W && (0, i.jsx)(D.Z, {
          user: B,
          setNote: Y,
          autoFocus: !j,
          lastSection: !j
        }), !B.isNonUserBot() && j && (0, i.jsx)(L.Z, {
          user: B,
          setNote: Y,
          canDM: j,
          onClose: F
        })]
      })]
    })]
  })
}