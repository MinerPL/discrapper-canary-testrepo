"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var a = l("735250");
l("470079");
var n = l("442837"),
  s = l("481060"),
  r = l("536442"),
  i = l("142497"),
  d = l("689938"),
  u = l("613268"),
  o = l("137707");
let c = () => (0, a.jsxs)(a.Fragment, {
  children: [(0, a.jsx)(s.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: u.inlineText,
    children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_1
  }), (0, a.jsx)(s.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: u.inlineText,
    children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_2
  }), (0, a.jsx)(s.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: u.inlineText,
    children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_3
  }), (0, a.jsx)(s.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: u.inlineText,
    children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_4
  })]
});

function E(e) {
  let {
    onClick: t
  } = e;
  return (0, n.useStateFromStores)([r.HotspotStore], () => !r.HotspotStore.hasHotspot(r.HotspotLocations.STAGE_CHANNEL_UPSELL)) ? null : (0, a.jsxs)("div", {
    className: u.container,
    children: [(0, a.jsxs)("div", {
      className: u.content,
      children: [(0, a.jsxs)("div", {
        className: u.textContainer,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_TITLE
        }), (0, a.jsx)(s.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: u.descriptionText,
          children: d.default.Messages.GUILD_EVENT_STAGE_TOOLTIP_BODY
        }), (0, a.jsx)(s.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL.format({
            suggestionsHook: c
          })
        })]
      }), (0, a.jsx)("div", {
        className: u.image,
        children: (0, a.jsx)("img", {
          src: o,
          alt: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_ALT_IMAGE
        })
      })]
    }), (0, a.jsxs)("div", {
      className: u.footer,
      children: [(0, a.jsx)(s.Button, {
        onClick: t,
        color: s.Button.Colors.PRIMARY,
        size: s.Button.Sizes.SMALL,
        className: u.button,
        children: d.default.Messages.CREATE_STAGE_CHANNEL
      }), (0, a.jsx)(s.Button, {
        onClick: () => {
          i.hideHotspot(r.HotspotLocations.STAGE_CHANNEL_UPSELL)
        },
        color: s.Button.Colors.TRANSPARENT,
        size: s.Button.Sizes.SMALL,
        look: s.ButtonLooks.LINK,
        children: d.default.Messages.DONT_SHOW_AGAIN
      })]
    })]
  })
}