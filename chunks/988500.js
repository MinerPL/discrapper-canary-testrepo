"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var i = n("279164"),
  l = n("481060"),
  s = n("203143"),
  u = n("615669"),
  r = n("689938");
let o = {
  [u.PollMessageContextItemTypes.END_EARLY]: e => (0, a.jsx)(l.MenuItem, {
    id: "end-poll-early",
    label: r.default.Messages.POLL_END_EARLY,
    icon: i.ClockXIcon,
    action: () => {
      s.default.endPollEarly({
        channelId: e.channel_id,
        messageId: e.id
      })
    },
    iconProps: {
      color: "currentColor"
    }
  })
};

function d(e, t) {
  let n = (0, u.default)(e, t);
  return 0 === n.length ? null : (0, a.jsx)(a.Fragment, {
    children: n.map(t => o[t](e))
  })
}