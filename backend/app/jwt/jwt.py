from jose import jwt
from ..db.database import db
from ..logger.main_logger import logger

SECRET = '0767e00916f9d1ddc7d369b1d5d2a50f36831e7208ed16c2e8397a85cd3a4650'
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
