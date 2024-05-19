"use strict";
n.r(t), n.d(t, {
  Card: function() {
    return C
  },
  CardInfoSection: function() {
    return g
  },
  CardParticipants: function() {
    return _
  },
  CardTitle: function() {
    return T
  }
});
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  i = n("442837"),
  r = n("481060"),
  o = n("271383"),
  u = n("430824"),
  d = n("594174"),
  c = n("351167"),
  f = n("806519"),
  h = n("5192"),
  m = n("192918"),
  p = n("687694"),
  E = n("571425");

function C(e) {
  let {
    children: t,
    selected: n
  } = e, {
    showReplyIcon: l,
    openOnHover: i
  } = (0, p.useMemberListHoverInteractions)({
    location: "ContentCard"
  });
  return (0, a.jsxs)("div", {
    className: s()(E.container, {
      [E.selected]: n
    }, {
      [E.openOnHover]: i
    }),
    children: [t, l && (0, a.jsx)("div", {
      className: E.reply,
      children: (0, a.jsx)(c.default, {
        className: E.icon
      })
    })]
  })
}

function g(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)("div", {
    className: E.infoSection,
    children: t
  })
}

function S(e) {
  let {
    users: t,
    guildId: n
  } = e;
  return (0, a.jsx)("div", {
    className: E.facePile,
    children: t.map((e, l) => {
      let s = (0, a.jsx)(r.Avatar, {
        src: e.getAvatarURL(n, 80),
        size: r.AvatarSizes.SIZE_16,
        "aria-label": "avatar"
      });
      return l === t.length - 1 ? (0, a.jsx)("div", {
        className: E.facePileItem,
        children: s
      }, e.id) : (0, a.jsx)(f.default, {
        width: 16,
        height: 16,
        className: E.facePileItem,
        mask: f.default.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
        children: s
      }, e.id)
    })
  })
}

function _(e) {
  let {
    guildId: t,
    channelId: n,
    entry: l,
    maxAvatars: s = 3
  } = e, c = l.author_id, f = (0, i.useStateFromStores)([d.default], () => d.default.getUser(c)), {
    displayParticipants: p,
    numOtherParticipants: C
  } = (0, m.default)(l, s), g = (0, i.useStateFromStores)([o.default], () => o.default.getMember(t, c)), _ = (0, i.useStateFromStores)([u.default], () => {
    var e;
    return (null == g ? void 0 : g.colorRoleId) != null ? null === (e = u.default.getRole(t, g.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0
  }, [t, g]);
  if (null == f) return null;
  let T = null == g ? void 0 : g.colorString,
    I = h.default.getName(t, n, f);
  return (0, a.jsxs)("div", {
    className: E.userSection,
    children: [(0, a.jsx)(S, {
      users: p,
      guildId: t
    }), (0, a.jsx)(r.NameWithRole, {
      color: null != T ? T : void 0,
      roleName: _,
      name: I,
      className: E.userName
    }), C > 0 ? (0, a.jsx)("div", {
      className: E.additionalParticipantBadge,
      children: (0, a.jsxs)(r.Text, {
        variant: "text-xxs/medium",
        color: "text-normal",
        className: E.additionalParticipantBadgeText,
        children: ["+", C]
      })
    }) : null]
  })
}

function T(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(r.Heading, {
    variant: "heading-sm/normal",
    className: E.contentDescription,
    lineClamp: 1,
    children: t
  })
}