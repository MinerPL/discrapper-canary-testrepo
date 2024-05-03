"use strict";
s.r(t);
var a = s("735250"),
  l = s("470079"),
  T = s("120356"),
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
  R = s("134612"),
  N = s("689938"),
  F = s("261935");

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
  } = e, F = (0, d.useShouldShowHelplineLink)(), Y = (0, c.useLastChannelMessage)(T), p = null != (0, A.useSafetyToolsButtonTooltipForChannel)(T), B = (0, o.useStateFromStores)([O.default], () => O.default.isBlocked(t)), v = l.useCallback(e => {
    (0, I.trackCtaEvent)({
      channelId: T,
      warningId: n,
      senderId: t,
      warningType: r,
      cta: e,
      isNudgeWarning: p
    })
  }, [T, n, t, r, p]), g = l.useCallback(() => {
    (0, _.closeModal)(R.SAFETY_TOOLS_MODAL_KEY), v(I.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_CONFIRM)
  }, [v]), m = l.useCallback(() => {
    i.default.unblockUser(t, {
      location: R.MODAL_LOCATION_CONTEXT_WEB
    }), v(I.CtaEventTypes.USER_SAFETY_TOOLS_UNBLOCK)
  }, [t, v]), P = l.useCallback(() => {
    (0, _.closeModal)(R.SAFETY_TOOLS_MODAL_KEY), v(I.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM)
  }, [v]), b = l.useMemo(() => {
    let e = {
        title: N.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_TITLE,
        subTitle: N.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_SUBTITLE,
        buttonText: N.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_BUTTON,
        buttonColor: _.ButtonColors.PRIMARY,
        onPress: () => {
          (0, E.default)(R.CRISIS_TEXT_LINE_URL), v(I.CtaEventTypes.USER_SAFETY_TOOLS_CTL)
        }
      },
      l = {
        title: N.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
        subTitle: N.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
        buttonText: N.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
        buttonColor: _.ButtonColors.PRIMARY,
        onPress: () => {
          (0, E.default)(R.NOFILTR_URL), v(I.CtaEventTypes.USER_SAFETY_TOOLS_NO_FILTR)
        }
      };
    return [{
      title: N.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      subTitle: N.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_SUBTITLE,
      buttonText: B ? N.default.Messages.INAPPROPRIATE_CONVERSATION_UNBLOCK : N.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      buttonColor: _.ButtonColors.BRAND,
      onPress: () => {
        B ? m() : (0, _.openModalLazy)(async () => {
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
              onBlock: g,
              onBlockAndReport: P,
              onCancel: () => {
                null == n || n(), v(I.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_CANCEL)
              },
              onClose: n,
              userId: t,
              channelId: T
            })
          }
        })
      }
    }, {
      title: N.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      subTitle: N.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_SUBTITLE,
      buttonText: N.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      buttonColor: _.ButtonColors.PRIMARY,
      onPress: () => {
        (0, _.closeModal)(R.SAFETY_TOOLS_MODAL_KEY), (0, u.showReportModalForInappropriateConversationSafetyAlert)(Y), v(I.CtaEventTypes.USER_SAFETY_TOOLS_REPORT)
      }
    }, F ? e : l, {
      title: N.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
      subTitle: N.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
      buttonText: N.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
      buttonColor: _.ButtonColors.PRIMARY,
      onPress: () => {
        (0, C.default)(_.closeAllModals), v(I.CtaEventTypes.USER_SAFETY_TOOLS_VIBING_WUMPUS)
      }
    }]
  }, [B, F, v, m, g, P, t, T, Y]), j = l.useMemo(() => [{
    title: N.default.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
    onPress: () => {
      S(L.SafetyToolsSlides.SAFETY_TIPS), v(I.CtaEventTypes.USER_SAFETY_TOOLS_SAFETY_TIPS)
    }
  }, {
    title: N.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
    onPress: () => {
      S(L.SafetyToolsSlides.ABOUT_SAFETY_ALERTS), v(I.CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS)
    }
  }], [S, v]);
  return (0, a.jsxs)(f.default, {
    children: [(0, a.jsx)(x, {
      children: b.map(e => {
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