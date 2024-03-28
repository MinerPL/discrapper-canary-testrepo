"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("481060"),
  i = s("682864"),
  r = s("153124"),
  o = s("723047"),
  d = s("727843"),
  u = s("290348"),
  c = s("164000"),
  E = s("783454"),
  _ = s("862319"),
  I = s("140285"),
  T = s("390583"),
  S = s("641249"),
  f = s("574085"),
  m = s("293810"),
  N = s("689938"),
  g = s("606353");

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
            }));
            return [...t, ...e.filter(e => !s.has(e)).map(e => ({
              ref_id: e,
              ref_type: m.GuildRoleSubscriptionBenefitTypes.CHANNEL
            }))]
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