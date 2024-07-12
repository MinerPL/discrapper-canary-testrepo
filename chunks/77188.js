n.d(t, {
  Z: function() {
return O;
  }
}), n(47120);
var r = n(470079),
  i = n(836560),
  a = n(327432),
  o = n(40851),
  s = n(213459),
  l = n(998698),
  u = n(695346),
  c = n(752305),
  d = n(86724),
  _ = n(886027),
  E = n(515270),
  f = n(265446),
  h = n(196483),
  p = n(417662),
  m = n(847302),
  I = n(374157);
n(209073);
var T = n(814011),
  g = n(50607),
  S = n(618136),
  A = n(247765),
  N = n(15559),
  v = n(42530);

function O(e) {
  let t = r.useContext(o.ZP),
n = u.R$.useSetting(),
[O] = r.useState(() => {
  let r = (0, a.Jh)();
  return r.children = (0, c.JM)(''), r.selection = {
      anchor: v.nO,
      focus: v.nO
    },
    function(e) {
      var t, n, r;
      let {
        editor: a,
        chatInputType: o,
        channel: s,
        canUseCommands: l,
        canOnlyUseTextCommands: u,
        windowContext: c,
        previewMarkdown: v,
        forTests: O,
        onChangeStart: R,
        onChangeEnd: C,
        updateState: y
      } = e, D = a, {
        onChange: L
      } = D;
      D.chatInputType = o, D.windowContext = c, D.previewMarkdown = v, D.composition = null, D.events = new i.EventEmitter(), D.isMac = 'MacIntel' === navigator.platform, D.onChange = () => {
        D.events.emit('onChange'), L();
      }, D = (0, g.B)(D, !0 === O), D = (0, T.Z)(D), D = (0, I.Z)(D), (null === (t = o.commands) || void 0 === t ? void 0 : t.enabled) && (D = (0, d.Z)(D, s, !0 === l, !0 === u)), D = (0, m.ZP)(D, s.guild_id, s.id), !(null === (n = o.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) && (D = (0, _.Z)(D)), !(null === (r = o.markdown) || void 0 === r ? void 0 : r.disableCodeBlocks) && (D = (0, E.ZP)(D)), O && (D = (0, A.Z)(D)), D = (0, p.Z)(D), D = (0, f.Z)(D), D = (0, S.Z)(D), D = (0, N.Z)(D, R, C), D = (0, h.Z)(D, e => {
        let {
          newValue: t,
          newSelection: n
        } = e;
        return y(D, 'undo', {
          value: t,
          selection: n
        });
      });
    }({
      ...e,
      editor: r,
      windowContext: t,
      previewMarkdown: n
    }), r;
});
  return r.useEffect(() => {
let e = () => O.onChange();
return l.Z.addChangeListener(e), s.ZP.addChangeListener(e), () => {
  l.Z.removeChangeListener(e), s.ZP.removeChangeListener(e);
};
  }, [O]), r.useEffect(() => {
O.previewMarkdown !== n && (O.previewMarkdown = n, O.onChange());
  }, [
O,
n
  ]), O;
}