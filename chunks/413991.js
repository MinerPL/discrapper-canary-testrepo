n.d(l, {
  Z: function() {
return d;
  }
}), n(47120);
var t = n(735250),
  i = n(470079),
  r = n(481060),
  a = n(911969),
  s = n(970184),
  u = n(293979),
  o = n(93248);

function d(e) {
  let l;
  let {
type: n,
style: d,
label: c,
placeholder: m,
minLength: p,
maxLength: f,
required: v,
value: E
  } = e, [N, h] = i.useState(null != E ? E : ''), {
state: C,
executeStateUpdate: I,
error: g
  } = (0, s.Ee)(e, null != E ? {
type: n,
value: E
  } : void 0), x = (0, u.hz)(e.id);
  i.useEffect(() => {
(null == C ? void 0 : C.type) === n && h(C.value);
  }, [
n,
C
  ]);
  let S = {
name: c,
value: N,
placeholder: m,
minLength: p,
maxLength: f,
required: v,
onChange: e => {
  h(e), I({
    type: n,
    value: e
  });
},
autoFocus: x
  };
  switch (d) {
case a.FO.SMALL:
  l = (0, t.jsx)(r.TextInput, {
    ...S
  });
  break;
case a.FO.PARAGRAPH:
  l = (0, t.jsx)(r.TextArea, {
    ...S
  });
  }
  return (0, t.jsx)(r.FormItem, {
title: c,
required: v,
className: o.formItem,
error: g,
children: l
  });
}