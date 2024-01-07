function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return t && t.ownerDocument ? t.ownerDocument : document
    }
}