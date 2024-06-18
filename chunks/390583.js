"use strict";
t.d(s, {
  Z: function() {
    return _
  }
}), t(47120), t(653041);
var n = t(735250),
  i = t(470079),
  l = t(481060);
t(674180);
var a = t(723047),
  r = t(727843),
  o = t(290348),
  c = t(764163),
  d = t(155758),
  u = t(293810),
  E = t(689938);

function _() {
  let {
    editStateId: e,
    guildId: s
  } = (0, r.N)(), [t, _] = o.UE(e), I = i.useMemo(() => new Set(t.map(e => e.ref_id)), [t]);

  function T(e, s) {
    let {
      channelId: n,
      description: i,
      emojiId: l,
      emojiName: a
    } = e, r = [...t], o = {
      name: "",
      description: i,
      emoji_id: l,
      emoji_name: a,
      ref_type: u.Qs.CHANNEL,
      ref_id: n
    };
    null != s ? r[s] = o : r.push(o), _(r)
  }
  let N = (0, a.mY)();
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(d.p, {
      benefits: t,
      onEdit: function(e) {
        (0, l.openModal)(i => (0, n.jsx)(c.x3, {
          ...i,
          guildId: s,
          omitChannelIds: I,
          initialData: t[e],
          onSave: s => T(s, e),
          onDelete: () => (function(e) {
            let s = [...t];
            s.splice(e, 1), _(s)
          })(e)
        }))
      },
      onMove: function(e, s) {
        let n = [...t],
          [i] = n.splice(e, 1);
        n.splice(s, 0, i), _(n)
      },
      guildId: s
    }), t.length > 0 && (0, n.jsx)(l.Spacer, {
      size: 8
    }), (0, n.jsx)(d.s, {
      onClick: function() {
        (0, l.openModal)(e => (0, n.jsx)(c.x3, {
          ...e,
          guildId: s,
          omitChannelIds: I,
          onSave: e => T(e)
        }))
      },
      disabled: N,
      children: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_ADD_BUTTON_TEXT
    })]
  })
}