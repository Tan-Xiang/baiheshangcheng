$(function() {
				//console.log(location.search);
				//返回URL的查询部分
				var pid = location.search.split("=")[1];
				$.get("http://47.104.244.134:8080/goodsbyid.do", {
						id: pid,
					},
					function(data) {
						let picurl = data.picurl.split("!")[0];
						console.log(picurl);
						console.log(data);
						var html = "";
						html +=
							`
							<div class="detailcenter">
							
								<div class="left">
									<div class="my-foto">
										<img class="big" src="${data.picurl}">
									</div>
								</div>
								<div class="right">
									<p class="one">${data.name}</p>
									<p class="three">
										<i>￥${data.price}</i>
									<p class="two"> 官方直销 会员尊享</p>
										<p class="three">
											<i>￥999</i>
											<span>特惠价 : </span>
										</p>
										<p class="four"><span class="tequan">特权</span><span class="cccc">承诺保价一个月，买贵退差</span></p>
										<p class="five">客户评价：<span class="star"></span><span class="ping">评论：129</span></p>
										<p class="six"></p>
										<p class="seven"></p>
										<p class="eight">贝贝网于2016年5月12日起全面推行</p>
										<p class="nine">支持货到付款，送货上门，安全放心！</p>
										<p class="ten">下单前请先联系客服核对产品库存和区域是否在安装范围内，以便给您提供更好的服务！</p>
									<a href="index-wu.html"><button type="button" class="addp-btn">加入购物车</button>
			<button type="button" class="shou">收藏商品</button>							
									</a>
									
									</div>
					`;

						var detail = document.querySelector(".detail");
						detail.innerHTML = html;
						$('.addp-btn').on('click', function() {
										console.log(666);
										$.get("http://47.104.244.134:8080/cartsave.do",{
											gid:pid,
											token:3,
										},
										function(data){
											console.log(data);
											
										})
									})
					})
			})
