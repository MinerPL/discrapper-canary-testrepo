n.d(t, {
  Z: function() {
return N;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(442837),
  o = n(481060),
  l = n(607070),
  u = n(907040),
  c = n(314897),
  d = n(699516),
  _ = n(404975),
  E = n(823379),
  f = n(51144),
  h = n(785717),
  p = n(505737),
  m = n(485216),
  I = n(228168),
  T = n(185923),
  g = n(689938),
  S = n(328849);
let A = e => {
  let {
emoji: t,
username: n,
sourceType: r,
sourceDetails: i
  } = e, a = ':'.concat(t.name, ':');
  switch (r) {
case I.N9.ACTIVITY:
  let s = g.Z.Messages.USER_PROFILE_REACTED_TO_ACTIVITY.format({
    username: n
  });
  return '> -# *'.concat(s, '*\n').concat(a);
case I.N9.AVATAR:
  let o = g.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({
    username: n
  });
  return '> -# *'.concat(o, '*\n').concat(a);
case I.N9.STATUS:
  let l = g.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({
    username: n
  });
  return null != i ? '> -# *'.concat(l, '*').concat('\n > '.concat(i), '\n').concat(a) : '> -# *'.concat(l, '*\n').concat(a);
default:
  (0, E.vE)(r);
  }
};

function N(e) {
  let {
user: t,
channel: n,
sourceType: i,
sourceDetails: E,
isVisible: I,
isExpandable: N,
onReply: v
  } = e, {
trackUserProfileAction: O
  } = (0, h.KZ)(), R = (0, s.e7)([c.default], () => c.default.getId() === t.id), C = (0, p.Z)(t.id), [y, D] = (0, s.Wu)([l.Z], () => [
l.Z.useReducedMotion,
l.Z.keyboardModeEnabled
  ]);
  if (t.bot || R || !C)
return null;
  let L = !N || y || D ? 0 : 300,
b = async e => {
  var n;
  if (null == e)
    return;
  O({
    action: 'PRESS_REACT'
  });
  let r = A({
    emoji: e,
    username: null !== (n = d.Z.getNickname(t.id)) && void 0 !== n ? n : f.ZP.getName(t),
    sourceType: i,
    sourceDetails: E
  });
  await (0, m.Z)({
    userId: t.id,
    content: r,
    location: 'UserProfileReactReplyBar',
    openChannel: !1
  });
};
  return (0, r.jsxs)(_.ZP, {
className: a()(S.popover, {
  [S.visible]: I,
  [S.expandable]: N
}),
children: [
  (0, r.jsx)(o.TooltipContainer, {
    text: g.Z.Messages.USER_PROFILE_SEND_REACTION,
    shouldShow: I,
    delay: L,
    'aria-label': !1,
    children: (0, r.jsx)(o.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(u.Z, {
          guildId: null == n ? void 0 : n.guild_id,
          closePopout: t,
          onSelectEmoji: (e, n) => {
            b(e), n && t();
          },
          pickerIntention: T.Hz.PROFILE,
          channel: n
        });
      },
      position: 'left',
      animation: o.Popout.Animation.NONE,
      align: 'top',
      children: e => (0, r.jsx)(_.zx, {
        ...e,
        className: a()(S.button, S.left),
        'aria-label': g.Z.Messages.USER_PROFILE_SEND_REACTION,
        children: (0, r.jsx)(o.ReactionIcon, {
          size: 'xs',
          className: S.icon
        })
      })
    })
  }),
  (0, r.jsx)(o.TooltipContainer, {
    text: g.Z.Messages.USER_PROFILE_REPLY,
    shouldShow: I,
    delay: L,
    'aria-label': !1,
    children: (0, r.jsx)(_.zx, {
      onClick: () => null == v ? void 0 : v(i, E),
      className: a()(S.button, S.right),
      'aria-label': g.Z.Messages.USER_PROFILE_REPLY,
      children: (0, r.jsx)(o.ArrowAngleLeftUpIcon, {
        size: 'xs',
        className: S.icon
      })
    })
  })
]
  });
}