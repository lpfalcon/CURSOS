import json
import boto3
import uuid
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('RatingsTableTest')

def lambda_handler(event, context):
    http_method = event['httpMethod']
    
    if http_method == 'POST':
        return add_rating(event)
    else:
        return {
            'statusCode': 405,
            'body': json.dumps('Method Not Allowed')
        }

def add_rating(event):
    body = json.loads(event['body'])
    item_id = str(uuid.uuid4())
    rating = body['rating']
    
    response = table.put_item(
        Item= {'item_id': item_id,'rating':  rating}
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('Rating added successfully')
    }

