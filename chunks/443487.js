"use strict";
n.r(t), n.d(t, {
  Card: function() {
    return g
  },
  CardInfoSection: function() {
    return S
  },
  CardParticipants: function() {
    return T
  },
  CardTitle: function() {
    return I
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("271383"),
  d = n("430824"),
  c = n("594174"),
  f = n("351167"),
  h = n("806519"),
  m = n("823379"),
  p = n("5192"),
  E = n("687694"),
  C = n("288564");

function g(e) {
  let {
    children: t,
    selected: n
  } = e, {
    showReplyIcon: l
  } = (0, E.useMemberListHoverInteractions)({
    location: "ContentCard"
  });
  return (0, a.jsxs)("div", {
    className: i()(C.container, {
      [C.selected]: n
    }),
    children: [t, l && (0, a.jsx)("div", {
      className: C.reply,
      children: (0, a.jsx)(f.default, {
        className: C.icon
      })
    })]
  })
}

function S(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)("div", {
    className: C.infoSection,
    children: t
  })
}

function _(e) {
  let {
    users: t,
    guildId: n
  } = e;
  return (0, a.jsx)("div", {
    className: C.facePile,
    children: t.map((e, l) => {
      let s = (0, a.jsx)(o.Avatar, {
        src: e.getAvatarURL(n, 80),
        size: o.AvatarSizes.SIZE_16,
        "aria-label": "avatar"
      });
      return l === t.length - 1 ? (0, a.jsx)("div", {
        className: C.facePileItem,
        children: s
      }, e.id) : (0, a.jsx)(h.default, {
        width: 16,
        height: 16,
        className: C.facePileItem,
        mask: h.default.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
        children: s
      }, e.id)
    })
  })
}

function T(e) {
  let {
    guildId: t,
    channelId: n,
    entry: s,
    maxAvatars: i = 3
  } = e, f = s.author_id, h = (0, r.useStateFromStores)([c.default], () => c.default.getUser(f)), E = (0, r.useStateFromStoresArray)([c.default], () => s.participants.map(e => c.default.getUser(e)).filter(m.isNotNullish), [s.participants]), g = l.useMemo(() => null == h ? [] : [...E.filter(e => e.id !== h.id), h].slice(-i), [i, E, h]), S = E.length - 1, T = (0, r.useStateFromStores)([u.default], () => u.default.getMember(t, f)), I = (0, r.useStateFromStores)([d.default], () => {
    var e;
    return (null == T ? void 0 : T.colorRoleId) != null ? null === (e = d.default.getRole(t, T.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0
  }, [t, T]);
  if (null == h) return null;
  let A = null == T ? void 0 : T.colorString,
    N = p.default.getName(t, n, h);
  return (0, a.jsxs)("div", {
    className: C.userSection,
    children: [(0, a.jsx)(_, {
      users: g,
      guildId: t
    }), (0, a.jsx)(o.NameWithRole, {
      color: null != A ? A : void 0,
      roleName: I,
      name: N,
      className: C.userName
    }), S > 0 ? (0, a.jsx)("div", {
      className: C.additionalParticipantBadge,
      children: (0, a.jsxs)(o.Text, {
        variant: "text-xxs/medium",
        color: "text-normal",
        className: C.additionalParticipantBadgeText,
        children: ["+", S]
      })
    }) : null]
  })
}

function I(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(o.Heading, {
    variant: "heading-sm/normal",
    className: C.contentDescription,
    lineClamp: 1,
    children: t
  })
}