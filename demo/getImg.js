var request = require('request');
var superagent = require('superagent');
var cheerio = require('cheerio');
var parse = require('superagentparse');
// url 模块是Node 标准库的
var url = require('url');
var async = require('async');
var fs = require('fs');


var Url = [];
for (var i = 1; i < 5; i++) {
	Url.push("http://www.meizitu.com/a/list_1_" + i+".html")
};
var imgSrc = [];
async.mapLimit(Url,1, function (item, callback) {
	console.log(item);
	downloadImg(item);
	// request(item).pipe(fs.createWriteStream('./images/meizitu' + item.slice(-8)));
	setTimeout(function(){
	    callback(null, item);
	}, 500);
}, function (err,res) {
	console.log(err);
	// console.log(res);
});
function downloadImg (siteUrl) {

	superagent.get(siteUrl)
	    .end(function(err, res) {
	        if (err || res.statusCode !== 200) console.error(err);
	        var $ = cheerio.load(res.text);
	        var topicUrls = [];
	        $('.pic a').each(function(index, element) {
	            var href = $(element).attr('href');
	            topicUrls.push(href);
	        });
	        async.mapLimit(topicUrls, 5,
	            function(url, callback) {
	                superagent.get(url)
	                    .parse(parse('gbk'))
	                    .end(function(err, res) {
	                        if (err || res.statusCode !== 200) console.error(err);
	                        var $ = cheerio.load(res.text);
	                        var title = $('.metaRight a').text();
	                        $('#picture img').each(function(index, el) {
	                            var src = $(el).attr('src');
	                            imgSrc.push(src);
	                            var imgName = src.slice(-18).replace(/\//g,'-');
	                        	// console.log(imgName);
	                            request(src).pipe(fs.createWriteStream('./images/meizitu/' + imgName));
	                        });
	                        console.log(title);
	                        setTimeout(function() {
	                            callback(null, imgSrc);
	                        }, 500);
	                    })
	            },
	            function(err, result) {
	                console.log('final:');
	                console.log(result);

	            });
	    })

}
