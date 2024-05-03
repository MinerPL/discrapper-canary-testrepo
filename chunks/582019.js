"use strict";
n.r(t), n.d(t, {
  BlockedUser: function() {
    return p
  },
  BlockedUsersNotice: function() {
    return g
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("692547"),
  r = n("481060"),
  i = n("239091"),
  d = n("83097"),
  o = n("357727"),
  c = n("154921"),
  u = n("421600"),
  h = n("51144"),
  f = n("88751"),
  _ = n("930180"),
  E = n("689938"),
  T = n("218381");
let g = e => {
    let {
      channelId: t
    } = e, n = (0, _.useStageBlockedUsersCount)(t);
    return 0 === n ? null : (0, s.jsxs)("div", {
      className: T.blockedNotice,
      children: [(0, s.jsx)(d.default, {
        className: T.__invalid_blockedIcon,
        color: l.default.unsafe_rawColors.RED_400.css
      }), (0, s.jsx)(r.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: E.default.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
          number: n
        })
      }), (0, s.jsx)(r.Clickable, {
        className: T.blockedButton,
        onClick: e => {
          (0, i.openContextMenu)(e, e => (0, s.jsx)(S, {
            ...e,
            channelId: t
          }), {
            position: "left",
            align: "bottom"
          })
        },
        children: E.default.Messages.VIEW_ALL
      })]
    })
  },
  p = e => {
    let {
      user: t,
      showStatus: n,
      speaker: l,
      channelId: i
    } = e, d = (0, a.useStateFromStores)([f.default], () => f.default.isModerator(t.id, i)), _ = null;
    return n && (_ = l ? E.default.Messages.STAGE_SPEAKER : d ? E.default.Messages.STAGE_MODERATOR_TOOLTIP : E.default.Messages.STAGE_AUDIENCE), (0, s.jsxs)("div", {
      className: T.user,
      children: [(0, s.jsx)(u.default, {
        src: t.getAvatarURL(null, 32),
        size: r.AvatarSizes.SIZE_32,
        muted: !1,
        deafen: !1,
        speaking: !1,
        ringing: !1,
        renderIcon: l ? () => (0, s.jsx)(o.default, {
          className: T.icon
        }) : null
      }, t.id), (0, s.jsxs)("div", {
        className: T.userInfo,
        children: [(0, s.jsxs)("div", {
          className: T.username,
          children: [(0, s.jsx)(c.default, {
            size: n ? c.default.Sizes.SIZE_16 : c.default.Sizes.SIZE_14,
            children: h.default.getName(t)
          }), (0, s.jsx)(c.default, {
            size: n ? c.default.Sizes.SIZE_16 : c.default.Sizes.SIZE_14,
            color: c.default.Colors.HEADER_SECONDARY,
            children: "#".concat(t.discriminator)
          })]
        }), (0, s.jsxs)("div", {
          className: T.username,
          children: [(0, s.jsx)(r.Text, {
            variant: "text-xs/normal",
            color: "text-danger",
            children: E.default.Messages.BLOCKED
          }), (0, s.jsxs)(r.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: [" ", "| ", _]
          })]
        })]
      })]
    })
  },
  S = e => {
    let {
      channelId: t
    } = e, n = (0, _.useStageBlockedUsers)(t);
    return (0, s.jsx)(r.Scroller, {
      className: T.container,
      children: n.map(e => {
        let {
          user: n
        } = e;
        return (0, s.jsx)(p, {
          user: n,
          channelId: t
        }, n.id)
      })
    })
  }