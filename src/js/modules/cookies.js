var cookies = function () {
    (function () {
        var cookies = {
            options: {
                fontSize: '14px',
                lineHeight: '19px',
                position: "bottom",
                cookieText: "Używamy plików cookies, aby ułatwić Ci korzystanie z naszego serwisu oraz do celów statystycznych. Korzystając z naszej strony wyrażasz zgodę na wykorzystywanie przez nas plików cookies. Jeśli nie blokujesz tych plików, to zgadzasz się na ich użycie oraz zapisanie w pamięci urządzenia. Pamiętaj, że możesz samodzielnie zarządzać cookies, zmieniając ustawienia przeglądarki.",
                cookieAgree: "OK",
                background: "#fff",
                textColor: "#232a2c",
                textAlign: "left",
                buttonBackground: "#ffd114",
                buttonTextColor: "#232a2c", 
                buttonFontSize: "15px",
                buttonTextTop: "12px",
                buttonTextLeft: "0px",
                buttonBorderRadius: "50%",
                buttonBorderColor: '#232a2c',
                circleBackground: "#232a2c",
                hover: {
                    buttonBackground: "#232a2c",
                    buttonTextColor: "#fff",
                    circleBackground: "#232a2c"
                },
                paddingTop: "15px",
                paddingBot: "15px",
                expires: 365,
                id: 'q-cookie-box',
                name: 'q_cookie_agree',
            },
            createCookiesHtml: function () {
                var cookiesBar = document.createElement('div');
                var cookiesText = document.createElement('div');
                var cookiesBtnBox = document.createElement('div');
                var cookieBtn = document.createElement('span');

                cookiesText.innerHTML = this.options.cookieText;
                cookiesBar.id = this.options.id;
                cookiesText.classList.add('qcb-text');
                cookiesBtnBox.id = 'qcb-close-btn';
                cookieBtn.id = 'qcb-c-1';
                cookieBtn.innerText = this.options.cookieAgree
                cookieBtn.addEventListener('click', this.hideCookies.bind(this));

                cookiesBtnBox.appendChild(cookieBtn);
                cookiesBar.appendChild(cookiesText);
                cookiesBar.appendChild(cookiesBtnBox);

                return cookiesBar;
            },
            cookiesStyles: function () {
                var styles = document.createElement('style');

                styles.setAttribute('type', 'text/css');
                styles.innerHTML = '#' + this.options.id + ' { background: ' + this.options.background + ';width: 100%;position:fixed;bottom:0px;left: 0;right: 0px;margin: 0px auto;height:auto;padding: ' + this.options.paddingTop + ' 0px ' + this.options.paddingBot + ' 0px;z-index:65465465656;text-align:center;-webkit-transition: all 0.3s ease;-moz-transition: all 0.3s ease;-o-transition: all 0.3s ease;transition: all 0.3s ease; box-shadow: 0px 0 2px #6f6f6f;} #' + this.options.id + ' * { -webkit-box-sizing: initial !important;-moz-box-sizing: initial !important;box-sizing: initial !important;} #' + this.options.id + ' .qcb-text { color: ' + this.options.textColor + ';font-size: ' + this.options.fontSize + ';line-height: ' + this.options.lineHeight + ';text-align: ' + this.options.textAlign + ';margin: 0 15px 0 15px;width: auto;padding-right: 60px;-webkit-transition: all 0.3s ease;-moz-transition: all 0.3s ease;-o-transition: all 0.3s ease;transition: all 0.3s ease;} #' + this.options.id + ' .qcb-text a:hover { color: ' + this.options.textColor + ';} #' + this.options.id + ' #qcb-close-btn { position: absolute;right: 10px;top: -25px;cursor: pointer;} #' + this.options.id + ' #qcb-c-1 { background: ' + this.options.buttonBackground + ';border: 0px solid ' + this.options.buttonBorderColor + ';border-radius: ' + this.options.buttonBorderRadius + ';width: 45px;height: 45px;color: ' + this.options.buttonTextColor + ';font-weight: bold;font-size: ' + this.options.buttonFontSize + ';text-align: center;padding: 0;margin: 0;position: relative;right: 0;top: 0;display: block;-webkit-transition: all 0.3s ease;-moz-transition: all 0.3s ease;-o-transition: all 0.3s ease;transition: all 0.3s ease;} #' + this.options.id + ' #qcb-close-btn:hover #qcb-c-1 { background: ' + this.options.hover.buttonBackground + '!important;color: ' + this.options.hover.buttonTextColor + ' !important;} #' + this.options.id + ' #qcb-c-1 {line-height:45px;} #' + this.options.id + ' #qcb-c-2 { width: 11px;height: 11px;background: ' + this.options.circleBackground + ';border: 1px solid white;border-radius: 20px;position: absolute;bottom: -4px;left: -1px;-webkit-transition: all 0.3s ease;-moz-transition: all 0.3s ease;-o-transition: all 0.3s ease;transition: all 0.3s ease;} #' + this.options.id + ' #qcb-close-btn:hover #qcb-c-2 { background: ' + this.options.hover.circleBackground + ' !important;} @media (max-width: 767px) { #' + this.options.id + ' .qcb-text {text-align: justify; }} @media (max-width: 450px) { #' + this.options.id + ' .qcb-text { margin: 25px 15px 0 15px; padding-right: 0px; }#' + this.options.id + ' #qcb-close-btn { position: absolute;right: 10px;top: -25px;left: 10px;margin: 0px auto;width: 52px;cursor: pointer;}}';
                return styles;
            },
            cookiesStyleNew: function (elements) {

            },
            getCookieValue: function () {
                var cookies = document.cookie.split("; ");
                for (var i = 0; i < cookies.length; i++) {
                    var cookieName = cookies[i].split("=")[0]; //nazwa ciastka
                    var cookieValue = cookies[i].split("=")[1]; //wartoÅÄ ciastka

                    if (cookieName === this.options.name) {
                        return cookieValue;
                    }

                }
                return 0;
            },
            showCookieBar: function () {
                var body = document.querySelector('body');
                body.appendChild(this.cookiesStyles());
                body.appendChild(this.createCookiesHtml());
            },
            setCookies: function () {
                var data = new Date();
                data.setTime(data.getTime() + (this.options.expires * 24 * 60 * 60 * 1000))
                var expires = "; expires=" + data.toGMTString();
                document.cookie = "q_cookie_agree=1" + expires + "; path=/;SameSite=Lax;";
            },
            hideCookies: function () {
                this.setCookies();
                document.getElementById(this.options.id).style.display = 'none';
            },
            initCookies: function () {
                if (!this.getCookieValue()) {
                    this.showCookieBar()
                }
            },
        }
        cookies.initCookies()
    })()
}

export default cookies;
