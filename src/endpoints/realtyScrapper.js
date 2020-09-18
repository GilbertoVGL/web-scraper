"use strict";
const realtyScrapper = require('../models/realtyScrapper');

class RealtyScrapperEndpoint {

    get(req, res) {
        realtyScrapper.RealtyScrapper.getRealties().then((data) => {
            // res.json({message: data});
            return;
        }).catch((err) => {
            console.log(err);
        });
    }
}

exports.RealtyScrapperEndpoint = RealtyScrapperEndpoint;