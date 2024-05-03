"use strict";

function s(e) {
  if ((null == e ? void 0 : e.fields) == null) return null;
  let t = {},
    n = {};
  for (let s of e.fields) switch (s.rawName) {
    case "poll_question_text":
      t.questionText = s.rawValue;
      break;
    case "victor_answer_id":
      t.victorAnswerId = s.rawValue;
      break;
    case "victor_answer_text":
      t.victorAnswerText = s.rawValue;
      break;
    case "victor_answer_votes":
      t.victorAnswerVotes = parseInt(s.rawValue, 10);
      break;
    case "total_votes":
      t.totalVotes = parseInt(s.rawValue, 10);
      break;
    case "victor_answer_emoji_id":
      n.id = s.rawValue;
      break;
    case "victor_answer_emoji_name":
      n.name = s.rawValue;
      break;
    case "victor_answer_emoji_animated":
      n.animated = "true" === s.rawValue
  }
  if (null != n.name) {
    var s;
    n.animated = null !== (s = n.animated) && void 0 !== s && s, t.victorEmoji = n
  }
  return t
}
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("47120")