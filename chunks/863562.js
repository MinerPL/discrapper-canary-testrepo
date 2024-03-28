"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("481060"),
  o = s("700582"),
  d = s("330726"),
  u = s("465670"),
  c = s("185403"),
  E = s("268350"),
  _ = s("419922"),
  I = s("689938"),
  T = s("157725");
t.default = e => {
  let {
    className: t,
    isDisabled: n,
    sticker: S,
    canManageSticker: f
  } = e, [m, N] = l.useState(!1), [g, h] = (0, d.default)(null, 4e3), C = () => {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("49237"), s.e("99387"), s.e("93626")]).then(s.bind(s, "136735"));
      return t => (0, a.jsx)(e, {
        sticker: S,
        guildId: S.guild_id,
        ...t
      })
    })
  }, R = async () => {
    h(null), N(!0);
    try {
      await (0, E.deleteGuildSticker)(S)
    } catch (e) {
      h(e.body.message), N(!1)
    }
  };
  return (0, a.jsx)(r.Tooltip, {
    color: r.Tooltip.Colors.RED,
    forceOpen: null != g,
    text: g,
    children: () => (0, a.jsxs)("div", {
      className: i()(T.wrapper, t, {
        [T.wrapperDisabled]: n
      }),
      children: [(0, a.jsxs)("div", {
        className: i()(T.content, {
          [T.contentRemoving]: m
        }),
        children: [(0, a.jsx)(_.default, {
          className: T.sticker,
          size: 72,
          sticker: S
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(r.Text, {
            color: "header-primary",
            variant: "text-xs/semibold",
            className: T.stickerName,
            children: S.name
          }), null != S.user && (0, a.jsxs)("div", {
            className: T.user,
            children: [(0, a.jsx)(o.default, {
              className: T.userAvatar,
              size: r.AvatarSizes.SIZE_16,
              user: S.user
            }), (0, a.jsx)(r.Text, {
              color: "header-secondary",
              variant: "text-xs/normal",
              children: S.user.username
            })]
          })]
        }), f ? (0, a.jsxs)("div", {
          className: T.actions,
          children: [(0, a.jsx)(r.Clickable, {
            className: i()(T.action, T.__invalid_actionEdit),
            onClick: C,
            "aria-label": I.default.Messages.EDIT,
            children: (0, a.jsx)(c.default, {
              className: T.icon
            })
          }), (0, a.jsx)(r.Clickable, {
            className: i()(T.action, T.actionRemove),
            onClick: R,
            "aria-label": I.default.Messages.REMOVE,
            children: (0, a.jsx)(u.default, {
              className: T.icon
            })
          })]
        }) : null]
      }), m && (0, a.jsx)(r.Spinner, {
        className: T.spinner
      })]
    })
  })
}