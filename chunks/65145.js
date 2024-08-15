n.d(t, {
  Pk: function() {
return d;
  },
  dv: function() {
return c;
  }
}), n(411104), n(47120);
var i, a, s = n(735250),
  r = n(470079),
  l = n(823379);
(a = i || (i = {})).POLL_ANSWERS = 'POLL_ANSWERS', a.ACTION_BUTTON = 'ACTION_BUTTON';
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
manageFocusOnAction: a
  } = e, l = r.useMemo(() => ({
actionButtonRef: n,
pollAnswerRef: i,
manageFocusOnAction: a
  }), [
n,
i,
a
  ]);
  return (0, s.jsx)(o.Provider, {
value: l,
children: t
  });
}

function d(e) {
  let {
children: t
  } = e, [n, i] = r.useState(), a = r.useRef(null), o = r.useRef(null);
  return r.useEffect(() => {
var e, t, i;
'POLL_ANSWERS' === n && null != o.current && (null === (t = o.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus()), 'ACTION_BUTTON' === n && null != a.current && (null === (i = a.current) || void 0 === i || i.focus());
  }, [n]), (0, s.jsx)(u, {
pollAnswerRef: o,
actionButtonRef: a,
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