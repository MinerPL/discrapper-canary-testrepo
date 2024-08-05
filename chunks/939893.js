var t = i(735250);
i(470079);
var a = i(302454),
  r = i.n(a),
  o = i(481060),
  l = i(447543),
  s = i(15470),
  c = i(960904),
  d = i(830121),
  u = i(746878),
  _ = i(241209);
let p = /^discord.gg\/[a-zA-Z0-9-]+/,
  m = {
..._.Z.rules,
heading: {
  ...s.i.heading
},
image: {
  ...r().defaultRules.image
},
inviteLink: {
  order: _.Z.rules.link.order + 1,
  match: (e, n) => n.inline ? p.exec(e) : null,
  parse: (e, n, i) => {
    let t = (0, d.zO)(e[0]);
    return null == t || t.type !== c.g.INVITE ? {
      type: 'text',
      content: e[0]
    } : {
      type: 'inviteLink',
      content: [{
        type: 'text',
        content: e[0]
      }],
      onClick: () => {
        var e;
        l.Z.acceptInviteAndTransitionToInviteChannel({
          inviteKey: t.code,
          context: {
            location: 'Application Directory'
          }
        }), null === (e = i.closeModal) || void 0 === e || e.call(i);
      }
    };
  },
  react: (e, n, i) => (0, t.jsx)(o.Anchor, {
    onClick: n => {
      n.preventDefault(), e.onClick();
    },
    children: (0, u.S)(e, n, i)
  }, i.key)
}
  };
n.Z = m;