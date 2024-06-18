"use strict";
n.d(t, {
  Z: function() {
    return p
  }
}), n(47120);
var i = n(470079),
  r = n(836560),
  s = n(327432),
  o = n(40851),
  a = n(213459),
  l = n(998698),
  u = n(695346),
  _ = n(752305),
  d = n(86724),
  c = n(886027),
  E = n(515270),
  I = n(265446),
  T = n(196483),
  h = n(417662),
  S = n(847302),
  f = n(374157);
n(209073);
var N = n(814011),
  A = n(50607),
  m = n(618136),
  O = n(247765),
  R = n(15559),
  C = n(42530);

function p(e) {
  let t = i.useContext(o.ZP),
    n = u.R$.useSetting(),
    [p] = i.useState(() => {
      let i = (0, s.Jh)();
      return i.children = (0, _.JM)(""), i.selection = {
          anchor: C.nO,
          focus: C.nO
        },
        function(e) {
          var t, n, i;
          let {
            editor: s,
            chatInputType: o,
            channel: a,
            canUseCommands: l,
            canOnlyUseTextCommands: u,
            windowContext: _,
            previewMarkdown: C,
            forTests: p,
            onChangeStart: g,
            onChangeEnd: L,
            updateState: v
          } = e, D = s, {
            onChange: M
          } = D;
          D.chatInputType = o, D.windowContext = _, D.previewMarkdown = C, D.composition = null, D.events = new r.EventEmitter, D.isMac = "MacIntel" === navigator.platform, D.onChange = () => {
            D.events.emit("onChange"), M()
          }, D = (0, A.B)(D, !0 === p), D = (0, N.Z)(D), D = (0, f.Z)(D), (null === (t = o.commands) || void 0 === t ? void 0 : t.enabled) && (D = (0, d.Z)(D, a, !0 === l, !0 === u)), D = (0, S.ZP)(D, a.guild_id, a.id), !(null === (n = o.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) && (D = (0, c.Z)(D)), !(null === (i = o.markdown) || void 0 === i ? void 0 : i.disableCodeBlocks) && (D = (0, E.ZP)(D)), p && (D = (0, O.Z)(D)), D = (0, h.Z)(D), D = (0, I.Z)(D), D = (0, m.Z)(D), D = (0, R.Z)(D, g, L), D = (0, T.Z)(D, e => {
            let {
              newValue: t,
              newSelection: n
            } = e;
            return v(D, "undo", {
              value: t,
              selection: n
            })
          })
        }({
          ...e,
          editor: i,
          windowContext: t,
          previewMarkdown: n
        }), i
    });
  return i.useEffect(() => {
    let e = () => p.onChange();
    return l.Z.addChangeListener(e), a.ZP.addChangeListener(e), () => {
      l.Z.removeChangeListener(e), a.ZP.removeChangeListener(e)
    }
  }, [p]), i.useEffect(() => {
    p.previewMarkdown !== n && (p.previewMarkdown = n, p.onChange())
  }, [p, n]), p
}