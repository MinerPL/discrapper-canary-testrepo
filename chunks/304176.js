"use strict";
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(367907),
  l = n(829883),
  u = n(623624),
  _ = n(973542),
  d = n(703656),
  c = n(592125),
  E = n(430824),
  I = n(944486),
  T = n(514342),
  h = n(709586),
  S = n(176278),
  f = n(626135),
  N = n(524444),
  A = n(981631),
  m = n(176505),
  O = n(689938),
  R = n(846745);
t.Z = e => {
  let {
    roleIcon: t,
    guild: n
  } = e, {
    name: C
  } = t;
  r.useEffect(() => {
    f.default.track(A.rMx.OPEN_POPOUT, {
      type: "Role Icon Popout",
      guild_id: n.id,
      ...(0, a.v_)(c.Z.getChannel(I.Z.getChannelId(n.id)))
    })
  }, []);
  let p = (0, s.e7)([E.Z], () => null != t.roleId ? E.Z.getRole(n.id, t.roleId) : void 0),
    g = (0, _.Z)(p),
    L = g ? O.Z.Messages.ROLE_ICON_POPOUT_DESCRIPTION_ROLE_SUBSCRIPTIONS.format({
      name: C
    }) : O.Z.Messages.ROLE_ICON_POPOUT_DESCRIPTION.format({
      name: C
    }),
    v = {
      ...t,
      src: null == t.src ? t.src : (0, l.o)(t.src, 40),
      size: 40
    },
    D = g ? () => {
      (0, d.uL)(A.Z5c.CHANNEL(n.id, m.oC.ROLE_SUBSCRIPTIONS))
    } : () => {
      (0, u.f)({
        guildId: n.id,
        location: {
          section: A.jXE.ROLE_ICON_POPOUT
        }
      })
    };
  return (0, i.jsx)(o.Dialog, {
    children: (0, i.jsx)(N.W_, {
      children: (0, i.jsxs)("div", {
        className: R.popoutContainer,
        children: [(0, i.jsxs)("div", {
          className: R.mainContent,
          children: [(0, i.jsx)("div", {
            className: R.roleIconContainer,
            children: (0, i.jsx)(S.Z, {
              ...v,
              enableTooltip: !1,
              className: R.__invalid_roleIcon,
              enableHeight: !1
            })
          }), (0, i.jsxs)("div", {
            className: R.truncatingText,
            children: [(0, i.jsx)(o.Heading, {
              variant: "heading-md/semibold",
              className: R.roleName,
              children: (0, i.jsx)(T.Z, {
                children: C
              })
            }), (0, i.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: L
            })]
          })]
        }), (0, i.jsxs)(o.Button, {
          size: o.Button.Sizes.SMALL,
          color: o.Button.Colors.PRIMARY,
          className: R.ctaButton,
          innerClassName: R.ctaButtonContent,
          fullWidth: !0,
          onClick: D,
          autoFocus: !0,
          children: [(0, i.jsx)(h.Z, {
            width: 14,
            height: 14,
            className: R.boosterBadge
          }), O.Z.Messages.ROLE_ICON_POPOUT_CTA]
        })]
      })
    })
  })
}