"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
}), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
var l = a("884691"),
  n = a("418009"),
  s = a("162426"),
  r = a("314743"),
  o = a("172402"),
  i = a("914271"),
  u = a("847511"),
  d = a("562228"),
  c = a("491096"),
  E = a("782340");

function _(e, t, a) {
  let _ = e.id,
    m = l.useRef();
  null == m.current && (m.current = [(0, d.generateEmptyPollAnswer)(), (0, d.generateEmptyPollAnswer)()]);
  let [f, L] = l.useState(m.current), [R, C] = l.useState(""), [N, T] = l.useState(n.PollLayoutTypes.DEFAULT), [h, O] = l.useState(!1), [P, I] = l.useState(c.PollDurations.ONE_DAY), [g, x] = l.useState({}), [p, M] = l.useState(!1), v = f.filter(e => (0, d.isAnswerFilled)(e, N)), S = f.filter(e => (0, d.isIncompleteAnswer)(e, N)), j = R.length > 0 && v.length >= c.MIN_NUMBER_OF_ANSWERS_PER_POLL && 0 === S.length, [D, {
    error: b,
    loading: w
  }] = (0, s.default)(u.default.createPoll), U = f.length < c.MAX_NUMBER_OF_ANSWERS_PER_POLL, y = f.length > c.MIN_NUMBER_OF_ANSWERS_PER_POLL, k = l.useCallback(e => {
    x(e => {
      let t = {
        ...e
      };
      return delete t.question, t
    }), C(e)
  }, []), B = l.useCallback(e => {
    let {
      text: t,
      index: a,
      localCreationAnswerId: l
    } = e;
    x(e => {
      let t = {
        ...e
      };
      return delete t["answer-".concat(l)], t
    }), L(e => {
      let l = [...e];
      return l[a] = {
        ...l[a],
        text: t
      }, l
    })
  }, []), F = l.useCallback((e, t) => {
    L(a => {
      let l = [...a];
      return l[t] = {
        ...l[t],
        image: e
      }, l
    })
  }, []), H = l.useCallback((e, t, a) => {
    var l;
    let n = f[t],
      s = null === (l = n.image) || void 0 === l ? void 0 : l.mediaAttachmentState;
    null != s && s.mediaURL !== a && i.removePollUploadAttachment(e, n.localCreationAnswerId, (0, r.getFileNameFromGifUrl)(n.localCreationAnswerId, s.mediaURL))
  }, [f]), G = l.useCallback(async (e, t, a) => {
    let l = f[t].localCreationAnswerId;
    H(e, t), F(A(a, o.PollMediaUploadAttachmentStatus.PREPARING), t);
    let n = await i.handlePollGifAttachmentAdd(e, l, a);
    if (null == n) {
      F(A(a, o.PollMediaUploadAttachmentStatus.ERROR), t);
      return
    }
    F(A(a, o.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t)
  }, [f, F, H]), W = l.useCallback((e, t, a) => {
    let l = f[t].localCreationAnswerId,
      n = URL.createObjectURL(a);
    H(e, t), F(A(n, o.PollMediaUploadAttachmentStatus.PREPARING), t), i.handlePollMediaAttachmentAdd(e, l, a), F(A(n, o.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t)
  }, [f, F, H]), K = l.useCallback((e, t) => {
    H(_, t), F({
      emoji: e,
      stickerId: void 0,
      mediaAttachmentState: void 0
    }, t)
  }, [_, F, H]), Y = l.useCallback(e => {
    L(t => {
      let a = [...t];
      return a[e] = {
        ...a[e],
        image: void 0
      }, a
    })
  }, []), V = l.useCallback(() => {
    U && L(e => [...e, (0, d.generateEmptyPollAnswer)()])
  }, [U]), z = l.useCallback(e => {
    if (!y) return;
    let t = f.length;
    H(_, e), L(t => {
      let a = [...t];
      return a.splice(e, 1), a
    }), null == a || a({
      indexToRemove: e,
      numberOfAnswers: t
    })
  }, [f.length, y, _, a, H]);
  l.useEffect(() => () => {
    i.removeAllPollUploadAttachments(_)
  }, [_]);
  let X = l.useCallback(() => {
      let e = !0,
        t = {};
      0 === R.trim().length && (e = !1, t.question = E.default.Messages.CREATE_POLL_QUESTION_REQUIRED);
      let a = f.filter(e => (0, d.isAnswerFilled)(e, N));
      return a.length < c.MIN_NUMBER_OF_ANSWERS_PER_POLL && (e = !1, t["answer-".concat(f[0].localCreationAnswerId)] = E.default.Messages.CREATE_POLL_MINIMUM_ANSWERS_REQUIRED), f.forEach(a => {
        (0, d.isIncompleteAnswer)(a, N) && (e = !1, t["answer-".concat(a.localCreationAnswerId)] = E.default.Messages.CREATE_POLL_ANSWER_MUST_CONTAIN_TEXT)
      }), x(t), M(!e), e
    }, [f, R, N]),
    q = l.useCallback(async () => {
      await D({
        channel: e,
        question: R,
        answers: v,
        allowMultiSelect: h,
        duration: P,
        layout: N,
        onClose: t
      })
    }, [R, v, h, P, D, e, N, t]),
    J = l.useCallback(() => {
      X() && q()
    }, [q, X]);
  return {
    answers: f,
    question: R,
    setQuestion: C,
    selectedLayoutType: N,
    setSelectedLayoutType: T,
    allowMultiSelect: h,
    setAllowMultiSelect: O,
    duration: P,
    setDuration: I,
    canPost: j,
    canAddMoreAnswers: U,
    canRemoveMoreAnswers: y,
    handleQuestionChange: k,
    handleAnswerTextChange: B,
    handleGifSelect: G,
    handleEmojiSelect: K,
    handleCustomUpload: W,
    handleAddAnswer: V,
    handleRemoveAnswer: z,
    handleRemoveAnswerImage: Y,
    fieldErrors: g,
    createPoll: q,
    handleSubmitPoll: J,
    submitting: w,
    createPollError: b,
    shouldFocusOnInvalidField: p,
    setShouldFocusOnInvalidField: M
  }
}

function A(e, t) {
  return {
    mediaAttachmentState: {
      status: t,
      mediaURL: e
    },
    emoji: void 0,
    stickerId: void 0
  }
}