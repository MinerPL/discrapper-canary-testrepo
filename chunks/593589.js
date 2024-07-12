t.d(n, {
  Z: function() {
return m;
  }
});
var l = t(735250),
  r = t(470079),
  a = t(481060),
  i = t(372900),
  s = t(238246),
  o = t(788983),
  u = t(207035),
  c = t(823748),
  d = t(981631),
  p = t(402055);

function x(e) {
  let {
windowKey: n,
channel: t
  } = e;
  return (0, l.jsx)(s.Z, {
withTitleBar: !0,
windowKey: n,
title: t.name,
channelId: t.id,
contentClassName: p.popoutContent,
children: (0, l.jsx)(i.Z.Provider, {
  value: t.guild_id,
  children: (0, l.jsx)(c.Z, {
    providedChannel: t
  })
})
  });
}

function m(e, n) {
  let t = (0, u.P)(n),
i = r.useCallback(() => {
  o.bA(''.concat(d.KJ3.CHANNEL_POPOUT, '-').concat(e.id), n => (0, l.jsx)(x, {
    windowKey: n,
    channel: e
  }), {
    defaultWidth: 854,
    defaultHeight: 480
  });
}, [e]);
  return t ? (0, l.jsx)(a.MenuItem, {
id: 'channel-pop-out',
label: 'Open in Popout',
action: () => i()
  }) : null;
}