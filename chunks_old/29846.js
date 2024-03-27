"use strict";
s.r(t), s.d(t, {
  BlockedUsersNotice: function() {
    return g
  },
  BlockedUser: function() {
    return p
  }
});
var r = s("37983");
s("884691");
var a = s("446674"),
  n = s("669491"),
  l = s("77078"),
  i = s("272030"),
  c = s("328275"),
  d = s("849467"),
  o = s("258078"),
  u = s("823050"),
  h = s("158998"),
  f = s("325861"),
  v = s("151642"),
  C = s("782340"),
  x = s("35121");
let g = e => {
    let {
      channelId: t
    } = e, s = (0, v.useStageBlockedUsersCount)(t);
    return 0 === s ? null : (0, r.jsxs)("div", {
      className: x.blockedNotice,
      children: [(0, r.jsx)(c.default, {
        className: x.blockedIcon,
        color: n.default.unsafe_rawColors.RED_400.css
      }), (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: C.default.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
          number: s
        })
      }), (0, r.jsx)(l.Clickable, {
        className: x.blockedButton,
        onClick: e => {
          (0, i.openContextMenu)(e, e => (0, r.jsx)(m, {
            ...e,
            channelId: t
          }), {
            position: "left",
            align: "bottom"
          })
        },
        children: C.default.Messages.VIEW_ALL
      })]
    })
  },
  p = e => {
    let {
      user: t,
      showStatus: s,
      speaker: n,
      channelId: i
    } = e, c = (0, a.useStateFromStores)([f.default], () => f.default.isModerator(t.id, i)), v = null;
    return s && (v = n ? C.default.Messages.STAGE_SPEAKER : c ? C.default.Messages.STAGE_MODERATOR_TOOLTIP : C.default.Messages.STAGE_AUDIENCE), (0, r.jsxs)("div", {
      className: x.user,
      children: [(0, r.jsx)(u.default, {
        src: t.getAvatarURL(null, 32),
        size: l.AvatarSizes.SIZE_32,
        muted: !1,
        deafen: !1,
        speaking: !1,
        ringing: !1,
        renderIcon: n ? () => (0, r.jsx)(d.default, {
          className: x.icon
        }) : null
      }, t.id), (0, r.jsxs)("div", {
        className: x.userInfo,
        children: [(0, r.jsxs)("div", {
          className: x.username,
          children: [(0, r.jsx)(o.default, {
            size: s ? o.default.Sizes.SIZE_16 : o.default.Sizes.SIZE_14,
            children: h.default.getName(t)
          }), (0, r.jsx)(o.default, {
            size: s ? o.default.Sizes.SIZE_16 : o.default.Sizes.SIZE_14,
            color: o.default.Colors.HEADER_SECONDARY,
            children: "#".concat(t.discriminator)
          })]
        }), (0, r.jsxs)("div", {
          className: x.username,
          children: [(0, r.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "text-danger",
            children: C.default.Messages.BLOCKED
          }), (0, r.jsxs)(l.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: [" ", "| ", v]
          })]
        })]
      })]
    })
  },
  m = e => {
    let {
      channelId: t
    } = e, s = (0, v.useStageBlockedUsers)(t);
    return (0, r.jsx)(l.Scroller, {
      className: x.container,
      children: s.map(e => {
        let {
          user: s
        } = e;
        return (0, r.jsx)(p, {
          user: s,
          channelId: t
        }, s.id)
      })
    })
  }