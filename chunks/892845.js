"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
}), a("222007");
var s = a("37983"),
  n = a("884691"),
  i = a("627445"),
  l = a.n(i),
  r = a("759843"),
  o = a("65597"),
  d = a("77078"),
  u = a("327037"),
  c = a("152584"),
  E = a("599417"),
  m = a("506885"),
  f = a("697218"),
  S = a("945330"),
  g = a("599110"),
  _ = a("158998"),
  T = a("255403"),
  I = a("2581"),
  h = a("415133"),
  O = a("42060"),
  N = a("22658"),
  M = a("998957"),
  L = a("426149"),
  R = a("767282"),
  P = a("935583"),
  v = a("15881"),
  C = a("49111"),
  x = a("782340"),
  p = a("197920");

function A(e) {
  let t, {
      source: a,
      transitionState: i,
      onClose: A,
      oneClickFlow: U = !1
    } = e,
    [G, D] = n.useState(U ? v.PomeloModalSlides.SUGGESTIONS : v.PomeloModalSlides.INFO),
    [b, j] = n.useState(!1),
    [k, F] = n.useState(null),
    [w, B] = n.useState(U ? P.EditState.SUGGESTION : P.EditState.NONE),
    [H, V] = n.useState(!1),
    [W, X] = n.useState(!1),
    z = n.useRef(null),
    Y = (0, o.useStateFromStores)([I.default], () => I.default.isCurrentUsernameInvalid()),
    Z = (0, o.useStateFromStores)([f.default], () => {
      let e = f.default.getCurrentUser();
      return l(null != e, "PomeloModal: user cannot be undefined"), e
    }),
    q = (0, O.useForceMigration)(),
    {
      usernameSuggestion: K,
      usernameSuggestionLoading: Q
    } = (0, N.useUsernameSuggestion)(U ? P.TIMEOUT_TIME : void 0);
  n.useEffect(() => {
    w === P.EditState.EDIT_USERNAME && X(!0), g.default.track(C.AnalyticEvents.POMELO_EDIT_STEP_VIEWED, {
      source: a,
      step: w
    })
  }, [w, a]), n.useEffect(() => {
    !W && !H && null != K && K.length > 0 && J(e => ({
      ...e,
      username: K
    }))
  }, [K, W, H]);
  let [$, J] = n.useState({
    username: (0, h.getDefaultPomelo)(Z),
    globalName: _.default.getName(Z)
  }), ee = e => {
    F(null), null != e.username && V(!0), J(t => ({
      ...t,
      ...e
    }))
  }, et = n.useMemo(() => [{
    slideId: v.PomeloModalSlides.INFO,
    next: v.PomeloModalSlides.EDIT_SCREEN,
    footerButtons: ["REMIND_ME_LATER", "GET_STARTED"]
  }, {
    slideId: v.PomeloModalSlides.EDIT_SCREEN,
    next: v.PomeloModalSlides.FINISH_LATER,
    back: v.PomeloModalSlides.INFO,
    footerButtons: [w === P.EditState.PREVIEW ? "GOT_IT" : "BACK", w === P.EditState.PREVIEW ? "GOT_IT" : w === P.EditState.EDIT_USERNAME ? "SUBMIT" : "NEXT"]
  }, {
    slideId: v.PomeloModalSlides.FINISH_LATER,
    back: v.PomeloModalSlides.EDIT_SCREEN
  }, {
    slideId: v.PomeloModalSlides.SUGGESTIONS,
    footerButtons: [w === P.EditState.PREVIEW ? "GOT_IT" : "UPDATE"]
  }, {
    slideId: v.PomeloModalSlides.FINISH_LATER
  }], [w]), ea = et.length, es = n.useCallback(async () => {
    if ($.globalName.length <= 0) {
      let e = x.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
        minNum: 1,
        maxNum: 32
      });
      F(e), g.default.track(C.AnalyticEvents.POMELO_ERRORS, {
        reason: e,
        display_name_error: !0,
        location: "modal"
      });
      return
    }
    if (_.default.getGlobalName(Z) === $.globalName) {
      B(P.EditState.EDIT_USERNAME);
      return
    }
    try {
      F(null), j(!0), await (0, c.saveAccountRequest)({
        global_name: $.globalName
      }), B(P.EditState.EDIT_USERNAME)
    } catch (a) {
      let e = new E.default(a),
        t = e.getAnyErrorMessage();
      g.default.track(C.AnalyticEvents.POMELO_ERRORS, {
        reason: t,
        display_name_error: !0,
        location: "modal"
      }), F(t)
    } finally {
      j(!1)
    }
  }, [Z, $]), en = n.useCallback(async () => {
    try {
      F(null), j(!0), await T.default.createPomelo({
        username: (0, h.formatPomeloForEditing)($.username)
      }, U), await (0, u.fetchProfile)(Z.id), B(P.EditState.PREVIEW)
    } catch (a) {
      let e = new E.default(a),
        t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : x.default.Messages.ERROR_GENERIC_TITLE;
      F(t), g.default.track(C.AnalyticEvents.POMELO_ERRORS, {
        reason: t,
        username_error: !0,
        location: "modal",
        one_click_flow: U
      })
    } finally {
      j(!1)
    }
  }, [$, Z.id, U]), ei = Y || (0, h.shouldSkipToEditUsername)(Z), el = n.useCallback(() => {
    B(ei ? P.EditState.EDIT_USERNAME : P.EditState.EDIT_DISPLAY_NAME), D(et[Math.min(ea - 1, G + 1)].slideId)
  }, [G, et, ea, ei]), er = n.useCallback(() => {
    F(null), G === v.PomeloModalSlides.EDIT_SCREEN ? w === P.EditState.EDIT_USERNAME ? ei ? (B(P.EditState.NONE), D(et[Math.max(0, G - 1)].slideId)) : B(P.EditState.EDIT_DISPLAY_NAME) : w === P.EditState.EDIT_DISPLAY_NAME ? (B(P.EditState.NONE), D(et[Math.max(0, G - 1)].slideId)) : w === P.EditState.PREVIEW && B(P.EditState.EDIT_USERNAME) : D(et[Math.max(0, G - 1)].slideId)
  }, [et, G, w, ei]), eo = n.useCallback(() => {
    D(v.PomeloModalSlides.FINISH_LATER)
  }, []), ed = n.useCallback(() => {
    U ? (D(v.PomeloModalSlides.SUGGESTIONS), B(P.EditState.SUGGESTION)) : (D(v.PomeloModalSlides.INFO), B(P.EditState.NONE))
  }, [U]), eu = n.useMemo(() => {
    if (G === v.PomeloModalSlides.EDIT_SCREEN && w === P.EditState.EDIT_DISPLAY_NAME) return es;
    if (G === v.PomeloModalSlides.EDIT_SCREEN && w === P.EditState.EDIT_USERNAME) return en;
    if (G === v.PomeloModalSlides.SUGGESTIONS && w === P.EditState.SUGGESTION) return en;
    else return el
  }, [G, w, es, en, el]), ec = n.useMemo(() => {
    var e, t;
    return y(null !== (t = null === (e = et.find(e => e.slideId === G)) || void 0 === e ? void 0 : e.footerButtons) && void 0 !== t ? t : [], {
      handleNext: eu,
      handleBack: er,
      handleRemindMeLater: eo,
      onClose: A
    }, b, Q, H)
  }, [er, eo, eu, A, et, G, b, Q, H]), eE = n.useMemo(() => (0, h.getUserAvatarURLForPomelo)(Z), [Z]);
  n.useLayoutEffect(() => {
    (0, m.default)(Z.id, eE)
  }, [Z, eE]), n.useEffect(() => {
    var e, t;
    switch (w) {
      case P.EditState.EDIT_DISPLAY_NAME:
        null === (e = z.current) || void 0 === e || e.focusDisplayName();
        break;
      case P.EditState.EDIT_USERNAME:
      case P.EditState.SUGGESTION:
        null === (t = z.current) || void 0 === t || t.focusUsername()
    }
  }, [w]);
  return !H && null == k && (w === P.EditState.EDIT_USERNAME ? t = x.default.Messages.POMELO_SUGGESTION_ORIGIN_NOTICE.format({
    source: Z.username
  }) : w === P.EditState.SUGGESTION && (Q || null != K) && (t = x.default.Messages.POMELO_SUGGESTIONS_OCF)), (0, s.jsxs)(d.ModalRoot, {
    className: p.modalRoot,
    impression: {
      impressionName: r.ImpressionNames.POMELO_LANDING,
      impressionProperties: {
        source: a,
        impression_group: r.ImpressionGroups.POMELO_FLOW,
        one_click_flow: U
      }
    },
    transitionState: i,
    size: d.ModalSize.DYNAMIC,
    children: [(0, s.jsx)(d.Button, {
      onClick: () => {
        q && (G === v.PomeloModalSlides.SUGGESTIONS || G === v.PomeloModalSlides.EDIT_SCREEN) ? D(v.PomeloModalSlides.FINISH_LATER) : A()
      },
      size: d.Button.Sizes.MIN,
      look: d.Button.Looks.BLANK,
      className: p.closeContainer,
      "aria-label": x.default.Messages.CLOSE,
      children: (0, s.jsx)(S.default, {
        width: 15,
        height: 15,
        className: p.close
      })
    }), (0, s.jsx)(d.ModalContent, {
      className: p.contentContainer,
      children: (0, s.jsxs)(d.Slides, {
        activeSlide: G,
        width: 480,
        children: [(0, s.jsx)(d.Slide, {
          id: v.PomeloModalSlides.INFO,
          children: (0, s.jsx)(R.default, {
            user: Z
          })
        }), (0, s.jsx)(d.Slide, {
          id: v.PomeloModalSlides.EDIT_SCREEN,
          children: (0, s.jsx)(M.default, {
            user: Z,
            error: k,
            editState: w,
            userRef: z,
            formValues: $,
            footerNotice: t,
            onChangeFormValue: ee,
            onFocusUsername: () => B(P.EditState.EDIT_USERNAME),
            onFocusDisplayName: () => B(P.EditState.EDIT_DISPLAY_NAME),
            onClose: A
          })
        }), (0, s.jsx)(d.Slide, {
          id: v.PomeloModalSlides.FINISH_LATER,
          children: (0, s.jsx)(L.default, {
            onClose: A,
            handleStartFlow: ed
          })
        }), (0, s.jsx)(d.Slide, {
          id: v.PomeloModalSlides.SUGGESTIONS,
          children: (0, s.jsx)(M.default, {
            user: Z,
            error: k,
            editState: w,
            userRef: z,
            formValues: $,
            footerNotice: t,
            onChangeFormValue: ee,
            onFocusUsername: () => B(P.EditState.SUGGESTION),
            onFocusDisplayName: () => B(P.EditState.EDIT_DISPLAY_NAME),
            onClose: A,
            usernameSuggestionLoading: Q,
            oneClickFlow: U
          })
        })]
      })
    }), ec]
  })
}
let y = (e, t, a, n, i) => 0 === e.length ? null : (0, s.jsxs)(d.ModalFooter, {
  className: p.footer,
  children: [(0, s.jsxs)("div", {
    className: p.inline,
    children: [e.includes("REMIND_ME_LATER") && (0, s.jsx)(d.Button, {
      className: p.unfilledButton,
      type: "button",
      size: d.Button.Sizes.SMALL,
      look: d.Button.Looks.BLANK,
      color: d.Button.Colors.CUSTOM,
      onClick: t.handleRemindMeLater,
      children: x.default.Messages.POMELO_EXISTING_FLOW_PROMPT_SKIP_CTA
    }), e.includes("NEXT") && (0, s.jsx)(d.Button, {
      type: "button",
      size: d.Button.Sizes.SMALL,
      submitting: a,
      onClick: t.handleNext,
      children: x.default.Messages.NEXT
    }), e.includes("SUBMIT") && (0, s.jsx)(d.Button, {
      type: "button",
      size: d.Button.Sizes.SMALL,
      submitting: a,
      onClick: t.handleNext,
      children: x.default.Messages.SUBMIT
    }), e.includes("GET_STARTED") && (0, s.jsx)(d.Button, {
      type: "button",
      size: d.Button.Sizes.SMALL,
      onClick: t.handleNext,
      children: x.default.Messages.GET_STARTED
    }), e.includes("GOT_IT") && (0, s.jsx)(d.Button, {
      type: "button",
      size: d.Button.Sizes.SMALL,
      onClick: t.onClose,
      children: x.default.Messages.GOT_IT
    }), e.includes("UPDATE") && (0, s.jsx)(d.Button, {
      type: "button",
      size: d.Button.Sizes.SMALL,
      disabled: n && !i,
      submitting: a,
      onClick: t.handleNext,
      children: x.default.Messages.UPDATE
    })]
  }), e.includes("BACK") && (0, s.jsx)(d.Button, {
    className: p.unfilledButton,
    type: "button",
    size: d.Button.Sizes.SMALL,
    look: d.Button.Looks.BLANK,
    color: d.Button.Colors.CUSTOM,
    onClick: t.handleBack,
    children: x.default.Messages.BACK
  })]
})