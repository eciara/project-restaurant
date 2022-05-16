<?php  
    include("includes/head.php");
?>

<body class="page">

    <?php 
    include("includes/body-open.php");

    switch($request) {
        case '/':
            include("includes/header.php");
            include("views/home.php");
        break;
        case '/menu':
            include("includes/header.php");
            include("views/menu.php");
        break;
        case '/sniadania':
            include("includes/header.php");
            include("includes/subbaner.php");
            include("includes/baner-cta.php"); include("views/menu/sniadania.php");
        break;
        case '/menu-na-miejscu':
            include("includes/header.php");
            include("includes/subbaner.php");
            include("includes/baner-cta.php");
            include("views/menu/menu-na-miejscu.php");
        break;
        case '/boxy-catering-pudelkowy':
            include("includes/header.php");
            include("includes/subbaner.php");
            include("includes/baner-cta.php");
            include("views/menu/boxy-catering-pudelkowy.php");
        break;
        case '/catering-na-impreze':
            include("includes/header.php");
            include("includes/subbaner.php");
            include("includes/baner-cta.php");
            include("views/menu/catering-na-impreze.php");
        break;
        case '/przystawki':
            include("includes/header.php");
            include("includes/subbaner.php");
            include("includes/baner-cta.php"); include("views/menu/przystawki.php");
        break;
        case '/zupy':
            include("includes/header.php");
            include("includes/subbaner.php");
            include("includes/baner-cta.php");
            include("views/menu/zupy.php");
        break;
        case '/zupy-na-wynos':
            include("includes/header.php");
            include("includes/subbaner.php");
            include("includes/baner-cta.php");
            include("views/menu/zupy-na-wynos.php");
        break;
        case '/dania-glowne':
            include("includes/header.php");
            include("includes/subbaner.php");
            include("includes/baner-cta.php");
            include("views/menu/dania-glowne.php");
        break;
        case '/ciasta-i-desery':
            include("includes/header.php");
            include("includes/subbaner.php");
            include("includes/baner-cta.php");
            include("views/menu/ciasta-i-desery.php");
        break;
        case '/napoje-zimne':
            include("includes/header.php");
            include("includes/subbaner.php");
            include("includes/baner-cta.php");
            include("views/menu/napoje-zimne.php");
        break;
        case '/napoje-cieple':
            include("includes/header.php");
            include("includes/subbaner.php");
            include("includes/baner-cta.php");
            include("views/menu/napoje-cieple.php");
        break;
        case '/dodatki':
            include("includes/header.php");
            include("includes/subbaner.php");
            include("includes/baner-cta.php");
            include("views/menu/dodatki.php");
        break;
        case '/catering':
            include("includes/header.php");
            include("views/catering.php");
        break;
        case '/galeria':
            include("includes/header.php");
            include("views/galeria.php");
        break;      
        case '/kontakt':
            include("includes/header.php");
            include("views/kontakt.php");
        break;
        
        default:
        include("includes/header.php");
            include("includes/subbaner.php");
            include("includes/baner-cta.php");
            include("views/404.php");
        break;
    }

    include("includes/footer.php");
    include("includes/body-close.php");
?>

</body>

</html>


<?php

?>
