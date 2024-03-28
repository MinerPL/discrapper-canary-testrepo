"use strict";
s.r(t), s.d(t, {
  GuildAuditLogSearch: function() {
    return S
  }
}), s("47120"), s("757143");
var a = s("735250"),
  l = s("470079"),
  n = s("16464"),
  i = s("481060"),
  r = s("461745"),
  o = s("349033"),
  d = s("999650"),
  u = s("487989"),
  c = s("135163"),
  E = s("72006"),
  _ = s("405656"),
  I = s("689938"),
  T = s("891633");
s("626504");

function S(e) {
  let {
    className: t
  } = e;
  l.useEffect(() => {
    _.clearTokenCache()
  }, []);
  let [s, S] = l.useState({
    editorState: E.createEmptyEditorState([])
  }), {
    editorState: f
  } = s, [m, N] = l.useState(!0), g = null, h = e => {
    S(t => ({
      ...t,
      editorState: e
    }))
  }, C = e => {
    let t = _.tokenizeQuery(E.getFirstTextBlock(e)).filter(e => e.type !== o.default.NON_TOKEN_TYPE);
    return E.applyTokensAsEntities(t, e, d.default)
  }, R = () => {}, x = () => {
    null != g && Promise.resolve().then(() => null == g ? void 0 : g.focus())
  }, L = () => {
    null == g || g.blur()
  }, O = e => {
    g = e
  }, A = () => {
    N(!0)
  }, p = () => {
    N(!1), null != f && E.isEmpty(f) && R()
  }, M = e => {
    if (null == f) return;
    if (E.getFirstTextBlock(f).length >= 512) return !0;
    let t = f;
    return t = E.updateContent(e, t), h(t = C(t = E.truncateContent(t, 512))), !m && N(!0), !0
  }, D = e => (e.preventDefault(), !0), v = e => {
    if (e = null != e ? e.replace(/\n/g, "") : "", null == f) return;
    let t = f;
    return t = E.updateContent(e, t), t = C(t = E.truncateContent(t, 512)), !m && N(!0), h(t), !0
  }, j = null != f && E.getFirstTextBlock(f).length > 0;
  return (0, a.jsx)("div", {
    className: t,
    children: (0, a.jsxs)("div", {
      className: T.search,
      children: [(0, a.jsxs)("div", {
        className: T.searchBar,
        children: [(0, a.jsx)(n.Editor, {
          ref: O,
          onBlur: p,
          onFocus: A,
          handleReturn: D,
          handleBeforeInput: M,
          handlePastedText: v,
          placeholder: I.default.Messages.SEARCH,
          editorState: f,
          onChange: h,
          role: "combobox",
          ariaLabel: I.default.Messages.SEARCH
        }), (0, a.jsx)(r.SearchBarIcon, {
          onClear: e => {
            if (null == f) return;
            if (e.preventDefault(), e.stopPropagation(), "" === E.getFirstTextBlock(f)) {
              x();
              return
            }
            let t = f;
            h(t = E.truncateContent(t, 0)), !m && Promise.resolve().then(() => L())
          },
          hasContent: j,
          className: T.searchIcon
        }), (0, a.jsxs)(i.Button, {
          look: i.Button.Looks.BLANK,
          className: T.filter,
          innerClassName: T.filterButton,
          onClick: () => {},
          children: [I.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_FILTER, (0, a.jsx)(u.default, {
            className: T.filterIcon,
            width: 16,
            height: 16
          })]
        })]
      }), (0, a.jsxs)(i.Button, {
        color: i.Button.Colors.PRIMARY,
        className: T.sort,
        innerClassName: T.sortButton,
        size: i.Button.Sizes.SMALL,
        onClick: () => {},
        children: [I.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SORT, (0, a.jsx)(c.default, {
          className: T.sortIcon,
          width: 16,
          height: 16
        })]
      })]
    })
  })
}