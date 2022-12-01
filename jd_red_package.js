var jd = JSON.parse($response.body);
(jd.data.result.supportCashOut=1,jd.data.result.canExchangeRedpack=1,jd.data.result.withdrawList[0].status=1,jd.data.result.withdrawList[1].status=1,jd.data.result.withdrawList[2].status=0), $done({
	body: JSON.stringify(jd)});
