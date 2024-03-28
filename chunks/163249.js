"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("442837"),
  o = s("481060"),
  d = s("749210"),
  u = s("493544"),
  c = s("607070"),
  E = s("714939"),
  _ = s("981631"),
  I = s("689938"),
  T = s("5997");

function S(e) {
  let {
    color: t,
    children: s
  } = e;
  return (0, a.jsxs)("div", {
    className: T.roleTag,
    children: [(0, a.jsx)(o.RoleCircle, {
      className: T.roleDot,
      color: t
    }), (0, a.jsx)("span", {
      className: T.roleText,
      children: s
    })]
  })
}

function f(e) {
  let {
    guild: t,
    display: s
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(T.banner, t.backgroundClass, {
      [T.bannerOut]: !s
    }),
    children: [(0, a.jsx)("div", {
      className: T.roles,
      children: t.roles.map((e, t) => (0, a.jsx)("div", {
        className: T.rolesRow,
        children: e.map(e => (0, a.jsx)(S, {
          color: e.color,
          children: e.name
        }, e.name))
      }, t))
    }), (0, a.jsx)("div", {
      className: T.profileCard,
      children: (0, a.jsxs)("div", {
        className: T.avatarContainer,
        children: [(0, a.jsx)(o.Avatar, {
          size: o.AvatarSizes.SIZE_56,
          "aria-hidden": !0,
          status: _.StatusTypes.ONLINE,
          src: t.avatar
        }), (0, a.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/bold",
          className: T.avatarName,
          children: t.username
        })]
      })
    })]
  })
}

function m() {
  let e = (0, r.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    t = l.useMemo(() => [{
      backgroundClass: T.bannerClubs,
      username: "Wumpus#0000",
      avatar: s("91055"),
      roles: [
        [{
          name: I.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_1,
          color: "#7e00fc"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_2,
          color: "#faa61a"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_3,
          color: "#f06ea8"
        }],
        [{
          name: I.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_4,
          color: "#45ddc0"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_5,
          color: "#00b0f4"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_6,
          color: "#ba1616"
        }]
      ]
    }, {
      backgroundClass: T.bannerGaming,
      username: "Graggle#0000",
      avatar: s("507003"),
      roles: [
        [{
          name: I.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_1,
          color: "#4a76e6"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_2,
          color: "#ad87ff"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_3,
          color: "#6defcf"
        }],
        [{
          name: I.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_4,
          color: "#ff73fa"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_5,
          color: "#3ba55c"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_6,
          color: "#ff1b66"
        }]
      ]
    }, {
      backgroundClass: T.bannerHobbies,
      username: "Mallow#0000",
      avatar: s("552557"),
      roles: [
        [{
          name: I.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_1,
          color: "#20d6b8"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_2,
          color: "#236136"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_3,
          color: "#ff9a15"
        }],
        [{
          name: I.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_4,
          color: "#ff78b9"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_5,
          color: "#00b0f4"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_6,
          color: "#6f52e4"
        }]
      ]
    }], []),
    [n, i] = l.useState(0);
  return l.useEffect(() => {
    if (e) return;
    let s = setTimeout(() => i((n + 1) % t.length), 6332);
    return () => clearTimeout(s)
  }, [n]), (0, a.jsx)("div", {
    className: T.bannerContainer,
    "aria-hidden": !0,
    children: t.map((e, t) => (0, a.jsx)(f, {
      guild: e,
      display: t === n
    }, t))
  })
}

function N(e) {
  let {
    guild: t,
    everyoneRole: s,
    setEditRoleId: n
  } = e, [i, r] = l.useState(!1), c = async () => {
    r(!0), await d.default.createRole(t.id), r(!1)
  }, _ = l.useCallback(() => {
    n(s.id)
  }, [n, s.id]);
  return (0, a.jsx)(u.DefaultCustomContentScroller, {
    children: (0, a.jsxs)(o.FormSection, {
      className: T.section,
      title: I.default.Messages.ROLES,
      tag: o.FormTitleTags.H2,
      children: [(0, a.jsxs)("div", {
        className: T.container,
        children: [(0, a.jsx)(m, {}), (0, a.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          children: I.default.Messages.ROLE_OVERVIEW_EMPTY_SUBHEADER
        }), (0, a.jsx)(o.Text, {
          color: "header-secondary",
          variant: "text-md/normal",
          className: T.introBody,
          children: I.default.Messages.ROLE_OVERVIEW_DESCRIPTION
        }), (0, a.jsx)(o.Button, {
          className: T.button,
          size: o.Button.Sizes.MEDIUM,
          onClick: c,
          submitting: i,
          children: I.default.Messages.ROLE_CREATE_CTA
        })]
      }), (0, a.jsx)(o.FormDivider, {
        className: T.divider
      }), (0, a.jsx)(E.default, {
        role: s,
        onClick: _
      })]
    })
  })
}