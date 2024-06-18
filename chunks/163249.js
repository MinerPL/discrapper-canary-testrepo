"use strict";
t.d(s, {
  Z: function() {
    return h
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(749210),
  d = t(493544),
  u = t(607070),
  E = t(714939),
  _ = t(981631),
  I = t(689938),
  T = t(447283);

function N(e) {
  let {
    color: s,
    children: t
  } = e;
  return (0, n.jsxs)("div", {
    className: T.roleTag,
    children: [(0, n.jsx)(o.RoleCircle, {
      className: T.roleDot,
      color: s
    }), (0, n.jsx)("span", {
      className: T.roleText,
      children: t
    })]
  })
}

function m(e) {
  let {
    guild: s,
    display: t
  } = e;
  return (0, n.jsxs)("div", {
    className: a()(T.banner, s.backgroundClass, {
      [T.bannerOut]: !t
    }),
    children: [(0, n.jsx)("div", {
      className: T.roles,
      children: s.roles.map((e, s) => (0, n.jsx)("div", {
        className: T.rolesRow,
        children: e.map(e => (0, n.jsx)(N, {
          color: e.color,
          children: e.name
        }, e.name))
      }, s))
    }), (0, n.jsx)("div", {
      className: T.profileCard,
      children: (0, n.jsxs)("div", {
        className: T.avatarContainer,
        children: [(0, n.jsx)(o.Avatar, {
          size: o.AvatarSizes.SIZE_56,
          "aria-hidden": !0,
          status: _.Skl.ONLINE,
          src: s.avatar
        }), (0, n.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/bold",
          className: T.avatarName,
          children: s.username
        })]
      })
    })]
  })
}

function S() {
  let e = (0, r.e7)([u.Z], () => u.Z.useReducedMotion),
    s = i.useMemo(() => [{
      backgroundClass: T.bannerClubs,
      username: "Wumpus#0000",
      avatar: t(91055),
      roles: [
        [{
          name: I.Z.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_1,
          color: "#7e00fc"
        }, {
          name: I.Z.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_2,
          color: "#faa61a"
        }, {
          name: I.Z.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_3,
          color: "#f06ea8"
        }],
        [{
          name: I.Z.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_4,
          color: "#45ddc0"
        }, {
          name: I.Z.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_5,
          color: "#00b0f4"
        }, {
          name: I.Z.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_6,
          color: "#ba1616"
        }]
      ]
    }, {
      backgroundClass: T.bannerGaming,
      username: "Graggle#0000",
      avatar: t(507003),
      roles: [
        [{
          name: I.Z.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_1,
          color: "#4a76e6"
        }, {
          name: I.Z.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_2,
          color: "#ad87ff"
        }, {
          name: I.Z.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_3,
          color: "#6defcf"
        }],
        [{
          name: I.Z.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_4,
          color: "#ff73fa"
        }, {
          name: I.Z.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_5,
          color: "#3ba55c"
        }, {
          name: I.Z.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_6,
          color: "#ff1b66"
        }]
      ]
    }, {
      backgroundClass: T.bannerHobbies,
      username: "Mallow#0000",
      avatar: t(552557),
      roles: [
        [{
          name: I.Z.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_1,
          color: "#20d6b8"
        }, {
          name: I.Z.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_2,
          color: "#236136"
        }, {
          name: I.Z.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_3,
          color: "#ff9a15"
        }],
        [{
          name: I.Z.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_4,
          color: "#ff78b9"
        }, {
          name: I.Z.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_5,
          color: "#00b0f4"
        }, {
          name: I.Z.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_6,
          color: "#6f52e4"
        }]
      ]
    }], []),
    [l, a] = i.useState(0);
  return i.useEffect(() => {
    if (e) return;
    let t = setTimeout(() => a((l + 1) % s.length), 6332);
    return () => clearTimeout(t)
  }, [l]), (0, n.jsx)("div", {
    className: T.bannerContainer,
    "aria-hidden": !0,
    children: s.map((e, s) => (0, n.jsx)(m, {
      guild: e,
      display: s === l
    }, s))
  })
}

function h(e) {
  let {
    guild: s,
    everyoneRole: t,
    setEditRoleId: l
  } = e, [a, r] = i.useState(!1), u = async () => {
    r(!0), await c.Z.createRole(s.id), r(!1)
  }, _ = i.useCallback(() => {
    l(t.id)
  }, [l, t.id]);
  return (0, n.jsx)(d.NM, {
    children: (0, n.jsxs)(o.FormSection, {
      className: T.section,
      title: I.Z.Messages.ROLES,
      tag: o.FormTitleTags.H2,
      children: [(0, n.jsxs)("div", {
        className: T.container,
        children: [(0, n.jsx)(S, {}), (0, n.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          children: I.Z.Messages.ROLE_OVERVIEW_EMPTY_SUBHEADER
        }), (0, n.jsx)(o.Text, {
          color: "header-secondary",
          variant: "text-md/normal",
          className: T.introBody,
          children: I.Z.Messages.ROLE_OVERVIEW_DESCRIPTION
        }), (0, n.jsx)(o.Button, {
          className: T.button,
          size: o.Button.Sizes.MEDIUM,
          onClick: u,
          submitting: a,
          children: I.Z.Messages.ROLE_CREATE_CTA
        })]
      }), (0, n.jsx)(o.FormDivider, {
        className: T.divider
      }), (0, n.jsx)(E.Z, {
        role: t,
        onClick: _
      })]
    })
  })
}