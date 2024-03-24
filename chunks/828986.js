"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var n = s("872717"),
  a = s("913144"),
  l = s("263024"),
  i = s("508229"),
  d = s("404118"),
  r = s("49111"),
  u = s("782340");
let o = {
  async pinMessage(e, t) {
    let {
      id: s,
      name: a
    } = e;
    await l.default.unarchiveThreadIfNecessary(e.id), n.HTTP.put({
      url: r.Endpoints.PIN(s, t),
      oldFormErrors: !0
    }).catch(() => {
      let t;
      t = e.isPrivate() ? u.default.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format({
        maxPins: r.MAX_PINS_PER_CHANNEL
      }) : u.default.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
        maxPins: r.MAX_PINS_PER_CHANNEL,
        channelName: a
      }), d.default.show({
        title: u.default.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
        body: t,
        confirmText: u.default.Messages.OKAY
      })
    })
  },
  async unpinMessage(e, t) {
    await l.default.unarchiveThreadIfNecessary(e.id), n.HTTP.del({
      url: r.Endpoints.PIN(e.id, t),
      oldFormErrors: !0
    }).catch(() => d.default.show({
      title: u.default.Messages.UNPIN_MESSAGE_FAILED_TITLE,
      body: u.default.Messages.UNPIN_MESSAGE_FAILED_BODY,
      confirmText: u.default.Messages.TRY_AGAIN,
      cancelText: u.default.Messages.CANCEL,
      onConfirm: o.unpinMessage.bind(o, e, t)
    }))
  },
  ackPins(e) {
    a.default.dispatch({
      type: "CHANNEL_PINS_ACK",
      channelId: e
    })
  },
  fetchPins(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      s = i.default.getPinnedMessages(e);
    (t || null == s || !s.loaded && !s.loading) && (a.default.dispatch({
      type: "LOAD_PINNED_MESSAGES",
      channelId: e
    }), n.HTTP.get({
      url: r.Endpoints.PINS(e),
      retries: 2,
      oldFormErrors: !0
    }).then(t => {
      a.default.dispatch({
        type: "LOAD_PINNED_MESSAGES_SUCCESS",
        messages: t.body,
        channelId: e
      })
    }, () => {
      a.default.dispatch({
        type: "LOAD_PINNED_MESSAGES_FAILURE",
        channelId: e
      })
    }))
  }
};
var c = o