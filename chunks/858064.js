"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("481060"),
  i = n("230711"),
  r = n("314897"),
  o = n("465670"),
  u = n("626135"),
  d = n("730417"),
  c = n("524347"),
  f = n("702512"),
  h = n("981631"),
  C = n("689938"),
  p = n("385473");
let m = (e, t, n) => {
  let l = t.assets.tooltipSrc;
  switch (e) {
    case f.TooltipActions.STREAM_CTA:
      return {
        header: C.default.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
          gameName: t.title
        }), body: t.messages.enrollmentTooltip(n), imgSrc: l, imgStyle: p.dropImgPreStreamNotice
      };
    case f.TooltipActions.TRACK_PROGRESS:
      return {
        header: C.default.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
          gameName: t.title
        }), body: "", imgSrc: l, imgStyle: p.dropImgProgressTracker
      };
    case f.TooltipActions.QUEST_COMPLETION:
      return {
        header: C.default.Messages.DROPS_QUEST_COMPLETION_TOOLTIP_HEADER, body: t.messages.completionTooltip(n), imgSrc: l, imgStyle: p.dropImgQuestCompletion
      };
    case f.TooltipActions.LOADING_INITIAL_PROGRESS:
      return {
        header: "", body: "", imgSrc: l, imgStyle: p.dropImgPreStreamNotice
      }
  }
};

function g(e) {
  let {
    streamLengthRequirement: t,
    viewerCountRequirement: n
  } = e, i = (0, a.useStateFromStores)([c.default], () => c.default.currentDropQuestStreamProgress), r = Math.floor(i / 100 * t).toString();
  return (0, l.jsxs)("div", {
    children: [(0, l.jsx)(s.Text, {
      variant: "text-sm/bold",
      className: p.progressBarCount,
      children: C.default.Messages.DROPS_STREAM_PROGRESS_INDICATOR.format({
        minutesStreamed: r,
        streamLengthRequirement: t
      })
    }), (0, l.jsx)("div", {
      className: p.progressBarContainer,
      children: (0, l.jsx)("div", {
        className: p.progressBarOuter,
        children: (0, l.jsx)("div", {
          className: p.progressBarInner,
          style: {
            width: "".concat(i, "%")
          }
        })
      })
    }), (0, l.jsxs)(s.Text, {
      variant: "text-xs/medium",
      className: p.viewerCount,
      children: ["*", C.default.Messages.DROPS_REQUIRE_NUM_VIEWERS.format({
        numViewers: n
      }), "*"]
    })]
  })
}

function E(e) {
  let {
    onClose: t,
    tooltipAction: n,
    partnerGame: c
  } = e, E = (0, d.useDropsExperiment)(c);
  (0, d.useFetchInitialDropProgress)(c);
  let S = (0, a.useStateFromStores)([r.default], () => r.default.getId());
  if (null == E) return null;
  let {
    streamLengthRequirement: _,
    viewerCountRequirement: I
  } = E.config, N = E.drop, {
    header: T,
    body: A,
    imgSrc: L,
    imgStyle: v
  } = m(n, N, _), x = () => {
    u.default.track(h.AnalyticEvents.DROPS_ACTIVITY_PANEL_POPOVER_CTA_CLICK, {
      user_id: S,
      drops_quest_id: N.dropsQuestId,
      game_id: N.dropsGameId,
      game_name: N.title.toLowerCase(),
      tooltip_action: n
    })
  }, R = () => {
    t()
  };
  return (0, l.jsxs)("div", {
    className: p.container,
    children: [(0, l.jsx)("img", {
      src: L,
      alt: "",
      className: v
    }), (0, l.jsx)(s.Clickable, {
      className: p.__invalid_buttonClose,
      "aria-label": C.default.Messages.CLOSE,
      onClick: R,
      children: (0, l.jsx)(o.default, {
        width: 16,
        height: 16,
        className: p.closeIcon
      })
    }), n === f.TooltipActions.LOADING_INITIAL_PROGRESS ? (0, l.jsx)(s.Spinner, {
      className: p.spinner
    }) : (0, l.jsx)(s.Heading, {
      className: p.title,
      variant: "heading-md/extrabold",
      children: T
    }), n === f.TooltipActions.TRACK_PROGRESS ? (0, l.jsx)(g, {
      streamLengthRequirement: _,
      viewerCountRequirement: I
    }) : (0, l.jsx)(s.Text, {
      variant: "text-sm/medium",
      className: p.subTitle,
      children: A
    }), n === f.TooltipActions.QUEST_COMPLETION ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(s.Button, {
        look: s.Button.Looks.INVERTED,
        fullWidth: !0,
        onClick: () => {
          t(), i.default.open(h.UserSettingsSections.INVENTORY), x()
        },
        children: C.default.Messages.REDEEM
      }), (0, l.jsx)(s.Button, {
        className: p.linkButtonContainer,
        innerClassName: p.linkButton,
        onClick: R,
        look: s.Button.Looks.LINK,
        fullWidth: !0,
        color: s.Button.Colors.WHITE,
        children: C.default.Messages.NOT_NOW
      })]
    }) : (0, l.jsx)(s.Button, {
      look: s.Button.Looks.INVERTED,
      fullWidth: !0,
      onClick: () => {
        t(), i.default.open(h.UserSettingsSections.INVENTORY), x()
      },
      children: C.default.Messages.LEARN_MORE
    }), (0, l.jsx)("div", {
      className: p.pointer
    })]
  })
}