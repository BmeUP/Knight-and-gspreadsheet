import logging

logger = logging.getLogger('uvicorn')
log_info = logging.FileHandler('app.log')
log_info.setLevel(logging.INFO)
logger.addHandler(log_info)
