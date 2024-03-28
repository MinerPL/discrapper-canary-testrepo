"use strict";
n.r(t), n.d(t, {
  Header: function() {
    return I
  },
  PurchaseConfirmation: function() {
    return A
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("442837"),
  r = n("481060"),
  o = n("596454"),
  u = n("131388"),
  d = n("409813"),
  c = n("430824"),
  f = n("465670"),
  h = n("73346"),
  m = n("817460"),
  p = n("584825"),
  E = n("570533"),
  C = n("629262"),
  g = n("575460"),
  S = n("293810"),
  _ = n("689938"),
  T = n("482841");
let I = e => {
    let {
      onClose: t,
      listing: n,
      step: l,
      guildId: i
    } = e, o = (0, p.useSubscriptionsSettings)(i), c = (0, u.default)(S.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY), m = (() => {
      var e;
      if (c) return null;
      let t = (null == o ? void 0 : null === (e = o.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null ? (0, h.getAssetURL)(o.cover_image_asset.application_id, o.cover_image_asset, 440) : void 0;
      return null == t && l !== d.Step.CONFIRM ? null : null == t ? (0, a.jsx)("div", {
        className: T.headerImageEmpty
      }) : (0, a.jsx)("img", {
        src: t,
        alt: "",
        className: T.headerImage
      })
    })();
    return (0, a.jsxs)("div", {
      className: s()(T.headerContainer, {
        [T.headerEmpty]: c || null == m
      }),
      children: [m, (() => {
        if (l !== d.Step.CONFIRM) return null;
        let e = null == n.image_asset ? void 0 : (0, h.getAssetURL)(n.application_id, n.image_asset, 80);
        return (0, a.jsx)("div", {
          className: T.tierImageContainer,
          children: (0, a.jsx)("img", {
            src: e,
            alt: "",
            className: T.tierImage
          })
        })
      })(), (0, a.jsx)(r.Clickable, {
        className: T.closeContainer,
        onClick: () => t(!1),
        "aria-label": _.default.Messages.CLOSE,
        children: (0, a.jsx)(f.default, {
          className: T.closeIcon
        })
      })]
    })
  },
  A = e => {
    let {
      onClose: t,
      listing: n,
      guildId: l
    } = e, s = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(l), [l]), u = (0, E.default)(l).filter(e => e.roles.includes(n.role_id)), d = n.role_benefits.benefits.filter(m.isChannelBenefit).slice(0, null === u.length ? 4 : 3), f = (0, C.default)(d).slice(0, null === u.length ? 4 : 3);
    return (0, a.jsxs)("div", {
      className: T.confirmationContainer,
      children: [(0, a.jsx)(r.Heading, {
        className: T.confirmationHeader,
        variant: "heading-xl/semibold",
        color: "header-secondary",
        children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE.format({
          serverName: null == s ? void 0 : s.toString()
        })
      }), (0, a.jsx)(r.Text, {
        className: T.confirmationSubtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
          tier: n.name
        })
      }), f.length > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: T.confirmationSectionLabel,
          children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CHANNEL_PREVIEW
        }), (0, a.jsx)("div", {
          className: T.confirmationBenefits,
          children: f.map(e => (0, a.jsx)(g.default, {
            benefit: e,
            guildId: l,
            onClick: () => t(!0)
          }, (0, m.getBenefitKey)(e)))
        })]
      }), (() => {
        var e;
        if (0 === u.length) return null;
        let t = u[0];
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(r.Text, {
            variant: "text-xs/medium",
            color: "header-secondary",
            className: T.confirmationSectionLabel,
            children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_PREVIEW_TITLE
          }), (0, a.jsxs)("div", {
            className: T.emojiBenefitsRow,
            children: [(0, a.jsx)(o.default, {
              emojiId: t.id,
              emojiName: t.name,
              animated: null !== (e = t.animated) && void 0 !== e && e,
              className: T.emojiImage
            }), (0, a.jsxs)("div", {
              children: [(0, a.jsx)(r.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                className: T.emojiName,
                children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_TEXT
              }), (0, a.jsx)(r.Text, {
                color: "interactive-normal",
                variant: "text-sm/normal",
                children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_DESCRIPTION.format({
                  count: u.length
                })
              })]
            })]
          })]
        })
      })(), (0, a.jsx)(r.Button, {
        className: T.confirmationButton,
        onClick: () => t(!0),
        children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
      })]
    })
  }