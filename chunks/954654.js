n.d(l, {
  ZP: function() {
return C;
  },
  xX: function() {
return h;
  }
});
var t = n(735250);
n(470079);
var i = n(120356),
  r = n.n(i),
  a = n(911969),
  s = n(970184),
  u = n(987106),
  o = n(927057),
  d = n(574597),
  c = n(378975),
  m = n(413991),
  p = n(12067),
  f = n(676149),
  v = n(861529),
  E = n(889515),
  N = n(800062);

function h(e) {
  return e.map((e, l) => function(e, l) {
switch (e.type) {
  case a.re.ACTION_ROW:
    return (0, t.jsx)(E.Z, {
      ...e,
      renderComponents: h
    }, l);
  case a.re.BUTTON:
    return (0, t.jsx)(u.Z, {
      ...e
    }, l);
  case a.re.STRING_SELECT:
    return (0, t.jsx)(c.Z, {
      ...e
    }, l);
  case a.re.CHANNEL_SELECT:
    return (0, t.jsx)(o.Z, {
      ...e
    }, l);
  case a.re.USER_SELECT:
  case a.re.ROLE_SELECT:
  case a.re.MENTIONABLE_SELECT:
    return (0, t.jsx)(d.Z, {
      ...e
    }, l);
  case a.re.INPUT_TEXT:
    return (0, t.jsx)(m.Z, {
      ...e
    }, l);
  case a.re.TEXT:
    return (0, t.jsx)(v.Z, {
      ...e
    }, l);
  case a.re.MEDIA_GALLERY:
    return (0, t.jsx)(p.Z, {
      ...e
    }, l);
  case a.re.SEPARATOR:
    return (0, t.jsx)(f.Z, {
      ...e
    }, l);
}
  }(e, l.toString()));
}

function C(e) {
  let {
message: l
  } = e, {
components: n
  } = l;
  return 0 === n.length ? null : (0, t.jsx)('div', {
className: r()([
  N.container,
  {
    [N.containerUikit]: l.isUIKitComponents()
  }
]),
children: (0, t.jsx)(s.Il, {
  message: l,
  children: h(n)
})
  });
}