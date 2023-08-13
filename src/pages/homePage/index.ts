import { api } from "@js/api/axios";
import $ from 'jquery';
import components from "@js/components";
import BreadCrumbs from "@components/BreadCrumbs"
import SidebarNavigation from "@components/SidebarNavigation";
import InfoComp from "@components/InfoComp";
import TopMenu from "@components/TopMenu";
import SecondMenu from "@components/SecondMenu";
import LocalFooter from "@components/LocalFooter";

$(function() {

    TopMenu();
    SecondMenu();
    components(
        {
            searchSection: {
                heading: "Find Apple Species",
                subHeading: "Search for apples by name"

            },
            branding: {
                heading: "Apple database"
            } 
        }
    )
    BreadCrumbs([{ label: "Home", link: "", isActive: true }])
    SidebarNavigation({title: "Denmark's Apples", pages: [
            {pageTitle: 'Home', isActive: true},
            {pageTitle: 'Browse', isActive: false},
            {pageTitle: 'About', isActive: false}
        ]});
    InfoComp();
    LocalFooter({
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

    $("#page-heading").text("Some Heading")
    $("#page-paragraph").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ")

    $.get("http://localhost:8080/ku/footer", function(data) {
        $("footer").html(data);
    });
});

