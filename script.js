var book = new Array();
book = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с',
'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

function nospace(str) { 
	var VRegExp = new RegExp(/^(\s|\u00A0)+/g); 
	var VResult = str.replace(VRegExp, ''); 
	return VResult 
}

function Crypt() {
	var message = nospace(document.getElementById('message').value.toLowerCase());
	var key = nospace(document.getElementById('key').value.toLowerCase());

	var result = "";
	var index = 0;

	if (message == '' && key == '') {
		alert('Все поля должны быть заполнеными');
		return;
	}

	for (var i = 0; i < message.length; i++) {
		var symbol = message[i];
		var c = (book.indexOf(symbol) + book.indexOf(key[index])) % book.length;
		console.log(c);

		result += book[c];
		index++;
		if ((index + 1) == key.length)
			index = 0;
	}
	document.getElementById('message').value = result;
}

// 12 + 15

function Decrypt() {
	var message = nospace(document.getElementById('message').value.toLowerCase());
	var key = nospace(document.getElementById('key').value.toLowerCase());

	var result = "";
	var index = 0;

	for (var i = 0; i < message.length; i++) {
		var symbol = message[i];
		var p = (book.indexOf(symbol) + book.length - book.indexOf(key[index])) % book.length;

		result += book[p];
		index++;
		if ((index + 1) == key.length)
			index = 0;
	}
	document.getElementById('message').value = result;
}