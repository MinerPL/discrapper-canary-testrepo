"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
}), a("222007");
var s = a("37983"),
  l = a("884691"),
  i = a("627445"),
  n = a.n(i),
  r = a("759843"),
  o = a("65597"),
  d = a("77078"),
  u = a("327037"),
  c = a("152584"),
  E = a("599417"),
  f = a("506885"),
  m = a("697218"),
  S = a("945330"),
  _ = a("599110"),
  I = a("158998"),
  N = a("255403"),
  h = a("2581"),
  M = a("415133"),
  T = a("42060"),
  g = a("22658"),
  O = a("998957"),
  L = a("426149"),
  x = a("767282"),
  C = a("935583"),
  P = a("15881"),
  R = a("49111"),
  p = a("782340"),
  v = a("968414");

function A(e) {
  let t, {
      source: a,
      transitionState: i,
      onClose: A,
      oneClickFlow: y = !1
    } = e,
    [U, D] = l.useState(y ? P.PomeloModalSlides.SUGGESTIONS : P.PomeloModalSlides.INFO),
    [G, F] = l.useState(!1),
    [B, w] = l.useState(null),
    [b, k] = l.useState(y ? C.EditState.SUGGESTION : C.EditState.NONE),
    [W, H] = l.useState(!1),
    [V, X] = l.useState(!1),
    z = l.useRef(null),
    Y = (0, o.default)([h.default], () => h.default.isCurrentUsernameInvalid()),
    Z = (0, o.default)([m.default], () => {
      let e = m.default.getCurrentUser();
      return n(null != e, "PomeloModal: user cannot be undefined"), e
    }),
    K = (0, T.useForceMigration)(),
    {
      usernameSuggestion: Q,
      usernameSuggestionLoading: q
    } = (0, g.useUsernameSuggestion)(y ? C.TIMEOUT_TIME : void 0);
  l.useEffect(() => {
    b === C.EditState.EDIT_USERNAME && X(!0), _.default.track(R.AnalyticEvents.POMELO_EDIT_STEP_VIEWED, {
      source: a,
      step: b
    })
  }, [b, a]), l.useEffect(() => {
    !V && !W && null != Q && Q.length > 0 && $(e => ({
      ...e,
      username: Q
    }))
  }, [Q, V, W]);
  let [J, $] = l.useState({
    username: (0, M.getDefaultPomelo)(Z),
    globalName: I.default.getName(Z)
  }), ee = e => {
    w(null), null != e.username && H(!0), $(t => ({
      ...t,
      ...e
    }))
  }, et = l.useMemo(() => [{
    slideId: P.PomeloModalSlides.INFO,
    next: P.PomeloModalSlides.EDIT_SCREEN,
    footerButtons: ["REMIND_ME_LATER", "GET_STARTED"]
  }, {
    slideId: P.PomeloModalSlides.EDIT_SCREEN,
    next: P.PomeloModalSlides.FINISH_LATER,
    back: P.PomeloModalSlides.INFO,
    footerButtons: [b === C.EditState.PREVIEW ? "GOT_IT" : "BACK", b === C.EditState.PREVIEW ? "GOT_IT" : b === C.EditState.EDIT_USERNAME ? "SUBMIT" : "NEXT"]
  }, {
    slideId: P.PomeloModalSlides.FINISH_LATER,
    back: P.PomeloModalSlides.EDIT_SCREEN
  }, {
    slideId: P.PomeloModalSlides.SUGGESTIONS,
    footerButtons: [b === C.EditState.PREVIEW ? "GOT_IT" : "UPDATE"]
  }, {
    slideId: P.PomeloModalSlides.FINISH_LATER
  }], [b]), ea = et.length, es = l.useCallback(async () => {
    if (J.globalName.length <= 0) {
      let e = p.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
        minNum: 1,
        maxNum: 32
      });
      w(e), _.default.track(R.AnalyticEvents.POMELO_ERRORS, {
        reason: e,
        display_name_error: !0,
        location: "modal"
      });
      return
    }
    if (I.default.getGlobalName(Z) === J.globalName) {
      k(C.EditState.EDIT_USERNAME);
      return
    }
    try {
      w(null), F(!0), await (0, c.saveAccountRequest)({
        global_name: J.globalName
      }), k(C.EditState.EDIT_USERNAME)
    } catch (a) {
      let e = new E.default(a),
        t = e.getAnyErrorMessage();
      _.default.track(R.AnalyticEvents.POMELO_ERRORS, {
        reason: t,
        display_name_error: !0,
        location: "modal"
      }), w(t)
    } finally {
      F(!1)
    }
  }, [Z, J]), el = l.useCallback(async () => {
    try {
      w(null), F(!0), await N.default.createPomelo({
        username: (0, M.formatPomeloForEditing)(J.username)
      }, y), await (0, u.fetchProfile)(Z.id), k(C.EditState.PREVIEW)
    } catch (a) {
      let e = new E.default(a),
        t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : p.default.Messages.ERROR_GENERIC_TITLE;
      w(t), _.default.track(R.AnalyticEvents.POMELO_ERRORS, {
        reason: t,
        username_error: !0,
        location: "modal",
        one_click_flow: y
      })
    } finally {
      F(!1)
    }
  }, [J, Z.id, y]), ei = Y || (0, M.shouldSkipToEditUsername)(Z), en = l.useCallback(() => {
    k(ei ? C.EditState.EDIT_USERNAME : C.EditState.EDIT_DISPLAY_NAME), D(et[Math.min(ea - 1, U + 1)].slideId)
  }, [U, et, ea, ei]), er = l.useCallback(() => {
    w(null), U === P.PomeloModalSlides.EDIT_SCREEN ? b === C.EditState.EDIT_USERNAME ? ei ? (k(C.EditState.NONE), D(et[Math.max(0, U - 1)].slideId)) : k(C.EditState.EDIT_DISPLAY_NAME) : b === C.EditState.EDIT_DISPLAY_NAME ? (k(C.EditState.NONE), D(et[Math.max(0, U - 1)].slideId)) : b === C.EditState.PREVIEW && k(C.EditState.EDIT_USERNAME) : D(et[Math.max(0, U - 1)].slideId)
  }, [et, U, b, ei]), eo = l.useCallback(() => {
    D(P.PomeloModalSlides.FINISH_LATER)
  }, []), ed = l.useMemo(() => {
    if (U === P.PomeloModalSlides.EDIT_SCREEN && b === C.EditState.EDIT_DISPLAY_NAME) return es;
    if (U === P.PomeloModalSlides.EDIT_SCREEN && b === C.EditState.EDIT_USERNAME) return el;
    if (U === P.PomeloModalSlides.SUGGESTIONS && b === C.EditState.SUGGESTION) return el;
    else return en
  }, [U, b, es, el, en]), eu = l.useMemo(() => {
    var e, t;
    return j(null !== (t = null === (e = et.find(e => e.slideId === U)) || void 0 === e ? void 0 : e.footerButtons) && void 0 !== t ? t : [], {
      handleNext: ed,
      handleBack: er,
      handleRemindMeLater: eo,
      onClose: A
    }, G, q, W)
  }, [er, eo, ed, A, et, U, G, q, W]), ec = l.useMemo(() => (0, M.getUserAvatarURLForPomelo)(Z), [Z]);
  l.useLayoutEffect(() => {
    (0, f.default)(Z.id, ec)
  }, [Z, ec]), l.useEffect(() => {
    var e, t;
    switch (b) {
      case C.EditState.EDIT_DISPLAY_NAME:
        null === (e = z.current) || void 0 === e || e.focusDisplayName();
        break;
      case C.EditState.EDIT_USERNAME:
      case C.EditState.SUGGESTION:
        null === (t = z.current) || void 0 === t || t.focusUsername()
    }
  }, [b]);
  return !W && null == B && (b === C.EditState.EDIT_USERNAME ? t = p.default.Messages.POMELO_SUGGESTION_ORIGIN_NOTICE.format({
    source: Z.username
  }) : b === C.EditState.SUGGESTION && (q || null != Q) && (t = p.default.Messages.POMELO_SUGGESTIONS_OCF)), (0, s.jsxs)(d.ModalRoot, {
    className: v.modalRoot,
    impression: {
      impressionName: r.ImpressionNames.POMELO_LANDING,
      impressionProperties: {
        source: a,
        impression_group: r.ImpressionGroups.POMELO_FLOW,
        one_click_flow: y
      }
    },
    transitionState: i,
    size: d.ModalSize.DYNAMIC,
    children: [(0, s.jsx)(d.Button, {
      onClick: () => {
        K && (U === P.PomeloModalSlides.SUGGESTIONS || U === P.PomeloModalSlides.EDIT_SCREEN) ? D(P.PomeloModalSlides.FINISH_LATER) : A()
      },
      size: d.Button.Sizes.MIN,
      look: d.Button.Looks.BLANK,
      className: v.closeContainer,
      "aria-label": p.default.Messages.CLOSE,
      children: (0, s.jsx)(S.default, {
        width: 15,
        height: 15,
        className: v.close
      })
    }), (0, s.jsx)(d.ModalContent, {
      className: v.contentContainer,
      children: (0, s.jsxs)(d.Slides, {
        activeSlide: U,
        width: 480,
        children: [(0, s.jsx)(d.Slide, {
          id: P.PomeloModalSlides.INFO,
          children: (0, s.jsx)(x.default, {
            user: Z
          })
        }), (0, s.jsx)(d.Slide, {
          id: P.PomeloModalSlides.EDIT_SCREEN,
          children: (0, s.jsx)(O.default, {
            user: Z,
            error: B,
            editState: b,
            userRef: z,
            formValues: J,
            footerNotice: t,
            onChangeFormValue: ee,
            onFocusUsername: () => k(C.EditState.EDIT_USERNAME),
            onFocusDisplayName: () => k(C.EditState.EDIT_DISPLAY_NAME),
            onClose: A
          })
        }), (0, s.jsx)(d.Slide, {
          id: P.PomeloModalSlides.FINISH_LATER,
          children: (0, s.jsx)(L.default, {
            onClose: A
          })
        }), (0, s.jsx)(d.Slide, {
          id: P.PomeloModalSlides.SUGGESTIONS,
          children: (0, s.jsx)(O.default, {
            user: Z,
            error: B,
            editState: b,
            userRef: z,
            formValues: J,
            footerNotice: t,
            onChangeFormValue: ee,
            onFocusUsername: () => k(C.EditState.SUGGESTION),
            onFocusDisplayName: () => k(C.EditState.EDIT_DISPLAY_NAME),
            onClose: A,
            usernameSuggestionLoading: q,
            oneClickFlow: y
          })
        })]
      })
    }), eu]
  })
}
let j = (e, t, a, l, i) => 0 === e.length ? null : (0, s.jsxs)(d.ModalFooter, {
  className: v.footer,
  children: [(0, s.jsxs)("div", {
    className: v.inline,
    children: [e.includes("REMIND_ME_LATER") && (0, s.jsx)(d.Button, {
      className: v.unfilledButton,
      type: "button",
      size: d.Button.Sizes.SMALL,
      look: d.Button.Looks.BLANK,
      color: d.Button.Colors.CUSTOM,
      onClick: t.handleRemindMeLater,
      children: p.default.Messages.POMELO_EXISTING_FLOW_PROMPT_SKIP_CTA
    }), e.includes("NEXT") && (0, s.jsx)(d.Button, {
      type: "button",
      size: d.Button.Sizes.SMALL,
      submitting: a,
      onClick: t.handleNext,
      children: p.default.Messages.NEXT
    }), e.includes("SUBMIT") && (0, s.jsx)(d.Button, {
      type: "button",
      size: d.Button.Sizes.SMALL,
      submitting: a,
      onClick: t.handleNext,
      children: p.default.Messages.SUBMIT
    }), e.includes("GET_STARTED") && (0, s.jsx)(d.Button, {
      type: "button",
      size: d.Button.Sizes.SMALL,
      onClick: t.handleNext,
      children: p.default.Messages.GET_STARTED
    }), e.includes("GOT_IT") && (0, s.jsx)(d.Button, {
      type: "button",
      size: d.Button.Sizes.SMALL,
      onClick: t.onClose,
      children: p.default.Messages.GOT_IT
    }), e.includes("UPDATE") && (0, s.jsx)(d.Button, {
      type: "button",
      size: d.Button.Sizes.SMALL,
      disabled: l && !i,
      submitting: a,
      onClick: t.handleNext,
      children: p.default.Messages.UPDATE
    })]
  }), e.includes("BACK") && (0, s.jsx)(d.Button, {
    className: v.unfilledButton,
    type: "button",
    size: d.Button.Sizes.SMALL,
    look: d.Button.Looks.BLANK,
    color: d.Button.Colors.CUSTOM,
    onClick: t.handleBack,
    children: p.default.Messages.BACK
  })]
})