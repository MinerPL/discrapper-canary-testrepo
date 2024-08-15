n.d(t, {
  Z: function() {
return r;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(338545),
  l = n(481060);

function r(e) {
  let {
children: t,
className: n,
flashKey: r
  } = e, o = (0, l.useToken)(l.tokens.colors.BACKGROUND_MESSAGE_HIGHLIGHT).spring({
opacity: 1
  }), c = (0, l.useToken)(l.tokens.colors.BACKGROUND_MESSAGE_HIGHLIGHT).spring({
opacity: 0
  }), [u, d] = (0, l.useSpring)(() => ({
from: {
  backgroundColor: o
}
  }), 'animate-never');
  return a.useEffect(() => {
d({
  reset: !0,
  immediate: !0,
  to: {
    backgroundColor: o
  }
}), d({
  delay: 1000,
  immediate: !1,
  to: {
    backgroundColor: c
  }
});
  }, [
r,
d
  ]), (0, i.jsx)(s.animated.div, {
style: u,
className: n,
children: t
  });
}