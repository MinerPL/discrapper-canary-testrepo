"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("77078"),
  o = s("87657"),
  d = s("612039"),
  u = s("945330"),
  c = s("987772"),
  E = s("467094"),
  _ = s("41170"),
  I = s("782340"),
  T = s("369185"),
  S = e => {
    let {
      className: t,
      isDisabled: n,
      sticker: S,
      canManageSticker: f
    } = e, [m, N] = l.useState(!1), [g, h] = (0, d.default)(null, 4e3), C = () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("54666").then(s.bind(s, "54666"));
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
        className: i(T.wrapper, t, {
          [T.wrapperDisabled]: n
        }),
        children: [(0, a.jsxs)("div", {
          className: i(T.content, {
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
              className: i(T.action, T.actionEdit),
              onClick: C,
              "aria-label": I.default.Messages.EDIT,
              children: (0, a.jsx)(c.default, {
                className: T.icon
              })
            }), (0, a.jsx)(r.Clickable, {
              className: i(T.action, T.actionRemove),
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