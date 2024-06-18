"use strict";
t.d(s, {
  Z: function() {
    return T
  },
  w: function() {
    return N
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(481060),
  r = t(259580),
  o = t(241820),
  c = t(73346),
  d = t(817460),
  u = t(723047),
  E = t(880229),
  _ = t(689938),
  I = t(576272);

function T(e) {
  let {
    channelBenefits: s,
    intangibleBenefits: t,
    subscriptionListings: i,
    onImport: r
  } = e, o = (0, u.mY)();
  return (0, n.jsx)("div", {
    className: I.container,
    children: i.map(e => (0, n.jsxs)("div", {
      className: I.row,
      children: [(0, n.jsx)("img", {
        alt: "",
        src: null == e.image_asset ? void 0 : (0, c._W)(e.application_id, e.image_asset, 512),
        className: l()(I.rowIcon, I.listingImage)
      }), (0, n.jsxs)("div", {
        className: I.rowBody,
        children: [(0, n.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          className: l()(I.rowText, I.listingName),
          children: e.name
        }), (0, n.jsx)(a.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_NUM_BENEFITS.format({
            channels: e.role_benefits.benefits.filter(d.rC).length,
            benefits: e.role_benefits.benefits.filter(d.lL).length
          })
        })]
      }), (0, n.jsx)(a.Button, {
        look: a.Button.Looks.OUTLINED,
        color: a.Button.Colors.PRIMARY,
        onClick: () => {
          var i;
          return i = e, void(0, a.openModal)(e => (0, n.jsx)(E.K, {
            ...e,
            fromSubscriptionListing: i,
            existingChannelBenefits: s,
            existingIntangibleBenefits: t,
            onSubmit: r
          }))
        },
        disabled: o,
        children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_BUTTON
      })]
    }, e.id))
  })
}

function N(e) {
  let {
    guildId: s,
    onImport: t,
    disabled: i = !1
  } = e;
  return (0, n.jsxs)(a.Clickable, {
    className: l()(I.importRoleCard, {
      [I.disabled]: i
    }),
    onClick: i ? void 0 : function() {
      (0, a.openModal)(e => (0, n.jsx)(E.C, {
        ...e,
        guildId: s,
        onImport: t
      }))
    },
    "aria-disabled": i,
    children: [(0, n.jsx)(o.Z, {
      className: I.rowIcon
    }), (0, n.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "header-primary",
      className: I.rowText,
      children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_SELECT_ROLE
    }), (0, n.jsx)(r.Z, {
      direction: r.Z.Directions.RIGHT,
      className: I.caret
    })]
  })
}