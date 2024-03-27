"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("77078"),
  i = s("191814"),
  r = s("476765"),
  o = s("757715"),
  d = s("406876"),
  u = s("167109"),
  c = s("7370"),
  E = s("561205"),
  _ = s("958671"),
  I = s("104967"),
  T = s("677847"),
  S = s("88681"),
  f = s("798204"),
  m = s("677795"),
  N = s("782340"),
  g = s("325224");

function h(e) {
  let {
    allSubscriptionListings: t
  } = e, {
    editStateId: s,
    guildId: h
  } = (0, d.useEditStateContext)(), [C, R] = u.useChannelBenefits(s), [x, L] = u.useIntangibleBenefits(s), O = l.useMemo(() => t.filter(e => e.id !== s), [t, s]), {
    isFullServerGating: A
  } = (0, c.default)(h), p = (0, r.useUID)(), M = (0, o.useRoleSubscriptionSettingsDisabled)();
  return (0, a.jsxs)(E.default, {
    title: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_BENEFITS_HEADER_TITLE,
    description: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_BENEFITS_HEADER_SUBTITLE,
    children: [(0, a.jsxs)(n.FormSection, {
      title: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_HEADER_TITLE,
      disabled: M,
      children: [(0, a.jsx)(n.FormText, {
        type: n.FormText.Types.DESCRIPTION,
        className: g.formDescription,
        disabled: M,
        children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_HEADER_SUBTITLE
      }), (0, a.jsx)(_.default, {
        channelBenefits: C,
        intangibleBenefits: x,
        subscriptionListings: O,
        onImport: function(e, t) {
          R(t => t.concat(e)), L(e => e.concat(t))
        }
      }), (0, a.jsx)(i.default, {
        size: 8
      }), (0, a.jsx)(_.ImportRoleCard, {
        guildId: h,
        onImport: function(e) {
          R(t => {
            let s = new Set(t.map(e => {
                let {
                  ref_id: t
                } = e;
                return t
              })),
              a = e.filter(e => !s.has(e)).map(e => ({
                ref_id: e,
                ref_type: m.GuildRoleSubscriptionBenefitTypes.CHANNEL
              }));
            return [...t, ...a]
          })
        },
        disabled: M
      })]
    }), (0, a.jsx)(i.default, {
      size: 24
    }), (0, a.jsxs)(n.FormSection, {
      title: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_CHANNELS_TITLE,
      titleId: p,
      disabled: M,
      children: [(0, a.jsx)(n.FormText, {
        type: n.FormText.Types.DESCRIPTION,
        className: g.formDescription,
        disabled: M,
        children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_CHANNELS_DESCRIPTION
      }), A && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(I.default, {
          "aria-labelledby": p,
          disabled: M
        }), (0, a.jsx)(i.default, {
          size: 8
        })]
      }), (0, a.jsx)(T.default, {})]
    }), (0, a.jsx)(i.default, {
      size: 24
    }), (0, a.jsxs)(n.FormSection, {
      title: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_TITLE,
      disabled: M,
      children: [(0, a.jsx)(n.FormText, {
        type: n.FormText.Types.DESCRIPTION,
        className: g.formDescription,
        disabled: M,
        children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_DESCRIPTION
      }), (0, a.jsx)(f.default, {})]
    }), (0, a.jsx)(i.default, {
      size: 24
    }), (0, a.jsx)(S.default, {})]
  })
}