n.d(t, {
  M: function() {
return E;
  }
}), n(47120), n(757143);
var s = n(735250),
  a = n(470079),
  i = n(371917),
  r = n(481060),
  l = n(461745),
  o = n(349033),
  c = n(999650),
  d = n(72006),
  u = n(405656),
  _ = n(689938),
  I = n(860182);
n(270799);

function E(e) {
  let {
className: t
  } = e;
  a.useEffect(() => {
u.WU();
  }, []);
  let [n, E] = a.useState({
editorState: d.nR([])
  }), {
editorState: T
  } = n, [m, N] = a.useState(!0), S = null, h = e => {
E(t => ({
  ...t,
  editorState: e
}));
  }, g = e => {
let t = u.kG(d.Sq(e)).filter(e => e.type !== o.ZP.NON_TOKEN_TYPE);
return d.lv(t, e, c.ZP);
  }, C = () => {}, x = () => {
null != S && Promise.resolve().then(() => null == S ? void 0 : S.focus());
  }, p = () => {
null == S || S.blur();
  }, R = e => {
S = e;
  }, f = () => {
N(!0);
  }, L = () => {
N(!1), null != T && d.xb(T) && C();
  }, O = e => {
if (null == T)
  return;
if (d.Sq(T).length >= 512)
  return !0;
let t = T;
return t = d.x0(e, t), h(t = g(t = d.Hl(t, 512))), !m && N(!0), !0;
  }, A = e => (e.preventDefault(), !0), M = e => {
if (e = null != e ? e.replace(/\n/g, '') : '', null == T)
  return;
let t = T;
return t = d.x0(e, t), t = g(t = d.Hl(t, 512)), !m && N(!0), h(t), !0;
  }, D = null != T && d.Sq(T).length > 0;
  return (0, s.jsx)('div', {
className: t,
children: (0, s.jsxs)('div', {
  className: I.search,
  children: [
    (0, s.jsxs)('div', {
      className: I.searchBar,
      children: [
        (0, s.jsx)(i.Editor, {
          ref: R,
          onBlur: L,
          onFocus: f,
          handleReturn: A,
          handleBeforeInput: O,
          handlePastedText: M,
          placeholder: _.Z.Messages.SEARCH,
          editorState: T,
          onChange: h,
          role: 'combobox',
          ariaLabel: _.Z.Messages.SEARCH
        }),
        (0, s.jsx)(l.BK, {
          onClear: e => {
            if (null == T)
              return;
            if (e.preventDefault(), e.stopPropagation(), '' === d.Sq(T)) {
              x();
              return;
            }
            let t = T;
            h(t = d.Hl(t, 0)), !m && Promise.resolve().then(() => p());
          },
          hasContent: D,
          className: I.searchIcon
        }),
        (0, s.jsxs)(r.Button, {
          look: r.Button.Looks.BLANK,
          className: I.filter,
          innerClassName: I.filterButton,
          onClick: () => {},
          children: [
            _.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_FILTER,
            (0, s.jsx)(r.FiltersHorizontalIcon, {
              size: 'custom',
              color: 'currentColor',
              className: I.filterIcon,
              width: 16,
              height: 16
            })
          ]
        })
      ]
    }),
    (0, s.jsxs)(r.Button, {
      color: r.Button.Colors.PRIMARY,
      className: I.sort,
      innerClassName: I.sortButton,
      size: r.Button.Sizes.SMALL,
      onClick: () => {},
      children: [
        _.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SORT,
        (0, s.jsx)(r.ArrowsUpDownIcon, {
          size: 'custom',
          color: 'currentColor',
          className: I.sortIcon,
          width: 16,
          height: 16
        })
      ]
    })
  ]
})
  });
}