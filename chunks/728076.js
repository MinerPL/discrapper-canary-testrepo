n.d(a, {
  Z: function() {
return m;
  }
}), n(47120), n(315314), n(610138), n(216116), n(78328), n(815648);
var t = n(470079),
  r = n(263568),
  l = n(935369),
  s = n(398805),
  o = n(524100),
  i = n(316758),
  c = n(203143),
  u = n(79390),
  d = n(489887),
  _ = n(689938);

function m(e, a, n) {
  let m = e.id,
A = t.useRef();
  null == A.current && (A.current = [
(0, u.Uu)(),
(0, u.Uu)()
  ]);
  let [f, C] = t.useState(A.current), [L, h] = t.useState(''), [R, I] = t.useState(r.C.DEFAULT), [x, p] = t.useState(!1), [O, g] = t.useState(d.lc.ONE_DAY), [T, N] = t.useState({}), [P, v] = t.useState(!1), j = f.filter(e => (0, u.cS)(e, R)), D = f.filter(e => (0, u.uY)(e, R)), M = L.length > 0 && j.length >= d.gY && 0 === D.length, [w, {
error: S,
loading: b
  }] = (0, l.Z)(c.Z.createPoll), k = f.length < d.fw, Z = f.length > d.gY, y = t.useCallback(e => {
N(e => {
  let a = {
    ...e
  };
  return delete a.question, a;
}), h(e);
  }, []), B = t.useCallback(e => {
let {
  text: a,
  index: n,
  localCreationAnswerId: t
} = e;
N(e => {
  let a = {
    ...e
  };
  return delete a['answer-'.concat(t)], a;
}), C(e => {
  let t = [...e];
  return t[n] = {
    ...t[n],
    text: a
  }, t;
});
  }, []), U = t.useCallback((e, a) => {
C(n => {
  let t = [...n];
  return t[a] = {
    ...t[a],
    image: e
  }, t;
});
  }, []), W = t.useCallback((e, a, n) => {
var t;
let r = f[a],
  l = null === (t = r.image) || void 0 === t ? void 0 : t.mediaAttachmentState;
null != l && l.mediaURL !== n && i.P(e, r.localCreationAnswerId, (0, s.Yk)(r.localCreationAnswerId, l.mediaURL));
  }, [f]), H = t.useCallback(async (e, a, n) => {
let t = f[a].localCreationAnswerId;
if (W(e, a), U(E(n, o._.PREPARING), a), null == await i.IV(e, t, n)) {
  U(E(n, o._.ERROR), a);
  return;
}
U(E(n, o._.READY_TO_UPLOAD), a);
  }, [
f,
U,
W
  ]), Y = t.useCallback((e, a, n) => {
let t = f[a].localCreationAnswerId,
  r = URL.createObjectURL(n);
W(e, a), U(E(r, o._.PREPARING), a), i.fH(e, t, n), U(E(r, o._.READY_TO_UPLOAD), a);
  }, [
f,
U,
W
  ]), F = t.useCallback((e, a) => {
W(m, a), U({
  emoji: e,
  stickerId: void 0,
  mediaAttachmentState: void 0
}, a);
  }, [
m,
U,
W
  ]), G = t.useCallback(e => {
C(a => {
  let n = [...a];
  return n[e] = {
    ...n[e],
    image: void 0
  }, n;
});
  }, []), z = t.useCallback(() => {
if (!!k)
  C(e => [
    ...e,
    (0, u.Uu)()
  ]);
  }, [k]), K = t.useCallback(e => {
if (!Z)
  return;
let a = f.length;
W(m, e), C(a => {
  let n = [...a];
  return n.splice(e, 1), n;
}), null == n || n({
  indexToRemove: e,
  numberOfAnswers: a
});
  }, [
f.length,
Z,
m,
n,
W
  ]);
  t.useEffect(() => () => {
i.xt(m);
  }, [m]);
  let V = t.useCallback(() => {
  let e = !0,
    a = {};
  return 0 === L.trim().length && (e = !1, a.question = _.Z.Messages.CREATE_POLL_QUESTION_REQUIRED), f.filter(e => (0, u.cS)(e, R)).length < d.gY && (e = !1, a['answer-'.concat(f[0].localCreationAnswerId)] = _.Z.Messages.CREATE_POLL_MINIMUM_ANSWERS_REQUIRED), f.forEach(n => {
    (0, u.uY)(n, R) && (e = !1, a['answer-'.concat(n.localCreationAnswerId)] = _.Z.Messages.CREATE_POLL_ANSWER_MUST_CONTAIN_TEXT);
  }), N(a), v(!e), e;
}, [
  f,
  L,
  R
]),
J = t.useCallback(async () => {
  await w({
    channel: e,
    question: L,
    answers: j,
    allowMultiSelect: x,
    duration: O,
    layout: R,
    onClose: a
  });
}, [
  L,
  j,
  x,
  O,
  w,
  e,
  R,
  a
]),
q = t.useCallback(() => {
  V() && J();
}, [
  J,
  V
]);
  return {
answers: f,
question: L,
setQuestion: h,
selectedLayoutType: R,
setSelectedLayoutType: I,
allowMultiSelect: x,
setAllowMultiSelect: p,
duration: O,
setDuration: g,
canPost: M,
canAddMoreAnswers: k,
canRemoveMoreAnswers: Z,
handleQuestionChange: y,
handleAnswerTextChange: B,
handleGifSelect: H,
handleEmojiSelect: F,
handleCustomUpload: Y,
handleAddAnswer: z,
handleRemoveAnswer: K,
handleRemoveAnswerImage: G,
fieldErrors: T,
createPoll: J,
handleSubmitPoll: q,
submitting: b,
createPollError: S,
shouldFocusOnInvalidField: P,
setShouldFocusOnInvalidField: v
  };
}

function E(e, a) {
  return {
mediaAttachmentState: {
  status: a,
  mediaURL: e
},
emoji: void 0,
stickerId: void 0
  };
}