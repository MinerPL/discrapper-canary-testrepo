"use strict";
n.d(t, {
  Z: function() {
    return f
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(519953),
  l = n(442837),
  u = n(911969),
  _ = n(998698),
  d = n(703558),
  c = n(117530),
  E = n(91313),
  I = n(436660),
  T = n(887490),
  h = n(689938),
  S = n(697692);

function f(e, t, n) {
  let {
    attributes: r,
    children: s,
    element: o
  } = t;
  switch (o.type) {
    case "applicationCommand":
      let a = _.Z.getActiveCommand(n),
        l = 0,
        u = 0;
      if (null != a && a.id === o.command.id) {
        var d;
        let t = E.cu(e);
        for (let e of null !== (d = a.options) && void 0 !== d ? d : []) t.includes(e.name) ? u++ : l++
      }
      let c = {};
      if (l > 0) {
        let e;
        e = u > 0 ? h.Z.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
          count: l
        }) : h.Z.Messages.COMMANDS_OPTION_COUNT.format({
          count: l
        }), c["data-trailing-placeholder"] = e
      }
      return (0, i.jsx)("div", {
        className: S.applicationCommand,
        ...r,
        ...c,
        children: s
      });
    case "applicationCommandOption":
      return (0, i.jsx)(N, {
        attributes: r,
        channelId: n,
        element: o,
        children: s
      });
    default:
      return null
  }
}
let N = e => {
  let t, {
      channelId: n,
      element: s,
      attributes: E,
      children: f
    } = e,
    N = (0, a.vt)(),
    A = (0, a.UE)(),
    m = (0, a._7)(),
    {
      optionType: O,
      errored: R
    } = (0, l.cj)([_.Z], () => {
      var e, t, i;
      return {
        optionType: null === (e = _.Z.getOption(n, s.optionName)) || void 0 === e ? void 0 : e.type,
        errored: (null === (i = _.Z.getOptionState(n, s.optionName)) || void 0 === i ? void 0 : null === (t = i.lastValidationResult) || void 0 === t ? void 0 : t.success) !== !0
      }
    }, [n, s.optionName]),
    C = (0, l.e7)([c.Z], () => c.Z.getUpload(n, s.optionName, d.d.SlashCommand), [n, s.optionName]),
    p = s.children[s.children.length - 1],
    g = null != p && T.LC.isText(p) && p.text.endsWith("\n"),
    L = o()(S.inlineElement, S.optionPill, {
      [S.selectedPill]: A && N,
      [S.erroredPill]: (!A || !N) && R
    }),
    v = r.useCallback(() => {
      !T.bN.isVoid(m, s) && I.Q.selectCommandOption(m, s.optionName, !0)
    }, [m, s]);
  return t = O === u.jw.ATTACHMENT ? (null == C ? void 0 : C.filename) != null ? (0, i.jsxs)("span", {
    className: o()(S.optionPillValue, S.attachmentFilename),
    contentEditable: !1,
    children: [C.filename, f]
  }) : (0, i.jsxs)("span", {
    className: o()(S.optionPillValue, S.readonlyPillValue),
    contentEditable: !1,
    children: [h.Z.Messages.APPLICATION_COMMAND_FILE_ATTACHMENT, f]
  }) : (0, i.jsxs)("span", {
    className: S.optionPillValue,
    children: [f, g ? (0, i.jsx)("span", {
      className: S.newLine,
      contentEditable: !1
    }) : null]
  }), (0, i.jsxs)("span", {
    ...E,
    className: L,
    children: [(0, i.jsxs)("span", {
      className: S.optionPillKey,
      contentEditable: !1,
      onClick: v,
      children: [s.optionDisplayName, "​"]
    }), t, (0, i.jsx)("span", {
      contentEditable: !1,
      children: "​"
    })]
  })
}