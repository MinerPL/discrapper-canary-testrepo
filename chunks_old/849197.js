"use strict";
n.r(t), n.d(t, {
  useInteractivePollMessage: function() {
    return E
  },
  default: function() {
    return _
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("627445"),
  i = n.n(l),
  r = n("65597"),
  o = n("819689"),
  u = n("377253"),
  d = n("905206");
let c = a.createContext(void 0);

function E(e) {
  var t;
  let n = null !== (t = a.useContext(c)) && void 0 !== t ? t : e;
  return i(null != n, "Using PollReferenceMessageContext without a provider (or a fallback)"), n
}

function f(e) {
  let {
    message: t,
    children: n
  } = e, l = (0, r.useStateFromStores)([u.default], () => u.default.getMessage(t.channel_id, t.id), [t.channel_id, t.id]), i = null != l;
  return a.useEffect(() => {
    !i && o.default.focusMessage({
      channelId: t.channel_id,
      messageId: t.id
    })
  }, [i, t.channel_id, t.id]), (0, s.jsx)(c.Provider, {
    value: null != l ? l : t,
    children: n
  })
}

function _(e) {
  let {
    message: t,
    children: n
  } = e;
  return (0, d.isPollMessageDirectlyInteractive)(t) ? (0, s.jsx)(s.Fragment, {
    children: n
  }) : (0, s.jsx)(f, {
    message: t,
    children: n
  })
}