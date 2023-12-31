import HTML from './component.html'
import $ from 'jquery'
import './style.css'

export default () => {
    $("div[input-select]").each((_index, element) => {
        const label = $(element).attr("label")
        const optionsString = $(element).attr("options")
        const options: string[] = JSON.parse(optionsString)
        $(element).html(HTML)
        $(element).find(".dropdown-toggle").append(label).append($('<span class="caret"></span>'))
        options.forEach((option) => {
            const item = $(`<li><a href="#">${option}</a></li>`)
            $(element).find(".dropdown-menu").append(item)
        })
    })

}