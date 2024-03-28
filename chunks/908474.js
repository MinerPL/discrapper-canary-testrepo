"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("399606"),
  i = n("481060"),
  r = n("69882"),
  o = n("815790"),
  u = n("893966"),
  d = n("373791"),
  c = n("725522"),
  f = n("789695"),
  h = n("776767"),
  m = n("689938"),
  p = n("196958");

function E(e) {
  let {
    member: t
  } = e, n = t.userId, E = t.guildId, C = (0, s.useStateFromStores)([u.default], () => u.default.getEnhancedMember(E, n), [n, E]), g = (null != C ? C : t).unusualDMActivityUntil, S = l.useCallback(e => {
    if (null == e) return null;
    let t = new Date(e).getTime();
    return (0, o.formatDateRelativeTime)(t, o.MembersTableDateFormats.JOINED_AT)
  }, []), _ = l.useMemo(() => null == t ? null : S(g), [t, S, g]), T = l.useMemo(() => (0, r.isCommunicationDisabled)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), I = l.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
  return null != g || T ? (0, a.jsx)(i.FormItem, {
    title: m.default.Messages.MEMBER_SAFETY_TABLE_HEADER_FLAGS,
    titleClassName: p.infoTitle,
    children: (0, a.jsxs)(h.UserModInfoItemContainer, {
      children: [null != g && (0, a.jsx)(h.UserModInfoItem, {
        icon: (0, a.jsx)(c.default, {
          width: h.USER_MOD_ICON_SIZE_PX,
          height: h.USER_MOD_ICON_SIZE_PX,
          className: p.__invalid_unusualDMLabelIcon
        }),
        name: (0, a.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: m.default.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY
        }),
        description: (0, a.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: _
        })
      }), T && null != I && (0, a.jsx)(h.UserModInfoItem, {
        icon: (0, a.jsx)(f.default, {
          width: h.USER_MOD_ICON_SIZE_PX,
          height: h.USER_MOD_ICON_SIZE_PX,
          className: p.__invalid_unusualDMLabelIcon
        }),
        name: (0, a.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: m.default.Messages.GUILD_COMMUNICATION_DISABLED_ON_MEMBER
        }),
        description: (0, a.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: (0, a.jsx)(d.default, {
            deadline: I,
            showUnits: !0,
            stopAtOneSec: !0
          })
        })
      })]
    })
  }) : null
}