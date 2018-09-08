function dateShow(element){
	var newid = $(element).attr("id");
	var newid2 = "#" +newid + "_ido";
	//$(newid2).toggleClass("hidden");
	$(newid2).animate({
		height: 'toggle'
	});
}

function dayDiff(date1, date2)
{
	var date_now_ms = date1.getTime();
	var iterDate_ms = date2.getTime();
	var one_day = 1000*60*60*24;
	var diff_ms = iterDate_ms - date_now_ms;

	return Math.round(diff_ms/one_day) 
}

function timeLeft(element){
	var datum = new Date();
	var nap = datum.getDate();
	var ev = datum.getFullYear();
	var honap = datum.getMonth() + 1;
	var zh = $(element).attr("data-date");
	var result = zh.split("-");
	var iterDate = new Date();
	iterDate.setDate(result[2]);
	iterDate.setMonth(result[1]-1);
	iterDate.setFullYear(result[0]);
	var hatravan = dayDiff(datum, iterDate);
	console.log(hatravan);
	var newid = $(element).attr("id");
	var newid2 = "#" + newid + "_ido";
	zh = zh.replace(/-/gi, " - ");
	var outtxt = "Még "+hatravan+" nap van hátra a ZH-ig! <br><br>"+"Dátum: "+zh;
	$(newid2).html(outtxt);	
}

function eventAccordionToggle(element){
	console.log(element.id);
	var selector = '#'+element.id+' > h3';
	$(selector).toggleClass("active_event");
	var selector2 = '#' + element.id + '> div';
	$(selector2).animate({height: 'toggle'});

}