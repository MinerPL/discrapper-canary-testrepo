"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("65597"),
  r = n("797350"),
  u = n("237020"),
  o = n("352567"),
  d = n("305861"),
  c = n("715072"),
  f = n("77078"),
  h = n("917397"),
  m = n("290491"),
  p = n("305961"),
  E = n("18494"),
  g = n("124969"),
  S = n("153769"),
  C = n("994906"),
  _ = n("136281"),
  I = n("49111"),
  T = n("782340"),
  v = n("865331");

function x(e) {
  let {
    member: t
  } = e, n = (0, i.useStateFromStores)([p.default], () => p.default.getGuild(t.guildId), [t.guildId]), l = (0, h.useUserAccountVerified)(t.userId, t.guildId), x = (0, h.useUserRulesAgreementLevel)(t.userId, t.guildId), N = (0, h.useUserAccountAgeDate)(t.userId), A = (0, h.useGuildMemberJoinedAtDate)(t.userId, t.guildId);
  return null == n ? null : (0, a.jsx)("div", {
    className: s(v.safetySignalsMainContainer),
    children: (0, a.jsx)(f.FormItem, {
      title: T.default.Messages.ACCOUNT,
      titleClassName: v.infoTitle,
      children: (0, a.jsxs)(_.UserModInfoItemContainer, {
        children: [(0, a.jsx)(_.UserModInfoItem, {
          icon: (0, a.jsx)(d.ShieldUserIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            className: v.unusualDMLabelIcon
          }),
          name: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: T.default.Messages.MEMBER_VERIFICATION_ACCOUNT_VERIFIED
          }),
          description: l ? (0, a.jsx)(u.CheckmarkBoldIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            color: f.tokens.colors.INFO_POSITIVE_FOREGROUND
          }) : (0, a.jsx)(o.CloseLargeBoldIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            color: f.tokens.colors.INFO_DANGER_FOREGROUND
          })
        }), x !== h.UserRulesAgreementLevel.NO_GATE && (0, a.jsx)(_.UserModInfoItem, {
          icon: (0, a.jsx)(r.BookCheckIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            className: v.unusualDMLabelIcon
          }),
          name: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: T.default.Messages.GUILD_MEMBER_MOD_VIEW_AGREE_TO_RULES
          }),
          description: x === h.UserRulesAgreementLevel.AGREED ? (0, a.jsx)(u.CheckmarkBoldIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            color: f.tokens.colors.INFO_POSITIVE_FOREGROUND
          }) : (0, a.jsx)(o.CloseLargeBoldIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            color: f.tokens.colors.INFO_DANGER_FOREGROUND
          })
        }), (0, a.jsx)(_.UserModInfoItem, {
          icon: (0, a.jsx)(S.default, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX
          }),
          name: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: T.default.Messages.GUILD_MEMBER_MOD_VIEW_DISCORD_JOIN_DATE
          }),
          description: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: N
          })
        }), (0, a.jsx)(_.UserModInfoItem, {
          icon: (0, a.jsx)(g.GuildIcon, {
            guild: n,
            size: g.GuildIcon.Sizes.SMOL,
            animate: !1,
            className: v.guildIcon
          }),
          name: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: T.default.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_JOIN_DATE
          }),
          description: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: A
          })
        }), (0, a.jsx)(_.UserModInfoItem, {
          icon: (0, a.jsx)(c.UserPlusIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX
          }),
          name: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: T.default.Messages.GUILD_MEMBER_MOD_VIEW_INVITE_LINK_LABEL
          }),
          description: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: (0, a.jsx)(m.default, {
              userId: t.userId,
              guildId: t.guildId,
              showInviterAsFooter: !0,
              onClickInviter: e => {
                let n = E.default.getChannelId();
                (0, C.openGuildMemberModViewSidebar)(t.guildId, e.id, null != n ? n : I.EMPTY_STRING_SNOWFLAKE_ID)
              }
            })
          })
        })]
      })
    })
  })
}