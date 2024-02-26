// let jsonApiUrl = "https://api.npoint.io/4f873e4b9815ba27c13a";
let jsonApiUrl = "../partials/api.json";
let siteData = {};
let skillsWrap = $("#skills-wrapper");
let certificatesWrap = $("#certificates-markup-wrap");
let portfolioWrap = $("#portfolio-markup-wrap");

axios.get(jsonApiUrl).then((data) => {
    drawData(data.data);
}).catch((error) => {
    showToast("something wrong...", "error");
});

function chunkArray(arr, chunkSize = 2) {
    const chunks = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        chunks.push(chunk);
    }

    return chunks;
}

function drawChunkedCertificates(arr) {
    let markup = '';

    arr.forEach(elem => {
        markup += `<div class="col-lg-6 certificates-text pl-3 pt-2">
            <h6 class="mb-3 text-center">
                <span class="text-muted">${elem.dates}</span>
                ${elem.title}
            </h6>
            <div class="col-lg-12 img-certificates">
                <a class="popup-link" href="${elem.img}">
                    <img class="img-fluid" title="ZOOM IMAGE" src="${elem.imgCover}" alt="${elem.title}">
                </a>
            </div>
        </div>`
    });

    return markup;
}

function drawSiteUrl(data) {
    if (data.url) {
        return `URL: <a class="siteurl" target="_blank" href="${data.url}">${data.name}</a>`;
    }

    return 'URL: <b class="text-danger">Page closed</b>';
}

function drawTechnologies(technologies) {
    let technologiesMarkup = '';
    
    technologies.split(',').forEach(tech => {
        technologiesMarkup += `<a href="#">${tech}</a>`
    });

    return technologiesMarkup;
}

function drawData(response) {
    siteData = response;

    // DRAW SKILLS
    for (const skill in siteData.skills) {
        skillsWrap.append(`
            <div class="col-lg-3 col-md-4 col-sm-6 skills">
                <span class="fa-5x">
                    <img src="${siteData.skills[skill].img}" alt="HTML">
                </span>
                <h4 class="skills-heading">${siteData.skills[skill].title}</h4>
            </div>
        `)
    }
    

    // DRAW CERTIFICATES
    let certs = chunkArray(Object.values(siteData.certificates))

    certs.forEach(certList => {
        certificatesWrap.append(`<div class="col-lg-12 mt-3">
            <div class="row">
                ${drawChunkedCertificates(certList)}
            </div>
        </div>`)
    });

    // DRAW PORTFOLIOS
    for (const portfolio in siteData.portfolios) {
        portfolioWrap.append(`
            <div class="col-lg-4 col-md-6 col-sm-6 portfolio-item">
                <div class="portfolio-link" data-key="${portfolio}">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="${siteData.portfolios[portfolio].coverImage}" alt="${siteData.portfolios[portfolio].id}">
                </div>
                <div class="portfolio-caption">
                    <h4>${siteData.portfolios[portfolio].name}</h4>
                    <p class="text-muted">${siteData.portfolios[portfolio].type}</p>
                </div>
            </div>
        `)
    }

    $('.spinning-wrap').remove();
    $(".popup-link").magnificPopup({
        type: "image",
        mainClass: "mfp-with-zoom",
        zoom: {
          enabled: !0,
          duration: 300,
          easing: "ease-in-out",
          opener: function (e) {
            return e.is("img") ? e : e.find("img");
          },
        },
    });
}

$(document).on("click", ".portfolio-link", function (e) {
    let modal = $("#portfolio-modal");
    let elem = $(this);
    let data = siteData.portfolios[elem.attr("data-key")];

    if (data) {
        modal.find('#portfolio-modal-content').html(`
            <div class="col-lg-9 mx-auto">
                <h2 class="text-uppercase">${data.title}</h2>
                <ul class="list-inline">
                    <li>RELEASE DATE: <b>${data.releaseDate}</b></li>
                    <li>${drawSiteUrl(data)}</li>
                </ul>
                <div class="technologies col-lg-8 mx-auto">
                    <h5 class="mt-2">Technologies used</h5>
                    <div class="p-3">
                        ${drawTechnologies(data.technologies)}
                    </div>
                </div>
                <hr>
                <p id="portfolio-description" class="p-3">${data.description}</p>
                <div id="portfolion-content">
                    <img class="img-fluid d-block mx-auto" src="${data.coverImage}" alt="">
                    <hr>
                    <br>
                    <img class="img-fluid d-block mx-auto" src="${data.fullImage}" alt="">
                </div>
            </div>
        `)
        
        setTimeout(() => {
            modal.modal();
        }, 100);
    }
});