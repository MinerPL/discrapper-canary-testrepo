"use strict";
t.d(s, {
  Z: function() {
    return E
  }
}), t(47120), t(653041);
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(723047),
  a = t(727843),
  r = t(290348),
  o = t(764163),
  c = t(155758),
  d = t(293810),
  u = t(689938);

function E() {
  let {
    editStateId: e,
    guildId: s
  } = (0, a.N)(), [t, E] = r.R7(e);

  function _(e, s) {
    let {
      name: n,
      description: i,
      emojiId: l,
      emojiName: a
    } = e, r = [...t], o = {
      name: n,
      description: i,
      emoji_id: l,
      emoji_name: a,
      ref_type: d.Qs.INTANGIBLE,
      ref_id: void 0
    };
    null != s ? r[s] = o : r.push(o), E(r)
  }
  let I = (0, l.mY)();
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(c.p, {
      benefits: t,
      onEdit: function(e) {
        (0, i.openModal)(i => (0, n.jsx)(o.DI, {
          ...i,
          guildId: s,
          initialData: t[e],
          onSave: s => _(s, e),
          onDelete: () => (function(e) {
            let s = [...t];
            s.splice(e, 1), E(s)
          })(e)
        }))
      },
      onMove: function(e, s) {
        let n = [...t],
          [i] = n.splice(e, 1);
        n.splice(s, 0, i), E(n)
      },
      guildId: s
    }), t.length > 0 ? (0, n.jsx)(i.Spacer, {
      size: 8
    }) : null, (0, n.jsx)(c.s, {
      onClick: function() {
        (0, i.openModal)(e => (0, n.jsx)(o.DI, {
          ...e,
          guildId: s,
          onSave: e => _(e)
        }))
      },
      disabled: I,
      children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_ADD_BUTTON_TEXT
    })]
  })
}