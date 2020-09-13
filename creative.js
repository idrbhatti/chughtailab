var Creative = {
    macros: {
        AGENCY_NAME: "inter-act",
        AGENCY_ID: 1,
        ADVERTISER_NAME: "default advertiser",
        ADVERTISER_ID: 1,
        CAMPAIGN_NAME: "default campaign",
        CAMPAIGN_ID: 1,
        CREATIVE_NAME: "default creative",
        CREATIVE_ID: 1,
        ORGANIZATION_NAME: "inter-act",
        ORGANIZATION_ID: 1
    },
    tags: {
        // count impressions
        conversionViewTag: "",

        // count audience engagement in conversation
        conversionEngagementTag: "",

        // count conversation conplete
        conversionViewThroughTag: "",

        // count open of URL to ratgeted landing page
        conversionClickTag: "",

        // count user contact information collection
        conversionDataCollecitonTag: ""
    },
    segments: [
        // examples segments:
        {name:"segment1", type:"script", keywords:["keyword 1.1"],                params:[{searchTerm:"", replaceTerm:""}], tag:""}, // add pixel script code here
        {name:"segment2", type:"script", keywords:["keyword 2.1"],                params:[{searchTerm:"", replaceTerm:""}], tag:""}, // add pixel script code here
        {name:"segment3", type:"script", keywords:["keyword 3.1"],                params:[{searchTerm:"", replaceTerm:""}], tag:""}, // add pixel script code here
        {name:"segment4", type:"script", keywords:["keyword 4.1"],                params:[{searchTerm:"", replaceTerm:""}], tag:""}, // add pixel script code here
        {name:"segment5", type:"script", keywords:["keyword 5.1"],                params:[{searchTerm:"", replaceTerm:""}], tag:""}, // add pixel script code here
        {name:"segment6", type:"script", keywords:["keyword 6.1", "keyword 6.2"], params:[{searchTerm:"", replaceTerm:""}], tag:""}  // add pixel script code here
    ]
};