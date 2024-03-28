"use strict";
n.r(t);
var a = n("570140");
t.default = {
  viewPrompt: function(e, t) {
    a.default.wait(() => {
      a.default.dispatch({
        type: "GUILD_PROMPT_VIEWED",
        prompt: e,
        guildId: t
      })
    })
  }
}