"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("470079"),
  l = n("592125"),
  s = n("944486"),
  i = n("585483"),
  r = n("917107"),
  o = n("89425"),
  u = n("197386"),
  d = n("981631");

function c(e) {
  let {
    onTransition: t
  } = e;
  a.useEffect(() => {
    async function e(e) {
      let {
        channelId: n
      } = e;
      if (!(0, r.default)(n)) return;
      s.default.getVoiceChannelId() !== n && await (0, o.default)({
        channelId: n
      });
      let a = l.default.getChannel(n),
        i = null == a ? void 0 : a.guild_id;
      setTimeout(() => {
        (0, u.default)(i, n), null == t || t()
      }, 0)
    }
    return i.ComponentDispatch.subscribe(d.ComponentActions.OPEN_EMBEDDED_ACTIVITY, e), () => {
      i.ComponentDispatch.unsubscribe(d.ComponentActions.OPEN_EMBEDDED_ACTIVITY, e)
    }
  }, [t])
}