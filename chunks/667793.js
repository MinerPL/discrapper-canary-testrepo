"use strict";
s.r(t), s.d(t, {
  MemberApplicationsListRow: function() {
    return M
  },
  MemberApplicationsListRowPlaceholder: function() {
    return A
  }
}), s("222007"), s("70102");
var a = s("37983"),
  l = s("884691"),
  i = s("414456"),
  n = s.n(i),
  r = s("866227"),
  u = s.n(r),
  o = s("77078"),
  d = s("272030"),
  c = s("766274"),
  E = s("36694"),
  I = s("945330"),
  f = s("433487"),
  T = s("315102"),
  R = s("549103"),
  S = s("567054"),
  _ = s("782340"),
  m = s("26900");

function N(e) {
  let {
    icon: t,
    onClick: s,
    submitting: l,
    disabled: i
  } = e;
  return (0, a.jsx)(o.Clickable, {
    className: n(m.actionIconContainer, {
      [m.disabled]: i || l
    }),
    onClick: s,
    children: l ? (0, a.jsx)(o.Dots, {
      className: m.icon,
      dotRadius: 2,
      themed: !0
    }) : (0, a.jsx)(t, {
      className: m.icon,
      height: 12,
      width: 12
    })
  })
}

function M(e) {
  let {
    applicationStatus: t,
    guild: i,
    guildJoinRequest: r,
    className: M,
    onClick: A
  } = e, [p, h] = l.useState(null), {
    user: x,
    createdAt: C
  } = r;
  if (null == x) throw Error("Missing user on this guild join request!");
  let g = l.useMemo(() => new c.default(x), [x]),
    P = T.default.getUserAvatarURL(g),
    j = t === S.GuildJoinRequestApplicationStatuses.SUBMITTED,
    G = l.useCallback(async (e, t) => {
      let {
        guildId: s,
        userId: a
      } = e;
      if (null == p) {
        h(t);
        try {
          await R.default.updateGuildJoinRequest(s, a, t)
        } catch (e) {
          (0, o.showToast)((0, o.createToast)(_.default.Messages.ERROR_GENERIC_TITLE, o.ToastType.FAILURE)), h(null)
        }
      }
    }, [p]),
    O = async () => {
      await G(r, S.GuildJoinRequestApplicationStatuses.APPROVED)
    }, v = async () => {
      await G(r, S.GuildJoinRequestApplicationStatuses.REJECTED)
    };
  return (0, a.jsxs)(o.Clickable, {
    className: n(m.container, M),
    onClick: A,
    children: [(0, a.jsx)(o.Avatar, {
      src: P,
      size: o.AvatarSizes.SIZE_40,
      "aria-label": x.username,
      className: m.spacer
    }), (0, a.jsxs)("div", {
      className: m.userDetails,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: x.username
      }), (0, a.jsx)(o.Text, {
        className: m.createdAt,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: u(C).format("lll")
      })]
    }), j && (0, a.jsx)(N, {
      icon: E.default,
      onClick: O,
      submitting: p === S.GuildJoinRequestApplicationStatuses.APPROVED,
      disabled: null != p && p !== S.GuildJoinRequestApplicationStatuses.APPROVED
    }), j && (0, a.jsx)(N, {
      icon: I.default,
      onClick: v,
      submitting: p === S.GuildJoinRequestApplicationStatuses.REJECTED,
      disabled: null != p && p !== S.GuildJoinRequestApplicationStatuses.REJECTED
    }), (0, a.jsx)(o.Clickable, {
      className: n(m.overflowMenuContainer, {
        [m.disabled]: null != p
      }),
      onClick: e => {
        (0, d.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await s.el("176032").then(s.bind(s, "176032"));
          return t => (0, a.jsx)(e, {
            ...t,
            guild: i,
            user: g
          })
        }, {
          position: "bottom",
          align: "right"
        })
      },
      children: (0, a.jsx)(f.default, {
        className: m.icon,
        width: 18
      })
    })]
  })
}

function A() {
  return (0, a.jsxs)("div", {
    className: m.placeholder,
    children: [(0, a.jsx)("div", {
      className: n(m.placeholderAvatar)
    }), (0, a.jsxs)("div", {
      className: m.userDetails,
      children: [(0, a.jsx)("div", {
        className: m.placeholderUsername,
        style: {
          maxWidth: "".concat(Math.floor(50 * Math.random()) + 100, "px")
        }
      }), (0, a.jsx)("div", {
        className: m.placeholderCreatedAt,
        style: {
          maxWidth: "".concat(Math.floor(25 * Math.random()) + 50, "px")
        }
      })]
    })]
  })
}