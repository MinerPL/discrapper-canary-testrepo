"use strict";
E.r(t), E.d(t, {
  default: function() {
    return o
  }
});
var _ = E("37983");
E("884691");
var s = E("77078"),
  T = E("139375"),
  a = E("419830"),
  n = E("990745"),
  A = E("449008"),
  u = E("432153"),
  I = E("677795"),
  i = E("782340"),
  l = E("525452");

function L(e) {
  let {
    channelId: t
  } = e, E = (0, u.useChannelWithTemplateFallback)(t);
  if (null == E) return (0, _.jsx)(_.Fragment, {
    children: "[".concat(i.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETED_CHANNEL_LABEL, "]")
  });
  let A = E.isMediaChannel() ? n.default : (0, a.getSimpleChannelIconComponent)(E.type);
  return (0, _.jsxs)(_.Fragment, {
    children: [(0, _.jsx)(s.HiddenVisually, {
      children: (0, T.default)({
        channel: E
      })
    }), (0, _.jsxs)("div", {
      "aria-hidden": !0,
      children: [null != A && (0, _.jsx)(A, {
        className: l.icon,
        "aria-hidden": !0
      }), E.name]
    })]
  })
}

function o(e) {
  switch (e.ref_type) {
    case I.GuildRoleSubscriptionBenefitTypes.CHANNEL:
      return (0, _.jsx)(L, {
        channelId: e.ref_id
      });
    case I.GuildRoleSubscriptionBenefitTypes.INTANGIBLE:
      return e.name;
    default:
      (0, A.assertNever)(e)
  }
}