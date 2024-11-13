var simplemaps_countrymap_mapdata = {
    main_settings: {
        //General settings
        width: "500", //'700' or 'responsive'
        background_color: "#ffffff",
        background_transparent: "yes",
        border_color: "#ffffff",

        //State defaults
        state_description: "State description",
        state_color: "#88A4BC",
        state_hover_color: "#3B729F",
        state_url: "",
        border_size: "0",
        all_states_inactive: "no",
        all_states_zoomable: "yes",

        //Location defaults
        location_description: "Location description",
        location_url: "",
        location_color: "#FF0067",
        location_opacity: 0.8,
        location_hover_opacity: 1,
        location_size: 25,
        location_type: "square",
        location_image_source: "frog.png",
        location_border_color: "#FFFFFF",
        location_border: 2,
        location_hover_border: 2.5,
        all_locations_inactive: "no",
        all_locations_hidden: "no",

        //Label defaults
        label_color: "#d5ddec",
        label_hover_color: "#d5ddec",
        label_size: 22,
        label_font: "Arial",
        hide_labels: "no",
        hide_eastern_labels: "no",

        //Zoom settings
        // zoom: "yes",
        // manual_zoom: "yes",
        // back_image: "no",
        // initial_back: "no",
        // initial_zoom: "-1",
        // initial_zoom_solo: "yes",
        // region_opacity: 1,
        // region_hover_opacity: 0.6,
        // zoom_out_incrementally: "yes",
        // zoom_percentage: 0.99,
        // zoom_time: 0.5,

        //Popup settings
        popup_color: "white",
        popup_opacity: 0.9,
        popup_shadow: 1,
        popup_corners: 5,
        popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
        popup_nocss: "no",

        //Advanced settings
        div: "map",
        auto_load: "yes",
        url_new_tab: "no",
        images_directory: "default",
        fade_time: 0.1,
        link_text: "View Website",
        popups: "detect",
        state_image_url: "",
        state_image_position: "",
        location_image_url: "",
        border_hover_size: ""
    },
    state_specific: {
        LKA2448: {
            description: " "
        },
        LKA2449: {
            description: " "
        },
        LKA2450: {
            description: " "
        },
        LKA2451: {
            description: " "
        },
        LKA2452: {
            description: " "
        },
        LKA2453: {
            description: " "
        },
        LKA2454: {
            description: " "
        },
        LKA2455: {
            description: " "
        },
        LKA2456: {
            description: " "
        },
        LKA2457: {
            description: " "
        },
        LKA2458: {
            description: " "
        },
        LKA2459: {
            description: " "
        },
        LKA2460: {
            description: " "
        },
        LKA2461: {
            description: " "
        },
        LKA2462: {
            description: " "
        },
        LKA2463: {
            description: " "
        },
        LKA2464: {
            description: " "
        },
        LKA2465: {
            description: " "
        },
        LKA2466: {
            description: " "
        },
        LKA2467: {
            description: " "
        },
        LKA2468: {
            description: " "
        },
        LKA2469: {
            description: " "
        },
        LKA2470: {
            description: " "
        },
        LKA2471: {
            description: " "
        },
        LKA2472: {
            description: " "
        }
    },
    locations: {},
    labels: {},
    legend: {
        entries: []
    },
    regions: {
        "0": {
            states: [
                "LKA2456",
                "LKA2457",
                "LKA2458",
                "LKA2459",
                "LKA2460"
            ],
            name: "Northern Province",
            color: "#40b040",
            hover_color: "#140101",
            description: "",
            url: "http://localhost:3000/Home/Northern",
            target :"_blank"
        },
        "1": {
            states: [
                "LKA2455",
                "LKA2453"
            ],
            name: "North Central Province",
            color: "#b97818",
            hover_color: "#140101",
            description: "",
            url: "http://localhost:3000/Home/North-Central"
        },
        "2": {
            states: [
                "LKA2461",
                "LKA2462"
            ],
            name: "North Western Province",
            color: "#38fcf8",
            hover_color: "#140101",
            description: "",
            url: "http://localhost:3000/Home/North"
        },
        "3": {
            states: [
                "LKA2470",
                "LKA2471",
                "LKA2472"
            ],
            name: "Western Province",
            color: "#ff12c2",
            hover_color: "#140101",
            description: "",
            url: "http://localhost:3000/Home/Western"
        },
        "4": {
            states: [
                "LKA2448",
                "LKA2449",
                "LKA2450"
            ],
            name: "Central Province",
            color: "#7afe5a",
            hover_color: "#140101",
            description: "",
            url: "http://localhost:3000/Home/Central"
        },
        "5": {
            states: [
                "LKA2451",
                "LKA2452",
                "LKA2454"
            ],
            name: "Eastern Province",
            color: "#ffe51f",
            hover_color: "#140101",
            description: "",
            url: "http://localhost:3000/Home/Eastern"
        },
        "6": {
            states: [
                "LKA2467",
                "LKA2468"
            ],
            name: "Uva Province",
            color: "#ffaa3d",
            hover_color: "#140101",
            description: "",
            url: "http://localhost:3000/Home/Uva"
        },
        "7": {
            states: [
                "LKA2463",
                "LKA2469"
            ],
            name: "Sabaragamuwa Province",
            color: "#5343fb",
            hover_color: "#140101",
            description: "",
            url: "http://localhost:3000/Home/Sabaragamuwa"
        },
        "8": {
            states: [
                "LKA2464",
                "LKA2465",
                "LKA2466"
            ],
            name: "SouthernProvince",
            color: "#fe2525",
            hover_color: "#140101",
            description: "",
            url: "http://localhost:3000/Home/Southern"
        }
    }
};