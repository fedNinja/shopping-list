//using single global state object
var obj={
	items : []
},
strItemPre = ('<li>'+
	'<span class="shopping-item">'),
strItemPost = ('</span>'+
	'<div class="shopping-item-controls">'+
	'<button class="shopping-item-toggle">'+
	'<span class="button-label">check</span>'+
	'</button>'+
	' <button class="shopping-item-delete">'+
	'<span class="button-label">delete</span>'+
	'</button>'+
	'</div>'+
	'</li>');

//Function to get new item for list
var addItem=function(obj, item){
	obj.items.push(item);
};

//Function to append new item in the list with same format
var appendToList=function(obj, element,strItem1, strItem2){
	var itemsHTML = obj.items.map(function(item) {
		return(strItem1+item+strItem2);
	});
	element.append(itemsHTML);
	obj.items = [];
};

//function to delete an item from the list permanently
var deleteFromList = function(elem){
	console.log(elem.closest('li'));
	elem.closest('li').remove();
}

var toggleCheck = function(elem){
	console.log(elem);
	elem.closest('li span').toggleClass('shopping-item__checked');
}


$(function() {
	

	$('form#js-shopping-list-form').on('submit',function(e){
		e.preventDefault();
		console.log($('#shopping-list-entry').val().length);
		if(($('#shopping-list-entry').val().length)!=0) addItem(obj, $('#shopping-list-entry').val());
		appendToList(obj, $('.shopping-list'),strItemPre,strItemPost);

	}); 

	$('.shopping-item-delete').on('click', function(e){
		console.log("I am here");
		deleteFromList($(e.currentTarget));
	});

	$('.shopping-item-toggle').on('click', function(e){
		//	console.log($('li span:first-child'));
			toggleCheck($(e.currentTarget));
			/*$('li span:first-child').toggleClass('shopping-item__checked');*/
		/*}*/

	});

    

});


