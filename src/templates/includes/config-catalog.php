<?php 
// dla katalogu z szablonami
$template_directory = 'demo11';

define("PATH", $_SERVER['DOCUMENT_ROOT']);

// meta tagi podobne na kilku stronach
$metatags['robots'] = "index, follow";
$metatags['viewport'] = "width=device-width, initial-scale=1.0";


// pobranie aktualnego url-

$request = $_SERVER['REQUEST_URI'];
if(isset($template_directory) && strpos($request, $template_directory)){
    $request = str_replace( "/" . $template_directory , "", $request);
}
if( strlen($request) > 1){
    $request = rtrim($request, '/');
}

switch($request) {
    case '/':
        $title = "Strona główna";
        $metatags['description'] = "Opis strony głównej";
    break;
    case '/o-nas':
        $title = "O nas";
        $metatags['description'] = "Opis meta description podstrony o nas";
    break;
    case '/oferta':
        $title = "Oferta";
        $metatags['description'] = "Opis meta description podstrony oferta";
    break;
    case '/galeria':
        $title = "Galeria";
        $metatags['description'] = "Opis meta description podstrony galeria";
    break;
    case '/kontakt':
        $title = "Kontakt";
        $metatags['description'] = "Opis meta description podstrony kontakt";
    break;
    default:
        $title = "";
        $metatags['description'] = "";
    break;
}

// aktywny link na podstronach
function getActiveLink($request, $param) {
    if($request == $param) {
        echo "nav__link--active";
    }
}

?>