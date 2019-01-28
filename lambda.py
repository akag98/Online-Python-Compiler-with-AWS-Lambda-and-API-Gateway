import sys
from io import StringIO
import json

def lambda_handler(event, context):

    test_code = event['answer']
    # test_case = event['input']
    
    buffer = StringIO()
    sys.stdout = buffer

    try:
        exec(test_code)
    except:
        result = buffer.getvalue()
        return result

    sys.stdout = sys.__stdout__

    result = buffer.getvalue()

    return result

