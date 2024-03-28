"use strict";
n.r(t), n.d(t, {
  PollFocusManager: function() {
    return c
  },
  usePollFocusManager: function() {
    return u
  }
}), n("411104"), n("47120");
var s, a, l = n("735250"),
  i = n("470079"),
  r = n("823379");
(a = s || (s = {})).POLL_ANSWERS = "POLL_ANSWERS", a.ACTION_BUTTON = "ACTION_BUTTON";
let o = i.createContext(void 0);

function u() {
  let e = i.useContext(o);
  if (null == e) throw Error("No PollFocusContextProvider found");
  return e
}

function d(e) {
  let {
    children: t,
    actionButtonRef: n,
    pollAnswerRef: s,
    manageFocusOnAction: a
  } = e, r = i.useMemo(() => ({
    actionButtonRef: n,
    pollAnswerRef: s,
    manageFocusOnAction: a
  }), [n, s, a]);
  return (0, l.jsx)(o.Provider, {
    value: r,
    children: t
  })
}

function c(e) {
  let {
    children: t
  } = e, [n, s] = i.useState(), a = i.useRef(null), o = i.useRef(null);
  return i.useEffect(() => {
    var e, t, s;
    "POLL_ANSWERS" === n && null != o.current && (null === (t = o.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus()), "ACTION_BUTTON" === n && null != a.current && (null === (s = a.current) || void 0 === s || s.focus())
  }, [n]), (0, l.jsx)(d, {
    pollAnswerRef: o,
    actionButtonRef: a,
    manageFocusOnAction: e => {
      switch (e) {
        case "submit":
        case "cancel":
          s("ACTION_BUTTON");
          break;
        case "remove":
        case "showVotes":
          s("POLL_ANSWERS");
          break;
        case "showVoterDetails":
          break;
        default:
          (0, r.assertNever)(e)
      }
    },
    children: t
  })
}