t.d(n, {
    Z: function () {
        return v;
    }
});
var i = t(735250);
t(470079);
var a = t(120356),
    l = t.n(a),
    r = t(442837),
    s = t(481060),
    o = t(543241),
    u = t(222677),
    d = t(995774),
    c = t(665906),
    E = t(695346),
    M = t(496675),
    I = t(768581),
    m = t(176354),
    _ = t(981631),
    g = t(185923),
    f = t(689938),
    Z = t(994209);
let S = ['slight_smile', 'frowning', 'smile', 'stuck_out_tongue', 'wink'];
function T(e) {
    var n;
    let { emoji: t, isFocused: a } = e,
        { animated: r, src: o, surrogates: u } = t;
    return (
        null == o && null != t.id
            ? (o = I.ZP.getEmojiURL({
                  id: t.id,
                  animated: !!r,
                  size: 20
              }))
            : null == o && (o = m.ZP.getURL(u)),
        (0, i.jsx)(
            s.Tooltip,
            {
                text: t.allNamesString,
                hideOnClick: !0,
                spacing: 16,
                forceOpen: a,
                children: (e) =>
                    (0, i.jsx)('div', {
                        'aria-label': f.Z.Messages.ADD_REACTION_NAMED.format({ emojiName: t.name }),
                        className: l()(Z.button, { [Z.focused]: a }),
                        ...e,
                        children:
                            null == o || '' === o.trim()
                                ? (0, i.jsx)('span', {
                                      className: l()('emoji', 'emoji-text', Z.icon),
                                      ...e,
                                      children: u
                                  })
                                : (0, i.jsx)('img', {
                                      className: Z.icon,
                                      src: o,
                                      alt: ''
                                  })
                    })
            },
            null !== (n = t.id) && void 0 !== n ? n : t.name
        )
    );
}
function v(e, n) {
    let t = (0, o.MZ)(n.guild_id).filter((e) => {
        var t;
        return (
            !(e.useSpriteSheet && S.indexOf(null !== (t = e.uniqueName) && void 0 !== t ? t : '') >= 0) &&
            !m.ZP.isEmojiPremiumLocked({
                emoji: e,
                channel: n,
                intention: g.Hz.REACTION
            })
        );
    });
    t.length > 4 && (t.length = 4);
    let a = E.nc.useSetting(),
        l = (0, c.$R)(n),
        I = (0, r.e7)([M.Z], () => a && l && (n.isPrivate() || M.Z.can(_.Plq.ADD_REACTIONS, n)), [n, l, a]),
        f = (t) => {
            (0, u.rU)(n.id, e.id, (0, d.g1)(t), u.TW.MESSAGE_CONTEXT_MENU);
        };
    return I && t.length > 0
        ? (0, i.jsx)(s.MenuGroup, {
              className: Z.wrapper,
              children: t.map((e, n) => {
                  var t;
                  return (0, i.jsx)(
                      s.MenuItem,
                      {
                          id: 'quickreact-'.concat(null !== (t = e.id) && void 0 !== t ? t : n),
                          render: (n) => {
                              let { isFocused: t } = n;
                              return (0, i.jsx)(T, {
                                  emoji: e,
                                  isFocused: t
                              });
                          },
                          action: () => f(e),
                          dontCloseOnActionIfHoldingShiftKey: !0
                      },
                      n
                  );
              })
          })
        : null;
}
