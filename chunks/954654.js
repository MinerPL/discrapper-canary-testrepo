t.d(n, {
  ZP: function() {
return I;
  },
  xX: function() {
return x;
  }
});
var l = t(735250);
t(470079);
var r = t(120356),
  i = t.n(r),
  a = t(911969),
  o = t(970184),
  s = t(987106),
  c = t(927057),
  u = t(574597),
  d = t(378975),
  m = t(413991),
  f = t(12067),
  _ = t(676149),
  p = t(861529),
  v = t(770009),
  C = t(889515),
  h = t(800062);

function x(e) {
  return e.map((e, n) => function(e, n) {
switch (e.type) {
  case a.re.ACTION_ROW:
    return (0, l.jsx)(C.Z, {
      ...e,
      renderComponents: x
    }, n);
  case a.re.BUTTON:
    return (0, l.jsx)(s.Z, {
      ...e
    }, n);
  case a.re.STRING_SELECT:
    return (0, l.jsx)(d.Z, {
      ...e
    }, n);
  case a.re.CHANNEL_SELECT:
    return (0, l.jsx)(c.Z, {
      ...e
    }, n);
  case a.re.USER_SELECT:
  case a.re.ROLE_SELECT:
  case a.re.MENTIONABLE_SELECT:
    return (0, l.jsx)(u.Z, {
      ...e
    }, n);
  case a.re.INPUT_TEXT:
    return (0, l.jsx)(m.Z, {
      ...e
    }, n);
  case a.re.TEXT:
    return (0, l.jsx)(p.Z, {
      ...e
    }, n);
  case a.re.MEDIA_GALLERY:
    return (0, l.jsx)(f.Z, {
      ...e
    }, n);
  case a.re.SEPARATOR:
    return (0, l.jsx)(_.Z, {
      ...e
    }, n);
  case a.re.CONTENT_INVENTORY_ENTRY:
    return (0, l.jsx)(v.Z, {
      ...e
    }, n);
}
  }(e, n.toString()));
}

function I(e) {
  let {
message: n
  } = e, {
components: t
  } = n;
  return 0 === t.length ? null : (0, l.jsx)('div', {
className: i()([
  h.container,
  {
    [h.containerUikit]: n.isUIKitComponents()
  }
]),
children: (0, l.jsx)(o.Il, {
  message: n,
  children: x(t)
})
  });
}