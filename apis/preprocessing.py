import re
from typing import Set
from transformers import GPT2TokenizerFast

import numpy as np
from nltk.tokenize import sent_tokenize
from flask import Flask, jsonify, request
import json
import pandas as pd
tokenizer = GPT2TokenizerFast.from_pretrained("gpt2")
import nltk
nltk.download('punkt')
app = Flask(__name__)
@app.route('/token_converter', methods=['GET'])

def token_converter():
    request_data = request.get_json()
    # print(request_data['prompts'])
    # df = pd.read_json(request_data['prompts'], orient = 'records')
    # prompts = df['prompts']
    # df = pd.DataFrame(prompts, columns=['prompts'])
    df = pd.DataFrame(request_data['prompts'])
    print(df)

    # Define a function to extract the heading and context from a prompt
    # def extract_heading_context(df):
    #     heading = df['heading']
    #     context = df['context']
    #     return pd.Series({'heading': heading, 'context': context})

    # df['heading'] = pd.Series(dtype=str)
    # df['context'] = pd.Series(dtype=str)
    # # Apply the function to the prompts column and expand the result into separate columns
    # df['heading', 'context'] = df.apply(extract_heading_context)

    # Drop the original prompts column
    # df = df.drop('prompts', axis=1)

    def count_tokens(text: str) -> int:
        """count the number of tokens in a string"""
        return len(tokenizer.encode(text))

    def reduce_long(
        long_text: str, long_text_tokens: bool = False, max_len: int = 590
    ) -> str:
        """
        Reduce a long text to a maximum of `max_len` tokens by potentially cutting at a sentence end
        """
        if not long_text_tokens:
            long_text_tokens = count_tokens(long_text)
        if long_text_tokens > max_len:
            sentences = sent_tokenize(long_text.replace("\n", " "))
            ntokens = 0
            for i, sentence in enumerate(sentences):
                ntokens += 1 + count_tokens(sentence)
                if ntokens > max_len:
                    return ". ".join(sentences[:i]) + "."

        return long_text

    tokens = []

    max_len: int = 1500
    for i in range(len(df)):
        tokens.append(count_tokens(reduce_long(df['context'][i],max_len)))
        
    df['tokens'] = tokens    
    print(df.head())
    
    request_data_json = df.to_json()
    print(request_data_json)
    return jsonify(request_data_json)
 

if __name__ == '__main__':
    app.run(debug=True)    