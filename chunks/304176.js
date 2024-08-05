var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(481060),
  o = n(367907),
  l = n(829883),
  u = n(623624),
  c = n(973542),
  d = n(703656),
  _ = n(592125),
  E = n(430824),
  f = n(944486),
  h = n(514342),
  p = n(709586),
  m = n(176278),
  I = n(626135),
  T = n(524444),
  g = n(981631),
  S = n(176505),
  A = n(689938),
  N = n(718178);
t.Z = e => {
  let {
roleIcon: t,
guild: n
  } = e, {
name: v
  } = t;
  i.useEffect(() => {
I.default.track(g.rMx.OPEN_POPOUT, {
  type: 'Role Icon Popout',
  guild_id: n.id,
  ...(0, o.v_)(_.Z.getChannel(f.Z.getChannelId(n.id)))
});
  }, []);
  let O = (0, a.e7)([E.Z], () => null != t.roleId ? E.Z.getRole(n.id, t.roleId) : void 0),
R = (0, c.Z)(O),
C = R ? A.Z.Messages.ROLE_ICON_POPOUT_DESCRIPTION_ROLE_SUBSCRIPTIONS.format({
  name: v
}) : A.Z.Messages.ROLE_ICON_POPOUT_DESCRIPTION.format({
  name: v
}),
y = {
  ...t,
  src: null == t.src ? t.src : (0, l.o)(t.src, 40),
  size: 40
},
D = R ? () => {
  (0, d.uL)(g.Z5c.CHANNEL(n.id, S.oC.ROLE_SUBSCRIPTIONS));
} : () => {
  (0, u.f)({
    guildId: n.id,
    location: {
      section: g.jXE.ROLE_ICON_POPOUT
    }
  });
};
  return (0, r.jsx)(s.Dialog, {
children: (0, r.jsx)(T.W_, {
  children: (0, r.jsxs)('div', {
    className: N.popoutContainer,
    children: [
      (0, r.jsxs)('div', {
        className: N.mainContent,
        children: [
          (0, r.jsx)('div', {
            className: N.roleIconContainer,
            children: (0, r.jsx)(m.Z, {
              ...y,
              enableTooltip: !1,
              className: N.__invalid_roleIcon,
              enableHeight: !1
            })
          }),
          (0, r.jsxs)('div', {
            className: N.truncatingText,
            children: [
              (0, r.jsx)(s.Heading, {
                variant: 'heading-md/semibold',
                className: N.roleName,
                children: (0, r.jsx)(h.Z, {
                  children: v
                })
              }),
              (0, r.jsx)(s.Text, {
                variant: 'text-sm/normal',
                children: C
              })
            ]
          })
        ]
      }),
      (0, r.jsxs)(s.Button, {
        size: s.Button.Sizes.SMALL,
        color: s.Button.Colors.PRIMARY,
        className: N.ctaButton,
        innerClassName: N.ctaButtonContent,
        fullWidth: !0,
        onClick: D,
        autoFocus: !0,
        children: [
          (0, r.jsx)(p.Z, {
            width: 14,
            height: 14,
            className: N.boosterBadge
          }),
          A.Z.Messages.ROLE_ICON_POPOUT_CTA
        ]
      })
    ]
  })
})
  });
};