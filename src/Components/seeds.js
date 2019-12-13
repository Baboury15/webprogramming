const pg = require('pg');

console.log('SEED IS RUNNING');



const create = `
	CREATE TABLE pricings (
		id serial PRIMARY KEY,
		Hair_Style text,
        Price  text
        
        
	);
`;

const insert = `
INSERT INTO pricings (Hair_Style, Price) VALUES ('HighFade ', '$25'),('waves','$25'),('ShortHair','$20');
`;
const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

db.connect();

db.query(create)
	.then(({ rows = [] }) => {
		console.log('create ran successfully');
		return rows;
	})
	.catch(err => {
		console.error(err);
		console.error(err.stack);
	});

db.query(insert)
	.then(({ rows = [] }) => {
		console.log('insert ran successfully');
		return rows;
	})
	.catch(err => {
		console.error(err);
		console.error(err.stack);
	});