$(function(){
	var html = '';
	$.get("http://47.104.244.134:8080/goodsbytid.do",{ 
		tid: 13,
		page: 1,
		limit:13
		},
	
	function(data){
		let obj = data.data;
		console.log(obj);
		for (let i = 1; i < obj.length; i++) {
			let data = obj[i];
			console.log(data);
			let picurl = obj[i].picurl.split("!")[0];
			console.log(picurl);
			// console.log(html);
			html +=
				`
		    <li class="wei_wrap_two">
			<a href="index-si.html?id=${data.id}"><img src="${picurl}" alt="" class="title_img""></a>
			<span class="price">${data.price}元</span>
			<div class="titleBox">
				
				<span class=" list_lable_self"></span>
				<a href="" class="wei_wrap_wu">${data.name}</a>
				
			</div>
		</li>
		`
		
	// })
			
		
		}
		var content_ul = document.querySelector('.wei_wrap_ove');
		// console.log(html)
		content_ul.innerHTML = html;
		});
	
	
})
