"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  i = n("399606"),
  r = n("421086"),
  o = n("461920"),
  u = n("760852"),
  d = n("115850"),
  c = n("458890"),
  f = n("481060"),
  h = n("376923"),
  m = n("16829"),
  p = n("430824"),
  E = n("944486"),
  C = n("819570"),
  g = n("68972"),
  S = n("189432"),
  _ = n("776767"),
  T = n("981631"),
  I = n("689938"),
  A = n("806338");

function N(e) {
  let {
    member: t
  } = e, n = (0, i.useStateFromStores)([p.default], () => p.default.getGuild(t.guildId), [t.guildId]), l = (0, h.useUserAccountVerified)(t.userId, t.guildId), N = (0, h.useUserRulesAgreementLevel)(t.userId, t.guildId), v = (0, h.useUserAccountAgeDate)(t.userId), x = (0, h.useGuildMemberJoinedAtDate)(t.userId, t.guildId);
  return null == n ? null : (0, a.jsx)("div", {
    className: s()(A.__invalid_safetySignalsMainContainer),
    children: (0, a.jsx)(f.FormItem, {
      title: I.default.Messages.ACCOUNT,
      titleClassName: A.infoTitle,
      children: (0, a.jsxs)(_.UserModInfoItemContainer, {
        children: [(0, a.jsx)(_.UserModInfoItem, {
          icon: (0, a.jsx)(c.ShieldUserIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            className: A.__invalid_unusualDMLabelIcon
          }),
          name: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: I.default.Messages.MEMBER_VERIFICATION_ACCOUNT_VERIFIED
          }),
          description: l ? (0, a.jsx)(o.CheckmarkBoldIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            color: f.tokens.colors.INFO_POSITIVE_FOREGROUND
          }) : (0, a.jsx)(u.CloseLargeBoldIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            color: f.tokens.colors.INFO_DANGER_FOREGROUND
          })
        }), N !== h.UserRulesAgreementLevel.NO_GATE && (0, a.jsx)(_.UserModInfoItem, {
          icon: (0, a.jsx)(r.BookCheckIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            className: A.__invalid_unusualDMLabelIcon
          }),
          name: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: I.default.Messages.GUILD_MEMBER_MOD_VIEW_AGREE_TO_RULES
          }),
          description: N === h.UserRulesAgreementLevel.AGREED ? (0, a.jsx)(o.CheckmarkBoldIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            color: f.tokens.colors.INFO_POSITIVE_FOREGROUND
          }) : (0, a.jsx)(u.CloseLargeBoldIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX,
            color: f.tokens.colors.INFO_DANGER_FOREGROUND
          })
        }), (0, a.jsx)(_.UserModInfoItem, {
          icon: (0, a.jsx)(g.default, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX
          }),
          name: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: I.default.Messages.GUILD_MEMBER_MOD_VIEW_DISCORD_JOIN_DATE
          }),
          description: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: v
          })
        }), (0, a.jsx)(_.UserModInfoItem, {
          icon: (0, a.jsx)(C.GuildIcon, {
            guild: n,
            size: C.GuildIcon.Sizes.SMOL,
            animate: !1,
            className: A.guildIcon
          }),
          name: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: I.default.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_JOIN_DATE
          }),
          description: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: x
          })
        }), (0, a.jsx)(_.UserModInfoItem, {
          icon: (0, a.jsx)(d.GroupPlusIcon, {
            width: _.USER_MOD_ICON_SIZE_PX,
            height: _.USER_MOD_ICON_SIZE_PX
          }),
          name: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: I.default.Messages.GUILD_MEMBER_MOD_VIEW_INVITE_LINK_LABEL
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
                (0, S.openGuildMemberModViewSidebar)(t.guildId, e.id, null != n ? n : T.EMPTY_STRING_SNOWFLAKE_ID)
              }
            })
          })
        })]
      })
    })
  })
}