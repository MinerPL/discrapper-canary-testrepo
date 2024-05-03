"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  a = n.n(r),
  s = n("442837"),
  o = n("246946"),
  l = n("5192"),
  u = n("447452"),
  d = n("681837"),
  _ = n("724593"),
  c = n("530"),
  E = n("894374"),
  I = n("790711"),
  T = n("580512"),
  f = n("67152"),
  S = n("579285"),
  h = n("287612"),
  A = n("108997");

function m(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: r,
    guild: m,
    isHovering: N,
    onOpenProfile: p,
    channelId: O,
    onClose: R
  } = e, {
    moreUserDetailsEnabled: C
  } = (0, u.useSimplifiedProfileExperiment)({
    location: "BiteSizeProfileBody"
  }), g = l.default.getName(null == m ? void 0 : m.id, O, t), L = (0, s.useStateFromStores)([o.default], () => o.default.hidePersonalInformation);
  return (0, i.jsxs)("div", {
    className: A.body,
    children: [(0, i.jsx)(c.default, {
      user: t,
      onOpenProfile: () => p(!1),
      guildId: null == m ? void 0 : m.id,
      usernameIcon: t.hasAvatarForGuild(null == m ? void 0 : m.id) && (0, i.jsx)(I.default, {
        user: t,
        nickname: g
      }),
      pronouns: null == r ? void 0 : r.pronouns,
      tags: (0, i.jsx)(E.UserProfileBadgesTag, {
        displayProfile: r,
        onClose: R
      }),
      nicknameIcons: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.default, {
          userId: t.id
        }), C && !L && (0, i.jsx)(_.default, {
          className: a()(A.noteIcon, {
            [A.visible]: N
          }),
          user: t,
          onOpenProfile: () => p(!0)
        })]
      })
    }), (0, i.jsx)(h.default, {
      user: t,
      onClose: R
    }), C && (0, i.jsx)(f.default, {
      user: t,
      bio: null == r ? void 0 : r.bio,
      hidePersonalInformation: L,
      onClose: R
    }), (0, i.jsx)(T.default, {
      user: t,
      guild: m,
      channelId: O,
      onClose: R
    }), null != m && (0, i.jsx)(S.default, {
      user: t,
      currentUser: n,
      guild: m,
      onOpenProfile: () => p(!1)
    })]
  })
}