function keamanan(){
	var hasil = false;
	while (hasil==false) {
		var angka1 = Math.floor(Math.random() * Math.floor(20));
		var angka2 = Math.floor(Math.random() * Math.floor(20));
		var jawaban = prompt("pertanyaan keamanan " + angka1 + "+" + angka2);
		var benar = angka1 + angka2;

		if (jawaban==benar) {
			hasil = true
		}
	}
}

keamanan();

function waktu(){
	var waktu = document.querySelector("#waktu");
	var jam = new Date().getHours();
	if (jam>=5 && jam<=10){
		waktu.innerText = 'Pagi';
	} else if (jam>=11 && jam<=14) {
		waktu.innerText = 'Siang';
	} else if (jam>=15 && jam<=18) {
		waktu.innerText = 'Sore';
	} else { 
		waktu.innerText = 'Malam';
	}
}

waktu();
	