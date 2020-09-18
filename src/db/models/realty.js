"use strict"
const MongoClient = require('mongodb').MongoClient;
const dbConfig = require('../config/config');

class RealtyModel {
    #client
    async connectToRealtiesDb() {
        return new Promise((resolve, reject) => {
            const uri = `mongodb+srv://${dbConfig.user}:${dbConfig.password}@${dbConfig.cluster}.jstzv.mongodb.net/${dbConfig.dbName}?retryWrites=true&w=majority`;
            this.#client = new MongoClient(uri, { useNewUrlParser: true });

            this.#client.connect(err => {
                if (err) {
                    reject('unable to connect to Mongo: ', err);
                    return;
                }
                const db = this.#client.db(dbConfig.dbName);
                resolve(db);
            });
        });
    }
    
    async saveBatch(realties, database) {
        return new Promise((resolve, reject) => {
            if (realties.length < 1) {
                resolve();
                return;
            }

            database.collection(RealtyModel.REALTY_PATH).insertMany(realties).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    async closeConnection() {
        if (this.#client) {
            this.#client.close();
            this.#client = null;
        }

        return;
    }
}

exports.RealtyModel = RealtyModel;
RealtyModel.REALTY_PATH = 'realties';