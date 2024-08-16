var e = i(799761),
    a = {
        ordinalNumber: function (t, n) {
            var i = Number(t),
                e = null == n ? void 0 : n.unit;
            if ('quarter' === e)
                switch (i) {
                    case 1:
                        return 'I';
                    case 2:
                        return 'II';
                    case 3:
                        return 'III';
                    case 4:
                        return 'IV';
                }
            else if ('day' === e)
                switch (i) {
                    case 1:
                        return 'thứ 2';
                    case 2:
                        return 'thứ 3';
                    case 3:
                        return 'thứ 4';
                    case 4:
                        return 'thứ 5';
                    case 5:
                        return 'thứ 6';
                    case 6:
                        return 'thứ 7';
                    case 7:
                        return 'chủ nhật';
                }
            else if ('week' === e) return 1 === i ? 'thứ nhất' : 'thứ ' + i;
            else if ('dayOfYear' === e) return 1 === i ? 'đầu tiên' : 'thứ ' + i;
            return String(i);
        },
        era: (0, e.Z)({
            values: {
                narrow: ['TCN', 'SCN'],
                abbreviated: ['trước CN', 'sau CN'],
                wide: ['trước Công Nguyên', 'sau Công Nguyên']
            },
            defaultWidth: 'wide'
        }),
        quarter: (0, e.Z)({
            values: {
                narrow: ['1', '2', '3', '4'],
                abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
                wide: ['Quý 1', 'Quý 2', 'Quý 3', 'Quý 4']
            },
            defaultWidth: 'wide',
            formattingValues: {
                narrow: ['1', '2', '3', '4'],
                abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
                wide: ['quý I', 'quý II', 'quý III', 'quý IV']
            },
            defaultFormattingWidth: 'wide',
            argumentCallback: function (t) {
                return t - 1;
            }
        }),
        month: (0, e.Z)({
            values: {
                narrow: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                abbreviated: ['Thg 1', 'Thg 2', 'Thg 3', 'Thg 4', 'Thg 5', 'Thg 6', 'Thg 7', 'Thg 8', 'Thg 9', 'Thg 10', 'Thg 11', 'Thg 12'],
                wide: ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai']
            },
            defaultWidth: 'wide',
            formattingValues: {
                narrow: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
                abbreviated: ['thg 1', 'thg 2', 'thg 3', 'thg 4', 'thg 5', 'thg 6', 'thg 7', 'thg 8', 'thg 9', 'thg 10', 'thg 11', 'thg 12'],
                wide: ['tháng 01', 'tháng 02', 'tháng 03', 'tháng 04', 'tháng 05', 'tháng 06', 'tháng 07', 'tháng 08', 'tháng 09', 'tháng 10', 'tháng 11', 'tháng 12']
            },
            defaultFormattingWidth: 'wide'
        }),
        day: (0, e.Z)({
            values: {
                narrow: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
                short: ['CN', 'Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7'],
                abbreviated: ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
                wide: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
            },
            defaultWidth: 'wide'
        }),
        dayPeriod: (0, e.Z)({
            values: {
                narrow: {
                    am: 'am',
                    pm: 'pm',
                    midnight: 'nửa đêm',
                    noon: 'tr',
                    morning: 'sg',
                    afternoon: 'ch',
                    evening: 'tối',
                    night: 'đêm'
                },
                abbreviated: {
                    am: 'AM',
                    pm: 'PM',
                    midnight: 'nửa đêm',
                    noon: 'trưa',
                    morning: 'sáng',
                    afternoon: 'chiều',
                    evening: 'tối',
                    night: 'đêm'
                },
                wide: {
                    am: 'SA',
                    pm: 'CH',
                    midnight: 'nửa đêm',
                    noon: 'trưa',
                    morning: 'sáng',
                    afternoon: 'chiều',
                    evening: 'tối',
                    night: 'đêm'
                }
            },
            defaultWidth: 'wide',
            formattingValues: {
                narrow: {
                    am: 'am',
                    pm: 'pm',
                    midnight: 'nửa đêm',
                    noon: 'tr',
                    morning: 'sg',
                    afternoon: 'ch',
                    evening: 'tối',
                    night: 'đêm'
                },
                abbreviated: {
                    am: 'AM',
                    pm: 'PM',
                    midnight: 'nửa đêm',
                    noon: 'trưa',
                    morning: 'sáng',
                    afternoon: 'chiều',
                    evening: 'tối',
                    night: 'đêm'
                },
                wide: {
                    am: 'SA',
                    pm: 'CH',
                    midnight: 'nửa đêm',
                    noon: 'giữa trưa',
                    morning: 'vào buổi sáng',
                    afternoon: 'vào buổi chiều',
                    evening: 'vào buổi tối',
                    night: 'vào ban đêm'
                }
            },
            defaultFormattingWidth: 'wide'
        })
    };
n.Z = a;
