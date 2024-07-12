n.d(t, {
  N: function() {
return i;
  },
  U: function() {
return a;
  }
});
var r = n(182823);

function i(e) {
  let {
id: t,
label: n,
'aria-labelledby': i,
'aria-label': a,
labelElementType: o = 'label'
  } = e;
  t = (0, r.Me)(t);
  let s = (0, r.Me)(),
l = {};
  return n ? (i = i ? `${ s } ${ i }` : s, l = {
id: s,
htmlFor: 'label' === o ? t : void 0
  }) : !i && !a && console.warn('If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility'), {
labelProps: l,
fieldProps: (0, r.bE)({
  id: t,
  'aria-label': a,
  'aria-labelledby': i
})
  };
}

function a(e) {
  let {
description: t,
errorMessage: n,
isInvalid: a,
validationState: o
  } = e, {
labelProps: s,
fieldProps: l
  } = i(e), u = (0, r.mp)([
!!t,
!!n,
a,
o
  ]), c = (0, r.mp)([
!!t,
!!n,
a,
o
  ]);
  return {
labelProps: s,
fieldProps: l = (0, r.dG)(l, {
  'aria-describedby': [
    u,
    c,
    e['aria-describedby']
  ].filter(Boolean).join(' ') || void 0
}),
descriptionProps: {
  id: u
},
errorMessageProps: {
  id: c
}
  };
}