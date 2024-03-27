"use strict";
s.r(t), s.d(t, {
  DropsCopyCodeModalContent: function() {
    return f
  },
  DropsModalClaimErrorBody: function() {
    return _
  },
  default: function() {
    return m
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("77078"),
  r = s("913144"),
  o = s("545158"),
  d = s("476765"),
  u = s("376152"),
  c = s("180273"),
  S = s("579565"),
  E = s("782340"),
  T = s("126867");

function f(e) {
  let {
    onClose: t,
    code: s,
    copyInputTitle: n,
    bodyText: l
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(i.ModalHeader, {
      separator: !1,
      className: T.headerContainer,
      children: [(0, a.jsx)("div", {
        className: T.dropArt
      }), (0, a.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        children: E.default.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
      })]
    }), (0, a.jsxs)(i.ModalContent, {
      className: T.modalContent,
      children: [(0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        className: T.codeBodyText,
        children: l
      }), (0, a.jsx)(i.FormDivider, {
        className: T.formDivider
      }), (0, a.jsx)(i.FormSection, {
        title: n,
        className: T.formSection,
        children: (0, a.jsx)(i.Button, {
          onClick: () => (0, o.default)(s),
          color: i.Button.Colors.BRAND,
          look: i.Button.Looks.FILLED,
          children: E.default.Messages.GIFT_EMBED_BUTTON_CLAIM
        })
      })]
    }), (0, a.jsx)(i.ModalFooter, {
      className: T.modalFooter,
      children: (0, a.jsx)(i.Button, {
        className: T.closeButton,
        onClick: t,
        look: i.Button.Looks.LINK,
        color: T.closeButton,
        children: E.default.Messages.CLOSE
      })
    })]
  })
}

function _(e) {
  let {
    onClose: t,
    errorCode: s
  } = e, n = {
    26e4: E.default.Messages.DROPS_USER_NOT_ENROLLED_ERROR,
    260001: E.default.Messages.DROPS_QUEST_NOT_COMPLETED_ERROR,
    260002: E.default.Messages.DROPS_NO_CODE_AVAILABLE_ERROR,
    260003: E.default.Messages.DROPS_CODE_ALREADY_CLAIMED_ERROR
  }, l = E.default.Messages.GENERIC_ERROR_BODY;
  return null != n[s] && (l = n[s]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(i.ModalHeader, {
      separator: !1,
      className: T.errorHeader,
      children: [(0, a.jsx)("div", {
        className: T.errorArt
      }), (0, a.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        children: E.default.Messages.GENERIC_ERROR_TITLE
      })]
    }), (0, a.jsx)(i.ModalContent, {
      className: T.errorBody,
      children: (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        className: T.bodyText,
        children: l
      })
    }), (0, a.jsx)(i.ModalFooter, {
      children: (0, a.jsx)(i.Button, {
        color: i.Button.Colors.BRAND,
        onClick: t,
        children: E.default.Messages.CLOSE
      })
    })]
  })
}
var m = function(e) {
  let {
    onClose: t,
    code: o,
    drop: _,
    platform: m,
    transitionState: g
  } = e, h = (0, d.useUID)(), [N, I] = n.useState();
  n.useEffect(() => {
    null == o && r.default.wait(async () => {
      await (0, u.fetchCodePlatformAvailability)(_.dropsQuestId)
    })
  }, [_.dropsQuestId, o]);
  let p = (0, l.useStateFromStores)([c.default], () => c.default.platformAvailability);
  return (0, a.jsx)(i.ModalRoot, {
    transitionState: g,
    "aria-labelledby": h,
    children: (0, a.jsx)(a.Fragment, {
      children: (() => {
        if (null != o) return (0, a.jsx)(f, {
          bodyText: _.messages.claimTip(),
          onClose: t,
          copyInputTitle: E.default.Messages.DROPS_REDEMPTION_CODE_PLATFORM_TITLE.format({
            platform: m
          }),
          code: o
        });
        {
          if (null === p) return (0, a.jsx)("div", {
            className: T.spinnerContainer,
            children: (0, a.jsx)(i.Spinner, {})
          });
          let e = p.length > 0,
            n = 1 === p.length;
          return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsxs)(i.ModalHeader, {
              separator: !1,
              className: T.headerContainer,
              children: [(0, a.jsx)("div", {
                className: T.dropArt
              }), (0, a.jsx)(i.Heading, {
                variant: "heading-lg/semibold",
                children: E.default.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
              })]
            }), (0, a.jsxs)(i.ModalContent, {
              children: [(0, a.jsx)(i.Text, {
                variant: "text-md/normal",
                className: T.dropBodyText,
                children: n ? E.default.Messages.DROPS_MODAL_CHOOSE_SINGLE_PLATFORM.format({
                  platform: (0, S.getPlatformLabel)(p[0])
                }) : E.default.Messages.DROPS_MODAL_CHOOSE_PLATFORM.format({
                  title: _.title
                })
              }), (0, a.jsx)(i.FormDivider, {
                className: T.formDivider
              }), (0, a.jsxs)(i.FormSection, {
                className: T.dropFormSection,
                children: [(0, a.jsx)(i.SingleSelect, {
                  onChange: I,
                  options: p.map(e => ({
                    value: e,
                    label: (0, S.getPlatformLabel)(e)
                  })),
                  value: n ? p[0] : N,
                  isDisabled: !e,
                  className: e ? "" : T.selectDangerBorder,
                  look: e ? i.SelectLooks.FILLED : i.SelectLooks.CUSTOM
                }), !e && (0, a.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  color: "text-danger",
                  className: T.errorCodesText,
                  children: E.default.Messages.DROPS_CODES_RAN_OUT
                })]
              })]
            }), (0, a.jsxs)(i.ModalFooter, {
              children: [e && (0, a.jsx)(i.Button, {
                color: i.Button.Colors.BRAND,
                onClick: () => {
                  (0, i.openModalLazy)(async () => {
                    let {
                      default: e
                    } = await s.el("343495").then(s.bind(s, "343495"));
                    return s => (void 0 !== N || n) && (0, a.jsx)(e, {
                      ...s,
                      platform: void 0 === N ? p[0] : N,
                      code: o,
                      dropsQuestId: _.dropsQuestId,
                      closeParentModal: t,
                      singlePlatformClaim: n
                    })
                  })
                },
                disabled: void 0 === N && !n,
                children: E.default.Messages.UNLOCK_CODE
              }), e ? (0, a.jsx)(i.Button, {
                onClick: t,
                look: i.Button.Looks.LINK,
                color: T.maybeLaterButton,
                children: E.default.Messages.MAYBE_LATER
              }) : (0, a.jsx)(i.Button, {
                onClick: t,
                look: i.Button.Looks.LINK,
                color: T.closeButton,
                children: E.default.Messages.CLOSE
              })]
            })]
          })
        }
      })()
    })
  })
}