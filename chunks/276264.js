"use strict";
n.d(t, {
  x: function() {
    return y
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(477690),
  l = n(481060),
  u = n(420660),
  _ = n(979264),
  d = n(33934),
  c = n(736144),
  E = n(113434),
  I = n(918701),
  T = n(553393),
  h = n(509275),
  S = n(204197),
  f = n(594174),
  N = n(467679),
  A = n(681426),
  m = n(551388),
  O = n(709586),
  R = n(360048),
  C = n(624138),
  p = n(51144),
  g = n(788307),
  L = n(981631),
  v = n(674563),
  D = n(524484),
  M = n(689938),
  P = n(895294);
let y = (0, C.Mg)(a.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
t.Z = function(e) {
  var t;
  let {
    selected: n = !1,
    colorString: s,
    colorRoleName: a,
    isOwner: C,
    ownerTooltipText: y,
    lostPermissionTooltipText: U,
    isTyping: b = !1,
    nick: G,
    user: w,
    currentUser: k,
    activities: B,
    applicationStream: x,
    status: V,
    shouldAnimateStatus: Z = !1,
    isMobile: H,
    premiumSince: F,
    channel: Y,
    guildId: j,
    lastOnlineTimestamp: W,
    className: K,
    onMouseDown: z,
    onKeyDown: q,
    onClick: X,
    onContextMenu: Q,
    onClickPremiumGuildIcon: J,
    onFocus: $,
    "aria-controls": ee,
    "aria-expanded": et,
    "aria-posinset": en,
    "aria-setsize": ei,
    id: er,
    tabIndex: es,
    itemProps: eo
  } = e, ea = null == w ? void 0 : w.id, el = p.ZP.useName(w), eu = (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === ea, e_ = r.useRef(null), [ed, ec] = r.useState(!1), [eE, eI] = r.useState(null), {
    avatarDecorationSrc: eT,
    avatarSrc: eh,
    eventHandlers: eS
  } = (0, S.Z)({
    user: w,
    size: l.AvatarSizes.SIZE_32,
    animateOnHover: !(n || ed),
    guildId: j
  }), ef = r.useMemo(() => ({
    source: L.jXE.MEMBER_LIST,
    tagUserId: ea
  }), [ea]), [eN, eA] = r.useState(!1);
  r.useEffect(() => {
    n && eA(!1)
  }, [n]);
  let em = (0, E.Fr)(B),
    eO = null != em && !eu && n && !eN && (0, I.dl)(em),
    eR = () => {
      ec(!0)
    },
    eC = () => {
      ec(!1)
    },
    ep = e => {
      eI(e)
    },
    eg = () => {
      let e = null != B ? B.find(e => e.type === L.IIU.CUSTOM_STATUS) : null,
        t = null != e && null != w && (0, d.Z)(e, w, Y);
      if (null != W && null == e) {
        let e = (0, h.H)(W);
        return (0, i.jsx)("div", {
          className: P.subtext,
          children: e
        })
      }
      return (0, i.jsx)(g.Z, {
        className: P.activity,
        textClassName: P.activityText,
        emojiClassName: P.activityEmoji,
        activities: B,
        applicationStream: x,
        animate: ed,
        hideEmoji: !t,
        hideTooltip: !0,
        user: w,
        hasQuest: null != em && (0, I.dl)(em)
      })
    },
    eL = () => null != C && C && null == U ? (0, i.jsx)(l.Tooltip, {
      text: null != y ? y : M.Z.Messages.GUILD_OWNER,
      children: e => (0, i.jsx)(m.Z, {
        ...e,
        className: P.ownerIcon
      })
    }) : null,
    ev = () => null == F ? null : (0, i.jsx)(l.Tooltip, {
      text: M.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
        date: F
      }),
      children: e => (0, i.jsx)(l.Clickable, {
        onClick: J,
        tabIndex: -1,
        children: (0, i.jsx)(O.Z, {
          ...e,
          className: P.premiumIcon
        })
      })
    }),
    eD = () => {
      let e = (null == w ? void 0 : w.isClyde()) ? v.Hb.AI : v.Hb.BOT;
      return null != w && w.bot ? (0, i.jsx)(N.Z, {
        className: P.botTag,
        type: e,
        verified: w.isVerifiedBot()
      }) : null
    },
    eM = () => (0, i.jsxs)(i.Fragment, {
      children: [eD(), eL(), ev()]
    }),
    eP = (e, t) => {
      let n = Z ? l.AnimatedAvatar : l.Avatar,
        r = (0, u.Z)(B) ? L.Skl.STREAMING : V;
      return r = t ? void 0 : r, (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(n, {
          ...eS,
          size: l.AvatarSizes.SIZE_32,
          src: eh,
          isMobile: H,
          isTyping: b,
          status: r,
          "aria-label": e.username,
          statusTooltip: !0,
          avatarDecoration: eT,
          typingIndicatorRef: ep
        }), (0, i.jsx)(c.Z, {
          confettiSpawnRef: eE,
          shouldFire: b && null != k && e.id !== k.id,
          confettiLocation: D.Hn.MEMBER_USER
        })]
      })
    },
    ey = () => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.NameWithRole, {
        roleName: a,
        color: null != s ? s : void 0,
        name: null != G ? G : el,
        className: P.name
      }), (0, i.jsx)(_.ZP, {
        clan: null == w ? void 0 : w.clan,
        userId: null == w ? void 0 : w.id,
        contextGuildId: j,
        disableGuildProfile: !0,
        className: P.clanTag,
        profileViewedAnalytics: ef
      })]
    }),
    eU = V === L.Skl.OFFLINE,
    eb = null != W;
  return null == w ? (0, i.jsx)(A.Z, {
    avatarSize: l.AvatarSizes.SIZE_32,
    className: P.placeholder
  }) : (0, i.jsx)(l.Popout, {
    renderPopout: e => (0, i.jsx)(T.Z, {
      quest: em,
      memberListItemRef: e_,
      applicationStream: x,
      ...e,
      closePopout: () => eA(!0)
    }),
    position: "bottom",
    shouldShow: eO,
    nudgeAlignIntoViewport: !1,
    useRawTargetDimensions: !0,
    animation: l.Popout.Animation.NONE,
    spacing: -3,
    children: () => (0, i.jsx)(R.Z, {
      ref: e_,
      selected: n,
      className: o()(P.member, K, {
        [P.offline]: eU && !eb && !n
      }),
      innerClassName: P.memberInner,
      onClick: X,
      onKeyDown: q,
      onMouseDown: z,
      onContextMenu: Q,
      onMouseEnter: eR,
      onMouseLeave: eC,
      name: null == U ? (0, i.jsx)("span", {
        className: P.username,
        children: ey()
      }) : (0, i.jsx)(l.Tooltip, {
        text: U,
        children: e => (0, i.jsx)("span", {
          ...e,
          className: o()(P.username, P.lostPermission),
          children: ey()
        })
      }),
      avatar: eP(w, eU),
      subText: eg(),
      decorators: eM(),
      "aria-controls": ee,
      "aria-expanded": et,
      "aria-setsize": ei,
      "aria-posinset": en,
      id: er,
      tabIndex: es,
      onFocus: $,
      focusProps: {
        offset: {
          top: 4,
          bottom: 4,
          left: 4,
          right: 4
        }
      },
      ...eo
    })
  })
}