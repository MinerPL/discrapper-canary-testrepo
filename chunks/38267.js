n.d(t, {
  Z: function() {
return l;
  }
}), n(47120);
var i = n(470079),
  s = n(585483),
  a = n(981631);

function r(e) {
  return Object.keys(e).some(t => e[t]);
}

function l(e, t) {
  let [n, l] = i.useState(t), [o, c] = i.useState(r(n)), u = i.useRef(o), d = i.useRef(null), _ = i.useCallback(e => {
l(t => {
  let n = {
      ...t,
      ...e
    },
    i = r(n);
  return i !== u.current && (u.current = i, null != d.current && (cancelAnimationFrame(d.current), d.current = null), i ? c(!0) : d.current = requestAnimationFrame(() => c(!1))), n;
});
  }, []);
  return i.useEffect(() => {
let t = e => {
  let {
    emojiPicker: t,
    emojiBurstPicker: n
  } = e;
  return _({
    emojiPicker: t,
    emojiBurstPicker: n
  });
};
return s.S.subscribeKeyed(a.LPv.TOGGLE_REACTION_POPOUT, e, t), () => void s.S.unsubscribeKeyed(a.LPv.TOGGLE_REACTION_POPOUT, e, t);
  }, [
e,
_
  ]), {
popouts: n,
setPopout: _,
selected: o
  };
}