from flask import Flask, jsonify, request
import json
import pandas as pd
import numpy as np
import openai
import pandas as pd
import pickle
import tiktoken

COMPLETIONS_MODEL = "text-davinci-003"
EMBEDDING_MODEL = "text-embedding-ada-002"

openai.api_key = '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'

app = Flask(__name__)

@app.route('/llm', methods=['GET'])

def llm():
    request_data = request.get_json()
    print(request_data)
    df = pd.DataFrame(request_data)
    print(df)
    
    def get_embedding(text: str, model: str=EMBEDDING_MODEL) -> list[float]:
        result = openai.Embedding.create(
        model=model,
        input=text
        )
        return result["data"][0]["embedding"]

    def compute_doc_embeddings(df: pd.DataFrame) -> dict[tuple[str, str], list[float]]:
        """
        Create an embedding for each row in the dataframe using the OpenAI Embeddings API.
        
        Return a dictionary that maps between each embedding vector and the index of the row that it corresponds to.
        """
        return {
            idx: get_embedding(r.context) for idx, r in df.iterrows()
        }
    
    def load_embeddings(fname: str) -> dict[tuple[str, str], list[float]]:
        """
        Read the document embeddings and their keys from a CSV.
        
        fname is the path to a CSV with exactly these named columns: 
            "title", "heading", "0", "1", ... up to the length of the embedding vectors.
        """
        
        df = pd.read_csv(fname, header=0)
        max_dim = max([int(c) for c in df.columns if c != "title" and c != "heading"])
        return {
            (r.title, r.heading): [r[str(i)] for i in range(max_dim + 1)] for _, r in df.iterrows()
        }
    
    document_embeddings = compute_doc_embeddings(df)
    print(type(document_embeddings))
    return jsonify(document_embeddings)       

if __name__ == '__main__':
    app.run(debug=True)        