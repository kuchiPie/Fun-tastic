from flask import Flask, jsonify, request
import json

app = Flask(__name__)

@app.route('/process_prompts', methods=['POST'])
def process_prompts():
    # Get the request data as a JSON object
    request_data = request.get_json()

    # Extract the prompts from the request data
    prompts = request_data['prompts']

    # Process the prompts
    processed_prompts = []
    for prompt in prompts:
        heading = prompt['heading']
        context = prompt['context']
        # Do something with the heading and context
        # For example, you could store them in a database or analyze the text

        # Add the processed prompt to the list of processed prompts
        processed_prompt = {
            'heading': heading,
            'context': context,
            'processed': True  # Replace this with the result of your processing
        }
        processed_prompts.append(processed_prompt)

    # Return the processed prompts as a JSON response
    response_data = {
        'processed_prompts': processed_prompts
    }
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
