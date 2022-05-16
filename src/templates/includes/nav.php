<?php?>
<nav class="navbar navbar-dark navnavbar-expand-lg navbar-floating" data-fixed-element="">
    <div class="container" id="navbarNav">
            <a class="navbar-brand" href="/">
                <img src="assets/images/logo.png" alt="logo" width="150">
            </a>
        <div class="navbar__list">
          =
            <ul class="navbar-nav navbar-nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link <?php echo getActiveLink($request, '/') ?>" aria-current="page" href="/">Strona główna</a>
                </li>
                <li class="nav-item dropdown__toggle">
                    <a class="nav-link <?php echo getActiveLink($request, '/menu') ?>" href="menu">Menu</a>
                    <i class="fas fa-arrow-circle-down dropdown__toggle--icon d-lg-none d-inline"></i>
                    <ul class="dropdown__list" aria-labelledby="">
                        <li>
                            <a href="sniadania">Śniadania</a>
                        </li>
                        <li>
                            <a href="menu-na-miejscu">Menu na miejscu</a>
                        </li>
                        <li>
                            <a href="boxy-catering-pudelkowy">Boxy catering pudełkowy</a>
                        </li>
                        <li>
                            <a href="catering-na-impreze">Catering na imprezę</a>
                        </li>
                        <li>
                            <a href="przystawki">Przystawki</a>
                        </li>
                        <li>
                            <a href="zupy">Zupy</a>
                        </li>
                        <li>
                            <a href="zupy-na-wynos">Zupy na wynos</a>
                        </li>
                        <li>
                            <a href="dania-glowne">Dania główne</a>
                        </li>
                        <li>
                            <a href="ciasta-i-desery">Ciasta i desery</a>
                        </li>
                        <li>
                            <a href="napoje-cieple">Napoje ciepłe</a>
                        </li>
                        <li>
                            <a href="napoje-zimne">Napoje zimne</a>
                        </li>
                        <li>
                            <a href="dodatki">Dodatki</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link <?php echo getActiveLink($request, '/catering') ?>" href="catering">Catering</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link <?php echo getActiveLink($request, '/galeria') ?>" href="galeria">Galeria</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link <?php echo getActiveLink($request, '/kontakt') ?>" href="kontakt">Kontakt</a>
                </li>
            </ul>
        
            <div class="nav--social">
            <ul class="navbar__list--social">
                <li>
                    <a href="#">
                        <i class="icon--header fab fa-facebook-square ms-0"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="icon--header fab fa-instagram-square"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="icon--header fab fa-twitter-square pe-0"></i>
                    </a>
                </li>
            </ul>
            </div>
        </div>
    </div>
    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="navbarNav" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button>
</nav>
<?php?>
