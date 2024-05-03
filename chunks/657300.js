"use strict";
t.r(s), t.d(s, {
  default: function() {
    return L
  }
});
var a = t("735250"),
  l = t("470079"),
  i = t("524437"),
  n = t("481060"),
  o = t("607070"),
  c = t("605236"),
  d = t("301822"),
  r = t("193277"),
  m = t("912527"),
  u = t("397575"),
  h = t("132338"),
  x = t("626135"),
  f = t("132871"),
  I = t("147890"),
  _ = t("981631"),
  A = t("921944"),
  N = t("689938"),
  M = t("10636");

function L(e) {
  let {
    guildId: s,
    transitionState: L,
    onClose: P,
    analyticsType: C = i.DismissibleContent.APP_DIRECTORY_UPSELL_MODAL
  } = e;
  return l.useEffect(() => {
    x.default.track(_.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
      type: i.DismissibleContent[C],
      guild_id: s
    })
  }, [s, C]), (0, a.jsxs)(n.ModalRoot, {
    transitionState: L,
    className: M.__invalid_modal,
    size: n.ModalSize.SMALL,
    children: [(0, a.jsxs)(n.ModalContent, {
      className: M.modalContent,
      children: [(0, a.jsx)(d.default, {
        autoplay: !0,
        shouldAnimate: !o.default.useReducedMotion,
        importData: () => t.e("76241").then(t.t.bind(t, "554690", 19)),
        className: M.animation
      }), (0, a.jsx)(n.Heading, {
        variant: "heading-xl/semibold",
        children: N.default.Messages.APP_DIRECTORY_IPP_HEADER
      }), (0, a.jsx)(n.Text, {
        variant: "text-md/medium",
        className: M.subheader,
        color: "text-muted",
        children: N.default.Messages.APP_DIRECTORY_IPP_SECONDARY_HEADER
      }), (0, a.jsxs)("ul", {
        className: M.listContainer,
        children: [(0, a.jsxs)("li", {
          className: M.listItem,
          children: [(0, a.jsx)(u.default, {
            className: M.wandIcon,
            height: "24",
            width: "24"
          }), (0, a.jsx)(n.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: N.default.Messages.APP_DIRECTORY_IPP_CUSTOMIZATION
          })]
        }), (0, a.jsx)(h.default, {
          className: M.divider
        }), (0, a.jsxs)("li", {
          className: M.listItem,
          children: [(0, a.jsx)(m.default, {
            className: M.robotIcon,
            height: "24",
            width: "24"
          }), (0, a.jsx)(n.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: N.default.Messages.APP_DIRECTORY_IPP_AUTOMATION
          })]
        }), (0, a.jsx)(h.default, {
          className: M.divider
        }), (0, a.jsxs)("li", {
          className: M.listItem,
          children: [(0, a.jsx)(r.default, {
            className: M.smileIcon,
            height: "24",
            width: "24"
          }), (0, a.jsx)(n.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: N.default.Messages.APP_DIRECTORY_IPP_FUN
          })]
        })]
      })]
    }), (0, a.jsxs)(n.ModalFooter, {
      className: M.modalFooter,
      children: [(0, a.jsx)(n.Button, {
        onClick: () => {
          P(), (0, c.markDismissibleContentAsDismissed)(C, {
            forceTrack: !0,
            dismissAction: A.ContentDismissActionType.PRIMARY,
            guildId: s
          }), (0, I.goToAppDirectory)({
            guildId: s,
            entrypoint: {
              name: f.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_UPSELL_MODAL
            }
          })
        },
        children: N.default.Messages.GUILD_EVENT_UPSELL_PRIMARY_CTA
      }), (0, a.jsx)(n.Button, {
        look: n.Button.Looks.LINK,
        onClick: () => {
          P(), (0, c.markDismissibleContentAsDismissed)(C, {
            forceTrack: !0,
            dismissAction: A.ContentDismissActionType.SECONDARY,
            guildId: s
          })
        },
        color: n.Button.Colors.PRIMARY,
        children: N.default.Messages.NOT_NOW
      })]
    })]
  })
}