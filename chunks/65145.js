n.d(t, {
  Pk: function() {
return d;
  },
  dv: function() {
return c;
  }
}), n(411104), n(47120);
var i, s, a = n(735250),
  r = n(470079),
  l = n(823379);
(s = i || (i = {})).POLL_ANSWERS = 'POLL_ANSWERS', s.ACTION_BUTTON = 'ACTION_BUTTON';
let o = r.createContext(void 0);

function c() {
  let e = r.useContext(o);
  if (null == e)
throw Error('No PollFocusContextProvider found');
  return e;
}

function u(e) {
  let {
children: t,
actionButtonRef: n,
pollAnswerRef: i,
manageFocusOnAction: s
  } = e, l = r.useMemo(() => ({
actionButtonRef: n,
pollAnswerRef: i,
manageFocusOnAction: s
  }), [
n,
i,
s
  ]);
  return (0, a.jsx)(o.Provider, {
value: l,
children: t
  });
}

function d(e) {
  let {
children: t
  } = e, [n, i] = r.useState(), s = r.useRef(null), o = r.useRef(null);
  return r.useEffect(() => {
var e, t, i;
'POLL_ANSWERS' === n && null != o.current && (null === (t = o.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus()), 'ACTION_BUTTON' === n && null != s.current && (null === (i = s.current) || void 0 === i || i.focus());
  }, [n]), (0, a.jsx)(u, {
pollAnswerRef: o,
actionButtonRef: s,
manageFocusOnAction: e => {
  switch (e) {
    case 'submit':
    case 'cancel':
      i('ACTION_BUTTON');
      break;
    case 'remove':
    case 'showVotes':
      i('POLL_ANSWERS');
      break;
    case 'showVoterDetails':
      break;
    default:
      (0, l.vE)(e);
  }
},
children: t
  });
}