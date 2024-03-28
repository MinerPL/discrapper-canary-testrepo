"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("735250");
n("470079");
var s = n("990547"),
  l = n("481060"),
  i = n("230711"),
  r = n("465670"),
  o = n("960359"),
  u = n("730417"),
  d = n("981631"),
  c = n("921944"),
  f = n("689938"),
  E = n("698237");
let h = (e, t) => ({
  header: f.default.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
    gameName: e.title
  }),
  body: e.messages.enrollmentTooltip(t),
  imgSrc: e.assets.tooltipSrc,
  imgStyle: E.defaultDropImage
});

function _(e) {
  let {
    markAsDismissed: t,
    partnerGame: n
  } = e;
  (0, u.useTrackDropsImpression)(n, s.ImpressionTypes.POPOUT, s.ImpressionNames.DROPS_QUEST_ENROLLMENT);
  let _ = (0, u.useDropsExperiment)(n);
  if (null == _) return null;
  let {
    header: C,
    body: m,
    imgSrc: S,
    imgStyle: I
  } = h(_.drop, _.config.streamLengthRequirement), p = () => {
    t(c.ContentDismissActionType.DISMISS)
  };
  return (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsx)("img", {
      src: S,
      alt: "",
      className: I
    }), (0, a.jsx)(l.Clickable, {
      className: E.__invalid_buttonClose,
      "aria-label": f.default.Messages.CLOSE,
      onClick: p,
      children: (0, a.jsx)(r.default, {
        width: 16,
        height: 16,
        className: E.closeIcon
      })
    }), (0, a.jsx)(l.Heading, {
      className: E.title,
      variant: "heading-md/extrabold",
      children: C
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/medium",
      className: E.subTitle,
      children: m
    }), _.config.autoEnrollment ? (0, a.jsx)(l.Button, {
      look: l.Button.Looks.INVERTED,
      fullWidth: !0,
      onClick: () => {
        i.default.open(d.UserSettingsSections.INVENTORY), t(c.ContentDismissActionType.PRIMARY)
      },
      children: f.default.Messages.LEARN_MORE
    }) : (0, a.jsx)(l.Button, {
      innerClassName: E.button,
      look: l.Button.Looks.INVERTED,
      fullWidth: !0,
      onClick: () => {
        (0, o.enrollDropsUser)(_.drop.dropsQuestId), i.default.open(d.UserSettingsSections.INVENTORY), t(c.ContentDismissActionType.PRIMARY)
      },
      children: f.default.Messages.DROPS_ELIGIBILITY_ENROLLMENT_PRIMARY_CTA
    }), (0, a.jsx)(l.Button, {
      className: E.linkButtonContainer,
      innerClassName: E.linkButton,
      onClick: p,
      look: l.Button.Looks.LINK,
      fullWidth: !0,
      color: l.Button.Colors.WHITE,
      children: f.default.Messages.NOT_NOW
    }), (0, a.jsx)("div", {
      className: E.pointer
    })]
  })
}