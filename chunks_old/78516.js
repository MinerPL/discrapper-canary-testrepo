"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("884691"),
  l = n("42203"),
  s = n("18494"),
  i = n("659500"),
  r = n("420444"),
  u = n("541473"),
  o = n("578708"),
  d = n("49111");

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
      s.default.getVoiceChannelId() !== n && await (0, u.default)({
        channelId: n
      });
      let a = l.default.getChannel(n),
        i = null == a ? void 0 : a.guild_id;
      setTimeout(() => {
        (0, o.default)(i, n), null == t || t()
      }, 0)
    }
    return i.ComponentDispatch.subscribe(d.ComponentActions.OPEN_EMBEDDED_ACTIVITY, e), () => {
      i.ComponentDispatch.unsubscribe(d.ComponentActions.OPEN_EMBEDDED_ACTIVITY, e)
    }
  }, [t])
}