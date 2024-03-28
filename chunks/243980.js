"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var l = a("735250");
a("470079");
var s = a("803997"),
  n = a.n(s),
  r = a("481060"),
  i = a("971628"),
  o = a("86813"),
  d = a("826026"),
  u = a("689938"),
  c = a("601721");

function S(e) {
  let {
    selectedTags: t,
    title: a,
    hintText: s,
    placeholderText: S,
    expanded: f,
    setExpanded: T,
    users: A,
    guilds: m,
    query: _,
    maxCount: g,
    onQueryChange: R,
    onClickRow: E,
    onRemoveTag: h
  } = e;
  return (0, l.jsx)(r.Collapsible, {
    className: c.collapsible,
    isExpanded: f,
    collapsibleContent: (0, l.jsx)("div", {
      className: n()(c.collapsibleContent, {
        [c.visible]: f
      }),
      children: (0, l.jsx)(i.default, {
        listClassName: c.list,
        pendingAdditions: t,
        query: _,
        onQueryChange: R,
        onClickRow: E,
        onRemovePendingAddition: h,
        users: A,
        guilds: m,
        renderEmptyText: e => u.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format({
          query: e
        }),
        hintText: s,
        placeholderText: S,
        disabledText: u.default.Messages.BROADCASTING_SETTINGS_MODAL_DISABLED_DESCRIPTION,
        maxCount: g,
        hideRowLabel: !0
      })
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, l.jsxs)(r.Clickable, {
        className: c.content,
        onClick: e => {
          T(!f), t(e)
        },
        children: [(0, l.jsx)(r.Heading, {
          variant: "text-sm/normal",
          children: a
        }), f ? (0, l.jsx)(d.default, {}) : (0, l.jsx)(o.default, {})]
      })
    }
  })
}