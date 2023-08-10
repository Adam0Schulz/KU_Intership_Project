import HTML from "./component.html"
import "./../../global.css"
import "./style.css"
import $ from "jquery"

export default (heading?: string, subHeading?: string) => {
    $("div[search-section]").html(HTML)

    $(".search--large__heading").text(heading)
    $(".search--large__subHeading").text(subHeading)

}

