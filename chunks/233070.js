"use strict";
l.r(t), l("47120");
var o = l("735250"),
  s = l("470079"),
  a = l("435935"),
  n = l("481060"),
  d = l("570140"),
  r = l("960359"),
  i = l("853197"),
  u = l("430492"),
  c = l("689938"),
  C = l("219668");
t.default = function(e) {
  let {
    transitionState: t,
    closeParentModal: l,
    onClose: M,
    dropsQuestId: f,
    platform: h,
    code: p,
    singlePlatformClaim: x
  } = e, [m, j] = s.useState(null), [I, N] = s.useState(null != p ? p : null), E = (0, i.getDropByQuestId)(f);
  if (s.useEffect(() => {
      null == I && x && O(f, h)
    }, [I, x, f, h]), null == E) return null;
  let O = (e, t) => {
      (0, r.claimDropsRewardCode)(e, t).then(e => N(e)).catch(e => {
        var t;
        return j(null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code)
      }).then(() => {
        d.default.wait(async () => {
          await (0, r.fetchDropsUserStatus)()
        })
      })
    },
    R = () => {
      l(), (0, n.closeAllModals)()
    };
  return (0, o.jsx)(n.ModalRoot, {
    transitionState: t,
    children: null != m ? (0, o.jsx)(u.DropsModalClaimErrorBody, {
      onClose: () => {
        R()
      },
      errorCode: m
    }) : null !== I ? (0, o.jsx)(u.DropsCopyCodeModalContent, {
      bodyText: E.messages.claimTip(),
      onClose: R,
      copyInputTitle: c.default.Messages.REDEMPTION_CODE,
      code: I
    }) : (0, o.jsxs)(o.Fragment, {
      children: [(0, o.jsxs)(n.ModalHeader, {
        separator: !1,
        justify: a.Flex.Justify.BETWEEN,
        children: [(0, o.jsx)(n.Heading, {
          variant: "heading-md/medium",
          children: c.default.Messages.DROPS_MODAL_PLATFORM_CONFIRMATION_TITLE.format({
            platform: (0, i.getPlatformLabel)(h)
          })
        }), (0, o.jsx)(n.ModalCloseButton, {
          onClick: R
        })]
      }), (0, o.jsx)(n.ModalContent, {
        className: C.modalContent,
        children: (0, o.jsx)(n.Text, {
          variant: "text-md/normal",
          children: c.default.Messages.DROPS_MODAL_CONFIRMATION_WARNING
        })
      }), (0, o.jsxs)(n.ModalFooter, {
        justify: a.Flex.Justify.BETWEEN,
        children: [(0, o.jsx)(n.Button, {
          onClick: () => {
            O(f, h)
          },
          children: c.default.Messages.CONFIRM
        }), (0, o.jsx)(n.Button, {
          look: n.Button.Looks.LINK,
          size: n.Button.Sizes.MIN,
          color: n.Button.Colors.PRIMARY,
          onClick: M,
          children: c.default.Messages.BACK
        })]
      })]
    })
  })
}