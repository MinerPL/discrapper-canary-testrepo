e.exports = function (e, t, r, i) {
    var a = this;
    a.sequenceLevels[e] = 0;
    function s(t) {
        var s;
        a.fireCallback(r, t, e),
            'keyup' !== i && ((s = n(619820)), (a.ignoreNextKeyup = s(t))),
            setTimeout(function () {
                a.resetSequences();
            }, 10);
    }
    for (var o = 0; o < t.length; ++o) {
        var l =
            o + 1 === t.length
                ? s
                : (function (t) {
                      return function () {
                          (a.nextExpectedAction = t), ++a.sequenceLevels[e], a.resetSequenceTimer();
                      };
                  })(i || a.getKeyInfo(t[o + 1]).action);
        a.bindSingle(t[o], l, i, e, o);
    }
};
