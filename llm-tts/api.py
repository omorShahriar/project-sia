from flask import Flask, request, jsonify,abort
from crew import SiaCrew


app = Flask(__name__)

@app.route('/api/crew', methods=['POST'])
def run_crew():
    data = request.json
    if not data or 'question' not in data:
        abort(400,description="Question is required")
    sia = SiaCrew(data['question'])
    result = sia.run()
    return jsonify({"status":"working","answer":result}),200

if __name__ == '__main__':
    app.run(debug=True,port=3001)