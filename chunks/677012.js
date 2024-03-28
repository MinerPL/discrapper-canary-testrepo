"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var l = n("735250"),
  a = n("470079"),
  u = n("477690"),
  i = n("481060"),
  o = n("208156"),
  s = n("962250"),
  d = n("368874"),
  r = n("467679"),
  c = n("465670"),
  E = n("624138"),
  p = n("293979"),
  T = n("674563"),
  f = n("689938"),
  m = n("995657");
let _ = (0, E.cssValueToNumber)(u.default.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
  S = (0, E.cssValueToNumber)(u.default.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
  C = (0, E.cssValueToNumber)(u.default.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
  I = (0, E.cssValueToNumber)(u.default.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);

function N(e) {
  var t;
  let {
    title: n,
    onClose: u
  } = e, {
    applicationIconURL: E,
    applicationName: N,
    queryParams: O,
    iframeUrl: y
  } = (0, p.useIframeModalState)(e), {
    width: L,
    height: A
  } = (0, s.useScreenDimensions)(), v = a.useMemo(() => {
    let e = Math.min((A - I - 2 * C) * 16 / 9, S);
    return Math.max(_, Math.min(L - 2 * C, e))
  }, [L, A]);
  return (0, l.jsx)(i.ModalRoot, {
    ...e,
    size: i.ModalSize.DYNAMIC,
    className: m.root,
    children: (0, l.jsxs)("div", {
      style: {
        width: v
      },
      children: [(0, l.jsxs)(i.ModalHeader, {
        separator: !1,
        className: m.modalHeader,
        children: [(0, l.jsx)(i.Avatar, {
          src: E,
          size: i.AvatarSizes.SIZE_32,
          "aria-label": N,
          className: m.applicationIcon
        }), (0, l.jsxs)("div", {
          className: m.flexRow,
          children: [(0, l.jsxs)("div", {
            children: [(0, l.jsx)(i.Heading, {
              variant: "heading-sm/bold",
              children: N
            }), (0, l.jsx)(i.Text, {
              variant: "text-xs/medium",
              color: "interactive-normal",
              children: n
            })]
          }), (0, l.jsx)(r.default, {
            type: T.BotTagTypes.BOT,
            className: m.botTag,
            verified: null === (t = e.application.bot) || void 0 === t ? void 0 : t.verified
          })]
        }), (0, l.jsx)(i.Button, {
          onClick: u,
          innerClassName: m.closeButton,
          className: m.closeButtonContainer,
          look: i.Button.Looks.BLANK,
          size: i.Button.Sizes.NONE,
          "aria-label": f.default.Messages.DISMISS,
          children: (0, l.jsx)(c.default, {
            className: m.closeIcon
          })
        })]
      }), (0, l.jsx)(d.default, {
        aspectRatio: 16 / 9,
        children: (0, l.jsx)(o.EmbedIFrameWithLoadingBackground, {
          url: y,
          shouldRefocus: !0,
          className: m.iframe,
          queryParams: O
        })
      })]
    })
  })
}