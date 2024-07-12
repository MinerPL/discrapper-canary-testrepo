n.d(t, {
  Z: function() {
return u;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(946273),
  o = n(441110),
  s = n(689938),
  l = n(735282);

function u(e) {
  let {
guild: t,
message: n
  } = e;
  return (0, a.vV)(t.id, n.author.id) ? (0, r.jsx)(i.Popout, {
animation: i.Popout.Animation.TRANSLATE,
align: 'center',
autoInvert: !0,
nudgeAlignIntoViewport: !0,
position: 'right',
renderPopout: e => {
  let {
    closePopout: i
  } = e;
  return (0, r.jsx)(o.Z, {
    guild: t,
    message: n,
    onClose: i
  });
},
children: e => {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(i.Clickable, {
    onClick: t,
    tag: 'span',
    children: (0, r.jsx)(i.Tooltip, {
      text: s.Z.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT,
      children: e => (0, r.jsx)('div', {
        className: l.newMemberBadge,
        ...e,
        children: (0, r.jsx)(i.NewUserLargeIcon, {
          size: 'custom',
          color: 'currentColor',
          width: 20,
          height: 20
        })
      })
    })
  });
}
  }) : null;
}