import HTML from "./component.html"
import $ from "jquery"

export default (heading?: string) => {
    $("div[branding]").html(HTML)

    $(".branding__img-link").attr("title", heading)
    $(".branding__heading").text(heading)

}
