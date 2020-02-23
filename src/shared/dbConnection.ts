var mysql = require('mysql');

import { database } from '../../environment/env.json';

export function executeDBQueryInHH(query: string, value: any[]): Promise<any> {
  return new Promise((resolve, reject) => {
    var con = mysql.createConnection({
      host: database.host,
      port: database.port,
      user: database.user,
      password: database.password,
      database: database.database
    });
    con.connect(function(err: any) {
      if (err) {
        console.error('error connecting: ', err);
        return reject(err);
      }
      con.query(query, value, function(error: any, results: any, fields: any) {
        if (error) {
          console.error('error executing: ', error);
          return reject(err);
        }
        con.end();
        return resolve(results);
      });
    });
  });
}
export function executeDBQueryInLIBE(
  query: string,
  value: any[]
): Promise<any> {
  return new Promise((resolve, reject) => {
    var con = mysql.createConnection({
      host: database.host,
      port: database.port,
      user: database.user,
      password: database.password,
      database: database.database
    });
    con.connect(function(err: any) {
      if (err) {
        console.error('error connecting: ', err);
        return reject(err);
      }
      con.query(query, value, function(error: any, results: any, fields: any) {
        if (error) {
          console.error('error executing: ', error);
          return reject(err);
        }
        con.end();
        return resolve(results);
      });
    });
  });
}
