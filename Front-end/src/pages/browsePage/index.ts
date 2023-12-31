import $ from 'jquery';
import components, { ActivePage } from "@js/components";
import HTML from './content.html';
import ItemCardList from '@components/ItemCardList';
import AlphabeticalFilter from '@components/AlphabeticalFilter';
import Pagination from '@components/Pagination';
import FilterSidebar, { InputType } from '@components/FilterSidebar';
import BrowseGuide from '@components/BrowseGuide';
import { mediaQuery } from "@utils";
import PageContentSection from "@components/PageContentSection";

$(function () {

    $('div[main-content]').replaceWith(HTML);
    components(
        {
            crumbsArray: [
                { label: "Browse", link: "", isActive: true }
            ],
            activePage: ActivePage.BROWSE
        }
    )
    PageContentSection([
        {
            heading: 'Browse page heading',
            body: 'Here you can browse amongst these beautiful pieces of data'
        }
    ], 0, true)
    FilterSidebar({
        inputProps: [
            {
                label: "Color",
                type: InputType.TEXT,
                isActive: false
            }, {
                label: "Shape",
                type: InputType.SELECT,
                isActive: false
            }, {
                label: "Seeds",
                type: InputType.CHECKBOX,
                isActive: false
            }],
        infoComp: () => {
            BrowseGuide({
                content: [
                    {
                        heading: "Section",
                        subsections: [
                            {
                                heading: "Subsection",
                                body: "Subsection content",
                            },
                            {
                                heading: "Subsection",
                                body: "Subsection content",
                                image: {
                                    label: "Option",
                                    url: "https://picsum.photos/300/200"
                                },
                            },
                            {
                                body: "Subsection content",
                                image: {
                                    label: "Option",
                                    url: "https://picsum.photos/300/200"
                                },
                            },
                            {
                                heading: "Subsection",
                                body: "Subsection content",
                                image: {
                                    label: "Option",
                                    url: "https://picsum.photos/300/200"
                                },
                            },
                        ],
                    },
                    {
                        heading: "Section",
                        body: "Section content",
                        filterOptions: [
                            {
                                text: "Option",
                                image: {
                                    label: "Option",
                                    url: "https://picsum.photos/300/200"
                                },
                            },
                            {
                                text: "Second Option",
                                image: {
                                    label: "Second Option",
                                    url: "https://picsum.photos/500/200"
                                },
                            },
                        ],
                    },
                    {
                        heading: "Subsection",
                        subsections: [
                            {
                                heading: "Subsection",
                                body: "Subsection content",
                                subsections: [
                                    {
                                        heading: "Subsection ",
                                        body: "Subsection content",
                                        image: {
                                            label: "Option",
                                            url: "https://picsum.photos/300/200"
                                        },
                                    },
                                ],
                                image: {
                                    label: "Option",
                                    url: "https://picsum.photos/300/200"
                                },
                            },
                        ],
                        body: "Subsection content",
                        image: {
                            label: "Option",
                            url: "https://picsum.photos/300/200"
                        },
                    },
                ],
            })
        }
    })
    Pagination({ numOfPages: 10 })
    AlphabeticalFilter()
    ItemCardList(
        {

            cards: [
                {
                    image: {
                        url: "https://picsum.photos/500/500",
                        label: "bla bla bla"
                    },
                    title: "option"
                },
                {
                    image: {
                        url: "https://picsum.photos/700/500",
                        label: "bla bla bla"
                    },
                    title: "option"
                },
                {
                    image: {
                        url: "https://picsum.photos/500/200",
                        label: "bla bla bla"
                    },
                    title: "option"
                },
                {
                    image: {
                        url: "https://picsum.photos/400/500",
                        label: "bla bla bla"
                    },
                    title: "option"
                },
                {
                    image: {
                        url: "https://picsum.photos/500/500",
                        label: "bla bla bla"
                    },
                    title: "option"
                }
            ],
        }
    )
    // ItemCardList({
    //     columns: ['Word', 'Class', 'Source'],
    //     cards: [
    //         {
    //             i1: "æble",
    //             i2: "sb.",
    //             i3: "Bornholms Ordbog"
    //         },
    //         {
    //             i1: "2æble",
    //             i2: "2sb.",
    //             i3: "2Bornholms Ordbog"
    //         },
    //         {
    //             i1: "3æble",
    //             i2: "3sb.",
    //             i3: "3Bornholms Ordbog"
    //         },
    //         {
    //             i1: "4æble",
    //             i2: "4sb.",
    //             i3: "4Bornholms Ordbog"
    //         },
    //         {
    //             i1: "5æble",
    //             i2: "5sb.",
    //             i3: "5Bornholms Ordbog"
    //         },
    //         {
    //             i1: "6æble",
    //             i2: "6sb.",
    //             i3: "6Bornholms Ordbog"
    //         }
    //     ]})
    mediaQuery(() => $("#browse-main__content .main-section-content").after($(".filter-bar")), () => $("#browse-main__filter-sidebar").append($(".filter-bar")), 768)
    //mediaQuery(() => $(".filter-bar__expandable").append($(".alpha-filter")), () => $("#browse-main__content .main-section-content").after($(".alpha-filter")), 768)
    $(window).resize(() => {
        mediaQuery(() => $("#browse-main__content .main-section-content").after($(".filter-bar")), () => $("#browse-main__filter-sidebar").append($(".filter-bar")), 768)
        //mediaQuery(() => $(".filter-bar__expandable").append($(".alpha-filter")), () => $("#browse-main__content .main-section-content").after($(".alpha-filter")), 768)
    });
});






