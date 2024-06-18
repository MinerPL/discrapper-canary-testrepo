"use strict";
t.d(s, {
  M: function() {
    return N
  }
}), t(47120), t(757143);
var n = t(735250),
  i = t(470079),
  l = t(371917),
  a = t(481060),
  r = t(461745),
  o = t(349033),
  c = t(999650),
  d = t(487989),
  u = t(135163),
  E = t(72006),
  _ = t(405656),
  I = t(689938),
  T = t(679473);
t(436967);

function N(e) {
  let {
    className: s
  } = e;
  i.useEffect(() => {
    _.WU()
  }, []);
  let [t, N] = i.useState({
    editorState: E.nR([])
  }), {
    editorState: m
  } = t, [S, h] = i.useState(!0), g = null, x = e => {
    N(s => ({
      ...s,
      editorState: e
    }))
  }, C = e => {
    let s = _.kG(E.Sq(e)).filter(e => e.type !== o.ZP.NON_TOKEN_TYPE);
    return E.lv(s, e, c.ZP)
  }, R = () => {}, L = () => {
    null != g && Promise.resolve().then(() => null == g ? void 0 : g.focus())
  }, O = () => {
    null == g || g.blur()
  }, A = e => {
    g = e
  }, p = () => {
    h(!0)
  }, M = () => {
    h(!1), null != m && E.xb(m) && R()
  }, f = e => {
    if (null == m) return;
    if (E.Sq(m).length >= 512) return !0;
    let s = m;
    return s = E.x0(e, s), x(s = C(s = E.Hl(s, 512))), !S && h(!0), !0
  }, v = e => (e.preventDefault(), !0), D = e => {
    if (e = null != e ? e.replace(/\n/g, "") : "", null == m) return;
    let s = m;
    return s = E.x0(e, s), s = C(s = E.Hl(s, 512)), !S && h(!0), x(s), !0
  }, Z = null != m && E.Sq(m).length > 0;
  return (0, n.jsx)("div", {
    className: s,
    children: (0, n.jsxs)("div", {
      className: T.search,
      children: [(0, n.jsxs)("div", {
        className: T.searchBar,
        children: [(0, n.jsx)(l.Editor, {
          ref: A,
          onBlur: M,
          onFocus: p,
          handleReturn: v,
          handleBeforeInput: f,
          handlePastedText: D,
          placeholder: I.Z.Messages.SEARCH,
          editorState: m,
          onChange: x,
          role: "combobox",
          ariaLabel: I.Z.Messages.SEARCH
        }), (0, n.jsx)(r.BK, {
          onClear: e => {
            if (null == m) return;
            if (e.preventDefault(), e.stopPropagation(), "" === E.Sq(m)) {
              L();
              return
            }
            let s = m;
            x(s = E.Hl(s, 0)), !S && Promise.resolve().then(() => O())
          },
          hasContent: Z,
          className: T.searchIcon
        }), (0, n.jsxs)(a.Button, {
          look: a.Button.Looks.BLANK,
          className: T.filter,
          innerClassName: T.filterButton,
          onClick: () => {},
          children: [I.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_FILTER, (0, n.jsx)(d.Z, {
            className: T.filterIcon,
            width: 16,
            height: 16
          })]
        })]
      }), (0, n.jsxs)(a.Button, {
        color: a.Button.Colors.PRIMARY,
        className: T.sort,
        innerClassName: T.sortButton,
        size: a.Button.Sizes.SMALL,
        onClick: () => {},
        children: [I.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SORT, (0, n.jsx)(u.Z, {
          className: T.sortIcon,
          width: 16,
          height: 16
        })]
      })]
    })
  })
}