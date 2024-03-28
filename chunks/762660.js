"use strict";
s.r(t), s.d(t, {
  MemberApplicationsListRow: function() {
    return M
  },
  MemberApplicationsListRowPlaceholder: function() {
    return m
  }
}), s("47120"), s("411104");
var a = s("735250"),
  l = s("470079"),
  i = s("803997"),
  n = s.n(i),
  u = s("913527"),
  r = s.n(u),
  o = s("481060"),
  d = s("239091"),
  c = s("598077"),
  E = s("263704"),
  I = s("465670"),
  f = s("808268"),
  T = s("768581"),
  _ = s("693546"),
  S = s("246364"),
  R = s("689938"),
  N = s("123471");

function A(e) {
  let {
    icon: t,
    onClick: s,
    submitting: l,
    disabled: i
  } = e;
  return (0, a.jsx)(o.Clickable, {
    className: n()(N.actionIconContainer, {
      [N.disabled]: i || l
    }),
    onClick: s,
    children: l ? (0, a.jsx)(o.Dots, {
      className: N.icon,
      dotRadius: 2,
      themed: !0
    }) : (0, a.jsx)(t, {
      className: N.icon,
      height: 12,
      width: 12
    })
  })
}

function M(e) {
  let {
    applicationStatus: t,
    guild: i,
    guildJoinRequest: u,
    className: M,
    onClick: m
  } = e, [h, p] = l.useState(null), {
    user: C,
    createdAt: g
  } = u;
  if (null == C) throw Error("Missing user on this guild join request!");
  let x = l.useMemo(() => new c.default(C), [C]),
    G = T.default.getUserAvatarURL(x),
    P = t === S.GuildJoinRequestApplicationStatuses.SUBMITTED,
    j = l.useCallback(async (e, t) => {
      let {
        guildId: s,
        userId: a
      } = e;
      if (null == h) {
        p(t);
        try {
          await _.default.updateGuildJoinRequest(s, a, t)
        } catch (e) {
          (0, o.showToast)((0, o.createToast)(R.default.Messages.ERROR_GENERIC_TITLE, o.ToastType.FAILURE)), p(null)
        }
      }
    }, [h]),
    v = async () => {
      await j(u, S.GuildJoinRequestApplicationStatuses.APPROVED)
    }, O = async () => {
      await j(u, S.GuildJoinRequestApplicationStatuses.REJECTED)
    };
  return (0, a.jsxs)(o.Clickable, {
    className: n()(N.container, M),
    onClick: m,
    children: [(0, a.jsx)(o.Avatar, {
      src: G,
      size: o.AvatarSizes.SIZE_40,
      "aria-label": C.username,
      className: N.__invalid_spacer
    }), (0, a.jsxs)("div", {
      className: N.userDetails,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: C.username
      }), (0, a.jsx)(o.Text, {
        className: N.createdAt,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: r()(g).format("lll")
      })]
    }), P && (0, a.jsx)(A, {
      icon: E.default,
      onClick: v,
      submitting: h === S.GuildJoinRequestApplicationStatuses.APPROVED,
      disabled: null != h && h !== S.GuildJoinRequestApplicationStatuses.APPROVED
    }), P && (0, a.jsx)(A, {
      icon: I.default,
      onClick: O,
      submitting: h === S.GuildJoinRequestApplicationStatuses.REJECTED,
      disabled: null != h && h !== S.GuildJoinRequestApplicationStatuses.REJECTED
    }), (0, a.jsx)(o.Clickable, {
      className: n()(N.overflowMenuContainer, {
        [N.disabled]: null != h
      }),
      onClick: e => {
        (0, d.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await s.e("84259").then(s.bind(s, "597409"));
          return t => (0, a.jsx)(e, {
            ...t,
            guild: i,
            user: x
          })
        }, {
          position: "bottom",
          align: "right"
        })
      },
      children: (0, a.jsx)(f.default, {
        className: N.icon,
        width: 18
      })
    })]
  })
}

function m() {
  return (0, a.jsxs)("div", {
    className: N.placeholder,
    children: [(0, a.jsx)("div", {
      className: n()(N.placeholderAvatar)
    }), (0, a.jsxs)("div", {
      className: N.userDetails,
      children: [(0, a.jsx)("div", {
        className: N.placeholderUsername,
        style: {
          maxWidth: "".concat(Math.floor(50 * Math.random()) + 100, "px")
        }
      }), (0, a.jsx)("div", {
        className: N.placeholderCreatedAt,
        style: {
          maxWidth: "".concat(Math.floor(25 * Math.random()) + 50, "px")
        }
      })]
    })]
  })
}