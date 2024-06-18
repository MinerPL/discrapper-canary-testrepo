"use strict";
n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(194359),
  l = n(906732),
  u = n(5192),
  _ = n(877485),
  d = n(785717),
  c = n(689938),
  E = n(125188);

function I(e) {
  let {
    user: t,
    guildId: n,
    channelId: r,
    friendToken: I,
    className: T
  } = e, h = u.ZP.getName(n, r, t), {
    trackUserProfileAction: S
  } = (0, d.KZ)(), {
    newestAnalyticsLocation: f
  } = (0, l.ZP)(), {
    originalFriendingEnabled: N,
    improvedFriendingEnabled: A
  } = (0, _.V)({
    location: "UserProfileIncomingFriendRequestBanner"
  });
  return (0, i.jsxs)("div", {
    className: s()(E.container, T),
    children: [(0, i.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: c.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({
        username: h
      })
    }), (0, i.jsxs)("div", {
      className: E.buttonContainer,
      children: [(0, i.jsx)(o.Button, {
        look: o.Button.Looks.FILLED,
        color: s()({
          [o.Button.Colors.GREEN]: N,
          [o.Button.Colors.BRAND]: A,
          [E.color]: A
        }),
        size: o.Button.Sizes.SMALL,
        className: E.button,
        onClick: () => {
          S({
            action: "ACCEPT_FRIEND_REQUEST"
          }), a.Z.addRelationship({
            userId: t.id,
            friendToken: I,
            context: {
              location: f
            }
          })
        },
        children: c.Z.Messages.FRIEND_REQUEST_ACCEPT
      }), (0, i.jsx)(o.Button, {
        look: o.Button.Looks.FILLED,
        color: o.Button.Colors.PRIMARY,
        size: o.Button.Sizes.SMALL,
        className: E.button,
        onClick: () => {
          S({
            action: "IGNORE_FRIEND_REQUEST"
          }), a.Z.cancelFriendRequest(t.id, {
            location: f
          })
        },
        children: c.Z.Messages.FRIEND_REQUEST_IGNORE
      })]
    })]
  })
}