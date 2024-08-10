n.d(t, {
  Z: function() {
return v;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(442837),
  o = n(481060),
  l = n(607070),
  u = n(951394),
  c = n(907040),
  d = n(314897),
  _ = n(699516),
  E = n(823379),
  f = n(51144),
  h = n(785717),
  p = n(505737),
  m = n(448520),
  I = n(485216),
  T = n(228168),
  g = n(185923),
  S = n(689938),
  A = n(328849);
let N = e => {
  let {
emoji: t,
username: n,
sourceType: r,
sourceDetails: i
  } = e, a = ':'.concat(t.name, ':');
  switch (r) {
case T.N9.ACTIVITY:
  let s = S.Z.Messages.USER_PROFILE_REACTED_TO_ACTIVITY.format({
    username: n
  });
  return '> -# *'.concat(s, '*\n').concat(a);
case T.N9.AVATAR:
  let o = S.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({
    username: n
  });
  return '> -# *'.concat(o, '*\n').concat(a);
case T.N9.STATUS:
  let l = S.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({
    username: n
  });
  return null != i ? '> -# *'.concat(l, '*').concat('\n > '.concat(i), '\n').concat(a) : '> -# *'.concat(l, '*\n').concat(a);
default:
  (0, E.vE)(r);
  }
};

function v(e) {
  let {
user: t,
channel: n,
sourceType: i,
sourceDetails: E,
isVisible: v,
isExpandable: O,
onReply: R
  } = e, {
trackUserProfileAction: C
  } = (0, h.KZ)(), {
sendReact: y,
pressReact: D,
pressReply: L
  } = (0, m.D)(i), b = (0, s.e7)([d.default], () => d.default.getId() === t.id), M = (0, p.Z)(t.id), [P, U] = (0, s.Wu)([l.Z], () => [
l.Z.useReducedMotion,
l.Z.keyboardModeEnabled
  ]);
  if (t.bot || b || !M)
return null;
  let w = !O || P || U ? 0 : 300,
x = async e => {
  var n;
  if (null == e)
    return;
  C({
    action: y
  });
  let r = N({
    emoji: e,
    username: null !== (n = _.Z.getNickname(t.id)) && void 0 !== n ? n : f.ZP.getName(t),
    sourceType: i,
    sourceDetails: E
  });
  await (0, I.Z)({
    userId: t.id,
    content: r,
    location: 'UserProfileReactReplyBar',
    openChannel: !1,
    whenReady: !1
  });
};
  return (0, r.jsxs)(u.ZP, {
className: a()(A.popover, {
  [A.visible]: v,
  [A.expandable]: O,
  [A.statusPopover]: i === T.N9.STATUS,
  [A.avatarPopover]: i === T.N9.AVATAR
}),
children: [
  (0, r.jsx)(o.TooltipContainer, {
    text: S.Z.Messages.USER_PROFILE_SEND_REACTION,
    shouldShow: v,
    delay: w,
    'aria-label': !1,
    children: (0, r.jsx)(o.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(c.Z, {
          guildId: null == n ? void 0 : n.guild_id,
          closePopout: t,
          onSelectEmoji: (e, n) => {
            x(e), n && t();
          },
          pickerIntention: g.Hz.PROFILE,
          channel: n
        });
      },
      position: 'left',
      animation: o.Popout.Animation.NONE,
      align: 'top',
      children: e => (0, r.jsx)(u.zx, {
        ...e,
        onClick: t => {
          C({
            action: D
          }), e.onClick(t);
        },
        className: a()(A.button, A.left),
        'aria-label': S.Z.Messages.USER_PROFILE_SEND_REACTION,
        children: (0, r.jsx)(o.ReactionIcon, {
          size: 'xs',
          className: A.icon
        })
      })
    })
  }),
  (0, r.jsx)(o.TooltipContainer, {
    text: S.Z.Messages.USER_PROFILE_REPLY,
    shouldShow: v,
    delay: w,
    'aria-label': !1,
    children: (0, r.jsx)(u.zx, {
      onClick: () => {
        C({
          action: L
        }), null == R || R(i, E);
      },
      className: a()(A.button, A.right),
      'aria-label': S.Z.Messages.USER_PROFILE_REPLY,
      children: (0, r.jsx)(o.ArrowAngleLeftUpIcon, {
        size: 'xs',
        className: A.icon
      })
    })
  })
]
  });
}