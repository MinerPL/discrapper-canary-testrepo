"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
}), a("47120");
var s = a("735250"),
  i = a("470079"),
  n = a("512722"),
  l = a.n(n),
  o = a("990547"),
  r = a("399606"),
  d = a("481060"),
  u = a("232567"),
  c = a("809206"),
  E = a("479531"),
  m = a("484459"),
  S = a("594174"),
  f = a("465670"),
  g = a("626135"),
  _ = a("51144"),
  T = a("986197"),
  I = a("135200"),
  O = a("346585"),
  h = a("347649"),
  N = a("361117"),
  M = a("108793"),
  L = a("635774"),
  P = a("387955"),
  x = a("801461"),
  R = a("448624"),
  C = a("981631"),
  v = a("689938"),
  p = a("583661");

function A(e) {
  let t, {
      source: a,
      transitionState: n,
      onClose: A,
      oneClickFlow: U = !1
    } = e,
    [G, b] = i.useState(U ? R.PomeloModalSlides.SUGGESTIONS : R.PomeloModalSlides.INFO),
    [D, j] = i.useState(!1),
    [k, F] = i.useState(null),
    [w, B] = i.useState(U ? x.EditState.SUGGESTION : x.EditState.NONE),
    [H, W] = i.useState(!1),
    [X, V] = i.useState(!1),
    z = i.useRef(null),
    Y = (0, r.useStateFromStores)([I.default], () => I.default.isCurrentUsernameInvalid()),
    K = (0, r.useStateFromStores)([S.default], () => {
      let e = S.default.getCurrentUser();
      return l()(null != e, "PomeloModal: user cannot be undefined"), e
    }),
    q = (0, h.useForceMigration)(),
    {
      usernameSuggestion: Z,
      usernameSuggestionLoading: Q
    } = (0, N.useUsernameSuggestion)(U ? x.TIMEOUT_TIME : void 0);
  i.useEffect(() => {
    w === x.EditState.EDIT_USERNAME && V(!0), g.default.track(C.AnalyticEvents.POMELO_EDIT_STEP_VIEWED, {
      source: a,
      step: w
    })
  }, [w, a]), i.useEffect(() => {
    !X && !H && null != Z && Z.length > 0 && J(e => ({
      ...e,
      username: Z
    }))
  }, [Z, X, H]);
  let [$, J] = i.useState({
    username: (0, O.getDefaultPomelo)(K),
    globalName: _.default.getName(K)
  }), ee = e => {
    F(null), null != e.username && W(!0), J(t => ({
      ...t,
      ...e
    }))
  }, et = i.useMemo(() => [{
    slideId: R.PomeloModalSlides.INFO,
    next: R.PomeloModalSlides.EDIT_SCREEN,
    footerButtons: ["REMIND_ME_LATER", "GET_STARTED"]
  }, {
    slideId: R.PomeloModalSlides.EDIT_SCREEN,
    next: R.PomeloModalSlides.FINISH_LATER,
    back: R.PomeloModalSlides.INFO,
    footerButtons: [w === x.EditState.PREVIEW ? "GOT_IT" : "BACK", w === x.EditState.PREVIEW ? "GOT_IT" : w === x.EditState.EDIT_USERNAME ? "SUBMIT" : "NEXT"]
  }, {
    slideId: R.PomeloModalSlides.FINISH_LATER,
    back: R.PomeloModalSlides.EDIT_SCREEN
  }, {
    slideId: R.PomeloModalSlides.SUGGESTIONS,
    footerButtons: [w === x.EditState.PREVIEW ? "GOT_IT" : "UPDATE"]
  }, {
    slideId: R.PomeloModalSlides.FINISH_LATER
  }], [w]), ea = et.length, es = i.useCallback(async () => {
    if ($.globalName.length <= 0) {
      let e = v.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
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
    if (_.default.getGlobalName(K) === $.globalName) {
      B(x.EditState.EDIT_USERNAME);
      return
    }
    try {
      F(null), j(!0), await (0, c.saveAccountRequest)({
        global_name: $.globalName
      }), B(x.EditState.EDIT_USERNAME)
    } catch (t) {
      let e = new E.default(t).getAnyErrorMessage();
      g.default.track(C.AnalyticEvents.POMELO_ERRORS, {
        reason: e,
        display_name_error: !0,
        location: "modal"
      }), F(e)
    } finally {
      j(!1)
    }
  }, [K, $]), ei = i.useCallback(async () => {
    try {
      F(null), j(!0), await T.default.createPomelo({
        username: (0, O.formatPomeloForEditing)($.username)
      }, U), await (0, u.fetchProfile)(K.id), B(x.EditState.PREVIEW)
    } catch (a) {
      let e = new E.default(a),
        t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : v.default.Messages.ERROR_GENERIC_TITLE;
      F(t), g.default.track(C.AnalyticEvents.POMELO_ERRORS, {
        reason: t,
        username_error: !0,
        location: "modal",
        one_click_flow: U
      })
    } finally {
      j(!1)
    }
  }, [$, K.id, U]), en = Y || (0, O.shouldSkipToEditUsername)(K), el = i.useCallback(() => {
    B(en ? x.EditState.EDIT_USERNAME : x.EditState.EDIT_DISPLAY_NAME), b(et[Math.min(ea - 1, G + 1)].slideId)
  }, [G, et, ea, en]), eo = i.useCallback(() => {
    F(null), G === R.PomeloModalSlides.EDIT_SCREEN ? w === x.EditState.EDIT_USERNAME ? en ? (B(x.EditState.NONE), b(et[Math.max(0, G - 1)].slideId)) : B(x.EditState.EDIT_DISPLAY_NAME) : w === x.EditState.EDIT_DISPLAY_NAME ? (B(x.EditState.NONE), b(et[Math.max(0, G - 1)].slideId)) : w === x.EditState.PREVIEW && B(x.EditState.EDIT_USERNAME) : b(et[Math.max(0, G - 1)].slideId)
  }, [et, G, w, en]), er = i.useCallback(() => {
    b(R.PomeloModalSlides.FINISH_LATER)
  }, []), ed = i.useCallback(() => {
    U ? (b(R.PomeloModalSlides.SUGGESTIONS), B(x.EditState.SUGGESTION)) : (b(R.PomeloModalSlides.INFO), B(x.EditState.NONE))
  }, [U]), eu = i.useMemo(() => {
    if (G === R.PomeloModalSlides.EDIT_SCREEN && w === x.EditState.EDIT_DISPLAY_NAME) return es;
    if (G === R.PomeloModalSlides.EDIT_SCREEN && w === x.EditState.EDIT_USERNAME) return ei;
    if (G === R.PomeloModalSlides.SUGGESTIONS && w === x.EditState.SUGGESTION) return ei;
    else return el
  }, [G, w, es, ei, el]), ec = i.useMemo(() => {
    var e, t;
    return y(null !== (t = null === (e = et.find(e => e.slideId === G)) || void 0 === e ? void 0 : e.footerButtons) && void 0 !== t ? t : [], {
      handleNext: eu,
      handleBack: eo,
      handleRemindMeLater: er,
      onClose: A
    }, D, Q, H)
  }, [eo, er, eu, A, et, G, D, Q, H]), eE = i.useMemo(() => (0, O.getUserAvatarURLForPomelo)(K), [K]);
  i.useLayoutEffect(() => {
    (0, m.default)(K.id, eE)
  }, [K, eE]), i.useEffect(() => {
    var e, t;
    switch (w) {
      case x.EditState.EDIT_DISPLAY_NAME:
        null === (e = z.current) || void 0 === e || e.focusDisplayName();
        break;
      case x.EditState.EDIT_USERNAME:
      case x.EditState.SUGGESTION:
        null === (t = z.current) || void 0 === t || t.focusUsername()
    }
  }, [w]);
  return !H && null == k && (w === x.EditState.EDIT_USERNAME ? t = v.default.Messages.POMELO_SUGGESTION_ORIGIN_NOTICE.format({
    source: K.username
  }) : w === x.EditState.SUGGESTION && (Q || null != Z) && (t = v.default.Messages.POMELO_SUGGESTIONS_OCF)), (0, s.jsxs)(d.ModalRoot, {
    className: p.modalRoot,
    impression: {
      impressionName: o.ImpressionNames.POMELO_LANDING,
      impressionProperties: {
        source: a,
        impression_group: o.ImpressionGroups.POMELO_FLOW,
        one_click_flow: U
      }
    },
    transitionState: n,
    size: d.ModalSize.DYNAMIC,
    children: [(0, s.jsx)(d.Button, {
      onClick: () => {
        q && (G === R.PomeloModalSlides.SUGGESTIONS || G === R.PomeloModalSlides.EDIT_SCREEN) ? b(R.PomeloModalSlides.FINISH_LATER) : A()
      },
      size: d.Button.Sizes.MIN,
      look: d.Button.Looks.BLANK,
      className: p.closeContainer,
      "aria-label": v.default.Messages.CLOSE,
      children: (0, s.jsx)(f.default, {
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
          id: R.PomeloModalSlides.INFO,
          children: (0, s.jsx)(P.default, {
            user: K
          })
        }), (0, s.jsx)(d.Slide, {
          id: R.PomeloModalSlides.EDIT_SCREEN,
          children: (0, s.jsx)(M.default, {
            user: K,
            error: k,
            editState: w,
            userRef: z,
            formValues: $,
            footerNotice: t,
            onChangeFormValue: ee,
            onFocusUsername: () => B(x.EditState.EDIT_USERNAME),
            onFocusDisplayName: () => B(x.EditState.EDIT_DISPLAY_NAME),
            onClose: A
          })
        }), (0, s.jsx)(d.Slide, {
          id: R.PomeloModalSlides.FINISH_LATER,
          children: (0, s.jsx)(L.default, {
            onClose: A,
            handleStartFlow: ed
          })
        }), (0, s.jsx)(d.Slide, {
          id: R.PomeloModalSlides.SUGGESTIONS,
          children: (0, s.jsx)(M.default, {
            user: K,
            error: k,
            editState: w,
            userRef: z,
            formValues: $,
            footerNotice: t,
            onChangeFormValue: ee,
            onFocusUsername: () => B(x.EditState.SUGGESTION),
            onFocusDisplayName: () => B(x.EditState.EDIT_DISPLAY_NAME),
            onClose: A,
            usernameSuggestionLoading: Q,
            oneClickFlow: U
          })
        })]
      })
    }), ec]
  })
}
let y = (e, t, a, i, n) => 0 === e.length ? null : (0, s.jsxs)(d.ModalFooter, {
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
      children: v.default.Messages.POMELO_EXISTING_FLOW_PROMPT_SKIP_CTA
    }), e.includes("NEXT") && (0, s.jsx)(d.Button, {
      type: "button",
      size: d.Button.Sizes.SMALL,
      submitting: a,
      onClick: t.handleNext,
      children: v.default.Messages.NEXT
    }), e.includes("SUBMIT") && (0, s.jsx)(d.Button, {
      type: "button",
      size: d.Button.Sizes.SMALL,
      submitting: a,
      onClick: t.handleNext,
      children: v.default.Messages.SUBMIT
    }), e.includes("GET_STARTED") && (0, s.jsx)(d.Button, {
      type: "button",
      size: d.Button.Sizes.SMALL,
      onClick: t.handleNext,
      children: v.default.Messages.GET_STARTED
    }), e.includes("GOT_IT") && (0, s.jsx)(d.Button, {
      type: "button",
      size: d.Button.Sizes.SMALL,
      onClick: t.onClose,
      children: v.default.Messages.GOT_IT
    }), e.includes("UPDATE") && (0, s.jsx)(d.Button, {
      type: "button",
      size: d.Button.Sizes.SMALL,
      disabled: i && !n,
      submitting: a,
      onClick: t.handleNext,
      children: v.default.Messages.UPDATE
    })]
  }), e.includes("BACK") && (0, s.jsx)(d.Button, {
    className: p.unfilledButton,
    type: "button",
    size: d.Button.Sizes.SMALL,
    look: d.Button.Looks.BLANK,
    color: d.Button.Colors.CUSTOM,
    onClick: t.handleBack,
    children: v.default.Messages.BACK
  })]
})