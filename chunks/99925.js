r.d(e, {
    T: function () {
        return i;
    }
});
var n = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function i(t) {
    var e = {};
    return (
        t.replace(n, function (t) {
            var r = t.length;
            switch (t[0]) {
                case 'G':
                    e.era = 4 === r ? 'long' : 5 === r ? 'narrow' : 'short';
                    break;
                case 'y':
                    e.year = 2 === r ? '2-digit' : 'numeric';
                    break;
                case 'Y':
                case 'u':
                case 'U':
                case 'r':
                    throw RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
                case 'q':
                case 'Q':
                    throw RangeError('`q/Q` (quarter) patterns are not supported');
                case 'M':
                case 'L':
                    e.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][r - 1];
                    break;
                case 'w':
                case 'W':
                    throw RangeError('`w/W` (week) patterns are not supported');
                case 'd':
                    e.day = ['numeric', '2-digit'][r - 1];
                    break;
                case 'D':
                case 'F':
                case 'g':
                    throw RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
                case 'E':
                    e.weekday = 4 === r ? 'long' : 5 === r ? 'narrow' : 'short';
                    break;
                case 'e':
                    if (r < 4) throw RangeError('`e..eee` (weekday) patterns are not supported');
                    e.weekday = ['short', 'long', 'narrow', 'short'][r - 4];
                    break;
                case 'c':
                    if (r < 4) throw RangeError('`c..ccc` (weekday) patterns are not supported');
                    e.weekday = ['short', 'long', 'narrow', 'short'][r - 4];
                    break;
                case 'a':
                    e.hour12 = !0;
                    break;
                case 'b':
                case 'B':
                    throw RangeError('`b/B` (period) patterns are not supported, use `a` instead');
                case 'h':
                    (e.hourCycle = 'h12'), (e.hour = ['numeric', '2-digit'][r - 1]);
                    break;
                case 'H':
                    (e.hourCycle = 'h23'), (e.hour = ['numeric', '2-digit'][r - 1]);
                    break;
                case 'K':
                    (e.hourCycle = 'h11'), (e.hour = ['numeric', '2-digit'][r - 1]);
                    break;
                case 'k':
                    (e.hourCycle = 'h24'), (e.hour = ['numeric', '2-digit'][r - 1]);
                    break;
                case 'j':
                case 'J':
                case 'C':
                    throw RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
                case 'm':
                    e.minute = ['numeric', '2-digit'][r - 1];
                    break;
                case 's':
                    e.second = ['numeric', '2-digit'][r - 1];
                    break;
                case 'S':
                case 'A':
                    throw RangeError('`S/A` (second) patterns are not supported, use `s` instead');
                case 'z':
                    e.timeZoneName = r < 4 ? 'short' : 'long';
                    break;
                case 'Z':
                case 'O':
                case 'v':
                case 'V':
                case 'X':
                case 'x':
                    throw RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
            }
            return '';
        }),
        e
    );
}
