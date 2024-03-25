"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var s = n("759843"),
  l = n("77078"),
  i = n("79112"),
  r = n("945330"),
  o = n("243632"),
  u = n("49111"),
  d = n("994428"),
  c = n("782340"),
  f = n("169489");
let E = (e, t) => ({
  body: e.messages.completionTooltip(t),
  imgSrc: e.assets.tooltipSrc,
  imgStyle: f.defaultDropImage
});

function h(e) {
  let {
    markAsDismissed: t,
    partnerGame: n
  } = e;
  (0, o.useTrackDropsImpression)(n, s.ImpressionTypes.POPOUT, s.ImpressionNames.DROPS_QUEST_COMPLETION);
  let h = (0, o.useDropsExperiment)(n);
  if (null == h) return null;
  let {
    body: _,
    imgSrc: C,
    imgStyle: S
  } = E(h.drop, h.config.streamLengthRequirement), I = () => {
    t(d.ContentDismissActionType.DISMISS)
  };
  return (0, a.jsxs)("div", {
    className: f.container,
    children: [(0, a.jsx)("img", {
      src: C,
      alt: "",
      className: S
    }), (0, a.jsx)(l.Clickable, {
      className: f.buttonClose,
      "aria-label": c.default.Messages.CLOSE,
      onClick: I,
      children: (0, a.jsx)(r.default, {
        width: 16,
        height: 16,
        className: f.closeIcon
      })
    }), (0, a.jsx)(l.Heading, {
      className: f.title,
      variant: "heading-md/extrabold",
      children: c.default.Messages.DROPS_QUEST_COMPLETION_TOOLTIP_HEADER
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/medium",
      className: f.subTitle,
      children: _
    }), (0, a.jsx)(l.Button, {
      look: l.Button.Looks.INVERTED,
      fullWidth: !0,
      onClick: () => {
        i.default.open(u.UserSettingsSections.INVENTORY), t(d.ContentDismissActionType.PRIMARY)
      },
      children: c.default.Messages.REDEEM
    }), (0, a.jsx)(l.Button, {
      className: f.linkButtonContainer,
      innerClassName: f.linkButton,
      onClick: I,
      look: l.Button.Looks.LINK,
      fullWidth: !0,
      color: l.Button.Colors.WHITE,
      children: c.default.Messages.NOT_NOW
    }), (0, a.jsx)("div", {
      className: f.pointer
    })]
  })
}