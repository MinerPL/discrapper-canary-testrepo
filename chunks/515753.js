"use strict";
n.r(t), n.d(t, {
  CloseButton: function() {
    return X
  },
  LinkButton: function() {
    return J
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("613828"),
  d = n("924826"),
  c = n("873546"),
  f = n("442837"),
  h = n("481060"),
  m = n("493683"),
  C = n("239091"),
  p = n("420660"),
  g = n("702321"),
  E = n("201895"),
  _ = n("43267"),
  S = n("933557"),
  I = n("353093"),
  N = n("979264"),
  T = n("853856"),
  A = n("93687"),
  L = n("785232"),
  v = n("878857"),
  x = n("204197"),
  R = n("199902"),
  M = n("158776"),
  y = n("306680"),
  O = n("111583"),
  D = n("9156"),
  b = n("594174"),
  j = n("467679"),
  P = n("514342"),
  G = n("28718"),
  U = n("733880"),
  w = n("465670"),
  B = n("887208"),
  F = n("709054"),
  H = n("998502"),
  V = n("788307"),
  k = n("960670"),
  Y = n("981631"),
  W = n("689938"),
  K = n("577245");
let z = H.default.getEnableHardwareAcceleration() ? h.AnimatedAvatar : h.Avatar,
  Z = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  X = e => (0, l.jsx)(h.Clickable, {
    className: K.closeButton,
    ...e,
    focusProps: {
      offset: {
        top: -2,
        bottom: -2,
        left: -2,
        right: 6
      }
    },
    children: (0, l.jsx)(w.default, {
      className: K.closeIcon
    })
  }),
  Q = () => (0, l.jsx)(B.default, {
    className: K.favoriteIcon
  });
class J extends a.Component {
  render() {
    let {
      route: e,
      selected: t,
      icon: n,
      iconClassName: a,
      interactiveClassName: s,
      text: r,
      children: o,
      locationState: d,
      onClick: f,
      className: m,
      role: C,
      "aria-posinset": p,
      "aria-setsize": g,
      ...E
    } = this.props;
    return (0, l.jsx)(U.default, {
      className: i()(K.channel, {
        [K.fullWidth]: c.isMobile
      }, m),
      onClick: f,
      role: C,
      focusProps: {
        within: !0,
        ...Z
      },
      "aria-posinset": p,
      "aria-setsize": g,
      children: (0, l.jsx)(h.Interactive, {
        as: "div",
        selected: t,
        className: i()(s, K.interactive, K.linkButton, {
          [K.interactiveSelected]: t
        }),
        children: (0, l.jsxs)(u.Link, {
          to: {
            pathname: e,
            state: d
          },
          className: K.link,
          ...E,
          children: [(0, l.jsx)(G.default, {
            selected: t,
            muted: !1,
            avatar: (0, l.jsx)(n, {
              className: i()(K.linkButtonIcon, a)
            }),
            name: r,
            innerClassName: K.avatarWithText
          }), o]
        })
      })
    })
  }
}

function q(e) {
  let {
    channel: t,
    isGDMFacepileEnabled: s,
    selected: r = !1,
    user: c,
    activities: A,
    applicationStream: R,
    isTyping: M,
    status: O,
    isMobile: b,
    "aria-posinset": w,
    "aria-setsize": B
  } = e, [F, H] = a.useState(!1), J = a.useRef(null), q = a.useRef(null), {
    avatarSrc: $,
    avatarDecorationSrc: ee,
    eventHandlers: et
  } = (0, x.default)({
    user: c,
    size: h.AvatarSizes.SIZE_32,
    animateOnHover: !(r || F)
  }), en = (0, f.useStateFromStores)([D.default], () => D.default.isChannelMuted(t.getGuildId(), t.id)), el = (0, f.useStateFromStores)([y.default], () => y.default.getMentionCount(t.id) > 0), ea = (0, S.default)(t), es = (0, f.useStateFromStores)([T.default], () => T.default.isFavorite(t.id)), ei = () => {
    H(!0)
  }, er = () => {
    H(!1)
  }, eo = function(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), m.default.closePrivateChannel(t.id, r, n)
  }, eu = () => {
    m.default.preload(Y.ME, t.id)
  }, ed = e => {
    e.stopPropagation()
  }, ec = e => {
    if (e.target === e.currentTarget) {
      var t;
      null === (t = J.current) || void 0 === t || t.click()
    }
  }, ef = e => {
    t.isMultiUserDM() ? (0, C.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("25421")]).then(n.bind(n, "354741"));
      return n => (0, l.jsx)(e, {
        ...n,
        channel: t,
        selected: r
      })
    }, {
      noBlurEvent: !0
    }) : (0, C.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("36441"), n.e("56826")]).then(n.bind(n, "131404"));
      return n => (0, l.jsx)(e, {
        ...n,
        user: c,
        channel: t,
        channelSelected: r
      })
    })
  }, eh = e => {
    e.preventDefault(), e.stopPropagation();
    let n = W.default.Messages.LEAVE_GROUP_DM_TITLE.format({
        name
      }),
      a = W.default.Messages.LEAVE_GROUP_DM_BODY.format({
        name
      });
    t.isManaged() && (n = W.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
      name
    }), a = W.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
      name
    })), (0, h.openModal)(e => (0, l.jsx)(k.default, {
      header: n,
      body: a,
      onSubmit: eo,
      ...e
    }))
  }, em = () => {
    let e = {
      className: K.activity,
      textClassName: K.activityText,
      emojiClassName: K.activityEmoji
    };
    return t.isSystemDM() ? (0, l.jsx)("div", {
      className: K.subtext,
      children: (0, g.default)(t.id) ? W.default.Messages.SYSTEM_DM_CHANGELOG_STATUS : W.default.Messages.SYSTEM_DM_ACTIVITY_TEXT
    }) : t.isMultiUserDM() ? (0, l.jsx)("div", {
      className: K.subtext,
      children: W.default.Messages.MEMBERS_HEADER.format({
        members: t.recipients.length + 1
      })
    }) : null != A ? (0, l.jsx)(V.default, {
      ...e,
      activities: A,
      applicationStream: R,
      animate: F,
      hideTooltip: !0,
      user: c
    }) : null
  }, eC = () => {
    let e = h.AvatarSizes.SIZE_32;
    if (t.isMultiUserDM()) return t.recipients.length >= 2 && s && null == t.icon ? (0, l.jsx)(L.default, {
      "aria-hidden": !0,
      recipients: t.recipients,
      size: e,
      isTyping: M,
      status: O
    }) : (0, l.jsx)(z, {
      ...et,
      src: (0, _.getChannelIconURL)(t),
      "aria-hidden": !0,
      className: K.__invalid_avatar,
      size: e,
      status: M ? Y.StatusTypes.ONLINE : O,
      isTyping: M
    });
    o()(null != c, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
    let n = null;
    return !c.isSystemUser() && (n = (0, p.default)(A) ? Y.StatusTypes.STREAMING : O), (0, l.jsx)(z, {
      ...et,
      size: h.AvatarSizes.SIZE_32,
      src: $,
      avatarDecoration: ee,
      status: n,
      isMobile: b,
      isTyping: M,
      className: K.__invalid_avatar,
      "aria-label": c.username,
      statusTooltip: !0
    })
  }, ep = t.isMultiUserDM(), eg = t.isSystemDM(), eE = (0, v.systemDMRedesignEnabled)(), e_ = !ep && !eg && t.type === Y.ChannelTypes.DM, eS = null == c ? void 0 : c.clan, eI = (0, I.getClanBadgeUrlFromClan)(eS), eN = e_ && null != eS ? (0, l.jsxs)(l.Fragment, {
    children: [ea, (0, l.jsx)(N.BaseClanTagChiplet, {
      clanTag: eS.tag,
      clanBadge: eI,
      inline: !0
    })]
  }) : ea;
  return (0, l.jsx)(d.ListNavigatorItem, {
    id: t.id,
    children: e => {
      let {
        role: n,
        ...a
      } = e;
      return (0, l.jsx)(U.default, {
        className: K.channel,
        role: n,
        focusProps: {
          ...Z,
          focusTarget: J,
          ringTarget: q
        },
        ref: q,
        onMouseEnter: ei,
        onMouseLeave: er,
        onMouseDown: eu,
        onContextMenu: ef,
        "aria-setsize": B,
        "aria-posinset": w,
        children: (0, l.jsxs)(h.Interactive, {
          className: i()(K.interactive, {
            [K.interactiveSystemDM]: eE && eg,
            [K.interactiveSelected]: r
          }),
          as: "div",
          onClick: ec,
          muted: en,
          selected: r,
          children: [(0, l.jsx)(u.Link, {
            innerRef: J,
            to: Y.Routes.CHANNEL(Y.ME, t.id),
            className: K.link,
            "aria-label": (0, E.default)({
              channel: t,
              unread: el
            }),
            ...a,
            children: (0, l.jsx)(G.default, {
              avatar: eC(),
              selected: r,
              highlighted: el,
              muted: null != en && en,
              subText: em(),
              name: (0, l.jsx)(P.default, {
                tooltipClassName: K.overflowTooltip,
                children: eN
              }),
              decorators: t.isSystemDM() ? (0, l.jsx)(j.default, {
                className: K.decorator,
                type: j.default.Types.SYSTEM_DM,
                verified: !0
              }) : null
            })
          }), es ? (0, l.jsx)(Q, {}) : null, (0, l.jsx)(X, {
            "aria-label": ep ? W.default.Messages.LEAVE_GROUP_DM : W.default.Messages.CLOSE_DM,
            onClick: ep ? eh : eo,
            onMouseDown: ed
          })]
        })
      })
    }
  })
}
t.default = e => {
  let {
    channel: t,
    selected: n,
    ...a
  } = e, s = (0, f.useStateFromStores)([b.default], () => b.default.getUser(t.getRecipientId())), {
    isStatusIndicatorEnabled: i,
    isTypingIndicatorEnabled: r,
    isFacepileEnabled: o
  } = A.default.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: !0
  }), u = null == s ? void 0 : s.id, d = (0, f.useStateFromStoresObject)([M.default, R.default], () => {
    let e;
    if (t.isMultiUserDM()) {
      if (i) {
        let n = M.default.getState().statuses;
        t.recipients.some(e => n[e] === Y.StatusTypes.ONLINE) && (e = Y.StatusTypes.ONLINE)
      }
    } else null != u && (e = M.default.getStatus(u));
    return {
      status: e,
      activities: null != u ? M.default.getActivities(u) : null,
      applicationStream: null != u ? R.default.getAnyStreamForUser(u) : null,
      isMobile: null != u && M.default.isMobileOnline(u)
    }
  }, [u, t, i]), c = (0, f.useStateFromStores)([b.default, O.default], () => {
    if (t.isMultiUserDM()) return !!r && F.default.keys(O.default.getTypingUsers(t.id)).some(e => {
      var t;
      return e !== (null === (t = b.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
    });
    if (null != s) return O.default.isTyping(t.id, t.getRecipientId());
    return !1
  }, [t, s, r]);
  return t.isMultiUserDM() ? (0, l.jsx)(q, {
    channel: t,
    selected: n,
    isTyping: c,
    status: d.status === Y.StatusTypes.ONLINE ? Y.StatusTypes.ONLINE : void 0,
    isGDMFacepileEnabled: o,
    ...a
  }) : (0, l.jsx)(q, {
    channel: t,
    selected: n,
    user: s,
    isTyping: c,
    ...a,
    ...d
  })
}