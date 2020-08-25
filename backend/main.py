from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel, Json

from pymongo import MongoClient
from passlib.hash import pbkdf2_sha256
from jose import JWTError, jwt


class User(BaseModel):
    name: str
    password: str


class Method(BaseModel):
    method: str
    data: dict

class Token(BaseModel):
    access_token: str

app = FastAPI()
client = MongoClient('localhost', 27017)

db = client.Users
SECRET = '0767e00916f9d1ddc7d369b1d5d2a50f36831e7208ed16c2e8397a85cd3a4650'
ALGORITHM = "HS256"

def create_jwt(data: dict):
    to_encode = data.copy()
    encoded_jwt = jwt.encode(to_encode, SECRET, ALGORITHM)
    return encoded_jwt

@app.post('/secret-data/')
def check_jwt(token: Token):
    payload = jwt.decode(token.access_token, SECRET, ALGORITHM)
    user = db.users.find_one(
            {
                "name": payload.get('sub'),
            }
        )
    return user.get('name')



def create_user(user: User):
    data = {
        "name": user.get("name"),
        "password": pbkdf2_sha256.hash(user.get("password"))
    }

    return {"ok": f"{db.users.insert_one(data).inserted_id}"}

def login(user: User):
    res = db.users.find_one(
            {
                "name": user.get("name")
            }, {"_id": False}
        )

    pass_check = pbkdf2_sha256.verify(user.get('password'), res.get('password'))
    if pass_check:
        return create_jwt({"sub": res.get('name')})
    else:
        return {"Fail": "Login failed!"}



@app.post("/user/")
async def create_item(method: Method):
    if method.method == 'create_user':
        return await create_user(method.data)
    elif method.method == 'login':
        return login(method.data)
