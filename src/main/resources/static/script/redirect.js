$('a').removeClass('active');
$('a:contains(Statistiques)').addClass('active');
//$("#main-content").load("page/statistiques.html");

function show(page) {
	if (page == 'login') {
		$('a').removeClass('active');
		$('a:contains(login)').addClass('active');
		$("#main-content").load("page/login.html");

		event.preventDefault();
	}
	if (page == 'pharmacies') {
		$('a').removeClass('active');
		$('a:contains(Pharmacies)').addClass('active');
		$("#main-content").load("page/pharmacie.html");

		event.preventDefault();
	}
	if (page == 'listepharmacies') {
		$('a').removeClass('active');
		$('a:contains(ListePharmacies)').addClass('active');
		$("#main-content").load("page/listepharmacies.html");

		event.preventDefault();
	}
	if (page == "statistiques") {
		$('a').removeClass('active');
		$('a:contains(Statistiques)').addClass('active');
		$("#main-content").load("page/statistiques.html");
		event.preventDefault();
	}
	if (page == "villes") {
		$('a').removeClass('active');
		$('a:contains(Villes)').addClass('active');
		$("#main-content").load("page/ville.html");
		event.preventDefault();
	}
	if (page == "zones") {
		$('a').removeClass('active');
		$('a:contains(Zones)').addClass('active');
		$("#main-content").load("page/zone.html");
		event.preventDefault();
	}
	if (page == "gardes") {
		$('a').removeClass('active');
		$('a:contains(gardes)').addClass('active');
		$("#main-content").load("page/pharmacieGarde.html");
		event.preventDefault();
	}
	if (page == 'register') {
		$('a').removeClass('active');
		$('a:contains(register)').addClass('active');
		$("#main-content").load("page/register.html");

		event.preventDefault();
	}
}
