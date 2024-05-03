"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var a = l("735250");
l("470079");
var n = l("481060"),
  s = l("547972"),
  i = l("6048"),
  o = l("529653"),
  r = l("937482"),
  u = l("703288"),
  c = l("332325"),
  d = l("689938"),
  f = l("883373");

function m(e) {
  let {
    filterQuery: t,
    setFilterQuery: l,
    onClose: m,
    sortOrder: p,
    setSortOrder: C
  } = e;
  return (0, a.jsxs)(n.ModalHeader, {
    className: f.root,
    separator: !1,
    children: [(0, a.jsx)(o.default, {
      className: f.icon
    }), (0, a.jsx)(n.Heading, {
      className: f.title,
      variant: "heading-xxl/bold",
      children: d.default.Messages.CLIPS
    }), (0, a.jsx)("div", {
      className: f.betaTag,
      children: (0, a.jsx)(u.default, {})
    }), (0, a.jsx)(i.default, {
      autoFocus: !0,
      size: i.default.Sizes.MEDIUM,
      placeholder: d.default.Messages.SEARCH,
      className: f.queryInput,
      query: t,
      onChange: l,
      onClear: () => l("")
    }), (0, a.jsx)(n.Select, {
      placeholder: d.default.Messages.CLIPS_SORT_PLACEHOLDER,
      className: f.sortInput,
      options: [{
        value: "descending",
        label: d.default.Messages.CLIPS_SORT_RECENT
      }, {
        value: "ascending",
        label: d.default.Messages.CLIPS_SORT_OLDEST
      }],
      isSelected: e => e === p,
      select: C,
      serialize: e => e
    }), (0, a.jsx)(n.Button, {
      color: n.ButtonColors.TRANSPARENT,
      size: n.Button.Sizes.NONE,
      className: f.settingsButton,
      look: n.Button.Looks.FILLED,
      onClick: () => {
        (0, s.default)(c.GameSettingsTab.CLIPS), m()
      },
      children: (0, a.jsx)(r.default, {})
    }), (0, a.jsx)(n.ModalCloseButton, {
      className: f.button,
      onClick: m
    })]
  })
}