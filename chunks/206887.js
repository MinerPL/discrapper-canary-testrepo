n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(481060),
  o = n(404975),
  c = n(455839),
  d = n(689938),
  u = n(521759);
t.Z = function(e) {
  let {
guild: t
  } = e, [n, a] = s.useState(!1), _ = s.useCallback(() => a(!0), [a]), h = s.useCallback(() => a(!0), [a]);
  return (0, i.jsx)('div', {
className: r()(u.actionButtonsContainer, {
  [u.forceButtonsShow]: n
}),
children: (0, i.jsx)(o.ZP, {
  children: (0, i.jsx)(c.GuildDiscoveryMenuPopout, {
    onRequestOpen: _,
    onRequestClose: h,
    guild: t,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, i.jsx)(l.Tooltip, {
        text: d.Z.Messages.MORE,
        hideOnClick: !0,
        children: e => {
          let {
            onClick: s,
            ...a
          } = e;
          return (0, i.jsx)(o.zx, {
            ...n,
            ...a,
            onClick: e => {
              e.stopPropagation(), null == s || s(), t(e);
            },
            'aria-label': d.Z.Messages.MORE,
            children: (0, i.jsx)(l.MoreHorizontalIcon, {
              size: 'md',
              color: 'currentColor',
              className: u.overflowIcon
            })
          });
        }
      });
    }
  })
})
  });
};