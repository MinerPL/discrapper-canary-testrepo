r.d(n, {
  Z: function() {
return p;
  }
}), r(47120);
var t = r(735250),
  o = r(470079),
  a = r(658722),
  l = r.n(a),
  i = r(692547),
  s = r(481060),
  c = r(596454),
  u = r(987134),
  d = r(689938),
  m = r(415140);

function h(e) {
  return null != e && (null != e.id || null != e.name);
}
let v = {
  ...u.v,
  control: (e, n) => {
let {
  isDisabled: r,
  menuIsOpen: t
} = n;
return {
  ...e,
  backgroundColor: 'var(--input-background)',
  borderColor: 'var(--input-background)',
  opacity: r ? 0.6 : 1,
  boxShadow: void 0,
  borderRadius: t ? '8px 8px 0 0' : '8px',
  minHeight: 40,
  transition: 'border 0.15s ease',
  cursor: r ? 'not-allowed' : void 0,
  pointerEvents: r ? 'none' : void 0,
  '&:hover': {
    borderColor: 'var(--input-background)'
  }
};
  },
  valueContainer: e => ({
...e,
padding: '8px',
display: 'flex',
flexDirection: 'row',
gap: '8px',
cursor: 'text'
  }),
  indicatorsContainer: e => ({
...e,
alignItems: 'flex-start',
paddingTop: 4
  }),
  option: (e, n) => {
let {
  isSelected: r,
  isFocused: t
} = n;
return {
  ...e,
  ...r ? {
    backgroundColor: 'var(--background-modifier-selected)',
    color: 'var(--interactive-active)'
  } : t ? {
    backgroundColor: 'var(--background-modifier-hover)',
    color: 'var(--interactive-hover)'
  } : {
    backgroundColor: 'transparent',
    color: 'var(--interactive-normal)'
  },
  cursor: 'pointer',
  display: 'flex',
  padding: 12,
  alignItems: 'center',
  minHeight: 40,
  '&:active': {
    backgroundColor: 'var(--background-modifier-selected)',
    color: 'var(--interactive-active)'
  },
  '&:hover [data-hover=true]': {
    opacity: 1
  }
};
  }
};

function p(e) {
  let {
options: n,
value: r,
onChange: a,
canBeNew: p,
memberCounts: g
  } = e, x = e => {
e.preventDefault(), e.stopPropagation();
  }, f = o.useCallback(e => {
var o, l, i, u;
return (0, t.jsxs)('div', {
  className: m.selectValuePill,
  onMouseDown: x,
  children: [
    h(e.emoji) && (0, t.jsx)(c.Z, {
      emojiId: null === (o = e.emoji) || void 0 === o ? void 0 : o.id,
      emojiName: null === (l = e.emoji) || void 0 === l ? void 0 : l.name,
      animated: null !== (u = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== u && u
    }),
    (0, t.jsx)(s.Text, {
      variant: 'text-sm/normal',
      children: e.title
    }),
    (0, t.jsx)(s.Clickable, {
      className: m.selectValuePillClose,
      onClick: () => {
        a(n.filter(n => r.includes(n.id) && n.id !== e.id));
      },
      children: (0, t.jsx)(s.CloseSmallIcon, {
        size: 'md',
        color: 'currentColor',
        className: m.selectValuePillCloseIcon
      })
    })
  ]
});
  }, [
a,
n,
r
  ]), C = o.useCallback(e => {
var n, r, o, a;
let l = null == g || null == e.roleIds ? 0 : Math.max(...e.roleIds.map(e => g[e])),
  u = null != g && l > 0;
return (0, t.jsxs)('div', {
  className: m.selectOption,
  children: [
    (0, t.jsxs)('div', {
      className: m.selectOptionTitle,
      children: [
        h(e.emoji) && (0, t.jsx)(c.Z, {
          emojiId: null === (n = e.emoji) || void 0 === n ? void 0 : n.id,
          emojiName: null === (r = e.emoji) || void 0 === r ? void 0 : r.name,
          animated: null !== (a = null === (o = e.emoji) || void 0 === o ? void 0 : o.animated) && void 0 !== a && a
        }),
        (0, t.jsx)(s.Text, {
          variant: 'text-sm/normal',
          children: e.title
        })
      ]
    }),
    p && e.isUnseen && (0, t.jsx)(s.TextBadge, {
      color: i.Z.unsafe_rawColors.BRAND_260.css,
      text: d.Z.Messages.NEW,
      className: m.optionNewBadge
    }),
    u && (0, t.jsx)('div', {
      className: m.selectOptionMemberCount,
      'data-hover': !0,
      children: (0, t.jsx)(s.Text, {
        variant: 'text-xs/normal',
        color: 'always-white',
        children: d.Z.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({
          memberCount: l
        })
      })
    })
  ]
});
  }, [
p,
g
  ]), b = o.useCallback((e, n) => {
let {
  data: r
} = e;
return 0 === n.length || l()(n.toLowerCase(), r.title.toLowerCase());
  }, []);
  return (0, t.jsx)(u.Z, {
styleOverrides: v,
clearable: !1,
isMulti: !0,
options: n,
onChange: a,
value: r,
closeMenuOnSelect: !1,
multiValueRenderer: f,
optionRenderer: C,
filterOption: b
  });
}