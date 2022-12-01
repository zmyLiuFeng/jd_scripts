var jd = JSON.parse($response.body);
(jd.data.result.withdrawList[0].status=0,jd.data.result.withdrawList[1].status=0,jd.data.result.withdrawList[2].status=0), $done({
	body: JSON.stringify(jd)});
