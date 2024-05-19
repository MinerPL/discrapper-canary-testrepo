"use strict";
n.r(t), n.d(t, {
  AVATAR_DECORATION_PADDING: function() {
    return M
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("477690"),
  l = n("481060"),
  u = n("420660"),
  d = n("979264"),
  _ = n("33934"),
  c = n("736144"),
  E = n("113434"),
  I = n("553393"),
  T = n("204197"),
  f = n("594174"),
  S = n("467679"),
  h = n("681426"),
  A = n("551388"),
  m = n("709586"),
  N = n("360048"),
  p = n("624138"),
  O = n("51144"),
  C = n("788307"),
  R = n("981631"),
  g = n("674563"),
  L = n("524484"),
  v = n("689938"),
  D = n("895294");
let M = (0, p.cssValueToNumber)(o.default.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
t.default = function(e) {
  var t;
  let {
    selected: n = !1,
    colorString: a,
    colorRoleName: o,
    isOwner: p,
    ownerTooltipText: M,
    lostPermissionTooltipText: y,
    isTyping: P = !1,
    nick: U,
    user: b,
    currentUser: G,
    activities: w,
    applicationStream: k,
    status: B,
    shouldAnimateStatus: V = !1,
    isMobile: x,
    premiumSince: F,
    channel: H,
    guildId: Y,
    className: j,
    onMouseDown: W,
    onKeyDown: K,
    onClick: z,
    onContextMenu: Z,
    onClickPremiumGuildIcon: X,
    onFocus: Q,
    "aria-controls": q,
    "aria-expanded": J,
    "aria-posinset": $,
    "aria-setsize": ee,
    id: et,
    tabIndex: en,
    itemProps: ei
  } = e, er = null == b ? void 0 : b.id, ea = O.default.useName(b), es = (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === er, eo = r.useRef(null), [el, eu] = r.useState(!1), [ed, e_] = r.useState(null), {
    avatarDecorationSrc: ec,
    avatarSrc: eE,
    eventHandlers: eI
  } = (0, T.default)({
    user: b,
    size: l.AvatarSizes.SIZE_32,
    animateOnHover: !(n || el),
    guildId: Y
  }), eT = r.useMemo(() => ({
    source: R.AnalyticsSections.MEMBER_LIST,
    tagUserId: er
  }), [er]), [ef, eS] = r.useState(!1);
  r.useEffect(() => {
    n && eS(!1)
  }, [n]);
  let eh = (0, E.useQuestFromActivities)(w),
    eA = null != eh && !es && n && !ef,
    em = () => {
      eu(!0)
    },
    eN = () => {
      eu(!1)
    },
    ep = e => {
      e_(e)
    },
    eO = () => {
      let e = null != w ? w.find(e => e.type === R.ActivityTypes.CUSTOM_STATUS) : null,
        t = null != e && null != b && (0, _.default)(e, b, H);
      return (0, i.jsx)(C.default, {
        className: D.activity,
        textClassName: D.activityText,
        emojiClassName: D.activityEmoji,
        activities: w,
        applicationStream: k,
        animate: el,
        hideEmoji: !t,
        hideTooltip: !0,
        user: b,
        hasQuest: null != eh
      })
    },
    eC = () => null != p && p && null == y ? (0, i.jsx)(l.Tooltip, {
      text: null != M ? M : v.default.Messages.GUILD_OWNER,
      children: e => (0, i.jsx)(A.default, {
        ...e,
        className: D.ownerIcon
      })
    }) : null,
    eR = () => null == F ? null : (0, i.jsx)(l.Tooltip, {
      text: v.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
        date: F
      }),
      children: e => (0, i.jsx)(l.Clickable, {
        onClick: X,
        tabIndex: -1,
        children: (0, i.jsx)(m.default, {
          ...e,
          className: D.premiumIcon
        })
      })
    }),
    eg = () => {
      let e = (null == b ? void 0 : b.isClyde()) ? g.BotTagTypes.AI : g.BotTagTypes.BOT;
      return null != b && b.bot ? (0, i.jsx)(S.default, {
        className: D.botTag,
        type: e,
        verified: b.isVerifiedBot()
      }) : null
    },
    eL = () => (0, i.jsxs)(i.Fragment, {
      children: [eg(), eC(), eR()]
    }),
    ev = (e, t) => {
      let n = V ? l.AnimatedAvatar : l.Avatar,
        r = (0, u.default)(w) ? R.StatusTypes.STREAMING : B;
      return r = t ? void 0 : r, (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(n, {
          ...eI,
          size: l.AvatarSizes.SIZE_32,
          src: eE,
          isMobile: x,
          isTyping: P,
          status: r,
          "aria-label": e.username,
          statusTooltip: !0,
          avatarDecoration: ec,
          typingIndicatorRef: ep
        }), (0, i.jsx)(c.default, {
          confettiSpawnRef: ed,
          shouldFire: P && null != G && e.id !== G.id,
          confettiLocation: L.ConfettiLocation.MEMBER_USER
        })]
      })
    },
    eD = () => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.NameWithRole, {
        roleName: o,
        color: null != a ? a : void 0,
        name: null != U ? U : ea,
        className: D.name
      }), (0, i.jsx)(d.default, {
        clan: null == b ? void 0 : b.clan,
        userId: null == b ? void 0 : b.id,
        contextGuildId: Y,
        disableTooltip: !0,
        className: D.clanTag,
        profileViewedAnalytics: eT
      })]
    }),
    eM = B === R.StatusTypes.OFFLINE;
  return null == b ? (0, i.jsx)(h.default, {
    avatarSize: l.AvatarSizes.SIZE_32,
    className: D.placeholder
  }) : (0, i.jsx)(l.Popout, {
    renderPopout: e => (0, i.jsx)(I.default, {
      quest: eh,
      memberListItemRef: eo,
      applicationStream: k,
      ...e,
      closePopout: () => eS(!0)
    }),
    position: "bottom",
    shouldShow: eA,
    nudgeAlignIntoViewport: !1,
    useRawTargetDimensions: !0,
    animation: l.Popout.Animation.NONE,
    spacing: -3,
    children: () => (0, i.jsx)(N.default, {
      ref: eo,
      selected: n,
      className: s()(D.member, j, {
        [D.offline]: eM && !n
      }),
      innerClassName: D.memberInner,
      onClick: z,
      onKeyDown: K,
      onMouseDown: W,
      onContextMenu: Z,
      onMouseEnter: em,
      onMouseLeave: eN,
      name: null == y ? (0, i.jsx)("span", {
        className: D.username,
        children: eD()
      }) : (0, i.jsx)(l.Tooltip, {
        text: y,
        children: e => (0, i.jsx)("span", {
          ...e,
          className: s()(D.username, D.lostPermission),
          children: eD()
        })
      }),
      avatar: ev(b, eM),
      subText: eO(),
      decorators: eL(),
      "aria-controls": q,
      "aria-expanded": J,
      "aria-setsize": ee,
      "aria-posinset": $,
      id: et,
      tabIndex: en,
      onFocus: Q,
      focusProps: {
        offset: {
          top: 4,
          bottom: 4,
          left: 4,
          right: 4
        }
      },
      ...ei
    })
  })
}