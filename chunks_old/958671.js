"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  },
  ImportRoleCard: function() {
    return S
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  n = s.n(l),
  i = s("77078"),
  r = s("461380"),
  o = s("682344"),
  d = s("271560"),
  u = s("577357"),
  c = s("757715"),
  E = s("701973"),
  _ = s("782340"),
  I = s("936168");

function T(e) {
  let {
    channelBenefits: t,
    intangibleBenefits: s,
    subscriptionListings: l,
    onImport: r
  } = e, o = (0, c.useRoleSubscriptionSettingsDisabled)();
  return (0, a.jsx)("div", {
    className: I.container,
    children: l.map(e => (0, a.jsxs)("div", {
      className: I.row,
      children: [(0, a.jsx)("img", {
        alt: "",
        src: null == e.image_asset ? void 0 : (0, d.getAssetURL)(e.application_id, e.image_asset, 512),
        className: n(I.rowIcon, I.listingImage)
      }), (0, a.jsxs)("div", {
        className: I.rowBody,
        children: [(0, a.jsx)(i.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          className: n(I.rowText, I.listingName),
          children: e.name
        }), (0, a.jsx)(i.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_NUM_BENEFITS.format({
            channels: e.role_benefits.benefits.filter(u.isChannelBenefit).length,
            benefits: e.role_benefits.benefits.filter(u.isIntangibleBenefit).length
          })
        })]
      }), (0, a.jsx)(i.Button, {
        look: i.Button.Looks.OUTLINED,
        color: i.Button.Colors.PRIMARY,
        onClick: () => {
          var l;
          return l = e, void(0, i.openModal)(e => (0, a.jsx)(E.ImportBenefitsFromSubscriptionListingModal, {
            ...e,
            fromSubscriptionListing: l,
            existingChannelBenefits: t,
            existingIntangibleBenefits: s,
            onSubmit: r
          }))
        },
        disabled: o,
        children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_BUTTON
      })]
    }, e.id))
  })
}

function S(e) {
  let {
    guildId: t,
    onImport: s,
    disabled: l = !1
  } = e;
  return (0, a.jsxs)(i.Clickable, {
    className: n(I.importRoleCard, {
      [I.disabled]: l
    }),
    onClick: l ? void 0 : function() {
      (0, i.openModal)(e => (0, a.jsx)(E.ImportBenefitsFromRoleModal, {
        ...e,
        guildId: t,
        onImport: s
      }))
    },
    "aria-disabled": l,
    children: [(0, a.jsx)(o.default, {
      className: I.rowIcon
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-primary",
      className: I.rowText,
      children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_SELECT_ROLE
    }), (0, a.jsx)(r.default, {
      direction: r.default.Directions.RIGHT,
      className: I.caret
    })]
  })
}