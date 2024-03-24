"use strict";
n.r(t), n.d(t, {
  usePollFocusManager: function() {
    return u
  },
  PollFocusManager: function() {
    return c
  }
}), n("70102"), n("222007");
var s, l, a = n("37983"),
  i = n("884691"),
  r = n("449008");
(l = s || (s = {})).POLL_ANSWERS = "POLL_ANSWERS", l.ACTION_BUTTON = "ACTION_BUTTON";
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
    manageFocusOnAction: l
  } = e, r = i.useMemo(() => ({
    actionButtonRef: n,
    pollAnswerRef: s,
    manageFocusOnAction: l
  }), [n, s, l]);
  return (0, a.jsx)(o.Provider, {
    value: r,
    children: t
  })
}

function c(e) {
  let {
    children: t
  } = e, [n, s] = i.useState(), l = i.useRef(null), o = i.useRef(null);
  return i.useEffect(() => {
    var e, t, s;
    "POLL_ANSWERS" === n && null != o.current && (null === (t = o.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus()), "ACTION_BUTTON" === n && null != l.current && (null === (s = l.current) || void 0 === s || s.focus())
  }, [n]), (0, a.jsx)(d, {
    pollAnswerRef: o,
    actionButtonRef: l,
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