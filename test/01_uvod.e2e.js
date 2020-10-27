
describe('Web Czechitas', () => {
    it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {
        // jdi na adresu https://www.czechitas.cz/cs

        // //CVICENI 1 BONUS
        // browser.url('https://www.czechitas.cz/cs/');

        // browser.$('#footer').scrollIntoView()
        // browser.$('.newsletter-email').setValue('muj@email.com')
        // browser.maximizeWindow()
        // browser.pause(5000)
        // browser.minimizeWindow()
        // browser.pause(1000)

        // //CVICENI 2 navigation
        // const pauseMs = 1000 // pro zjednoduseni zmeny cekani - rychleji, pomaleji
        // browser.url('https://www.czechitas.cz/cs/');

        // browser.url('https://seznam.cz')
        // browser.pause(pauseMs)
        // browser.url('')
        // browser.pause(pauseMs)
        // browser.url('/portfolio')
        // browser.back()
        // browser.pause(pauseMs)
        // browser.forward()
        // browser.pause(pauseMs)
        // browser.refresh()
        // browser.pause(pauseMs)

        // //CVICENI 2 get page title, current url and  page source
        // browser.url('https://www.czechitas.cz/cs/');
        // console.log(browser.getUrl())
        // console.log(browser.getTitle())
        // console.log(browser.getPageSource().length);

        // //CVICENI 2 BONUS
        // let showTitleAndUrl = () => {
        //     console.log(browser.getUrl())
        //     console.log(browser.getTitle())
        // }

        // browser.url('https://www.czechitas.cz/cs/')
        // showTitleAndUrl()
        // browser.url('/portfolio')
        // showTitleAndUrl()

        // //CVICENI 3a
        // browser.url('https://www.czechitas.cz/cs/')
        // browser.saveScreenshot('screen-main-page.png')
        // browser.url('/portfolio')
        // browser.saveScreenshot('screen-portfolio.png')

        // //CVICENI 3b
        // let date = new Date().valueOf()
        // browser.url('https://www.czechitas.cz/cs/')
        // browser.saveScreenshot(date + '-screen-main-page.png')
        // browser.url('/portfolio')
        // browser.saveScreenshot(date + '-screen-portfolio.png')

        // CVICENI 3b otazky
        // Proč definujeme proměnnou a nepoužijeme 
        // browser.saveScreenshot(new Date().valueOf() + 'nazev.png')
        // V čem je rozdíl?
        //
        // promennou inicializujeme jen jednou, pak dostavame stejny prefix (cislo)
        // pro vsechny screenshoty. Pri pouziti ve funkci screenshot 
        // je datum (v ms) vytvoreno znovu a znovu a prefix je pak vzdy jiny

        // //CVICENI 3 BONUS
        // const datum = new Date();
        // const format = `${datum.getFullYear()}-${datum.getMonth()+1}-${datum.getDate()}_${datum.getHours()}-${datum.getMinutes()}-${datum.getSeconds()}`
        // browser.url('https://www.czechitas.cz/cs/')
        // browser.saveScreenshot(format + '-screen-main-page.png')
        // browser.url('/portfolio')
        // browser.saveScreenshot(format + '-screen-portfolio.png')
    });
});
