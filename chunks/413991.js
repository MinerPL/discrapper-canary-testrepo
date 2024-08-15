l.d(n, {
  Z: function() {
return c;
  }
}), l(47120);
var t = l(735250),
  r = l(470079),
  i = l(481060),
  a = l(911969),
  u = l(970184),
  s = l(293979),
  o = l(203079);

function c(e) {
  let n;
  let {
type: l,
style: c,
label: d,
placeholder: m,
minLength: f,
maxLength: p,
required: E,
value: v
  } = e, [C, h] = r.useState(null != v ? v : ''), {
state: x,
executeStateUpdate: _,
error: N
  } = (0, u.Ee)(e, null != v ? {
type: l,
value: v
  } : void 0), T = (0, s.hz)(e.id);
  r.useEffect(() => {
(null == x ? void 0 : x.type) === l && h(x.value);
  }, [
l,
x
  ]);
  let I = {
name: d,
value: C,
placeholder: m,
minLength: f,
maxLength: p,
required: E,
onChange: e => {
  h(e), _({
    type: l,
    value: e
  });
},
autoFocus: T
  };
  switch (c) {
case a.FO.SMALL:
  n = (0, t.jsx)(i.TextInput, {
    ...I
  });
  break;
case a.FO.PARAGRAPH:
  n = (0, t.jsx)(i.TextArea, {
    ...I
  });
  }
  return (0, t.jsx)(i.FormItem, {
title: d,
required: E,
className: o.formItem,
error: N,
children: n
  });
}