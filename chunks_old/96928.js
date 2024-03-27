"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var n = s("37983"),
  a = s("884691"),
  l = s("414456"),
  r = s.n(l),
  o = s("446674"),
  i = s("669491"),
  T = s("748802"),
  u = s("77078"),
  S = s("736964"),
  _ = s("545158"),
  d = s("377114"),
  E = s("652126"),
  c = s("27618"),
  O = s("615992"),
  A = s("13355"),
  f = s("15408"),
  I = s("217736"),
  C = s("161297"),
  L = s("514914"),
  p = s("324252"),
  R = s("782340"),
  N = s("744228");

function h(e) {
  let {
    children: t
  } = e;
  return (0, n.jsx)("div", {
    className: N.actionGroup,
    children: t
  })
}

function F(e) {
  let {
    title: t,
    subTitle: s,
    buttonText: a,
    buttonColor: l,
    onPress: r
  } = e;
  return (0, n.jsxs)("div", {
    className: N.actionRow,
    children: [(0, n.jsxs)("div", {
      className: N.actionButtonDetails,
      children: [(0, n.jsx)(u.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t
      }), (0, n.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: s
      })]
    }), (0, n.jsx)(u.Button, {
      size: u.Button.Sizes.SMALL,
      color: l,
      onClick: r,
      children: a
    })]
  })
}

function m(e) {
  let {
    title: t,
    onPress: s
  } = e;
  return (0, n.jsxs)(u.Clickable, {
    className: r(N.actionRow, N.clickableActionRow),
    onClick: s,
    children: [(0, n.jsx)(u.Text, {
      variant: "text-md/semibold",
      color: "header-primary",
      children: t
    }), (0, n.jsx)(T.ChevronSmallRightIcon, {
      width: 24,
      height: 24,
      color: i.default.colors.INTERACTIVE_NORMAL
    })]
  })
}
var g = function(e) {
  let {
    otherUserId: t,
    channelId: l,
    warningId: r,
    warningType: i,
    transitionToSlide: T
  } = e, N = (0, E.useShouldShowHelplineLink)(), g = (0, O.useLastChannelMessage)(l), v = null != (0, A.useSafetyToolsButtonTooltipForChannel)(l), x = (0, o.useStateFromStores)([c.default], () => c.default.isBlocked(t)), M = a.useCallback(e => {
    (0, I.trackCtaEvent)({
      channelId: l,
      warningId: r,
      senderId: t,
      warningType: i,
      cta: e,
      isNudgeWarning: v
    })
  }, [l, r, t, i, v]), Y = a.useCallback(() => {
    (0, u.closeModal)(p.SAFETY_TOOLS_MODAL_KEY), M(I.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_CONFIRM)
  }, [M]), y = a.useCallback(() => {
    S.default.unblockUser(t, {
      location: p.MODAL_LOCATION_CONTEXT_WEB
    }), M(I.CtaEventTypes.USER_SAFETY_TOOLS_UNBLOCK)
  }, [t, M]), B = a.useCallback(() => {
    (0, u.closeModal)(p.SAFETY_TOOLS_MODAL_KEY), M(I.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM)
  }, [M]), P = a.useMemo(() => {
    let e = {
        title: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_TITLE,
        subTitle: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_SUBTITLE,
        buttonText: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_BUTTON,
        buttonColor: u.ButtonColors.PRIMARY,
        onPress: () => {
          (0, _.default)(p.CRISIS_TEXT_LINE_URL), M(I.CtaEventTypes.USER_SAFETY_TOOLS_CTL)
        }
      },
      a = {
        title: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
        subTitle: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
        buttonText: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
        buttonColor: u.ButtonColors.PRIMARY,
        onPress: () => {
          (0, _.default)(p.NOFILTR_URL), M(I.CtaEventTypes.USER_SAFETY_TOOLS_NO_FILTR)
        }
      };
    return [{
      title: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      subTitle: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_SUBTITLE,
      buttonText: x ? R.default.Messages.INAPPROPRIATE_CONVERSATION_UNBLOCK : R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      buttonColor: u.ButtonColors.BRAND,
      onPress: () => {
        x ? y() : (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await s.el("811578").then(s.bind(s, "811578"));
          return s => {
            let {
              transitionState: a,
              onClose: r
            } = s;
            return (0, n.jsx)(e, {
              transitionState: a,
              onBlock: Y,
              onBlockAndReport: B,
              onCancel: () => {
                null == r || r(), M(I.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_CANCEL)
              },
              onClose: r,
              userId: t,
              channelId: l
            })
          }
        })
      }
    }, {
      title: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      subTitle: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_SUBTITLE,
      buttonText: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      buttonColor: u.ButtonColors.PRIMARY,
      onPress: () => {
        (0, u.closeModal)(p.SAFETY_TOOLS_MODAL_KEY), (0, d.showReportModalForInappropriateConversationSafetyAlert)(g), M(I.CtaEventTypes.USER_SAFETY_TOOLS_REPORT)
      }
    }, N ? e : a, {
      title: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
      subTitle: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
      buttonText: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
      buttonColor: u.ButtonColors.PRIMARY,
      onPress: () => {
        (0, f.default)(u.closeAllModals), M(I.CtaEventTypes.USER_SAFETY_TOOLS_VIBING_WUMPUS)
      }
    }]
  }, [x, N, M, y, Y, B, t, l, g]), b = a.useMemo(() => [{
    title: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
    onPress: () => {
      T(C.SafetyToolsSlides.SAFETY_TIPS), M(I.CtaEventTypes.USER_SAFETY_TOOLS_SAFETY_TIPS)
    }
  }, {
    title: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
    onPress: () => {
      T(C.SafetyToolsSlides.ABOUT_SAFETY_ALERTS), M(I.CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS)
    }
  }], [T, M]);
  return (0, n.jsxs)(L.default, {
    children: [(0, n.jsx)(h, {
      children: P.map(e => {
        let {
          title: t,
          subTitle: s,
          buttonText: a,
          buttonColor: l,
          onPress: r
        } = e;
        return (0, n.jsx)(F, {
          title: t,
          subTitle: s,
          buttonText: a,
          buttonColor: l,
          onPress: r
        }, t)
      })
    }), (0, n.jsx)(h, {
      children: b.map(e => {
        let {
          title: t,
          onPress: s
        } = e;
        return (0, n.jsx)(m, {
          title: t,
          onPress: s
        }, t)
      })
    })]
  })
}