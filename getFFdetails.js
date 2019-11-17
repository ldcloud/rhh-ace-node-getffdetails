const http = require('http');
const fs = require('fs');
var jsonQuery = require('json-query');

//console.log(result);
http.createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();

var freqFlyerData = {
    "frequentFlyers": [
        {
        "firstName":"Andre",
        "lastName":"McGuire",
        "frequentFlyerNo": "1343767",
        "frequentFlyerLevel": "Gold",
        "preferredLanguage": "pt-PT",
        "mobileNumber": "0450100890",
        "emailAddress": "a.mcguire@leonardo.com.au",
        "contactPreference": "Email"
        },
        { "firstName":"Phil",
        "lastName":"Ogilvie",
            "frequentFlyerNo": "1928765",
            "frequentFlyerLevel": "Silver",
            "preferredLanguage": "de",
            "mobileNumber": "0404000219",
            "emailAddress": "p.ogilvie@leonardo.com.au",
            "contactPreference": "SMS"
        },
        { "firstName":"Alice",
        "lastName":"White",
            "frequentFlyerNo": "987164327",
            "frequentFlyerLevel": "Bronze",
            "preferredLanguage": "en",
            "mobileNumber": "0404291291",
            "emailAddress": "alice.white@example.com",
            "contactPreference": "Push"
        },
        { "firstName":"Alex",
        "lastName":"Smith",
            "frequentFlyerNo": "239867401",
            "frequentFlyerLevel": "ClubMember",
            "preferredLanguage": "en",
            "mobileNumber": "0400333888",
            "emailAddress": "alex.smith@example.com",
            "contactPreference": "Push"
        },
        { "firstName":"Laura",
        "lastName":"Brown",
            "frequentFlyerNo": "211843921",
            "frequentFlyerLevel": "Platinum",
            "preferredLanguage": "en",
            "mobileNumber": "0422222222",
            "emailAddress": "laura.brown@example.com",
            "contactPreference": "Email"
        }
    ]
};

var resultPayload = jsonQuery('frequentFlyers[**][frequentFlyerNo=' + body + ']', {
    data: freqFlyerData
}).value;

console.log(body);

response.statusCode = 201;
response.setHeader('Content-Type', 'application/json');
// response.setHeader('User-Agent', 'PhilTest');

const responseBody = { headers, method, url, body };

response.write(JSON.stringify(resultPayload));
fs.writeFileSync('textresponse-9321.txt', JSON.stringify(resultPayload), () => {});
fs.writeFileSync('headers-9321.txt', JSON.stringify(responseBody.headers), () => {});

response.end();

    });
}).listen(9321);