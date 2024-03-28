"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var a = l("735250");
l("470079");
var n = l("481060"),
  s = l("230711"),
  i = l("6048"),
  o = l("529653"),
  r = l("937482"),
  d = l("703288"),
  c = l("981631"),
  u = l("689938"),
  p = l("491719");

function f(e) {
  let {
    filterQuery: t,
    setFilterQuery: l,
    onClose: f,
    sortOrder: m,
    setSortOrder: v
  } = e;
  return (0, a.jsxs)(n.ModalHeader, {
    className: p.root,
    separator: !1,
    children: [(0, a.jsx)(o.default, {
      className: p.icon
    }), (0, a.jsx)(n.Heading, {
      className: p.title,
      variant: "heading-xxl/bold",
      children: u.default.Messages.CLIPS
    }), (0, a.jsx)("div", {
      className: p.betaTag,
      children: (0, a.jsx)(d.default, {})
    }), (0, a.jsx)(i.default, {
      autoFocus: !0,
      size: i.default.Sizes.MEDIUM,
      placeholder: u.default.Messages.SEARCH,
      className: p.queryInput,
      query: t,
      onChange: l,
      onClear: () => l("")
    }), (0, a.jsx)(n.Select, {
      placeholder: u.default.Messages.CLIPS_SORT_PLACEHOLDER,
      className: p.sortInput,
      options: [{
        value: "descending",
        label: u.default.Messages.CLIPS_SORT_RECENT
      }, {
        value: "ascending",
        label: u.default.Messages.CLIPS_SORT_OLDEST
      }],
      isSelected: e => e === m,
      select: v,
      serialize: e => e
    }), (0, a.jsx)(n.Button, {
      color: n.ButtonColors.TRANSPARENT,
      size: n.Button.Sizes.NONE,
      className: p.settingsButton,
      look: n.Button.Looks.FILLED,
      onClick: () => {
        s.default.open(c.UserSettingsSections.CLIPS), f()
      },
      children: (0, a.jsx)(r.default, {})
    }), (0, a.jsx)(n.ModalCloseButton, {
      className: p.button,
      onClick: f
    })]
  })
}