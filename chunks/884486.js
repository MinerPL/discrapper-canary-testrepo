"use strict";
n.r(t), n("47120"), n("653041");
var a = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  i = n("913527"),
  r = n.n(i),
  o = n("481060"),
  u = n("465670"),
  d = n("729285"),
  c = n("924801"),
  f = n("689938"),
  E = n("597338");
t.default = e => {
  let {
    handleUpdate: t,
    selectedTimes: n
  } = e, s = (e, a) => {
    let s = [...n];
    s[e].day = a, t({
      primetime: s
    })
  }, i = (e, a) => {
    let s = [...n];
    s[e].time = a, t({
      primetime: s
    })
  }, h = e => {
    let a = [...n];
    a.splice(e, 1), t({
      primetime: a
    })
  }, _ = (0, c.getDayOptions)();
  return (0, a.jsxs)("div", {
    className: E.slideContent,
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-xl/semibold",
      className: E.title,
      children: f.default.Messages.CLAN_SETUP_PRIMETIME_TITLE
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: E.subtitle,
      children: f.default.Messages.CLAN_SETUP_PRIMETIME_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: E.timeSelection,
      children: [n.map((e, t) => (0, a.jsxs)("div", {
        className: E.timeSelectorRow,
        children: [(0, a.jsx)(o.SearchableSelect, {
          value: e.day,
          options: _,
          placeholder: f.default.Messages.CLAN_PRIMETIME_PLACEHOLDER,
          onChange: e => s(t, e),
          className: E.daySelector
        }), (0, a.jsx)(o.TimeInput, {
          value: e.time,
          onChange: e => i(t, e)
        }), t > 0 && (0, a.jsx)(o.Clickable, {
          onClick: () => h(t),
          children: (0, a.jsx)(u.default, {
            className: l()(E.icon, E.clickable)
          })
        })]
      }, "time-".concat(t))), (0, a.jsxs)(o.Clickable, {
        className: l()(E.timeSelectorRow, E.clickable),
        onClick: () => {
          let e = [...n];
          e.push({
            day: void 0,
            time: r()().startOf("day")
          }), t({
            primetime: e
          })
        },
        children: [(0, a.jsx)(d.default, {
          className: l()(E.icon, E.clickable)
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "none",
          className: E.addText,
          children: f.default.Messages.ADD
        })]
      })]
    })]
  })
}