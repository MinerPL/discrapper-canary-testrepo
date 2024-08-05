n.d(t, {
  Z: function() {
return N;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(512722),
  o = n.n(l),
  c = n(481060),
  d = n(194359),
  u = n(153124),
  _ = n(657682),
  h = n(981631),
  E = n(420212),
  I = n(689938),
  m = n(527915),
  g = n(549856);
let p = {
canSend: !1,
hint: null,
success: null,
error: null
  },
  T = (0, u.hQ)(),
  S = ''.concat(T, '-decription'),
  f = ''.concat(T, '-error');

function C(e, t) {
  switch (t.type) {
case 'RESET':
  return p;
case 'SUCCESS':
  return {
    ...p,
    success: t.text
  };
case 'HINT':
  return {
    ...p,
    canSend: !0,
      hint: t.text
  };
case 'ERROR':
  return {
    ...e,
    canSend: !0,
      error: t.text
  };
  }
}

function N() {
  let e = a.createRef(),
t = a.createRef(),
[n, s] = a.useReducer(C, p),
{
  canSend: l,
  hint: u,
  success: N,
  error: A
} = n;
  return a.useEffect(() => {
null != N && (o()(null != e.current, 'Input is submitting when not mounted'), e.current.value = '', e.current.focus());
  }, [
N,
e
  ]), (0, i.jsxs)('form', {
onSubmit: t => {
  t.preventDefault(), o()(null != e.current, 'Input is submitted when not mounted');
  let n = e.current.value.trim();
  !n.includes('#') && n.startsWith('@') && (n = n.substring(1));
  let i = (0, _.Zy)(n);
  if (null != i) {
    s({
      type: 'ERROR',
      text: i
    });
    return;
  }
  d.Z.sendRequest({
    discordTag: n,
    context: {
      location: 'Add Friend'
    }
  }).then(() => s({
    type: 'SUCCESS',
    text: I.Z.Messages.ADD_FRIEND_SUCCESS.format({
      discordTag: n
    })
  }), e => {
    var t;
    return s({
      type: 'ERROR',
      text: (0, _.NF)(null === (t = e.body) || void 0 === t ? void 0 : t.code, n)
    });
  });
},
autoComplete: 'off',
children: [
  (0, i.jsx)(c.FormText, {
    id: S,
    type: c.FormText.Types.DESCRIPTION,
    children: I.Z.Messages.POMELO_ADD_FRIEND_DESCRIPTION
  }),
  (0, i.jsx)(c.FocusRing, {
    focusTarget: e,
    ringTarget: t,
    ringClassName: m.ring,
    children: (0, i.jsxs)('div', {
      ref: t,
      className: r()(m.addFriendInputWrapper, {
        [m.success]: N,
        [m.error]: A
      }),
      children: [
        (0, i.jsx)(c.TextInput, {
          id: T,
          inputRef: e,
          className: m.addFriendInput,
          inputClassName: m.input,
          onKeyPress: t => {
            let n = t.currentTarget.value;
            if (t.key !== E.mR.Enter) {
              if (n.includes('#')) {
                o()(null != e.current, 'Input is handling keypress when not mounted');
                let i = n.indexOf('#'),
                  a = e.current.selectionStart,
                  s = t.key === E.mR.Backspace || t.key === E.mR.ArrowRight || t.key === E.mR.ArrowLeft,
                  r = t.which >= 48 && t.which <= 57;
                null != a && a > i && /^(.+?#\d{4})$/.test(n) && !s ? t.preventDefault() : null != a && a > i && !r && !s && t.preventDefault();
              }
            }
          },
          onChange: e => {
            if (e.length <= 0) {
              s({
                type: 'RESET'
              });
              return;
            }
            let t = '',
              [, n] = e.split('#');
            null != n && (t = e + h.LYt.slice(null != n ? n.length + 1 : 0)), s({
              type: 'HINT',
              text: t
            });
          },
          maxLength: 37,
          autoFocus: !0,
          autoComplete: 'off',
          name: 'add-friend',
          'data-form-type': 'other',
          'data-lpignore': !0,
          'data-1p-ignore': !0,
          placeholder: I.Z.Messages.POMELO_ADD_FRIEND_DESCRIPTION,
          'aria-label': I.Z.Messages.POMELO_ADD_FRIEND_DESCRIPTION,
          'aria-invalid': null != A || void 0,
          'aria-describedby': null != A ? f : S
        }),
        null != u && (0, i.jsx)('div', {
          className: m.addFriendHint,
          'aria-hidden': !0,
          children: u
        }),
        (0, i.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          disabled: !l,
          type: 'submit',
          children: I.Z.Messages.ADD_FRIEND_BUTTON
        })
      ]
    })
  }),
  null != A && (0, i.jsx)(c.FormText, {
    role: 'alert',
    id: f,
    type: c.FormText.Types.ERROR,
    className: g.marginTop8,
    children: A
  }),
  null != N && (0, i.jsx)(c.FormText, {
    role: 'status',
    type: c.FormText.Types.SUCCESS,
    className: g.marginTop8,
    children: N
  })
]
  });
}