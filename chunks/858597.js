"use strict";
s.r(t);
var a = s("735250"),
  l = s("470079"),
  T = s("803997"),
  n = s.n(T),
  o = s("442837"),
  r = s("692547"),
  S = s("465270"),
  _ = s("481060"),
  i = s("194359"),
  E = s("782568"),
  u = s("726521"),
  d = s("485664"),
  O = s("699516"),
  c = s("941362"),
  A = s("367408"),
  C = s("423932"),
  I = s("473092"),
  L = s("611446"),
  f = s("993750"),
  N = s("134612"),
  R = s("689938"),
  F = s("89591");

function x(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)("div", {
    className: F.actionGroup,
    children: t
  })
}

function h(e) {
  let {
    title: t,
    subTitle: s,
    buttonText: l,
    buttonColor: T,
    onPress: n
  } = e;
  return (0, a.jsxs)("div", {
    className: F.actionRow,
    children: [(0, a.jsxs)("div", {
      className: F.actionButtonDetails,
      children: [(0, a.jsx)(_.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t
      }), (0, a.jsx)(_.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: s
      })]
    }), (0, a.jsx)(_.Button, {
      size: _.Button.Sizes.SMALL,
      color: T,
      onClick: n,
      children: l
    })]
  })
}

function M(e) {
  let {
    title: t,
    onPress: s
  } = e;
  return (0, a.jsxs)(_.Clickable, {
    className: n()(F.actionRow, F.clickableActionRow),
    onClick: s,
    children: [(0, a.jsx)(_.Text, {
      variant: "text-md/semibold",
      color: "header-primary",
      children: t
    }), (0, a.jsx)(S.ChevronSmallRightIcon, {
      width: 24,
      height: 24,
      color: r.default.colors.INTERACTIVE_NORMAL
    })]
  })
}
t.default = function(e) {
  let {
    otherUserId: t,
    channelId: T,
    warningId: n,
    warningType: r,
    transitionToSlide: S
  } = e, F = (0, d.useShouldShowHelplineLink)(), Y = (0, c.useLastChannelMessage)(T), p = null != (0, A.useSafetyToolsButtonTooltipForChannel)(T), B = (0, o.useStateFromStores)([O.default], () => O.default.isBlocked(t)), m = l.useCallback(e => {
    (0, I.trackCtaEvent)({
      channelId: T,
      warningId: n,
      senderId: t,
      warningType: r,
      cta: e,
      isNudgeWarning: p
    })
  }, [T, n, t, r, p]), v = l.useCallback(() => {
    (0, _.closeModal)(N.SAFETY_TOOLS_MODAL_KEY), m(I.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_CONFIRM)
  }, [m]), g = l.useCallback(() => {
    i.default.unblockUser(t, {
      location: N.MODAL_LOCATION_CONTEXT_WEB
    }), m(I.CtaEventTypes.USER_SAFETY_TOOLS_UNBLOCK)
  }, [t, m]), b = l.useCallback(() => {
    (0, _.closeModal)(N.SAFETY_TOOLS_MODAL_KEY), m(I.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM)
  }, [m]), P = l.useMemo(() => {
    let e = {
        title: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_TITLE,
        subTitle: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_SUBTITLE,
        buttonText: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_BUTTON,
        buttonColor: _.ButtonColors.PRIMARY,
        onPress: () => {
          (0, E.default)(N.CRISIS_TEXT_LINE_URL), m(I.CtaEventTypes.USER_SAFETY_TOOLS_CTL)
        }
      },
      l = {
        title: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
        subTitle: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
        buttonText: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
        buttonColor: _.ButtonColors.PRIMARY,
        onPress: () => {
          (0, E.default)(N.NOFILTR_URL), m(I.CtaEventTypes.USER_SAFETY_TOOLS_NO_FILTR)
        }
      };
    return [{
      title: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      subTitle: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_SUBTITLE,
      buttonText: B ? R.default.Messages.INAPPROPRIATE_CONVERSATION_UNBLOCK : R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      buttonColor: _.ButtonColors.BRAND,
      onPress: () => {
        B ? g() : (0, _.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([s.e("99387"), s.e("41128")]).then(s.bind(s, "699783"));
          return s => {
            let {
              transitionState: l,
              onClose: n
            } = s;
            return (0, a.jsx)(e, {
              transitionState: l,
              onBlock: v,
              onBlockAndReport: b,
              onCancel: () => {
                null == n || n(), m(I.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_CANCEL)
              },
              onClose: n,
              userId: t,
              channelId: T
            })
          }
        })
      }
    }, {
      title: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      subTitle: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_SUBTITLE,
      buttonText: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      buttonColor: _.ButtonColors.PRIMARY,
      onPress: () => {
        (0, _.closeModal)(N.SAFETY_TOOLS_MODAL_KEY), (0, u.showReportModalForInappropriateConversationSafetyAlert)(Y), m(I.CtaEventTypes.USER_SAFETY_TOOLS_REPORT)
      }
    }, F ? e : l, {
      title: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
      subTitle: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
      buttonText: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
      buttonColor: _.ButtonColors.PRIMARY,
      onPress: () => {
        (0, C.default)(_.closeAllModals), m(I.CtaEventTypes.USER_SAFETY_TOOLS_VIBING_WUMPUS)
      }
    }]
  }, [B, F, m, g, v, b, t, T, Y]), j = l.useMemo(() => [{
    title: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
    onPress: () => {
      S(L.SafetyToolsSlides.SAFETY_TIPS), m(I.CtaEventTypes.USER_SAFETY_TOOLS_SAFETY_TIPS)
    }
  }, {
    title: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
    onPress: () => {
      S(L.SafetyToolsSlides.ABOUT_SAFETY_ALERTS), m(I.CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS)
    }
  }], [S, m]);
  return (0, a.jsxs)(f.default, {
    children: [(0, a.jsx)(x, {
      children: P.map(e => {
        let {
          title: t,
          subTitle: s,
          buttonText: l,
          buttonColor: T,
          onPress: n
        } = e;
        return (0, a.jsx)(h, {
          title: t,
          subTitle: s,
          buttonText: l,
          buttonColor: T,
          onPress: n
        }, t)
      })
    }), (0, a.jsx)(x, {
      children: j.map(e => {
        let {
          title: t,
          onPress: s
        } = e;
        return (0, a.jsx)(M, {
          title: t,
          onPress: s
        }, t)
      })
    })]
  })
}