"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("933557"),
  l = n("981631"),
  s = n("689938");

function i(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = (0, a.default)(e, !0),
    i = (0, a.default)(e, !1);
  if (null == e || null == n) return {
    placeholder: "",
    accessibilityLabel: ""
  };
  if (t) return {
    placeholder: s.default.Messages.READ_ONLY_CHANNEL,
    accessibilityLabel: s.default.Messages.READ_ONLY_CHANNEL
  };
  if (e.isForumPost()) return {
    placeholder: s.default.Messages.FORUM_POST_TEXTAREA_PLACEHOLDER.format({
      channel: n
    }),
    accessibilityLabel: s.default.Messages.TEXTAREA_FORUM_POST_A11Y_LABEL.format({
      channel: i
    })
  };
  if (l.ChannelTypesSets.THREADS.has(e.type)) return {
    placeholder: s.default.Messages.TEXTAREA_PLACEHOLDER.format({
      channel: n
    }),
    accessibilityLabel: s.default.Messages.TEXTAREA_THREAD_A11Y_LABEL.format({
      channel: i
    })
  };
  if (e.type === l.ChannelTypes.DM) return {
    placeholder: s.default.Messages.DM_TEXTAREA_PLACEHOLDER.format({
      channel: n
    }),
    accessibilityLabel: s.default.Messages.TEXTAREA_TEXT_DM_A11Y_LABEL.format({
      channel: i
    })
  };
  return {
    placeholder: s.default.Messages.TEXTAREA_PLACEHOLDER.format({
      channel: n
    }),
    accessibilityLabel: s.default.Messages.TEXTAREA_TEXT_CHANNEL_A11Y_LABEL.format({
      channel: i
    })
  }
}