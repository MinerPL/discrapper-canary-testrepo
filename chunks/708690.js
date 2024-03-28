"use strict";
n.r(t);
var a = n("570140");
t.default = {
  search(e, t) {
    a.default.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY",
      query: e,
      channelId: t
    })
  },
  clear(e) {
    a.default.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY",
      query: "",
      channelId: e
    })
  },
  select(e) {
    a.default.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT",
      row: e
    })
  },
  addUser(e) {
    a.default.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER",
      userId: e
    })
  },
  removeUser(e) {
    a.default.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER",
      userId: e
    })
  },
  open(e) {
    a.default.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN",
      channelId: e
    })
  },
  close() {
    a.default.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE"
    })
  }
}