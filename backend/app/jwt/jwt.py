import os
from jose import jwt
from ..db.database import db

SECRET = str(os.environ.get('SECRET'))
ALGORITHM = "HS256"


def create_jwt(data: dict):
    to_encode = data.copy()
    encoded_jwt = jwt.encode(to_encode, SECRET, ALGORITHM)
    return encoded_jwt


def check_jwt(token):
    payload = jwt.decode(token, SECRET, ALGORITHM)
    user = db.Users.find_one(
            {
                "email": payload.get('email')
            }, {"_id": False}
    )

    if user:
        return True
