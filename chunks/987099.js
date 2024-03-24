"use strict";
n.r(t), n.d(t, {
  InvalidQuestsEmbed: function() {
    return _
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("77078"),
  r = n("79112"),
  o = n("301259"),
  u = n("49111"),
  d = n("782340"),
  c = n("567782"),
  E = n("238554");

function f() {
  return (0, s.jsx)(i.TooltipContainer, {
    text: d.default.Messages.GIFT_INVENTORY,
    className: c.buttonContainer,
    tooltipContentClassName: c.giftInventoryButtonTooltipCopy,
    children: (0, s.jsx)(i.Button, {
      className: c.button,
      color: i.ButtonColors.BRAND_NEW,
      onClick: () => {
        r.default.open(u.UserSettingsSections.INVENTORY)
      },
      children: d.default.Messages.GIFT_INVENTORY
    })
  })
}

function _() {
  let {
    containerRef: e,
    size: t
  } = (0, o.useQuestCardSize)();
  return (0, s.jsxs)("div", {
    ref: t => e.current = t,
    className: a(c.container, {
      [c.wide]: "lg" === t,
      [c.tall]: "lg" !== t
    }),
    children: [(0, s.jsxs)("div", {
      className: c.contentContainer,
      children: [(0, s.jsx)(i.Heading, {
        variant: "lg" === t ? "heading-xl/bold" : "heading-lg/bold",
        color: "header-primary",
        children: d.default.Messages.QUESTS_EMBED_INVALID_HEADING
      }), (0, s.jsx)(i.Text, {
        variant: "lg" === t ? "text-sm/medium" : "text-xs/medium",
        color: "text-normal",
        className: c.mobileWebCopy,
        children: d.default.Messages.QUESTS_EMBED_INVALID_BODY
      }), (0, s.jsx)(f, {})]
    }), (0, s.jsx)("div", {
      className: c.imgContainer,
      children: (0, s.jsx)("img", {
        src: E,
        alt: "",
        className: c.missingQuestImage
      })
    })]
  })
}