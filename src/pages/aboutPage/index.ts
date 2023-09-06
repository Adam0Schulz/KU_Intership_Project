import $ from 'jquery';
import components from "@js/components";
import HTML from './content.html';
import ContactSidebar from "@components/ContactSidebar";

$(function () {

    $('div[main-content]').replaceWith(HTML);
    components(
        {
            branding: {
                heading: "About"
            },
            crumbsArray: [
                {label: "About", link: "", isActive: true}
            ],
            pageConfig: {
                title: "About",
                pages: [
                    {pageTitle: 'Home', isActive: false},
                    {pageTitle: 'Browse', isActive: false},
                    {pageTitle: 'About', isActive: true},
                    {pageTitle: 'Detail', isActive: false}
                ]
            },
            contact: {
                institution: 'Københavns Universitet',
                institutionWeb: 'http://www.kommunikation.ku.dk',
                department: 'Kommunikation',
                departmentWeb: 'http://www.kommunikation.ku.dk',
                address: {
                    country: 'Denmark',
                    city: 'København',
                    district: 'K',
                    postalCode: 1165,
                    addressDetail: 'Nørregade 10'
                },
                team: 'Web Team',
                email: 'FA-webredaktor@adm.ku.dk',
                phone: 4535324261
            }
        }
    );
    ContactSidebar( {
        institution: 'Københavns Universitet',
            institutionWeb: 'http://www.kommunikation.ku.dk',
            department: 'Kommunikation',
            departmentWeb: 'http://www.kommunikation.ku.dk',
            address: {
            country: 'Denmark',
                city: 'København',
                district: 'K',
                postalCode: 1165,
                addressDetail: 'Nørregade 10'
        },
        team: 'Web Team',
            email: 'FA-webredaktor@adm.ku.dk',
            phone: 4535324261
    });
    $('title').text("About us");
    $("#page-heading").text("About us")
    const img = 'https://science.ku.dk/kontakt/billeder/bulowsvejtopbillede.png';
    img && $(`<img src="${img}" alt="our team photo" >`).insertBefore($('#page-heading'))
    $("#page-paragraph").text("Here you can read about us")
    $.get("http://localhost:8080/ku/footer", function (data) {
        $("footer").replaceWith(data);
    });
});



