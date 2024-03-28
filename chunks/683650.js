"use strict";
n.r(t), n.d(t, {
  InvalidQuestsEmbed: function() {
    return _
  }
});
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("481060"),
  r = n("230711"),
  o = n("37303"),
  u = n("981631"),
  d = n("689938"),
  c = n("780134"),
  f = n("87181");

function E() {
  return (0, s.jsx)(i.TooltipContainer, {
    text: d.default.Messages.GIFT_INVENTORY,
    className: c.buttonContainer,
    tooltipContentClassName: c.__invalid_giftInventoryButtonTooltipCopy,
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
    className: l()(c.container, {
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
        className: c.__invalid_mobileWebCopy,
        children: d.default.Messages.QUESTS_EMBED_INVALID_BODY
      }), (0, s.jsx)(E, {})]
    }), (0, s.jsx)("div", {
      className: c.imgContainer,
      children: (0, s.jsx)("img", {
        src: f,
        alt: "",
        className: c.missingQuestImage
      })
    })]
  })
}