n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  l = n(481060),
  s = n(40851),
  r = n(889161),
  o = n(390322),
  c = n(871499),
  d = n(592125),
  u = n(15274),
  h = n(482241),
  p = n(389303),
  m = n(554747),
  _ = n(689938),
  f = n(602363);

function E(e) {
  let {
channelId: t,
onClick: n
  } = e, E = (0, s.bp)(), C = (0, m.qY)(t), g = (0, a.e7)([d.Z], () => d.Z.getChannel(t), [t]), {
canManageGuildEvent: I
  } = (0, r.XJ)(g), x = I(C);
  if (null == C)
return null;
  let T = () => {
  if (null != g && (0, p.Z)(g)) {
    (0, u.lC)(g, E);
    return;
  }
  n();
},
v = () => {
  h.Z.endEvent(C.id, C.guild_id);
};
  return x ? (0, i.jsx)(l.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)(o.Z, {
    children: (0, i.jsx)(l.Menu, {
      navId: 'exit-options',
      onSelect: () => {},
      'aria-label': _.Z.Messages.DISCONNECT_MENU,
      onClose: t,
      children: (0, i.jsx)(l.MenuItem, {
        id: 'end-voice-event',
        color: 'danger',
        action: v,
        label: _.Z.Messages.END_EVENT,
        icon: l.CircleXIcon
      })
    })
  });
},
align: 'center',
position: 'top',
animation: l.Popout.Animation.FADE,
children: e => {
  let {
    onClick: t
  } = e;
  return (0, i.jsx)(c.d, {
    label: _.Z.Messages.DISCONNECT_SELF,
    color: 'red',
    iconComponent: l.PhoneHangUpIcon,
    onClick: T,
    onPopoutClick: t,
    className: f.buttonSpacing
  });
}
  }) : (0, i.jsx)(c.d, {
className: f.buttonSpacing,
label: _.Z.Messages.DISCONNECT_SELF,
color: 'red',
iconComponent: l.PhoneHangUpIcon,
onClick: n
  });
}