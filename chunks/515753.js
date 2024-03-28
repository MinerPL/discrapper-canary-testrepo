"use strict";
n.r(t), n.d(t, {
  CloseButton: function() {
    return K
  },
  LinkButton: function() {
    return Z
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("613828"),
  d = n("924826"),
  c = n("873546"),
  f = n("442837"),
  h = n("481060"),
  C = n("493683"),
  p = n("239091"),
  m = n("420660"),
  g = n("201895"),
  E = n("43267"),
  S = n("933557"),
  _ = n("853856"),
  I = n("205765"),
  N = n("276423"),
  T = n("878857"),
  A = n("204197"),
  L = n("199902"),
  v = n("158776"),
  x = n("306680"),
  R = n("111583"),
  M = n("9156"),
  O = n("594174"),
  y = n("467679"),
  D = n("514342"),
  b = n("28718"),
  j = n("733880"),
  G = n("465670"),
  U = n("887208"),
  P = n("998502"),
  w = n("788307"),
  F = n("960670"),
  B = n("981631"),
  V = n("689938"),
  H = n("860040");
let k = P.default.getEnableHardwareAcceleration() ? h.AnimatedAvatar : h.Avatar,
  Y = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  K = e => (0, l.jsx)(h.Clickable, {
    className: H.closeButton,
    ...e,
    focusProps: {
      offset: {
        top: -2,
        bottom: -2,
        left: -2,
        right: 6
      }
    },
    children: (0, l.jsx)(G.default, {
      className: H.closeIcon
    })
  }),
  W = () => (0, l.jsx)(U.default, {
    className: H.favoriteIcon
  });
class Z extends a.Component {
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
      className: C,
      role: p,
      "aria-posinset": m,
      "aria-setsize": g,
      ...E
    } = this.props;
    return (0, l.jsx)(j.default, {
      className: i()(H.channel, {
        [H.fullWidth]: c.isMobile
      }, C),
      onClick: f,
      role: p,
      focusProps: {
        within: !0,
        ...Y
      },
      "aria-posinset": m,
      "aria-setsize": g,
      children: (0, l.jsx)(h.Interactive, {
        as: "div",
        selected: t,
        className: i()(s, H.interactive, H.linkButton, {
          [H.interactiveSelected]: t
        }),
        children: (0, l.jsxs)(u.Link, {
          to: {
            pathname: e,
            state: d
          },
          className: H.link,
          ...E,
          children: [(0, l.jsx)(b.default, {
            selected: t,
            muted: !1,
            avatar: (0, l.jsx)(n, {
              className: i()(H.linkButtonIcon, a)
            }),
            name: r,
            innerClassName: H.avatarWithText
          }), o]
        })
      })
    })
  }
}

function z(e) {
  var t, s;
  let {
    channel: r,
    selected: c = !1,
    user: L,
    activities: R,
    applicationStream: O,
    isTyping: G,
    status: U,
    isMobile: P,
    "aria-posinset": Z,
    "aria-setsize": z
  } = e, [X, Q] = a.useState(!1), q = a.useRef(null), J = a.useRef(null), {
    avatarSrc: $,
    avatarDecorationSrc: ee,
    eventHandlers: et
  } = (0, A.default)({
    user: L,
    size: h.AvatarSizes.SIZE_32,
    animateOnHover: !(c || X)
  }), en = (0, f.useStateFromStores)([M.default], () => M.default.isChannelMuted(r.getGuildId(), r.id)), el = (0, f.useStateFromStores)([x.default], () => x.default.getMentionCount(r.id) > 0), ea = (0, S.default)(r), es = (0, f.useStateFromStores)([_.default], () => _.default.isFavorite(r.id)), {
    isFacepileEnabled: ei,
    isStatusIndicatorEnabled: er
  } = I.default.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: !0
  });
  let eo = (t = r, s = er, (0, f.useStateFromStores)([v.default], () => {
      var e;
      if (!s || !t.isGroupDM() || (null === (e = t.recipients) || void 0 === e ? void 0 : e.length) === 0) return null;
      let n = v.default.getState().statuses;
      return t.recipients.some(e => n[e] === B.StatusTypes.ONLINE) ? B.StatusTypes.ONLINE : null
    })),
    eu = () => {
      Q(!0)
    },
    ed = () => {
      Q(!1)
    },
    ec = function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      null != e && (e.preventDefault(), e.stopPropagation()), C.default.closePrivateChannel(r.id, c, t)
    },
    ef = () => {
      C.default.preload(B.ME, r.id)
    },
    eh = e => {
      e.stopPropagation()
    },
    eC = e => {
      if (e.target === e.currentTarget) {
        var t;
        null === (t = q.current) || void 0 === t || t.click()
      }
    },
    ep = e => {
      r.isMultiUserDM() ? (0, p.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("25421")]).then(n.bind(n, "354741"));
        return t => (0, l.jsx)(e, {
          ...t,
          channel: r,
          selected: c
        })
      }, {
        noBlurEvent: !0
      }) : (0, p.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("56826")]).then(n.bind(n, "131404"));
        return t => (0, l.jsx)(e, {
          ...t,
          user: L,
          channel: r,
          channelSelected: c
        })
      })
    },
    em = e => {
      e.preventDefault(), e.stopPropagation();
      let t = V.default.Messages.LEAVE_GROUP_DM_TITLE.format({
          name
        }),
        n = V.default.Messages.LEAVE_GROUP_DM_BODY.format({
          name
        });
      r.isManaged() && (t = V.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
        name
      }), n = V.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
        name
      })), (0, h.openModal)(e => (0, l.jsx)(F.default, {
        header: t,
        body: n,
        onSubmit: ec,
        ...e
      }))
    },
    eg = () => {
      let e = {
        className: H.activity,
        textClassName: H.activityText,
        emojiClassName: H.activityEmoji
      };
      return r.isSystemDM() ? (0, l.jsx)("div", {
        className: H.subtext,
        children: V.default.Messages.SYSTEM_DM_ACTIVITY_TEXT
      }) : r.isMultiUserDM() ? (0, l.jsx)("div", {
        className: H.subtext,
        children: V.default.Messages.MEMBERS_HEADER.format({
          members: r.recipients.length + 1
        })
      }) : null != R ? (0, l.jsx)(w.default, {
        ...e,
        activities: R,
        applicationStream: O,
        animate: X,
        hideTooltip: !0,
        user: L
      }) : null
    },
    eE = () => {
      if (r.isMultiUserDM()) {
        let e = er ? eo : void 0;
        return r.recipients.length >= 2 && ei && null == r.icon ? (0, l.jsx)(N.default, {
          "aria-hidden": !0,
          recipients: r.recipients,
          size: (0, h.getAvatarSize)(h.AvatarSizes.SIZE_32),
          status: e
        }) : (0, l.jsx)(k, {
          ...et,
          src: (0, E.getChannelIconURL)(r),
          "aria-hidden": !0,
          className: H.__invalid_avatar,
          size: h.AvatarSizes.SIZE_32,
          status: er ? eo : void 0
        })
      }
      o()(null != L, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
      let e = null;
      return !L.isSystemUser() && (e = (0, m.default)(R) ? B.StatusTypes.STREAMING : U), (0, l.jsx)(k, {
        ...et,
        size: h.AvatarSizes.SIZE_32,
        src: $,
        avatarDecoration: ee,
        status: e,
        isMobile: P,
        isTyping: G,
        className: H.__invalid_avatar,
        "aria-label": L.username,
        statusTooltip: !0
      })
    },
    eS = r.isMultiUserDM(),
    e_ = r.isSystemDM(),
    eI = (0, T.systemDMRedesignEnabled)();
  return (0, l.jsx)(d.ListNavigatorItem, {
    id: r.id,
    children: e => {
      let {
        role: t,
        ...n
      } = e;
      return (0, l.jsx)(j.default, {
        className: H.channel,
        role: t,
        focusProps: {
          ...Y,
          focusTarget: q,
          ringTarget: J
        },
        ref: J,
        onMouseEnter: eu,
        onMouseLeave: ed,
        onMouseDown: ef,
        onContextMenu: ep,
        "aria-setsize": z,
        "aria-posinset": Z,
        children: (0, l.jsxs)(h.Interactive, {
          className: i()(H.interactive, {
            [H.interactiveSystemDM]: eI && e_,
            [H.interactiveSelected]: c
          }),
          as: "div",
          onClick: eC,
          muted: en,
          selected: c,
          children: [(0, l.jsx)(u.Link, {
            innerRef: q,
            to: B.Routes.CHANNEL(B.ME, r.id),
            className: H.link,
            "aria-label": (0, g.default)({
              channel: r,
              unread: el
            }),
            ...n,
            children: (0, l.jsx)(b.default, {
              avatar: eE(),
              selected: c,
              highlighted: el,
              muted: null != en && en,
              subText: eg(),
              name: (0, l.jsx)(D.default, {
                children: ea
              }),
              decorators: r.isSystemDM() ? (0, l.jsx)(y.default, {
                className: H.decorator,
                type: y.default.Types.SYSTEM_DM,
                verified: !0
              }) : null
            })
          }), es ? (0, l.jsx)(W, {}) : null, !e_ && (0, l.jsx)(K, {
            "aria-label": eS ? V.default.Messages.LEAVE_GROUP_DM : V.default.Messages.CLOSE_DM,
            onClick: eS ? em : ec,
            onMouseDown: eh
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
  } = e, s = (0, f.useStateFromStores)([O.default], () => O.default.getUser(t.getRecipientId())), i = null == s ? void 0 : s.id, r = (0, f.useStateFromStoresObject)([v.default, L.default], () => ({
    status: null != i ? v.default.getStatus(i) : null,
    activities: null != i ? v.default.getActivities(i) : null,
    applicationStream: null != i ? L.default.getAnyStreamForUser(i) : null,
    isMobile: null != i && v.default.isMobileOnline(i)
  }), [i]), o = (0, f.useStateFromStores)([R.default], () => null != s ? R.default.isTyping(t.id, t.getRecipientId()) : void 0);
  return t.isMultiUserDM() ? (0, l.jsx)(z, {
    channel: t,
    selected: n,
    ...a
  }) : (0, l.jsx)(z, {
    channel: t,
    selected: n,
    user: s,
    isTyping: o,
    ...a,
    ...r
  })
}