<?php 

define("PATH", $_SERVER['DOCUMENT_ROOT']);

// meta tagi podobne na kilku stronach
$metatags['robots'] = "index, follow";
$metatags['viewport'] = "width=device-width, initial-scale=1.0";


// pobranie aktualnego url-

// $request = $_SERVER['REQUEST_URI'];
$request = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$protocol = !empty($_SERVER['HTTPS']) ? 'https' : 'http';
$canonical = $protocol . '://' . $_SERVER['HTTP_HOST'] . $request;

switch($request) {
    case '/':
        $title = "Strona główna";
        $metatags['description'] = "Opis strony głównej";
    break;
    case '/menu':
        $title = "Menu";
        $subbanertitle = "Menu";
        $parent = "";
        $metatags['description'] = "Opis meta description podstrony o menu";
    break;
    case '/sniadania':
        $title = "Śniadania";
        $subbanertitle = "Śniadania";
        $parent = "menu";
        $metatags['description'] = "Opis meta description podstrony Śniadania";
    break;
    case '/menu-na-miejscu':
        $title = "Menu na miejscu";
        $subbanertitle = "Menu na miejscu";
        $parent = "menu";
        $metatags['description'] = "Opis meta description podstrony Menu na miejscu";
    break;
    case '/boxy-catering-pudelkowy':
        $title = "Boxy catering pudełkowy";
        $subbanertitle = "Boxy catering pudełkowy";
        $parent = "menu";
        $metatags['description'] = "Opis meta description podstrony Boxy catering pudełkowy";
    break;
    case '/catering-na-impreze':
        $title = "Catering na imprezę";
        $subbanertitle = "Catering na imprezę";
        $parent = "menu";
        $metatags['description'] = "Opis meta description podstrony Catering na imprezę";
    break;
    case '/przystawki':
        $title = "Przystawki";
        $subbanertitle= "Przystawki";
        $parent = "menu";
        $metatags['description'] = "Opis meta description podstrony Catering na Przystawki";
    break;
    case '/zupy':
        $title = "Zupy";
        $subbanertitle = "Zupy";
        $parent = "menu";
        $metatags['description'] = "Opis meta description podstrony Catering na Zupy";
    break;
    case '/zupy-na-wynos':
        $title = "Zupy na wynos";
        $subbanertitle = "Zupy na wynos";
        $parent = "menu";
        $metatags['description'] = "Opis meta description podstrony Catering na Zupy na wynos";
    break;
    case '/dania-glowne':
        $title = "Dania główne";
        $subbanertitle = "Dania główne";
        $parent = "menu";
        $metatags['description'] = "Opis meta description podstrony Catering na Dania główne";
    break;
    case '/ciasta-i-desery':
        $title = "Ciasta i desery";
        $subbanertitle = "Ciasta i desery";
        $parent = "menu";
        $metatags['description'] = "Opis meta description podstrony Catering na Ciasta i desery";
    break;
    case '/napoje-cieple':
        $title = "Napoje ciepłe";
        $subbanertitle = "Napoje ciepłe";
        $parent = "menu";
        $metatags['description'] = "Opis meta description podstrony Catering na Napoje ciepłe";
    break;
    case '/napoje-zimne':
        $title = "Napoje zimne";
        $subbanertitle = "Napoje zimne";
        $parent = "menu";
        $metatags['description'] = "Opis meta description podstrony Catering na Napoje zimne";
    break;
    case '/dodatki':
        $title = "Dodatki";
        $subbanertitle = "Dodatki"; 
        $parent = "menu";
        $metatags['description'] = "Opis meta description podstrony Catering na Dodatki";
    break;
    case '/catering':
        $title = "Catering";
        $subbanertitle = "Catering"; 
        $parent = "";
        $metatags['description'] = "Opis meta description podstrony catering";
    break;
    case '/galeria':
        $title = "Galeria";
        $subbanertitle = "Galeria";
        $parent = "";
        $metatags['description'] = "Opis meta description podstrony galeria";
    break;
    case '/kontakt':
        $title = "Kontakt";
        $subbanertitle = "Kontakt";
        $parent = "";
        $metatags['description'] = "Opis meta description podstrony kontakt";
    break;
    default:
        $title = "404";
        $subbanertitle = "404";
        $subtitle = "404";
        $metatags['description'] = "Nie ma takiej strony";
        header("HTTP/1.0 404 Not Found");
    break;
}

// aktywny link na podstronach
function getActiveLink($request, $param) {
    if($request == $param) {
        echo "active";
    }
}

?>