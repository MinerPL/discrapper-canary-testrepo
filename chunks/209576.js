var a = ['vasárnap', 'hétfőn', 'kedden', 'szerdán', 'csütörtökön', 'pénteken', 'szombaton'];
function i(e) {
    return function (t) {
        var i = a[t.getUTCDay()];
        return ''.concat(e ? '' : "'múlt' ", "'").concat(i, "' p'-kor'");
    };
}
var n = {
    lastWeek: i(!1),
    yesterday: "'tegnap' p'-kor'",
    today: "'ma' p'-kor'",
    tomorrow: "'holnap' p'-kor'",
    nextWeek: i(!0),
    other: 'P'
};
t.Z = function (e, t) {
    var a = n[e];
    return 'function' == typeof a ? a(t) : a;
};
