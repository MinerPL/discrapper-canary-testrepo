"use strict";
n.r(t), n.d(t, {
  CloseButton: function() {
    return K
  },
  LinkButton: function() {
    return z
  },
  default: function() {
    return X
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  o = n.n(r),
  u = n("90915"),
  d = n("974667"),
  c = n("394846"),
  f = n("446674"),
  h = n("77078"),
  C = n("450911"),
  p = n("272030"),
  m = n("502651"),
  E = n("139375"),
  g = n("843962"),
  I = n("679653"),
  S = n("379881"),
  _ = n("538583"),
  N = n("870503"),
  T = n("262973"),
  A = n("106435"),
  L = n("373469"),
  v = n("824563"),
  x = n("660478"),
  R = n("191542"),
  M = n("282109"),
  O = n("697218"),
  y = n("79798"),
  D = n("98292"),
  b = n("376069"),
  j = n("379793"),
  G = n("945330"),
  U = n("671434"),
  P = n("50885"),
  w = n("943722"),
  F = n("254167"),
  B = n("49111"),
  V = n("782340"),
  H = n("48594");
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
class z extends a.Component {
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
      "aria-setsize": E,
      ...g
    } = this.props;
    return (0, l.jsx)(j.default, {
      className: i(H.channel, {
        [H.fullWidth]: c.isMobile
      }, C),
      onClick: f,
      role: p,
      focusProps: {
        within: !0,
        ...Y
      },
      "aria-posinset": m,
      "aria-setsize": E,
      children: (0, l.jsx)(h.Interactive, {
        as: "div",
        selected: t,
        className: i(s, H.interactive, H.linkButton, {
          [H.interactiveSelected]: t
        }),
        children: (0, l.jsxs)(u.Link, {
          to: {
            pathname: e,
            state: d
          },
          className: H.link,
          ...g,
          children: [(0, l.jsx)(b.default, {
            selected: t,
            muted: !1,
            avatar: (0, l.jsx)(n, {
              className: i(H.linkButtonIcon, a)
            }),
            name: r,
            innerClassName: H.avatarWithText
          }), o]
        })
      })
    })
  }
}

function Z(e) {
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
    "aria-posinset": z,
    "aria-setsize": Z
  } = e, [X, Q] = a.useState(!1), q = a.useRef(null), J = a.useRef(null), {
    avatarSrc: $,
    avatarDecorationSrc: ee,
    eventHandlers: et
  } = (0, A.default)({
    user: L,
    size: h.AvatarSizes.SIZE_32,
    animateOnHover: !(c || X)
  }), en = (0, f.useStateFromStores)([M.default], () => M.default.isChannelMuted(r.getGuildId(), r.id)), el = (0, f.useStateFromStores)([x.default], () => x.default.getMentionCount(r.id) > 0), ea = (0, I.default)(r), es = (0, f.useStateFromStores)([S.default], () => S.default.isFavorite(r.id)), {
    isFacepileEnabled: ei,
    isStatusIndicatorEnabled: er
  } = _.default.useExperiment({
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
        } = await n.el("493015").then(n.bind(n, "493015"));
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
        } = await n.el("130074").then(n.bind(n, "130074"));
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
    eE = () => {
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
    eg = () => {
      if (r.isMultiUserDM()) {
        let e = er ? eo : void 0;
        return r.recipients.length >= 2 && ei && null == r.icon ? (0, l.jsx)(N.default, {
          "aria-hidden": !0,
          recipients: r.recipients,
          size: (0, h.getAvatarSize)(h.AvatarSizes.SIZE_32),
          status: e
        }) : (0, l.jsx)(k, {
          ...et,
          src: (0, g.getChannelIconURL)(r),
          "aria-hidden": !0,
          className: H.avatar,
          size: h.AvatarSizes.SIZE_32,
          status: er ? eo : void 0
        })
      }
      o(null != L, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
      let e = null;
      return !L.isSystemUser() && (e = (0, m.default)(R) ? B.StatusTypes.STREAMING : U), (0, l.jsx)(k, {
        ...et,
        size: h.AvatarSizes.SIZE_32,
        src: $,
        avatarDecoration: ee,
        status: e,
        isMobile: P,
        isTyping: G,
        className: H.avatar,
        "aria-label": L.username,
        statusTooltip: !0
      })
    },
    eI = r.isMultiUserDM(),
    eS = r.isSystemDM(),
    e_ = (0, T.systemDMRedesignEnabled)();
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
        "aria-setsize": Z,
        "aria-posinset": z,
        children: (0, l.jsxs)(h.Interactive, {
          className: i(H.interactive, {
            [H.interactiveSystemDM]: e_ && eS,
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
            "aria-label": (0, E.default)({
              channel: r,
              unread: el
            }),
            ...n,
            children: (0, l.jsx)(b.default, {
              avatar: eg(),
              selected: c,
              highlighted: el,
              muted: null != en && en,
              subText: eE(),
              name: (0, l.jsx)(D.default, {
                children: ea
              }),
              decorators: r.isSystemDM() ? (0, l.jsx)(y.default, {
                className: H.decorator,
                type: y.default.Types.SYSTEM_DM,
                verified: !0
              }) : null
            })
          }), es ? (0, l.jsx)(W, {}) : null, !eS && (0, l.jsx)(K, {
            "aria-label": eI ? V.default.Messages.LEAVE_GROUP_DM : V.default.Messages.CLOSE_DM,
            onClick: eI ? em : ec,
            onMouseDown: eh
          })]
        })
      })
    }
  })
}
var X = e => {
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
  return t.isMultiUserDM() ? (0, l.jsx)(Z, {
    channel: t,
    selected: n,
    ...a
  }) : (0, l.jsx)(Z, {
    channel: t,
    selected: n,
    user: s,
    isTyping: o,
    ...a,
    ...r
  })
}