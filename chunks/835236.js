"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var l = a("37983");
a("884691");
var n = a("414456"),
  r = a.n(n),
  s = a("77078"),
  i = a("355313"),
  d = a("837899"),
  o = a("425190"),
  u = a("782340"),
  c = a("772046");

function S(e) {
  let {
    selectedTags: t,
    title: a,
    hintText: n,
    placeholderText: S,
    expanded: f,
    setExpanded: A,
    users: T,
    guilds: _,
    query: E,
    maxCount: I,
    onQueryChange: g,
    onClickRow: R,
    onRemoveTag: h
  } = e;
  return (0, l.jsx)(s.Collapsible, {
    className: c.collapsible,
    isExpanded: f,
    collapsibleContent: (0, l.jsx)("div", {
      className: r(c.collapsibleContent, {
        [c.visible]: f
      }),
      children: (0, l.jsx)(i.default, {
        listClassName: c.list,
        pendingAdditions: t,
        query: E,
        onQueryChange: g,
        onClickRow: R,
        onRemovePendingAddition: h,
        users: T,
        guilds: _,
        renderEmptyText: e => u.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format({
          query: e
        }),
        hintText: n,
        placeholderText: S,
        disabledText: u.default.Messages.BROADCASTING_SETTINGS_MODAL_DISABLED_DESCRIPTION,
        maxCount: I,
        hideRowLabel: !0
      })
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, l.jsxs)(s.Clickable, {
        className: c.content,
        onClick: e => {
          A(!f), t(e)
        },
        children: [(0, l.jsx)(s.Heading, {
          variant: "text-sm/normal",
          children: a
        }), f ? (0, l.jsx)(o.default, {}) : (0, l.jsx)(d.default, {})]
      })
    }
  })
}