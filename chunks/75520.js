n.d(t, {
  n: function() {
return s;
  }
});
var r = n(182823),
  i = n(706682),
  a = n(612001);

function s(e, t) {
  let {
elementType: n = 'a',
onPress: s,
onPressStart: o,
onPressEnd: l,
onClick: u,
isDisabled: c,
...d
  } = e, _ = {};
  'a' !== n && (_ = {
role: 'link',
tabIndex: c ? void 0 : 0
  });
  let {
focusableProps: E
  } = (0, i.kc)(e, t), {
pressProps: f,
isPressed: h
  } = (0, a.r7)({
onPress: s,
onPressStart: o,
onPressEnd: l,
isDisabled: c,
ref: t
  }), p = (0, r.zL)(d, {
labelable: !0,
isLink: 'a' === n
  }), m = (0, r.dG)(E, f), I = (0, r.tv)();
  return {
isPressed: h,
linkProps: (0, r.dG)(p, {
  ...m,
  ..._,
  'aria-disabled': c || void 0,
  'aria-current': e['aria-current'],
  onClick: e => {
    var t;
    null === (t = f.onClick) || void 0 === t || t.call(f, e), u && (u(e), console.warn('onClick is deprecated, please use onPress')), !I.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && (0, r.b0)(e.currentTarget, e) && (e.preventDefault(), I.open(e.currentTarget, e));
  }
})
  };
}