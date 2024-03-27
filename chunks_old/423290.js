"use strict";
s.r(t), s.d(t, {
  GuildAuditLogSearch: function() {
    return S
  }
}), s("222007"), s("781738");
var a = s("37983"),
  l = s("884691"),
  n = s("98159"),
  i = s("77078"),
  r = s("137223"),
  o = s("76385"),
  d = s("955513"),
  u = s("172483"),
  c = s("891152"),
  E = s("202752"),
  _ = s("751520"),
  I = s("782340"),
  T = s("556229");
s("590976");

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
    let t = E.getFirstTextBlock(f);
    if (t.length >= 512) return !0;
    let s = f;
    return s = E.updateContent(e, s), h(s = C(s = E.truncateContent(s, 512))), !m && N(!0), !0
  }, D = e => (e.preventDefault(), !0), v = e => {
    if (e = null != e ? e.replace(/\n/g, "") : "", null == f) return;
    let t = f;
    return t = E.updateContent(e, t), t = C(t = E.truncateContent(t, 512)), !m && N(!0), h(t), !0
  }, G = null != f && E.getFirstTextBlock(f).length > 0;
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
            e.preventDefault(), e.stopPropagation();
            let t = E.getFirstTextBlock(f);
            if ("" === t) {
              x();
              return
            }
            let s = f;
            h(s = E.truncateContent(s, 0)), !m && Promise.resolve().then(() => L())
          },
          hasContent: G,
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