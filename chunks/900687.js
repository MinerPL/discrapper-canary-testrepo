i.d(n, {
  Z: function() {
return u;
  }
});
var s = i(735250);
i(470079);
var l = i(481060),
  o = i(239091),
  t = i(785717),
  r = i(705556),
  a = i(225714),
  d = i(228168),
  c = i(984904);

function u(e) {
  let {
user: n,
isCurrentUser: u,
guildId: I,
friendToken: _,
relationshipType: f,
originalFriendingEnabled: E = !1,
improvedFriendingEnabled: m = !1,
persistentCallCtaEnabled: S = !1,
activeInviteToCallCtaEnabled: Z = !1,
viewProfileItem: x,
onClose: v
  } = e, {
trackUserProfileAction: h
  } = (0, t.KZ)();
  return (0, s.jsxs)('div', {
className: c.buttons,
children: [
  (0, s.jsx)(a.Z, {
    user: n,
    isCurrentUser: u,
    relationshipType: f,
    improvedFriendingEnabled: m,
    persistentCallCtaEnabled: S,
    activeInviteToCallCtaEnabled: Z,
    friendToken: _,
    onClose: v
  }),
  (0, s.jsx)(r.Z, {
    user: n,
    guildId: I,
    profileType: d.y0.FULL_SIZE,
    onClose: v
  }),
  !n.isNonUserBot() && E ? (0, s.jsx)(l.Clickable, {
    focusProps: {
      offset: {
        left: 8
      }
    },
    onClick: function(e) {
      h({
        action: 'PRESS_OPTIONS'
      }), (0, o.jW)(e, async () => {
        let {
          default: e
        } = await i.e('29136').then(i.bind(i, 193646));
        return i => (0, s.jsx)(e, {
          ...i,
          originalFriendingEnabled: E,
          relationshipType: f,
          viewProfileItem: x,
          user: n,
          isCurrentUser: u,
          guildId: I,
          trackUserProfileAction: h,
          onClose: v
        });
      });
    },
    children: (0, s.jsx)(l.MoreVerticalIcon, {
      size: 'md',
      color: 'currentColor',
      className: c.additionalActionsIcon
    })
  }) : null
]
  });
}