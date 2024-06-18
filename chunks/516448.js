"use strict";
t.d(s, {
  Z: function() {
    return g
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(481060),
  a = t(153124),
  r = t(723047),
  o = t(727843),
  c = t(290348),
  d = t(164e3),
  u = t(783454),
  E = t(862319),
  _ = t(140285),
  I = t(390583),
  T = t(641249),
  N = t(574085),
  m = t(293810),
  S = t(689938),
  h = t(169769);

function g(e) {
  let {
    allSubscriptionListings: s
  } = e, {
    editStateId: t,
    guildId: g
  } = (0, o.N)(), [x, C] = c.UE(t), [R, L] = c.R7(t), O = i.useMemo(() => s.filter(e => e.id !== t), [s, t]), {
    isFullServerGating: A
  } = (0, d.Z)(g), p = (0, a.Dt)(), M = (0, r.mY)();
  return (0, n.jsxs)(u.Z, {
    title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_BENEFITS_HEADER_TITLE,
    description: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_BENEFITS_HEADER_SUBTITLE,
    children: [(0, n.jsxs)(l.FormSection, {
      title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_HEADER_TITLE,
      disabled: M,
      children: [(0, n.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        className: h.formDescription,
        disabled: M,
        children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_HEADER_SUBTITLE
      }), (0, n.jsx)(E.Z, {
        channelBenefits: x,
        intangibleBenefits: R,
        subscriptionListings: O,
        onImport: function(e, s) {
          C(s => s.concat(e)), L(e => e.concat(s))
        }
      }), (0, n.jsx)(l.Spacer, {
        size: 8
      }), (0, n.jsx)(E.w, {
        guildId: g,
        onImport: function(e) {
          C(s => {
            let t = new Set(s.map(e => {
              let {
                ref_id: s
              } = e;
              return s
            }));
            return [...s, ...e.filter(e => !t.has(e)).map(e => ({
              ref_id: e,
              ref_type: m.Qs.CHANNEL
            }))]
          })
        },
        disabled: M
      })]
    }), (0, n.jsx)(l.Spacer, {
      size: 24
    }), (0, n.jsxs)(l.FormSection, {
      title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_CHANNELS_TITLE,
      titleId: p,
      disabled: M,
      children: [(0, n.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        className: h.formDescription,
        disabled: M,
        children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_CHANNELS_DESCRIPTION
      }), A && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(_.Z, {
          "aria-labelledby": p,
          disabled: M
        }), (0, n.jsx)(l.Spacer, {
          size: 8
        })]
      }), (0, n.jsx)(I.Z, {})]
    }), (0, n.jsx)(l.Spacer, {
      size: 24
    }), (0, n.jsxs)(l.FormSection, {
      title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_TITLE,
      disabled: M,
      children: [(0, n.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        className: h.formDescription,
        disabled: M,
        children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_DESCRIPTION
      }), (0, n.jsx)(N.Z, {})]
    }), (0, n.jsx)(l.Spacer, {
      size: 24
    }), (0, n.jsx)(T.Z, {})]
  })
}