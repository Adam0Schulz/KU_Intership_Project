import express from 'express';
import cors from "cors";
import connection from "./DatabaseConnection/connection";

const app = express()
const port = 5000

app.use(express.json())

const apple = {
        "database": "Pometum Apple key",
        "pages": [
            {
                "type": "home",
                "content": [
                    {
                        "title": "The Pometum Apple key",
                        "body": {
                            "heading": "",
                            "body": "The key includes 317 varieties of apple, that either are of danish origin or have been widely grown in Denmark. The varieties are part of the collection of apple varieties at the Pometum in Høje Tåstrup, at the Faculty of Science at the University of Copenhagen. The collection is part of NordGen."
                        }
                    }
                ]
            },
            {
                "type": "about",
                "content": [
                    {
                        "title": "About us",
                        "body": {
                            "heading": "",
                            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                    }
                ]
            }
        ],
        "contact": {
            "institution": "University of Copenhagen",
            "institutionWeb": "https://www.ku.dk",
            "department": "Department of Communication",
            "departmentWeb": "https://www.ku.dk/web",
            "team": "Web Development team",
            "email": "ku@ku.dk",
            "phone": 25457889,
            "address": {
                "country": "Denmark",
                "city": "Copenhagen",
                "district": "K",
                "postalCode": 1165,
                "addressDetail": "Nørregade 10"
            }
        },
        "mainEntity": "Apple Species"
    }

app.use(cors({
    credentials: true,
    origin: true
}));

app.get('/apple', (_, res) => {
    res.send(apple);
})

const test = async () => {
    const [rows, fields] = await connection().then(conn => {
        return conn.execute("SELECT * FROM user;")
    } )
    console.log(rows);
}
test();



app.listen(port, () => console.log(`Running on port ${port}`))