var superagent = require('superagent');
var cheerio = require('cheerio');
var async = require('async');
// var fs = require('fs');
/* require XLSX */
var XLSX = require('XLSX')

function datenum(v, date1904) {
    if (date1904) v += 1462;
    var epoch = Date.parse(v);
    return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
}

function sheet_from_array_of_arrays(data, opts) {
    var ws = {};
    var range = {
        s: {
            c: 10000000,
            r: 10000000
        },
        e: {
            c: 0,
            r: 0
        }
    };
    for (var R = 0; R != data.length; ++R) {
        for (var C = 0; C != data[R].length; ++C) {
            if (range.s.r > R) range.s.r = R;
            if (range.s.c > C) range.s.c = C;
            if (range.e.r < R) range.e.r = R;
            if (range.e.c < C) range.e.c = C;
            var cell = {
                v: data[R][C]
            };
            if (cell.v == null) continue;
            var cell_ref = XLSX.utils.encode_cell({
                c: C,
                r: R
            });

            if (typeof cell.v === 'number') cell.t = 'n';
            else if (typeof cell.v === 'boolean') cell.t = 'b';
            else if (cell.v instanceof Date) {
                cell.t = 'n';
                cell.z = XLSX.SSF._table[14];
                cell.v = datenum(cell.v);
            } else cell.t = 's';

            ws[cell_ref] = cell;
        }
    }
    if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
    return ws;
}


var url = "http://www.mp4ba.com/index.php?page=";
var urls = [];
for (var i = 1; i < 90; i++) {
    urls.push(url + i);
}
var items = [];

// getMP4(url);
function getMP4(url, filename) {
    superagent.get(url)
        .end(function(err, sres) {
            if (err) throw err;
            var $ = cheerio.load(sres.text, {
                ignoreWhitespace: true,
                xmlMode: true
            });
            var table = $.html('#listTable');
            $('#listTable tr').map(function(index, elem) {
                if (index != 0) {
                    var $td = $(this).children('td');
                    var dataArr = [
                        $td.eq(0).text(),
                        $td.eq(1).text(),
                        $td.eq(2).children('a').text(),
                        $td.eq(3).text(),
                        $td.eq(5).text()
                    ];
                    /*                    var data = {
                                            time: $td.eq(0).text(),
                                            type: $td.eq(1).text(),
                                            name: $td.eq(2).children('a').text(),
                                            size: $td.eq(3).text(),
                                            download: $td.eq(5).text(),
                                        };*/
                    // if ($td.eq(8).text()!= "专选") {
                    items.push(dataArr);
                    // };
                }
            });
            console.log(items);

            // fs.appendFile(filename, table, 'utf-8', function(err) {
            //     if (err) throw err;
            // });
        });
}
var concurrencyCount = 0;
var fetchUrl = function(url, callback) {
    var delay = parseInt((Math.random() * 10000000) % 2000, 10);
    concurrencyCount++;
    // console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');
    getMP4(url, 'mp4ba.html');
    setTimeout(function() {
        concurrencyCount--;
        callback(null, url + ' html content');
    }, delay);
};


async.mapLimit(urls, 10, function(url, callback) {
    // getMP4(url, 'mp4ba.html');
    fetchUrl(url, callback);
}, function(err, result) {
    console.log('final:');
    console.log(result);
    var ws_name = "SheetJS";

    function Workbook() {
        if (!(this instanceof Workbook)) return new Workbook();
        this.SheetNames = [];
        this.Sheets = {};
    }

    var wb = new Workbook(),
        ws = sheet_from_array_of_arrays(items);

    /* add worksheet to workbook */
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;

    /* write file */
    XLSX.writeFile(wb, 'mp4ba.xlsx');
});
