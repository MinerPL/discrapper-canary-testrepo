n.d(t, {
  Z: function() {
return h;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(442837),
  s = n(481060),
  l = n(607070),
  u = n(907040),
  c = n(404975),
  d = n(785717),
  _ = n(185923),
  E = n(689938),
  f = n(328849);

function h(e) {
  let {
channel: t,
isVisible: n,
isExpandable: i
  } = e, {
trackUserProfileAction: h
  } = (0, d.KZ)(), [p, m] = (0, o.Wu)([l.Z], () => [
l.Z.useReducedMotion,
l.Z.keyboardModeEnabled
  ]), I = !i || p || m ? 0 : 300, T = () => {
h({
  action: 'PRESS_REACT'
});
  };
  return (0, r.jsxs)(c.ZP, {
className: a()(f.popover, {
  [f.visible]: n,
  [f.expandable]: i
}),
children: [
  (0, r.jsx)(s.TooltipContainer, {
    text: E.Z.Messages.USER_PROFILE_SEND_REACTION,
    shouldShow: n,
    delay: I,
    'aria-label': !1,
    children: (0, r.jsx)(s.Popout, {
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, r.jsx)(u.Z, {
          guildId: null == t ? void 0 : t.guild_id,
          closePopout: n,
          onSelectEmoji: (e, t) => {
            T(), t && n();
          },
          pickerIntention: _.Hz.PROFILE,
          channel: t
        });
      },
      position: 'left',
      animation: s.Popout.Animation.NONE,
      align: 'top',
      children: e => (0, r.jsx)(c.zx, {
        ...e,
        className: a()(f.button, f.left),
        'aria-label': E.Z.Messages.USER_PROFILE_SEND_REACTION,
        children: (0, r.jsx)(s.ReactionIcon, {
          size: 'xs',
          className: f.icon
        })
      })
    })
  }),
  (0, r.jsx)(s.TooltipContainer, {
    text: E.Z.Messages.USER_PROFILE_REPLY,
    shouldShow: n,
    delay: I,
    'aria-label': !1,
    children: (0, r.jsx)(c.zx, {
      className: a()(f.button, f.right),
      'aria-label': E.Z.Messages.USER_PROFILE_REPLY,
      onClick: () => {
        h({
          action: 'PRESS_REPLY'
        });
      },
      children: (0, r.jsx)(s.ArrowAngleLeftUpIcon, {
        size: 'xs',
        className: f.icon
      })
    })
  })
]
  });
}