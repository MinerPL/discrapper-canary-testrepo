"use strict";
t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(481060),
  o = t(700582),
  c = t(330726),
  d = t(465670),
  u = t(185403),
  E = t(268350),
  _ = t(419922),
  I = t(689938),
  T = t(886659);
s.Z = e => {
  let {
    className: s,
    isDisabled: l,
    sticker: N,
    canManageSticker: m
  } = e, [S, h] = i.useState(!1), [g, x] = (0, c.Z)(null, 4e3), C = () => {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("49237"), t.e("99387"), t.e("93626")]).then(t.bind(t, 136735));
      return s => (0, n.jsx)(e, {
        sticker: N,
        guildId: N.guild_id,
        ...s
      })
    })
  }, R = async () => {
    x(null), h(!0);
    try {
      await (0, E.Um)(N)
    } catch (e) {
      x(e.body.message), h(!1)
    }
  };
  return (0, n.jsx)(r.Tooltip, {
    color: r.Tooltip.Colors.RED,
    forceOpen: null != g,
    text: g,
    children: () => (0, n.jsxs)("div", {
      className: a()(T.wrapper, s, {
        [T.wrapperDisabled]: l
      }),
      children: [(0, n.jsxs)("div", {
        className: a()(T.content, {
          [T.contentRemoving]: S
        }),
        children: [(0, n.jsx)(_.ZP, {
          className: T.sticker,
          size: 72,
          sticker: N
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsx)(r.Text, {
            color: "header-primary",
            variant: "text-xs/semibold",
            className: T.stickerName,
            children: N.name
          }), null != N.user && (0, n.jsxs)("div", {
            className: T.user,
            children: [(0, n.jsx)(o.Z, {
              className: T.userAvatar,
              size: r.AvatarSizes.SIZE_16,
              user: N.user
            }), (0, n.jsx)(r.Text, {
              color: "header-secondary",
              variant: "text-xs/normal",
              children: N.user.username
            })]
          })]
        }), m ? (0, n.jsxs)("div", {
          className: T.actions,
          children: [(0, n.jsx)(r.Clickable, {
            className: a()(T.action, T.__invalid_actionEdit),
            onClick: C,
            "aria-label": I.Z.Messages.EDIT,
            children: (0, n.jsx)(u.Z, {
              className: T.icon
            })
          }), (0, n.jsx)(r.Clickable, {
            className: a()(T.action, T.actionRemove),
            onClick: R,
            "aria-label": I.Z.Messages.REMOVE,
            children: (0, n.jsx)(d.Z, {
              className: T.icon
            })
          })]
        }) : null]
      }), S && (0, n.jsx)(r.Spinner, {
        className: T.spinner
      })]
    })
  })
}