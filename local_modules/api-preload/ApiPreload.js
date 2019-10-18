
class ApiPreload {

    constructor(hrefs = []) {
        this.hrefs = hrefs
        this.elHead = document.getElementsByTagName('head')[0];
    }

    load() {
        this.hrefs.forEach(href => {
            const elLink = document.createElement('link')
            elLink.rel = 'preload'
            elLink.as = 'fetch'
            elLink.href = href
            //elLink.type = 'application/json'
            elLink.setAttribute('crossorigin', 'anonymous')
            this.elHead.appendChild(elLink)
        })
    }

}

export default ApiPreload