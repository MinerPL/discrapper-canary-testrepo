"use strict";
n.r(t), n.d(t, {
  BlockedUser: function() {
    return N
  },
  BlockedUsersNotice: function() {
    return T
  }
});
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("692547"),
  i = n("481060"),
  r = n("239091"),
  d = n("83097"),
  u = n("357727"),
  o = n("154921"),
  c = n("421600"),
  E = n("51144"),
  f = n("88751"),
  h = n("930180"),
  _ = n("689938"),
  S = n("264587");
let T = e => {
    let {
      channelId: t
    } = e, n = (0, h.useStageBlockedUsersCount)(t);
    return 0 === n ? null : (0, a.jsxs)("div", {
      className: S.blockedNotice,
      children: [(0, a.jsx)(d.default, {
        className: S.__invalid_blockedIcon,
        color: l.default.unsafe_rawColors.RED_400.css
      }), (0, a.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: _.default.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
          number: n
        })
      }), (0, a.jsx)(i.Clickable, {
        className: S.blockedButton,
        onClick: e => {
          (0, r.openContextMenu)(e, e => (0, a.jsx)(g, {
            ...e,
            channelId: t
          }), {
            position: "left",
            align: "bottom"
          })
        },
        children: _.default.Messages.VIEW_ALL
      })]
    })
  },
  N = e => {
    let {
      user: t,
      showStatus: n,
      speaker: l,
      channelId: r
    } = e, d = (0, s.useStateFromStores)([f.default], () => f.default.isModerator(t.id, r)), h = null;
    return n && (h = l ? _.default.Messages.STAGE_SPEAKER : d ? _.default.Messages.STAGE_MODERATOR_TOOLTIP : _.default.Messages.STAGE_AUDIENCE), (0, a.jsxs)("div", {
      className: S.user,
      children: [(0, a.jsx)(c.default, {
        src: t.getAvatarURL(null, 32),
        size: i.AvatarSizes.SIZE_32,
        muted: !1,
        deafen: !1,
        speaking: !1,
        ringing: !1,
        renderIcon: l ? () => (0, a.jsx)(u.default, {
          className: S.icon
        }) : null
      }, t.id), (0, a.jsxs)("div", {
        className: S.userInfo,
        children: [(0, a.jsxs)("div", {
          className: S.username,
          children: [(0, a.jsx)(o.default, {
            size: n ? o.default.Sizes.SIZE_16 : o.default.Sizes.SIZE_14,
            children: E.default.getName(t)
          }), (0, a.jsx)(o.default, {
            size: n ? o.default.Sizes.SIZE_16 : o.default.Sizes.SIZE_14,
            color: o.default.Colors.HEADER_SECONDARY,
            children: "#".concat(t.discriminator)
          })]
        }), (0, a.jsxs)("div", {
          className: S.username,
          children: [(0, a.jsx)(i.Text, {
            variant: "text-xs/normal",
            color: "text-danger",
            children: _.default.Messages.BLOCKED
          }), (0, a.jsxs)(i.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: [" ", "| ", h]
          })]
        })]
      })]
    })
  },
  g = e => {
    let {
      channelId: t
    } = e, n = (0, h.useStageBlockedUsers)(t);
    return (0, a.jsx)(i.Scroller, {
      className: S.container,
      children: n.map(e => {
        let {
          user: n
        } = e;
        return (0, a.jsx)(N, {
          user: n,
          channelId: t
        }, n.id)
      })
    })
  }