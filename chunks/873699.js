t.d(n, {
    Z: function () {
        return g;
    }
}),
    t(724458),
    t(47120);
var a = t(735250),
    i = t(470079),
    l = t(442837),
    r = t(481060),
    s = t(668781),
    o = t(79390),
    u = t(222677),
    d = t(665906),
    c = t(496675),
    E = t(768581),
    M = t(176354),
    I = t(981631),
    m = t(689938);
function g(e, n) {
    let { reducedMotion: t } = i.useContext(r.AccessibilityPreferencesContext),
        E = (0, d.$R)(n),
        M = (0, l.e7)([c.Z], () => c.Z.can(I.Plq.MANAGE_MESSAGES, n) && E, [n, E]),
        g = e.reactions.reduce((e, n) => {
            var t;
            return (null === (t = n.count_details) || void 0 === t ? void 0 : t.vote) != null || null != e.find((e) => (null != e.id && e.id === n.emoji.id) || e.name === n.emoji.name) ? e : [...e, n.emoji];
        }, []),
        f = (t, a) => {
            t.shiftKey
                ? (0, u.$E)(n.id, e.id, a)
                : s.Z.show({
                      title: m.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_TITLE,
                      body: m.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_BODY,
                      confirmText: m.Z.Messages.YES_TEXT,
                      cancelText: m.Z.Messages.NO_TEXT,
                      onConfirm: () => {
                          (0, u.$E)(n.id, e.id, a);
                      }
                  });
        };
    return !M || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, o.eQ)(e))
        ? null
        : (0, a.jsx)(r.MenuItem, {
              id: 'remove-emoji-reactions',
              label: m.Z.Messages.REMOVE_EMOJI_REACTIONS,
              color: 'danger',
              children: g.map((e) => {
                  var n, i;
                  return (0, a.jsx)(
                      r.MenuItem,
                      {
                          id: 'remove-emoji-reactions-'.concat(null !== (n = e.name) && void 0 !== n ? n : e.id),
                          label: null == e.id ? e.name : ':'.concat(e.name, ':'),
                          action: (n) => f(n, e),
                          icon: (n) =>
                              (0, a.jsx)(_, {
                                  ...n,
                                  reducedMotionEnabled: t.enabled,
                                  emoji: e
                              }),
                          dontCloseOnActionIfHoldingShiftKey: !0
                      },
                      null !== (i = e.name) && void 0 !== i ? i : e.id
                  );
              })
          });
}
function _(e) {
    var n;
    let { emoji: t, reducedMotionEnabled: i, className: l = '', isFocused: r = !1 } = e;
    return (0, a.jsx)('img', {
        className: l,
        src:
            null != t.id
                ? E.ZP.getEmojiURL({
                      id: t.id,
                      animated: t.animated && (!i || r),
                      size: 18
                  })
                : M.ZP.getURL(null !== (n = t.name) && void 0 !== n ? n : ''),
        alt: ''
    });
}
