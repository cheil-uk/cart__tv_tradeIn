var cheillondon = cheillondon || {};

cheillondon.targetBoilerplate = (function () {
    'use strict';
    //One big object that contains all the functions
const cartObject = {
    init: () => {
        cartObject.doEverythingTimeout();
    },
    doEverythingTimeout: () => {
        const e = this;
        setTimeout(() => { window.$ ? ( cartObject.kickoff(), cartObject.appendNewStyle() ) : e.doEverythingTimeout();
        }, 5000);
    },
    appendNewStyle: () => {
    //find a way to implement scss
    const head = document.head || document.getElementsByTagName("head")[0],
    style = document.createElement("style");
    (style.type = "text/css"),
    style.styleSheet
        ? (style.styleSheet.cssText =
                `.tv-trade-in-container {
                color: black;
                padding: 5px;
                border: 1.4px solid #136ff2;
                margin: 10px 0px;
                border-radius: 2px;
                }
                .tv-trade-in-container strong {
                font-family: SamsungOne700,Arial,Helvetica,sans-serif;
                }
                `)
        : style.appendChild(
                document.createTextNode(
                    `.tv-trade-in-container {
                    color: black;
                    padding: 5px;
                    border: 1.4px solid #136ff2;
                    margin: 10px 0px;
                    border-radius: 2px;
                    }
                    .tv-trade-in-container strong {
                    font-family: SamsungOne700,Arial,Helvetica,sans-serif;
                    }
                    `
                )
            ),
    head.appendChild(style);
    },
    kickoff: () => {
    console.log('we have kickoff') // this is purely for testing
    const cartWrappers = document.querySelectorAll('.delivery-info-description-wrapper');
    const addTagging = (el, attrs) => {
        for(let key in attrs) {
        el.setAttribute(key, attrs[key]);
        }
    }
    function tagging(data) {
        s.linkTrackVars = "eVar41,events";
        s.linkTrackEvents = "scAdd,scView";
        s.events = "scAdd,scView";
        s.eVar41 = data;
        s.tl(this, 'o');
    };
    const spreadsheetSkus = [
    "QE85QN900ATXXU","QE75QN900ATXXU","QE65QN900ATXXU","QE85QN800ATXXU","QE75QN800ATXXU","QE65QN800ATXXU","QE75QN700ATXXU","QE65QN700ATXXU","QE55QN700ATXXU",

    "QE85QN95AATXXU","QE75QN95AATXXU","QE65QN95AATXXU","QE55QN95AATXXU","QE85QN94CATXXU","QE75QN94AATXXU","QE65QN94AATXXU","QE55QN94AATXXU","QE50QN94AATXXU","QE43QN94AATXXU","QE98QN90AATXXU","QE85QN90AATXXU","QE75QN90AATXXU","QE65QN90AATXXU","QE55QN90AATXXU","QE50QN90AATXXU","QE43QN90AATXXU","QE85QN85AATXXU","QE75QN85AATXXU","QE65QN85AATXXU","QE55QN85AATXXU",

    "QE85QN900BTXXU","QE75QN900BTXXU","QE65QN900BTXXU","QE85QN800BTXXU","QE75QN800BTXXU","QE65QN800BTXXU","QE75QN700BTXXU","QE65QN700BTXXU","QE55QN700BTXXU",

    "QE85QN95BATXXU","QE75QN95BATXXU","QE65QN95BATXXU","QE55QN95BATXXU","QE85QN90BATXXU","QE75QN90BATXXU","QE65QN90BATXXU","QE55QN90BATXXU","QE50QN90BATXXU","QE43QN90BATXXU","QE85QN85BATXXU","QE75QN85BATXXU","QE65QN85BATXXU","QE55QN85BATXXU"
    ];
        cartWrappers.forEach((cartWrapper) => { // Loop through each cartWrapper
            for (const skus in spreadsheetSkus) { // Loop through each sku
            const currentCartSku = cartWrapper.querySelector('.info-left-code');
                if (Object.hasOwnProperty.call(spreadsheetSkus, skus)) { // Check if sku is in spreadsheet
                const spreadsheetSkuValue = spreadsheetSkus[skus];
                    if ( currentCartSku.innerText === spreadsheetSkuValue ) {
                        const tvTradeInContainer = document.createElement('div');
                        tvTradeInContainer.classList.add('tv-trade-in-container');
                        tvTradeInContainer.innerHTML =
                        `<p><strong>TV Trade-up:</strong> Free delivery, collection & recycling of your old TV is included with all options (usually £20). Please select the delivery and/or installation options you need. Your old TV will be collected when we deliver your new one.</p>`;
                        cartWrapper.append(tvTradeInContainer);
                        //after appending cart wrapper, add the tagging
                        document.querySelectorAll('.info-right-checkbox-wrapper').forEach((x) => {
                            const input = x.children[0].children[0];
                            addTagging(input,
                            { "data-omni-type"    : "microsite",
                                "data-omni"       : `uk:228:cart:tv trade up:${spreadsheetSkuValue}`,
                                "ga-ac"           : "pd buying tool",
                                "ga-ca"           : "option click"
                            });
                            input.onclick = () => {
                                tagging($(this).attr('data-omni'));
                            }
                        })
                    }
                }
            }
        });
    }

};

    return { main: cartObject };
}());
cheillondon.targetBoilerplate.main.init()