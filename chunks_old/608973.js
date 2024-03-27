"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("65597"),
  i = n("77078"),
  r = n("509"),
  u = n("64905"),
  o = n("178406"),
  d = n("91551"),
  c = n("4845"),
  f = n("491401"),
  h = n("136281"),
  m = n("782340"),
  p = n("865331");

function E(e) {
  let {
    member: t
  } = e, n = t.userId, E = t.guildId, g = (0, s.useStateFromStores)([o.default], () => o.default.getEnhancedMember(E, n), [n, E]), S = null != g ? g : t, C = S.unusualDMActivityUntil, _ = l.useCallback(e => {
    if (null == e) return null;
    let t = new Date(e).getTime();
    return (0, u.formatDateRelativeTime)(t, u.MembersTableDateFormats.JOINED_AT)
  }, []), I = l.useMemo(() => null == t ? null : _(C), [t, _, C]), T = l.useMemo(() => (0, r.isCommunicationDisabled)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), v = l.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]), x = null == C && !T;
  return x ? null : (0, a.jsx)(i.FormItem, {
    title: m.default.Messages.MEMBER_SAFETY_TABLE_HEADER_FLAGS,
    titleClassName: p.infoTitle,
    children: (0, a.jsxs)(h.UserModInfoItemContainer, {
      children: [null != C && (0, a.jsx)(h.UserModInfoItem, {
        icon: (0, a.jsx)(c.default, {
          width: h.USER_MOD_ICON_SIZE_PX,
          height: h.USER_MOD_ICON_SIZE_PX,
          className: p.unusualDMLabelIcon
        }),
        name: (0, a.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: m.default.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY
        }),
        description: (0, a.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: I
        })
      }), T && null != v && (0, a.jsx)(h.UserModInfoItem, {
        icon: (0, a.jsx)(f.default, {
          width: h.USER_MOD_ICON_SIZE_PX,
          height: h.USER_MOD_ICON_SIZE_PX,
          className: p.unusualDMLabelIcon
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
            deadline: v,
            showUnits: !0,
            stopAtOneSec: !0
          })
        })
      })]
    })
  })
}