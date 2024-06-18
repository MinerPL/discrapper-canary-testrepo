"use strict";
n(627494), n(757143);
let i = /[<>:"/\\|?*\.]/g;
t.Z = function(e) {
  return e.replaceAll(i, "").trim().replaceAll(" ", "_")
}