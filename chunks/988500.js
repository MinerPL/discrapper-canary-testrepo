t.d(n, {
  Z: function() {
return u;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  l = t(203143),
  r = t(615669),
  o = t(689938);
let s = {
  [r.z.END_EARLY]: e => (0, i.jsx)(a.MenuItem, {
id: 'end-poll-early',
label: o.Z.Messages.POLL_END_EARLY,
icon: a.ClockXIcon,
action: () => {
  l.Z.endPollEarly({
    channelId: e.channel_id,
    messageId: e.id
  });
},
iconProps: {
  color: 'currentColor'
}
  })
};

function u(e) {
  let n = (0, r.Z)(e);
  return 0 === n.length ? null : (0, i.jsx)(i.Fragment, {
children: n.map(n => s[n](e))
  });
}