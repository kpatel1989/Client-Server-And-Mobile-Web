$(document).ready(function() {
	window.data = {
		"meat": [
			{
				"id" : 0,
				"price" : "9.95",
				"name": "Carved Turkey",
				"image" : "images/CarvedTurkey.jpg"
			},
			{
				"id" : 1,
				"price" : "6.95",
				"name": "Chicken Bacon Ranch",
				"image" : "images/ChickenAndBacon.jpeg"
			},
			{
				"id" : 2,
				"price" : "8.20",
				"name": "Ham",
				"image" : "images/Ham.jpeg"
			},
			{
				"id" : 3,
				"price" : "8.20",
				"name": "Italian BMT",
				"image" : "images/ItalianBMT.jpeg"
			},
			{
				"id" : 4,
				"price" : "7.35",
				"name": "Oven Roasted Chicken",
				"image" : "images/OvenRoasted.jpg"
			},
			{
				"id" : 5,
				"price" : "8.50",
				"name": "Pizza Sub",
				"image" : "images/Pizza_SubCheese.jpg"
			},
			{
				"id" : 6,
				"price" : "6.90",
				"name": "Veggie Delite",
				"image" : "images/VeggieDelight.jpg"
			},
			{
				"id" : 7,
				"price" : "8.50",
				"name": "Falafel",
				"image" : "images/falafel.png"
			},
			{
				"id" : 8,
				"price" : "8.50",
				"name": "Steak and Cheese",
				"image" : "images/steakAndCheese.png"
			},
			{
				"id" : 9,
				"price" : "8.50",
				"name": "Subway Club",
				"image" : "images/subwayClub.png"
			}
		],
		"bread" : [
			{
				"id": 0,
				"name" : "Italian",
				"image" : "images/italian-bread.jpg"
			},
			{
				"id": 1,
				"name" : "Italian Herbs and Cheese",
				"image" : "images/italian-herbs-and-bread.jpg"
			},
			{
				"id": 2,
				"name" : "9 Grain",
				"image" : "images/9-grain-bread.jpg"
			},
			{
				"id": 3,
				"name" : "9 Grain Honey-oat",
				"image" : "images/9-grain-honey-oat.jpg"
			},
			{
				"id": 4,
				"name" : "Flat Bread White",
				"image" : "images/flat-bread-white.jpg"
			},
			{
				"id": 5,
				"name" : "Multi Grain Flat Bread",
				"image" : "images/multi-grain-flat-bread.jpg"
			}
		],
		"size" : []
	}
	function buildMeatSection() {
		$.each(data.meat,function(index,obj) {
			var meatItem = $("<li></li>");
			meatItem.append("<img src='"+obj.image+"'/><span class='meat-name'>"+obj.name+"</span><div class='controls'><span class='price'>$"+obj.price+"</span><input type = 'button' value = 'Add To Cart' id = 'addToCart' data-id='"+obj.id+"' class = 'btn btn-primary addToCart'></div>");			
			$(".meat-list").append(meatItem);
		});
	}

	// function buildBreadSection() {
	// 	$.each(data.bread,function(index,obj) {
	// 		var meatItem = $("<li></li>");
	// 		meatItem.append("<input type='radio' name='bread-radio-button' value='"+obj.id+"' class='bread-radio-button'/><img src='"+obj.image+"'/><span class='bread-name'>"+obj.name+"</span><div class='controls'></div>");			
	// 		$(".bread-list").append(meatItem);
	// 	});	
	// }

	function setupLocalStorage() {
		if (typeof(Storage) !== "undefined") {
		    var subwayCart = localStorage.getItem("subwayCart") || "{}";
		    window.cart = JSON.parse(subwayCart);
		    $.each(cart,function(id,quantity) {
	    		if (cart[id] == 0) {
	    			delete cart[id];
	    		}
		    });
		    updateBadge();
		} else {
		    alert("Local Storage not supported");
		}
	}
	function updateBadge() {
		var total = 0;
		$.each(Object.values(cart),function(index,value){
			total += value;
		});
		$(".shopping-badge").text(total);
	}
	function addToLocalStorage(id) {
		cart[id] = cart[id] || 0;
		cart[id]++;
		localStorage.setItem("subwayCart",JSON.stringify(cart));
		updateBadge();
	}
	function removeFromLocalStorage(id) {
		cart[id] = cart[id] || 0;
		if (cart[id] != 0) {
			cart[id]--;
		}
		localStorage.setItem("subwayCart",JSON.stringify(cart));
		updateBadge();
	}
	function setToLocalStorage(id,qty)
	{
		cart[id] = qty || 0;
		localStorage.setItem("subwayCart",JSON.stringify(cart));
		updateBadge();
	}

	function showItemsInCart()
	{
		$("#shoppingCart tbody").html("");
		var count=1;
		var grandTotal = 0;
		$.each(cart,function(id,quantity){
			var sand = data.meat[id];
			var tr = $("<tr></tr>");
			
			var srno = $("<td class='text-right'></td>");
			srno.text(count++);
			tr.append(srno);
			
			var sandwichName = $("<td></td>");
			sandwichName.text(sand.name);
			tr.append(sandwichName);

			var price = $("<td class='text-right'></td>");
			price.text("$"+sand.price);
			tr.append(price);
			
			var qty = $("<td class='text-right quantityValue'> <span class='glyphicon glyphicon-plus-sign add-btn' data-id='"+id+"'/> <input type='text' value='"+quantity+"' data-id='"+id+"' class='qty-text-view'/> <span class='glyphicon glyphicon-minus-sign minus-btn'data-id='"+id+"'/></td>");
			// qty.text(quantity);
			tr.append(qty);

			var t = parseFloat(sand.price) * quantity;
			grandTotal += t;

			var subTotal = $("<td class='text-right sub-total'></td>");
			subTotal.text("$" + Number(t).toFixed(2));
			tr.append(subTotal);
			
			$("#shoppingCart tbody").append(tr);
			
			
		});
		$("#total").html("$"+Number(grandTotal).toFixed(2));
		$("#hst").html("$"+Number(0.13*grandTotal).toFixed(2));
		$("#grandTotal").html("$"+Number(0.13*grandTotal+grandTotal).toFixed(2));
		addQuantityButtonListeners();
	}

	function updateTotal() {
		var grandTotal = 0;
		$.each(cart,function(id,quantity){
			var sand = data.meat[id];
			var t = parseFloat(sand.price) * quantity;
			grandTotal += t;
		});
		$("#total").html("$"+Number(grandTotal).toFixed(2));
		$("#hst").html("$"+Number(0.13*grandTotal).toFixed(2));
		$("#grandTotal").html("$"+Number(0.13*grandTotal+grandTotal).toFixed(2));
	}

	function addQuantityButtonListeners()
	{
					
		$(".add-btn").click(function(evt){
			var id = $(this).data("id");
			addToLocalStorage(id);
			$(this).next().val(cart[id]);
			$(this).parent().next().text("$"+Number(cart[id]*(data.meat[id].price)).toFixed(2));
			updateTotal();
		});
		$(".minus-btn").click(function(evt){
			var id = $(this).data("id");
			removeFromLocalStorage(id)
			$(this).prev().val(cart[id]);
			$(this).parent().next().text("$"+Number(cart[id]*(data.meat[id].price)).toFixed(2));
			updateTotal();
		});
		$(".qty-text-view").keyup(function(evt){
				var id = $(this).data("id");
			if (evt.keyCode >= 48 && evt.keyCode <= 57) {
				
			} else {
				evt.preventDefault();
				evt.stopPropagation();

			}
			if($(this).val() == "") {
				$(this).val("0");

			}
			setToLocalStorage(parseInt(id),parseInt($(this).val()));
			$(this).parent().next().text("$"+Number(cart[id]*(data.meat[id].price)).toFixed(2));
			updateTotal();
		});
	}
;

	setupLocalStorage();
	buildMeatSection();
	// buildBreadSection();

	$(".addToCart").click(function(){
		var id = $(this).data("id");
		addToLocalStorage(id);
	});


	$("#buildYourOrderHeader").click(function(evt){
		$(".build-your-order").show();
		$(".cart").hide();
		$(".home-page").hide();
		$("#buildYourOrderHeader").parent().addClass("active");
		$("#cartHeader").parent().removeClass("active");
	});
	$("#cartHeader").click(function(evt){
		$(".build-your-order").hide();
		$(".cart").show();
		$(".home-page").hide();
		$("#cartHeader").parent().addClass("active");
		$("#buildYourOrderHeader").parent().removeClass("active");
		showItemsInCart();
		$("#checkout").click(function(){
			var hasItems = false;
			$.each(cart,function(id,quantity){
				if (cart[id] != 0) {
					hasItems = true;
				}
			});
			if (Object.keys(cart).length == 0 || !hasItems) {
				alert("You have no sandwiches in your cart.");
			} else {
				alert("Thank you for placing your order. Your order will be ready in 15 minutes.");
				window.location.reload();
			}
		});
	});

	
});